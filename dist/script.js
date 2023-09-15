!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){
/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.12
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
var s;s=function(){return function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={exports:{},id:s,loaded:!1};return e[s].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),r=n(1),o=n(3),i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r.initializer.load(this,n,t),this.begin()}return s(e,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var e=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var e=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){e.currentElContent&&0!==e.currentElContent.length?e.backspace(e.currentElContent,e.currentElContent.length):e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos)}),this.startDelay)}},{key:"typewrite",value:function(e,t){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var s=this.humanizer(this.typeSpeed),r=1;!0!==this.pause.status?this.timeout=setTimeout((function(){t=o.htmlParser.typeHtmlChars(e,t,n);var s=0,i=e.substr(t);if("^"===i.charAt(0)&&/^\^\d+/.test(i)){var a=1;a+=(i=/\d+/.exec(i)[0]).length,s=parseInt(i),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),e=e.substring(0,t)+e.substring(t+a),n.toggleBlinking(!0)}if("`"===i.charAt(0)){for(;"`"!==e.substr(t+r).charAt(0)&&(r++,!(t+r>e.length)););var l=e.substring(0,t),c=e.substring(l.length+1,t+r),u=e.substring(t+r+1);e=l+c+u,r--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),t>=e.length?n.doneTyping(e,t):n.keepTyping(e,t,r),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),s)}),s):this.setPauseStatus(e,t,!0)}},{key:"keepTyping",value:function(e,t,n){0===t&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),t+=n;var s=e.substr(0,t);this.replaceText(s),this.typewrite(e,t)}},{key:"doneTyping",value:function(e,t){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(e,t)}),this.backDelay))}},{key:"backspace",value:function(e,t){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var s=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){t=o.htmlParser.backSpaceHtmlChars(e,t,n);var s=e.substr(0,t);if(n.replaceText(s),n.smartBackspace){var r=n.strings[n.arrayPos+1];r&&s===r.substr(0,t)?n.stopNum=t:n.stopNum=0}t>n.stopNum?(t--,n.backspace(e,t)):t<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],t))}),s)}else this.setPauseStatus(e,t,!1)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(e,t,n){this.pause.typewrite=n,this.pause.curString=e,this.pause.curStrPos=t}},{key:"toggleBlinking",value:function(e){this.cursor&&(this.pause.status||this.cursorBlinking!==e&&(this.cursorBlinking=e,e?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(e){return Math.round(Math.random()*e/2)+e}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))}},{key:"initFadeOut",value:function(){var e=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){e.arrayPos++,e.replaceText(""),e.strings.length>e.arrayPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],0):(e.typewrite(e.strings[0],0),e.arrayPos=0)}),this.fadeOutDelay)}},{key:"replaceText",value:function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:"html"===this.contentType?this.el.innerHTML=e:this.el.textContent=e}},{key:"bindFocusEvents",value:function(){var e=this;this.isInput&&(this.el.addEventListener("focus",(function(t){e.stop()})),this.el.addEventListener("blur",(function(t){e.el.value&&0!==e.el.value.length||e.start()})))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),e}();t.default=i,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),i=n(2),a=(s=i)&&s.__esModule?s:{default:s},l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,[{key:"load",value:function(e,t,n){if(e.el="string"==typeof n?document.querySelector(n):n,e.options=r({},a.default,t),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map((function(e){return e.trim()})),"string"==typeof e.options.stringsElement?e.stringsElement=document.querySelector(e.options.stringsElement):e.stringsElement=e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.display="none";var s=Array.prototype.slice.apply(e.stringsElement.children),o=s.length;if(o)for(var i=0;i<o;i+=1){var l=s[i];e.strings.push(l.innerHTML.trim())}}for(var i in e.strPos=0,e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.sequence=[],e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.strings)e.sequence[i]=i;e.currentElContent=this.getCurrentElContent(e),e.autoInsertCss=e.options.autoInsertCss,this.appendAnimationCss(e)}},{key:"getCurrentElContent",value:function(e){return e.attr?e.el.getAttribute(e.attr):e.isInput?e.el.value:"html"===e.contentType?e.el.innerHTML:e.el.textContent}},{key:"appendAnimationCss",value:function(e){if(e.autoInsertCss&&(e.showCursor||e.fadeOut)&&!document.querySelector("[data-typed-js-css]")){var t=document.createElement("style");t.type="text/css",t.setAttribute("data-typed-js-css",!0);var n="";e.showCursor&&(n+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),e.fadeOut&&(n+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==t.length&&(t.innerHTML=n,document.body.appendChild(t))}}}]),e}();t.default=l;var c=new l;t.initializer=c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(e){},onComplete:function(e){},preStringTyped:function(e,t){},onStringTyped:function(e,t){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,t){},onTypingResumed:function(e,t){},onReset:function(e){},onStop:function(e,t){},onStart:function(e,t){},onDestroy:function(e){}};t.default=n,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"typeHtmlChars",value:function(e,t,n){if("html"!==n.contentType)return t;var s=e.substr(t).charAt(0);if("<"===s||"&"===s){var r="";for(r="<"===s?">":";";e.substr(t+1).charAt(0)!==r&&!(1+ ++t>e.length););t++}return t}},{key:"backSpaceHtmlChars",value:function(e,t,n){if("html"!==n.contentType)return t;var s=e.substr(t).charAt(0);if(">"===s||";"===s){var r="";for(r=">"===s?"<":"&";e.substr(t-1).charAt(0)!==r&&!(--t<0););t--}return t}}]),e}();t.default=s;var r=new s;t.htmlParser=r}])},e.exports=s()},function(e,t,n){"use strict";n.r(t);const s=e=>{let{btn:t,menu:n,overlay:s,btnActive:r,menuActive:o,overlayActive:i,close:a}=e;const l=document.querySelector(t),c=document.querySelector(n),u=(document.querySelector(s),document.querySelector(a)),d=document.querySelector("body");l.addEventListener("click",(function(){this.classList.contains(r)?(this.classList.remove(r),c.classList.remove(o),d.style.overflow="unset",d.style.marginRight="0px"):(this.classList.add(r),c.classList.add(o),d.style.overflow="hidden",d.style.marginRight=function(){let e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflowY="scroll",e.style.visibility="hidden",document.body.appendChild(e);let t=e.offsetWidth-e.clientWidth;return e.remove(),t}()+"px")})),u.addEventListener("click",()=>{l.classList.remove(r),c.classList.remove(o),d.style.overflow="unset",d.style.marginRight="0px"})};const r=e=>{let{arrow:t,arrowActive:n}=e;const s=document.querySelectorAll('[href^="#"]');window.addEventListener("scroll",()=>{let e=document.documentElement.scrollTop,s=document.querySelector(t);e>1650?s.classList.add(n):s.classList.remove(n),e>1200?document.querySelectorAll(".aside-links").forEach(e=>{e.style.opacity="1"}):document.querySelectorAll(".aside-links").forEach(e=>{e.style.opacity="0"})}),s.forEach(e=>{e.hash&&e.addEventListener("click",(function(t){t.preventDefault();let n=document.querySelector(e.hash).getBoundingClientRect().top-100,s=document.documentElement.scrollTop,r=null;requestAnimationFrame((function e(t){null===r&&(r=t);let o=t-r,i=n<0?Math.max(s-o/.2,s+n):Math.min(s+o/.2,s+n);document.documentElement.scrollTo(0,i),i!=s+n&&requestAnimationFrame(e)}))}))})};var o=n(0),i=n.n(o);const a={"lng-about":{en:"About",ru:"Обо мне"},"lng-skills":{en:"Skills",ru:"Навыки"},"lng-works":{en:"Works",ru:"Мои работы"},"lng-contact":{en:"Contact",ru:"Контакты"},"lng-intro":{en:["Hi,","I'm Michael,","web developer"],ru:["Привет,","меня зовут Михаил,","я веб-разработчик"]},"lng-btnContact":{en:"Contact me!",ru:"Свяжитесь со мной"},"lng-prof":{en:["Freelancer","Front-end developer"],ru:["Фрилансер","Фронт-енд разработчик"]},"lng-descr":{en:"Hello, my name is Michael. I'm junior front-end developer.I've been learning front-end for two years, finished five web developing courses on Udemy and have been practicing all that time. My <a href='#works' class='about__link' aria-label='link to works section'>works</a> you can see below.",ru:'Привет, меня зовут Михаил. Я джуниор фронт-енд разработчик. Я изучаю фронт-енд два года, закончил пять курсов веб-разработки на Udemy, все это время практикуюсь.<a href="#works" class="about__link" aria-label="link to works section"> Мои работы</a> вы можете посмотреть ниже '},"lng-skillsSubtitle":{en:"What i use in my work",ru:"Что я использую в работе"},"lng-html":{en:"HTML can be described as the language that ultimately gives web pages (and websites) the appearance and structure that is seen by end users.",ru:"HTML - стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере"},"lng-css":{en:"CSS is the abbreviation for the term “cascading style sheets” and describes how HTML elements should be displayed.",ru:"CSS расшифровывается как каскадные таблицы стилей и описывает как HTML элементы должны отображаться"},"lng-js":{en:"This programming language allows you to bring anything to life: sliders, windows, tooltips, tabs, receiving data from the server, and much more.",ru:"Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое"},"lng-react":{en:"This library allows you to create web applications. I can create the most interactive product for your purposes.",ru:"Эта библиотека позволяет создавать web-приложения. Я могу создать максимально интерактивный продукт именно под ваши цели"},"lng-jquery":{en:"The Jquery library will speed up development. Without the need to integrate it into the project, we will not, but the skill of working with it is present.",ru:"Библиотека Jquery позволит ускорить разработку. Без необходимости интегрировать в проект мы её не будем, но навык работы с ней присутствует."},"lng-mongodb":{en:"A document-oriented database management system that does not require a description of the table schema. Considered one of the classic examples of NoSQL systems, uses JSON-like documents and database schema.",ru:"Документоориентированная система управления базами данных, не требующая описания схемы таблиц. Считается одним из классических примеров NoSQL-систем, использует JSON-подобные документы и схему базы данных."},"lng-nodejs":{en:'This platform allows you to create a backend for your product - "brains" that will perform actions that the user does not see.',ru:"Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут выполнять действия, которые пользователь не видит."},"lng-sites":{en:"Web sites creating",ru:"Создание веб-сайтов"},"lng-apps":{en:"Web applications creating",ru:"Создание веб-приложений"},"lng-data":{en:"Work with data",ru:"Работа с данными"},"lng-creativity":{en:"Creativity",ru:"Креативность"},"lng-design":{en:"Design creating",ru:"Создание дизайна"},"lng-softSkills":{en:"Soft skills",ru:"Soft skills"},"lng-portfolio":{en:"Portfolio",ru:"Портфолио"},"lng-worksSubtitle":{en:"Some of my works",ru:"Мои работы"},"lng-contactSubtitle":{en:"Form for contact",ru:"Форма для связи"},"lng-contactDescr":{en:"I'm interested in freelance opportunities. However, if you have other request or question, you can use a form.",ru:"Мне интересны фриланс-возможности. Если у вас остались вопросы, можете использовать форму для связи"},"lng-name":{en:"Name",ru:"Имя"},"lng-email":{en:"Email",ru:"Почта"},"lng-msg":{en:"Message",ru:"Сообщение"},"lng-btnSend":{en:"Send message!",ru:"Отправить!"},"lng-privacy":{en:"I agree with the",ru:"Я согласен(а) с"},"lng-privacyLink":{en:"privacy policy",ru:"политикой конфиденциальности"},"lng-privacyHref":{en:"privacy-en.html",ru:"privacy-ru.html"},"lng-preview":{en:"view",ru:"смотреть"}};const l=e=>{const t=document.querySelector(e),n=t.querySelectorAll("[name]"),s=document.querySelector(".modal"),r=document.querySelector(".overlay"),o=t.querySelector(".contact__submit"),i={loading:"./assets/icons/spinner.svg",error:{img:"./assets/icons/wrong.svg"},"error-input":{en:"This field is required",ru:"Это поле обязательно для заполнения"},"error-for-btn":{en:"Some fields were not filled out",ru:"Некоторые поля формы не заполнены"},success:{img:"./assets/icons/success.svg"}};n.forEach(e=>{"checkbox"!==e.type?e.addEventListener("input",()=>{e.classList.contains("wrong")&&(e.classList.remove("wrong"),e.parentNode.removeChild(Array.from(e.parentNode.children)[Array.from(e.parentNode.children).length-1])),""!==e.value?e.nextElementSibling.style.display="none":e.nextElementSibling.style.display="block"}):e.addEventListener("change",()=>{e.classList.contains("wrong")&&(e.classList.remove("wrong"),e.parentNode.removeChild(Array.from(e.parentNode.children)[Array.from(e.parentNode.children).length-1]))})}),t.addEventListener("submit",(function(e){e.preventDefault();let a=document.createElement("img");a.setAttribute("src",i.loading),a.style.cssText="width: 40px; height: 40px; margin-left: 20px",o.appendChild(a);let l=0,c=window.location.hash.substring(1);if(n.forEach(e=>{if(!e.value||"checkbox"===e.type&&!e.checked){let t=document.createElement("span");t.textContent=i["error-input"][c],t.classList.add("contact__notfilled"),e.parentNode.appendChild(t),e.classList.add("wrong"),l=1,o.removeChild(a)}}),l>0){let e=document.createElement("div");return e.classList.add("contact__notfilled-main"),e.innerHTML=i["error-for-btn"][c],document.documentElement.appendChild(e),void setTimeout(()=>{document.documentElement.removeChild(e)},3e3)}let u=new FormData(t),d={};function h(e,t,n){n.classList.add("modal_active"),r.classList.add("overlay_active"),document.documentElement.addEventListener("click",e=>{(e.target.hasAttribute("data-close")||e.target.classList.contains("overlay"))&&p(s)}),console.log(e),e.hasOwnProperty("success")?s.innerHTML=`\n                        <div class="modal__img modal__img_suc">\n                            <img src="${i.success.img}">\n                        </div>\n                        <div class="modal__msg">${e.message[t]}</div>\n                        <div class="modal__close" data-close>&#10005;</div>\n                    `:e.hasOwnProperty("error")&&(s.innerHTML=`   \n                        <div class="modal__img modal__img_wrong">\n                            <img src="${i.error.img}">\n                        </div>\n                        <div class="modal__msg">${e.message[t]}</div>\n                        <div class="modal__close" data-close>&#10005;</div>\n                    `)}function p(e){e.classList.remove("modal_active"),r.classList.remove("overlay_active"),e.innerHTML=""}u.forEach((e,t)=>{d[t]=e}),(async(e,t)=>{try{let n=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:t});if(!n.ok)throw new Error(`Could not fetch ${e}, status ${n.status}`);return await n.json()}catch(e){throw e}})("https://portfolio-mailer-8yue.onrender.com/send_mail",JSON.stringify(d)).then(e=>{o.removeChild(a),h(e,window.location.hash.substring(1),s)}).catch(e=>{o.removeChild(a),h("error",window.location.hash.substring(1),s)}).finally(()=>{this.reset(),n.forEach(e=>{"checkbox"===e.type?e.checked=!1:(e.value="",e.nextElementSibling.style.display="block")}),setTimeout(()=>p(s),7e3)})}))},c=()=>{const e=document.querySelector(".theme-btn"),t=e.querySelector(".theme-btn__trigger"),n=document.querySelectorAll(".theme-bg"),s=document.querySelectorAll(".theme-color"),r=document.querySelectorAll(".btn.theme"),o=document.querySelectorAll(".theme-burger"),i=document.querySelectorAll("svg.theme"),a=i[0],l=i[1],c=i[2],u=document.querySelector(".intro"),d=document.querySelector("input.theme"),h=document.querySelectorAll("article.theme");function p(){n.forEach(e=>{switch(e.tagName){case"HEADER":e.style.boxShadow="0 0 5px 0 #000";break;case"SELECT":e.style.border="1px solid #000"}e.style.backgroundColor="#fff"}),o.forEach(e=>{e.style.backgroundColor="#333"}),s.forEach(e=>{e.style.color="#000"}),r.forEach(e=>{e.classList.remove("btn_dark")}),h.forEach(e=>{e.classList.remove("theme-skills-card")}),l.classList.remove("theme-github"),a.classList.remove("theme-logo"),c.classList.remove("theme-mail"),u.classList.remove("theme-intro"),d.classList.remove("theme-checkbox")}function m(){n.forEach(e=>{switch(e.tagName){case"HEADER":e.style.boxShadow="0 0 5px 0 #fff";break;case"SELECT":e.style.border="1px solid #fff"}e.style.backgroundColor="#000"}),o.forEach(e=>{e.style.backgroundColor="#fff"}),s.forEach(e=>{e.style.color="#fff"}),r.forEach(e=>{e.classList.toggle("btn_dark")}),h.forEach(e=>{e.classList.toggle("theme-skills-card")}),l.classList.toggle("theme-github"),a.classList.toggle("theme-logo"),c.classList.toggle("theme-mail"),u.classList.toggle("theme-intro"),d.classList.toggle("theme-checkbox")}localStorage.getItem("theme")?"dark"===localStorage.getItem("theme")?(e.classList.add("theme-btn_dark"),t.classList.add("theme-btn__trigger_dark"),m()):p():(localStorage.setItem("theme","light"),p()),e.addEventListener("click",(function(){switch(this.classList.contains("theme-btn__trigger_dark")||(this.classList.toggle("theme-btn_dark"),t.classList.toggle("theme-btn__trigger_dark")),localStorage.getItem("theme")){case"light":localStorage.setItem("theme","dark");break;case"dark":localStorage.setItem("theme","light")}"light"===localStorage.getItem("theme")?p():m()}))};window.addEventListener("DOMContentLoaded",()=>{var e,t,n;r({arrow:".arrow-up",arrowActive:"arrow-up_active"}),function(e,t){const n=document.querySelector(t),s=document.querySelectorAll(".lng"),o=Array.from(document.querySelector(".intro__title").children),l=document.querySelector(".about__subtitle");window.location.hash="#en";let c=window.location.hash.substring(1),u=[];for(let e=0;e<o.length;e++){const t=new i.a(o[e],{strings:[a["lng-intro"][window.location.hash.substring(1)][e]],typeSpeed:40,startDelay:900*e,showCursor:!1,onReset:t=>{t.strings=[a["lng-intro"][window.location.hash.substring(1)][e]]},onComplete:t=>{p(o[e],"title-intro__letter")}});u.push(t)}let d=new i.a(l,{strings:a["lng-prof"][window.location.hash.substring(1)],typeSpeed:60,loop:!0,showCursor:!1,smartBackspace:!1,startDelay:500,backDelay:1e3,backSpeed:30,onReset:e=>{l.style.opacity=0},onBegin:e=>{setTimeout(()=>{l.style.opacity=1},600),e.strings=a["lng-prof"][window.location.hash.substring(1)],e.strings.options=a["lng-prof"][window.location.hash.substring(1)]}});function h(t){u.forEach((e,t)=>{e.reset()}),d.reset(),s.forEach(n=>{const s=n.classList.value.match(/lng-[a-z]*/gi).join("");n.classList.contains(s)&&(n.innerHTML=e[s][t])}),document.querySelector(".privacy__link").setAttribute("href",""+a["lng-privacyHref"][t])}function p(e,t){let n=e,s=n.innerHTML;n.innerHTML="";for(let e=0;e<s.length;e++){let r=document.createElement("span");" "==s[e]?(r.classList.add("space-item"),r.innerHTML=s[e],n.appendChild(r)):(r.classList.add(t),r.innerHTML=s[e],n.appendChild(r))}}n.addEventListener("input",()=>{let e=n.value;window.location.hash="#"+e;let t=window.location.hash.substring(1);c!==t&&h(t),r({arrow:".arrow-up",arrowActive:"arrow-up_active"})}),window.addEventListener("popstate",()=>{let e=window.location.hash.substring(1);n.value=window.location.hash.substring(1),h(e)})}(a,".lang-selector"),s({btn:".burger__btn",menu:".burger__menu",overlay:".overlay",btnActive:"burger__btn_active",menuActive:"burger__menu_active",overlayActive:"overlay_active",close:".menu__close"}),e=".skills__diagrams-item",t=".diagrams-item__percent",n=".bottom-diagrams-item__bg-front",document.querySelectorAll(e).forEach(e=>{const s=e.querySelector(t);e.querySelector(n).style.width=Array.from(s.children)[0].textContent+"%"}),l(".contact__form"),c(),(async(e,t)=>{const n=document.querySelector("#intro-img"),s=document.querySelector(".overlay");n.onload=function(){s.classList.remove("overlay_active")},n.onload()})()})}]);