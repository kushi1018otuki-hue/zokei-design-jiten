/* Surface Pattern Atlas / standalone offline module (v4.2) */
'use strict';
const PATTERN_ROWS=[
'パネルライン|Panel lines|装甲・パネル|panel|細い目地で装甲板の境界を区切る。|宇宙艦の外板、戦車・ロボットの装甲|実際の分割か塗装線かを区別する。',
'非対称パネル割り|Asymmetric paneling|装甲・パネル|panelAsym|長短・大小の板を不規則に組み合わせる。|大型船体、機械の外装|均等な格子にせず大中小の面を混在させる。',
'段差付き装甲板|Stepped plating|装甲・パネル|step|外装の面ごとに高さの段差と陰影をつける。|戦車の増加装甲、艦側面|板厚と重なり方向を別に示す。',
'六角装甲タイル|Hexagonal armor tiles|装甲・パネル|hexPanel|同じ六角形の小パネルを面状に並べる。|装甲シールド、SF外装|六角形が実部材か模様かを明記する。',
'重ね板装甲|Overlapping plate pattern|装甲・パネル|overlap|瓦状に並ぶ板の重なりが面の流れを作る。|ロボットの肩・脚、艦の側面|重なる方向と動く関節の逃げを示す。',
'平行リブ列|Parallel ribs|装甲・パネル|ribs|規則的な細長い補強筋で外装を分節する。|大面積の船体外板、機械カバー|リブを巨大にせず下地面も残す。',
'リベット列|Rivet line pattern|装甲・パネル|rivets|装甲継ぎ目に留め具の点列を反復する。|旧式戦車・軍艦・工業SF|遠景で見えない個々のリベットは法線表現でもよい。',
'凹み縁取り装甲|Recessed-border panel|装甲・パネル|border|板の周囲を一段落とし中央面を際立たせる。|メカ胸部、主砲カバー、艦上構造物|外枠の厚みと中央面の高低差を指定する。',
'アズテック・パネル模様|Aztec paneling (SF)|装甲・パネル|aztec|明暗の異なる不規則な外板区画を繰り返すSF的表面処理。|宇宙艦の大型外板|SF造形で使う通称。実際の古代アステカ文様とは異なる。',
'微細パネル密度|Fine panel breakup|装甲・パネル|microTile|主輪郭を変えず細かな目地で巨大さを感じさせる。|1000m超の宇宙艦、巨大施設|引き画では細線を間引いて視認性を優先する。',

'デジタル迷彩|Digital camouflage|迷彩・塗装|digital|大小の直角な色ブロックがつながる塗装模様。|車両外板、未来兵器、機体|模様の画素サイズと使用色を指定する。',
'スプリッター迷彩|Splinter camouflage|迷彩・塗装|splinter|角張った多角形で構成する硬い境界の迷彩。|軍用機、戦車、宇宙艦|直線的な色境界を崩さない。',
'ダズル迷彩|Dazzle camouflage|迷彩・塗装|dazzle|大胆な斜線や高コントラストの色面を組み合わせる。|艦船の舷側、SF艦塗装|輪郭や進行方向を錯覚させる歴史的塗装様式。',
'斑点迷彩|Mottled camouflage|迷彩・塗装|mottled|不定形の斑点を疎密をつけて散らす。|軍用機の胴体、野戦車両|丸い水玉とは違う不均一な輪郭。',
'タイガーストライプ風|Tiger-stripe pattern|迷彩・塗装|tiger|曲がった細長い帯模様を連続させる。|車両塗装、ロボット装甲|形状を隠す塗装であり立体溝とは区別。',
'二色ハードエッジ|Hard-edge two-tone|迷彩・塗装|hardTwo|境界線のはっきりした二色の色面分割。|戦車外板、航空機、SFメカ|色の境界はぼかさず明確にする。',
'ソフトエッジ塗装|Soft-edge camouflage|迷彩・塗装|softTwo|色の境界を軽くぼかしてつなぐ。|戦車車体、航空機の塗装|実形状ではなく塗装表現として指定する。',
'雪上迷彩|Snow camouflage|迷彩・塗装|snow|白・薄灰・暗灰の斑や帯で雪景色に溶け込ませる。|寒冷地仕様の車両とメカ|白一色ではなく濃淡の差を残す。',
'等高線風パターン|Contour-line pattern|迷彩・塗装|topo|曲線を等間隔で追従させ地図の等高線のように見せる。|SF機体、工業デザインの塗装|実際の地形データでなく表面装飾の曲線。',
'エッジ剥がれ塗装|Edge-wear chipping|迷彩・塗装|worn|角や縁に細かな塗装の欠けを点在させる。|使い込まれた戦車・ロボット|汚れの強さは作品の世界観に合わせる。',

'ハザードストライプ|Hazard stripes|識別・警告|hazard|黄黒などの斜め帯が危険エリアを知らせる。|可動部、甲板ハッチ、整備設備|通路面や縁に限定すると情報が整理される。',
'シェブロン模様|Chevron markings|識別・警告|chevron|V字の山形を連続させ方向感を示す。|機体背面、部隊マーキング|V字の向きと繰り返し幅を指定する。',
'チェッカー模様|Checkerboard pattern|識別・警告|checker|2色の正方形を交互に並べる格子。|試験機、識別帯、戦隊マーキング|識別塗装と構造格子を混同しない。',
'ステンシル番号|Stencil numbering|識別・警告|stencil|断続した塗装数字や文字で機体番号を付ける。|艦載機、戦車、艦体の識別部|表示する文字と寸法比率を決める。',
'部隊識別エンブレム|Unit insignia|識別・警告|insignia|明瞭な幾何学章や記号を外板に配置する。|機首、主翼、艦橋近傍|国籍記号や既存作品の紋章はそのまま模写しない。',
'中央識別帯|Center racing stripe|識別・警告|thinStripes|機体中心線に沿って細長い縦帯を通す。|ロボットの胸、車体上面、機体|中央稜線・リブなどの構造と分ける。',
'斜め識別帯|Diagonal identification bands|識別・警告|diagonal|幅広い斜めの色帯で個体を見分ける。|艦体側面、前腕、機体尾翼|帯の本数・角度・幅を指定する。',
'区画番号帯|Section-code bands|識別・警告|stripeScale|甲板や外板を区画ごとに短い帯で標識する。|大型艦・整備施設・船体モジュール|帯の単位を船体全長に対して小さく。',
'発光誘導線|Luminous guide line|識別・警告|lightMark|細い光の線で通路やメンテ区画を示す。|艦内通路、格納庫、メカ外装|光線は点滅や発射表現ではなくマーキング。',
'整備用注意ラベル|Maintenance warning label|識別・警告|service|細い枠・矢印・小文字ラベルのまとまり。|ハッチ、関節、装甲裏|読めない極小文字を大量に描かず記号化する。',

'縞鋼板の菱目|Diamond tread plate|工業素材・質感|diamond|滑り止めの菱形突起が規則正しく並ぶ。|乗降ステップ、デッキ、床板|実物の縞鋼板風。厚みより表面の滑り止めを優先。',
'ローレット加工|Knurled pattern|工業素材・質感|knurl|細かな交差斜線で握り部を粗くする。|操作ノブ、ハンドル、工具表面|大型の船体外板には通常使用しない。',
'パンチングメタル|Perforated sheet|工業素材・質感|perforate|丸い穴を等ピッチで打ち抜いた板。|通気カバー、放熱部|穴は貫通孔かテクスチャかを指定する。',
'エキスパンドメタル|Expanded-metal mesh|工業素材・質感|expanded|引き伸ばした菱形開口が連なる金属網。|グリル、歩廊、保護網|穴の開いたメッシュ構造。',
'ハニカムグリル|Honeycomb grille|工業素材・質感|honeyGrill|六角開口が並んだハチの巣状のグリル。|吸気口、センサー保護部|六角装甲タイルと違い中が抜けている。',
'カーボン織目|Carbon-fiber weave|工業素材・質感|carbon|斜めに交互に交差する細かな繊維模様。|軽量機体、カーボンカバー|実繊維一本ずつをジオメトリ化しない。',
'ヘアライン仕上げ|Hairline finish|工業素材・質感|brushed|一定方向に非常に細い研磨線を揃える。|ステンレス外装、パネル|法線や粗さで表現することが多い。',
'梨地・サンドブラスト風|Matte blasted texture|工業素材・質感|sand|微粒子状のざらつきで光を散らす。|無塗装金属、樹脂カバー|遠景で粒を個別形状化しない。',
'ルーバースリット|Louver slots|工業素材・質感|louver|向きを揃えた細い通気スリットが反復する。|エンジン周辺、換気孔、艦体側面|スリットの奥行きと羽根の向きを指定する。',
'溶接ビード列|Weld bead pattern|工業素材・質感|weld|接合線に沿う連続的な溶接盛り上がり。|鋼板継ぎ目、製缶構造|実際の溶接位置と矛盾しないようにする。',

'グリーブル密集|Greeble detailing|SF・機械意匠|greeble|細かな箱や配管風の部品を密集させ機械らしさを出す。|巨大宇宙艦の奥まった区画|実機能が不明な装飾は見える場所へ限定する。',
'電子回路トレース|Circuit-trace motif|SF・機械意匠|circuit|直角に折れる細いラインと接続点の模様。|電子装甲、パネル照明|実配線ではなく表面意匠ならそう指定する。',
'発光パネル縁取り|Emissive panel trim|SF・機械意匠|glowTrim|装甲パネルの周囲に細い光帯を入れる。|SF艦船の外板、未来装甲|全面を光らせず重要箇所のみにする。',
'センサー点列|Sensor dot array|SF・機械意匠|sensor|同形の小さなセンサー風の点を規則的に並べる。|艦橋近傍、ロボット胸部|主砲口や噴射ノズルと区別する。',
'埋込ライトスリット|Recessed light strips|SF・機械意匠|lightRecess|深い細溝の底だけを淡く発光させる。|SF艦甲板、メカ胸部|表面上に線を描くだけでなく溝の深さを示す。',
'多層装甲の段差筋|Layered armor bands|SF・機械意匠|layers|平行する段差や厚い板を繰り返して立体感を出す。|艦体の肩、ロボット前腕|厚みのある板を選択的に重ねる。',
'細フィン反復|Repeated microfins|SF・機械意匠|fins|均一な薄いフィンを列状に並べる。|放熱器、スラスター、アーム|熱交換部か純粋な造形かを明記。',
'ラジエーター格子|Radiator bank|SF・機械意匠|radiator|長短のスリットが奥まった面に密集する。|艦の機関部、動力部|吸排気ルーバーと区別して奥行きを持たせる。',
'機械編み込み装甲|Interwoven armor motif|SF・機械意匠|armorMesh|帯材が交互に上を通る織物状装甲模様。|未来ロボット、SF機体|本当に可動編み込みか表面模様か区別する。',
'六角発光ネット|Glowing hex grid|SF・機械意匠|energyHex|六角形の輪郭線を細く発光させる。|シールド表面、エネルギー装甲|通常装甲の分割線と混同しない。',

'ヘリンボーン|Herringbone|幾何・伝統模様|herring|短い斜線や帯を交互方向に並べた山形模様。|床、ロボットの内装、装飾|矢羽根状に方向が切り替わる。',
'千鳥格子|Houndstooth|幾何・伝統模様|hound|角のある小さなチェック柄を繰り返す。|装飾、座席の張地|市松模様とは形状が異なる。',
'市松模様|Ichimatsu checkerboard|幾何・伝統模様|ichimatsu|正方形を交互の色で繰り返す伝統的な格子。|内装、部隊の意匠|等寸の正方形を維持する。',
'青海波|Seigaiha waves|幾何・伝統模様|seigaiha|半円の波を重ねた扇状の繰り返し文様。|装飾パネル、艦の紋様|甲板の機能パターンではなく装飾用。',
'麻の葉|Asanoha geometric|幾何・伝統模様|asanoha|六角星を中心に三角形が広がる幾何学文様。|装飾装甲、家紋風の意匠|外形が実際の六角装甲とは限らない。',
'亀甲模様|Kikko hexagon|幾何・伝統模様|kikko|亀の甲羅を思わせる六角形の連続文様。|和風装飾、艦の銘板|六角形はあくまで表面の線模様。',
'七宝つなぎ|Shippo circles|幾何・伝統模様|shippo|円弧が四方に重なる連続文様。|装飾パネル、和柄|円弧どうしの重なりを一定に保つ。',
'矢絣|Yagasuri arrow pattern|幾何・伝統模様|yagasuri|細長い矢羽根形を規則的に上下交互で並べる。|装飾、機体の識別ライン|シェブロンだけの連続線とは違う。',
'鱗文様|Uroko triangles|幾何・伝統模様|uroko|三角形を交互に並べ鱗状の面を作る。|和風機体、装飾装甲|立体スケール装甲か印刷模様か別途指定。',
'同心円模様|Concentric rings|幾何・伝統模様|rings|中心から広がる等間隔の円環を重ねる。|動力コア、円形ハッチ、装飾|リングの中心軸を指定する。'
];
const PATTERN_TERMS=PATTERN_ROWS.map((row,i)=>{
 const [name,en,group,mode,desc,where,tip]=row.split('|');
 return {id:'p'+String(i+1).padStart(3,'0'),name,en,cat:'模様・パターン',group,mode,family:'pattern',desc,where,
 prompt:'【表面パターン指示】'+where+'に「'+name+'」を用いる。'+desc+' '+(tip||'')+' 元の輪郭・主な装甲分割・可動部は保ち、模様の向き・反復周期・密度を造形尺度に合わせる。',
 tip,zone:'180,90',tags:'模様 パターン デザイン 意匠 繰り返し テクスチャ 表面装飾 '+name+' '+en+' '+group,source:'pattern'};
});
if(PATTERN_TERMS.length!==60)throw Error('Pattern atlas count mismatch: '+PATTERN_TERMS.length);

