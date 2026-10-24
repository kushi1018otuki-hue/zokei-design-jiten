/* 造形辞典 要塞・軍事施設図鑑 / v4.3. Military construction vocabulary and creative SF descriptors. */
'use strict';
const FORT_GROUPS=[
 {name:'築城・稜堡',key:'star',era:'近世の稜堡式築城などで用いられた実在の築城用語。'},
 {name:'地下・防護施設',key:'bunker',era:'近代以降の防護陣地・要塞建築に見られる実施設名・機構。'},
 {name:'軍港・兵站',key:'harbor',era:'近現代の港湾工学・軍港運用・造艦設備からの用語。SF設計に転用する場合は機能を明示。'},
 {name:'宇宙要塞',key:'space',era:'SF造形の分類・説明用。実在の軍事専門用語と混同しない。'},
 {name:'惑星防衛',key:'planet',era:'SF的な惑星・軌道防衛の造形案。現実の制式名称ではないものを含む。'},
 {name:'立体防衛・環境',key:'volume',era:'本ゲーム企画の「宇宙は海ではない」原則を形状・配置の言葉へ置き換えた概念。'}
];
const FORT_RAW=[
/* Fields: 名前|英語|形状・断面|役目|来歴/分類|設置位置|注意|目印x,y */
{group:'築城・稜堡',text:"稜堡（バスティオン）|Bastion|幕壁から外方へ張り出す多角形の突出部。角と側面を持つ。|隣接壁面と外周を相互に見渡せる形を作る。|16世紀以降の稜堡式築城|城塞外郭の折れ角|単なる塔ではなく、城壁と一体の平面形を示す。|472,104\nカーテン（幕壁）|Curtain wall|稜堡と稜堡をつなぐ長い直線・折線状の壁。|堡塁外郭を連続させる。|近世の星形要塞|隣り合う稜堡の間|建築外装のカーテンウォールと区別する。|317,94\nラヴリン（半月堡）|Ravelin / demi-lune|主城壁前方に離して置く三角形に近い外郭防御施設。|城門や幕壁の前方を覆う。|稜堡式築城の外郭構成要素|本壁と外側斜面の間|独立した外堡で、主城壁の突出部ではない。|317,34\nグラシ（緩斜面）|Glacis|防御壕より外へ広がる緩やかな土の斜面。|要塞への接近面を整え、低い位置の壁を直接見せにくくする。|近世の土塁式要塞|堀のさらに外側|城内方向へ盛り上がる斜面の断面を確認する。|537,269\n防御壕・空堀|Defensive ditch|外郭前に掘られた深い帯状の溝。水のないものが空堀。|城壁と外側地面を隔てる。|古代から近代の要塞|土塁・城壁の外周|水堀と空堀を混同せず底と両側面を描く。|345,262\nエスカルプ（内壕壁）|Scarp|防御壕の要塞側にある斜壁・内側壁。|土塁や城壁の断面と連続する。|築城工学の溝断面用語|堀の内側斜面|外壕壁はカウンターエスカルプ。|404,242\nカウンターエスカルプ（外壕壁）|Counterscarp|防御壕の外側斜面・外側壁。|壕の外側の地形とつながる。|築城工学の溝断面用語|壕の外周側|エスカルプとの左右関係を断面で明示する。|488,255\nカポニエール|Caponier|防御壕に伸びる小型の囲われた通路・砲座。|壕に沿った防御機能を持つ。|近世〜近代の要塞にある防御設備|土塁から防御壕内へ突出|単なる橋とせず、側面に射撃口を持つ形状の例を示す。|390,280\n被覆道（カバードウェイ）|Covered way|壕の外側で地形に隠れた細い通行帯。|要塞外周を覆われた状態で移動する。|稜堡式築城の外周設備|カウンターエスカルプの上、グラシの内側|屋根付き廊下を意味しない場合がある。|513,215\nルネット（月形野堡）|Lunette|前方に二面、左右に側面を持ち後部が開いた外堡。|前進防御拠点を構成する。|18〜19世紀の築城術|主堡前面の外郭|ラヴリンと同義ではなく側面の形を見せる。|191,170\nレダン（角堡）|Redan|V字に突出した二面を持つ後方開放型の小土塁。|前方に向く防護線を作る。|近世以降の陣地構築|前哨・外郭の一部|ルネットより簡単なV字形として区別。|143,139\nリダウト（独立堡）|Redoubt|閉じた多角形や円形の独立した小堡塁。|単独で全方向に対応する防御拠点。|近代の野戦築城でも用いられた語|主城塞から離れた前哨|壁が閉じている点をV字開放型のレダンと区別。|118,241\n胸壁（パラペット）|Parapet|兵や砲の前方にある低い防護壁・土の盛り上がり。|射撃位置の前を守る。|各時代の築城要素|土塁頂部や砲座の前|上から見た線だけでなく高さを持つ前壁。|258,92\n砲眼（エンブレジャー）|Embrasure|砲身を通すために厚い壁や土塁に開けた凹形の開口。|砲を外部へ向ける。|要塞砲・城塞砲の設備名|胸壁・砲郭の壁面|小銃用の銃眼と寸法・断面が異なる。|443,182\n銃眼（ループホール）|Loophole|幅が細く奥へ開いた狭い射撃用スリット。|覆われた位置から外部を見る・射撃する。|城塞・トーチカ等に広く見られる語|壁・監視塔・トーチカ|光取り窓と機能が違うことを表示。|464,184\n射撃段（バンケット）|Banquette|胸壁の内側に付く一段高い足場。|射撃位置の高さを合わせる。|塁壁断面に現れる築城用語|胸壁のすぐ内側|見た目は階段でも用途は射撃位置の高さ調整。|298,185\nトラヴァース（横隔壁）|Traverse|土塁や堡塁内の通路を横切る厚い小壁。|側方からの射撃や破片を遮る区切り。|砲台・城塞の防護区画|胸壁の内側の作業通路|主城壁と直角に出る区画壁として見せる。|367,174\nサリーポート（出撃門）|Sally port|防御壁に設ける小さな出入り口や通路。|要塞の内外を行き来する。|近世の築城術|外郭と城内を貫く位置|城の正門より小さい通行口の場合が多い。|339,144"},
{group:'地下・防護施設',text:"トーチカ（ピルボックス）|Pillbox|地面から低く突き出すコンクリート小堡と細長い開口。|観測・射撃用の小さな防護拠点。|20世紀に多用された防護陣地|丘・塹壕・道路沿い|窓の大きい一般建物のように作らない。|164,151\nバンカー（掩蔽壕）|Bunker|厚い屋根と周囲土被りを持つ堅牢な壕。|人員・設備を地表の危険から覆う。|近代以降の防護建築|地表面下または覆土した区画|室内の用途と換気・入口を区別する。|319,211\n砲郭（ケースメイト）|Gun casemate|頑丈な室内から砲眼を通じて砲身を出す囲い。|砲を防護構造の内側に収める。|要塞砲・艦砲双方に使われる歴史語|地下壁や堡塁内部|露天砲塔と違い外壁が砲室の一部。|469,131\n装甲キューポラ|Armored cupola|地表から半球形に突き出す金属製の小型装甲ドーム。|観測・銃眼付き防護設備として用いる。|近代要塞の装甲設備|トーチカ屋根や地上小突起|一般の戦車キューポラと防護施設用の外形を区別。|374,86\n地下指揮所|Underground command post|複数の室を地下通路で連結した管理中枢。|施設機能をまとめる司令・通信区画。|近代の地下施設でよく見られる形式|地下区画の中心|通常施設の絵として概略室構成に留める。|288,209\n地下連絡通路|Underground connecting gallery|地中に長く伸びるアーチまたは矩形断面の通路。|離れた区画同士をつなぐ。|鉱山坑道や近代地下施設に共通|各地下室の間|換気・排水・人員の寸法を誤魔化さない。|401,212\n地下弾薬庫（マガジン）|Fortified magazine|厚い壁と独立区画を持つ保管室。|防護された貯蔵空間。|要塞の火薬庫・弾薬庫の系譜|主砲区画から離れた地下|一般収納庫とは危険物管理の用途が異なる。|254,240\n屈曲入口・爆風屈曲路|Dog-leg entrance passage|外部入口から中室まで直線で通さない折れ曲がった廊下。|内部を外気や破片から隔てる防護的な通行形態。|防護地下施設で見られる通路構成|外入口と内部部屋の間|実施設設計の性能を推定する材料ではない。|157,214\n防爆・防護扉|Blast-resistant door|厚い金属板と堅固な枠に見える扉。|防護区画への出入りを区切る。|近現代の防護建築の一般語|重要室や通路の隔壁|防爆等級・厚み・施工仕様の保証はしない。|231,213\n弾薬搬送リフト|Ammunition hoist|地下保管階と上部の設備階をつなぐ縦長の搬送機構。|階層をまたぐ物資移動の視覚的構造。|要塞・軍艦の縦方向搬送の概念|地下庫と砲台の間|用途のある縦坑として表現し数値仕様は示さない。|429,186\n観測・測距所|Observation and rangefinding post|屋上に小さな観測ドームと細長い水平窓。|周辺を観測する施設の外観。|近代沿岸砲台や地下陣地に見られる施設|高台の地上突起|架空センサー設備とは区別する。|421,74\n換気・給排気塔|Ventilation shaft tower|地下区画から細い垂直塔・ダクトが地表へ立つ。|地下設備の換気を視覚化する。|地下施設に広くある設備|地上と地下のつなぎ目|煙突ではなく空気・排熱の通路と説明する。|559,142\n覆土・土被り|Earth cover|施設屋根の上に厚い土を載せて地形と連続させた断面。|建築を地形に馴染ませる。|土塁・掩蔽施設の伝統的工法|バンカー上部や側面|外から薄い板に見せない。|306,92\nコンクリート掩体|Concrete shelter|長方形の厚い殻状の床・壁・屋根で囲われた構造。|人員や車両の収容・保護。|20世紀以降に広く見られた設備|地下入口・基地内の側面|空間を支える梁・壁と開口を整合させる。|312,167\n擁壁（レヴェットメント）|Revetment|地形や土塁の斜面を押さえる壁面・被覆材。|崩れやすい斜面・法面を支える。|土木・築城双方の専門語|土塁や斜面の外側|掩体の厚い壁と護岸とで語義が広がる。|512,154\n砲座の横隔防護壁|Battery traverse wall|隣接する砲座同士を区切る厚い横壁。|砲座の立体的な分節を作る。|近代砲台に見られる防護区画|砲台列の砲座間|隣の砲座を一体の長い壁にしない。|520,180"},
{group:'軍港・兵站',text:"軍港（海軍基地）|Naval base|大型岸壁・補給ヤード・司令建屋と防波堤を組み合わせた施設群。|艦隊を収容・補給・整備する拠点。|近代以降の艦隊運用に不可欠な施設|海岸や島の入り江|単なる大砲付きの城ではなく物流と停泊設備を含む。|322,160\n艦隊根拠地|Fleet home base|複数の係留岸壁と司令・生活区画が連なる基地。|常駐艦隊の根拠施設。|軍港の運用区分としての一般語|広い停泊水域の周囲|造艦工廠と前進補給基地の機能差を明確にする。|431,157\n造艦工廠|Naval shipyard / arsenal|長い建造ヤード・ドック・クレーンと大型作業棟の集合。|新造・大規模改修・機関整備を行う施設。|産業化後の造船・海軍工廠|大型ドック群・物流構造|SF宇宙軍港へ転用する際はトラスと係留部材を立体的に描く。|293,103\n前進補給基地|Forward logistics base|小型ヤード・貯蔵庫・桟橋など機能を絞った中継拠点。|短期の補給・人員や資材の補充。|軍の後方支援施設の一般区分|主要軍港より前方の支援拠点|万能造船基地と見なさず機能を限定する。|526,174\nドライドック（乾ドック）|Dry dock|船体が収まる長方形の深い溝と端部ゲート。|水を抜いて船底も点検整備する。|近代船舶産業の設備|工廠の中心部|船体の側面と底面へ作業空間がある。|252,188\nフローティングドック|Floating dry dock|船体の下に浮上するU字形の浮き台。|艦船の整備時に船を水上へ持ち上げる。|近代の造船・修理設備|港湾水域|固定式の乾ドックと形状が異なる。|360,223\n船台（スリップウェイ）|Slipway|建造ヤードから水面へ傾斜する幅広い台と線路。|船体の建造と進水に用いる。|伝統的な造船設備|陸地と水面の境界|乾ドックの水平な船渠とは分けて描く。|213,116\n岸壁（キー）|Quay|陸地と水面がほぼ垂直に接する堅固な停泊縁。|艦船への人員・資材の積み降ろし。|民間・軍用の港湾工学用語|港内の陸岸|桟橋（岸から突き出す構造）と混同しない。|410,246\n係留桟橋|Mooring pier|岸から水面へ突き出す細長い桟橋。|複数の船にアクセスする。|各地の港湾に共通|港内の係留区画|水面の上に支柱で載る場合と浮桟橋を分ける。|471,216\n防波堤|Breakwater|海から港を囲う細長い重い壁・護岸。|波を遮って内水面を確保する。|港湾土木の基本設備|港の外縁|宇宙軍港では波が無いので同じ目的の防波堤は不要。|532,270\nガントリークレーン|Gantry crane|両端を脚で支える高い門型フレームと横行桁。|大型部品や艦体区画の吊り上げ。|造船・港湾で使われる荷役機械|工廠のドックに跨る架構|船体と比べて桁の高さ・可動範囲を合わせる。|224,57\nジブクレーン|Jib crane|旋回基部から斜めに伸びる長い腕と吊り具。|局所の荷役を行う。|港湾・工場・艤装ヤードに多い|岸壁上や浮き台|ガントリーと違い一本のブームで荷を扱う。|439,80\n天井走行クレーン|Overhead traveling crane|屋内トラス上のレールに沿って橋型梁が走る。|工廠内で大型部材を移動する。|近現代の工場設備|大型整備棟の天井|自由に空中を飛ぶアームではなくレール構造が必要。|300,72\n艤装・整備アーム|Maintenance manipulator arm|基部、回転関節、伸縮腕、先端工具の連結。|艦船の細部作業を行う。|近代の作業機械をSF向けに拡張した設計語|宇宙工廠のドック内壁|造艦のサイズに比べて必要長さを設定する。|347,131\n補給配管ラック|Utility pipe rack|平行する複数の太い管を支える脚と梁。|冷却水・燃料・工業流体の設備ルートを示す。|工業プラント・港湾設備に共通|ドックと補給エリアの間|種類を混同せず外装と内部配管を描き分ける。|127,246\n冷却・排熱施設|Cooling and heat exchange plant|大型ラジエータ、ダクト、パネルなどの集合。|設備運用に伴う熱を処理する外観。|現実の産業設備からSF施設へ転用|動力・造艦・機関区画の周囲|宇宙では空気対流を前提とせず放熱面を意識する。|119,174\n格納庫・ハンガー|Hangar|大型の矩形またはアーチ状の覆いと広い搬入口。|航空機や作業艇を収容する。|航空・艦艇双方の一般施設|基地内部またはドック脇|大扉と搬送路を備えた空間として設計する。|177,146\n資材搬送路・レール|Cargo handling rail|搬送台車のための直線レールと分岐。|艦艇部材や物資を作業区画へ届ける。|工場・港湾鉄道からの設計語|造艦・補給ヤードの足元|走行空間とクレーン作業範囲の重なりを整理する。|470,116"},
{group:'宇宙要塞',text:"小惑星岩盤要塞|Asteroid fortress (SF)|いびつな岩塊の中に格納庫・坑道をくり抜いた巨大な塊。|岩盤そのものを防護と遮蔽物に利用する巨大拠点。|SF設計分類。ア・バオア・クーなどが発想上の参考。|小惑星・岩塊内部|参考作品の固有形状をなぞらず、立体坑道と工廠を独自設計する。|313,157\n大型機動要塞|Mobile space fortress (SF)|巨体の外殻に推進機・主砲・環状設備を持つ移動拠点。|拠点機能を移動させる巨大兵器として扱う。|SF設計分類。ガイエスブルクなどが比較例。|大型外殻と後方推進区画|巨大でも常時自在な高速旋回は前提にしない。|464,203\n宇宙都市型要塞|Fortified space city (SF)|居住棟・工場・係留ドックが林立する広大な立体都市。|生産・補給・防衛の複合施設。|スペースコロニー・宇宙都市SFからの造形語|施設群の外縁と中心核|都市としての通路や生活区画も描く。|321,112\nコロニー型要塞|Fortified space colony (SF)|大型の筒・輪・円筒居住体に砲台や装甲帯が付く。|居住区と軍事機能を同一構造物に配置する。|SF宇宙居住構造を要塞化した発想|円筒・リング外装|居住環境を守る設備と砲座の関係を分ける。|319,79\n要塞中枢コア|Fortress central core|厚い中核装甲から放射状に設備棟が伸びる幾何形。|防衛施設全体の中心を視覚化する。|宇宙施設のSF設計語|巨大施設の中心|単なる球体に砲を貼り付けただけにしない。|311,170\n岩盤坑道・掘込格納庫|Rock-cut tunnel bay|岩塊表面から奥へ深く入る矩形の坑道と発着口。|外殻の内部に空間が存在することを見せる。|トンネル・地下格納庫の構造をSFへ応用|岩盤型要塞内部|出入口と内部の奥行きを一致させる。|254,186\n岩盤外殻砲座|Rock-faced gun emplacement|岩塊を切り欠いて露出させた砲架基部と厚い縁取り。|岩盤外部に埋め込み式砲座があることを示す。|SF造形の説明語|岩塊の外向き斜面|金属砲だけを岩に載せた印象を避ける。|190,129\n放射状防衛区画|Radial defense sectors|中核から複数方向へ伸びる砲台・ドックの放射状区画。|多方向の区画構造を読みやすくする。|SF要塞の設計説明語|中央コア周囲|宇宙の全方向は水平面だけに限定しない。|417,123\n要塞主砲砲塔群|Fortress main battery cluster|巨大砲架と独立基部が集中する重量物の集まり。|要塞の主兵装区画を一目で示す。|沿岸砲台・艦砲の造形をSFへ拡張|要塞の外殻・主砲面|副砲や迎撃砲とサイズ階層を分ける。|403,91\n全周迎撃砲群|Omnidirectional point-defense array|大小同形の小砲塔が上下左右の立体外郭に分散。|あらゆる方位に装備がある印象を示す。|SF宇宙施設の造形説明語|各外殻面、上下方向|球面上の装飾的点列だけにせず砲座を持たせる。|494,143\nドッキング・ハブ|Docking hub|中心から短い接続腕が放射状に付く接続区画。|多くの艦艇・作業艇の出入り口となる。|現実の宇宙ステーション接続部をSFに応用|要塞外周の連結位置|着艦部のサイズと気密面・係留の仕組みを示す。|490,256\n連結トラス|Structural truss bridge|太い長手桁と三角筋交いの露出骨組み。|重いモジュール間をつなぐ。|宇宙ステーションや工業施設の構造から転用|コアと工廠・ドックの間|見た目の三角模様でなく連続した荷重伝達構造にする。|424,173\n艦載機発進ベイ|Launch bay / hangar bay|内部に奥行きのある発着口・閉鎖扉・通路のセット。|小型機の出入り口を描く。|空母・SF格納庫に共通する設計要素|要塞外殻の側方開口|小型機と施設全体の縮尺差を保つ。|252,106\n露出型工業設備区画|Exposed industrial plant deck|タンク・配管・トラス・整備腕が密集する開放施設面。|工廠機能を外観から読み取れるようにする。|SF軍港の造形用分類|コアの側部・下部|適当な箱の密集より用途ごとの設備群を優先する。|358,236\n艦艇修理ドック|Orbital refit dock|巨大艦を囲う開放トラスフレームと係留装置。|艦の外側を修理する作業場。|造船所のドックを宇宙用に再解釈|要塞の外周側に開いた空間|宇宙艦に海水用の乾ドックをそのまま貼り付けない。|525,212\n指揮管制ノード|Fortress command node|アンテナや表示設備を持つ装甲された管制棟。|防衛区画の状態を集約する。|SF宇宙要塞の司令施設|中央中核・艦橋に相当する部位|砲塔とは形態を分け、センサーとの接続を考える。|292,119\n広域索敵アレイ|Long-range sensor array|大型パラボラ、平板、複数面アンテナの集合。|広い宙域を観測する外装機能。|無線・レーダーの意匠をSFへ応用|要塞の見通しのよい外周|何がセンサーで何が砲身か区別する。|321,64\nシールド発生器群|Shield projector array (SF)|装甲内のリング・投射塔・発光縁の反復。|防衛シールドを表す架空設備。|SF世界観の設計語|中枢の周囲・外殻の節点|現実の実用シールド発生装置ではない。|190,214\nワープ阻害投射器|Warp interdiction projector (SF)|太いリングフレームと外向き支持腕・発光中枢。|設定上のワープ阻害設備を造形化する。|ユーザーの艦隊ゲームにある架空の阻害圏を視覚化|要塞の外周・阻害区画|SF設定上の設備で実在の兵器ではない。|458,65\n放熱板・ラジエータ|Thermal radiator bank|要塞本体から離す広い羽根状・格子状パネル。|巨大工業施設の排熱経路を見せる。|現実の宇宙技術をSF拡張|発熱設備から支持トラスで張り出す|薄い羽根板には放熱面・支持梁の向きを持たせる。|125,229"},
{group:'惑星防衛',text:"惑星防衛砲（地上砲）|Planetary defense cannon (SF)|丘や基地に埋め込む巨大砲架と外側の旋回支持構造。|惑星から宇宙側へ向く巨大兵装の存在感を出す。|SF設定上の一般的なイメージ|地表の大型防衛区画|砲身だけが地面に生える不自然な形にしない。|213,225\n対軌道砲|Surface-to-orbit cannon (SF)|地下の長い砲軸・大きな地上開口・支持架台の組み合わせ。|地上施設と軌道上対象をつなぐ防衛要素。|SF軍事造形の説明語|惑星表面の基地・山岳|特定の現実の射程や威力は前提にしない。|229,194\n迎撃ミサイル・セル|Planetary interceptor cell (SF)|並列配置した地下セルと開閉蓋が並ぶ。|多弾収納型の迎撃設備として表現する。|現実の地下格納設備をSFに拡張|防衛基地・地表の硬い平面|ポッドがせり上がる構造と固定セルを区別する。|374,262\n惑星シールド発生器|Planetary shield generator (SF)|基礎塔・大型リング・発光装置からなる架空施設。|惑星防衛用の大規模装置という造形記号。|SF作品の概念であり現実技術ではない|惑星防衛拠点・地表・軌道|光のドームだけでなく支える設備区画を描く。|165,189\nシールドゲート|Planetary shield gate (SF)|リング状の軌道施設と扉・開閉区画。|架空の防護幕の内外をつなぐ通行門。|SF作品例：スカリフのシールドゲート|惑星上空の軌道施設|作品の固有デザインをなぞる必要はない。|336,113\n軌道防衛プラットフォーム|Orbital defense platform (SF)|固定的な円盤または箱型フレームと砲塔の組み合わせ。|惑星付近の防衛設備を可視化する。|人工衛星・宇宙ステーションをSFに転用|惑星近傍の宇宙空間|常に惑星と相対静止するかは設定による。|464,131\n軌道防衛リング|Orbital defense ring (SF)|惑星の周囲に大きな輪状構造物が回り込む。|軌道上の連続施設または象徴的な防衛構造。|SFの超大型構造物|惑星の上空・周回環境|物理的に実現するには支持・軌道条件を別途設定する。|321,92\n地下ミサイルサイロ|Underground missile silo|地表の蓋から垂直に延びる深い円筒・矩形の縦坑。|地下に隠れた装置の断面を表す。|実在する設備形態をSFに転用可能|基地・広い地表区画|ゲームの造形では現実の運用寸法に依存しない。|455,252\n地上通信・レーダーアレイ|Planetary sensor array (SF)|複数の大きい皿形アンテナや平板を群として配置。|地表基地が外部と通信・監視することを示す。|現実の通信施設をSF拡張|高台・基地の一角|砲台と違う細長い支柱・アンテナ面で描き分ける。|120,236\n着陸場・降下艇パッド|Dropship landing pad|平坦な着陸面と誘導線、周辺の小設備。|地上への大型艇・兵員の出入りを表す。|航空施設の形をSFへ転用|基地内の開放エリア|射撃砲台とは違って発着用空間を広くとる。|496,215\n降下艇格納庫|Dropship hangar|大型扉と奥に伸びる整備室・誘導通路。|地上軍と軌道側を結ぶ輸送拠点。|航空格納庫のSF用転用|山腹・地下・基地の側面|進入方向に対して扉の寸法を確認する。|440,208\n地上司令中枢|Surface command complex|低く厚い施設群と連絡塔・地下接続部。|惑星地上軍の指揮設備として読ませる。|SF軍事基地の説明語|基地中央や地中|軍港の巨大司令塔と混同しない。|263,249\n軌道エレベータ基部|Space elevator ground terminal (SF)|極めて大きな基礎建物から長い垂直塔・線が伸びる。|惑星と軌道の物資移動を示す施設。|SF宇宙インフラの概念|赤道域など設定上の地上駅|力学・成立条件は作品設定による。|309,235\n地上補給拠点|Surface logistics depot|大型コンテナヤード、搬送路、倉庫棟の集合。|地上部隊への輸送・補給を視覚化する。|一般の兵站施設をSFに転用|後方基地・港湾|機能単位を区別し単なる倉庫の塊にしない。|524,263"},
{group:'立体防衛・環境',text:"三次元防衛圏|Three-dimensional defense volume (SF)|中枢を囲む半透明の球面・楕円体と立体方向矢印。|空間全体へ広がる守備範囲を模式的に示す。|宇宙は海ではない原則の設計表現|要塞の周囲の体積|実体の壁・固定結界があるとは限らない。|327,166\n全周射界|All-around firing coverage|砲塔から扇・円錐状に伸びる複数の射撃方向。|上下左右の配置を三次元で考える。|砲塔の射界概念をSFへ拡張|全周砲台・リング・外装各面|画面内の平面360度と立体の全天方向を分ける。|449,165\n上下砲列・立体配置|Dorsal and ventral batteries (SF)|上面・下面の双方に同系統の砲座が付いた断面。|平面だけに偏らない武装位置を示す。|宇宙艦隊ゲームの多軸攻撃方針|要塞・巨大艦の上下外面|船体の真下を照射できるかは砲台干渉による。|323,94\n主砲射線軸|Main battery firing corridor (SF)|主砲先端から長い直線状に延びる射線を半透明帯で示す。|視覚上の砲撃主方向と遮蔽物を整理する。|軍艦の砲術とSF主砲演出の共通概念|大型主砲の中心軸上|実際の武器の射線と模式図上の帯は区別する。|481,108\n対機迎撃扇区|Point-defense coverage sector (SF)|複数の小砲座に重なった扇型の光の領域。|要塞周囲の小型機迎撃範囲を表現。|SF防衛演出用の設計語|外装の副砲群周辺|規則的な射界層を通行不可の壁に見せない。|245,101\nセンサー監視圏|Sensor detection volume (SF)|中核から外へ伸びる広い球状の点線エリア。|索敵の外観・UI表現を統一する。|艦隊ゲームの観測設定に対応|センサー群の外側|検知範囲は可視形状ではなく説明図の記号。|164,131\n電子妨害圏|Electronic warfare zone (SF)|中心ノードから広がる薄い波紋・点線の球面。|電子戦を担当する設備の区別。|架空世界の電子戦・通信阻害の表現|妨害機や要塞外周|通信路と艦体そのものを塞ぐ物理壁ではない。|499,231\nワープ阻害圏|Warp interdiction volume (SF)|中枢から広がる異なる色の楕円球・格子線。|設定上のワープ制限領域を示す。|艦隊ゲームのワープ阻害原則|投射器から広がる空域|現実の技術ではなくSF内のルールである。|415,245\n艦載機運用回廊|Strikecraft approach corridor (SF)|要塞の発着口から立体に湾曲する進入・離脱ライン。|航空運用の視覚的な発進経路を整理する。|現実の進入経路概念をSFへ拡張|格納庫・要塞周辺の空域|空間全体を物理的に拘束する廊下ではない。|267,236\n漂流残骸遮蔽帯|Drifting debris cover (SF)|サイズ違いの破片と崩れた船体が立体的に浮かぶ群。|戦場地形と視覚的な遮蔽物を作る。|宇宙艦隊ゲームの環境資源方針|残骸帯・撃沈艦の周辺|岩や破片を固定壁とせず移動や遮蔽を意識する。|207,262\n小惑星岩塊の遮蔽|Asteroid terrain cover (SF)|不規則な大岩塊の背後に小型施設・艦が見える。|大型地形に奥行きを与える。|自然天体を宇宙地形として使うゲーム設計|岩塊・小惑星帯の間|岩塊の陰は球体ではなく方向依存。|110,218\n重畳防衛層|Layered area defense (SF)|近・中・遠で異なる径の半透明球を重ねる。|複数装備が担う体積を図で理解する。|戦場UI向けの設計語|防衛施設の外側全域|砲台配置だけで完全防護を保証しない。|354,268\n要塞の戦略拠点性|Strategic value of fortress (SF)|要塞だけでなくドック・補給路・通信中枢・護衛艦を接続したネットワーク図。|敵が無視できない理由を造形と配置で示す。|ユーザーの『回廊がなければ要塞は無意味では』という設計論点に対応|要塞の周囲の交通・補給・目標|広い宇宙に必ず一方向の海上回廊があるとは扱わない。|508,152\n防衛拠点と物流中枢の結節|Defense-logistics hub network (SF)|工廠・軍港・衛星・補給施設が細い線で中核へ連結。|砲台ではなく『巨大な軍港』として要塞を描く。|宇宙要塞と軍港を統合したゲーム造形概念|軍港・宙域・惑星近傍|攻撃・無力化・無視の選択肢を景観から読ませる。|546,216"},
];
const FORT_TERMS=[];
for(const g of FORT_RAW){
 const mode=FORT_GROUPS.find(x=>x.name===g.group);
 if(!mode)throw Error('Unrecognized fortress group '+g.group);
 for(const line of g.text.split('\n')){
  const [name,en,look,role,history,where,tip,zone]=line.split('|');
  if(!zone||line.split('|').length!==8)throw Error('Invalid fortress item: '+line);
  const id='f'+String(FORT_TERMS.length+1).padStart(3,'0');
  const sf=['space','planet','volume'].includes(mode.key);
  const prompt='【要塞・軍事造形：'+name+'】'+where+'に設ける。形状：'+look+'。役割：'+role+'。設置部位の取り合い、開口の奥行き、支承・通路・隣接施設を表現し、上面図・側面図・断面図を整合させる。'+tip;
  FORT_TERMS.push({id,name,en,cat:'要塞・軍事造形',group:g.group,family:'fortress',mode:mode.key,
    desc:look,role,history,where,tip,zone,prompt,source:'fortress-v4.3',
    tags:'軍事施設 形状 設備 要塞 造形 立体 地上宇宙 星形 築城 防衛 司令部 軍港 ア・バオア・クー ガイエスブルク 参考 SF '+g.group+' '+en+' '+(sf?'SF造形・構想':"実在施設・史実用語")});
 }
}
if(FORT_TERMS.length!==100)throw Error('Fortress Atlas must contain 100 terms; got '+FORT_TERMS.length);
const FP={bg:'#0b2231',stone:'#42687d',dim:'#9dc9cc',bright:'#f4c27f',cyan:'#70d3d1',deep:'#142c3c',land:'#475d50'};
const fPt=(x,y,r=5,fill=FP.bright)=>'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+fill+'"/>';
const fLine=(d,color=FP.dim,w=2,extra='')=>'<path d="'+d+'" fill="none" stroke="'+color+'" stroke-width="'+w+'" '+extra+'/>';
const fRect=(x,y,w,h,fill=FP.stone,stroke=FP.dim,r=3)=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+r+'" fill="'+fill+'" stroke="'+stroke+'" stroke-width="2"/>';
const fEllipse=(cx,cy,rx,ry,color=FP.cyan,w=2,extra='')=>'<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+ry+'" fill="none" stroke="'+color+'" stroke-width="'+w+'" '+extra+'/>';
const fText=(x,y,t,size=12,fill=FP.dim,weight=700,anchor='start')=>'<text x="'+x+'" y="'+y+'" font-size="'+size+'" fill="'+fill+'" font-weight="'+weight+'" text-anchor="'+anchor+'">'+fEsc(t)+'</text>';
function fEsc(s){return String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));}
function fortressBase(mode){
 let s='';
 switch(mode){
 case 'star':
  s+='<rect width="640" height="340" fill="#273c34"/>';
  s+='<path d="M318 9L390 70L500 39L484 124L590 173L486 215L499 296L389 274L319 326L251 270L135 296L152 214L47 173L155 122L140 41L245 75Z" fill="#45584c" stroke="#88b79c" stroke-width="3"/>';
  s+='<path d="M320 54L368 102L447 92L432 146L516 173L433 201L447 249L367 237L320 288L272 237L193 250L208 199L124 173L207 147L193 92L274 103Z" fill="#223949" stroke="#bcdfd8" stroke-width="6" stroke-linejoin="miter"/>';
  s+='<path d="M320 78L356 124L423 116L407 151L468 173L408 196L423 224L357 214L320 254L280 214L216 224L232 194L172 173L234 151L217 116L283 123Z" fill="#425c57" stroke="#e0c394" stroke-width="3"/>';
  s+='<path d="M320 44L345 75L320 91L295 75Z" fill="#9e9b71" stroke="#efd1a1" stroke-width="3"/>';
  s+='<g fill="#718a81" stroke="#d0ded6" stroke-width="2"><rect x="273" y="149" width="94" height="48" rx="3"/><rect x="297" y="156" width="26" height="25"/><rect x="237" y="168" width="24" height="42"/></g>';
  s+=fLine('M82 173H160M480 173H565M320 285V322','#90bb9b',2,'stroke-dasharray="5 5"');
  s+=fText(22,26,'平面模式図 / 星形要塞',13,'#d9ebe6');break;
 case 'bunker':
  s+='<rect width="640" height="340" fill="#162e42"/><path d="M0 119L63 96L110 121L161 93L219 117L314 94L401 115L476 92L566 118L640 107V340H0Z" fill="#485849"/>';
  s+='<path d="M0 120H640" stroke="#d4c391" stroke-width="4"/>';
  s+=fRect(135,124,395,153,'#233f52','#c6d6d0',3);
  s+=fRect(154,143,118,69,'#345c70');s+=fRect(291,143,95,69,'#345c70');s+=fRect(400,143,107,69,'#345c70');
  s+=fRect(155,230,139,30,'#213744');s+=fRect(309,230,184,30,'#213744');
  s+=fLine('M273 174H292M388 174H403M268 241H311','#e1c28c',7);
  s+=fRect(137,73,64,57,'#6f837d','#d9e5dd',3);
  s+=fRect(392,62,78,63,'#466272','#d9e6d9',6);
  s+='<path d="M405 63Q414 22 432 23Q460 24 469 64Z" fill="#879d9c" stroke="#edddbc" stroke-width="3"/>';
  s+=fRect(535,76,18,75,'#577787','#cde3d7',2);
  s+=fLine('M150 284H510','#9cafa5',3);
  s+=fText(22,24,'側面断面模式図 / 地下防護施設',13,'#d9ebe6');break;
 case 'harbor':
  s+='<rect width="640" height="340" fill="#16435d"/><path d="M0 0H640V112H525V161H366V123H256V169H0Z" fill="#50615f" stroke="#a3b6af" stroke-width="3"/>';
  s+=fRect(204,20,136,139,'#243f4b','#bededb',3);
  s+='<rect x="225" y="42" width="93" height="98" fill="#173b50" stroke="#72a9b8" stroke-width="3"/>';
  s+=fRect(36,18,102,49,'#547887','#b9d6d8',4)+fRect(381,14,124,74,'#597782','#b9d6d8',5);
  s+=fLine('M49 67H134M397 30H480','#d4bb79',2);
  s+=fLine('M177 26V194M159 31H294M178 31L159 50M176 31L293 62','#dbbb87',5);
  s+=fLine('M416 22L509 96M436 44L499 44','#dbbb87',4);
  s+='<path d="M365 111V247H484V132H501V265H350V111Z" fill="#708b88" stroke="#dae3dc" stroke-width="3"/>';
  s+='<path d="M530 302H640V320H531V302Z" fill="#758b86" stroke="#d8e9dd" stroke-width="2"/>';
  s+='<path d="M70 318H303V297H108L108 277H85L85 297H70Z" fill="#6f8988" stroke="#d6e9e6" stroke-width="3"/>';
  s+='<path d="M105 218L153 186L206 218L195 262L128 262Z" fill="#8cb4ba" stroke="#d3e8e4" stroke-width="2"/>';
  s+='<g fill="#92cdd6" opacity=".27">'+Array.from({length:8},(_,i)=>fLine('M0 '+(175+i*19)+'H640','#83a8ba',1)).join('')+'</g>';
  s+=fText(22,25,'港湾平面図 / 工廠・係留',13,'#e7f2eb');break;
 case 'space':
  s+='<rect width="640" height="340" fill="#0a1a2e"/>'+Array.from({length:24},(_,i)=>fPt(10+(i*79)%627,12+(i*131)%310,i%4===0?2:1.2,'#90b8c8')).join('');
  s+='<path d="M156 72L204 33L295 42L350 26L422 66L500 102L486 179L458 246L385 277L311 299L248 266L173 274L123 219L101 151Z" fill="#45535b" stroke="#b2cbd0" stroke-width="5"/>';
  s+='<path d="M184 112L244 76L317 93L370 73L429 117L433 210L375 236L299 263L217 244L165 190Z" fill="#233b50" stroke="#6b9ba7" stroke-width="3"/>';
  s+=fRect(240,124,159,73,'#1a4556','#b5d8d3',6)+fRect(280,148,77,33,'#618393','#daf3e5',3);
  s+=fRect(169,166,92,43,'#304e60','#86a7a6',4)+fRect(393,143,83,54,'#304e60','#86a7a6',4);
  s+='<g stroke="#f5c680" stroke-width="5">'+fLine('M218 122L126 75','#e9bd7c',6)+fLine('M422 136L530 93','#e9bd7c',6)+fLine('M363 257L459 303','#e9bd7c',4)+'</g>';
  s+='<path d="M474 175H589V236H474Z" fill="none" stroke="#acd9dc" stroke-width="5"/>';
  s+=fLine('M495 177V235M524 177V235M554 177V235','#85c3c9',2);
  s+=fRect(292,59,28,34,'#778b97','#c5e1de',3)+fLine('M305 59V35','#d8ba82',4);
  s+=fLine('M133 115L174 145M120 161L171 176','#b4dfe0',7);
  s+=fText(19,25,'斜視・断面概念 / 岩盤＋工廠',13,'#cdece7');break;
 case 'planet':
  s+='<rect width="640" height="340" fill="#091b30"/>'+Array.from({length:24},(_,i)=>fPt(10+(i*73)%620,10+(i*97)%298,1.1,'#9cbdca')).join('');
  s+=fEllipse(322,176,242,111,'#5899a7',3,'stroke-dasharray="8 7"');
  s+='<path d="M201 337A170 170 0 0 1 443 337Z" fill="#355a68" stroke="#a6dcd7" stroke-width="3"/>';
  s+=fEllipse(320,327,147,132,'#719eb8',2);
  s+=fLine('M163 330Q321 163 482 330','#f0c575',4);
  s+='<path d="M213 292Q320 186 420 299" fill="none" stroke="#76d6d3" stroke-width="3" stroke-dasharray="8 8"/>';
  s+=fRect(170,233,72,31,'#577c89','#d2e9dc',3)+fRect(398,249,81,36,'#577c89','#d2e9dc',3);
  s+=fLine('M226 233L226 199','#efc88d',5)+fRect(221,191,14,13,'#ead0a2','#f9eed1',1);
  s+='<g transform="translate(335 111)"><circle r="33" fill="#294963" stroke="#c4e1de" stroke-width="4"/><circle r="18" fill="none" stroke="#f2c983" stroke-width="4"/></g>';
  s+='<path d="M457 124H498V137H457Z" fill="#779ea8" stroke="#d5eae4" stroke-width="3"/>';
  s+=fText(20,23,'側面模式図 / 惑星・軌道施設',13,'#cae9e7');break;
 case 'volume':
  s+='<rect width="640" height="340" fill="#0a2030"/>';
  s+=fEllipse(321,173,243,140,'#4f869c',3,'stroke-dasharray="10 8"');
  s+=fEllipse(321,173,182,107,'#71a69d',3,'stroke-dasharray="8 7"');
  s+=fEllipse(321,173,121,68,'#edc986',3,'stroke-dasharray="5 5"');
  s+=fEllipse(321,173,184,40,'#8bc2ca',2);
  s+=fEllipse(321,173,54,129,'#8bc2ca',2);
  s+='<path d="M321 147L345 161L343 184L320 202L295 181L295 157Z" fill="#5a7785" stroke="#f5d290" stroke-width="4"/>';
  s+='<g stroke="#e6b77b" stroke-width="3" fill="none">'+
   fLine('M321 147L321 44','#efc07d',3)+fLine('M319 204L319 289','#efc07d',3)+fLine('M294 170L94 170','#efc07d',3)+fLine('M349 170L531 170','#efc07d',3)+
   fLine('M304 161L186 85','#efc07d',3)+fLine('M345 180L468 264','#efc07d',3)+'</g>';
  s+='<g fill="#ecc884"><path d="M313 52l8 -15 8 15ZM312 283l8 15 8 -15ZM102 162l-15 8 15 8ZM523 162l15 8 -15 8Z"/></g>';
  s+='<g fill="#5d7686" stroke="#93c0bf" stroke-width="2">'+Array.from({length:9},(_,i)=>{const x=77+(i*79)%505,y=32+(i*53)%268;return '<circle cx="'+x+'" cy="'+y+'" r="'+(i%2?4:6)+'"/>'}).join('')+'</g>';
  s+=fText(18,22,'概念図 / 三次元の範囲と遮蔽物',13,'#cde5e6');break;
 default:s+='<rect width="640" height="340" fill="#132f40"/>';
 }
 return s;
}
function fortressSvg(t){
 const mode=t?.mode||'space',x=Number((t?.zone||'320,170').split(',')[0]),y=Number((t?.zone||'320,170').split(',')[1]);
 const marker='<circle cx="'+x+'" cy="'+y+'" r="18" fill="#f8ca79" fill-opacity=".16" stroke="#f5be74" stroke-width="3"/>'+
  '<circle cx="'+x+'" cy="'+y+'" r="6" fill="#ffd48a" stroke="#152a3b" stroke-width="2"/>'+
  fLine('M'+(x-20)+' '+y+'H'+(x+20)+'M'+x+' '+(y-20)+'V'+(y+20),'#ffe1a0',1,'stroke-dasharray="3 5"');
 const caption=t?t.name:({star:'稜堡式要塞の外郭構造',bunker:'防護施設の側面断面',harbor:'港湾設備・工廠・軍港',space:'小惑星岩盤＋軍港＋防衛',planet:'惑星の地表・軌道施設',volume:'三次元防衛圏と環境地形'}[mode]||'要塞図鑑');
 return '<svg viewBox="0 0 640 340" role="img" aria-label="'+fEsc(caption)+'：'+fEsc(t?.group||'全体')+'の位置模式図" xmlns="http://www.w3.org/2000/svg">'+
 fortressBase(mode)+
 (t?marker:'')+
 '<rect x="9" y="298" width="622" height="34" rx="7" fill="#051823" fill-opacity=".9" stroke="#5c91a0" stroke-width="1"/>'+
 fText(20,320,t?('注目：'+caption):('概要：'+caption),14,'#f2dbb6',850)+
 '</svg>';
}
function fortressTermSvg(t){return fortressSvg(t)}
function initFortressAtlas(hooks){
 const shell=document.getElementById('fortressExplorer');
 if(!shell)return;
 const el=id=>document.getElementById(id);
 const modeLabels=FORT_GROUPS.map(g=>g.name);
 const e=txt=>fEsc(txt);
 let mode='宇宙要塞',selected=null;
 const norm=s=>String(s||'').normalize('NFKC').toLowerCase().replace(/[\s\u3000]+/g,'');
 const sfMode=t=>['space','planet','volume'].includes(t.mode);
 const groupHint={
  '築城・稜堡':'実在の要塞で使われた稜堡・外郭。上面図で主壁・外堡・堀を区別します。',
  '地下・防護施設':'断面図で地表の屋根と地下室の構造を分け、入口・通路・観測設備の位置を確認します。',
  '軍港・兵站':'要塞が機能する理由は砲火だけではありません。艦隊が寄れる岸壁、工廠、補給ヤードを別構造で描きます。',
  '宇宙要塞':'SF設計例：小惑星岩盤＋工廠・宇宙都市・軍港を分離しつつ接続。巨大で無視できない施設である理由を考えます。',
  '惑星防衛':'惑星表面の設備と軌道上の施設を分けて描き、実際の架空世界のルールと発着施設を明示します。',
  '立体防衛・環境':'「宇宙は海ではない」原則。上・下・前・後ろ・球面全周を含む3D領域を線と透明な体積で示します。'
 };
 function fortPrompt(t){
  const scale=el('fortScale').value,art=el('fortMethod').value,angle=el('fortView').value,detail=el('fortDensity').value;
  const family=sfMode(t)?'創作用のSF造形説明語。実在の規格を意味しません。':'歴史・建築・港湾などに由来する実在の用語。';
  const principle=sfMode(t)?'SF施設では多方向（上方・下方を含む）の表面・遮蔽・通信・補給の関係を考える。単なる一方向の海上回廊を宇宙に強制しない。':'歴史的な実物の機能と形状から逸脱しない範囲で、ゲーム用の説明図に簡略化する。';
  const scaleMessage=scale.includes('1000m')?'1000m超の超戦艦や大規模軍港と接続するため、主施設に対して人員用入口・設備・開口を十分小さく描く。':scale.includes('巨大宇宙要塞')?'大型宇宙要塞の複数区画として、工廠・交通・武装・居住を別層に割り当てる。':'実物やロボットとの対比で入口・通路・機器の大きさを合わせる。';
  return '【要塞・軍事造形の構造指示】\n用語：'+t.name+'（'+t.en+'）\n分類：'+t.group+'\n由来・時代：'+t.history+'\n形状：'+t.desc+'\n役目：'+t.role+'\n設置位置：'+t.where+'\n表現方法：'+art+'\n視点：'+angle+'\n情報密度：'+detail+'\nスケール：'+scale+'\n'+scaleMessage+'\n'+family+'\n'+principle+'\n注意：'+t.tip+'\n原図は上面図・側面図・断面図の対応をとり、装置の奥行き・接続・開閉の整合を守る。';
 }
 function update(){
  const g=FORT_GROUPS.find(x=>x.name===mode);
  const current=selected&&selected.group===mode?selected:null;
  el('fortVisual').innerHTML=fortressSvg(current||{mode:g.key,group:mode,zone:'320,170',name:mode});
  el('fortAbout').textContent=groupHint[mode];
  el('fortGroupButtons').innerHTML=FORT_GROUPS.map(x=>'<button type="button" data-fgroup="'+e(x.name)+'" aria-pressed="'+(mode===x.name)+'">'+e(x.name)+'</button>').join('');
  const q=norm(el('fortSearch').value);
  const arr=FORT_TERMS.filter(t=>t.group===mode&&(!q||norm([t.name,t.en,t.desc,t.role,t.history,t.where,t.tip].join(' ')).includes(q)));
  el('fortCount').textContent=mode+'：'+arr.length+'語';
  el('fortWordList').innerHTML=arr.length?arr.map(t=>'<button type="button" data-fitem="'+t.id+'" aria-pressed="'+(selected?.id===t.id)+'">'+e(t.name)+'</button>').join(''):'<p class="fort-none">一致する用語はありません。このカテゴリの検索語を変えてください。</p>';
  if(!selected || selected.group!==mode){el('fortDetail').hidden=true;return;}
  el('fortDetail').hidden=false;
  el('fortDetailName').textContent=selected.name;
  el('fortDetailKind').textContent=(sfMode(selected)?'SF造形・配置概念':'実在の施設・専門語')+' / '+selected.en;
  el('fortDetailShape').textContent=selected.desc;
  el('fortDetailRole').textContent=selected.role;
  el('fortDetailHistory').textContent=selected.history;
  el('fortDetailWhere').textContent=selected.where;
  el('fortDetailTip').textContent=selected.tip;
  el('fortText').value=fortPrompt(selected);
 }
 function choose(id,scroll=true){
  const t=FORT_TERMS.find(x=>x.id===id);if(!t)return;
  if(t.group!==mode)mode=t.group;
  selected=t;
  update();
  if(scroll)el('fortDetail').scrollIntoView({block:'center',behavior:'smooth'});
 }
 function open(category){
  shell.open=true;
  if(category && FORT_GROUPS.some(g=>g.name===category))mode=category;
  if(!selected||selected.group!==mode) selected=FORT_TERMS.find(t=>t.group===mode);
  update();
  shell.scrollIntoView({block:'start',behavior:'smooth'});
 }
 shell.addEventListener('toggle',()=>{if(shell.open){if(!selected)selected=FORT_TERMS.find(t=>t.group===mode);update();}});
 el('fortGroupButtons').addEventListener('click',evt=>{
  const b=evt.target.closest('[data-fgroup]');if(!b)return;
  mode=b.dataset.fgroup;selected=FORT_TERMS.find(t=>t.group===mode);
  el('fortSearch').value='';update();
 });
 el('fortWordList').addEventListener('click',evt=>{const b=evt.target.closest('[data-fitem]');if(b)choose(b.dataset.fitem)});
 el('fortSearch').addEventListener('input',()=>update());
 for(const id of ['fortScale','fortMethod','fortView','fortDensity'])el(id).addEventListener('change',()=>{if(selected)el('fortText').value=fortPrompt(selected)});
 el('fortCopy').addEventListener('click',()=>{if(selected)hooks.copy(fortPrompt(selected))});
 el('fortAdd').addEventListener('click',()=>{if(selected)hooks.add(fortPrompt(selected),selected.name)});
 el('fortZoom').addEventListener('click',()=>{if(selected)hooks.zoom(selected)});
 el('fortDictionary').addEventListener('click',()=>{if(selected)hooks.search(selected)});
 document.querySelectorAll('[data-open-fortress]').forEach(b=>b.addEventListener('click',()=>open(b.dataset.openFortress||'宇宙要塞')));
 const teaser=el('fortTeaser');
 if(teaser)teaser.innerHTML=fortressSvg(null);
}

