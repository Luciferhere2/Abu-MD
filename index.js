const Jsl_0x1047a8=Jsl_0x5c27;function Jsl_0x1c08(){const _0x502b77=['messages.upsert','830IRtYja','150pNwWKq','prefix','pino','group-participants.update','Abu\x20MD\x20','statusCode','\x0a𝚃𝙾𝚃𝙰𝙻\x20𝙿𝙻𝙸𝙶𝙸𝙽𝚂\x20:\x20','✅\x20Plugins\x20Installed!','user','@g.us','toLowerCase','./lib/db/','message','extname','child','log','forEach','writeToFile','fromMe','endsWith','./lib/serialize','trim','readdirSync','payload','5019935whMjRg','453480RFgPSI','202012UIVMRT','./plugins/','name','.js','./lib/Greetings','body','./temp/session.json','6381lILDmb','2938908qRtozl','```💗\x20𝙰𝙱𝚄\x20𝙼𝙳\x20𝚁𝚄𝙽𝙽𝙸𝙶\x20\x0aversion\x20:\x20','commands','split','Session_Id','from','HANDLERS','\x0aMessage:','path','sticker','```','parse','At\x20:\x20','Installing\x20Plugins\x20✅','Desktop','MODE','image','imageMessage','./package.json','connection.update','readFromFile','shift','error','./plugins','function','Session\x20Restored\x20✅!','creds.update','silent','type','map','connecting','pattern','\x0a\x0a\x0a\x0a\x0a','existsSync','replace','./lib/ss/baileys/store_multi.json','uncaughtException','./lib/Base','sendMessage','dataValues','open','stringify','includes','messages','writeFileSync','length','join','./config','@adiwajshing/baileys','\x0a𝙼𝙾𝙳𝙴\x20:\x20','32tUwMbI','DATABASE','83529DmiXfF','102809xzptkg','sender','output','store','./lib/session','close','test','findAll'];Jsl_0x1c08=function(){return _0x502b77;};return Jsl_0x1c08();}(function(_0x4a9bb9,_0x3f8248){const _0x30ef3a=Jsl_0x5c27,_0x1d2cac=_0x4a9bb9();while(!![]){try{const _0x2d3097=-parseInt(_0x30ef3a(0xfd))/0x1+-parseInt(_0x30ef3a(0x143))/0x2*(-parseInt(_0x30ef3a(0x104))/0x3)+parseInt(_0x30ef3a(0x105))/0x4+-parseInt(_0x30ef3a(0xfb))/0x5+-parseInt(_0x30ef3a(0xfc))/0x6+parseInt(_0x30ef3a(0x13a))/0x7*(parseInt(_0x30ef3a(0x137))/0x8)+parseInt(_0x30ef3a(0x139))/0x9*(parseInt(_0x30ef3a(0x144))/0xa);if(_0x2d3097===_0x3f8248)break;else _0x1d2cac['push'](_0x1d2cac['shift']());}catch(_0x53efe4){_0x1d2cac['push'](_0x1d2cac['shift']());}}}(Jsl_0x1c08,0x82538));const {default:makeWASocket,Browsers,makeInMemoryStore,useSingleFileAuthState}=require(Jsl_0x1047a8(0x135)),fs=require('fs'),{serialize}=require(Jsl_0x1047a8(0xf7)),{Message,Image,Sticker}=require(Jsl_0x1047a8(0x12a)),pino=require(Jsl_0x1047a8(0xe5)),path=require(Jsl_0x1047a8(0x10d)),events=require('./lib/utils'),got=require('got'),config=require(Jsl_0x1047a8(0x134)),{PluginDB}=require('./lib/db/plugins'),Greetings=require(Jsl_0x1047a8(0x101));function Jsl_0x5c27(_0x4c2842,_0x5ef857){const _0x1c0851=Jsl_0x1c08();return Jsl_0x5c27=function(_0x5c277d,_0x38f160){_0x5c277d=_0x5c277d-0xe5;let _0x4581ab=_0x1c0851[_0x5c277d];return _0x4581ab;},Jsl_0x5c27(_0x4c2842,_0x5ef857);}let ssname=path[Jsl_0x1047a8(0x133)](__dirname,Jsl_0x1047a8(0x103));const {MakeSession}=require(Jsl_0x1047a8(0x13e));!fs['existsSync'](ssname)&&MakeSession(config[Jsl_0x1047a8(0x109)],ssname);const {DATABASE,VERSION}=require(Jsl_0x1047a8(0x134)),store=makeInMemoryStore({'logger':pino()[Jsl_0x1047a8(0xf1)]({'level':Jsl_0x1047a8(0x120),'stream':Jsl_0x1047a8(0x13d)})});fs[Jsl_0x1047a8(0xf9)]('./lib/db/')[Jsl_0x1047a8(0xf3)](_0x55e9a5=>{const _0x50020f=Jsl_0x1047a8;path[_0x50020f(0xf0)](_0x55e9a5)[_0x50020f(0xed)]()=='.js'&&require(_0x50020f(0xee)+_0x55e9a5);});async function Jsl(){const _0x24b204=Jsl_0x1047a8;await config[_0x24b204(0x138)]['sync']();const {state:_0x5e88a7,saveState:_0x540d1d}=useSingleFileAuthState(_0x24b204(0x103),pino({'level':_0x24b204(0x120)}));let _0x1a5ed0=makeWASocket({'logger':pino({'level':_0x24b204(0x120)}),'auth':_0x5e88a7,'printQRInTerminal':!![],'generateHighQualityLinkPreview':!![],'browser':Browsers['macOS'](_0x24b204(0x113)),'fireInitQueries':![],'shouldSyncHistoryMessage':![],'downloadHistory':![],'syncFullHistory':![],'getMessage':async _0x512128=>(store['loadMessage'](_0x512128['id'])||{})[_0x24b204(0xef)]||{'conversation':null}});store[_0x24b204(0x119)](_0x24b204(0x128)),setInterval(()=>{const _0x21d303=_0x24b204;store[_0x21d303(0xf4)]('./lib/ss/store_multi.json');},0x1e*0x3e8),store['bind'](_0x1a5ed0['ev']),_0x1a5ed0['ev']['on'](_0x24b204(0x118),async _0x5c1cd9=>{const _0x167354=_0x24b204,{connection:_0x84cafa,lastDisconnect:_0x223bd4}=_0x5c1cd9;_0x84cafa===_0x167354(0x123)&&console['log'](_0x167354(0xe7)+VERSION);_0x84cafa===_0x167354(0x13f)&&_0x223bd4&&_0x223bd4[_0x167354(0x11b)]&&_0x223bd4[_0x167354(0x11b)][_0x167354(0x13c)]['statusCode']!=0x191&&(console[_0x167354(0xf2)](_0x223bd4['error']['output'][_0x167354(0xfa)]),Jsl());if(_0x84cafa===_0x167354(0x12d)){console['log'](_0x167354(0x11e)),console['log'](_0x167354(0x112));let _0x35e18d=await PluginDB[_0x167354(0x141)]();_0x35e18d[_0x167354(0x122)](async _0x1b52c1=>{const _0x4e0d46=_0x167354;if(!fs[_0x4e0d46(0x126)](_0x4e0d46(0xfe)+_0x1b52c1[_0x4e0d46(0x12c)][_0x4e0d46(0xff)]+'.js')){console[_0x4e0d46(0xf2)](_0x1b52c1[_0x4e0d46(0x12c)][_0x4e0d46(0xff)]);var _0x398146=await got(_0x1b52c1[_0x4e0d46(0x12c)]['url']);_0x398146[_0x4e0d46(0xe8)]==0xc8&&(fs[_0x4e0d46(0x131)]('./plugins/'+_0x1b52c1['dataValues'][_0x4e0d46(0xff)]+'.js',_0x398146[_0x4e0d46(0x102)]),require(_0x4e0d46(0xfe)+_0x1b52c1[_0x4e0d46(0x12c)][_0x4e0d46(0xff)]+_0x4e0d46(0x100)));}}),fs[_0x167354(0xf9)](_0x167354(0x11c))[_0x167354(0xf3)](_0x432144=>{const _0x1005ac=_0x167354;path[_0x1005ac(0xf0)](_0x432144)['toLowerCase']()==_0x1005ac(0x100)&&require('./plugins/'+_0x432144);}),console[_0x167354(0xf2)](_0x167354(0xea));let _0x3793e3=_0x167354(0x106)+require(_0x167354(0x117))['version']+_0x167354(0xe9)+events[_0x167354(0x107)][_0x167354(0x132)]+_0x167354(0x136)+config[_0x167354(0x114)]+_0x167354(0x10f);_0x1a5ed0[_0x167354(0x12b)](_0x1a5ed0[_0x167354(0xeb)]['id'],{'text':_0x3793e3}),_0x1a5ed0['ev']['on'](_0x167354(0x11f),_0x540d1d);try{_0x1a5ed0['ev']['on'](_0x167354(0xe6),async _0x57c7f8=>{Greetings(_0x57c7f8,_0x1a5ed0);}),_0x1a5ed0['ev']['on'](_0x167354(0x142),async _0x8a5768=>{const _0x10128a=_0x167354;if(_0x8a5768[_0x10128a(0x121)]!=='notify')return;let _0x398423=_0x8a5768[_0x10128a(0x130)][0x0],_0x182155=await serialize(JSON[_0x10128a(0x110)](JSON[_0x10128a(0x12e)](_0x398423)),_0x1a5ed0);if(!_0x182155[_0x10128a(0xef)])return;let _0x4b8dfe=_0x182155[_0x10128a(0x102)];if(_0x4b8dfe&&config['LOGS'])console[_0x10128a(0xf2)](_0x10128a(0x111)+(_0x182155['from'][_0x10128a(0xf6)](_0x10128a(0xec))?(await _0x1a5ed0['groupMetadata'](_0x182155[_0x10128a(0x10a)]))['subject']:_0x182155['from'])+'\x0aFrom\x20:\x20'+_0x182155[_0x10128a(0x13b)]+_0x10128a(0x10c)+_0x4b8dfe);events['commands'][_0x10128a(0x122)](async _0x46a780=>{const _0x3d3ab8=_0x10128a;if(_0x46a780[_0x3d3ab8(0xf5)]&&!config['SUDO'][_0x3d3ab8(0x108)](',')[_0x3d3ab8(0x12f)](_0x182155['sender'][_0x3d3ab8(0x108)]('@')[0x0]||!_0x182155['isSelf']))return;let _0x43dd4e;_0x4b8dfe&&(_0x43dd4e=_0x4b8dfe[_0x3d3ab8(0xf8)]()[_0x3d3ab8(0x108)](/ +/)[0x0],_0x182155[_0x3d3ab8(0x145)]=new RegExp(config[_0x3d3ab8(0x10b)])['test'](_0x4b8dfe)?_0x4b8dfe[_0x3d3ab8(0x108)]('')[_0x3d3ab8(0x11a)]():',');if(_0x46a780[_0x3d3ab8(0x124)]&&_0x46a780[_0x3d3ab8(0x124)][_0x3d3ab8(0x140)](_0x43dd4e)){var _0x444c4d;try{_0x444c4d=_0x4b8dfe[_0x3d3ab8(0x127)](new RegExp(_0x43dd4e,'i'),'')['trim']();}catch{_0x444c4d=![];}whats=new Message(_0x1a5ed0,_0x182155,_0x398423),_0x46a780[_0x3d3ab8(0x11d)](whats,_0x444c4d,_0x182155,_0x1a5ed0);}else{if(_0x4b8dfe&&_0x46a780['on']==='text')whats=new Message(_0x1a5ed0,_0x182155,_0x398423),_0x46a780[_0x3d3ab8(0x11d)](whats,_0x4b8dfe,_0x182155,_0x1a5ed0,_0x8a5768);else{if((_0x46a780['on']===_0x3d3ab8(0x115)||_0x46a780['on']==='photo')&&_0x182155[_0x3d3ab8(0x121)]===_0x3d3ab8(0x116))whats=new Image(_0x1a5ed0,_0x182155,_0x398423),_0x46a780[_0x3d3ab8(0x11d)](whats,_0x4b8dfe,_0x182155,_0x1a5ed0,_0x8a5768,_0x398423);else _0x46a780['on']===_0x3d3ab8(0x10e)&&_0x182155['type']==='stickerMessage'&&(whats=new Sticker(_0x1a5ed0,_0x182155,_0x398423),_0x46a780[_0x3d3ab8(0x11d)](whats,_0x182155,_0x1a5ed0,_0x8a5768,_0x398423));}}});});}catch(_0x551600){console[_0x167354(0xf2)](_0x551600+_0x167354(0x125)+JSON['stringify'](msg));}}}),process['on'](_0x24b204(0x129),_0x160afb=>{const _0xe052b7=_0x24b204;let _0x21c982=_0x160afb[_0xe052b7(0xef)];console['log'](_0x160afb);});}setTimeout(()=>{Jsl();},0xbb8);
