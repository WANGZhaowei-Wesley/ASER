Search.setIndex({docnames:["about/index","api/aser-cs","api/conceptualizer","api/database","api/extractor","api/index","index","tutorial/get-started","tutorial/index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["about/index.rst","api/aser-cs.rst","api/conceptualizer.rst","api/database.rst","api/extractor.rst","api/index.rst","index.rst","tutorial/get-started.rst","tutorial/index.rst"],objects:{"aser.client":{ASERClient:[1,1,1,""]},"aser.client.ASERClient":{close:[1,2,1,""],conceptualize_eventuality:[1,2,1,""],exact_match_concept:[1,2,1,""],exact_match_eventuality:[1,2,1,""],extract_eventualities:[1,2,1,""],extract_eventualities_and_relations:[1,2,1,""],extract_relations:[1,2,1,""],fetch_related_concepts:[1,2,1,""],fetch_related_eventualities:[1,2,1,""],parse_text:[1,2,1,""],predict_concept_relation:[1,2,1,""],predict_eventuality_relation:[1,2,1,""]},"aser.conceptualize":{aser_conceptualizer:[2,0,0,"-"]},"aser.conceptualize.aser_conceptualizer":{BaseASERConceptualizer:[2,1,1,""],ProbaseASERConceptualizer:[2,1,1,""],SeedRuleASERConceptualizer:[2,1,1,""]},"aser.conceptualize.aser_conceptualizer.BaseASERConceptualizer":{close:[2,2,1,""],conceptualize:[2,2,1,""]},"aser.conceptualize.aser_conceptualizer.ProbaseASERConceptualizer":{close:[2,2,1,""],conceptualize:[2,2,1,""]},"aser.conceptualize.aser_conceptualizer.SeedRuleASERConceptualizer":{conceptualize:[2,2,1,""],conceptualize_from_text:[2,2,1,""],is_pronoun:[2,2,1,""],is_seed_concept:[2,2,1,""]},"aser.database":{db_connection:[3,0,0,"-"],kg_connection:[3,0,0,"-"]},"aser.database.db_connection":{BaseDBConnection:[3,1,1,""],MongoDBConnection:[3,1,1,""],SqliteDBConnection:[3,1,1,""]},"aser.database.db_connection.BaseDBConnection":{close:[3,2,1,""],create_table:[3,2,1,""],get_columns:[3,2,1,""],get_rows_by_keys:[3,2,1,""],get_update_op:[3,2,1,""],insert_row:[3,2,1,""],insert_rows:[3,2,1,""],select_row:[3,2,1,""],select_rows:[3,2,1,""],update_row:[3,2,1,""],update_rows:[3,2,1,""]},"aser.database.db_connection.MongoDBConnection":{close:[3,2,1,""],create_table:[3,2,1,""],get_columns:[3,2,1,""],get_rows_by_keys:[3,2,1,""],get_update_op:[3,2,1,""],insert_row:[3,2,1,""],insert_rows:[3,2,1,""],select_row:[3,2,1,""],select_rows:[3,2,1,""],update_row:[3,2,1,""],update_rows:[3,2,1,""]},"aser.database.db_connection.SqliteDBConnection":{close:[3,2,1,""],create_table:[3,2,1,""],get_columns:[3,2,1,""],get_rows_by_keys:[3,2,1,""],get_update_op:[3,2,1,""],insert_row:[3,2,1,""],insert_rows:[3,2,1,""],select_row:[3,2,1,""],select_rows:[3,2,1,""],update_row:[3,2,1,""],update_rows:[3,2,1,""]},"aser.database.kg_connection":{ASERConceptConnection:[3,1,1,""],ASERKGConnection:[3,1,1,""]},"aser.database.kg_connection.ASERConceptConnection":{close:[3,2,1,""],get_concept_columns:[3,2,1,""],get_concept_given_str:[3,2,1,""],get_concept_instance_pair_columns:[3,2,1,""],get_concepts_by_keys:[3,2,1,""],get_concepts_given_eventuality:[3,2,1,""],get_concepts_given_strs:[3,2,1,""],get_eventualities_given_concept:[3,2,1,""],get_exact_match_concept:[3,2,1,""],get_exact_match_concepts:[3,2,1,""],get_exact_match_relation:[3,2,1,""],get_exact_match_relations:[3,2,1,""],get_related_concepts:[3,2,1,""],get_relation_columns:[3,2,1,""],get_relations_by_keys:[3,2,1,""],init:[3,2,1,""],insert_concept:[3,2,1,""],insert_concept_instance_pair:[3,2,1,""],insert_concept_instance_pairs:[3,2,1,""],insert_concepts:[3,2,1,""],insert_relation:[3,2,1,""],insert_relations:[3,2,1,""]},"aser.database.kg_connection.ASERKGConnection":{close:[3,2,1,""],get_eventualities_by_keys:[3,2,1,""],get_eventuality_columns:[3,2,1,""],get_exact_match_eventualities:[3,2,1,""],get_exact_match_eventuality:[3,2,1,""],get_exact_match_relation:[3,2,1,""],get_exact_match_relations:[3,2,1,""],get_partial_match_eventualities:[3,2,1,""],get_related_eventualities:[3,2,1,""],get_relation_columns:[3,2,1,""],get_relations_by_keys:[3,2,1,""],init:[3,2,1,""],insert_eventualities:[3,2,1,""],insert_eventuality:[3,2,1,""],insert_relation:[3,2,1,""],insert_relations:[3,2,1,""]},"aser.extract":{aser_extractor:[4,0,0,"-"],eventuality_extractor:[4,0,0,"-"],parsed_reader:[4,0,0,"-"],relation_extractor:[4,0,0,"-"],sentence_parser:[4,0,0,"-"]},"aser.extract.aser_extractor":{BaseASERExtractor:[4,1,1,""],DiscourseASERExtractor:[4,1,1,""],SeedRuleASERExtractor:[4,1,1,""]},"aser.extract.aser_extractor.BaseASERExtractor":{close:[4,2,1,""],extract_eventualities_from_parsed_result:[4,2,1,""],extract_eventualities_from_text:[4,2,1,""],extract_from_parsed_result:[4,2,1,""],extract_from_text:[4,2,1,""],extract_relations_from_parsed_result:[4,2,1,""],extract_relations_from_text:[4,2,1,""],parse_text:[4,2,1,""]},"aser.extract.aser_extractor.DiscourseASERExtractor":{extract_from_parsed_result:[4,2,1,""]},"aser.extract.eventuality_extractor":{BaseEventualityExtractor:[4,1,1,""],DiscourseEventualityExtractor:[4,1,1,""],SeedRuleEventualityExtractor:[4,1,1,""]},"aser.extract.eventuality_extractor.BaseEventualityExtractor":{close:[4,2,1,""],extract_from_parsed_result:[4,2,1,""],extract_from_text:[4,2,1,""],parse_text:[4,2,1,""]},"aser.extract.eventuality_extractor.DiscourseEventualityExtractor":{extract_from_parsed_result:[4,2,1,""]},"aser.extract.eventuality_extractor.SeedRuleEventualityExtractor":{extract_from_parsed_result:[4,2,1,""]},"aser.extract.parsed_reader":{ParsedReader:[4,1,1,""]},"aser.extract.parsed_reader.ParsedReader":{close:[4,2,1,""],generate_sid:[4,2,1,""],get_parsed_paragraphs_from_file:[4,2,1,""],get_parsed_sentence_and_context:[4,2,1,""]},"aser.extract.relation_extractor":{BaseRelationExtractor:[4,1,1,""],DiscourseRelationExtractor:[4,1,1,""],SeedRuleRelationExtractor:[4,1,1,""]},"aser.extract.relation_extractor.BaseRelationExtractor":{close:[4,2,1,""],extract_from_parsed_result:[4,2,1,""]},"aser.extract.relation_extractor.DiscourseRelationExtractor":{extract_from_parsed_result:[4,2,1,""]},"aser.extract.relation_extractor.SeedRuleRelationExtractor":{extract_from_parsed_result:[4,2,1,""]},"aser.extract.sentence_parser":{SentenceParser:[4,1,1,""]},"aser.extract.sentence_parser.SentenceParser":{close:[4,2,1,""],generate_sid:[4,2,1,""],parse:[4,2,1,""],parse_raw_file:[4,2,1,""]},"aser.server":{ASERDataBase:[1,1,1,""],ASERServer:[1,1,1,""],ASERSink:[1,1,1,""],ASERWorker:[1,1,1,""],is_port_occupied:[1,3,1,""],sockets_ipc_bind:[1,3,1,""]},"aser.server.ASERDataBase":{close:[1,2,1,""],handle_exact_match_concept:[1,2,1,""],handle_exact_match_concept_relation:[1,2,1,""],handle_exact_match_eventuality:[1,2,1,""],handle_exact_match_eventuality_relation:[1,2,1,""],handle_fetch_related_concepts:[1,2,1,""],handle_fetch_related_eventualities:[1,2,1,""],run:[1,2,1,""]},"aser.server.ASERServer":{close:[1,2,1,""],run:[1,2,1,""]},"aser.server.ASERSink":{run:[1,2,1,""]},"aser.server.ASERWorker":{close:[1,2,1,""],handle_conceptualize_eventuality:[1,2,1,""],handle_extract_eventualities:[1,2,1,""],handle_extract_eventualities_and_relations:[1,2,1,""],handle_extract_relations:[1,2,1,""],handle_parse_text:[1,2,1,""],run:[1,2,1,""]},aser:{client:[1,0,0,"-"],server:[1,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function"},terms:{"0007729784027067319":7,"0008249433373424787":7,"0008733652082530607":7,"0009320788356986446":7,"0009970771833233895":7,"0011265677266121413":7,"0012023311220917638":7,"001299123365893667":7,"00135847802106472":7,"0014678406861395978":7,"0014738252464350657":7,"0015126101213412515":7,"0016652311225954636":7,"0017090529942427124":7,"0019171057650086054":7,"0020252501927783217":7,"0020555983700278548":7,"0020780068748090068":7,"0022177048159726376":7,"002322559197304199":7,"002413587001587757":7,"0024193220136665247":7,"002581965510383602":7,"0026804542460771644":7,"003120722093258921":7,"0032322408087401967":7,"0034924485290907673":7,"0035536929163400405":7,"003763140265248248":7,"0037925966418082785":7,"003962101636520241":7,"003976765548440927":7,"0039948421153371515":7,"004066087417926932":7,"004066367469060248":7,"004513652779666651":7,"004583965232421818":7,"004612881615465595":7,"004734273236925215":7,"005526089124620336":7,"005527600223642655":7,"00597259313670595":7,"006433755937359909":7,"00657681203983669":7,"006775768016078094":7,"006954077700711728":7,"0074309434735817135":7,"009450413285582604":7,"010739380751620654":7,"010ec054737a144cb77e99954ff032bc5dff472c":7,"012503337010340954":7,"016591251885369532":7,"01768052067852201":7,"018365897517264307":7,"020584567553255093":7,"02262443438914027":7,"022943297279580464":7,"025401507702392658":7,"025749215622633343":7,"026646556058320763":7,"026874115983026876":7,"02687880595658219":7,"027480255328356594":7,"0297029702970297":7,"030019493177387915":7,"030236252754573874":7,"031033712882339807":7,"03253182461103253":7,"03321432435356486":7,"03391812865497076":7,"033946251768033946":7,"040051679586563305":7,"04085733422638982":7,"041638758651484704":7,"0429367420517863":7,"04327599264308125":7,"047555257870060284":7,"04909560723514212":7,"050387596899224806":7,"06014421501147165":7,"06364922206506365":7,"06847545219638243":7,"08070175438596491":7,"09395711500974659":7,"10155857214680744":7,"1024":4,"10k":6,"127":1,"1330749354005168":7,"13801169590643275":7,"13bb4ed9f70c37253246c2051ef05fe4795f4fe":7,"17291806206742577":7,"1a18ae76468276b651c178926b380e4e9d607f5":7,"2018":7,"2019":6,"2020":6,"2020and":7,"2021":6,"2110783349721403":7,"21908471275559882":7,"224":6,"2342e1896c34cac33974473c5b52ac22d7182fe9":7,"253e8b127b833c3aa7d79e2b91ce030299a646d6":7,"25edad6781577dcb3ba715c8230416fb0d4c45c4":4,"27017":3,"29160382101558574":7,"2dd66bdf5849fe8d4a28d3355f0fc0a50b7f61e2":7,"32768":3,"41876cb7188cb3398572af71ff9d98d61f46c20b":7,"438":6,"55704c606666f41a73ac5ae0eabe582892aa163c":7,"58004d785a3ee08eac2f51ea4cbc44bba3a1ba22":7,"5a49d855f23b29d0a769d638a0944c0d35815ca9":7,"5th":6,"602979237":7,"648":6,"69864d92726be0d4b7f52fd4f32e38ad1f97974":7,"6th":6,"766f00c08dcac14353629c12125f05697eb58a2":7,"7d9ea9023b66a0ebc167f0dbb6ea8cd75d7b46f9":4,"8000":[1,7],"8001":[1,7],"8540897b645962964fd644242d4cc0032f024e86":4,"86e7181b3e449dd70dd9bd0eebcca5b73b432a8c":7,"8dd8fbc06d2810add7b2cfd637a78f90fa2e5e9":7,"9000":[1,4,7],"abstract":6,"case":4,"class":[1,2,3,4],"default":[1,3,4],"final":7,"float":[1,2,3],"function":1,"import":7,"int":[1,3,4],"long":4,"new":[3,7],"return":[1,2,3,4,7],"super":4,"true":[3,4,7],"try":7,And:7,NNS:4,The:[0,6,7],Then:7,With:6,__number__0:7,__person__0:7,__repr__:7,_id:3,a8eec375e86e467cf868a03f64ecd1f9d1fe5fe:7,about:7,abov:7,access:7,accommod:4,acl:6,acquisit:6,action:6,added:7,addit:7,address:1,adjp:4,aggreg:7,akbc:6,algorithm:0,alibaba:0,all:[1,3,4,7],also:[6,7],alumni:0,amaz:7,amod:4,analog:6,analysi:[4,6],ancient:7,angl:6,anim:7,annot:[4,6],annual:6,appli:3,april:6,area:7,arg:1,argpars:1,armi:4,artifici:6,aser:[0,2,3,4,5,8],aser_conceptu:[2,7],aser_extractor:[5,6,7],aser_kg_dir:[1,7],aser_pip:7,asercli:[1,7],aserconcept:[1,2,3],aserconceptconnect:[3,7],aserconceptinstancepair:3,aserconcpet:3,aserdatabas:1,aserextractor:7,aserkgconnect:3,aserserv:1,asersink:1,aserwork:1,asia:6,associ:[1,6],atom:6,attent:7,autom:6,aux:4,avail:[1,7],b875a4b94675e057fa643beb334e071e4ddf3760:7,back:7,backend:3,bake:7,base:[1,2,3,4,6,7],base_corenlp_port:[1,7],baseaserconceptu:2,baseaserextractor:4,basedbconnect:3,baseeventualityextractor:4,baserelationextractor:4,becaus:7,been:[3,7],befor:7,besid:6,between:[1,6,7],bin:6,boat:4,bool:[1,3,4],both:[1,4],bound:1,bread:7,breakfast:7,bridg:6,build:[3,6,7],build_concept_rel:7,built:3,busi:7,bys:3,cach:3,call:6,came:7,can:[1,7],cane:6,cannot:4,carbohydr:7,ccomp:4,centric:6,champion:7,changlong:6,characterist:7,check:[1,7],chees:7,chen:6,choic:1,chunksiz:3,ciabatta:7,cid2concept:7,cid:[1,3],cid_to_filter_scor:7,clase:1,client:[5,6,8],clone:7,close:[1,2,3,4,7],cloud:0,co_occurr:[4,7],cocolm:6,code:[6,7],column:3,column_typ:3,com:[1,7],command:7,commonsens:6,complex:6,comput:6,concept1:1,concept2:1,concept:[1,2,3,6,7],concept_instance_pair:[3,7],concept_kg_dir:[1,7],concept_method:[1,7],concept_str:3,concept_topk:[1,7],concept_weight_threshold:7,conceptu:[1,3,5,6,7],conceptuali:6,conceptualizatoin:7,conceptualize_eventu:[1,7],conceptualize_from_text:2,concurr:1,condit:7,conduct:6,confer:[6,7],connect:[3,7],consid:3,consol:7,constitu:4,construct:6,contain:[3,4,6],contamin:7,content:3,context:[1,4],context_window_s:4,contrari:7,contrast:7,contributor:0,cook:7,cop:4,core:[6,7],core_kg_dir:7,corenlp:[1,4,7],corenlp_path:[1,4,7],corenlp_port:[4,7],correspond:[1,3,4,7],could:4,creat:3,create_t:3,crust:7,current:7,dac82e8bc75bd0221e86194e6e3cd607a72aba7:7,dai:7,daiya:7,dan:6,daniel:6,data:[1,7],databas:[5,6,7],datatype3:3,db_connect:[5,6],db_path:3,db_sender_addr_list:1,definit:7,denser:7,depend:[4,6],det:4,dict:[1,3,4],dictionari:4,ding:6,directori:[1,7],disco:6,discours:[4,6,7],discourseaserextractor:[4,7],discourseeventualityextractor:4,discourserelationextractor:4,disk:4,dobj:4,dong:6,down:7,download:[1,7],downloaddata:7,drop:4,dure:7,e8809e959614713c0622e23b0ab5dc06e2f2bf46:7,each:[3,7],edg:6,edu:7,egg:7,eid:[1,3],emnlp:6,empir:6,employe:7,engin:0,enhanc:6,enrich:6,entail:6,evalu:6,event:3,eventu:[1,2,3,4,6,7],eventuality1:1,eventuality2:1,eventuality_conceptu:[5,6],eventuality_extractor:[5,6],eventuality_frequency_threshold:7,eventuality_output_format:4,eventuality_threshold_to_conceptu:7,exact:[1,3],exact_match_concept:1,exact_match_eventu:1,excipi:7,excit:7,exist:3,experi:7,extract:[1,4,6,8],extract_eventu:[1,7],extract_eventualities_and_rel:1,extract_eventualities_from_parsed_result:4,extract_eventualities_from_text:4,extract_from_parsed_result:4,extract_from_text:[4,7],extract_rel:1,extract_relations_from_parsed_result:4,extract_relations_from_text:4,extractal:7,extractor:[5,6,7],factor:7,fals:[3,4,7],fang:[0,6],featur:7,fetch:[1,7],fetch_related_concept:[1,7],fetch_related_eventu:[1,7],file:[1,4,7],file_nam:4,file_path:1,find:[4,7],finish:7,first:7,flavor:7,follow:[4,7],food:7,forget:7,format:4,forward:1,four:7,fresh:7,freshli:7,friend:6,friendli:7,from:[0,1,3,4,6,7],fudan:6,full:[6,7],full_kg_dir:7,gap:6,gener:6,generate_sid:4,get:[1,3,6,8],get_column:3,get_concept_column:3,get_concept_given_str:3,get_concept_instance_pair_column:3,get_concepts_by_kei:3,get_concepts_given_eventu:3,get_concepts_given_str:3,get_eventualities_by_kei:3,get_eventualities_given_concept:3,get_eventuality_column:3,get_exact_match_concept:3,get_exact_match_eventu:3,get_exact_match_rel:3,get_parsed_paragraphs_from_fil:4,get_parsed_sentence_and_context:4,get_partial_match_eventu:3,get_related_concept:3,get_related_eventu:3,get_relation_column:3,get_relations_by_kei:3,get_rows_by_kei:3,get_update_op:3,git:7,github:[4,7],give:7,given:[1,2,3,4,7],going:7,good:7,got:7,grain:[3,7],graph:[6,7],great:7,had:7,handl:4,handle_conceptualize_eventu:1,handle_exact_match_concept:1,handle_exact_match_concept_rel:1,handle_exact_match_eventu:1,handle_exact_match_eventuality_rel:1,handle_extract_eventu:1,handle_extract_eventualities_and_rel:1,handle_extract_rel:1,handle_fetch_related_concept:1,handle_fetch_related_eventu:1,handle_parse_text:1,hantian:6,haoji:[0,6],haowen:[0,6],haoyu:6,have:[3,7],head:1,help:[1,6],here:7,higher:6,highlight:7,hkust:[0,6,7],home:[1,3,4,7],hongm:[0,6],hous:7,how:[1,3,7],html:[3,4,7],http:[1,3,4,7],ids:3,ijcai:6,implement:7,in_ord:[4,7],includ:[1,3,4,6],induct:6,inform:[3,7],ingredi:7,init:3,initi:3,inorgan:7,input:4,insert:3,insert_concept:3,insert_concept_instance_pair:3,insert_eventu:3,insert_rel:3,insert_row:3,instal:[6,8],instanc:[3,4,7],intellig:6,interest:7,intern:6,iobj:4,is_port_occupi:1,is_pronoun:2,is_seed_concept:2,item:7,its:4,jalapeno:7,jiefu:[0,6],joint:6,json:4,juic:7,keep:7,kei:[3,7],kept:1,kg_connect:[5,6,7],khashabi:6,kind:7,kneader:7,knowcomp:[0,7],knowledg:6,known:6,kun:6,languag:6,larg:6,led:0,left_context:4,lemma:4,length:4,let:7,leung:6,level:6,lifeng:6,like:7,line:[4,7],line_no:4,linguist:6,link:3,list:[1,2,3,4,7],littl:7,liu:[0,6],load:[3,7],local:[6,8],localhost:[1,3],locat:7,log:[1,7],log_path:[1,7],look:7,made:7,mai:6,main:0,make:7,mani:[1,3,7],march:6,match:[1,3],max:4,max_len:4,mean:1,meaning:7,meantim:4,meat:7,meet:6,memori:3,mention:4,mesh:7,messag:1,method:[1,4,6],microsoft:[1,6,7],million:6,millisecond:1,minimum:3,minut:7,mkdir:7,mode:[3,6,8],model:6,mongodb:3,mongodbconnect:3,more:[6,7],move:7,mphil:0,msg:1,msra:6,much:7,muhao:6,multipl:[3,7],multiprocess:1,mushroom:7,mutian:6,n_concurrent_back_sock:[1,7],n_extractor:7,n_worker:[1,7],name:[3,4],namespac:1,natur:[6,7],necessari:3,need:7,neighbor:7,ner:[2,4],nest:7,next:7,nice:7,nlp:[6,7],nmod:4,node:6,none:[1,2,3,4],now:[6,7],nsubj:4,num:1,number:[1,4],object:[1,2,3,4],occupi:1,octob:6,omc:6,one:1,onli:[3,7],open:7,oper:3,opt:1,option:7,orang:7,order:[3,4,6,7],order_bi:3,org:3,origin:3,other:[1,4,7],out:7,output:[1,4,7],output_format:4,over:6,overridden:1,overview:6,owner:7,packag:7,pair:[1,2,3],pan:[0,6],para_eventu:4,paragraph:[1,4],paramet:[1,2,3,4],pars:[1,4,7],parse_raw_fil:4,parse_text:[1,4],parsed_read:[5,6],parsed_result:4,parsedread:4,parser:4,partial:3,pastri:7,path:[1,3,4],patient:7,pattern:6,pdf:6,perfectli:7,person:7,phd:0,pie:7,pip:7,pipe:[6,8],pipelin:[6,8],pipeplin:7,place:7,pleas:[3,4,7],port:[1,4,7],port_out:[1,7],pos_tag:4,poss:4,possibl:1,power:7,pprint:7,ppt:6,predict:[1,6],predict_concept_rel:[1,7],predict_eventuality_rel:[1,7],prefer:6,present:6,previous:6,print:7,probas:[1,2,6,7],probase_path:[1,2,7],probase_topk:[2,7],probaseaserconceptu:[2,7],process:[1,4,6,7],processed_dir:7,processed_path:4,product:7,prof:0,properti:3,protein:7,provid:[1,3,7],prp:4,punct:4,push:1,python:7,raw:[1,4,7],raw_dir:7,raw_path:4,read:4,reader:4,readi:7,reason:6,receiv:1,recev:1,refer:[3,4],relat:[1,3,4,7],relation_extractor:[5,6],relation_output_format:4,relation_weight_threshold:7,repo:7,report:6,represent:[3,7],request:[1,7],requir:7,research:[1,6,7],reserv:1,result:[1,4,6,7],retriev:[1,3,4,7],revers:3,review:7,rid:[1,3],right_context:4,rmtree:7,role:6,root:4,roth:6,row:3,rtype:4,rule:[2,4],run:[1,7],rxtractor:4,safe:[1,2,3,4],salt:7,same:[1,7],sausag:7,sbar:4,scale:6,score:[1,2],season:7,see:7,seed:1,seedruleaserconceptu:[2,7],seedruleaserextractor:[4,7],seedruleeventualityextractor:4,seedrulerelationextractor:4,select:[3,6],select_row:3,send:1,senior:0,sentenc:[4,7],sentence_pars:4,sentence_read:[5,6],sentencepars:4,septemb:6,sequenc:6,serv:1,server:[5,6,8],set:[6,7],setup:7,sever:3,shang:6,should:[1,7],show:7,shown:7,shutil:7,sid:4,similar:3,similarli:7,sink_addr:1,sink_addr_receiver_addr:1,size:4,skeleton_word:3,skip_word:4,smell:7,socket:1,sockets_ipc_bind:1,softwar:7,some:[3,7],song:[0,6],sort:3,sourc:[1,2,3,4,7],specif:3,spinach:7,sqlite:3,sqlitedbconnect:3,squeez:7,stanford:[4,7],stanfordcorenlp:1,stanfordnlp:[4,7],starchi:7,start:[1,6,8],step:[6,8],store:[1,4],str:[1,2,3,4],string:3,structur:6,student:0,sub:[1,6],subscrib:1,substanc:7,succe:7,sugar:1,suggest:3,suit:3,suitabl:4,summer:6,support:7,sure:4,surpris:7,sweet:7,synchron:4,syntax_tree_cach:4,system:7,t9rdyhnkv94tfcd8tkvdzf9cewnfdaf:7,tabl:3,table_nam:3,tail:1,technic:6,text:[1,4,7],thei:7,thi:[3,4,7],think:7,three:7,threshold:3,tianq:[0,6],time:7,timeout:1,toast:7,togeth:7,token:[4,7],top:[1,7],top_n:3,total:6,toward:6,town:7,transfer:6,transomc:6,triplet:4,tupl:[1,2,3,4],two:[1,3,7],txt:[1,7],type:[1,2,3,4],undergradu:0,union:[1,3,4],until:7,updat:3,update_column:3,update_op:3,update_row:3,urllib:7,urlretriev:7,usag:[1,6],use:[2,3,7],used:3,using:[1,6],util:7,valu:[3,7],vbp:4,vegan:7,verb:3,veri:7,via:[1,6],video:6,wait:7,wang:6,want:[3,7],wasn:7,wasnt:7,web:6,weight:6,weiqi:6,well:7,went:7,were:7,what:7,whether:[1,3,4],which:[1,3,4,7],whose:3,wild:7,wilfr:6,window:4,wing:6,within:7,without:3,word:[2,3,4],work:6,worker:1,worker_addr_list:1,would:7,write:[3,7],www:[3,6,7],xin:[0,6],xliucr:[3,4],yangqiu:[0,6],yelp:7,you:[1,3,4,7],your:[4,7],zhang:[0,6],zip:7,zip_ref:7,zipfil:7,zmq:1},titles:["About","Server/Client","Conceptualization","Database","Extractor","API Reference","ASER (Activities, States, Events, and their Relations)","Get Started","Tutorial"],titleterms:{"public":6,about:[0,6],activ:6,api:[4,5,6],argument:1,aser:[1,6,7],aser_extractor:4,client:[1,7],conceptu:2,contributor:[],data:6,databas:3,db_connect:3,event:6,eventuality_conceptu:2,eventuality_extractor:4,extract:7,extractor:4,get:7,index:6,instal:7,introduct:6,kg_connect:3,leader:[],local:7,mode:7,name:1,parsed_read:4,pipe:7,pipelin:7,project:6,refer:[5,6],relat:6,relation_extractor:4,sentence_read:4,server:[1,7],start:7,state:6,step:7,talk:6,tutori:[6,8]}})