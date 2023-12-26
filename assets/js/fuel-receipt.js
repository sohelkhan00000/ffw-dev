var fuelBills=()=>{class r{constructor(){this["template-1"]=document.querySelector("app-fuel-bill-main #template-1"),this["template-2"]=document.querySelector("app-fuel-bill-main #template-2"),this["template-3"]=document.querySelector("app-fuel-bill-main #template-3"),this.templates=document.querySelectorAll("app-fuel-bill-main [name='templates']"),this["fs-logo"]=document.querySelectorAll("app-fuel-bill-main [name='fs-logo']"),this["download-fuel-bills"]=document.querySelector("app-fuel-bill-main #download-fuel-bills"),this["form-control"]=document.querySelectorAll("app-fuel-bill-main .form-control"),this["fs-date"]=document.querySelector("app-fuel-bill-main #fs-date"),this["fs-time"]=document.querySelector("app-fuel-bill-main #fs-time"),this["vat-none"]=document.querySelector("app-fuel-bill-main #vat-none"),this["vat-type"]=document.querySelectorAll("app-fuel-bill-main [name='vat-type']"),this["vat-number"]=document.querySelector("app-fuel-bill-main #vat-number"),this["fs-station-name"]=document.querySelector("app-fuel-bill-main #fs-station-name"),this["fs-address"]=document.querySelector("app-fuel-bill-main #fs-address"),this["fs-fuel-rate"]=document.querySelector("app-fuel-bill-main #fs-fuel-rate"),this["fs-amount"]=document.querySelector("app-fuel-bill-main #fs-amount"),this["u-name"]=document.querySelector("app-fuel-bill-main #u-name"),this["u-vechicle-number"]=document.querySelector("app-fuel-bill-main #u-vechicle-number"),this["u-vehicle-type"]=document.querySelector("app-fuel-bill-main #u-vehicle-type"),this["u-payment-type"]=document.querySelector("app-fuel-bill-main #u-payment-type"),this["fs-receipt-number"]=document.querySelector("app-fuel-bill-main #fs-receipt-number"),this["spinner-grow"]=document.querySelector("app-fuel-bill-main .spinner-grow"),this["download-text"]=document.querySelector("app-fuel-bill-main .download-text"),this["select-template"]=document.querySelector("app-fuel-bill-main .select-template"),this["bill-container"]=document.querySelectorAll("app-fuel-bill-main .bill-container")}}let n={},o={},i={},c=new Date,s;var a=e=>{for(var t in i={"tele-number":document.querySelectorAll(".tele-number"),"vat-type":document.querySelectorAll(".vat-type"),templates:document.querySelectorAll(".templates")},n=new r)document.querySelector("p[data-error="+t+"]")&&(o[t]=document.querySelector("p[data-error="+t+"]")),document.querySelector("[data-tm="+t+"]")&&"template-1"!=t&&"template-2"!=t&&"template-3"!=t&&(i[t]=document.querySelectorAll("[data-tm="+t+"]")),"template-1"!=t&&"template-2"!=t&&"template-3"!=t||(i[t]=document.querySelector("[data-tm="+t+"]"));s=i[e],i.templates.forEach(e=>{e.classList.add("d-none")}),s.classList.remove("d-none"),n[e].checked=!0,n["fs-station-name"].value="Bharat Petroleum",i["fs-station-name"].forEach(e=>{e.innerHTML="Bharat Petroleum"}),n["fs-date"].value=c.toISOString().substring(0,10),n["fs-time"].value=c.toLocaleString().substring(12,17),i["fs-date"].forEach(e=>{e.innerHTML=c.toISOString().substring(0,10)}),i["fs-time"].forEach(e=>{e.innerHTML=c.toLocaleString().substring(12,17)});let l=Math.floor(1e3+9e3*Math.random()),a=(i["fs-receipt-number"].forEach(e=>{e.innerHTML=l}),n["fs-receipt-number"].value=l,Math.floor(1e6+9e6*Math.random()));i["tele-number"].forEach(e=>{e.innerHTML=a}),i["u-vehicle-type"].forEach(e=>{e.innerHTML=n["u-vehicle-type"].options[n["u-vehicle-type"].selectedIndex].value}),i["u-payment-type"].forEach(e=>{e.innerHTML=n["u-payment-type"].options[n["u-payment-type"].selectedIndex].value})},t=(a("template-2"),n["fs-logo"].forEach(e=>e.addEventListener("click",t=>{const l=t.currentTarget.id.slice(10).replace("-"," ").split(" ");for(let e=0;e<l.length;e++)l[e]=l[e][0].toUpperCase()+l[e].substr(1);n["fs-station-name"].value=l.join(" "),i["fs-station-name"].forEach(e=>{e.innerHTML=l.join(" ")}),i["fs-logo"].forEach(e=>{e.src=server.serverPath+"/assets/images/bill/"+t.currentTarget.id+".webp"})})),n["vat-type"].forEach(e=>e.addEventListener("click",t=>{"vat-none"==t.currentTarget.id?(i["vat-none"].forEach(e=>{e.classList.add("d-none")}),n["vat-number"].classList.add("d-none")):(n["vat-number"].classList.remove("d-none"),i["vat-none"].forEach(e=>{e.classList.remove("d-none")}),i["vat-type"].forEach(e=>{e.innerHTML=t.target.id.slice(4).toLocaleUpperCase()+" NO: "}),i["vat-number"].forEach(e=>{e.innerHTML=n["vat-number"].value}))})),n["form-control"].forEach(function(t){["keyup","change"].forEach(function(e){t.addEventListener(e,function(){document.querySelectorAll("."+t.id).forEach(e=>{e.innerHTML=t.value})})})}),n.templates.forEach(l=>l.addEventListener("click",e=>{t((e,t)=>{e?(a(l.id),n["form-control"].forEach(t=>{document.querySelectorAll("."+t.id).forEach(e=>{e.innerHTML=t.value})})):console.log(t)}),n.templates.forEach(e=>{e.id!=l.id&&(s=i[l.id],i[e.id].classList.add("d-none"))}),i[l.id].classList.remove("d-none")})),e=>{var t=document.querySelectorAll("script");let l=!1;t.forEach(e=>{"fuel-bill-data.js"==e.src.replace(/^.*[\\\/]/,"")&&(l=!0)}),l||((t=document.createElement("script")).src=server.serverPath+"/assets/js/partialPage/fuel-bill-data.js",t.async=!0,t.onload=()=>{i["template-1"].innerHTML=template.code,i["template-3"].innerHTML=template["template-3"],e(!0,"Script loaded successfuly")},t.onerror=()=>{e(!1,"Error occurred while loading script")},document.body.appendChild(t))});n["download-fuel-bills"].addEventListener("click",()=>{{var e=(e,t)=>{var l;e&&(n["spinner-grow"].style.display="inline-block",n["download-text"].innerHTML="PDF Generating...",e=s.cloneNode(!0),(l=document.createElement("div")).id="pdf-wrapper",l.setAttribute("class","pdf-wrapper"),l.appendChild(e),html2pdf().set({jsPDF:{format:"a4",orientation:"portrait"},html2canvas:{letterRendering:!0,useCORS:!0,logging:!0,scrollX:0,scrollY:0},margin:0,image:{type:"jpeg",quality:1.1}}).from(l).toPdf().save("Fuel Bill "+server.pdfName).then(e=>{n["spinner-grow"].style.display="none",n["download-text"].innerHTML="Download"}).catch(e=>{console.log("PDF Error "+e)}))};let l=!0,a=document.getElementsByClassName("validation-message");Object.keys(a).some(function(e){var t;if("block"==a[e].style.display)return t="ErrorAdress"==a[e].id?130:80,t=a[e].getBoundingClientRect().top+window.pageYOffset-t,window.scrollTo({top:t,behavior:"smooth"}),l=!1,a[e].previousElementSibling.focus(),!0}),l?e(!0,"Template ready"):e(!1,"Template not ready")}})};