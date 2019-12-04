import os, json, time, random
from typing import List, Set
from collections import OrderedDict
from nltk.tokenize import word_tokenize
from multiprocessing import Manager

random.seed(22)
base_url = 'https://en.wikipedia.org/?curid={}'


class DisjointSet:
    def __init__(self, n, comp):
        self.parent = [i for i in range(n)]
        self.rank = [0 for _ in range(n)]
        self.comp = comp
        self.n = n

    def run(self):
        for i in range(self.n):
            for j in range(i + 1, self.n):
                if self.comp(i, j):
                    self.union(i, j)

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        xroot = self.find(x)
        yroot = self.find(y)
        if xroot == yroot:
            return
        if self.rank[xroot] < self.rank[yroot]:
            self.parent[xroot] = yroot
        elif self.rank[xroot] > self.rank[yroot]:
            self.parent[yroot] = xroot
        else:
            self.parent[yroot] = xroot
            self.rank[xroot] += 1


def acronym(phrase: str, stopwords: Set[str], ner=None):
    cap = lambda x: x[0].upper() + x[1:]

    def with_dot(l):
        s = set()
        for x in l:
            s.update({x, x + '.'})
        return s

    time_name = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october',
                 'november', 'december', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    if phrase.lower() in time_name:
        abbr = with_dot([cap(phrase[:3])])
        if phrase.lower() == 'september':
            abbr.update(with_dot(['Sept']))
        elif phrase.lower() == 'tuesday':
            abbr.update(with_dot(['Tu', 'Tues']))
        elif phrase.lower() == 'thursday':
            abbr.update(with_dot(['Thur', 'Thurs', 'Th']))
        return abbr
    abbr = {phrase}
    words = word_tokenize(phrase)
    stand_form = []
    for w in words:
        if w in stopwords:
            stand_form.append(w.lower())
        else:
            stand_form.append(cap(w.lower()))
    abbr.add(' '.join(stand_form))

    words = [w for w in words if w not in stopwords]
    # if len(words) == 1 or ner == 'PERSON':
    #     return abbr
    # first_cap_letters = [w[0].upper() for w in words]
    # abbr.add('.'.join(first_cap_letters))
    # abbr.add(''.join(first_cap_letters))
    # abbr.add('.'.join(first_cap_letters)+'.')

    return abbr


def write_big_dict(fn, dic, limit=20):
    with open(fn, 'w') as fw:
        item = {}
        for k, v in dic.items():
            item[k] = v
            if len(item) == limit:
                fw.write(json.dumps(item) + '\n')
                item = {}
        if item != {}:
            fw.write(json.dumps(item))


def read_big_dict(fn):
    dic = {}
    for i_line, line in enumerate(open(fn)):

        line = line.strip()
        for k, v in json.loads(line).items():
            item = {'total': v['total'], 'entities': OrderedDict()}
            # v = {'total':10,'entities':{51:{'freq':,'name':}}
            for eid, ent in v['entities'].items():
                item['entities'][int(eid)] = ent
            dic[k] = v
    return dic


def write_ment_ent_dict(sources: List[str], stopwords):
    ment_ent_dict = {}

    def read_src(fn: str):
        for i_l, line in enumerate(open(fn).readlines()):
            line = line.strip()
            items = line.split('\t')
            mention = items[0]
            if items[1].isdigit():
                total_num = int(items[1])
            else:
                continue
            if total_num >= 1:
                ment_info = ment_ent_dict.get(mention, None)
                if ment_info is None:
                    ment_ent_dict[mention] = {'total': total_num, 'entities': {}}
                    ment_info = ment_ent_dict[mention]
                else:
                    ment_info['total'] += total_num
                ent_num = len(items[2:])
                for ent in items[2:]:
                    ent_items = ent.split(',')
                    if not ent_items[1].isdigit() or (ent_items[1].isdigit() and len(ent_items) == 2):
                        eid = int(ent_items[0])
                        name = ','.join(ent_items[1:])
                        num = total_num / ent_num
                    else:
                        if ent_items[0].isdigit() and ent_items[1].isdigit():
                            eid, num = int(ent_items[0]), int(ent_items[1])
                        else:
                            print('line:{} does not have right ents'.format(line))
                        name = ','.join(ent_items[2:])

                    if eid in ment_info['entities']:
                        prev_freq = ment_info['entities'][eid]['freq']
                        ment_info['entities'][eid]['freq'] = min((1.0, prev_freq + num / total_num))
                    else:
                        ment_info['entities'][eid] = {'freq': num / total_num, 'name': name}

    for src in sources:
        read_src(src)
    for ment, item in ment_ent_dict.items():
        ents = list(item['entities'].items())
        ents = sorted(ents, key=lambda x: x[1]['freq'], reverse=True)
        ordered_ents = OrderedDict()
        for eid, ent in ents:
            ordered_ents[eid] = ent
        item['entities'] = ordered_ents
    start = time.time()
    write_big_dict('/home/hkeaa/ment_ent.dict', ment_ent_dict)
    print('write dict cost {:.2f}s'.format(time.time() - start))


