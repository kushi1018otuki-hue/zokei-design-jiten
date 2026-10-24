/* v4.5 mobile-first UI integration for the existing glossary PWA.
   Existing canonical term arrays, favorite keys, figures, and prompt generators are untouched. */
(function(){
 'use strict';
 if(window.__glossaryUIv45)return;
 const sel=q=>document.querySelector(q);
 const dom=(tag,cls,html)=>{const node=document.createElement(tag);if(cls)node.className=cls;if(html!==undefined)node.innerHTML=html;return node};
 const main=sel('main.main'),toolbar=main?.querySelector('.toolbar'),resultGrid=sel('#resultGrid'),builder=sel('#builder');
 if(!main||!toolbar||!resultGrid||!builder||!sel('#filters')||!sel('#loadMore'))return;
 const count=typeof TERMS!=='undefined'?TERMS.length:0;
 if(!count)return;
 const hero=sel('.masthead .shell');
 const stats=hero?.querySelector('.hero-stats');
 const version=Array.from(stats?.querySelectorAll('.tag')||[]).find(e=>/^v4\.\d+/.test(e.textContent.trim()));
 if(version)version.textContent='v4.5';
 const heroInfo=dom('div','ux-hero-info','<strong>'+count+'語の図解辞典</strong><span>オフライン対応 · v4.5</span>');
 hero.append(heroInfo);
 const findView=dom('section','ux-view');
 findView.id='uxFindView';
 const visualView=dom('section','ux-view');
 visualView.id='uxVisualView';
 visualView.hidden=true;
 main.prepend(visualView);
 main.prepend(findView);
 findView.append(dom('header','ux-heading','<div><h2 id="uxPageTitle">用語を探す</h2><p id="uxPageLead">名前が分からなくても、見た目や位置で検索できます。</p></div><span class="ux-version">'+count+'語収録</span>'));
 findView.append(toolbar);
 const filters=sel('#filters');
 const filterDetails=dom('details','ux-filter-details');
 filterDetails.id='uxFilterDetails';
 filterDetails.innerHTML='<summary>すべての細かい分類を表示</summary>';
 toolbar.append(filterDetails);
 filterDetails.append(filters);
 const legacy=main.querySelector('.quick-categories');
 if(legacy){legacy.classList.add('ux-legacy-quick');legacy.style.display='none';}
 const categories=[
  ['🛡','戦車','車体・砲塔','戦車・装甲車','cat'],
  ['⚓','艦船','艦橋・船体','艦船・軍艦','cat'],
  ['🤖','ロボット','関節・装甲','ロボット構造','cat'],
  ['🎯','武装配置','主砲・砲列','武装配置','cat'],
  ['🏰','要塞・軍港','地下・宇宙施設','fortress','visual'],
  ['🎨','模様・装飾','装甲・迷彩','patterns','visual'],
  ['🚀','格納武装','ミサイル・展開','展開・格納兵装','cat'],
  ['◇','基本形状','反り菱・断面','形状・輪郭','cat']
 ];
 const catWrapper=dom('section','ux-category-wrapper');
 catWrapper.innerHTML='<div class="ux-mini-heading"><h3>分野から探す</h3><span>タップで用語を絞り込み</span></div>';
 const catGrid=dom('div','ux-categories');
 catGrid.id='uxCategories';
 for(const [icon,title,sub,value,kind] of categories){
   const b=dom('button','ux-cat', '<span class="ux-cat-icon" aria-hidden="true">'+icon+'</span><span><span class="ux-cat-title">'+title+'</span><span class="ux-cat-sub">'+sub+'</span></span>');
   b.type='button';b.dataset.kind=kind;b.dataset.value=value;b.setAttribute('aria-label',title+'を開く');catGrid.append(b);
 }
 catWrapper.append(catGrid);findView.append(catWrapper);
 findView.append(dom('div','ux-results-label','<h3>検索結果</h3><span class="ux-results-hint">図と説明をタップして確認</span>'));
 const statsline=main.querySelector('.statsline');
 const loadMore=sel('#loadMore');
 findView.append(statsline,resultGrid,loadMore);
 const favEmpty=dom('div','ux-empty-fav','★ お気に入りはまだありません。<br>気になる用語の☆をタップすると、ここに保存できます。');
 favEmpty.id='uxEmptyFav';favEmpty.hidden=true;findView.insertBefore(favEmpty,statsline);
 visualView.append(dom('header','ux-heading','<div><h2>図解から探す</h2><p>形状・構造・配置を図で確認できます。</p></div><span class="ux-version">6つの図解</span>'));
 visualView.append(dom('p','ux-visual-lead','専門用語を知らなくても大丈夫です。分野を選ぶと、部位図・断面図・展開状態を見ながら探せます。'));
 const visualTiles=dom('nav','ux-visual-tiles');
 const visualItems=[
 ['🏰','要塞・軍港','平面・地下・宇宙','fortress'],
 ['🎨','模様・パターン','60種の見本','patterns'],
 ['⚓','武装の配置','戦列艦から宇宙艦','weapon'],
 ['🚀','格納・展開','地中・装甲の機構','deploy'],
 ['🛰','1000m超の艦砲','4軸で配置指示','layout'],
 ['🛡','戦車・船体の部位','位置を図から探す','parts']
 ];
 for(const [icon,title,sub,target] of visualItems){
  const b=dom('button','ux-visual-tile','<em aria-hidden="true">'+icon+'</em><strong>'+title+'</strong><span>'+sub+'</span>');
  b.type='button';b.dataset.visual=target;b.setAttribute('aria-label',title+'の図解を開く');visualTiles.append(b);
 }
 visualView.append(visualTiles);
 const zones={fortress:sel('#fortressZone'),patterns:sel('#patternZone')};
 if(zones.fortress)visualView.append(zones.fortress);
 if(zones.patterns)visualView.append(zones.patterns);
 // Keep the design principles accessible without putting several paragraphs above the diagram.
 const fortConcept=zones.fortress?.querySelector('.fort-idea');
 if(fortConcept){const disclosure=dom('details','ux-fort-idea','<summary>宇宙要塞を設計する際の考え方を見る</summary>');fortConcept.replaceWith(disclosure);disclosure.append(fortConcept)}
 const accordion=(source,id,icon,title,subtitle,after)=>{
  if(!source)return null;
  const outer=dom('details','ux-accordion');outer.id=id;
  outer.innerHTML='<summary><span class="ux-accordion-icon" aria-hidden="true">'+icon+'</span><span class="ux-accordion-copy"><strong>'+title+'</strong><span>'+subtitle+'</span></span><span class="ux-open-arrow" aria-hidden="true">⌄</span></summary>';
  const content=dom('div','ux-accordion-content');outer.append(content);content.append(source);
  if(after)content.append(after);
  visualView.append(outer);return outer;
 };
 const accordions={
  weapon:accordion(main.querySelector('.weapon-feature'),'uxWeaponDetails','⚓','武装配置を図から探す','戦列艦・現代艦・SF艦艇の砲列'),
  layout:accordion(main.querySelector('.nextgen-feature'),'uxLayoutDetails','🛰','超戦艦の武装配置メーカー','1000m超艦／ロボット構造／射界の4軸'),
  deploy:accordion(sel('#deployFeature'),'uxDeployDetails','🚀','ミサイルポッド・収納機構','装甲・地中からの格納／展開状態')
 };
 accordion(main.querySelector('.discovery'),'uxPartsDetails','🛡','戦車・艦船の部位図','部位をタップして名称を検索',main.querySelector('.mapfoot'));
 accordions.parts=sel('#uxPartsDetails');
 // Original sticky filter row and the dozens of chip buttons are retained in a collapsed menu.
 // The old prompt composer remains the same component and shares its original state.
 const backdrop=dom('button','ux-backdrop');
 backdrop.id='uxBuilderBackdrop';backdrop.type='button';backdrop.setAttribute('aria-label','指示メーカーを閉じる');
 document.body.append(backdrop);
 const nav=dom('nav','ux-bottom-nav');
 nav.id='uxBottomNav';nav.setAttribute('aria-label','アプリ内の主要メニュー');
 const navSpec=[['find','⌕','探す'],['visual','▧','図解'],['favorites','☆','お気に入り'],['build','✎','指示']];
 for(const [action,icon,label] of navSpec){
  const b=dom('button','ux-nav-tab','<span class="ux-nav-icon" aria-hidden="true">'+icon+'</span><span class="ux-nav-label">'+label+'</span>');
  b.type='button';b.dataset.uxnav=action;
  if(action==='build'){b.setAttribute('aria-pressed','false');b.innerHTML+='<span class="ux-badge" id="uxBuildBadge" hidden>0</span>'}
  else b.setAttribute('aria-current',action==='find'?'page':'false');
  nav.append(b);
 }
 document.body.append(nav);
 document.body.classList.add('ux-ready','ux-mode-find');
 let view='find';
 const navButton=id=>nav.querySelector('[data-uxnav="'+id+'"]');
 function refreshActive(){
  for(const b of nav.querySelectorAll('.ux-nav-tab')){
    const key=b.dataset.uxnav;
    if(key==='build')b.setAttribute('aria-pressed',String(builder.classList.contains('open')));
    else b.setAttribute('aria-current',view===key?'page':'false');
  }
 }
 function refreshBuilderBadge(){
  const n=Number(sel('#chosenCount')?.textContent||0),badge=sel('#uxBuildBadge');
  if(badge){badge.textContent=n;badge.hidden=n===0}
 }
 function updateCategories(){
  for(const b of catGrid.querySelectorAll('[data-kind="cat"]'))b.classList.toggle('ux-cat-active',b.dataset.value===selectedCat);
  const isFav=view==='favorites',howMany=typeof favs!=='undefined'?favs.size:0;
  favEmpty.hidden=!isFav||howMany!==0;
  navButton('favorites').querySelector('.ux-nav-icon').textContent=isFav?'★':'☆';
 }
 function switchView(next,scroll=true){
  if(builder.classList.contains('open'))builder.classList.remove('open');
  backdrop.classList.remove('ux-visible');
  view=next;
  findView.hidden=next==='visual';visualView.hidden=next!=='visual';
  document.body.classList.toggle('ux-mode-find',next==='find');
  document.body.classList.toggle('ux-mode-visual',next==='visual');
  document.body.classList.toggle('ux-mode-favorites',next==='favorites');
  if(next==='favorites'){
    selectedCat='お気に入り';query='';sel('#search').value='';displayed=12;render();
    sel('#uxPageTitle').textContent='お気に入り';sel('#uxPageLead').textContent='★を付けた用語をまとめて確認できます。';
  }else if(next==='find'){
    if(selectedCat==='お気に入り'){selectedCat='すべて';query='';sel('#search').value='';displayed=12;render();}
    sel('#uxPageTitle').textContent='用語を探す';sel('#uxPageLead').textContent='名前が分からなくても、見た目や位置で検索できます。';
  }
  sel('.ux-results-label h3').textContent=next==='favorites'?'お気に入り一覧':'検索結果';
  updateCategories();refreshActive();
  if(scroll)window.scrollTo({top:0,behavior:'instant'});
 }
 function revealVisual(which){
  switchView('visual',false);
  let node;
  if(which==='fortress'){node=sel('#fortressExplorer');node.open=true}
  else if(which==='patterns'){node=sel('#patternExplorer');node.open=true}
  else {node=accordions[which];if(node)node.open=true}
  if(node)requestAnimationFrame(()=>node.scrollIntoView({block:'start',behavior:'smooth'}));
 }
 window.__ui45RevealVisual=revealVisual;
 catGrid.addEventListener('click',e=>{
  const button=e.target.closest('button[data-kind]');if(!button)return;
  if(button.dataset.kind==='visual'){revealVisual(button.dataset.value);return}
  switchView('find',false);
  selectedCat=button.dataset.value;query='';sel('#search').value='';displayed=12;render();
  updateCategories();
  requestAnimationFrame(()=>sel('.ux-results-label').scrollIntoView({block:'start',behavior:'smooth'}));
 });
 visualTiles.addEventListener('click',e=>{const button=e.target.closest('[data-visual]');if(button)revealVisual(button.dataset.visual)});
 nav.addEventListener('click',e=>{
  const b=e.target.closest('[data-uxnav]');if(!b)return;
  const action=b.dataset.uxnav;
  if(action==='build'){
    if(builder.classList.contains('open'))builder.classList.remove('open');
    else{builder.classList.add('open');syncBuilder()}
    backdrop.classList.toggle('ux-visible',builder.classList.contains('open'));refreshActive();return;
  }
  switchView(action,true);
 });
 backdrop.addEventListener('click',()=>{builder.classList.remove('open');backdrop.classList.remove('ux-visible');refreshActive()});
 sel('#builderClose').addEventListener('click',()=>{backdrop.classList.remove('ux-visible');refreshActive()});
 sel('#builderToggle').addEventListener('click',()=>{backdrop.classList.toggle('ux-visible',builder.classList.contains('open'));refreshActive()});
 const observer=new MutationObserver(()=>{refreshBuilderBadge();refreshActive()});
 observer.observe(sel('#chosenCount'),{childList:true,characterData:true,subtree:true});
 // Legacy term-card buttons can open the composer directly; synchronize the backdrop and tab.
 const builderObserver=new MutationObserver(()=>{backdrop.classList.toggle('ux-visible',builder.classList.contains('open'));refreshActive()});
 builderObserver.observe(builder,{attributes:true,attributeFilter:['class']});
 const resultObserver=new MutationObserver(()=>{updateCategories();refreshBuilderBadge()});
 resultObserver.observe(resultGrid,{childList:true});
 sel('#search').addEventListener('input',()=>{
  selectedCat='すべて';displayed=12;render();updateCategories();
 });
 sel('#resetSearch').addEventListener('click',()=>{displayed=12;render();updateCategories()});
 filters.addEventListener('click',e=>{if(e.target.closest('[data-cat]')){displayed=12;render();updateCategories();filterDetails.open=false}});
 // Limit the first screen to a useful number of cards; keep the existing gradual-load behavior.
 const originalLoad=sel('#loadMore'),newLoad=originalLoad.cloneNode(true);
 originalLoad.replaceWith(newLoad);
 newLoad.addEventListener('click',()=>{displayed+=12;render()});
 // Visual sections have their own search links; reveal the search screen before legacy handlers run.
 document.addEventListener('click',e=>{
  if(e.target.closest('[data-jump],[data-weapon-search],#seeAllWeapons,#fortDictionary,#patDict,.callout[data-term]')){
    switchView('find',false);
    setTimeout(()=>{displayed=12;render();updateCategories()},0);
  }
 },true);
 document.body.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&builder.classList.contains('open')){builder.classList.remove('open');backdrop.classList.remove('ux-visible');refreshActive()}
 });
 // A large glossary is easier to scan when we show fewer search cards per page.
 displayed=12;render();refreshActive();refreshBuilderBadge();updateCategories();
 window.__glossaryUIv45={version:'4.5',terms:count,switchView,revealVisual};
})();
