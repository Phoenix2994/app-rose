(self.webpackChunkfantascivolizia=self.webpackChunkfantascivolizia||[]).push([[8592],{8232:(t,e,n)=>{"use strict";n.d(e,{c:()=>o});var r=n(2322),i=n(3320),s=n(8520);const o=(t,e)=>{let n,o;const a=(t,r,i)=>{if("undefined"==typeof document)return;const s=document.elementFromPoint(t,r);s&&e(s)?s!==n&&(l(),c(s,i)):l()},c=(t,e)=>{n=t,o||(o=n);const i=n;(0,r.c)(()=>i.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;(0,r.c)(()=>e.classList.remove("ion-activated")),t&&o!==n&&n.click(),n=void 0};return(0,s.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>a(t.currentX,t.currentY,i.a),onMove:t=>a(t.currentX,t.currentY,i.b),onEnd:()=>{l(!0),(0,i.h)(),o=void 0}})}},4068:(t,e,n)=>{"use strict";n.d(e,{g:()=>r});const r=(t,e,n,r,o)=>s(t[1],e[1],n[1],r[1],o).map(s=>i(t[0],e[0],n[0],r[0],s)),i=(t,e,n,r,i)=>i*(3*e*Math.pow(i-1,2)+i*(-3*n*i+3*n+r*i))-t*Math.pow(i-1,3),s=(t,e,n,r,i)=>o((r-=i)-3*(n-=i)+3*(e-=i)-(t-=i),3*n-6*e+3*t,3*e-3*t,t).filter(t=>t>=0&&t<=1),o=(t,e,n,r)=>{if(0===t)return((t,e,n)=>{const r=e*e-4*t*n;return r<0?[]:[(-e+Math.sqrt(r))/(2*t),(-e-Math.sqrt(r))/(2*t)]})(e,n,r);const i=(3*(n/=t)-(e/=t)*e)/3,s=(2*e*e*e-9*e*n+27*(r/=t))/27;if(0===i)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-i),-Math.sqrt(-i)];const o=Math.pow(s/2,2)+Math.pow(i/3,3);if(0===o)return[Math.pow(s/2,.5)-e/3];if(o>0)return[Math.pow(-s/2+Math.sqrt(o),1/3)-Math.pow(s/2+Math.sqrt(o),1/3)-e/3];const a=Math.sqrt(Math.pow(-i/3,3)),c=Math.acos(-s/(2*Math.sqrt(Math.pow(-i/3,3)))),l=2*Math.pow(a,1/3);return[l*Math.cos(c/3)-e/3,l*Math.cos((c+2*Math.PI)/3)-e/3,l*Math.cos((c+4*Math.PI)/3)-e/3]}},9498:(t,e,n)=>{"use strict";n.d(e,{a:()=>i,d:()=>s});var r=n(1843);const i=async(t,e,n,i,s)=>{if(t)return t.attachViewToDom(e,n,s,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>o.classList.add(t)),s&&Object.assign(o,s),e.appendChild(o),await new Promise(t=>(0,r.c)(o,t)),o},s=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},3320:(t,e,n)=>{"use strict";n.d(e,{a:()=>s,b:()=>o,c:()=>i,d:()=>c,h:()=>a});const r={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=()=>{r.selection()},s=()=>{r.selectionStart()},o=()=>{r.selectionChanged()},a=()=>{r.selectionEnd()},c=t=>{r.impact(t)}},7942:(t,e,n)=>{"use strict";n.d(e,{s:()=>r});const r=t=>{try{if(t instanceof class{constructor(t){this.value=t}})return t.value;if(!o()||"string"!=typeof t||""===t)return t;const e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,c.forEach(t=>{const n=e.querySelectorAll(t);for(let r=n.length-1;r>=0;r--){const t=n[r];t.parentNode?t.parentNode.removeChild(t):e.removeChild(t);const o=s(t);for(let e=0;e<o.length;e++)i(o[e])}});const r=s(e);for(let t=0;t<r.length;t++)i(r[t]);const a=document.createElement("div");a.appendChild(e);const l=a.querySelector("div");return null!==l?l.innerHTML:a.innerHTML}catch(e){return console.error(e),""}},i=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes.item(n),r=e.name;if(!a.includes(r.toLowerCase())){t.removeAttribute(r);continue}const i=e.value;null!=i&&i.toLowerCase().includes("javascript:")&&t.removeAttribute(r)}const e=s(t);for(let n=0;n<e.length;n++)i(e[n])},s=t=>null!=t.children?t.children:t.childNodes,o=()=>{const t=window,e=t&&t.Ionic&&t.Ionic.config;return!e||(e.get?e.get("sanitizerEnabled",!0):!0===e.sanitizerEnabled||void 0===e.sanitizerEnabled)},a=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]},9926:(t,e,n)=>{"use strict";n.d(e,{S:()=>r});const r={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const r=t*e/n-t+"ms",i=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const r=e/n,i=t*r-t+"ms",s=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},4843:(t,e,n)=>{"use strict";n.d(e,{c:()=>i,g:()=>s,h:()=>r,o:()=>a});const r=(t,e)=>null!==e.closest(t),i=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,s=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},o=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n,r)=>{if(null!=t&&"#"!==t[0]&&!o.test(t)){const i=document.querySelector("ion-router");if(i)return null!=e&&e.preventDefault(),i.push(t,n,r)}return!1}}}]);