parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".contact__form"),t=document.querySelector("#email-input"),n=document.querySelector("#message-input");e.addEventListener("submit",function(e){e.preventDefault(),t.value="",n.value=""});var r=document.querySelector(".contact__send"),o=document.querySelector(".contact__button-wrapper");function i(e){var i=t.checkValidity(),s=n.checkValidity();if(i&&s)r.style.left="0px";else{s||n.reportValidity(),i||t.reportValidity();var a=o.getBoundingClientRect(),c=r.getBoundingClientRect(),l=e.clientX,d=c.width,u=a.width,f=0;(f=l>c.left+d/2?c.left-a.left-d:c.left-a.left+d)<0?f=u-d:f+d>u&&(f=0),r.style.left=f+"px"}}function s(){l=a.offsetWidth,u=[0,l,2*l],window.innerWidth<=1024?a.style.transform="translateX(-".concat(u[d-1],"px)"):a.style.transform="translateX(0px)",S()}r.addEventListener("mouseenter",function(){o.addEventListener("mousemove",i)}),r.addEventListener("mouseleave",function(){o.removeEventListener("mousemove",i)}),window.onresize=s;var a=document.querySelector(".features__slider"),c=document.querySelector(".features__current"),l=a.offsetWidth,d=1,u=[0,l,2*l],f=document.querySelector("#arrow-prev"),m=document.querySelector("#arrow-next");function y(){d>=2&&(d--,p(),a.style.transform="translateX(-".concat(u[d-1],"px)"),w())}function v(){d<=2&&(d++,p(),a.style.transform="translateX(-".concat(u[d-1],"px)"),w())}function p(){c.innerText="0"+d}function w(){d>1?f.classList.remove("arrow--disabled"):f.classList.add("arrow--disabled"),d<3?m.classList.remove("arrow--disabled"):m.classList.add("arrow--disabled")}f.addEventListener("click",y),m.addEventListener("click",v),setInterval(L,5e3);var _=document.querySelector(".icons-section__wrapper"),h=document.querySelector(".icons-section__card"),q=h.offsetWidth;function L(){window.innerWidth<768&&(_.style.transition="0.2s ease-in-out",_.style.transform="translateX(".concat(-q,"px)"),setTimeout(function(){_.style.transition="none",_.style.transform="translateX(0)",_.appendChild(_.firstElementChild)},200))}function S(){q=h.offsetWidth}
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.1ee47f2f.js.map