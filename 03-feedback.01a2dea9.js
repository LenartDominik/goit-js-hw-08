var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,l=u||f||Function("return this")(),c=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return l.Date.now()};function v(e,t,n){var i,r,o,a,u,f,l=0,c=!1,v=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function w(e){return l=e,u=setTimeout(h,t),c?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||v&&e-l>=o}function h(){var e=m();if(j(e))return O(e);u=setTimeout(h,function(e){var n=t-(e-f);return v?d(n,o-(e-l)):n}(e))}function O(e){return u=void 0,g&&i?b(e):(i=r=void 0,a)}function T(){var e=m(),n=j(e);if(i=arguments,r=this,f=e,n){if(void 0===u)return w(f);if(v)return u=setTimeout(h,t),b(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,o=(v="maxWait"in n)?s(y(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=r=u=void 0},T.flush=function(){return void 0===u?a:O(m())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=r.test(e);return u||o.test(e)?a(e.slice(2),u?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:i,maxWait:t,trailing:r})};const g=window.localStorage,b=document.querySelector("form"),w=document.querySelector("input"),j=document.querySelector("textarea"),h=Array.from(b.elements);b.addEventListener("input",t((()=>{g.setItem("feedback-form-state",JSON.stringify({email:h[0].value,message:h[1].value}))}),500));b.addEventListener("submit",(e=>{e.preventDefault(),console.log({email:h[0].value,message:h[1].value}),g.removeItem("feedback-form-state"),b.reset()})),window.addEventListener("load",(()=>{if(null!==g.getItem("feedback-form-state")){const e=JSON.parse(g.getItem("feedback-form-state"));w.value=e.email,j.value=e.message}}));
//# sourceMappingURL=03-feedback.01a2dea9.js.map
