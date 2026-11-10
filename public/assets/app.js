/* BDX / Notes — navigateur statique, aucune donnée envoyée à un serveur. */
(() => {
  'use strict';
  const data = window.BDX_DATA;
  const edition=data.edition;
  const dayInfo=id=>edition.days.find(d=>d.id===id);
  const dayDate=id=>{const d=dayInfo(id);return d.label+' '+d.date;};
  const $ = (q, root = document) => root.querySelector(q);
  const $$ = (q, root = document) => [...root.querySelectorAll(q)];
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const roomOrder = ['grand-amphi','amphi-a','amphi-b','amphi-d','amphi-e','salle-1','salle-2'];
  const roomName = {'grand-amphi':'Grand Amphi','amphi-a':'Amphi A','amphi-b':'Amphi B','amphi-d':'Amphi D','amphi-e':'Amphi E','salle-1':'Salle 1','salle-2':'Salle 2'};
  const colors = {
    'Architecture & Méthodologies':['#7f9170','#edf0e4'],
    'Cloud, Infra & DevOps':['#6a8aab','#eaf0f5'],
    'Cybersécurité':['#b57b70','#f6ede8'],
    'IA, Data & Machine Learning':['#9985b8','#eee9f5'],
    'Big Data & I.A.':['#9985b8','#eee9f5'],
    'Produit & Design':['#b18a4f','#f6f0df'],
    'Société, Éthique & Hors-piste':['#7d9b97','#eaf0eb'],
    'Software Development (Frontend, Backend & au-delà)':['#a49370','#f3efe3'],
    'Vie de la conférence':['#94859c','#eee9ee']
  };
  const shortCategory = c => ({'Architecture & Méthodologies':'Architecture','Cloud, Infra & DevOps':'Cloud & DevOps','Cybersécurité':'Sécurité','IA, Data & Machine Learning':'IA & Data','Big Data & I.A.':'Big Data & IA','Produit & Design':'Produit & Design','Société, Éthique & Hors-piste':'Société & hors-piste','Software Development (Frontend, Backend & au-delà)':'Développement','Vie de la conférence':'La communauté'}[c] || c);
  function readSet(key) { try { const value=JSON.parse(localStorage.getItem(key)||'[]'); return new Set(Array.isArray(value)?value.filter(v=>typeof v==='string'):[]); } catch { return new Set(); } }
  const savedKey=edition.year===2026?'bdx-notes-saved-v1':`bdx-notes-saved-${edition.year}`,readKey=edition.year===2026?'bdx-notes-read-v1':`bdx-notes-read-${edition.year}`;
  const saved=readSet(savedKey), read=readSet(readKey);
  const state={day:edition.days[0].id,query:'',room:'',category:'',notes:false,favorites:false,view:matchMedia('(max-width:700px)').matches?'list':'planning'};
  let activeTalk=null, activeTab='notes', previousFocus=null, priorHash='', toastTimer;
  const dialog=$('#talk-dialog');
  const safeUrl=url=>/^https?:\/\//i.test(url)?escape(url):'#';
  function persist(){try{localStorage.setItem(savedKey,JSON.stringify([...saved]));localStorage.setItem(readKey,JSON.stringify([...read]));}catch{toast('La sélection reste disponible pour cette visite.');}}
  function toast(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),2600);}
  function avatar(s, extra=''){return `<span class="avatar ${extra}" aria-hidden="true">${s.photo?`<img src="${escape(s.photo)}" alt="" loading="lazy" onerror="this.remove()">`:escape(s.name.split(/\s+/).filter(Boolean).slice(0,2).map(x=>x[0]).join(''))}</span>`;}
  function sortedSessions(day=state.day){return data.sessions.filter(t=>t.day===day).sort((a,b)=>a.time.localeCompare(b.time)||roomOrder.indexOf(a.room)-roomOrder.indexOf(b.room));}
  function filtered(){const terms=normalize(state.query).split(/\s+/).filter(Boolean);return sortedSessions().filter(t=>(!state.room||t.room===state.room)&&(!state.category||t.category===state.category)&&(!state.notes||t.status!=='absent')&&(!state.favorites||saved.has(t.id))&&terms.every(term=>t.search.includes(term)));}
  function card(t){const [accent,tint]=colors[t.category]||colors['Vie de la conférence'];const status=t.status==='complete'?'Lire le carnet':t.status==='partial'?'Notes partielles':'Sans transcription';return `<article class="talk-card is-${t.status}" style="--accent:${accent};--tint:${tint}"><button type="button" class="card-save" data-save="${t.id}" aria-label="${saved.has(t.id)?'Retirer de':'Ajouter à'} ma sélection : ${escape(t.title)}" aria-pressed="${saved.has(t.id)}">${saved.has(t.id)?'★':'☆'}</button><button type="button" class="card-main" data-open="${t.id}" aria-label="Ouvrir : ${escape(t.title)}"><span class="card-meta">${escape(shortCategory(t.category))}<span class="mini-dot"></span>${t.duration} min</span><h3>${escape(t.title)}</h3><span class="card-speakers"><span class="avatar-stack">${t.speakers.slice(0,2).map(s=>avatar(s)).join('')}</span><span>${escape(t.speakers.map(s=>s.name).join(' · '))}</span></span><span class="card-bottom"><span class="card-status"><i></i>${status}</span>${read.has(t.id)?'<span class="read-check">✓ Lu</span>':'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 15 15 4M5 4h10v10"/></svg>'}</span></button></article>`;}
  function syncControls(){
    $$('[data-day]').forEach(b=>{const yes=b.dataset.day===state.day;b.classList.toggle('active',yes);b.setAttribute('aria-pressed',yes);});
    $$('[data-view]').forEach(b=>{const yes=b.dataset.view===state.view;b.classList.toggle('active',yes);b.setAttribute('aria-pressed',yes);});
    $('#notes-filter').setAttribute('aria-pressed',state.notes);$('#favorites-filter').setAttribute('aria-pressed',state.favorites);
    $('#room-filter').value=state.room;$('#category-filter').value=state.category;$('#search').value=state.query;
    $('#reset').hidden=!(state.query||state.room||state.category||state.notes||state.favorites);
    $('#saved-count').textContent=saved.size;
  }
  function render(){
    syncControls();const talks=filtered();const total=sortedSessions().length;
    $('#result-count').textContent=`${talks.length} / ${total} sessions`;
    $('#empty').hidden=talks.length>0;$('#schedule').hidden=!talks.length;
    if(!talks.length){$('#schedule').replaceChildren();return;}
    if(state.view==='list'){
      const groups=[...new Set(talks.map(t=>t.time))];
      $('#schedule').innerHTML=`<div class="schedule-list">${groups.map(time=>`<h3 class="list-group-title">${time.replace(':',' h ')} <span style="font:10px var(--sans);color:var(--muted);margin-left:8px">${escape(dayDate(state.day))}</span></h3><div class="list-grid">${talks.filter(t=>t.time===time).map(t=>card(t).replace('<span class="card-meta">',`<span class="card-meta">${escape(t.roomLabel)} · `)).join('')}</div>`).join('')}</div>`;
    }else{
      const rooms=state.room?[state.room]:roomOrder.filter(r=>talks.some(t=>t.room===r));
      const times=[...new Set(talks.map(t=>t.time))];
      let out=`<div class="schedule-grid ${rooms.length===1?'single-room':''}" style="--rooms:${rooms.length}"><div class="room-heading">HEURE</div>${rooms.map(r=>`<div class="room-heading"><i></i>${roomName[r]}</div>`).join('')}`;
      for(const time of times){out+=`<div class="slot-time"><span>${time}</span></div>`;for(const room of rooms){const matches=talks.filter(t=>t.time===time&&t.room===room);out+=`<div class="schedule-cell ${matches.length?'':'empty-cell'}">${matches.map(card).join('')}</div>`;}}
      $('#schedule').innerHTML=out+'</div>';
    }
  }
  function reset(){Object.assign(state,{query:'',room:'',category:'',notes:false,favorites:false});render();}
  function toggleSaved(id){saved.has(id)?saved.delete(id):saved.add(id);persist();render();if(activeTalk?.id===id)syncModalActions();toast(saved.has(id)?'Talk ajouté à votre sélection.':'Talk retiré de votre sélection.');}
  function syncModalActions(){if(!activeTalk)return;$$('[data-modal-save]',dialog).forEach(b=>{b.setAttribute('aria-pressed',saved.has(activeTalk.id));b.innerHTML=`<span>${saved.has(activeTalk.id)?'★':'☆'}</span><span class="action-label">${saved.has(activeTalk.id)?'Dans ma sélection':'Garder'}</span>`;b.setAttribute('aria-label',saved.has(activeTalk.id)?'Retirer de ma sélection':'Ajouter à ma sélection');});$$('[data-read]',dialog).forEach(b=>{b.setAttribute('aria-pressed',read.has(activeTalk.id));b.textContent=read.has(activeTalk.id)?'✓ Marqué comme lu':'Marquer comme lu';});}
  function speaker(s,t){const links=s.links.map(link=>{const labels={linkedin:'LinkedIn',site:'Site web',github:'GitHub',twitter:'X / Twitter',bluesky:'Bluesky',mastodon:'Mastodon'};return `<a href="${safeUrl(link.url)}" target="_blank" rel="noopener noreferrer">${escape(labels[link.label.toLowerCase()]||link.label)} ↗</a>`;}).join('');return `<section class="speaker-profile"><div class="speaker-head">${avatar(s)}<div><h3>${escape(s.name)}</h3><p class="speaker-caption">Intervenant·e · BDX I/O ${edition.year}</p></div></div>${links?`<div class="speaker-links">${links}</div>`:'<p class="no-links">Aucun lien personnel indiqué sur la fiche officielle.</p>'}<a class="source-link" href="${safeUrl(t.source)}" target="_blank" rel="noopener noreferrer">Biographie sur BDX I/O ↗</a></section>`;}
  function openTalk(id,fromHash=false){
    const t=data.sessions.find(t=>t.id===id);if(!t)return;
    if(!dialog.open){previousFocus=document.activeElement;priorHash=location.hash.startsWith('#talk=')?'':location.hash;}
    activeTalk=t;activeTab='notes';state.day=t.day;render();
    const [accent,tint]=colors[t.category]||colors['Vie de la conférence'];
    const ordered=sortedSessions(t.day),index=ordered.findIndex(x=>x.id===t.id),prev=ordered[index-1],next=ordered[index+1];
    const speakerNames=t.speakers.map(s=>s.name).join(' · ');
    const status=t.status==='complete'?'Carnet disponible':t.status==='partial'?'Notes partielles':'Sans transcription';
    $('#talk-shell').innerHTML=`<div class="modal-topbar"><span class="breadcrumb">LE CARNET <span aria-hidden="true">/</span> ${escape(dayDate(t.day).toUpperCase())} ${edition.year}</span><button type="button" class="modal-action" data-modal-save></button><button type="button" class="modal-action" id="share-talk" aria-label="Copier le lien du talk"><span>↗</span><span class="action-label">Partager</span></button><button type="button" class="close" id="close-talk" aria-label="Fermer le talk">×</button></div><div class="modal-scroll"><header class="modal-hero" style="--tint:${tint}"><div class="modal-tags"><span class="pill">${escape(t.category||'Vie de la conférence')}</span>${t.level?`<span>${escape(t.level)}</span>`:''}</div><h2 id="modal-title">${escape(t.title)}</h2><div class="modal-details"><span>${escape(dayDate(t.day))} ${edition.year} · ${t.time.replace(':',' h ')}</span><span>${escape(t.roomLabel)}</span><span>${t.duration} min</span><span>${escape(t.format.split(' - ')[0])}</span></div></header><div class="modal-layout"><section class="reading-area" aria-label="Contenu du talk"><div class="content-tabs" role="tablist" aria-label="Contenu"><button type="button" role="tab" id="tab-notes" aria-controls="panel-notes" aria-selected="true" tabindex="0" data-tab="notes">${t.status==='absent'?'Le carnet':'Le carnet de notes'} <span aria-hidden="true">↙</span></button><button type="button" role="tab" id="tab-info" aria-controls="panel-info" aria-selected="false" tabindex="-1" data-tab="info">Infos & ressources</button></div><div id="panel-notes" role="tabpanel" aria-labelledby="tab-notes"><div class="note-kicker"><span>${status}</span><span>${t.words?`${Math.max(1,Math.ceil(t.words/210))} min de lecture`:'À documenter'}</span></div>${t.status!=='absent'||t.html?`<div class="notes-prose">${t.html}</div>`:`<div class="missing-note"><p class="eyebrow">UNE PAGE À ÉCRIRE</p><h3>Le talk est au programme.<br>Le carnet reste à compléter.</h3><p>Nous n’avons pas de transcription exploitable pour cette session. Son contenu n’est pas reconstitué à partir du titre.</p><a href="${safeUrl(t.source)}" target="_blank" rel="noopener noreferrer">Retrouver la présentation officielle ↗</a></div>`}${t.status==='complete'?'<div class="note-end"><span>Une idée de plus dans votre carnet.</span><button type="button" data-read>Marquer comme lu</button></div>':''}</div><div id="panel-info" role="tabpanel" aria-labelledby="tab-info" hidden><div class="about-talk"><p class="eyebrow">LES REPÈRES</p><h3>Le talk, en pratique.</h3><p>${escape(t.intro||'Cette session figure au programme officiel de BDX I/O ${edition.year}. Sa description et les biographies des intervenants sont disponibles sur la fiche de la conférence.')}</p><dl><dt>Intervenant·es</dt><dd>${escape(speakerNames)}</dd><dt>Quand</dt><dd>${escape(dayDate(t.day))} ${edition.year}, ${t.time}</dd><dt>Où</dt><dd>${escape(t.roomLabel)}</dd><dt>Format</dt><dd>${escape(t.format)}</dd><dt>Niveau</dt><dd>${escape(t.level||'Non précisé')}</dd><dt>Langue</dt><dd>Français</dd><dt>Notes</dt><dd>${status}</dd></dl><a class="button-link" href="${safeUrl(t.source)}" target="_blank" rel="noopener noreferrer">Voir le talk sur BDX I/O ↗</a>${t.noteFile?`<p><a href="./notes/${escape(t.noteFile)}" download>Télécharger les notes Markdown ↓</a></p>`:''}<p>Les liens des speakers proviennent du programme officiel et des profils publics fournis pour ce carnet. Ils peuvent pointer vers un site personnel ou professionnel. Les notes sont un carnet indépendant, pas une transcription mot à mot.</p><p><small>Source des métadonnées : BDX I/O · consultation du 10 novembre 2026.</small></p></div></div></section><aside class="speaker-aside"><p class="sidebar-label">${t.speakers.length>1?'Les voix du talk':'La voix du talk'}</p>${t.speakers.map(s=>speaker(s,t)).join('')}${t.toc?.length?`<div class="toc-wrap"><p class="sidebar-label">Dans ces notes</p><nav class="toc" aria-label="Sommaire des notes">${t.toc.map(h=>`<a href="#${escape(h.id)}" data-toc="${escape(h.id)}">${escape(h.text)}</a>`).join('')}</nav></div>`:''}<p class="sidebar-source">Portraits et liens publics : BDX I/O, LinkedIn et GitHub.<br>Notes reformulées depuis les transcriptions.</p></aside></div></div><div class="modal-footer"><button type="button" data-next="${prev?.id||''}" ${prev?'':'disabled'}>← ${prev?escape(prev.title):'Début de journée'}</button><button type="button" data-next="${next?.id||''}" ${next?'':'disabled'}>${next?escape(next.title):'Fin de journée'} →</button></div>`;
    syncModalActions();if(!dialog.open){dialog.showModal();document.body.style.overflow='hidden';}else $('.modal-scroll',dialog).scrollTop=0;
    if(!fromHash)history.replaceState(null,'',`#talk=${encodeURIComponent(t.id)}`);
    $('#close-talk').focus({preventScroll:true});
  }
  function setTab(tab,focus=false){activeTab=tab;$$('[data-tab]',dialog).forEach(b=>{const yes=b.dataset.tab===tab;b.setAttribute('aria-selected',yes);b.tabIndex=yes?0:-1;if(yes&&focus)b.focus();});$('#panel-notes').hidden=tab!=='notes';$('#panel-info').hidden=tab!=='info';}
  function closeTalk(){if(dialog.open)dialog.close();}
  dialog.addEventListener('close',()=>{activeTalk=null;document.body.style.overflow='';if(location.hash.startsWith('#talk='))history.replaceState(null,'',location.pathname+location.search+priorHash);if(previousFocus?.isConnected)previousFocus.focus({preventScroll:true});else $('#search').focus({preventScroll:true});});
  dialog.addEventListener('click',event=>{if(event.target===dialog){closeTalk();return;}const open=event.target.closest('[data-next]');if(open?.dataset.next){openTalk(open.dataset.next);return;}if(event.target.closest('#close-talk')){closeTalk();return;}if(event.target.closest('[data-modal-save]')){toggleSaved(activeTalk.id);return;}const tab=event.target.closest('[data-tab]');if(tab){setTab(tab.dataset.tab);return;}if(event.target.closest('[data-read]')){read.has(activeTalk.id)?read.delete(activeTalk.id):read.add(activeTalk.id);persist();syncModalActions();render();return;}const toc=event.target.closest('[data-toc]');if(toc){event.preventDefault();setTab('notes');document.getElementById(toc.dataset.toc)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth',block:'start'});return;}if(event.target.closest('#share-talk')){const url=location.href;if(navigator.clipboard&&location.protocol!=='file:')navigator.clipboard.writeText(url).then(()=>toast('Lien du talk copié.')).catch(()=>showShare(url));else showShare(url);}});
  function showShare(url){window.prompt('Copiez le lien du talk :',url);}
  dialog.addEventListener('keydown',e=>{if(e.target.matches('[data-tab]')&&['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();setTab(e.key==='Home'?'notes':e.key==='End'?'info':activeTab==='notes'?'info':'notes',true);}});
  $('#schedule').addEventListener('click',e=>{const save=e.target.closest('[data-save]');if(save){toggleSaved(save.dataset.save);return;}const open=e.target.closest('[data-open]');if(open)openTalk(open.dataset.open);});

  document.title='BDX / IO / NOTES — Édition '+edition.year;
  for(const id of ['edition-year','cover-year','colophon-year'])$('#'+id).textContent=edition.year;
  $('.hero .eyebrow').textContent=edition.datesLabel+' '+edition.year+' / LE RETOUR DE CONFÉRENCE';
  $('.cover-bottom span').textContent=edition.location;
  $('#carnet-count').textContent=data.sessions.filter(t=>t.status==='complete').length;
  $('#total-count').textContent=data.sessions.length;
  $('#room-count').textContent=new Set(data.sessions.map(t=>t.room)).size;
  $('#day-count').textContent=edition.days.length;
  $('.day-tabs').innerHTML=edition.days.map((d,i)=>'<button type="button" data-day="'+escape(d.id)+'" aria-pressed="'+(i===0)+'"><span>'+escape(d.label.toUpperCase())+'</span><b>'+escape(d.short)+'</b></button>').join('');
  const editionSelect=$('#edition-select');
  for(const item of data.editions){const o=document.createElement('option');o.value=item.href;o.textContent=item.year+(item.planned?' · À venir':'');o.disabled=item.planned;o.selected=item.year===edition.year;editionSelect.append(o);}
  editionSelect.addEventListener('change',()=>{location.href=editionSelect.value;});
  $('footer p').innerHTML='Un carnet indépendant · BDX I/O '+edition.year+' · <a href="'+safeUrl(data.source)+'" target="_blank" rel="noopener noreferrer">Programme officiel ↗</a>';
  $('#about-dialog .about-content>p:nth-of-type(2)').textContent='Ce site rassemble un carnet personnel de BDX I/O '+edition.year+'. Il n’est ni édité ni validé par l’association BDX I/O.';
  $('#about-dialog .about-content>p:nth-of-type(3)').textContent=data.sessions.filter(t=>t.status==='complete').length+' carnets développés. Les passages manquants restent signalés. Les notes sont reformulées et ne sont pas des citations.';

  $$('[data-day]').forEach(b=>b.addEventListener('click',()=>{state.day=b.dataset.day;render();}));
  $$('[data-view]').forEach(b=>b.addEventListener('click',()=>{state.view=b.dataset.view;render();}));
  $('#search').addEventListener('input',e=>{state.query=e.target.value;render();});
  $('#room-filter').addEventListener('change',e=>{state.room=e.target.value;render();});
  $('#category-filter').addEventListener('change',e=>{state.category=e.target.value;render();});
  $('#notes-filter').addEventListener('click',()=>{state.notes=!state.notes;render();});
  $('#favorites-filter').addEventListener('click',()=>{state.favorites=!state.favorites;render();});
  $('#saved-nav').addEventListener('click',()=>{state.favorites=true;render();$('#programme').scrollIntoView({behavior:'smooth'});});
  $('#reset').addEventListener('click',reset);$('#empty-reset').addEventListener('click',reset);
  const about=$('#about-dialog');$('#about-button').addEventListener('click',()=>about.showModal());$$('.about-close').forEach(b=>b.addEventListener('click',()=>about.close()));about.addEventListener('click',e=>{if(e.target===about)about.close();});
  document.addEventListener('keydown',e=>{if(e.key==='/'&&!dialog.open&&!about.open&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)){e.preventDefault();$('#search').focus();}});
  window.addEventListener('hashchange',()=>{if(location.hash.startsWith('#talk=')){const id=decodeURIComponent(location.hash.slice(6));if(activeTalk?.id!==id)openTalk(id,true);}else if(dialog.open)dialog.close();});
  for(const room of roomOrder){const option=document.createElement('option');option.value=room;option.textContent=roomName[room];$('#room-filter').append(option);}
  for(const category of [...new Set(data.sessions.map(t=>t.category))].sort()){const option=document.createElement('option');option.value=category;option.textContent=shortCategory(category);$('#category-filter').append(option);}
  render();if(location.hash.startsWith('#talk='))openTalk(decodeURIComponent(location.hash.slice(6)),true);
})();
