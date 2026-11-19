import {calculate} from './model.mjs?v=20261119-stacked';
const $=id=>document.getElementById(id);
let active='summary',model;
const defaults=()=>({questionCount:2,questions:[{count:3},{count:3}],variables:'',start:1,products:4});
let state=defaults();
// The picker feeds the same variables input used by every calculation and export.
const friendlyElements={cat_img:'Product image',cat_text:'Product name',price_text:'Price',headline_text:'Headline',badge_img:'Badge image',description_text:'Description'};
const suggestedElements=['cat_img','cat_text','price_text','headline_text','badge_img','description_text'];
function elementChoices(){
 $('elementChoices').replaceChildren();
 suggestedElements.forEach(name=>{
  const label=document.createElement('label');label.className='element-choice';
  const checkbox=document.createElement('input');checkbox.type='checkbox';checkbox.value=name;
  checkbox.addEventListener('change',syncElements);
  const text=document.createElement('span');const title=document.createElement('strong');title.textContent=friendlyElements[name];const code=document.createElement('code');code.textContent=name;text.append(title,code);
  label.append(checkbox,text);$('elementChoices').append(label);
 });
}
function syncElements(){
 const checked=Array.from($('elementChoices').querySelectorAll('input:checked'),input=>input.value);
 const custom=$('customElements').value.split(/[\s,]+/).filter(Boolean);
 // Selecting a suggestion and typing it again should never create duplicate variables.
 const names=[...new Set([...checked,...custom])];
 state.variables=names.join(', ');
 $('selectedElements').textContent=names.length?`${names.length} element${names.length===1?'':'s'} selected: ${names.join(', ')}`:'No elements selected yet.';
 update();
}
function questionFields(){
 $('questions').replaceChildren();
 state.questions.slice(0,Number(state.questionCount)).forEach((q,qi)=>{
  const box=document.createElement('div');box.className='question';
  const label=document.createElement('label');label.textContent=`How many answers for question ${qi+1}?`;label.htmlFor=`count${qi}`;
  const count=document.createElement('input');Object.assign(count,{type:'number',min:'1',max:'26',value:q.count,id:`count${qi}`});
  count.addEventListener('input',()=>{q.count=count.value;update();});
  const hint=document.createElement('small');hint.textContent='Count the choices someone can select. The first is A, the second B, and so on. You don’t need to enter the answer text.';
  box.append(label,count,hint);$('questions').append(box);
 });
}
const titles={summary:['Team summary','Paste into your launch ticket or project brief.'],table:['Check the expected results','Review with your creative team and anyone testing the ad.'],config:['Developer setup · JSON','Send to your developer. No coding or editing needed here.'],readme:['Project notes · Markdown','Give your developer the documentation for the project README.']};
const outputGuides={summary:'This summary tells your team how much content and how many destination slots the ad needs. Confirm the choices, then copy it into your ticket.',table:'Find the answers someone selected. Under that heading, each row shows a content variable and its clickout. Rows with the same product position share a destination. Example: cat_img_a_b_1 means product image → question 1 A → question 2 B → product 1.',config:'These are test values, not final ad content. Image variables use labeled placeholder-image URLs; text variables use test_ names. Your developer will add this JSON to the ad configuration and replace the test content before launch.',readme:'README means the project’s reference document. This Markdown text records the plan, result mapping, and variable list so the team can build and test against the same expectations.'};
function outputText(){return active==='config'?JSON.stringify(model.config,null,2):model[active];}
function renderOutput(){if(model.errors.length)return;document.querySelectorAll('[role=tab]').forEach(b=>{b.setAttribute('aria-selected',String(b.dataset.tab===active));b.tabIndex=b.dataset.tab===active?0:-1;});$('outputTitle').textContent=titles[active][0];$('outputHint').textContent=titles[active][1];$('outputGuide').textContent=outputGuides[active];$('demoImageNote').hidden=active!=='config';$('copy').textContent=active==='summary'?'Copy summary':active==='table'?'Copy result table':active==='config'?'Copy JSON':'Copy project notes';$('content').replaceChildren();if(active==='table'){const table=document.createElement('table');table.className='grouped-mapping';const caption=table.createCaption();caption.textContent='Expected variables and shared clickouts by answer selection';caption.className='sr-only';model.mappingGroups.forEach(group=>{const body=table.createTBody();const selection=body.insertRow();selection.className='selection-row';const selectionHeading=document.createElement('th');selectionHeading.colSpan=model.mappingHeaders.length;selectionHeading.scope='rowgroup';selectionHeading.textContent=group.label;selection.append(selectionHeading);const headings=body.insertRow();headings.className='detail-headings';model.mappingHeaders.forEach(label=>{const th=document.createElement('th');th.scope='col';th.textContent=label;headings.append(th);});group.details.forEach((cells,i)=>{const row=body.insertRow();if(i%model.variables.length===0)row.className='product-start';cells.forEach((value,j)=>{const cell=row.insertCell();cell.textContent=value;if(j===2)cell.className='variable-name';if(j===3)cell.className='clickout-number';});});});$('content').append(table);}else{const pre=document.createElement('pre');pre.textContent=outputText();$('content').append(pre);}$('copyStatus').textContent='All outputs use the same result mapping.';}
function update(){model=calculate(state);$('errors').hidden=!model.errors.length;$('errors').classList.toggle('empty-state',!state.variables.trim());$('output').hidden=!!model.errors.length;$('resultsPrompt').textContent=model.errors.length?(state.variables.trim()?'Check the setup details to see your updated plan.':'Choose a changing part to see your plan.'):'Your plan is ready below.';$('status').textContent=model.errors.length?(state.variables.trim()?'Check setup':'Start with the setup'):'Updates as you edit';$('errors').textContent=state.variables.trim()?model.errors.join(' '):'Choose at least one changing part in “Describe your ad” to see your plan. Not sure? Open the example above and try its ready-made setup.';if(model.errors.length)return;$('metrics').replaceChildren();[[model.combos,'Possible answer paths'],[model.slots,'Product destination slots'],[model.entries.length,'Content variables']].forEach(([n,label])=>{const d=document.createElement('div');d.className='metric';const strong=document.createElement('strong');strong.textContent=n.toLocaleString();const s=document.createElement('span');s.textContent=label;d.append(strong,s);$('metrics').append(d);});$('countExplanation').textContent=`${model.options.map(q=>q.length).join(' × ')} answers = ${model.combos} paths. ${model.combos} paths × ${state.products} products = ${model.slots} product slots. ${model.slots} slots × ${model.variables.length} changing parts = ${model.entries.length} content variables. Each variable holds one piece of content; it is not an extra product.`;$('assumptions').replaceChildren();model.assumptions.forEach(a=>{const li=document.createElement('li');li.textContent=a;$('assumptions').append(li);});renderOutput();}
$('loadExample').addEventListener('click',()=>{state={...defaults(),questions:[{count:2},{count:2}],products:3};['questionCount','start','products'].forEach(id=>$(id).value=state[id]);$('customElements').value='';elementChoices();Array.from($('elementChoices').querySelectorAll('input')).forEach(input=>{input.checked=['cat_img','cat_text','price_text'].includes(input.value);});questionFields();active='table';syncElements();$('copyStatus').textContent='Example loaded: 4 paths, 12 product slots, 36 content variables.';document.querySelector('.workspace').scrollIntoView({behavior:'instant',block:'start'});});
$('customElements').addEventListener('input',syncElements);
$('questionCount').addEventListener('change',e=>{state.questionCount=e.target.value;questionFields();update();});['start','products'].forEach(id=>$(id).addEventListener('input',e=>{state[id]=e.target.value;update();}));
document.querySelectorAll('[role=tab]').forEach((b,i,buttons)=>{b.addEventListener('click',()=>{active=b.dataset.tab;renderOutput();});b.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();const next=e.key==='Home'?0:e.key==='End'?buttons.length-1:(i+(e.key==='ArrowRight'?1:-1)+buttons.length)%buttons.length;buttons[next].click();buttons[next].focus();}});});
$('copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(outputText());$('copyStatus').textContent='Copied! Ready to paste.';}catch{const area=document.createElement('textarea');area.value=outputText();$('content').replaceChildren(area);area.select();$('copyStatus').textContent='Automatic copy is unavailable. Press Ctrl+C or ⌘C to copy the selected output.';}});
$('download').addEventListener('click',()=>{const url=URL.createObjectURL(new Blob([outputText()],{type:active==='config'?'application/json':'text/plain'}));const a=document.createElement('a');a.href=url;a.download=`decision-tree-${active}.${active==='config'?'json':active==='readme'?'md':'txt'}`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
$('reset').addEventListener('click',()=>{state=defaults();['questionCount','start','products'].forEach(id=>$(id).value=state[id]);$('customElements').value='';elementChoices();questionFields();syncElements();});elementChoices();questionFields();syncElements();
