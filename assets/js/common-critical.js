var globalData={appData:""},allFilesLoadded={ga:!1,css:!1,js:!1},isSiteReady=!1,jsLoad=(s,e,r,a)=>{let t=!1;var o;document.querySelectorAll("script").forEach(e=>{if(e.src==s)return!(t=!0)}),t?a(!0,"Script file already exist"):((o=document.createElement("script")).src=s,o.defer=e,o.onload=()=>{a(!0,"Script loaded successfuly")},o.onerror=()=>{a(!1,"Error occurred while loading script")},document[r].appendChild(o))},cssLoad=(s,e,r)=>{let a=!1;var t;document.querySelectorAll("link").forEach(e=>{if(e.href==s)return!(a=!0)}),a?r(!0,"Style file already exist"):((t=document.createElement("link")).href=s,t.rel="stylesheet",t.type="text/css",t.as="style",t.onload=()=>{r(!0,"Style loaded successfuly")},t.onerror=()=>{r(!1,"Error occurred while loading style")},document[e].appendChild(t))},loadGA=()=>{jsLoad("https://www.googletagmanager.com/gtag/js?id=G-HXL5BF20G0",!0,"head",(e,s)=>{function r(){dataLayer.push(arguments)}e&&(window.dataLayer=window.dataLayer||[],r("js",new Date),r("config","G-HXL5BF20G0"),allFilesLoadded.ga=!0)})},lAll=()=>{"freeforonline.com"==window.location.host&&loadGA(),cssLoad(server.serverPath+"/assets/plugins/bootstrap-5.3.0-alpha1-dist/css/bootstrap.min.css","head",(e,s)=>{e&&(cssLoad("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css","head",(e,s)=>{}),cssLoad(server.serverPath+"/assets/style/main"+server.serverStyle,"head",(e,s)=>{e&&("/fuel-bills"==server.serverPage||"/tools/petrol-bill"==server.serverPage?cssLoad(server.serverPath+"/assets/style/fuel-receipt"+server.serverStyle,"head",(e,s)=>{}):"/tools/rent-receipt"==server.serverPage||"/rent-receipt"==server.serverPage?cssLoad(server.serverPath+"/assets/style/rent-receipt"+server.serverStyle,"head",(e,s)=>{}):"/tools/driver-salary"==server.serverPage?cssLoad(server.cssPath+"/driver-salary.css","head",(e,s)=>{}):"/tools/lta/red-bus"==server.serverPage?cssLoad(server.cssPath+"/lta-bill.css","head",(e,s)=>{}):"/tools/internet-invoice/airtel"==server.serverPage?cssLoad(server.cssPath+"/internet-invoice.css","head",(e,s)=>{}):"/tools/book-invoice/one"==server.serverPage?cssLoad(server.cssPath+"/book-invoice.css","head",(e,s)=>{}):"/tools/helper-bill"==server.serverPage?cssLoad(server.cssPath+"/helper-bill.css","head",(e,s)=>{}):"/tools/restaurant-bill"==server.serverPage?cssLoad(server.cssPath+"/restaurant-bill.css","head",(e,s)=>{}):"/tester"==server.serverPage&&cssLoad(server.cssPath+"/tester.css","head",(e,s)=>{}),allFilesLoadded.css=!0)}))}),jsLoad(server.serverPath+"/assets/plugins/bootstrap-5.3.0-alpha1-dist/js/bootstrap.min.js",!0,"body",(e,s)=>{}),jsLoad("https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js",!0,"body",(e,s)=>{e&&jsLoad(server.jsPath+"/common.js",!0,"body",(e,s)=>{jsLoad(server.jsPath+"/app.js",!0,"body",(e,s)=>{e&&("/"==server.serverPage?jsLoad(server.jsPath+"/home.js",!0,"body",(e,s)=>{}):"/fuel-bills"==server.serverPage||"/tools/petrol-bill"==server.serverPage?jsLoad(server.serverPath+"/assets/js/fuel-receipt"+server.serverScript,!0,"body",(e,s)=>{}):"/tools/rent-receipt"==server.serverPage||"/rent-receipt"==server.serverPage?jsLoad(server.serverPath+"/assets/js/rent-receipt"+server.serverScript,!0,"body",(e,s)=>{}):"/contact"==server.serverPage?jsLoad(server.serverPath+"/assets/js/contact-us"+server.serverScript,!0,"body",(e,s)=>{}):"/about"==server.serverPage?jsLoad(server.serverPath+"/assets/js/about-us"+server.serverScript,!0,"body",(e,s)=>{}):"/tools/driver-salary"==server.serverPage?jsLoad(server.jsPath+"/driver-salary.js",!0,"body",(e,s)=>{}):"/tools/lta/red-bus"==server.serverPage?jsLoad(server.jsPath+"/lta-bill.js",!0,"body",(e,s)=>{}):"/tools/internet-invoice/airtel"==server.serverPage?jsLoad(server.jsPath+"/internet-invoice.js",!0,"body",(e,s)=>{}):"/tools/book-invoice/one"==server.serverPage?jsLoad(server.jsPath+"/book-invoice.js",!0,"body",(e,s)=>{}):"/tools/helper-bill"==server.serverPage?jsLoad(server.jsPath+"/helper-bill.js",!0,"body",(e,s)=>{}):"/tools/restaurant-bill"==server.serverPage?jsLoad(server.jsPath+"/restaurant-bill.js",!0,"body",(e,s)=>{}):"/tester"==server.serverPage&&jsLoad(server.jsPath+"/tester.js",!0,"body",(e,s)=>{}),allFilesLoadded.js=!0)})})})},REle=(s,e,r)=>{document.querySelectorAll([e]).forEach(e=>{if(e.href==s)return e.remove(),r(!0,"file removed"),!1;r(!1,"file not found")})},setSite=e=>{let s=document.getElementById("nav-links"),r=document.getElementById("linkmblmenu");["click"].forEach(e=>{r.addEventListener(e,()=>{s.classList.contains("d-block")?s.classList.remove("d-block"):s.classList.add("d-block")})}),s.addEventListener("click",e=>{s.classList.toggle("d-block")});var a=document.querySelector("#linkmblsearch");let t=document.querySelector("#search-warp"),o=document.querySelector("#sb-search");a.addEventListener("click",e=>{t.classList.toggle("d-none"),t.classList.contains('d-none"')||o.focus()}),window.addEventListener("click",e=>{"nav-links-dots"!=e.target.classList[0]&&"nav-mobile"!=e.target.classList[0]&&s.classList.remove("d-block"),"nav-search"!=e.target.classList[0]&&"sb-search"!=e.target.id&&t.classList.add("d-none")})},activeMenu=e=>{document.querySelector(`[data-nav="${e}"]`)&&document.querySelector(`[data-nav="${e}"]`).classList.add("active")};["focus","scroll","mousemove","touchstart","click"].forEach(e=>{document.addEventListener(e,e=>{server.serverPage=window.location.pathname,lAll()})}),window.addEventListener("load",e=>{"freeforonline.com"==window.location.host&&loadGA(),setSite()},{once:!0});