webpackJsonp([10],{0:function(e,i,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=a(1),t=n(r),o=a(13),s=a(18),l=n(s),c=a(345),u=n(c);(0,o.render)(t.default.createElement(l.default,{tokenizer:u.default}),document.getElementById("liang-mount"))},17:function(e,i,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){var i=e.value,a=void 0===i?"":i,n=e.placeholder,r=void 0===n?null:n,t=e.status,s=void 0===t?"default":t,l=e.onChange,c=void 0===l?Function.prototype:l,u=e.faded,d=void 0!==u&&u,p="bar-textarea";return"error"===s?p+=" error":"success"===s&&(p+=" success"),o.default.createElement("div",null,o.default.createElement("textarea",{placeholder:r,onChange:c,value:a,className:s+(d?" faded":"")}),o.default.createElement("span",{className:p}))}Object.defineProperty(i,"__esModule",{value:!0}),i.default=r;var t=a(1),o=n(t)},18:function(e,i,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(i,"__esModule",{value:!0});var r=a(1),t=n(r),o=a(12),s=a(11),l=n(s),c=a(17),u=n(c),d=(0,o.compose)((0,o.withState)("input","setInput",""),(0,o.withState)("training","setTraining",function(e){return e.training||""})),p=d(function(e){var i=e.tokenizer,a=e.input,n=e.setInput,r=e.training,o=e.setTraining,s=e.textarea,c=void 0!==s&&s,d=e.trained,p=void 0!==d&&d,m=e.flow,g=void 0===m||m,h=c?u.default:l.default,b=void 0;return b=p?a?i(r)(a):[]:a?i(a):[],t.default.createElement("div",{style:{width:"55%"}},t.default.createElement("div",null,p&&t.default.createElement(u.default,{placeholder:"Enter training text here...",value:r,onChange:function(e){return o(e.target.value)},faded:!0}),t.default.createElement(h,{placeholder:"Enter raw text here to test the tokenizer...",value:a,onChange:function(e){return n(e.target.value)}}),t.default.createElement("p",{style:{width:"100%"}},b.map(function(e){return g?t.default.createElement("span",{className:"token",style:{float:"left"}},e):t.default.createElement("div",{className:"token"},e)}))),t.default.createElement("div",{style:{clear:"both"}}))});i.default=p},97:function(e,i){"use strict";function a(e,i){var a=new Array(e);if(arguments.length>1)for(var n=0;n<e;n++)a[n]=i;return a}function n(e,i){for(var n=e.length,r=a(n),t=0;t<n;t++)r[t]=e[t]+i[t];return r}function r(e,i){for(var n=e.length,r=a(n),t=0;t<n;t++)r[t]=e[t]*i;return r}function t(e){for(var i=a(e[0].length,0),n=0,r=e.length;n<r;n++)for(var t=e[n],o=0,s=t.length;o<s;o++)i[o]+=t[o];for(var l=0,c=i.length;l<c;l++)i[l]/=e.length;return i}function o(e,i){for(var a=0,n=0,r=e.length;n<r;n++)a+=e[n]*i[n];return a}Object.defineProperty(i,"__esModule",{value:!0}),i.vec=a,i.add=n,i.scale=r,i.mean=t,i.dot=o},345:function(e,i,a){"use strict";function n(e){if(e.length<=4)return[e];var i=t[e.toLowerCase()];if(i)return i;for(var a="."+e.toLowerCase()+".",n=(0,r.vec)(a.length+1,0),o=0,l=a.length;o<l;o++)for(var c=s,u=o;u<l;u++){var d=a[u];if(!(d in c))break;if(c=c[d],c.points)for(var p=0,m=c.points.length;p<m;p++)n[o+p]=Math.max(n[o+p],c.points[p])}n[1]=0,n[2]=0,n[n.length-2]=0,n[n.length-3]=0;for(var g=[""],h=0,b=e.length;h<b;h++)g[g.length-1]+=e[h],n[h+2]%2&&g.push("");return g}Object.defineProperty(i,"__esModule",{value:!0}),i.default=n;var r=a(97),t={associate:["as","so","ciate"],associates:["as","so","ciates"],declination:["de","cli","na","tion"],obligatory:["oblig","a","tory"],philanthropic:["phil","an","thropic"],present:["present"],presents:["presents"],project:["project"],projects:["projects"],reciprocity:["reci","procity"],recognizance:["re","cog","ni","zance"],reformantion:["ref","or","ma","tion"],retribution:["ret","ri","bu","tion"],table:["ta","ble"]},o="\n.ach4 .ad4der .af1t .al3t .am5at .an5c .ang4 .ani5m .ant4 .an3te .anti5s .ar5s\n.ar4tie .ar4ty .as3c .as1p .as1s .aster5 .atom5 .au1d .av4i .awn4 .ba4g .ba5na\n.bas4e .ber4 .be5ra .be3sm .be5sto .bri2 .but4ti .cam4pe .can5c .capa5b .car5ol\n.ca4t .ce4la .ch4 .chill5i .ci2 .cit5r .co3e .co4r .cor5ner .de4moi .de3o .de3ra\n.de3ri .des4c .dictio5 .do4t .du4c .dumb5 .earth5 .eas3i .eb4 .eer4 .eg2 .el5d\n.el3em .enam3 .en3g .en3s .eq5ui5t .er4ri .es3 .eu3 .eye5 .fes3 .for5mer .ga2\n.ge2 .gen3t4 .ge5og .gi5a .gi4b .go4r .hand5i .han5k .he2 .hero5i .hes3 .het3\n.hi3b .hi3er .hon5ey .hon3o .hov5 .id4l .idol3 .im3m .im5pin .in1 .in3ci .ine2\n.in2k .in3s .ir5r .is4i .ju3r .la4cy .la4m .lat5er .lath5 .le2 .leg5e .len4\n.lep5 .lev1 .li4g .lig5a .li2n .li3o .li4t .mag5a5 .mal5o .man5a .mar5ti .me2\n.mer3c .me5ter .mis1 .mist5i .mon3e .mo3ro .mu5ta .muta5b .ni4c .od2 .odd5\n.of5te .or5ato .or3c .or1d .or3t .os3 .os4tl .oth3 .out3 .ped5al .pe5te .pe5tit\n.pi4e .pio5n .pi2t .pre3m .ra4c .ran4t .ratio5na .ree2 .re5mit .res2 .re5stat\n.ri4g .rit5u .ro4q .ros5t .row5d .ru4d .sci3e .self5 .sell5 .se2n .se5rie .sh2\n.si2 .sing4 .st4 .sta5bl .sy2 .ta4 .te4 .ten5an .th2 .ti2 .til4 .tim5o5 .ting4\n.tin5k .ton4a .to4p .top5i .tou5s .trib5ut .un1a .un3ce .under5 .un1e .un5k\n.un5o .un3u .up3 .ure3 .us5a .ven4de .ve5ra .wil5i .ye4 4ab. a5bal a5ban abe2\nab5erd abi5a ab5it5ab ab5lat ab5o5liz 4abr ab5rog ab3ul a4car ac5ard ac5aro\na5ceou ac1er a5chet 4a2ci a3cie ac1in a3cio ac5rob act5if ac3ul ac4um a2d ad4din\nad5er. 2adi a3dia ad3ica adi4er a3dio a3dit a5diu ad4le ad3ow ad5ran ad4su 4adu\na3duc ad5um ae4r aeri4e a2f aff4 a4gab aga4n ag5ell age4o 4ageu ag1i 4ag4l ag1n\na2go 3agog ag3oni a5guer ag5ul a4gy a3ha a3he ah4l a3ho ai2 a5ia a3ic. ai5ly\na4i4n ain5in ain5o ait5en a1j ak1en al5ab al3ad a4lar 4aldi 2ale al3end a4lenti\na5le5o al1i al4ia. ali4e al5lev 4allic 4alm a5log. a4ly. 4alys 5a5lyst 5alyt\n3alyz 4ama am5ab am3ag ama5ra am5asc a4matis a4m5ato am5era am3ic am5if am5ily\nam1in ami4no a2mo a5mon amor5i amp5en a2n an3age 3analy a3nar an3arc anar4i\na3nati 4and ande4s an3dis an1dl an4dow a5nee a3nen an5est. a3neu 2ang ang5ie\nan1gl a4n1ic a3nies an3i3f an4ime a5nimi a5nine an3io a3nip an3ish an3it a3niu\nan4kli 5anniz ano4 an5ot anoth5 an2sa an4sco an4sn an2sp ans3po an4st an4sur\nantal4 an4tie 4anto an2tr an4tw an3ua an3ul a5nur 4ao apar4 ap5at ap5ero a3pher\n4aphi a4pilla ap5illar ap3in ap3ita a3pitu a2pl apoc5 ap5ola apor5i apos3t\naps5es a3pu aque5 2a2r ar3act a5rade ar5adis ar3al a5ramete aran4g ara3p ar4at\na5ratio ar5ativ a5rau ar5av4 araw4 arbal4 ar4chan ar5dine ar4dr ar5eas a3ree\nar3ent a5ress ar4fi ar4fl ar1i ar5ial ar3ian a3riet ar4im ar5inat ar3io ar2iz\nar2mi ar5o5d a5roni a3roo ar2p ar3q arre4 ar4sa ar2sh 4as. as4ab as3ant ashi4\na5sia. a3sib a3sic 5a5si4t ask3i as4l a4soc as5ph as4sh as3ten as1tr asur5a a2ta\nat3abl at5ac at3alo at5ap ate5c at5ech at3ego at3en. at3era ater5n a5terna\nat3est at5ev 4ath ath5em a5then at4ho ath5om 4ati. a5tia at5i5b at1ic at3if\nation5ar at3itu a4tog a2tom at5omiz a4top a4tos a1tr at5rop at4sk at4tag at5te\nat4th a2tu at5ua at5ue at3ul at3ura a2ty au4b augh3 au3gu au4l2 aun5d au3r\nau5sib aut5en au1th a2va av3ag a5van ave4no av3era av5ern av5ery av1i avi4er\nav3ig av5oc a1vor 3away aw3i aw4ly aws4 ax4ic ax4id ay5al aye4 ays4 azi4er azz5i\n5ba. bad5ger ba4ge bal1a ban5dag ban4e ban3i barbi5 bari4a bas4si 1bat ba4z 2b1b\nb2be b3ber bbi4na 4b1d 4be. beak4 beat3 4be2d be3da be3de be3di be3gi be5gu 1bel\nbe1li be3lo 4be5m be5nig be5nu 4bes4 be3sp be5str 3bet bet5iz be5tr be3tw be3w\nbe5yo 2bf 4b3h bi2b bi4d 3bie bi5en bi4er 2b3if 1bil bi3liz bina5r4 bin4d bi5net\nbi3ogr bi5ou bi2t 3bi3tio bi3tr 3bit5ua b5itz b1j bk4 b2l2 blath5 b4le. blen4\n5blesp b3lis b4lo blun4t 4b1m 4b3n bne5g 3bod bod3i bo4e bol3ic bom4bi bon4a\nbon5at 3boo 5bor. 4b1ora bor5d 5bore 5bori 5bos4 b5ota both5 bo4to bound3 4bp\n4brit broth3 2b5s2 bsor4 2bt bt4l b4to b3tr buf4fer bu4ga bu3li bumi4 bu4n\nbunt4i bu3re bus5ie buss4e 5bust 4buta 3butio b5uto b1v 4b5w 5by. bys4 1ca\ncab3in ca1bl cach4 ca5den 4cag4 2c5ah ca3lat cal4la call5in 4calo can5d can4e\ncan4ic can5is can3iz can4ty cany4 ca5per car5om cast5er cas5tig 4casy ca4th\n4cativ cav5al c3c ccha5 cci4a ccompa5 ccon4 ccou3t 2ce. 4ced. 4ceden 3cei 5cel.\n3cell 1cen 3cenc 2cen4e 4ceni 3cent 3cep ce5ram 4cesa 3cessi ces5si5b ces5t cet4\nc5e4ta cew4 2ch 4ch. 4ch3ab 5chanic ch5a5nis che2 cheap3 4ched che5lo 3chemi\nch5ene ch3er. ch3ers 4ch1in 5chine. ch5iness 5chini 5chio 3chit chi2z 3cho2\nch4ti 1ci 3cia ci2a5b cia5r ci5c 4cier 5cific. 4cii ci4la 3cili 2cim 2cin c4ina\n3cinat cin3em c1ing c5ing. 5cino cion4 4cipe ci3ph 4cipic 4cista 4cisti 2c1it\ncit3iz 5ciz ck1 ck3i 1c4l4 4clar c5laratio 5clare cle4m 4clic clim4 cly4 c5n 1co\nco5ag coe2 2cog co4gr coi4 co3inc col5i 5colo col3or com5er con4a c4one con3g\ncon5t co3pa cop3ic co4pl 4corb coro3n cos4e cov1 cove4 cow5a coz5e co5zi c1q\ncras5t 5crat. 5cratic cre3at 5cred 4c3reta cre4v cri2 cri5f c4rin cris4 5criti\ncro4pl crop5o cros4e cru4d 4c3s2 2c1t cta4b ct5ang c5tant c2te c3ter c4ticu\nctim3i ctu4r c4tw cud5 c4uf c4ui cu5ity 5culi cul4tis 3cultu cu2ma c3ume cu4mi\n3cun cu3pi cu5py cur5a4b cu5ria 1cus cuss4i 3c4ut cu4tie 4c5utiv 4cutr 1cy cze4\n1d2a 5da. 2d3a4b dach4 4daf 2dag da2m2 dan3g dard5 dark5 4dary 3dat 4dativ 4dato\n5dav4 dav5e 5day d1b d5c d1d4 2de. deaf5 deb5it de4bon decan4 de4cil de5com\n2d1ed 4dee. de5if deli4e del5i5q de5lo d4em 5dem. 3demic dem5ic. de5mil de4mons\ndemor5 1den de4nar de3no denti5f de3nu de1p de3pa depi4 de2pu d3eq d4erh 5derm\ndern5iz der5s des2 d2es. de1sc de2s5o des3ti de3str de4su de1t de2to de1v dev3il\n4dey 4d1f d4ga d3ge4t dg1i d2gy d1h2 5di. 1d4i3a dia5b di4cam d4ice 3dict 3did\n5di3en d1if di3ge di4lato d1in 1dina 3dine. 5dini di5niz 1dio dio5g di4pl dir2\ndi1re dirt5i dis1 5disi d4is3t d2iti 1di1v d1j d5k2 4d5la 3dle. 3dled 3dles.\n4dless 2d3lo 4d5lu 2dly d1m 4d1n4 1do 3do. do5de 5doe 2d5of d4og do4la doli4\ndo5lor dom5iz do3nat doni4 doo3d dop4p d4or 3dos 4d5out do4v 3dox d1p 1dr\ndrag5on 4drai dre4 drea5r 5dren dri4b dril4 dro4p 4drow 5drupli 4dry 2d1s2 ds4p\nd4sw d4sy d2th 1du d1u1a du2c d1uca duc5er 4duct. 4ducts du5el du4g d3ule dum4be\ndu4n 4dup du4pe d1v d1w d2y 5dyn dy4se dys5p e1a4b e3act ead1 ead5ie ea4ge\nea5ger ea4l eal5er eal3ou eam3er e5and ear3a ear4c ear5es ear4ic ear4il ear5k\near2t eart3e ea5sp e3ass east3 ea2t eat5en eath3i e5atif e4a3tu ea2v eav3en\neav5i eav5o 2e1b e4bel. e4bels e4ben e4bit e3br e4cad ecan5c ecca5 e1ce ec5essa\nec2i e4cib ec5ificat ec5ifie ec5ify ec3im eci4t e5cite e4clam e4clus e2col\ne4comm e4compe e4conc e2cor ec3ora eco5ro e1cr e4crem ec4tan ec4te e1cu e4cul\nec3ula 2e2da 4ed3d e4d1er ede4s 4edi e3dia ed3ib ed3ica ed3im ed1it edi5z 4edo\ne4dol edon2 e4dri e4dul ed5ulo ee2c eed3i ee2f eel3i ee4ly ee2m ee4na ee4p1\nee2s4 eest4 ee4ty e5ex e1f e4f3ere 1eff e4fic 5efici efil4 e3fine ef5i5nite\n3efit efor5es e4fuse. 4egal eger4 eg5ib eg4ic eg5ing e5git5 eg5n e4go. e4gos\neg1ul e5gur 5egy e1h4 eher4 ei2 e5ic ei5d eig2 ei5gl e3imb e3inf e1ing e5inst\neir4d eit3e ei3th e5ity e1j e4jud ej5udi eki4n ek4la e1la e4la. e4lac elan4d\nel5ativ e4law elaxa4 e3lea el5ebra 5elec e4led el3ega e5len e4l1er e1les el2f\nel2i e3libe e4l5ic. el3ica e3lier el5igib e5lim e4l3ing e3lio e2lis el5ish\ne3liv3 4ella el4lab ello4 e5loc el5og el3op. el2sh el4ta e5lud el5ug e4mac e4mag\ne5man em5ana em5b e1me e2mel e4met em3ica emi4e em5igra em1in2 em5ine em3i3ni\ne4mis em5ish e5miss em3iz 5emniz emo4g emoni5o em3pi e4mul em5ula emu3n e3my\nen5amo e4nant ench4er en3dic e5nea e5nee en3em en5ero en5esi en5est en3etr e3new\nen5ics e5nie e5nil e3nio en3ish en3it e5niu 5eniz 4enn 4eno eno4g e4nos en3ov\nen4sw ent5age 4enthes en3ua en5uf e3ny. 4en3z e5of eo2g e4oi4 e3ol eop3ar e1or\neo3re eo5rol eos4 e4ot eo4to e5out e5ow e2pa e3pai ep5anc e5pel e3pent ep5etitio\nephe4 e4pli e1po e4prec ep5reca e4pred ep3reh e3pro e4prob ep4sh ep5ti5b e4put\nep5uta e1q equi3l e4q3ui3s er1a era4b 4erand er3ar 4erati. 2erb er4bl er3ch\ner4che 2ere. e3real ere5co ere3in er5el. er3emo er5ena er5ence 4erene er3ent\nere4q er5ess er3est eret4 er1h er1i e1ria4 5erick e3rien eri4er er3ine e1rio\n4erit er4iu eri4v e4riva er3m4 er4nis 4ernit 5erniz er3no 2ero er5ob e5roc ero4r\ner1ou er1s er3set ert3er 4ertl er3tw 4eru eru4t 5erwau e1s4a e4sage. e4sages\nes2c e2sca es5can e3scr es5cu e1s2e e2sec es5ecr es5enc e4sert. e4serts e4serva\n4esh e3sha esh5en e1si e2sic e2sid es5iden es5igna e2s5im es4i4n esis4te esi4u\ne5skin es4mi e2sol es3olu e2son es5ona e1sp es3per es5pira es4pre 2ess es4si4b\nestan4 es3tig es5tim 4es2to e3ston 2estr e5stro estruc5 e2sur es5urr es4w eta4b\neten4d e3teo ethod3 et1ic e5tide etin4 eti4no e5tir e5titio et5itiv 4etn et5ona\ne3tra e3tre et3ric et5rif et3rog et5ros et3ua et5ym et5z 4eu e5un e3up eu3ro\neus4 eute4 euti5l eu5tr eva2p5 e2vas ev5ast e5vea ev3ell evel3o e5veng even4i\nev1er e5verb e1vi ev3id evi4l e4vin evi4v e5voc e5vu e1wa e4wag e5wee e3wh ewil5\new3ing e3wit 1exp 5eyc 5eye. eys4 1fa fa3bl fab3r fa4ce 4fag fain4 fall5e 4fa4ma\nfam5is 5far far5th fa3ta fa3the 4fato fault5 4f5b 4fd 4fe. feas4 feath3 fe4b\n4feca 5fect 2fed fe3li fe4mo fen2d fend5e fer1 5ferr fev4 4f1f f4fes f4fie\nf5fin. f2f5is f4fly f2fy 4fh 1fi fi3a 2f3ic. 4f3ical f3ican 4ficate f3icen\nfi3cer fic4i 5ficia 5ficie 4fics fi3cu fi5del fight5 fil5i fill5in 4fily 2fin\n5fina fin2d5 fi2ne f1in3g fin4n fis4ti f4l2 f5less flin4 flo3re f2ly5 4fm 4fn\n1fo 5fon fon4de fon4t fo2r fo5rat for5ay fore5t for4i fort5a fos5 4f5p fra4t\nf5rea fres5c fri2 fril4 frol5 2f3s 2ft f4to f2ty 3fu fu5el 4fug fu4min fu5ne\nfu3ri fusi4 fus4s 4futa 1fy 1ga gaf4 5gal. 3gali ga3lo 2gam ga5met g5amo gan5is\nga3niz gani5za 4gano gar5n4 gass4 gath3 4gativ 4gaz g3b gd4 2ge. 2ged geez4\ngel4in ge5lis ge5liz 4gely 1gen ge4nat ge5niz 4geno 4geny 1geo ge3om g4ery 5gesi\ngeth5 4geto ge4ty ge4v 4g1g2 g2ge g3ger gglu5 ggo4 gh3in gh5out gh4to 5gi. 1gi4a\ngia5r g1ic 5gicia g4ico gien5 5gies. gil4 g3imen 3g4in. gin5ge 5g4ins 5gio 3gir\ngir4l g3isl gi4u 5giv 3giz gl2 gla4 glad5i 5glas 1gle gli4b g3lig 3glo glo3r g1m\ng4my gn4a g4na. gnet4t g1ni g2nin g4nio g1no g4non 1go 3go. gob5 5goe 3g4o4g\ngo3is gon2 4g3o3na gondo5 go3ni 5goo go5riz gor5ou 5gos. gov1 g3p 1gr 4grada\ng4rai gran2 5graph. g5rapher 5graphic 4graphy 4gray gre4n 4gress. 4grit g4ro\ngruf4 gs2 g5ste gth3 gu4a 3guard 2gue 5gui5t 3gun 3gus 4gu4t g3w 1gy 2g5y3n\ngy5ra h3ab4l hach4 hae4m hae4t h5agu ha3la hala3m ha4m han4ci han4cy 5hand.\nhan4g hang5er hang5o h5a5niz han4k han4te hap3l hap5t ha3ran ha5ras har2d hard3e\nhar4le harp5en har5ter has5s haun4 5haz haz3a h1b 1head 3hear he4can h5ecat h4ed\nhe5do5 he3l4i hel4lis hel4ly h5elo hem4p he2n hena4 hen5at heo5r hep5 h4era\nhera3p her4ba here5a h3ern h5erou h3ery h1es he2s5p he4t het4ed heu4 h1f h1h\nhi5an hi4co high5 h4il2 himer4 h4ina hion4e hi4p hir4l hi3ro hir4p hir4r his3el\nhis4s hith5er hi2v 4hk 4h1l4 hlan4 h2lo hlo3ri 4h1m hmet4 2h1n h5odiz h5ods ho4g\nhoge4 hol5ar 3hol4e ho4ma home3 hon4a ho5ny 3hood hoon4 hor5at ho5ris hort3e\nho5ru hos4e ho5sen hos1p 1hous house3 hov5el 4h5p 4hr4 hree5 hro5niz hro3po\n4h1s2 h4sh h4tar ht1en ht5es h4ty hu4g hu4min hun5ke hun4t hus3t4 hu4t h1w\nh4wart hy3pe hy3ph hy2s 2i1a i2al iam4 iam5ete i2an 4ianc ian3i 4ian4t ia5pe\niass4 i4ativ ia4tric i4atu ibe4 ib3era ib5ert ib5ia ib3in ib5it. ib5ite i1bl\nib3li i5bo i1br i2b5ri i5bun 4icam 5icap 4icar i4car. i4cara icas5 i4cay iccu4\n4iceo 4ich 2ici i5cid ic5ina i2cip ic3ipa i4cly i2c5oc 4i1cr 5icra i4cry ic4te\nictu2 ic4t3ua ic3ula ic4um ic5uo i3cur 2id i4dai id5anc id5d ide3al ide4s i2di\nid5ian idi4ar i5die id3io idi5ou id1it id5iu i3dle i4dom id3ow i4dr i2du id5uo\n2ie4 ied4e 5ie5ga ield3 ien5a4 ien4e i5enn i3enti i1er. i3esc i1est i3et 4if.\nif5ero iff5en if4fr 4ific. i3fie i3fl 4ift 2ig iga5b ig3era ight3i 4igi i3gib\nig3il ig3in ig3it i4g4l i2go ig3or ig5ot i5gre igu5i ig1ur i3h 4i5i4 i3j 4ik\ni1la il3a4b i4lade i2l5am ila5ra i3leg il1er ilev4 il5f il1i il3ia il2ib il3io\nil4ist 2ilit il2iz ill5ab 4iln il3oq il4ty il5ur il3v i4mag im3age ima5ry\nimenta5r 4imet im1i im5ida imi5le i5mini 4imit im4ni i3mon i2mu im3ula 2in.\ni4n3au 4inav incel4 in3cer 4ind in5dling 2ine i3nee iner4ar i5ness 4inga 4inge\nin5gen 4ingi in5gling 4ingo 4ingu 2ini i5ni. i4nia in3io in1is i5nite. 5initio\nin3ity 4ink 4inl 2inn 2i1no i4no4c ino4s i4not 2ins in3se insur5a 2int. 2in4th\nin1u i5nus 4iny 2io 4io. ioge4 io2gr i1ol io4m ion3at ion4ery ion3i io5ph ior3i\ni4os io5th i5oti io4to i4our 2ip ipe4 iphras4 ip3i ip4ic ip4re4 ip3ul i3qua\niq5uef iq3uid iq3ui3t 4ir i1ra ira4b i4rac ird5e ire4de i4ref i4rel4 i4res ir5gi\nir1i iri5de ir4is iri3tu 5i5r2iz ir4min iro4g 5iron. ir5ul 2is. is5ag is3ar\nisas5 2is1c is3ch 4ise is3er 3isf is5han is3hon ish5op is3ib isi4d i5sis is5itiv\n4is4k islan4 4isms i2so iso5mer is1p is2pi is4py 4is1s is4sal issen4 is4ses\nis4ta. is1te is1ti ist4ly 4istral i2su is5us 4ita. ita4bi i4tag 4ita5m i3tan\ni3tat 2ite it3era i5teri it4es 2ith i1ti 4itia 4i2tic it3ica 5i5tick it3ig\nit5ill i2tim 2itio 4itis i4tism i2t5o5m 4iton i4tram it5ry 4itt it3uat i5tud\nit3ul 4itz. i1u 2iv iv3ell iv3en. i4v3er. i4vers. iv5il. iv5io iv1it i5vore\niv3o3ro i4v3ot 4i5w ix4o 4iy 4izar izi4 5izont 5ja jac4q ja4p 1je jer5s 4jestie\n4jesty jew3 jo4p 5judg 3ka. k3ab k5ag kais4 kal4 k1b k2ed 1kee ke4g ke5li k3en4d\nk1er kes4 k3est. ke4ty k3f kh4 k1i 5ki. 5k2ic k4ill kilo5 k4im k4in. kin4de\nk5iness kin4g ki4p kis4 k5ish kk4 k1l 4kley 4kly k1m k5nes 1k2no ko5r kosh4 k3ou\nkro5n 4k1s2 k4sc ks4l k4sy k5t k1w lab3ic l4abo laci4 l4ade la3dy lag4n lam3o\n3land lan4dl lan5et lan4te lar4g lar3i las4e la5tan 4lateli 4lativ 4lav la4v4a\n2l1b lbin4 4l1c2 lce4 l3ci 2ld l2de ld4ere ld4eri ldi4 ld5is l3dr l4dri le2a\nle4bi left5 5leg. 5legg le4mat lem5atic 4len. 3lenc 5lene. 1lent le3ph le4pr\nlera5b ler4e 3lerg 3l4eri l4ero les2 le5sco 5lesq 3less 5less. l3eva lev4er.\nlev4era lev4ers 3ley 4leye 2lf l5fr 4l1g4 l5ga lgar3 l4ges lgo3 2l3h li4ag li2am\nliar5iz li4as li4ato li5bi 5licio li4cor 4lics 4lict. l4icu l3icy l3ida lid5er\n3lidi lif3er l4iff li4fl 5ligate 3ligh li4gra 3lik 4l4i4l lim4bl lim3i li4mo\nl4im4p l4ina 1l4ine lin3ea lin3i link5er li5og 4l4iq lis4p l1it l2it. 5litica\nl5i5tics liv3er l1iz 4lj lka3 l3kal lka4t l1l l4law l2le l5lea l3lec l3leg l3lel\nl3le4n l3le4t ll2i l2lin4 l5lina ll4o lloqui5 ll5out l5low 2lm l5met lm3ing\nl4mod lmon4 2l1n2 3lo. lob5al lo4ci 4lof 3logic l5ogo 3logu lom3er 5long lon4i\nl3o3niz lood5 5lope. lop3i l3opm lora4 lo4rato lo5rie lor5ou 5los. los5et\n5losophiz 5losophy los4t lo4ta loun5d 2lout 4lov 2lp lpa5b l3pha l5phi lp5ing\nl3pit l4pl l5pr 4l1r 2l1s2 l4sc l2se l4sie 4lt lt5ag ltane5 l1te lten4 ltera4\nlth3i l5ties. ltis4 l1tr ltu2 ltur3a lu5a lu3br luch4 lu3ci lu3en luf4 lu5id\nlu4ma 5lumi l5umn. 5lumnia lu3o luo3r 4lup luss4 lus3te 1lut l5ven l5vet4 2l1w\n1ly 4lya 4lyb ly5me ly3no 2lys4 l5yse 1ma 2mab ma2ca ma5chine ma4cl mag5in 5magn\n2mah maid5 4mald ma3lig ma5lin mal4li mal4ty 5mania man5is man3iz 4map ma5rine.\nma5riz mar4ly mar3v ma5sce mas4e mas1t 5mate math3 ma3tis 4matiza 4m1b mba4t5\nm5bil m4b3ing mbi4v 4m5c 4me. 2med 4med. 5media me3die m5e5dy me2g mel5on mel4t\nme2m mem1o3 1men men4a men5ac men4de 4mene men4i mens4 mensu5 3ment men4te me5on\nm5ersa 2mes 3mesti me4ta met3al me1te me5thi m4etr 5metric me5trie me3try me4v\n4m1f 2mh 5mi. mi3a mid4a mid4g mig4 3milia m5i5lie m4ill min4a 3mind m5inee\nm4ingl min5gli m5ingly min4t m4inu miot4 m2is mis4er. mis5l mis4ti m5istry 4mith\nm2iz 4mk 4m1l m1m mma5ry 4m1n mn4a m4nin mn4o 1mo 4mocr 5mocratiz mo2d1 mo4go\nmois2 moi5se 4mok mo5lest mo3me mon5et mon5ge moni3a mon4ism mon4ist mo3niz\nmonol4 mo3ny. mo2r 4mora. mos2 mo5sey mo3sp moth3 m5ouf 3mous mo2v 4m1p mpara5\nmpa5rab mpar5i m3pet mphas4 m2pi mpi4a mp5ies m4p1in m5pir mp5is mpo3ri mpos5ite\nm4pous mpov5 mp4tr m2py 4m3r 4m1s2 m4sh m5si 4mt 1mu mula5r4 5mult multi3 3mum\nmun2 4mup mu4u 4mw 1na 2n1a2b n4abu 4nac. na4ca n5act nag5er. nak4 na4li na5lia\n4nalt na5mit n2an nanci4 nan4it nank4 nar3c 4nare nar3i nar4l n5arm n4as nas4c\nnas5ti n2at na3tal nato5miz n2au nau3se 3naut nav4e 4n1b4 ncar5 n4ces. n3cha\nn5cheo n5chil n3chis nc1in nc4it ncour5a n1cr n1cu n4dai n5dan n1de nd5est.\nndi4b n5d2if n1dit n3diz n5duc ndu4r nd2we 2ne. n3ear ne2b neb3u ne2c 5neck 2ned\nne4gat neg5ativ 5nege ne4la nel5iz ne5mi ne4mo 1nen 4nene 3neo ne4po ne2q n1er\nnera5b n4erar n2ere n4er5i ner4r 1nes 2nes. 4nesp 2nest 4nesw 3netic ne4v n5eve\nne4w n3f n4gab n3gel nge4n4e n5gere n3geri ng5ha n3gib ng1in n5git n4gla ngov4\nng5sh n1gu n4gum n2gy 4n1h4 nha4 nhab3 nhe4 3n4ia ni3an ni4ap ni3ba ni4bl ni4d\nni5di ni4er ni2fi ni5ficat n5igr nik4 n1im ni3miz n1in 5nine. nin4g ni4o 5nis.\nnis4ta n2it n4ith 3nitio n3itor ni3tr n1j 4nk2 n5kero n3ket nk3in n1kl 4n1l n5m\nnme4 nmet4 4n1n2 nne4 nni3al nni4v nob4l no3ble n5ocl 4n3o2d 3noe 4nog noge4\nnois5i no5l4i 5nologis 3nomic n5o5miz no4mo no3my no4n non4ag non5i n5oniz 4nop\n5nop5o5li nor5ab no4rary 4nosc nos4e nos5t no5ta 1nou 3noun nov3el3 nowl3 n1p4\nnpi4 npre4c n1q n1r nru4 2n1s2 ns5ab nsati4 ns4c n2se n4s3es nsid1 nsig4 n2sl\nns3m n4soc ns4pe n5spi nsta5bl n1t nta4b nter3s nt2i n5tib nti4er nti2f n3tine\nn4t3ing nti4p ntrol5li nt4s ntu3me nu1a nu4d nu5en nuf4fe n3uin 3nu3it n4um\nnu1me n5umi 3nu4n n3uo nu3tr n1v2 n1w4 nym4 nyp4 4nz n3za 4oa oad3 o5a5les oard3\noas4e oast5e oat5i ob3a3b o5bar obe4l o1bi o2bin ob5ing o3br ob3ul o1ce och4\no3chet ocif3 o4cil o4clam o4cod oc3rac oc5ratiz ocre3 5ocrit octor5a oc3ula\no5cure od5ded od3ic odi3o o2do4 odor3 od5uct. od5ucts o4el o5eng o3er oe4ta o3ev\no2fi of5ite ofit4t o2g5a5r og5ativ o4gato o1ge o5gene o5geo o4ger o3gie 1o1gis\nog3it o4gl o5g2ly 3ogniz o4gro ogu5i 1ogy 2ogyn o1h2 ohab5 oi2 oic3es oi3der\noiff4 oig4 oi5let o3ing oint5er o5ism oi5son oist5en oi3ter o5j 2ok o3ken ok5ie\no1la o4lan olass4 ol2d old1e ol3er o3lesc o3let ol4fi ol2i o3lia o3lice ol5id.\no3li4f o5lil ol3ing o5lio o5lis. ol3ish o5lite o5litio o5liv olli4e ol5ogiz\nolo4r ol5pl ol2t ol3ub ol3ume ol3un o5lus ol2v o2ly om5ah oma5l om5atiz om2be\nom4bl o2me om3ena om5erse o4met om5etry o3mia om3ic. om3ica o5mid om1in o5mini\n5ommend omo4ge o4mon om3pi ompro5 o2n on1a on4ac o3nan on1c 3oncil 2ond on5do\no3nen on5est on4gu on1ic o3nio on1is o5niu on3key on4odi on3omy on3s onspi4\nonspir5a onsu4 onten4 on3t4i ontif5 on5um onva5 oo2 ood5e ood5i oo4k oop3i o3ord\noost5 o2pa ope5d op1er 3opera 4operag 2oph o5phan o5pher op3ing o3pit o5pon\no4posi o1pr op1u opy5 o1q o1ra o5ra. o4r3ag or5aliz or5ange ore5a o5real or3ei\nore5sh or5est. orew4 or4gu 4o5ria or3ica o5ril or1in o1rio or3ity o3riu or2mi\norn2e o5rof or3oug or5pe 3orrh or4se ors5en orst4 or3thi or3thy or4ty o5rum o1ry\nos3al os2c os4ce o3scop 4oscopi o5scr os4i4e os5itiv os3ito os3ity osi4u os4l\no2so os4pa os4po os2ta o5stati os5til os5tit o4tan otele4g ot3er. ot5ers o4tes\n4oth oth5esi oth3i4 ot3ic. ot5ica o3tice o3tif o3tis oto5s ou2 ou3bl ouch5i\nou5et ou4l ounc5er oun2d ou5v ov4en over4ne over3s ov4ert o3vis oviti4 o5v4ol\now3der ow3el ow5est ow1i own5i o4wo oy1a 1pa pa4ca pa4ce pac4t p4ad 5pagan\np3agat p4ai pain4 p4al pan4a pan3el pan4ty pa3ny pa1p pa4pu para5bl par5age\npar5di 3pare par5el p4a4ri par4is pa2te pa5ter 5pathic pa5thy pa4tric pav4 3pay\n4p1b pd4 4pe. 3pe4a pear4l pe2c 2p2ed 3pede 3pedi pedia4 ped4ic p4ee pee4d pek4\npe4la peli4e pe4nan p4enc pen4th pe5on p4era. pera5bl p4erag p4eri peri5st\nper4mal perme5 p4ern per3o per3ti pe5ru per1v pe2t pe5ten pe5tiz 4pf 4pg 4ph.\nphar5i phe3no ph4er ph4es. ph1ic 5phie ph5ing 5phisti 3phiz ph2l 3phob 3phone\n5phoni pho4r 4phs ph3t 5phu 1phy pi3a pian4 pi4cie pi4cy p4id p5ida pi3de 5pidi\n3piec pi3en pi4grap pi3lo pi2n p4in. pind4 p4ino 3pi1o pion4 p3ith pi5tha pi2tu\n2p3k2 1p2l2 3plan plas5t pli3a pli5er 4plig pli4n ploi4 plu4m plum4b 4p1m 2p3n\npo4c 5pod. po5em po3et5 5po4g poin2 5point poly5t po4ni po4p 1p4or po4ry 1pos\npos1s p4ot po4ta 5poun 4p1p ppa5ra p2pe p4ped p5pel p3pen p3per p3pet ppo5site\npr2 pray4e 5preci pre5co pre3em pref5ac pre4la pre3r p3rese 3press pre5ten pre3v\n5pri4e prin4t3 pri4s pris3o p3roca prof5it pro3l pros3e pro1t 2p1s2 p2se ps4h\np4sib 2p1t pt5a4b p2te p2th pti3m ptu4r p4tw pub3 pue4 puf4 pul3c pu4m pu2n\npur4r 5pus pu2t 5pute put3er pu3tr put4ted put4tin p3w qu2 qua5v 2que. 3quer\n3quet 2rab ra3bi rach4e r5acl raf5fi raf4t r2ai ra4lo ram3et r2ami rane5o ran4ge\nr4ani ra5no rap3er 3raphy rar5c rare4 rar5ef 4raril r2as ration4 rau4t ra5vai\nrav3el ra5zie r1b r4bab r4bag rbi2 rbi4f r2bin r5bine rb5ing. rb4o r1c r2ce\nrcen4 r3cha rch4er r4ci4b rc4it rcum3 r4dal rd2i rdi4a rdi4er rdin4 rd3ing 2re.\nre1al re3an re5arr 5reav re4aw r5ebrat rec5oll rec5ompe re4cre 2r2ed re1de\nre3dis red5it re4fac re2fe re5fer. re3fi re4fy reg3is re5it re1li re5lu r4en4ta\nren4te re1o re5pin re4posi re1pu r1er4 r4eri rero4 re5ru r4es. re4spi ress5ib\nres2t re5stal re3str re4ter re4ti4z re3tri reu2 re5uti rev2 re4val rev3el\nr5ev5er. re5vers re5vert re5vil rev5olu re4wh r1f rfu4 r4fy rg2 rg3er r3get\nr3gic rgi4n rg3ing r5gis r5git r1gl rgo4n r3gu rh4 4rh. 4rhal ri3a ria4b ri4ag\nr4ib rib3a ric5as r4ice 4rici 5ricid ri4cie r4ico rid5er ri3enc ri3ent ri1er\nri5et rig5an 5rigi ril3iz 5riman rim5i 3rimo rim4pe r2ina 5rina. rin4d rin4e\nrin4g ri1o 5riph riph5e ri2pl rip5lic r4iq r2is r4is. ris4c r3ish ris4p ri3ta3b\nr5ited. rit5er. rit5ers rit3ic ri2tu rit5ur riv5el riv3et riv3i r3j r3ket rk4le\nrk4lin r1l rle4 r2led r4lig r4lis rl5ish r3lo4 r1m rma5c r2me r3men rm5ers\nrm3ing r4ming. r4mio r3mit r4my r4nar r3nel r4ner r5net r3ney r5nic r1nis4 r3nit\nr3niv rno4 r4nou r3nu rob3l r2oc ro3cr ro4e ro1fe ro5fil rok2 ro5ker 5role.\nrom5ete rom4i rom4p ron4al ron4e ro5n4is ron4ta 1room 5root ro3pel rop3ic ror3i\nro5ro ros5per ros4s ro4the ro4ty ro4va rov5el rox5 r1p r4pea r5pent rp5er. r3pet\nrp4h4 rp3ing r3po r1r4 rre4c rre4f r4reo rre4st rri4o rri4v rron4 rros4 rrys4\n4rs2 r1sa rsa5ti rs4c r2se r3sec rse4cr rs5er. rs3es rse5v2 r1sh r5sha r1si\nr4si4b rson3 r1sp r5sw rtach4 r4tag r3teb rten4d rte5o r1ti rt5ib rti4d r4tier\nr3tig rtil3i rtil4l r4tily r4tist r4tiv r3tri rtroph4 rt4sh ru3a ru3e4l ru3en\nru4gl ru3in rum3pl ru2n runk5 run4ty r5usc ruti5n rv4e rvel4i r3ven rv5er.\nr5vest r3vey r3vic rvi4v r3vo r1w ry4c 5rynge ry3t sa2 2s1ab 5sack sac3ri s3act\n5sai salar4 sal4m sa5lo sal4t 3sanc san4de s1ap sa5ta 5sa3tio sat3u sau4 sa5vor\n5saw 4s5b scan4t5 sca4p scav5 s4ced 4scei s4ces sch2 s4cho 3s4cie 5scin4d scle5\ns4cli scof4 4scopy scour5a s1cu 4s5d 4se. se4a seas4 sea5w se2c3o 3sect 4s4ed\nse4d4e s5edl se2g seg3r 5sei se1le 5self 5selv 4seme se4mol sen5at 4senc sen4d\ns5ened sen5g s5enin 4sentd 4sentl sep3a3 4s1er. s4erl ser4o 4servo s1e4s se5sh\nses5t 5se5um 5sev sev3en sew4i 5sex 4s3f 2s3g s2h 2sh. sh1er 5shev sh1in sh3io\n3ship shiv5 sho4 sh5old shon3 shor4 short5 4shw si1b s5icc 3side. 5sides 5sidi\nsi5diz 4signa sil4e 4sily 2s1in s2ina 5sine. s3ing 1sio 5sion sion5a si2r sir5a\n1sis 3sitio 5siu 1siv 5siz sk2 4ske s3ket sk5ine sk5ing s1l2 s3lat s2le slith5\n2s1m s3ma small3 sman3 smel4 s5men 5smith smol5d4 s1n4 1so so4ce soft3 so4lab\nsol3d2 so3lic 5solv 3som 3s4on. sona4 son4g s4op 5sophic s5ophiz s5ophy sor5c\nsor5d 4sov so5vi 2spa 5spai spa4n spen4d 2s5peo 2sper s2phe 3spher spho5 spil4\nsp5ing 4spio s4ply s4pon spor4 4spot squal4l s1r 2ss s1sa ssas3 s2s5c s3sel\ns5seng s4ses. s5set s1si s4sie ssi4er ss5ily s4sl ss4li s4sn sspend4 ss2t ssur5a\nss5w 2st. s2tag s2tal stam4i 5stand s4ta4p 5stat. s4ted stern5i s5tero ste2w\nstew5a s3the st2i s4ti. s5tia s1tic 5stick s4tie s3tif st3ing 5stir s1tle 5stock\nstom3a 5stone s4top 3store st4r s4trad 5stratu s4tray s4trid 4stry 4st3w s2ty\n1su su1al su4b3 su2g3 su5is suit3 s4ul su2m sum3i su2n su2r 4sv sw2 4swo s4y\n4syc 3syl syn5o sy5rin 1ta 3ta. 2tab ta5bles 5taboliz 4taci ta5do 4taf4 tai5lo\nta2l ta5la tal5en tal3i 4talk tal4lis ta5log ta5mo tan4de tanta3 ta5per ta5pl\ntar4a 4tarc 4tare ta3riz tas4e ta5sy 4tatic ta4tur taun4 tav4 2taw tax4is 2t1b\n4tc t4ch tch5et 4t1d 4te. tead4i 4teat tece4 5tect 2t1ed te5di 1tee teg4 te5ger\nte5gi 3tel. teli4 5tels te2ma2 tem3at 3tenan 3tenc 3tend 4tenes 1tent ten4tag\n1teo te4p te5pe ter3c 5ter3d 1teri ter5ies ter3is teri5za 5ternit ter5v 4tes.\n4tess t3ess. teth5e 3teu 3tex 4tey 2t1f 4t1g 2th. than4 th2e 4thea th3eas the5at\nthe3is 3thet th5ic. th5ica 4thil 5think 4thl th5ode 5thodic 4thoo thor5it\ntho5riz 2ths 1tia ti4ab ti4ato 2ti2b 4tick t4ico t4ic1u 5tidi 3tien tif2 ti5fy\n2tig 5tigu till5in 1tim 4timp tim5ul 2t1in t2ina 3tine. 3tini 1tio ti5oc tion5ee\n5tiq ti3sa 3tise tis4m ti5so tis4p 5tistica ti3tl ti4u 1tiv tiv4a 1tiz ti3za\nti3zen 2tl t5la tlan4 3tle. 3tled 3tles. t5let. t5lo 4t1m tme4 2t1n2 1to to3b\nto5crat 4todo 2tof to2gr to5ic to2ma tom4b to3my ton4ali to3nat 4tono 4tony\nto2ra to3rie tor5iz tos2 5tour 4tout to3war 4t1p 1tra tra3b tra5ch traci4\ntrac4it trac4te tras4 tra5ven trav5es5 tre5f tre4m trem5i 5tria tri5ces 5tricia\n4trics 2trim tri4v tro5mi tron5i 4trony tro5phe tro3sp tro3v tru5i trus4 4t1s2\nt4sc tsh4 t4sw 4t3t2 t4tes t5to ttu4 1tu tu1a tu3ar tu4bi tud2 4tue 4tuf4 5tu3i\n3tum tu4nis 2t3up. 3ture 5turi tur3is tur5o tu5ry 3tus 4tv tw4 4t1wa twis4 4two\n1ty 4tya 2tyl type3 ty5ph 4tz tz4e 4uab uac4 ua5na uan4i uar5ant uar2d uar3i\nuar3t u1at uav4 ub4e u4bel u3ber u4bero u1b4i u4b5ing u3ble. u3ca uci4b uc4it\nucle3 u3cr u3cu u4cy ud5d ud3er ud5est udev4 u1dic ud3ied ud3ies ud5is u5dit\nu4don ud4si u4du u4ene uens4 uen4te uer4il 3ufa u3fl ugh3en ug5in 2ui2 uil5iz\nui4n u1ing uir4m uita4 uiv3 uiv4er. u5j 4uk u1la ula5b u5lati ulch4 5ulche\nul3der ul4e u1len ul4gi ul2i u5lia ul3ing ul5ish ul4lar ul4li4b ul4lis 4ul3m\nu1l4o 4uls uls5es ul1ti ultra3 4ultu u3lu ul5ul ul5v um5ab um4bi um4bly u1mi\nu4m3ing umor5o um2p unat4 u2ne un4er u1ni un4im u2nin un5ish uni3v un3s4 un4sw\nunt3ab un4ter. un4tes unu4 un5y un5z u4ors u5os u1ou u1pe uper5s u5pia up3ing\nu3pl up3p upport5 upt5ib uptu4 u1ra 4ura. u4rag u4ras ur4be urc4 ur1d ure5at\nur4fer ur4fr u3rif uri4fic ur1in u3rio u1rit ur3iz ur2l url5ing. ur4no uros4\nur4pe ur4pi urs5er ur5tes ur3the urti4 ur4tie u3ru 2us u5sad u5san us4ap usc2\nus3ci use5a u5sia u3sic us4lin us1p us5sl us5tere us1tr u2su usur4 uta4b u3tat\n4ute. 4utel 4uten uten4i 4u1t2i uti5liz u3tine ut3ing ution5a u4tis 5u5tiz u4t1l\nut5of uto5g uto5matic u5ton u4tou uts4 u3u uu4m u1v2 uxu3 uz4e 1va 5va. 2v1a4b\nvac5il vac3u vag4 va4ge va5lie val5o val1u va5mo va5niz va5pi var5ied 3vat 4ve.\n4ved veg3 v3el. vel3li ve4lo v4ely ven3om v5enue v4erd 5vere. v4erel v3eren\nver5enc v4eres ver3ie vermi4n 3verse ver3th v4e2s 4ves. ves4te ve4te vet3er\nve4ty vi5ali 5vian 5vide. 5vided 4v3iden 5vides 5vidi v3if vi5gn vik4 2vil\n5vilit v3i3liz v1in 4vi4na v2inc vin5d 4ving vio3l v3io4r vi1ou vi4p vi5ro\nvis3it vi3so vi3su 4viti vit3r 4vity 3viv 5vo. voi4 3vok vo4la v5ole 5volt 3volv\nvom5i vor5ab vori4 vo4ry vo4ta 4votee 4vv4 v4y w5abl 2wac wa5ger wag5o wait5\nw5al. wam4 war4t was4t wa1te wa5ver w1b wea5rie weath3 wed4n weet3 wee5v wel4l\nw1er west3 w3ev whi4 wi2 wil2 will5in win4de win4g wir4 3wise with3 wiz5 w4k\nwl4es wl3in w4no 1wo2 wom1 wo5ven w5p wra4 wri4 writa4 w3sh ws4l ws4pe w5s4t 4wt\nwy4 x1a xac5e x4ago xam3 x4ap xas5 x3c2 x1e xe4cuto x2ed xer4i xe5ro x1h xhi2\nxhil5 xhu4 x3i xi5a xi5c xi5di x4ime xi5miz x3o x4ob x3p xpan4d xpecto5 xpe3d\nx1t2 x3ti x1u xu3a xx4 y5ac 3yar4 y5at y1b y1c y2ce yc5er y3ch ych4e ycom4 ycot4\ny1d y5ee y1er y4erf yes4 ye4t y5gi 4y3h y1i y3la ylla5bl y3lo y5lu ymbol5 yme4\nympa3 yn3chr yn5d yn5g yn5ic 5ynx y1o4 yo5d y4o5g yom4 yo5net y4ons y4os y4ped\nyper5 yp3i y3po y4poc yp2ta y5pu yra5m yr5ia y3ro yr4r ys4c y3s2e ys3ica ys3io\n3ysis y4so yss4 ys1t ys3ta ysur4 y3thin yt3ic y1w za1 z5a2b zar2 4zb 2ze ze4n\nze4p z1er ze3ro zet4 2z1i z4il z4is 5zl 4zm 1zo zo4m zo5ol zte4 4z1z2 z4zy\n.con5gr .de5riva .dri5v4 .eth1y6l1 .eu4ler .ev2 .ever5si5b .ga4s1om1 .ge4ome\n.ge5ot1 .he3mo1 .he3p6a .he3roe .in5u2t .kil2n3i .ko6r1te1 .le6ices .me4ga1l\n.met4ala .mim5i2c1 .mi1s4ers .ne6o3f .noe1th .non1e2m .poly1s .post1am .pre1am\n.rav5en1o .semi5 .sem4ic .semid6 .semip4 .semir4 .sem6is4 .semiv4 .sph6in1\n.spin1o .ta5pes1tr .te3legr .to6pog .to2q .un3at5t .un5err5 .vi2c3ar .we2b1l\n.re1e4c a5bolic a2cabl af6fish am1en3ta5b anal6ys ano5a2c ans5gr ans3v anti1d\nan3ti1n2 anti1re a4pe5able ar3che5t ar2range as5ymptot ath3er1o1s at6tes.\naugh4tl au5li5f av3iou back2er. ba6r1onie ba1thy bbi4t be2vie bi5d2if bil2lab\nbio5m bi1orb bio1rh b1i3tive blan2d1 blin2d1 blon2d2 bor1no5 bo2t1u1l brus4q\nbus6i2er bus6i2es buss4ing but2ed. but4ted cad5e1m cat1a1s2 4chs. chs3hu chie5vo\ncig3a3r cin2q cle4ar co6ph1o3n cous2ti cri3tie croc1o1d cro5e2co c2tro3me6c\n1cu2r1ance 2d3alone data1b dd5a5b d2d5ib de4als. de5clar1 de2c5lina de3fin3iti\nde2mos des3ic de2tic dic1aid dif5fra 3di1methy di2ren di2rer 2d1lead 2d1li2e\n3do5word dren1a5l drif2t1a d1ri3pleg5 drom3e5d d3tab du2al. du1op1o1l ea4n3ies\ne3chas edg1l ed1uling eli2t1is e1loa en1dix eo3grap 1e6p3i3neph1 e2r3i4an.\ne3spac6i eth1y6l1ene 5eu2clid1 feb1rua fermi1o 3fich fit5ted. fla1g6el flow2er.\n3fluor gen2cy. ge3o1d ght1we g1lead get2ic. 4g1lish 5glo5bin 1g2nac gnet1ism\ngno5mo g2n1or. g2noresp 2g1o4n3i1za graph5er. griev1 g1utan hair1s ha2p3ar5r\nhatch1 hex2a3 hite3sid h3i5pel1a4 hnau3z ho6r1ic. h2t1eou hypo1tha id4ios\nifac1et ign4it ignit1er i4jk im3ped3a infra1s2 i5nitely. irre6v3oc i1tesima\nith5i2l itin5er5ar janu3a japan1e2s je1re1m 1ke6ling 1ki5netic 1kovian k3sha\nla4c3i5e lai6n3ess lar5ce1n l3chai l3chil6d1 lead6er. lea4s1a 1lec3ta6b\nle3g6en2dre 1le1noid lith1o5g ll1fl l2l3ish l5mo3nell lo1bot1o1 lo2ges. load4ed.\nload6er. l3tea lth5i2ly lue1p 1lunk3er 1lum5bia. 3lyg1a1mi ly5styr ma1la1p m2an.\nman3u1sc mar1gin1 medi2c med3i3cin medio6c1 me3gran3 m2en. 3mi3da5b 3milita\nmil2l1ag mil5li5li mi6n3is. mi1n2ut1er mi1n2ut1est m3ma1b 5maph1ro1 5moc1ra1t\nmo5e2las mol1e5c mon4ey1l mono3ch mo4no1en moro6n5is mono1s6 moth4et2 m1ou3sin\nm5shack2 mu2dro mul2ti5u n3ar4chs. n3ch2es1t ne3back 2ne1ski n1dieck nd3thr\nnfi6n3ites 4n5i4an. nge5nes ng1ho ng1spr nk3rup n5less 5noc3er1os nom1a6l\nnom5e1no n1o1mist non1eq non1i4so 5nop1oly. no1vemb ns5ceiv ns4moo ntre1p\nobli2g1 o3chas odel3li odit1ic oerst2 oke1st o3les3ter oli3gop1o1 o1lo3n4om\no3mecha6 onom1ic o3norma o3no2t1o3n o3nou op1ism. or4tho3ni4t orth1ri or5tively\no4s3pher o5test1er o5tes3tor oth3e1o1s ou3ba3do o6v3i4an. oxi6d1ic pal6mat\nparag6ra4 par4a1le param4 para3me pee2v1 phi2l3ant phi5lat1e3l pi2c1a3d pli2c1ab\npli5nar poin3ca 1pole. poly1e po3lyph1ono 1prema3c pre1neu pres2pli pro2cess\nproc3i3ty. pro2g1e 3pseu2d pseu3d6o3d2 pseu3d6o3f2 pto3mat4 p5trol3 pu5bes5c\nquain2t1e qu6a3si3 quasir6 quasis6 quin5tes5s qui3v4ar r1abolic 3rab1o1loi\nra3chu r3a3dig radi1o6g r2amen 3ra4m5e1triz ra3mou ra5n2has ra1or r3bin1ge\nre2c3i1pr rec5t6ang re4t1ribu r3ial. riv1o1l 6rk. rk1ho r1krau 6rks. r5le5qu\nro1bot1 ro5e2las ro5epide1 ro3mesh ro1tron r3pau5li rse1rad1i r1thou r1treu\nr1veil rz1sc sales3c sales5w 5sa3par5il sca6p1er sca2t1ol s4chitz schro1ding1\n1sci2utt scrap4er. scy4th1 sem1a1ph se3mes1t se1mi6t5ic sep3temb shoe1st sid2ed.\nside5st side5sw si5resid sky1sc 3slova1kia 3s2og1a1my so2lute 3s2pace 1s2pacin\nspe3cio spher1o spi2c1il spokes5w sports3c sports3w s3qui3to s2s1a3chu1 ss3hat\ns2s3i4an. s5sign5a3b 1s2tamp s2t1ant5shi star3tli sta1ti st5b 1stor1ab strat1a1g\nstrib5ut st5scr stu1pi4d1 styl1is su2per1e6 1sync 1syth3i2 swimm6 5tab1o1lism\nta3gon. talk1a5 t1a1min t6ap6ath 5tar2rh tch1c tch3i1er t1cr teach4er. tele2g\ntele1r6o 3ter1gei ter2ic. t3ess2es tha4l1am tho3don th1o5gen1i tho1k2er thy4l1an\nthy3sc 2t3i4an. ti2n3o1m t1li2er tolo2gy tot3ic trai3tor1 tra1vers travers3a3b\ntreach1e tr4ial. 3tro1le1um trof4ic. tro3fit tro1p2is 3trop1o5les 3trop1o5lis\nt1ro1pol3it tsch3ie ttrib1ut1 turn3ar t1wh ty2p5al ua3drati uad1ratu u5do3ny\nuea1m u2r1al. uri4al. us2er. v1ativ v1oir5du1 va6guer vaude3v 1verely. v1er1eig\nves1tite vi1vip3a3r voice1p waste3w6a2 wave1g4 w3c week1n wide5sp wo4k1en\nwrap3aro writ6er. x1q xquis3 y5che3d ym5e5try y1stro yes5ter1y z3ian. z3o1phr\nz2z3w\n",s={};
o=o.trim().replace(/\n/g," ").split(" ");for(var l=0,c=o.length;l<c;l++){for(var u=o[l],d=u.replace(/\d/g,""),p=u.split(/[.a-z]/).map(function(e){return+e||0}),m=s,g=0,h=d.length;g<h;g++){var b=d[g];b in m||(m[b]={}),m=m[b]}m.points=p}o=null}});