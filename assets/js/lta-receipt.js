var ltaBill=()=>{class i{constructor(){this["template-1"]=document.querySelector("app-lta-bill #template-1"),this["template-2"]=document.querySelector("app-lta-bill #template-2"),this.templates=document.querySelectorAll("app-lta-bill [name='templates']"),this["lta-logo"]=document.querySelectorAll("app-lta-bill [name='lta-logo']"),this["passenger-name"]=document.querySelector("app-lta-bill #passenger-name"),this["no-person"]=document.querySelector("app-lta-bill #no-person"),this.seat=document.querySelector("app-lta-bill #seat"),this["reporting-date"]=document.querySelector("app-lta-bill #reporting-date"),this["departure-time"]=document.querySelector("app-lta-bill #departure-time"),this.location=document.querySelector("app-lta-bill #location"),this.landmark=document.querySelector("app-lta-bill #landmark"),this["drop-date"]=document.querySelector("app-lta-bill #drop-date"),this["drop-time"]=document.querySelector("app-lta-bill #drop-time"),this["drop-address"]=document.querySelector("app-lta-bill #drop-address"),this["travel-type"]=document.querySelector("app-lta-bill #travel-type"),this["travel-name"]=document.querySelector("app-lta-bill #travel-name"),this["ticket-no"]=document.querySelector("app-lta-bill #ticket-no"),this["traveler-address"]=document.querySelector("app-lta-bill #traveler-address"),this["boarding-point-no"]=document.querySelector("app-lta-bill #boarding-point-no"),this["customer-care"]=document.querySelector("app-lta-bill #customer-care"),this["payment-method"]=document.querySelector("app-lta-bill #payment-method"),this.amount=document.querySelector("app-lta-bill #amount"),this.tax=document.querySelector("app-lta-bill #tax"),this["vat-none"]=document.querySelector("app-lta-bill #vat-none"),this["vat-type"]=document.querySelectorAll("app-lta-bill [name='vat-type']"),this["vat-number"]=document.querySelector("app-lta-bill #vat-number"),this.logo=document.querySelector("app-lta-bill [com-fm='logo']"),this.currency=document.querySelector("app-lta-bill [com-fm='currency']"),this["download-pdf"]=document.querySelector("app-lta-bill #download-pdf"),this["spinner-grow"]=document.querySelector("app-lta-bill .spinner-grow"),this["download-text"]=document.querySelector("app-lta-bill .download-text"),this["form-control"]=document.querySelectorAll("app-lta-bill .form-control"),this["lta-bill-modal"]=document.querySelector("app-lta-bill #lta-bill-modal"),this["lta-bill-modal-view"]=document.querySelector("app-lta-bill #lta-bill-modal-view")}}let s={},u={},m={},t=new Date,p,y,a="lta-receipt-data.js";let b=!1,v=!1;setCurrencyCall=t=>{var a,l=document.querySelector('[data-fm="select-currency"]');l.selectedIndex=t,s.currency.querySelector('[data-fm="currency-code"]').checked?m.currency.forEach(e=>{e.querySelectorAll('[data-tm="currency"]').forEach(e=>{e.innerHTML=l.options[t].value})}):(a=(a=(a=(a=l.options[t].innerHTML).split("-").pop()).split(",",1).pop()).split(" ").pop(),m.currency.forEach(e=>{e.querySelectorAll('[data-tm="currency"]').forEach(e=>{e.innerHTML=a})}))};var h=(l,e)=>{var t=s[l];let r=m[l],a,o=t.querySelector("[data-fm='upload']"),n=t.querySelector("[data-fm='url']"),c;r.forEach(e=>{a=e.querySelector(`[data-tm='${l}']`).src,e.querySelector(`[data-tm='${l}']`).attributes.url&&""!=e.querySelector(`[data-tm='${l}']`).attributes.url.value&&(n.value=e.querySelector(`[data-tm='${l}']`).attributes.url.value)}),o.addEventListener("change",e=>{var t,a=o.files[0];a&&""==n.value&&((t=new FileReader).readAsDataURL(a),t.addEventListener("load",e=>{r.forEach(t=>{c=this.result||e.srcElement.result,t.querySelectorAll(`[data-tm="${l}"]`).forEach(e=>{e.src=c,t.querySelector(`[data-tm='${l}']`).setAttribute("url",o.files[0].name)})})}))}),n.addEventListener("keyup",e=>{const t=o.files[0];r.forEach(e=>{""!=n.value?e.querySelectorAll(`[data-tm="${l}"]`).forEach(e=>{e.src=n.value,e.setAttribute("url",n.value)}):t?e.querySelectorAll(`[data-tm="${l}"]`).forEach(e=>{e.src=c}):e.querySelectorAll(`[data-tm="${l}"]`).forEach(e=>{e.src=a})})}),e&&e(!0,"Logo has been setted!")};{var e=(e,t)=>{e&&(document.querySelectorAll("app-lta-bill [data-dynamic]").forEach(e=>{e=e.attributes["data-dynamic"].value;addDynamicHTML(e,ltaBillData[e],!1)}),b=!0,r())},l=document.querySelectorAll("script");let t=!1;l.forEach(e=>{e.src.replace(/^.*[\\\/]/,"")==a&&(t=!0)}),t||((l=document.createElement("script")).src=server.jsPath+"/partialPage/"+a,l.async=!0,l.onload=()=>{e(!0,"Dynamic data loaded")},l.onerror=()=>{e(!1,"Error occurred while loading dynamic data")},document.body.appendChild(l))}var r=()=>{for(var e in m={templates:document.querySelectorAll("app-lta-bill .template-wrapper > .templates"),"modal-body":document.querySelector("app-lta-bill .modal-body"),"net-amount":document.querySelector("app-lta-bill [data-tm='net-amount']"),"taxable-amount":document.querySelector("app-lta-bill [data-tm='taxable-amount']"),"cancel-charge":document.querySelector("app-lta-bill [data-tm='cancel-charge']")},s=new i)document.querySelector("app-lta-bill p[data-error="+e+"]")&&(u[e]=document.querySelector("app-lta-bill p[data-error="+e+"]")),document.querySelector("[data-tm="+e+"]")&&"template-1"!=e&&"template-2"!=e&&"template-3"!=e&&(m[e]=document.querySelectorAll("app-lta-bill  [data-tm="+e+"]")),document.querySelector("[com-tm="+e+"]")&&"template-1"!=e&&"template-2"!=e&&"template-3"!=e&&(m[e]=document.querySelectorAll("app-lta-bill [com-tm="+e+"]")),"template-1"!=e&&"template-2"!=e||(m[e]=document.querySelector("app-lta-bill .template-wrapper > [data-tm="+e+"]"));s["form-control"].forEach(t=>{["keyup","change"].forEach(function(e){t.addEventListener(e,function(){document.querySelectorAll("[data-tm="+t.id+"]").forEach(e=>{if("amount"==t.id||"tax"==t.id){let t=s.amount.value,a=""==s.tax.value?0:parseInt(s.tax.value),e=0,l=0;e=t*(100/(100+a)),l=t-e,e=e.toFixed(2),l=l.toFixed(2),m.amount.forEach(e=>{e.innerHTML=t}),m.tax.forEach(e=>{e.innerHTML=a}),m["net-amount"].innerHTML=e,m["taxable-amount"].innerHTML=l,m["cancel-charge"].innerHTML=(t-t*(100/110)).toFixed(2)}else e.innerHTML=t.value})})})}),s["lta-logo"].forEach(e=>e.addEventListener("click",t=>{m.logo.forEach(e=>{e.querySelectorAll('[data-tm="logo"]').forEach(e=>{e.src=server.serverPath+"/assets/images/lta-bill/"+t.currentTarget.id+".png"})})})),s["vat-type"].forEach(e=>e.addEventListener("click",t=>{"vat-none"==t.currentTarget.id?(m["vat-none"].forEach(e=>{e.classList.add("d-none")}),s["vat-number"].classList.add("d-none")):(s["vat-number"].classList.remove("d-none"),m["vat-none"].forEach(e=>{e.classList.remove("d-none")}),m["vat-type"].forEach(e=>{e.innerHTML=t.target.id.slice(4).toLocaleUpperCase()+" NO: "}),m["vat-number"].forEach(e=>{e.innerHTML=s["vat-number"].value}))})),s["download-pdf"].addEventListener("click",()=>{S((e,t)=>{var a;e&&(s["spinner-grow"].style.display="inline-block",s["download-text"].innerHTML="PDF Generating...",e=p.cloneNode(!0),(a=document.createElement("div")).id="pdf-wrapper",a.setAttribute("class","pdf-wrapper"),a.appendChild(e),html2pdf().set({jsPDF:{format:"a4",orientation:"portrait"},html2canvas:{letterRendering:!0,useCORS:!0,logging:!0,scrollX:0,scrollY:0},margin:[20,20,0,20],padding:0,image:{type:"jpeg",quality:.98}}).from(a).toPdf().save("LTA Receipt "+server.pdfName).then(e=>{g()}).catch(e=>{console.log("PDF Error "+e)}))})});try{s["lta-bill-modal-view"].addEventListener("click",e=>{q()}),y=new bootstrap.Modal(s["lta-bill-modal"]),window.addEventListener("click",function(e){"modal-body"==e.target.classList[0]&&y.toggle()})}catch(e){}if(s.templates.forEach(t=>t.addEventListener("click",e=>{s.templates.forEach(e=>{e.id!=t.id&&(m[t.id].classList.remove("d-none"),p=m[t.id],m[e.id].classList.add("d-none"))})})),b&&!v){v=!0;{var t=document.querySelectorAll(".com-wrapper");let a;t.forEach(t=>{t.querySelector(".com-disable")&&t.querySelector(".com-disable").addEventListener("click",e=>{t.classList.toggle("disable"),t.attributes["com-fm"]&&document.querySelectorAll(`[com-tm='${t.attributes["com-fm"].value}']`).forEach(e=>{e.classList.toggle("d-none")})}),document.querySelector(`[com-tm='${t.attributes["com-fm"].value}']`).classList.contains("d-none")&&(t.querySelector(".com-disable").checked=!0,t.classList.add("disable")),t.querySelector(".com-close").addEventListener("click",e=>{t.classList.toggle("close"),e.currentTarget.querySelector(".bi").classList.toggle("bi-plus"),e.currentTarget.querySelector(".bi").classList.toggle("bi-plus-lg")}),t.querySelector(".com-clear")&&t.querySelector(".com-clear").addEventListener("click",e=>{a=t.attributes["com-fm"].value,1!=t.querySelector(".com-disable").checked&&(t.querySelectorAll('.com-body input[type="text"]').forEach(e=>{e.value=""}),t.querySelectorAll(".com-body textarea").forEach(e=>{elA.value=""}),t.querySelectorAll('.com-body input[type="file"]').forEach(e=>{e.value=""}),document.querySelectorAll(`[com-tm="${a}"]`).forEach(e=>{e.querySelectorAll("[data-tm]").forEach(e=>{e.src||(e.innerHTML="")})}))})})}h("logo"),(l=document.querySelector('[data-fm="select-currency"]')).addEventListener("change",()=>{setCurrencyCall(l.selectedIndex)}),s.currency.querySelectorAll('[name="currency-type"').forEach(e=>{e.addEventListener("click",()=>{setCurrencyCall(l.selectedIndex)})}),r=[],l.querySelectorAll("option").forEach((e,t)=>{e={[e.innerHTML]:t};r[t]=e}),o=document.querySelector('[data-fm="search-currency-box"]'),n=document.querySelector('[data-fm="search-currency"]'),c="",d=[],window.addEventListener("click",function(e){e.target.attributes["data-fm"]&&("search-currency-box"==e.target.attributes["data-fm"].value||"search-currency"==e.target.attributes["data-fm"].value)||o.classList.add("d-none")}),n.addEventListener("keyup",e=>{a(n.value)}),n.addEventListener("focusin",e=>{a(n.value)})}function a(e){""!=(c=e)?(0<(d=r.filter(e=>{return Object.keys(e).toString().toLowerCase().includes(c.toLowerCase())})).length&&(d.forEach((e,t,a)=>{e=`<button class="d-block" onclick="setCurrencyCall(${Object.values(e)})">${Object.keys(e)}</button>`;d[t]=e}),o.classList.remove("d-none")),d.length,0<d.length&&(o.innerHTML="",d.forEach((e,t)=>{o.innerHTML+=e}))):(o.classList.add("d-none"),d=[])}var l,r,o,n,c,d;f("template-1")},f=async e=>{dragScroller("lta-bill-template-wrapper"),p=m[e],m.templates.forEach(e=>{e.classList.add("d-none")}),p.classList.remove("d-none"),s[e].checked=!0;try{s["drop-date"].value=t.toISOString().substring(0,10),s["drop-time"].value=t.toLocaleString().substring(12,17),m["drop-date"].forEach(e=>{e.innerHTML=t.toISOString().substring(0,10)}),m["drop-time"].forEach(e=>{e.innerHTML=t.toLocaleString().substring(12,17)}),s["reporting-date"].value=t.toISOString().substring(0,10),s["departure-time"].value=t.toLocaleString().substring(12,17),m["reporting-date"].forEach(e=>{e.innerHTML=t.toISOString().substring(0,10)}),m["departure-time"].forEach(e=>{e.innerHTML=t.toLocaleString().substring(12,17)}),s["ticket-no"].value="QS7IBW5Y62JGJIIA",m["ticket-no"].forEach(e=>{e.innerHTML="QS7IBW5Y62JGJIIA"}),s["boarding-point-no"].value="080595145",m["boarding-point-no"].forEach(e=>{e.innerHTML="080595145"}),s["customer-care"].value="080792421",m["customer-care"].forEach(e=>{e.innerHTML="080792421"}),s.tax.value="0",m.tax.forEach(e=>{e.innerHTML="0"})}catch(e){}},o=(e,t,a,l)=>{return"Name"==t?""==e?(l(!1,a+" cannot be  empty!"),!1):35<e.length?(l(!1,a+" cannot be more than 35 characters!"),!1):/\d/g.test(e)?(l(!1,a+" cannot contain numbers and space!"),!1):(l(!0,a+" validated successfully!"),!0):"Empty"==t?""==e?(l(!1,a+" cannot be empty!"),!1):(l(!0,a+" validated successfully!"),!0):void 0},S=e=>{let a=!0,l=(o(s["passenger-name"].value,"Empty","Passenger details",function(e,t){e?u["passenger-name"].style.display="none":(u["passenger-name"].innerHTML=t,u["passenger-name"].style.display="block")}),o(s["no-person"].value,"Empty","Number of passenger",function(e,t){e?u["no-person"].style.display="none":(u["no-person"].innerHTML=t,u["no-person"].style.display="block")}),o(s.seat.value,"Empty","Seat number",function(e,t){e?u.seat.style.display="none":(u.seat.innerHTML=t,u.seat.style.display="block")}),o(s.location.value,"Empty","Location",function(e,t){e?u.location.style.display="none":(u.location.innerHTML=t,u.location.style.display="block")}),o(s.landmark.value,"Empty","Landmark",function(e,t){e?u.landmark.style.display="none":(u.landmark.innerHTML=t,u.landmark.style.display="block")}),o(s["drop-address"].value,"Empty","Drop Address",function(e,t){e?u["drop-address"].style.display="none":(u["drop-address"].innerHTML=t,u["drop-address"].style.display="block")}),o(s["traveler-address"].value,"Empty","Traveler Address",function(e,t){e?u["traveler-address"].style.display="none":(u["traveler-address"].innerHTML=t,u["traveler-address"].style.display="block")}),o(s["travel-name"].value,"Empty","Travel Name",function(e,t){e?u["travel-name"].style.display="none":(u["travel-name"].innerHTML=t,u["travel-name"].style.display="block")}),o(s.amount.value,"Empty","Location",function(e,t){e?u.amount.style.display="none":(u.amount.innerHTML=t,u.amount.style.display="block")}),document.getElementsByClassName("validation-message"));Object.keys(l).some(function(e){var t;if("block"==l[e].style.display)return t="ErrorAdress"==l[e].id?130:80,t=l[e].getBoundingClientRect().top+window.pageYOffset-t,window.scrollTo({top:t,behavior:"smooth"}),a=!1,l[e].previousElementSibling.focus(),!0}),a?e(!0,"Template ready"):e(!1,"Template not ready")},g=e=>{s["spinner-grow"].style.display="none",s["download-text"].innerHTML="Download"},q=e=>{m["modal-body"].innerHTML="";var t=p.cloneNode(!0);m["modal-body"].appendChild(t),document.querySelector(".modal-body .templates")}};(()=>{let e=setInterval(()=>{isSiteReady&&(console.log("hello"),clearInterval(e),ltaBill())},100)})();