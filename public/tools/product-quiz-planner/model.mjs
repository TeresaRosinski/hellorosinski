// All outputs consume this model; numbering and naming are calculated only here.
export function calculate(input) {
 const errors=[]; const integer=(v,min,max)=>Number.isInteger(Number(v))&&Number(v)>=min&&Number(v)<=max;
 if(![1,2].includes(Number(input.questionCount))) errors.push('Choose one or two questions.');
 if(!integer(input.start,1,999999)) errors.push('First clickout must be a whole number from 1 to 999,999.');
 if(!integer(input.products,1,100)) errors.push('Products per result must be a whole number from 1 to 100.');
 const questions=input.questions.slice(0,Number(input.questionCount));
 questions.forEach((q,i)=>{if(!integer(q.count,1,26)) errors.push(`Question ${i+1} needs 1–26 options.`);});
 const validName=n=>/^[A-Za-z_][A-Za-z0-9_]*$/.test(n);
 const variables=input.variables.split(/[\s,]+/).filter(Boolean);
 if(!variables.length||variables.some(n=>!validName(n))) errors.push('Add valid linked variable names, separated by commas or new lines.');
 if(new Set(variables).size!==variables.length) errors.push('Linked variable names must be unique.');
 if(errors.length) return {errors};
 const combos=questions.reduce((n,q)=>n*Number(q.count),1),slots=combos*Number(input.products);
 if(slots*variables.length>20000) return {errors:['This plan exceeds 20,000 variable entries. Reduce options, products, or linked variables.']};
 const options=questions.map((q,qi)=>Array.from({length:Number(q.count)},(_,i)=>({key:String.fromCharCode(97+i),question:qi+1})));
 const selections=options.length===1?options[0].map(a=>[a]):options[0].flatMap(a=>options[1].map(b=>[a,b]));
 // Each product position has one clickout shared by all its linked elements.
 const rows=selections.map((selection,i)=>{
  const key=selection.map(x=>x.key).join('_');
  const suffix=selection.map(x=>x.key).join('_');
  const products=Array.from({length:Number(input.products)},(_,j)=>({
   position:j+1,clickoutIndex:Number(input.start)+i*Number(input.products)+j,
   variables:Object.fromEntries(variables.map(base=>[base,`${base}_${suffix}_${j+1}`]))
  }));
  return {key,selection,products,clickouts:products.map(p=>p.clickoutIndex)};
 });
 const entries=rows.flatMap(row=>row.products.flatMap(product=>variables.map(base=>({name:product.variables[base],base,position:product.position,clickout:product.clickoutIndex,key:row.key,type:/(?:^|_)img$|(?:^|_)image$/i.test(base)?'image':'text'}))));
 if(new Set(entries.map(e=>e.name)).size!==entries.length) return {errors:['These linked bases create overlapping variable names. Rename the linked bases.']};
 // Public PNG fixtures stand in for internal test-image URLs; text stays recognizable.
 const config=Object.fromEntries(entries.map(e=>[e.name,{value:e.type==='image'?`https://placehold.co/600x400/E3EAE1/1F2F22/png?text=${encodeURIComponent(e.name)}`:`test_${e.name}`}  ]));
 const summary=`Decision Tree Treatment Requirements\n\n${options.length} question${options.length>1?'s':''}, with ${options.map(o=>o.length).join(' and ')} answer options.\n${combos} possible answer combinations; ${input.products} products shown per result.\n${slots} product clickout slots, numbered ${input.start}–${Number(input.start)+slots-1}.\n${variables.length} linked elements: ${variables.join(', ')}.\n${entries.length} linked variable entries (${slots} per linked element).\n\nEach answer combination displays its own group of products.\n\nActual variable names:\n${entries.map(e=>e.name).join(', ')}`;
 const headers=[...options.map((_,i)=>`Question ${i+1} answer`),'Combination key',...variables.map(v=>`${v} variables`),'Exact clickouts (shared by linked elements)'];
 const cells=rows.map(r=>[...r.selection.map(s=>`${s.key.toUpperCase()}`),r.key,...variables.map(v=>r.products.map(p=>p.variables[v]).join(', ')),r.products.map(p=>`Position ${p.position} → clickout ${p.clickoutIndex}`).join('; ')]);
 // Presentation groups reuse the exact product-variable references used by JSON.
 const mappingHeaders=['Product position','Linked element','Expected variable','Clickout'];
 const mappingGroups=rows.map(row=>({key:row.key,label:row.selection.map(s=>`Question ${s.question}: ${s.key.toUpperCase()}`).join(' · ')+` · Key: ${row.key}`,details:row.products.flatMap(product=>variables.map(base=>[String(product.position),base,product.variables[base],String(product.clickoutIndex)]))}));
 const table=mappingGroups.map(group=>[group.label,mappingHeaders.join('\t'),...group.details.map(c=>c.join('\t'))].join('\n')).join('\n\n');
 const mdTable=(h,rs)=>`| ${h.join(' | ')} |\n| ${h.map(()=>'---').join(' | ')} |\n${rs.map(r=>`| ${r.join(' | ')} |`).join('\n')}`;
 const readme=`# Decision Tree Treatment\n\n${options.length} question(s) with ${options.map(o=>o.length).join(' × ')} options create ${combos} results. Each result displays ${input.products} products. The treatment needs ${slots} clickout slots (${input.start}–${Number(input.start)+slots-1}) and ${entries.length} linked variable entries.\n\n## Expected results\n\n${mappingGroups.map(group=>`### ${group.label}\n\n${mdTable(mappingHeaders,group.details)}`).join('\n\n')}\n\n## Variable expectations\n\n${mdTable(['Variable','Type','Result key','Clickout','Test value'],entries.map(e=>[e.name,e.type,e.key,String(e.clickout),config[e.name].value]))}`;
 return {errors:[],options,rows,entries,variables,combos,slots,config,summary,table,readme,headers,cells,mappingHeaders,mappingGroups};
}