class Mention:
    def __init__(self, start, end, ctx, ner, text, sent_id, ment_id, link=None):
        self.start = start
        self.end = end
        self.ctx = ctx
        self.ner = ner
        self.text = text
        self.link = link
        self.total_num = 0
        self.alias = None
        self.sent_id = sent_id
        self.ment_id = ment_id
        self.candidates = {}

    def __str__(self):
        return '{}_{}'.format(self.text, self.ner)

    def __repr__(self):
        return '{}_{}'.format(self.text, self.ner)


class Entity:
    # wiki id, name, freq
    def __init__(self, wid, name, freq):
        self.id = wid
        self.name = name
        self.freq = freq

    def __str__(self):
        return '{}_{}'.format(self.name, self.id)

    def __repr__(self):
        return '{}_{}'.format(self.name, self.id)

    def __hash__(self):
        return self.id

    def __eq__(self, other):
        return self.id == other.id

    def update(self, other):
        self.freq = (self.freq + other.freq) / 2


class BigSharedDict:
    def __init__(self, path, manager: Manager):
        self.dict_list = manager.list()
        for fn in os.listdir(path):
            if fn.endswith('.dict'):
                tmp = read_big_dict(os.path.join(path, fn))
                self.dict_list.append(manager.dict(tmp))
                print('\tread {} done'.format(fn))
                break

    def get(self, k):
        for dic in self.dict_list:
            v = dic.get(k, None)
            if v is not None:
                return v
        return None


def read_dict_from_dir(path):
    dic = {}
    for fn in os.listdir(path):
        if fn.endswith('.dict'):
            tmp = read_big_dict(os.path.join(path, fn))
            dic = {**dic, **tmp}
            print('\tread {} done'.format(fn))
            # TODO remove break to read full dictionary
            # break
    return dic


def str_contain(m: str, n: str):
    if m == n:
        return True
    start = m.find(n)
    if start == -1:
        return False
    end = start + len(n) - 1
    # print(m, n, start, end)
    if (start == 0 or m[start - 1] == ' ') and (end == len(m) - 1 or m[end + 1] == ' '):
        return True
    return False


class LinkSharedSource:
    def __init__(self, disam_fn, redirect_fn, ment_ent_fn, person_fn):
        # self.manager = manager
        # process_safe = lambda x: self.manager.dict(x)
        # disambiguation dict : id -- name
        self.disambiguation_id2name, self.disambiguation_name2id = self.__measure_speed(disam_fn,
                                                                                        self.__read_disambiguation,
                                                                                        'disambiguation')
        # self.disambiguation_id2name = process_safe(self.disambiguation_id2name)
        # self.disambiguation_name2id = process_safe(self.disambiguation_name2id)
        # redirect dict: alias -- {id, name}
        self.redirects = self.__measure_speed(redirect_fn, self.__read_redirects, 'redirect')

        # ment_ent dict: mention -- {total:int,alias:List[str],entities:{id:{freq:float,name:str}}
        # self.ment_ent_dict = process_safe(self.__measure_speed(ment_ent_fn,read_big_dict,'mention-entity dictionary'))
        start = time.time()
        self.ment_ent_dict = read_dict_from_dir(ment_ent_fn)
        print('read mention-entity dictionary cost {:.02}s'.format(time.time() - start))

        self.persons = self.__measure_speed(person_fn, self.__read_person, 'person names')

    def __measure_speed(self, fn, func, name):
        start = time.time()
        item = func(fn)
        print('read {} cost {:.2f}s'.format(name, time.time() - start))
        return item

    @staticmethod
    def __read_person(fn):
        persons = []
        for line in open(fn):
            persons.append(line.strip())
            # persons[line.strip()] = None
            # persons.add(line.strip())
        return persons

    @staticmethod
    def __read_disambiguation(fn):
        disam_id2nme = {}
        disam_nme2id = {}
        for line in open(fn):
            line = line.strip()
            wid, name = line.split('\t')
            disam_id2nme[int(wid)] = name
            disam_nme2id[name] = int(wid)
        return disam_id2nme, disam_nme2id

    @staticmethod
    def __read_redirects(fn):
        redirects = {}
        for line in open(fn):
            alias, name, id = line.strip().split('\t')
            redirects[alias] = {'name': name, 'id': id}
        return redirects


def main():
    conll_root = '/home/data/corpora/nytimes/nyt_preprocess/conll'
    parsed_root = '/home/data/corpora/nytimes/nyt_preprocess/parsed'
    disam_fn = '/home/hkeaa/data/nel/basic_data/wiki_disambiguation_pages.txt'
    name_id_fn = '/home/hkeaa/data/nel/basic_data/wiki_name_id_map.txt'
    redirect_fn = '/home/hkeaa/data/nel/basic_data/wiki_redirects.txt'
    ment_ent_fn = '/home/hkeaa/ment_ent.dict'
    person_fn = '/home/hkeaa/data/nel/basic_data/p_e_m_data/persons.txt'
    share_src = LinkSharedSource(disam_fn, redirect_fn, ment_ent_fn, person_fn)
    # task = Task({'fn':os.path.j)})
    # link(task,share_src)
    # pem_dir = '/home/hkeaa/data/nel/generated'
    # crosswiki_wikipedia = os.path.join(pem_dir,'crosswikis_wikipedia_p_e_m.txt')
    # yago = os.path.join(pem_dir,'yago_p_e_m.txt')
    # write_ment_ent_dict([crosswiki_wikipedia],set(corpus.stopwords.words('english')))


if __name__ == '__main__':
    main()