const PC={bg:'#193549',mid:'#31566c',pale:'#9bc3ce',gold:'#e9b66b',mint:'#6fd7cd',shadow:'#102838',slate:'#486d80',olive:'#617568'};
const PR=(n,fn)=>Array.from({length:n},(_,i)=>fn(i)).join('');
const PX=(s)=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function pRect(x,y,w,h,fill,stroke='',sw=1,rx=0){return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+rx+'" fill="'+fill+'"'+(stroke?' stroke="'+stroke+'" stroke-width="'+sw+'"':'')+'/>'}
function pLine(x,y,x2,y2,col=PC.pale,w=2,more=''){return '<path d="M'+x+' '+y+'L'+x2+' '+y2+'" fill="none" stroke="'+col+'" stroke-width="'+w+'" '+more+'/>'}
function pCircle(x,y,r,fill,stroke='',w=2){return '<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+fill+'"'+(stroke?' stroke="'+stroke+'" stroke-width="'+w+'"':'')+'/>'}
function pPoly(points,fill,stroke='',w=2){return '<polygon points="'+points+'" fill="'+fill+'"'+(stroke?' stroke="'+stroke+'" stroke-width="'+w+'"':'')+'/>'}
function pPath(d,stroke=PC.pale,w=2,fill='none'){return '<path d="'+d+'" fill="'+fill+'" stroke="'+stroke+'" stroke-width="'+w+'" stroke-linecap="round" stroke-linejoin="round"/>'}
function pHex(x,y,r,fill,stroke=PC.pale,w=2){return pPoly(PR(6,i=>{const a=(i*60-30)*Math.PI/180;return (x+r*Math.cos(a)).toFixed(1)+','+(y+r*Math.sin(a)).toFixed(1)}).split(/(?<=\d)(?=-)/).join(' '),fill,stroke,w)}
function pHexagon(x,y,r,fill,stroke=PC.pale,w=2){let pts=[];for(let i=0;i<6;i++){const a=(i*60-30)*Math.PI/180;pts.push((x+r*Math.cos(a)).toFixed(2)+','+(y+r*Math.sin(a)).toFixed(2))}return pPoly(pts.join(' '),fill,stroke,w)}
function pRand(i,offset=0){const q=Math.sin((i+1)*12.9898+offset*78.233)*43758.5453123;return q-Math.floor(q)}
function pHatch(x,y,w,h){return pRect(x,y,w,h,PC.shadow,PC.slate,1.6,3)+pLine(x+3,y+4,x+w-3,y+4,PC.gold,1.4)}
function patternTile(mode){
 let o='',p=PC,base=p.bg,accent=p.mint,stroke=p.pale;
 const cols=['#264a56','#56736a','#8ca191','#314e55','#687882','#b7c4bd'];
 const hex=(rr,fill='none',line=p.pale)=>PR(5,j=>PR(8,i=>pHexagon(i*45+(j%2)*22-8,j*38-8,rr,fill,line,2)));
 switch(mode){
 case 'panel':o=pRect(19,15,300,113,'#274a60',p.pale,3,7)+pPath('M118 15V128M222 15V128M20 81H222M223 59H319',p.shadow,7)+pPath('M118 17V126M222 17V126M21 80H222M222 59H319',p.pale,2)+PR(4,i=>pCircle(29+i*92,24,2,p.gold));break;
 case 'panelAsym':o=pRect(0,0,336,144,p.mid)+pPoly('0,0 162,0 135,55 0,74','#345f70',p.shadow,3)+pPoly('165,0 336,0 336,62 278,50 129,55','#4a6b78',p.shadow,3)+pPoly('0,78 130,59 189,144 0,144','#233d52',p.shadow,3)+pPoly('130,59 285,53 336,144 186,144','#618292',p.shadow,3)+pPath('M36 32H100M205 106H292',p.gold,3);break;
 case 'step':o=pRect(15,30,302,93,p.shadow,p.pale,2,5)+PR(5,i=>pRect(27+i*59,42+(i%2)*8,54,66-(i%2)*8,i%2?p.mid:p.slate,p.shadow,3,4)+pLine(31+i*59,46+(i%2)*8,73+i*59,46+(i%2)*8,p.gold,2));break;
 case 'hexPanel':o=hex(29,'#2b4d61','#9ac0c6');break;
 case 'overlap':o=PR(4,row=>PR(5,col=>pPoly((col*75-28)+','+(row*36+4)+' '+(col*75+59)+','+(row*36+4)+' '+(col*75+44)+','+(row*36+35)+' '+(col*75-43)+','+(row*36+35),row%2?'#527184':'#34546b',p.pale,2)));break;
 case 'ribs':o=pRect(15,23,306,101,p.mid,p.pale,2,6)+PR(15,i=>pRect(22+i*20,29,11,86,i%2?'#567b87':'#426777',p.shadow,2,2)+pLine(24+i*20,33,24+i*20,105,p.pale,1));break;
 case 'rivets':o=PR(3,j=>pLine(0,16+j*55,336,16+j*55,p.pale,3)+PR(16,i=>pCircle(12+i*21,16+j*55,3.4,p.gold,p.shadow,1)));break;
 case 'border':o=PR(3,j=>PR(4,i=>pRect(9+i*82,9+j*48,75,42,p.mid,p.pale,2,5)+pRect(17+i*82,17+j*48,59,26,p.bg,'#537989',2,2)));break;
 case 'aztec':o=PR(9,j=>PR(16,i=>{let v=pRand(i+j*13,3),x=i*23-9,y=j*20-7;return pRect(x,y,20+(v>0.8?17:0),16,v>.7?'#557b83':v>.4?'#35566c':'#29465a','none',0,0)}))+PR(3,i=>pLine(0,i*47+17,336,i*47+17,'#213a4e',1));break;
 case 'microTile':o=PR(6,j=>PR(16,i=>{let w=i%4===0?19:16;return pRect(i*22+(j%2)*9,j*25+3,w,20,j%3?'#355667':'#507489',p.shadow,1)}));break;
 case 'digital':base='#465a56';o=PR(130,i=>{let x=(i*17)%350-5,y=Math.floor(i/20)*25,rr=pRand(i,1);return pRect(x,y,rr>.6?29:18,rr>.8?34:19,cols[Math.floor(pRand(i,2)*cols.length)],'',0)});break;
 case 'splinter':base='#64706b';o=PR(17,i=>{let x=i*23-80,y=i%3*42-17,w=40+pRand(i,2)*120;return pPoly(x+',0 '+(x+w)+','+(y+15)+' '+(x+w/2)+','+(y+76)+' '+(x-25)+','+(y+62),cols[(i*3)%cols.length]);});break;
 case 'dazzle':base='#bbc7cc';o=PR(9,i=>pPoly((i*46-100)+',-15 '+(i*46-36)+',-15 '+(i*46+42)+',160 '+(i*46-23)+',160',i%2?'#152d41':'#566f83'))+PR(3,i=>pPoly((i*125)+',0 '+(i*125+77)+',0 '+(i*125+32)+',144', '#eef5ef'));break;
 case 'mottled':base='#6e8276';o=PR(38,i=>{let x=pRand(i,2)*356-10,y=pRand(i,3)*154-5,r=6+pRand(i,4)*25;return '<ellipse cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" rx="'+r.toFixed(1)+'" ry="'+(r*.48).toFixed(1)+'" fill="'+cols[i%4]+'"/>'});break;
 case 'tiger':base='#647c6c';o=PR(12,i=>{let x=i*36-22;return pPath('M'+x+' -10 Q'+(x+28)+' 22 '+(x+7)+' 61 T'+(x+20)+' 156',i%2?'#243e3b':'#334a4c',8+i%3*5)});break;
 case 'hardTwo':base='#4d7582';o=pPoly('0,0 336,0 336,75 270,52 207,87 122,59 0,99','#2b4a5c')+pPoly('0,102 113,64 203,93 276,58 336,79 336,144 0,144','#9ea99d');break;
 case 'softTwo':base='#597682';o=PR(14,i=>pRect(0,i*12,336,13,'rgba(45,77,82,'+(i/24).toFixed(2)+')'))+PR(12,i=>pPath('M0 '+(i*13-10)+' Q125 '+(i*13+21)+' 336 '+(i*13-17),'rgba(208,220,208,.3)',3));break;
 case 'snow':base='#b8cbd1';o=PR(20,i=>{let x=pRand(i,2)*380-55,y=pRand(i,3)*170-16;return pPoly(x+','+y+' '+(x+57)+','+(y-5)+' '+(x+68)+','+(y+28)+' '+(x+10)+','+(y+34),i%3===0?'#eaf0ec':i%3===1?'#748d95':'#91aab2')});break;
 case 'topo':base='#273e51';o=PR(12,i=>pPath('M-20 '+(i*15-30)+' Q75 '+(i*15+17)+' 150 '+(i*15-11)+' T350 '+(i*15+1),'#a4bbc0',2));break;
 case 'worn':base='#4b6478';o=PR(25,i=>{let y=pRand(i,1)*160,x=pRand(i,2)*340;return pLine(x,y,x+8+pRand(i,4)*29,y-4,'#d1b39a',1.1)})+pPath('M8 10H327V135H8Z','#c7d0c7',5)+PR(36,i=>pRect(pRand(i,5)*336,pRand(i,6)*144,4+pRand(i,3)*7,1.7, i%2?'#273b47':'#d9ceba'));break;
 case 'hazard':base='#e6bb63';o=PR(12,i=>pPoly((i*45-115)+',-5 '+(i*45-86)+',-5 '+(i*45-11)+',160 '+(i*45-39)+',160','#152632'));break;
 case 'chevron':o=PR(7,i=>pPath('M'+(i*55-20)+' 20L'+(i*55+26)+' 72L'+(i*55-20)+' 125',i%2?p.gold:p.mint,11));break;
 case 'checker':base='#becbc9';o=PR(5,j=>PR(12,i=>pRect(i*29,j*29,29,29,(i+j)%2?'#234055':'#dde6df')));break;
 case 'stencil':o=pRect(20,12,296,118,p.mid,p.pale,2,6)+'<text x="168" y="109" font-size="100" font-weight="900" text-anchor="middle" font-family="Arial,sans-serif" fill="#e9e5d1">07</text>'+PR(2,i=>pRect(104+i*100,20,7,110,p.mid));break;
 case 'insignia':o=pCircle(170,72,54,'#28485d',p.pale,4)+pPoly('170,18 185,56 225,58 194,85 204,125 170,103 136,125 146,85 115,58 155,56',p.gold)+pCircle(170,72,14,p.bg);break;
 case 'thinStripes':o=pRect(0,0,336,144,p.mid)+pRect(147,0,44,144,p.gold)+pRect(154,0,6,144,p.bg)+pRect(178,0,7,144,p.bg);break;
 case 'diagonal':o=PR(3,i=>pPoly((i*116-40)+',-10 '+(i*116+6)+',-10 '+(i*116+125)+',154 '+(i*116+80)+',154',i===1?p.gold:p.mint));break;
 case 'stripeScale':o=PR(5,j=>pRect(12,14+j*28,310,15,'#345367')+PR(7,i=>pRect(18+i*43,17+j*28,28,9, i===j?p.gold:'#8ab5b3')));break;
 case 'lightMark':o=pRect(9,19,315,105,p.shadow,p.mid,2,5)+PR(2,j=>pPath('M18 '+(43+j*59)+'H134L159 '+(50+j*59)+'H317',j?p.mint:p.gold,5))+PR(7,i=>pCircle(20+i*49,i%2?110:53,3,'#d4f8ee'));break;
 case 'service':o=pRect(22,19,291,107,'#345565','#b6d9db',2,5)+PR(3,i=>pRect(35,31+i*27,70+i*24,18,'#1b3447','#91b6b6',1.5,2))+pPath('M171 57H290M171 79H262M171 101H292',p.gold,3)+'<text x="195" y="42" fill="#e6eef0" font-size="17" font-weight="800">CAUTION</text>';break;
 case 'diamond':o=PR(7,j=>PR(15,i=>{let x=i*26+(j%2)*13-6,y=j*23-9;return pPoly(x+','+(y+11)+' '+(x+13)+','+y+' '+(x+26)+','+(y+11)+' '+(x+13)+','+(y+22),'#7798a7','#c2d3cc',1.6)}));break;
 case 'knurl':o=PR(32,i=>pLine(i*15-110,-10,i*15+80,155,p.pale,1.5))+PR(32,i=>pLine(i*15-110,156,i*15+80,-10,p.gold,1.2));break;
 case 'perforate':o=PR(7,j=>PR(16,i=>pCircle(13+i*22+(j%2)*11,12+j*23,5.5,'#0b2233','#6f94a7',2)));break;
 case 'expanded':o=PR(9,j=>PR(10,i=>{let x=i*37+(j%2)*18-5,y=j*20-15;return pPoly(x+','+(y+10)+' '+(x+18)+','+y+' '+(x+36)+','+(y+10)+' '+(x+18)+','+(y+20),'#112c3b','#acc9ce',2.5)}));break;
 case 'honeyGrill':o=hex(18,'#092436','#719fac');break;
 case 'carbon':o=PR(23,i=>pLine(i*20-90,-5,i*20+100,155,i%2?'#4d6978':'#75909c',6))+PR(23,i=>pLine(i*20-90,155,i*20+100,-5,i%2?'#263f51':'#36576b',4));break;
 case 'brushed':o=PR(80,i=>pLine(0,i*2.1,336,i*2.1,i%7===0?p.pale:i%2?'#3d5b6a':'#587583',i%9===0?1.5:.6));break;
 case 'sand':o=PR(280,i=>pCircle(Math.round(pRand(i,2)*340),Math.round(pRand(i,7)*145),pRand(i,6)*1.2+.4,i%4?'#77949d':'#a4c0b8'));break;
 case 'louver':o=PR(10,i=>pPoly('18,'+(i*15+5)+' 321,'+(i*15+5)+' 311,'+(i*15+15)+' 28,'+(i*15+15),i%2?'#456779':'#7093a0','#122f40',2));break;
 case 'weld':o=pRect(16,16,304,114,p.mid,p.pale,2,5)+pLine(172,13,172,132,p.bg,13)+PR(22,i=>pPath('M'+(164+(i%2)*16)+' '+(i*6+6)+'Q168 '+(i*6+10)+' '+(164+((i+1)%2)*16)+' '+(i*6+15),'#d7aa70',2));break;
 case 'greeble':o=PR(110,i=>{let x=Math.floor(pRand(i,3)*24)*14,y=Math.floor(pRand(i,2)*11)*14;return pRect(x,y,5+pRand(i,7)*12,5+pRand(i,5)*12,i%5===0?p.gold:i%3===0?'#7199a4':'#365a70',p.bg,.9,1)});break;
 case 'circuit':o=PR(23,i=>{let x=pRand(i,5)*300+12,y=pRand(i,3)*120+11;return pPath('M'+x.toFixed(1)+' '+y.toFixed(1)+'H'+(x+19).toFixed(1)+'V'+(y+(i%2?29:-25)).toFixed(1)+'H'+(x+42).toFixed(1),i%3?p.mint:p.gold,2)+pCircle(x,y,3,'#c8ede1');});break;
 case 'glowTrim':o=PR(3,j=>PR(4,i=>pRect(9+i*82,9+j*48,74,43,p.mid,p.mint,3,4)+pRect(18+i*82,18+j*48,56,25,p.bg,'#386679',2,2)));break;
 case 'sensor':o=pRect(25,14,284,115,p.mid,p.pale,2,7)+PR(5,j=>PR(12,i=>pCircle(43+i*22,27+j*22,5,i%5===0?p.gold:'#79dcd1','#152e44',2)));break;
 case 'lightRecess':o=PR(5,i=>pRect(18,14+i*27,304,17,p.bg,'#608b9b',2,4)+pRect(27,19+i*27,285,6,i%2?p.mint:'#e0b977','',0,3));break;
 case 'layers':o=PR(6,i=>pPoly((i*67-10)+',3 '+(i*67+69)+',3 '+(i*67+49)+',141 '+(i*67-32)+',141',i%2?'#2d4d63':'#688a9a',p.pale,2))+PR(6,i=>pLine(i*67-5,12,i*67+47,12,p.gold,2));break;
 case 'fins':o=PR(17,i=>pPoly((i*24-20)+',143 '+(i*24-9)+',0 '+(i*24+9)+',0 '+(i*24+20)+',143',i%2?p.slate:p.mid,'#9abdc2',1.8));break;
 case 'radiator':o=pRect(15,15,306,118,p.shadow,p.pale,2,5)+PR(4,j=>PR(13,i=>pRect(26+i*22,24+j*26,13,17,i%2?'#567b8d':'#355d72',p.bg,1.2,2)));break;
 case 'armorMesh':o=PR(20,i=>pLine(i*23-85,-20,i*23+87,163,i%2?p.gold:p.pale,9))+PR(20,i=>pLine(i*23-90,165,i*23+90,-21,i%2?'#294958':'#5d7c88',7));break;
 case 'energyHex':o=hex(26,'#09283c',p.mint)+PR(20,i=>pCircle(pRand(i,2)*330,pRand(i,3)*140,2.5,p.gold));break;
 case 'herring':o=PR(6,i=>PR(8,j=>pPath('M'+(j*52+(i%2)*26-14)+' '+(i*27-16)+'l27 19 27 -19',j%2?p.gold:p.pale,5)));break;
 case 'hound':base='#dbe1df';o=PR(6,j=>PR(14,i=>{let x=i*27-9,y=j*27-8,fc=(i+j)%2?'#293c4c':'#99a6a7';return pPoly(x+','+y+' '+(x+15)+','+y+' '+(x+15)+','+(y+9)+' '+(x+23)+','+(y+17)+' '+(x+10)+','+(y+17)+' '+(x+10)+','+(y+26)+' '+x+','+(y+17),fc)}));break;
 case 'ichimatsu':base='#d7dacf';o=PR(6,j=>PR(12,i=>pRect(i*30,j*26,30,26,(i+j)%2?'#254458':'#e1e9de')));break;
 case 'seigaiha':base='#304c65';o=PR(5,j=>PR(10,i=>{let x=i*44+(j%2)*22-18,y=j*34+23;return PR(3,k=>'<path d="M'+(x-(k+1)*13)+' '+y+' A'+((k+1)*13)+' '+((k+1)*13)+' 0 0 1 '+(x+(k+1)*13)+' '+y+'" fill="none" stroke="'+(k%2?p.pale:p.mint)+'" stroke-width="1.8"/>')}));break;
 case 'asanoha':o=PR(4,j=>PR(7,i=>{let x=i*60+(j%2)*30-18,y=j*47-10;return pHexagon(x,y,27,'none','#c0d1cc',1.8)+PR(6,k=>{let a=k*Math.PI/3;return pLine(x,y,x+27*Math.cos(a),y+27*Math.sin(a),p.gold,1.5)})}));break;
 case 'kikko':o=hex(28,'none',p.gold);break;
 case 'shippo':o=PR(5,j=>PR(12,i=>pCircle(i*36+(j%2)*18-9,j*36-5,26,'none',i%2?p.pale:p.gold,1.8)));break;
 case 'yagasuri':o=PR(4,j=>PR(8,i=>{let x=i*49+(j%2)*25-14,y=j*38-15;return pPoly(x+','+(y+13)+' '+(x+21)+','+y+' '+(x+42)+','+(y+13)+' '+(x+30)+','+(y+13)+' '+(x+21)+','+(y+27)+' '+(x+12)+','+(y+13),i%2?p.gold:'#9ec5bf')}));break;
 case 'uroko':o=PR(5,j=>PR(10,i=>pPoly((i*42+(j%2)*21-18)+','+(j*37-6)+' '+(i*42+(j%2)*21+3)+','+(j*37+31)+' '+(i*42+(j%2)*21+24)+','+(j*37-6),i%2?p.slate:p.mid,p.pale,2)));break;
 case 'rings':o=PR(7,i=>pCircle(167,73,(i+1)*12,'none',i%2?p.gold:p.pale,2));break;
 default:o=pRect(15,15,306,114,p.mid,p.pale,2)+pPath('M14 15L321 126M14 126L321 15',p.gold,4);
 }
 return {base,draw:o};
}
function patternSvg(t){
 const data=patternTile(t.mode);
 return '<svg viewBox="0 0 360 184" role="img" aria-label="'+PX(t.name)+'のパターン見本。二次元模式図。" xmlns="http://www.w3.org/2000/svg">'+
 '<rect width="360" height="184" rx="10" fill="#102633"/>'+
 '<svg x="10" y="10" width="340" height="144" viewBox="0 0 336 144" overflow="hidden"><rect width="336" height="144" fill="'+data.base+'"/>'+data.draw+'</svg>'+
 '<rect x="10" y="10" width="340" height="144" fill="none" stroke="#618c9a" stroke-width="2" rx="4"/>'+
 '<text x="14" y="173" font-size="11" fill="#bfe0dc" font-weight="700">'+PX(t.group)+'</text>'+
 '<text x="347" y="173" font-size="9" text-anchor="end" fill="#85abb9">PATTERN SAMPLE</text></svg>';
}

/* Pattern picker, responsive swatches and prompt composer. */
function initPatternGallery(hooks){
 const gallery=document.getElementById('patternExplorer');
 const boxes=document.getElementById('patternCards');
 const chips=document.getElementById('patternChips');
 const teaser=document.getElementById('patternTeasers');
 const pick=document.getElementById('patternPick');
 const q=document.getElementById('patternQuery');
 const more=document.getElementById('patternMore');
 if(!gallery||!boxes||!chips||!teaser||!pick||!q||!more)return;
 const groups=['すべて','装甲・パネル','迷彩・塗装','識別・警告','工業素材・質感','SF・機械意匠','幾何・伝統模様'];
 let group='すべて',take=16,selected=null;
 const $=(id)=>document.getElementById(id);
 const norm=(s)=>String(s).normalize('NFKC').toLowerCase().replace(/\s+/g,'');
 teaser.innerHTML=[0,12,20,40].map(i=>'<span class="pattern-teaser-tile" aria-hidden="true">'+patternSvg(PATTERN_TERMS[i])+'</span>').join('');
 function filtered(){
  const query=norm(q.value);
  return PATTERN_TERMS.filter(t=>(group==='すべて'||t.group===group)&&(!query||norm([t.name,t.en,t.desc,t.where,t.group,t.mode,t.tags].join(' ')).includes(query)));
 }
 function draw(){
  if(!gallery.open)return;
  chips.innerHTML=groups.map(g=>'<button type="button" data-pgroup="'+PX(g)+'" aria-pressed="'+(g===group)+'" class="'+(g===group?'active':'')+'">'+PX(g)+'</button>').join('');
  const arr=filtered();
  $('patternStatus').textContent=arr.length+'種中 '+Math.min(take,arr.length)+'種を表示';
  boxes.innerHTML=arr.slice(0,take).map(t=>'<article class="pattern-item">'+
    '<button class="pattern-thumb" type="button" data-pat-select="'+t.id+'" aria-label="'+PX(t.name)+'の見本と解説を見る">'+patternSvg(t)+'</button>'+
    '<div class="pattern-item-meta"><strong>'+PX(t.name)+'</strong><span>'+PX(t.group)+'</span></div>'+
    '<p>'+PX(t.desc)+'</p><div class="pattern-item-actions"><button type="button" data-pat-select="'+t.id+'">詳しく見る</button><button type="button" data-pat-add="'+t.id+'">＋ 指示に追加</button></div></article>').join('')||
   '<p class="pattern-none">一致する模様がありません。別の名前で検索してください。</p>';
  more.hidden=arr.length<=take;
  more.textContent='さらに見本を表示（あと'+(arr.length-take)+'種）';
 }
 function prompt(){
  if(!selected)return '';
  const target=$('patTarget').value,method=$('patMethod').value,scale=$('patScale').value,density=$('patDensity').value;
  const scaleNote=scale.includes('1000m')?'全長1000m超の艦体に対してパターンを相対的に小さくし、艦首主砲・バインダー・艦橋より目立たせない。中景では大きな面の流れを優先し、細部は接近時に初めて読める密度にする。':scale.includes('近景')?'鑑賞距離が近い前提で細い加工目も読み取れるようにする。ただし輪郭が散らからないように整理する。':'通常戦闘距離でも主な装甲分割と意匠の方向を読み取れるようにする。';
  const methodNote=method.includes('実ジオメトリ')?'溝・リブ・突起など必要な部位のみ実ジオメトリ化し、板厚や可動干渉を損なわない。':method.includes('ノーマル')?'細部は主としてテクスチャ・ノーマル・ラフネスで表現し、シルエットを変える主要段差だけ立体化する。':method.includes('発光')?'発光素材として細線の輝度を抑え、昼夜・遠近でも構造が判別できるようにする。':'模様は塗装・デカールとして実装し、意図しない穴や装甲の段差を作らない。';
  return '【模様・パターンの造形指示】\n'
   +'採用：'+selected.name+'（'+selected.en+'）\n'
   +'配置：'+target+'\n'
   +'外観：'+selected.desc+'\n'
   +'密度：'+density+'\n'
   +'方式：'+method+'\n'
   +'観察距離：'+scale+'\n'
   +scaleNote+'\n'+methodNote+'\n'
   +'補足：'+selected.tip+'\n'
   +'模様の大きさ・繰返し方向・色数を統一し、装甲の継ぎ目と表面の印刷模様を混同しない。';
 }
 function updatePrompt(){$('patText').value=prompt();}
 function select(id){
  const t=PATTERN_TERMS.find(x=>x.id===id);if(!t)return;
  selected=t;pick.hidden=false;
  $('patName').textContent=t.name;
  $('patEnglish').textContent=t.en+' / '+t.group;
  $('patVisual').innerHTML=patternSvg(t);
  $('patAbout').textContent=t.desc;
  $('patPlace').textContent=t.where;
  $('patCaution').textContent=t.tip;
  updatePrompt();
  pick.scrollIntoView({behavior:'smooth',block:'start'});
 }
 gallery.addEventListener('toggle',()=>{if(gallery.open)draw()});
 chips.addEventListener('click',e=>{const b=e.target.closest('[data-pgroup]');if(!b)return;group=b.dataset.pgroup;take=16;draw()});
 q.addEventListener('input',()=>{take=16;draw()});
 more.addEventListener('click',()=>{take+=16;draw()});
 boxes.addEventListener('click',e=>{
  const hit=e.target.closest('[data-pat-select],[data-pat-add]');if(!hit)return;
  const id=hit.dataset.patSelect||hit.dataset.patAdd,t=PATTERN_TERMS.find(x=>x.id===id);if(!t)return;
  if(hit.hasAttribute('data-pat-select'))select(id);
  if(hit.hasAttribute('data-pat-add'))hooks.onAdd(t.prompt,t.name);
 });
 for(const name of ['patTarget','patMethod','patScale','patDensity'])$(name).addEventListener('change',updatePrompt);
 $('patCopy').addEventListener('click',()=>{if(selected)hooks.onCopy(prompt())});
 $('patAdd').addEventListener('click',()=>{if(selected)hooks.onAdd(prompt(),selected.name)});
 $('patZoom').addEventListener('click',()=>{if(selected)hooks.onZoom(selected)});
 $('patDict').addEventListener('click',()=>{if(selected)hooks.onDictionary(selected.name)});
 document.querySelectorAll('[data-open-patterns]').forEach(b=>b.addEventListener('click',()=>{
  gallery.open=true;draw();gallery.scrollIntoView({block:'start',behavior:'smooth'});
 }));
}
