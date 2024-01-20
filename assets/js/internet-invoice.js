function internetInvoice(){class r{constructor(){let t={"ii-modal-view":"#ii-modal-view","ii-modal":"#ii-modal","download-pdf":"#download-pdf","total-amount":"#total-amount","c-address":"#c-address","c-name":"#c-name","ii-date":"#ii-date","ac-number":"#ac-number","i-description":"#i-description","provider-address":"#provider-address","provider-name":"#provider-name","template-3":"#template-3","template-2":"#template-2","template-1":"#template-1",logo:"[com-fm='logo']",tax:"[com-fm='tax']","plan-speed":"[aria-label='plan-speed']","plan-package":"[aria-label='plan-package']","tarrif-plan":"[aria-label='tarrif-plan']","payment-method":"[aria-label='payment-method']",currency:"[com-fm='currency']","description-wrap":".description-wrap","spinner-grow":".spinner-grow","download-text":".download-text"},a={templates:"[name='templates']","ii-logo":"[name='ii-logo']","form-control":".form-control","form-select":".form-select"};Object.keys(t).forEach(e=>{this[e]=document.querySelector(n+" "+t[e])}),Object.keys(a).forEach(e=>{this[e]=document.querySelectorAll(n+" "+a[e])})}}let d={},l={},i={},a=new Date,o,c="template-2",n="app-airtel",s,u="internet-invoice-data.js";let m=!1,p=!1,y=!1;var f=e=>{let t=new Date(e);return t=(t=t.toLocaleDateString("en-GB",{year:"numeric",month:"numeric",day:"numeric"})).replaceAll("/","-")},v=e=>{var t=document.querySelector('[data-fm="select-currency"]'),a=(t.addEventListener("change",()=>{setCurrencyCall(t.selectedIndex)}),d.currency.querySelectorAll('[name="currency-type"').forEach(e=>{e.addEventListener("click",()=>{setCurrencyCall(t.selectedIndex)})}),[]),r=(t.querySelectorAll("option").forEach((e,t)=>{e={[e.innerHTML]:t};a[t]=e}),document.querySelector('[data-fm="search-currency-box"]')),l=document.querySelector('[data-fm="search-currency"]'),o="",c=[];function n(e){""!=(o=e)?(0<(c=a.filter(e=>{return Object.keys(e).toString().toLowerCase().includes(o.toLowerCase())})).length&&(c.forEach((e,t,a)=>{e=`<button class="d-block" onclick="setCurrencyCall(${Object.values(e)})">${Object.keys(e)}</button>`;c[t]=e}),r.classList.remove("d-none")),c.length,0<c.length&&(r.innerHTML="",c.forEach((e,t)=>{r.innerHTML+=e}))):(r.classList.add("d-none"),c=[])}window.addEventListener("click",function(e){e.target.attributes["data-fm"]&&("search-currency-box"==e.target.attributes["data-fm"].value||"search-currency"==e.target.attributes["data-fm"].value)||r.classList.add("d-none")}),l.addEventListener("keyup",e=>{n(l.value)}),l.addEventListener("focusin",e=>{n(l.value)})},g=(setCurrencyCall=t=>{var a,r=document.querySelector('[data-fm="select-currency"]');r.selectedIndex=t,d.currency.querySelector('[data-fm="currency-code"]').checked?i.currency.forEach(e=>{e.querySelectorAll('[data-tm="currency"]').forEach(e=>{e.innerHTML=r.options[t].value})}):(a=(a=(a=(a=r.options[t].innerHTML).split("-").pop()).split(",",1).pop()).split(" ").pop(),i.currency.forEach(e=>{e.querySelectorAll('[data-tm="currency"]').forEach(e=>{e.innerHTML=a})}))},e=>{let t=document.querySelector("#total-amount").value;var a=document.querySelector('[data-fm="field-value-cgst"]'),r=document.querySelector('[data-fm="field-value-sgst"]'),l=document.querySelector('[data-fm="field-value-tax"]').value,o=l=""==l?0:parseInt(l);a.value=l/2,r.value=l/2;let c=t*(100/(100+o));a=t-c;sgst=cgst=a/2,cgst=cgst.toFixed(2),sgst=sgst.toFixed(2),document.querySelector('[data-fm="field-value-cgstinr"]').value=cgst,document.querySelector('[data-fm="field-value-sgstinr"]').value=sgst,i["taxable-amount"].forEach(e=>{e.innerHTML=c.toFixed(2)}),i["gst-amount"].forEach(e=>{e.innerHTML=cgst}),i["sgst-amount"].forEach(e=>{e.innerHTML=sgst}),document.querySelectorAll('[data-tm="total-amount"]').forEach(e=>{e.innerHTML=t})}),S=e=>{var t=document.querySelectorAll(".com-wrapper");let a;t.forEach(t=>{t.querySelector(".com-disable")&&t.querySelector(".com-disable").addEventListener("click",e=>{t.classList.toggle("disable"),t.attributes["com-fm"]&&document.querySelectorAll(`[com-tm='${t.attributes["com-fm"].value}']`).forEach(e=>{e.classList.toggle("d-none")})}),document.querySelector(`[com-tm='${t.attributes["com-fm"].value}']`).classList.contains("d-none")&&(t.querySelector(".com-disable").checked=!0,t.classList.add("disable")),t.querySelector(".com-close").addEventListener("click",e=>{t.classList.toggle("close"),e.currentTarget.querySelector(".bi").classList.toggle("bi-plus"),e.currentTarget.querySelector(".bi").classList.toggle("bi-plus-lg")}),t.querySelector(".com-clear")&&t.querySelector(".com-clear").addEventListener("click",e=>{a=t.attributes["com-fm"].value,1!=t.querySelector(".com-disable").checked&&(t.querySelectorAll('.com-body input[type="text"]').forEach(e=>{e.value=""}),t.querySelectorAll(".com-body textarea").forEach(e=>{elA.value=""}),t.querySelectorAll('.com-body input[type="file"]').forEach(e=>{e.value=""}),document.querySelectorAll(`[com-tm="${a}"]`).forEach(e=>{e.querySelectorAll("[data-tm]").forEach(e=>{e.src||(e.innerHTML="")})}))})})},q=(r,e)=>{var t=d[r];let l=i[r],a,o=t.querySelector("[data-fm='upload']"),c=t.querySelector("[data-fm='url']"),n;l.forEach(e=>{a=e.querySelector(`[data-tm='${r}']`).src,e.querySelector(`[data-tm='${r}']`).attributes.url&&""!=e.querySelector(`[data-tm='${r}']`).attributes.url.value&&(c.value=e.querySelector(`[data-tm='${r}']`).attributes.url.value)}),o.addEventListener("change",e=>{var t,a=o.files[0];a&&""==c.value&&((t=new FileReader).readAsDataURL(a),t.addEventListener("load",e=>{l.forEach(t=>{n=this.result||e.srcElement.result,t.querySelectorAll(`[data-tm="${r}"]`).forEach(e=>{e.src=n,t.querySelector(`[data-tm='${r}']`).setAttribute("url",o.files[0].name)})})}))}),c.addEventListener("keyup",e=>{const t=o.files[0];l.forEach(e=>{""!=c.value?e.querySelectorAll(`[data-tm="${r}"]`).forEach(e=>{e.src=c.value,e.setAttribute("url",c.value)}):t?e.querySelectorAll(`[data-tm="${r}"]`).forEach(e=>{e.src=n}):e.querySelectorAll(`[data-tm="${r}"]`).forEach(e=>{e.src=a})})}),e&&e(!0,"Logo has been setted!")},h=e=>{let a=d.tax,r=i.tax;a.querySelector('[data-fm="field-name-cgst"]').value=r[0].querySelector('[data-tm="field-name-cgst"]').innerText,a.querySelector('[data-fm="field-value-cgst"]').value=r[0].querySelector('[data-tm="field-value-cgst"]').innerText,a.querySelector('[data-fm="field-name-cgstinr"]').value=r[0].querySelector('[data-tm="field-name-cgstinr"]').innerText,a.querySelector('[data-fm="field-value-cgstinr"]').value=r[0].querySelector('[data-tm="gst-amount"]').innerHTML,a.querySelector('[data-fm="field-name-sgst"]').value=r[0].querySelector('[data-tm="field-name-sgst"]').innerText,a.querySelector('[data-fm="field-value-sgst"]').value=r[0].querySelector('[data-tm="field-value-sgst"]').innerText,a.querySelector('[data-fm="field-name-sgstinr"]').value=r[0].querySelector('[data-tm="field-name-sgstinr"]').innerText,a.querySelector('[data-fm="field-value-sgstinr"]').value=r[0].querySelector('[data-tm="sgst-amount"]').innerHTML,a.querySelectorAll("[data-fm]").forEach(t=>{["keyup","change"].forEach(e=>{t.addEventListener(e,e=>{"field-value-tax"==t.attributes["data-fm"].value&&(g(),r[0].querySelector('[data-tm="field-value-cgst"]').innerText=a.querySelector('[data-fm="field-value-cgst"]').value,r[0].querySelector('[data-tm="field-value-sgst"]').innerText=a.querySelector('[data-fm="field-value-sgst"]').value)})})})},E=e=>{let a=!0,r=document.getElementsByClassName("validation-message");Object.keys(r).some(function(e){var t;if("block"==r[e].style.display)return t="ErrorAdress"==r[e].id?130:80,t=r[e].getBoundingClientRect().top+window.pageYOffset-t,window.scrollTo({top:t,behavior:"smooth"}),a=!1,r[e].previousElementSibling.focus(),!0}),a?e(!0,"Template ready"):e(!1,"Template not ready")},L=e=>{d["spinner-grow"].style.display="none",d["download-text"].innerHTML="Download"},b=e=>{i["modal-body"].innerHTML="";var t=o.cloneNode(!0);i["modal-body"].appendChild(t)},w=async e=>{o=i[e],i.templates.forEach(e=>{e.classList.add("d-none")}),o.classList.remove("d-none"),d[e].checked=!0,d["ii-date"].value=a.toISOString().substring(0,10),i["ii-date"].forEach(e=>{e.innerHTML=f(d["ii-date"].value)});var t="IN"+Math.floor(9e3*Math.random()+1e3);i["receipt-number"].forEach(e=>{e.innerHTML=t})};{var e=(e,t)=>{if(e){for(var a in document.querySelectorAll(n+" [data-dynamic]").forEach(e=>{e=e.attributes["data-dynamic"].value;addDynamicHTML(e,internetInvoiceData[e],!1)}),p=!0,m=!0,i={templates:document.querySelectorAll("app-airtel .template-wrapper > .templates"),"modal-body":document.querySelector("app-airtel .modal-body"),"receipt-number":document.querySelectorAll('app-airtel [data-tm="receipt-number"]'),"gst-amount":document.querySelectorAll("app-airtel [data-tm='gst-amount']"),"sgst-amount":document.querySelectorAll("app-airtel [data-tm='sgst-amount']"),"taxable-amount":document.querySelectorAll("app-airtel [data-tm='taxable-amount']")},d=new r)document.querySelector("app-airtel p[data-error="+a+"]")&&(l[a]=document.querySelector("app-airtel p[data-error="+a+"]")),document.querySelector("[data-tm="+a+"]")&&"template-1"!=a&&"template-2"!=a&&"template-3"!=a&&(i[a]=document.querySelectorAll("app-airtel  [data-tm="+a+"]")),document.querySelector("[com-tm="+a+"]")&&"template-1"!=a&&"template-2"!=a&&"template-3"!=a&&(i[a]=document.querySelectorAll("app-airtel [com-tm="+a+"]")),"template-1"!=a&&"template-2"!=a&&"template-3"!=a||(i[a]=document.querySelector("app-airtel .template-wrapper > [data-tm="+a+"]"));d["form-control"].forEach(t=>{["keyup","change"].forEach(function(e){t.addEventListener(e,function(){document.querySelectorAll("[data-tm="+t.id+"]").forEach(e=>{"total-amount"==t.id?g():"ii-date"==t.id?e.innerHTML=f(d["ii-date"].value):e.innerHTML=t.value})})})}),d["form-select"].forEach(t=>{["change"].forEach(function(e){t.addEventListener(e,function(){document.querySelectorAll("[data-tm="+t.id+"]").forEach(e=>{e.innerHTML=t.value})})})}),d["ii-logo"].forEach(e=>e.addEventListener("click",t=>{i.logo.forEach(e=>{e.querySelectorAll('[data-tm="logo"]').forEach(e=>{e.src=server.serverPath+"/assets/images/internet-invoice/"+t.currentTarget.id+".png"})})})),d["ii-modal-view"].addEventListener("click",e=>{b()}),s=new bootstrap.Modal(d["ii-modal"]),window.addEventListener("click",function(e){"modal-body"==e.target.classList[0]&&s.toggle()}),d.templates.forEach(t=>t.addEventListener("click",e=>{d.templates.forEach(e=>{e.id!=t.id&&(i[t.id].classList.remove("d-none"),o=i[t.id],i[e.id].classList.add("d-none")),"template-2"==t.id?d["description-wrap"].classList.remove("d-none"):d["description-wrap"].classList.add("d-none"),g()})})),p&&!y&&(y=!0,dragScroller("ii-template-wrapper"),d["download-pdf"].addEventListener("click",()=>{E((e,t)=>{e&&(d["spinner-grow"].style.display="inline-block",d["download-text"].innerHTML="PDF Generating...",e=o.cloneNode(!0),html2pdf().set({jsPDF:{format:"a4",orientation:"portrait"},html2canvas:{letterRendering:!0,useCORS:!0,logging:!0,scrollX:0,scrollY:0},margin:[0,20,0,20],padding:0,image:{type:"jpeg",quality:.98}}).from(e).toPdf().save("Internet Invoice "+server.pdfName).then(e=>{L(),saveLogs("download",{id:"24",pageName:""+server.pageName,template:""+o.attributes["data-tm"].value,metaData:""})}).catch(e=>{saveLogs("error",{id:"24",pageName:""+server.pageName,eventName:"PDF Download",msg:"On PDF download button clicked :   "+e,metaData:'{"server" : '+server.serverPath})}))})}),S(),q("logo"),v(),h()),w(c)}else saveLogs("error",{id:"23",pageName:""+server.pageName,eventName:"partial load",msg:""+t,metaData:'{"server" : '+server.serverPath})},A=document.querySelectorAll("script");let t=!1;A.forEach(e=>{e.src.replace(/^.*[\\\/]/,"")==""+u&&(t=!0)}),t||((A=document.createElement("script")).src=server.jsPath+"/partialPage/"+u,A.async=!0,A.onload=()=>{e(!0,"Dynamic data loaded")},A.onerror=()=>{e(!1,"Error occurred while loading dynamic data")},document.body.appendChild(A))}}internetInvoice();