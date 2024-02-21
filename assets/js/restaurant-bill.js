var restaurantBill=()=>{class o{constructor(){this["template-1"]=document.querySelector("restaurant-bill #template-1"),this["template-2"]=document.querySelector("restaurant-bill #template-2"),this.templates=document.querySelectorAll("restaurant-bill [name='templates']"),this["rest-name"]=document.querySelector("restaurant-bill [data-fm='rest-name']"),this["rest-add"]=document.querySelector("restaurant-bill [data-fm='rest-add']"),this["table-no"]=document.querySelector("restaurant-bill [data-fm='table-no']"),this["invoice-no"]=document.querySelector("restaurant-bill [data-fm='invoice-no']"),this["bill-date"]=document.querySelector("restaurant-bill [data-fm='bill-date']"),this["bill-time"]=document.querySelector("restaurant-bill [data-fm='bill-time']"),this["rest-items"]=document.querySelector("restaurant-bill [com-fm='rest-items']"),this["payment-method"]=document.querySelector("restaurant-bill [data-fm='payment-method']"),this.gstno=document.querySelector("restaurant-bill [com-fm='gstno']"),this["cus-number"]=document.querySelector("restaurant-bill [data-fm='cus-number']"),this.tax=document.querySelector("restaurant-bill [com-fm='tax']"),this.currency=document.querySelector("restaurant-bill [com-fm='currency']"),this["rest-logo"]=document.querySelector("restaurant-bill [com-fm='rest-logo'"),this["cus-field"]=document.querySelector("restaurant-bill [com-fm='cus-field'"),this["download-pdf"]=document.querySelector("restaurant-bill #download-pdf"),this["spinner-grow"]=document.querySelector("restaurant-bill .spinner-grow"),this["download-text"]=document.querySelector("restaurant-bill .download-text"),this["data-fm"]=document.querySelectorAll("restaurant-bill [data-fm]"),this["template-view-modal"]=document.querySelector("restaurant-bill #template-view-modal"),this["rest-view"]=document.querySelector("restaurant-bill #rest-view")}}let d={},r={},s={},l=new Date,n,i="template-2",u,a="restaurant-bill-data.js";let c=!1,m=!1,f=!1;var y=e=>{if(document.querySelector(".loader-wrap").classList.add("d-none"),d.templates.forEach(t=>t.addEventListener("click",e=>{d.templates.forEach(e=>{e.id!=t.id&&(s[t.id].classList.remove("d-none"),n=s[t.id],s[e.id].classList.add("d-none"))}),"template-1"==e.currentTarget.id?d["rest-logo"].classList.add("d-none"):d["rest-logo"].classList.remove("d-none")})),c=c||!0,m&&!f){f=!0,(d=new o)["data-fm"].forEach(t=>{["keyup","change"].forEach(function(e){t.addEventListener(e,function(){var e;""!=t.id&&(e=document.querySelectorAll(`[data-tm='${t.attributes["data-fm"].value}']`),"bill-date"==t.attributes["data-fm"].value?e.forEach(e=>{e.innerHTML=p(t.value)}):"bill-tax"==t.attributes["data-fm"].value||"tax-cgst-tax"==t.attributes["data-fm"].value||"tax-sgst-tax"==t.attributes["data-fm"].value?h():"item-name"!=t.attributes["data-fm"].value&&"item-price"!=t.attributes["data-fm"].value&&"item-qt"!=t.attributes["data-fm"].value&&"tax-cgst-check"!=t.attributes["data-fm"].value&&"tax-sgst-check"!=t.attributes["data-fm"].value&&"gstno-gst-check"!=t.attributes["data-fm"].value&&"gstno-fss-check"!=t.attributes["data-fm"].value&&e.forEach(e=>{e.innerHTML=t.value}))})})}),d.tax&&(d.tax.querySelector('[data-fm="remove-tax"]').addEventListener("click",e=>{1==e.currentTarget.checked?(document.querySelectorAll(".tax-r").forEach(e=>{e.classList.add("d-none")}),document.querySelectorAll(".tax-n").forEach(e=>{e.innerHTML="Total: "})):(document.querySelectorAll(".tax-r").forEach(e=>{e.classList.remove("d-none")}),document.querySelectorAll(".tax-n").forEach(e=>{e.innerHTML="Sub Total: "}))}),d.tax.querySelector('[data-fm="tax-cgst-check"]').addEventListener("click",e=>{var t=document.querySelectorAll('[data-tm="tax-cgst-check"]');1!=d.tax.querySelector('[data-fm="remove-tax"]').checked&&(1==e.currentTarget.checked?t.forEach(e=>{e.classList.remove("d-none")}):t.forEach(e=>{e.classList.add("d-none")}),h())}),d.tax.querySelector('[data-fm="tax-sgst-check"]').addEventListener("click",e=>{var t=document.querySelectorAll('[data-tm="tax-sgst-check"]');1!=d.tax.querySelector('[data-fm="remove-tax"]').checked&&(1==e.currentTarget.checked?t.forEach(e=>{e.classList.remove("d-none")}):t.forEach(e=>{e.classList.add("d-none")}),h())}),d.gstno.querySelector('[data-fm="gstno-remove"]').addEventListener("click",e=>{var t=s.gstno;1==e.currentTarget.checked?t.forEach(e=>{e.classList.add("d-none")}):t.forEach(e=>{e.classList.remove("d-none")})}),d.gstno.querySelector('[data-fm="gstno-gst-check"]').addEventListener("click",e=>{var t=document.querySelectorAll('[data-tm="gstno-gst-check"]');1==e.currentTarget.checked?t.forEach(e=>{e.classList.remove("d-none")}):t.forEach(e=>{e.classList.add("d-none")})}),d.gstno.querySelector('[data-fm="gstno-fss-check"]').addEventListener("click",e=>{var t=document.querySelectorAll('[data-tm="gstno-fss-check"]');1==e.currentTarget.checked?t.forEach(e=>{e.classList.remove("d-none")}):t.forEach(e=>{e.classList.add("d-none")})}));let r=d["rest-logo"].querySelector("#rest-logo"),l=d["rest-logo"].querySelector("#rest-logo-url");var a=d["rest-logo"].querySelector("[data-x='rest-logo']"),t=d["rest-logo"].querySelector("#remove-logo");let c;if(r.addEventListener("change",e=>{var t,a=r.files[0];a&&""==l.value&&((t=new FileReader).readAsDataURL(a),t.addEventListener("load",t=>{s["rest-logo"].forEach(e=>{c=this.result||t.srcElement.result,e.src=c})}))}),l.addEventListener("keyup",e=>{const t=r.files[0];s["rest-logo"].forEach(e=>{""!=l.value?e.src=l.value:t?e.src=c:e.src=server.imagePath+"/restaurant-bill/restaurant-logo.png"})}),a.addEventListener("click",e=>{""==l.value&&s["rest-logo"].forEach(e=>{e.src=server.imagePath+"/restaurant-bill/restaurant-logo.png"}),r.value=""}),t.addEventListener("click",e=>{1==e.currentTarget.checked?s["rest-logo"].forEach(e=>{e.classList.add("d-none")}):s["rest-logo"].forEach(e=>{e.classList.remove("d-none")})}),d["cus-field"].querySelector('[data-fm="cus-field-remove"]').addEventListener("click",e=>{1==e.currentTarget.checked?s["cus-field"].forEach(e=>{e.classList.add("d-none")}):s["cus-field"].forEach(e=>{e.classList.remove("d-none")})}),d.currency){let a=d.currency.querySelector('[data-fm="currency-value"]'),t=d.currency.querySelector('[data-fm="currency-remove"]');t.addEventListener("click",e=>{var t=document.querySelectorAll(".c-curr");1==e.currentTarget.checked?t.forEach(e=>{e.innerHTML=""}):t.forEach(e=>{let t=a.options[a.selectedIndex].text;t=t.split("-")[1],e.innerHTML=t})}),a.addEventListener("change",a=>{var e=document.querySelectorAll(".c-curr");1==t.checked?e.forEach(e=>{e.innerHTML=""}):e.forEach(e=>{let t=a.currentTarget.options[a.currentTarget.selectedIndex].text;t=t.split("-")[1],e.innerHTML=t})})}{a=(e,t)=>{};let e=d["rest-items"].querySelector("#add-item"),c=d["rest-items"].querySelector(".items-wrap"),o=1,t=(e.addEventListener("click",e=>{o++;let t=d["rest-items"].querySelector(".items-wrap > .item-1");let r=t.cloneNode(true);r.classList.remove("item-1");r.classList.add(`item-${o}`);r.querySelectorAll("[data-fm]").forEach(e=>{e.value=""});c.appendChild(r);s["rest-items"].forEach((e,t)=>{let a=e.querySelector(".item-1");let r=s["rest-items"][t];let l=a.cloneNode(true);l.classList.remove("item-1");l.classList.add(`item-${o}`);l.querySelectorAll("[data-tm]").forEach(e=>{e.innerHTML=""});r.appendChild(l)});let a=r.querySelector(`.item-remove`);a.addEventListener("click",e=>{var t=document.querySelector(`[com-fm="rest-items"] .items-wrap .${r.className}`);t.parentNode.removeChild(t);var a=document.querySelectorAll(`[com-tm="rest-items"] .${r.className}`);a.forEach(e=>{e.parentNode.removeChild(e)});h()});let l=document.querySelectorAll(`[com-fm="rest-items"] .items-wrap .${r.className} [data-fm]`);l.forEach(t=>{["change","keyup"].forEach(function(e){t.addEventListener(e,function(){let e=document.querySelectorAll(`[com-tm="rest-items"]  .${r.className} [data-tm="${t.attributes["data-fm"].value}"]`);if(t.attributes["data-fm"].value=="item-price"||t.attributes["data-fm"].value=="item-qt")h(r.className);e.forEach(e=>{if(t.attributes["data-fm"].value=="item-price")e.innerHTML=parseFloat(t.value).toFixed(2);else e.innerHTML=t.value})})})})}),document.querySelectorAll('[com-fm="rest-items"] .items-wrap .item-1 [data-fm]'));t.forEach(t=>{["change","keyup"].forEach(function(e){t.addEventListener(e,function(){let e=document.querySelectorAll(`[com-tm="rest-items"]  .item-1 [data-tm="${t.attributes["data-fm"].value}"]`);if(t.attributes["data-fm"].value=="item-price"||t.attributes["data-fm"].value=="item-qt")h("item-1");e.forEach(e=>{if(t.attributes["data-fm"].value=="item-price")e.innerHTML=parseFloat(t.value).toFixed(2);else e.innerHTML=t.value})})})}),a(true,"items are ready")}d["template-view-modal"].addEventListener("click",e=>{{s["modal-body"].innerHTML="";var t=n.cloneNode(!0);s["modal-body"].appendChild(t)}}),u=new bootstrap.Modal(d["rest-view"]),window.addEventListener("click",function(e){"modal-body"==e.target.classList[0]&&u.toggle()})}e&&e(!0,"Bind function called")},v=async(e,t)=>{for(var a in dragScroller("rest-tm-wrapper"),s={templates:document.querySelectorAll("restaurant-bill .template-wrapper > .templates"),"modal-body":document.querySelector("restaurant-bill .modal-body")},d=new o)document.querySelector("restaurant-bill p[data-error="+a+"]")&&(r[a]=document.querySelector("restaurant-bill p[data-error="+a+"]")),document.querySelector("[data-tm="+a+"]")&&"template-1"!=a&&"template-2"!=a&&(s[a]=document.querySelectorAll("restaurant-bill  [data-tm="+a+"]")),document.querySelector("[com-tm="+a+"]")&&"template-1"!=a&&"template-2"!=a&&(s[a]=document.querySelectorAll("restaurant-bill  [com-tm="+a+"]")),"template-1"!=a&&"template-2"!=a||(s[a]=document.querySelector("restaurant-bill .template-wrapper > [data-tm="+a+"]"));n=s[e],s.templates.forEach(e=>{e.classList.add("d-none")}),n.classList.remove("d-none"),d[e].checked=!0,d["rest-name"].value="WEST HOLLYWOOD",d["rest-add"].value="7677 state Los Angeles",d["table-no"].value="45",d["invoice-no"].value="3574",document.querySelectorAll('[com-fm="rest-items"] .items-wrap .item-1 [data-fm]').forEach(e=>{"item-price"!=e.attributes["data-fm"].value?e.value=document.querySelector(`[data-tm='${e.attributes["data-fm"].value}']`).innerHTML:e.value=200}),d.currency&&(d.currency.querySelector('[data-fm="currency-value"]').selectedIndex=69),m&&(d["bill-date"].value=l.toISOString().substring(0,10),d["bill-time"].value=l.toLocaleTimeString().substring(0,5),s["bill-date"].forEach(e=>{e.innerHTML=p(l)}),s["bill-time"].forEach(e=>{e.innerHTML=l.toLocaleTimeString().substring(0,5)}),d["payment-method"].selectedIndex=2,s["cus-number"].forEach(e=>{d["cus-number"].value=e.innerHTML})),t(!0,"page is ready!")},h=(e,t)=>{if(e){var o=""==(o=document.querySelector(`.${e} [data-fm='item-qt']`).value)?0:parseFloat(o),n=document.querySelector(`.${e} [data-fm='item-price']`).value;let t=(""==n?0:parseFloat(n))*o;document.querySelectorAll(`.${e} [data-tm="item-tot"]`).forEach(e=>{e.innerHTML=t.toFixed(2)})}{s["rest-items"].forEach(e=>{let t=0;e.querySelectorAll(".item").forEach(e=>{e=""==(e=e.querySelector('[data-tm="item-tot"]').innerHTML)?0:parseFloat(e);t+=e,document.querySelectorAll('[data-tm="sub-total"]').forEach(e=>{e.innerHTML=t.toFixed(2)})})});let a=document.querySelector('[data-tm="sub-total"]').innerHTML,t=(a=""==a?0:parseFloat(a),d.tax.querySelector('[data-fm="tax-cgst-tax"]').value);t=""==t?0:parseFloat(t),document.querySelectorAll("[data-tm='tax-cgst-tax']").forEach(e=>{e.innerHTML=t});let r=d.tax.querySelector('[data-fm="tax-sgst-tax"]').value;r=""==r?0:parseFloat(r),document.querySelectorAll("[data-tm='tax-sgst-tax']").forEach(e=>{e.innerHTML=r});let l;if(1==document.querySelector('[data-fm="tax-cgst-check"]').checked){n=document.querySelectorAll("[data-tm='tax-cgst-amount']");let e=a*(1-t/100);l=a-e,e=e.toFixed(2),l=l.toFixed(2),n.forEach(e=>{e.innerHTML=l})}else l=0;let c;if(1==document.querySelector('[data-fm="tax-sgst-check"]').checked){o=document.querySelectorAll("[data-tm='tax-sgst-amount']");let e=a*(1-r/100);c=a-e,e=e.toFixed(2),c=c.toFixed(2),o.forEach(e=>{e.innerHTML=c})}else c=0;document.querySelectorAll('[data-tm="final-total"]').forEach(e=>{var t=a,t=(t+=parseFloat(l))+parseFloat(c);e.innerHTML=t.toFixed(2)})}t&&t(!0,"tax called")};function p(e){let t=new Date(e);return t=(t=t.toLocaleDateString("en-LI",{year:"numeric",month:"short",day:"numeric"})).replaceAll("/","-")}setCurrencyCall=t=>{var a,r=document.querySelector('[data-fm="currency-value"]'),e=document.querySelector('[data-fm="currency-remove"]'),l=document.querySelectorAll(".c-curr");e.checked||(r.selectedIndex=t,d.currency.querySelector('[data-fm="currency-code"]').checked?l.forEach(e=>{e.innerHTML=r.options[t].value}):(a=(a=(a=r.options[t].innerHTML).split("-").pop()).split(",",1).pop(),l.forEach(e=>{e.innerHTML=a})))};{var e=(e,t)=>{e&&(document.querySelectorAll("restaurant-bill [data-dynamic]").forEach(e=>{e=e.attributes["data-dynamic"].value;addDynamicHTML(e,restaurantBillData[e],!1)}),m=!0,y((e,t)=>{function a(e){""!=(n=e)?(0<(s=l.filter(e=>{return Object.keys(e).toString().toLowerCase().includes(n.toLowerCase())})).length&&(s.forEach((e,t,a)=>{e=`<button class="d-block" onclick="setCurrencyCall(${Object.values(e)})">${Object.keys(e)}</button>`;s[t]=e}),c.classList.remove("d-none")),s.length,0<s.length&&(c.innerHTML="",s.forEach((e,t)=>{c.innerHTML+=e}))):(c.classList.add("d-none"),s=[])}var r,l,c,o,n,s;r=document.querySelector('[data-fm="currency-value"]'),d.currency.querySelectorAll('[name="currency-type"').forEach(e=>{e.addEventListener("click",()=>{setCurrencyCall(r.selectedIndex)})}),l=[],r.querySelectorAll("option").forEach((e,t)=>{e={[e.innerHTML]:t};l[t]=e}),c=document.querySelector('[data-fm="search-currency-box"]'),o=document.querySelector('[data-fm="search-currency"]'),n="",s=[],window.addEventListener("click",function(e){e.target.attributes["data-fm"]&&("search-currency-box"==e.target.attributes["data-fm"].value||"search-currency"==e.target.attributes["data-fm"].value)||c.classList.add("d-none")}),o.addEventListener("keyup",e=>{a(o.value)}),o.addEventListener("focusin",e=>{a(o.value)}),v(i,(e,t)=>{})}))},S=document.querySelectorAll("script");let t=!1;S.forEach(e=>{e.src.replace(/^.*[\\\/]/,"")==a&&(t=!0)}),t||((S=document.createElement("script")).src=server.jsPath+"/partialPage/"+a,S.async=!0,S.onload=()=>{e(!0,"Dynamic data loaded")},S.onerror=()=>{e(!1,"Error occurred while loading dynamic data")},document.body.appendChild(S))}v(i,(e,t)=>{}),d["download-pdf"].addEventListener("click",()=>{{var e=(e,t)=>{var a;e&&(d["spinner-grow"].style.display="inline-block",d["download-text"].innerHTML="PDF Generating...",e=n.cloneNode(!0),(a=document.createElement("div")).id="pdf-wrapper",a.setAttribute("class","pdf-wrapper"),a.appendChild(e),html2pdf().set({jsPDF:{format:"a4",orientation:"portrait"},html2canvas:{letterRendering:!0,useCORS:!0,logging:!0,scrollX:0,scrollY:0},margin:[0,0,0,0],padding:0,image:{type:"jpeg",quality:2}}).from(a).toPdf().save("Restaurant Bill "+server.pdfName).then(e=>{d["spinner-grow"].style.display="none",d["download-text"].innerHTML="Download"}).catch(e=>{console.log("PDF Error "+e)}))};let a=!0,r=document.getElementsByClassName("validation-message");Object.keys(r).some(function(e){var t;if("block"==r[e].style.display)return t="ErrorAdress"==r[e].id?130:80,t=r[e].getBoundingClientRect().top+window.pageYOffset-t,window.scrollTo({top:t,behavior:"smooth"}),a=!1,r[e].previousElementSibling.focus(),!0}),a?e(!0,"Template ready"):e(!1,"Template not ready")}})};(()=>{let e=setInterval(()=>{isSiteReady?(clearInterval(e),restaurantBill()):document.querySelector(".loader-wrap")&&document.querySelector(".loader-wrap").classList.remove("d-none")},100)})();