let rentReceipt=()=>{class i{constructor(){this["renter-name"]=document.querySelector(v+" #renter-name"),this.rent=document.querySelector(v+" #rent"),this.address=document.querySelector(v+" #address"),this["landlord-name"]=document.querySelector(v+" #landlord-name"),this["landlord-pan"]=document.querySelector(v+" #landlord-pan"),this["pan-switch"]=document.querySelector(v+" #pan-switch"),this["date-from"]=document.querySelector(v+" #date-from"),this["date-to"]=document.querySelector(v+" #date-to"),this["revnue-stamp"]=document.querySelector(v+" #revnue-stamp"),this["receipt-month"]=document.querySelectorAll(v+" [name='receipt-month']"),this["download-pdf"]=document.querySelector(v+" #download-pdf"),this["form-control"]=document.querySelectorAll(v+" .form-control"),this["spinner-grow"]=document.querySelector(v+" .spinner-grow"),this["download-text"]=document.querySelector(v+" .download-text"),this["select-template"]=document.querySelector(v+" .select-template"),this["rentr-modal"]=document.querySelector(v+" #rentr-modal"),this["rentr-modal-view"]=document.querySelector(v+" #rentr-modal-view"),this["template-1"]=document.querySelector(v+" #template-1"),this["template-2"]=document.querySelector(v+" #template-2"),this.templates=document.querySelectorAll(v+" [name='templates']"),this.currency=document.querySelector(v+" [com-fm='currency']")}}let u={},s={},m={},h,p,y,f="template-2",t=new Date,r="rent-receipt-data.js",v="rent-receipt",S=!1,g=!1,L=!1;function d(e){return new Date(e).toLocaleString("default",{month:"short",year:"numeric"})}function q(e){return new Date(e).toLocaleString("default",{month:"long",year:"numeric"})}setCurrencyCall=t=>{var r,n=document.querySelector('[data-fm="select-currency"]');n.selectedIndex=t,u.currency.querySelector('[data-fm="currency-code"]').checked?m.currency.forEach(e=>{e.querySelectorAll('[data-tm="currency"]');e.querySelectorAll('[data-tm="currency"]').forEach(e=>{e.innerHTML=n.options[t].value})}):(r=(r=(r=(r=n.options[t].innerHTML).split("-").pop()).split(",",1).pop()).split(" ").pop(),m.currency.forEach(e=>{e.querySelectorAll('[data-tm="currency"]').forEach(e=>{e.innerHTML=r})}))};{var e=(e,t)=>{e&&(document.querySelectorAll(v+" [data-dynamic]").forEach(e=>{e=e.attributes["data-dynamic"].value;addDynamicHTML(e,rentReceiptData[e],!1)}),g=!0,a())},n=document.querySelectorAll("script");let t=!1;n.forEach(e=>{e.src.replace(/^.*[\\\/]/,"")==r&&(t=!0)}),t||((n=document.createElement("script")).src=server.jsPath+"/partialPage/"+r,n.async=!0,n.onload=()=>{e(!0,"Dynamic data loaded")},n.onerror=()=>{e(!1,"Error occurred while loading dynamic data")},document.body.appendChild(n))}var a=()=>{for(var e in m={receipts:document.querySelectorAll(v+" .receipts"),"generate-date":document.querySelectorAll(v+" .generate-date"),"current-month":document.querySelectorAll(v+" .current-month"),"receipt-number":document.querySelectorAll(v+" .receipt-number"),templates:document.querySelectorAll(v+" .template-wrapper > .templates"),"modal-body":document.querySelector(v+" .modal-body")},u=new i)document.querySelector(`${v} p[data-error="${e}"]`)&&(s[e]=document.querySelector(`${v} p[data-error="${e}"]`)),document.querySelector(`${v} [data-tm="${e}"]`)&&(m[e]=document.querySelectorAll(`${v} [data-tm="${e}"]`)),document.querySelector("[data-tm="+e+"]")&&"template-1"!=e&&"template-2"!=e&&"template-3"!=e&&(m[e]=document.querySelectorAll(`${v} [data-tm="${e}"]`)),document.querySelector("[com-tm="+e+"]")&&"template-1"!=e&&"template-2"!=e&&(m[e]=document.querySelectorAll(`${v} [com-tm="${e}"]`)),"template-1"!=e&&"template-2"!=e&&"template-3"!=e||(m[e]=document.querySelector(`${v} .template-wrapper > [data-tm="${e}"]`));if(u["form-control"].forEach(function(r){["keyup","change"].forEach(function(e){r.addEventListener(e,function(){var e=document.querySelectorAll(v+" ."+r.id),t=document.querySelectorAll("[data-tm="+r.id+"]");"date-from"==r.id||"date-to"==r.id?(e.forEach(e=>{e.innerHTML=M(r.value)}),t.forEach(e=>{e.innerHTML=M(r.value)})):(e.forEach(e=>{e.innerHTML=r.value}),t.forEach(e=>{e.innerHTML=r.value}))})})}),u["rentr-modal-view"].addEventListener("click",e=>{A()}),h=new bootstrap.Modal(u["rentr-modal"]),window.addEventListener("click",function(e){"modal-body"==e.target.classList[0]&&h.toggle()}),u.templates.forEach(t=>t.addEventListener("click",e=>{u.templates.forEach(e=>{e.id!=t.id&&(m[t.id].classList.remove("d-none"),p=m[t.id],y=t.id,m[e.id].classList.add("d-none"))})})),S=S||!0,g&&!L){L=!0;{var t=document.querySelectorAll(".com-wrapper");let r;t.forEach(t=>{t.querySelector(".com-disable")&&t.querySelector(".com-disable").addEventListener("click",e=>{t.classList.toggle("disable"),t.attributes["com-fm"]&&document.querySelectorAll(`[com-tm='${t.attributes["com-fm"].value}']`).forEach(e=>{e.classList.toggle("d-none")})});document.querySelector(`[com-tm='${t.attributes["com-fm"].value}']`).classList.contains("d-none");document.querySelector(`[com-tm='${t.attributes["com-fm"].value}']`).classList.contains("d-none")&&t.classList.add("disable"),t.querySelector(".com-close").addEventListener("click",e=>{t.classList.toggle("close")}),t.querySelector(".com-clear")&&t.querySelector(".com-clear").addEventListener("click",e=>{r=t.attributes["com-fm"].value,1!=t.querySelector(".com-disable").checked&&(t.querySelectorAll('.com-body input[type="text"]').forEach(e=>{e.value=""}),t.querySelectorAll(".com-body textarea").forEach(e=>{elA.value=""}),t.querySelectorAll('.com-body input[type="file"]').forEach(e=>{e.value=""}),document.querySelectorAll(`[com-tm="${r}"]`).forEach(e=>{e.querySelectorAll("[data-tm]").forEach(e=>{e.src||(e.innerHTML="")})}))})})}(n=document.querySelector('[data-fm="select-currency"]')).addEventListener("change",()=>{setCurrencyCall(n.selectedIndex)}),u.currency.querySelectorAll('[name="currency-type"').forEach(e=>{e.addEventListener("click",()=>{setCurrencyCall(n.selectedIndex)})}),a=[],n.querySelectorAll("option").forEach((e,t)=>{e={[e.innerHTML]:t};a[t]=e}),o=document.querySelector('[data-fm="search-currency-box"]'),c=document.querySelector('[data-fm="search-currency"]'),l="",d=[],window.addEventListener("click",function(e){e.target.attributes["data-fm"]&&("search-currency-box"==e.target.attributes["data-fm"].value||"search-currency"==e.target.attributes["data-fm"].value)||o.classList.add("d-none")}),c.addEventListener("keyup",e=>{r(c.value)}),c.addEventListener("focusin",e=>{r(c.value)}),u["revnue-stamp"].addEventListener("click",e=>{m["revnue-stamp"].forEach(e=>{e.classList.toggle("d-none")})}),u["pan-switch"].addEventListener("click",e=>{u["landlord-pan"].disabled?u["landlord-pan"].disabled=!1:u["landlord-pan"].disabled=!0,m["pan-switch"].forEach(e=>{e.classList.toggle("d-none")})}),u["download-pdf"].addEventListener("click",()=>{w()}),E(f)}function r(e){""!=(l=e)?(0<(d=a.filter(e=>{return Object.keys(e).toString().toLowerCase().includes(l.toLowerCase())})).length&&(d.forEach((e,t,r)=>{e=`<button class="d-block" onclick="setCurrencyCall(${Object.values(e)})">${Object.keys(e)}</button>`;d[t]=e}),o.classList.remove("d-none")),d.length,0<d.length&&(o.innerHTML="",d.forEach((e,t)=>{o.innerHTML+=e}))):(o.classList.add("d-none"),d=[])}var n,a,o,c,l,d},E=e=>{p=m[e],y=e,g&&(u["date-from"].value=t.toISOString().substring(0,10),u["date-to"].value=t.toISOString().substring(0,10),u[f].checked=!0,m.templates.forEach(e=>{e.classList.add("d-none")}),p.classList.remove("d-none"),u["renter-name"].value="Mark",m["renter-name"].forEach(e=>{e.innerHTML="Mark"}),u.rent.value="40000",m.rent.forEach(e=>{e.innerHTML="40000"}),u.address.value="7677 state Los Angeles",m.address.forEach(e=>{e.innerHTML="7677 state Los Angeles"}),u["landlord-name"].value="Harry",m["landlord-name"].forEach(e=>{e.innerHTML="Harry"}),m["current-month"].forEach(e=>{e.innerHTML=d(t)}),m["date-from"].forEach(e=>{e.innerHTML=M(t)}),m["date-to"].forEach(e=>{e.innerHTML=M(t)}),u["date-from"].addEventListener("change",e=>{m["current-month"].forEach(e=>{e.innerHTML=d(u["date-from"].value)})}))};function M(e){let t=new Date(e);return t=(t=t.toLocaleDateString("en-GB",{year:"numeric",month:"numeric",day:"numeric"})).replaceAll("/","-")}var b=(e,t,r)=>{Date.isLeapYear=function(e){return e%4==0&&e%100!=0||e%400==0},Date.getDaysInMonth=function(e,t){return[31,Date.isLeapYear(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]},Date.prototype.isLeapYear=function(){return Date.isLeapYear(this.getFullYear())},Date.prototype.getDaysInMonth=function(){return Date.getDaysInMonth(this.getFullYear(),this.getMonth())},Date.prototype.addMonths=function(e){var t=this.getDate();return this.setDate(1),this.setMonth(this.getMonth()+e),this.setDate(Math.min(t,this.getDaysInMonth())),this};var e=new Date(e),n=new Date(t),a=[],o=new Date(e).addMonths(r);if(l=new Date(o),o.setDate(o.getDate()-1),n<=l?!(a[0]={start:e,end:n}):(a[0]={start:e,end:o},!0))for(let e=1;a[a.length-1].end<n;e++){var c=new Date(l),o=new Date(l).addMonths(r),l=new Date(o);o.setDate(o.getDate()-1),a[e]=n<=l?{start:c,end:n}:{start:c,end:o}}var d={year:"numeric",month:"short",day:"numeric"};return a.forEach((e,t,r)=>{r[t]={start:e.start.toLocaleDateString("en-US",d),end:e.end.toLocaleDateString("en-US",d)}}),a},$=()=>{var e=document.createElement("div");e.setAttribute("class","page-add"),e.innerHTML="",document.querySelector(`${v} .${y} #receipts`).appendChild(e)},w=()=>{{var t=(e,t)=>{var r;e&&(u["spinner-grow"].style.display="inline-block",u["download-text"].innerHTML="PDF Generating...",e=p.cloneNode(!0),(r=document.createElement("div")).id="pdf-wrapper",r.setAttribute("class","pdf-wrapper"),r.appendChild(e),html2pdf().set({jsPDF:{format:"a4",orientation:"portrait"},html2canvas:{letterRendering:!0,useCORS:!0,logging:!0,scrollX:0,scrollY:0},margin:[0,-3.5,0,0],padding:0,image:{type:"jpeg",quality:.98}}).from(r).toPdf().save("Rent Receipt "+server.pdfName).then(e=>{{u["spinner-grow"].style.display="none",u["download-text"].innerHTML="Download";let e=document.querySelectorAll(`${v} .${y} .invoice`);for(;1<e.length;)e[1].parentNode.removeChild(e[1]),e=document.querySelectorAll(`${v} .${y} .invoice`);let t=document.querySelectorAll(`${v} .${y} .html2pdf__page-break`);for(;0<t.length;)t[0].parentNode.removeChild(t[0]),t=document.querySelectorAll(`${v} .${y} .html2pdf__page-break`);let r=document.querySelectorAll(`${v} .${y} .page-add`);for(;0<r.length;)r[0].parentNode.removeChild(r[0]),r=document.querySelectorAll(`${v} .${y} .page-add`)}try{isSiteReady&&saveLogs("download",{id:"19",pageName:""+server.pageName,template:""+p.attributes["data-tm"].value,metaData:""})}catch(e){}}).catch(e=>{console.log("PDF Error "+e)}))},c;let r=!0,n=document.querySelectorAll(v+" .validation-message");if(Object.keys(n).some(function(e){var t;if("block"==n[e].style.display)return t="pdfAddressError"==n[e].id?130:80,t=n[e].getBoundingClientRect().top+window.pageYOffset-t,window.scrollTo({top:t,behavior:"smooth"}),n[e].previousElementSibling.focus(),!(r=!1)}),r){l=u["date-from"].value,c=u["date-to"].value;let a=document.querySelector(v+" #monthly"),e=1;a.checked||(e=3);var l=b(l,c,e);let o=(new Date).toString();o=o.slice(4,15),l.forEach((t,e,r)=>{var n;1==r.length?(m["date-from"].forEach(e=>{e.innerHTML=M(t.start)}),m["date-to"].forEach(e=>{e.innerHTML=M(t.end)}),m["current-month"].forEach(e=>{document.querySelector(".template-2 .current-month").innerHTML=d(t.start)}),m["receipt-number"].forEach(e=>{e.innerHTML="1"}),m["generate-date"].forEach(e=>{e.innerHTML=q(o)})):0==e?(m["date-from"].forEach(e=>{e.innerHTML=M(t.start)}),m["date-to"].forEach(e=>{e.innerHTML=M(t.end)}),m["current-month"].forEach(e=>{e.innerHTML=q(t.start)}),document.querySelector(v+" .template-2 .current-month").innerHTML=d(t.start),m["receipt-number"].forEach(e=>{e.innerHTML="1"}),m["generate-date"].forEach(e=>{e.innerHTML=q(o)})):((n=document.querySelector(`${v} .${y} #invoice1`).cloneNode(!0)).id="invoice"+(e+1),document.querySelector(`${v} ${y} #receipts`).appendChild(n),document.querySelectorAll(`${v} .${y} #invoice`+(e+1)+" [data-tm='date-from']").forEach(e=>{e.innerHTML=M(t.start)}),document.querySelectorAll(`${v} .${y} #invoice`+(e+1)+" [data-tm='date-to']").forEach(e=>{e.innerHTML=M(t.end)}),document.querySelector(`${v} .${y} #invoice`+(e+1)+"  .current-month").innerHTML=q(t.start),document.querySelector(v+` .template-2 #invoice${e+1} .current-month`)&&(document.querySelector(v+` .template-2 #invoice${e+1} .current-month`).innerHTML=d(t.start)),(n=document.querySelector(`${v} .${y} #invoice`+(e+1)+"  .receipt-number"))&&(n.innerHTML=e+1),(n=document.querySelector(`${v} .${y} #invoice`+(e+1)+"  .generate-date"))&&(n.innerHTML=q(o)),(e+1)%3==0&&0!=e&&($(),(n=document.createElement("div")).setAttribute("class","html2pdf__page-break"),document.querySelector(`${v} .${y} #receipts`).appendChild(n))),a.checked||m.rent.forEach(e=>{var t=u.rent.value;""!=t&&parseInt(t),0!=t&&(e.innerHTML=t*=3)}),(e+1)%3!=0&&e+1==r.length&&$()}),t(!0,"validation done.")}else t(!1,"validation not done.")}},A=e=>{m["modal-body"].innerHTML="";var t=p.cloneNode(!0);m["modal-body"].appendChild(t)}};rentReceipt();