/* Extend existing app after military-atlas.js registered its terms.
   Existing IDs, favorites, and original definitions remain untouched. */
(function(){
 if(window.__fortressAtlasLoaded)return;
 const existingMap=new Map(TERMS.map(t=>[simpleFortName(t.name),t]));
 function lookup(name){return existingMap.get(simpleFortName(name));}
 function simpleFortName(s){return String(s||'').normalize('NFKC').toLowerCase().replace(/（[^）]*）/g,'').replace(/\([^)]*\)/g,'').replace(/[\s\u3000・/ー_]/g,'');}
 const aliases={
  'カーテン（幕壁）':'幕壁（カーテン）','ラヴリン（半月堡）':'半月堡（ラヴリン）',
  'グラシ（緩斜面）':'斜堤（グラシ）','エスカルプ（内壕壁）':'スカープ',
  'カウンターエスカルプ（外壕壁）':'カウンタースカープ',
  '被覆道（カバードウェイ）':'覆道（カバードウェイ）','防御壕・空堀':'空堀',
  '軍港（海軍基地）':'軍港','造艦工廠':'造船工廠',
  'ドライドック（乾ドック）':'乾ドック','フローティングドック':'浮きドック',
  '船台（スリップウェイ）':'船台','地下弾薬庫（マガジン）':'弾薬庫',
  '装甲キューポラ':'装甲キューポラ','艦艇整備アーム':'巨大作業アーム',
  '放熱板・ラジエータ':'宇宙放熱ラジエータ'
 };
 let added=0,related=0;
 for(const t of FORT_TERMS){
  t.svg=fortressTermSvg(t);
  const old=lookup(aliases[t.name]||t.name);
  if(old){t.redirect=old.name;related++;continue;}
  if(meta[t.id])throw Error('Fortress ID collision '+t.id);
  t.hay=normalize([t.name,t.en,t.desc,t.role,t.history,t.where,t.tip,t.group,t.tags,t.cat].join(' '));
  TERMS.push(t);
  meta[t.id]=t;
  existingMap.set(simpleFortName(t.name),t);
  added++;
 }
 if(added+related!==100)throw Error('Fortress registration failed');
 const cat='要塞・軍事造形',i=CATS.indexOf('お気に入り');
 if(!CATS.includes(cat))CATS.splice(i<0?CATS.length:i,0,cat);
 const stats=document.querySelector('.hero-stats');
 if(stats){
  const first=stats.querySelector('.tag');if(first)first.textContent='全 '+TERMS.length+' 語';
  const label=document.createElement('span');
  label.className='tag';label.textContent='要塞・軍事造形 +'+added+' 語';
  stats.appendChild(label);
  const ver=Array.from(stats.querySelectorAll('.tag')).find(x=>/^v4\.[23]$/.test(x.textContent.trim()));
  if(ver)ver.textContent='v4.4';
 }
 function goDictionary(t){
  const wanted=t.redirect||t.name;
  selectedCat='すべて';displayed=36;query=wanted;
  document.querySelector('#search').value=wanted;
  render();document.querySelector('#resultGrid').scrollIntoView({block:'start',behavior:'smooth'});
 }
 function addText(v,name){
  document.querySelector('#builder').classList.add('open');
  document.querySelector('#builderTextarea').value=(document.querySelector('#builderTextarea').value.trim()+'\n\n'+v).trim();
  manualEdited=true;
  toast(name+'を指示に追加しました');
 }
 initFortressAtlas({copy,zoom:openFigure,search:goDictionary,add:addText});
 window.__fortressAtlasLoaded=true;
 if(typeof render==='function')render();
 window.__fortressAtlasStats={registered:added,existingRelated:related,viewer:100,total:TERMS.length};
})();
