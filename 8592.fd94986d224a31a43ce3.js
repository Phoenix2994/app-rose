(self.webpackChunkfantascivolizia=self.webpackChunkfantascivolizia||[]).push([[8592],{8232:(t,e,n)=>{"use strict";n.d(e,{c:()=>a});var o=n(2322),r=n(3320),i=n(8520);const a=(t,e)=>{let n,a;const s=(t,o,r)=>{if("undefined"==typeof document)return;const i=document.elementFromPoint(t,o);i&&e(i)?i!==n&&(l(),c(i,r)):l()},c=(t,e)=>{n=t,a||(a=n);const r=n;(0,o.c)(()=>r.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;(0,o.c)(()=>e.classList.remove("ion-activated")),t&&a!==n&&n.click(),n=void 0};return(0,i.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>s(t.currentX,t.currentY,r.a),onMove:t=>s(t.currentX,t.currentY,r.b),onEnd:()=>{l(!0),(0,r.h)(),a=void 0}})}},4068:(t,e,n)=>{"use strict";n.d(e,{g:()=>o});const o=(t,e,n,o,a)=>i(t[1],e[1],n[1],o[1],a).map(i=>r(t[0],e[0],n[0],o[0],i)),r=(t,e,n,o,r)=>r*(3*e*Math.pow(r-1,2)+r*(-3*n*r+3*n+o*r))-t*Math.pow(r-1,3),i=(t,e,n,o,r)=>a((o-=r)-3*(n-=r)+3*(e-=r)-(t-=r),3*n-6*e+3*t,3*e-3*t,t).filter(t=>t>=0&&t<=1),a=(t,e,n,o)=>{if(0===t)return((t,e,n)=>{const o=e*e-4*t*n;return o<0?[]:[(-e+Math.sqrt(o))/(2*t),(-e-Math.sqrt(o))/(2*t)]})(e,n,o);const r=(3*(n/=t)-(e/=t)*e)/3,i=(2*e*e*e-9*e*n+27*(o/=t))/27;if(0===r)return[Math.pow(-i,1/3)];if(0===i)return[Math.sqrt(-r),-Math.sqrt(-r)];const a=Math.pow(i/2,2)+Math.pow(r/3,3);if(0===a)return[Math.pow(i/2,.5)-e/3];if(a>0)return[Math.pow(-i/2+Math.sqrt(a),1/3)-Math.pow(i/2+Math.sqrt(a),1/3)-e/3];const s=Math.sqrt(Math.pow(-r/3,3)),c=Math.acos(-i/(2*Math.sqrt(Math.pow(-r/3,3)))),l=2*Math.pow(s,1/3);return[l*Math.cos(c/3)-e/3,l*Math.cos((c+2*Math.PI)/3)-e/3,l*Math.cos((c+4*Math.PI)/3)-e/3]}},9498:(t,e,n)=>{"use strict";n.d(e,{a:()=>r,d:()=>i});var o=n(1843);const r=async(t,e,n,r,i)=>{if(t)return t.attachViewToDom(e,n,i,r);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const a="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return r&&r.forEach(t=>a.classList.add(t)),i&&Object.assign(a,i),e.appendChild(a),await new Promise(t=>(0,o.c)(a,t)),a},i=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},3320:(t,e,n)=>{"use strict";n.d(e,{a:()=>i,b:()=>a,c:()=>r,d:()=>c,h:()=>s});const o={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=()=>{o.selection()},i=()=>{o.selectionStart()},a=()=>{o.selectionChanged()},s=()=>{o.selectionEnd()},c=t=>{o.impact(t)}},7942:(t,e,n)=>{"use strict";n.d(e,{s:()=>o});const o=t=>{try{if(t instanceof class{constructor(t){this.value=t}})return t.value;if(!a()||"string"!=typeof t||""===t)return t;const e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,c.forEach(t=>{const n=e.querySelectorAll(t);for(let o=n.length-1;o>=0;o--){const t=n[o];t.parentNode?t.parentNode.removeChild(t):e.removeChild(t);const a=i(t);for(let e=0;e<a.length;e++)r(a[e])}});const o=i(e);for(let t=0;t<o.length;t++)r(o[t]);const s=document.createElement("div");s.appendChild(e);const l=s.querySelector("div");return null!==l?l.innerHTML:s.innerHTML}catch(e){return console.error(e),""}},r=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes.item(n),o=e.name;if(!s.includes(o.toLowerCase())){t.removeAttribute(o);continue}const r=e.value;null!=r&&r.toLowerCase().includes("javascript:")&&t.removeAttribute(o)}const e=i(t);for(let n=0;n<e.length;n++)r(e[n])},i=t=>null!=t.children?t.children:t.childNodes,a=()=>{const t=window,e=t&&t.Ionic&&t.Ionic.config;return!e||(e.get?e.get("sanitizerEnabled",!0):!0===e.sanitizerEnabled||void 0===e.sanitizerEnabled)},s=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]},9926:(t,e,n)=>{"use strict";n.d(e,{S:()=>o});const o={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const o=t*e/n-t+"ms",r=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const o=e/n,r=t*o-t+"ms",i=2*Math.PI*o;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},4843:(t,e,n)=>{"use strict";n.d(e,{c:()=>r,g:()=>i,h:()=>o,o:()=>s});const o=(t,e)=>null!==e.closest(t),r=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,i=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},a=/^[a-z][a-z0-9+\-.]*:/,s=async(t,e,n,o)=>{if(null!=t&&"#"!==t[0]&&!a.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(t,n,o)}return!1}},7321:(t,e,n)=>{"use strict";n.d(e,{e:()=>s});var o=n(1116),r=n(1462),i=n(4812),a=n(7368);let s=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[o.ez,r.u5,i.Pc]]}),t})()},7576:(t,e,n)=>{"use strict";n.r(e),n.d(e,{HomePageModule:()=>g});var o=n(1116),r=n(1462),i=n(4812),a=n(667),s=n(2797),c=n(5713),l=n(7368);const u=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-home"]],decls:30,vars:0,consts:[[1,"cnt-home"],["routerLink","/team-list",1,"cnt"],["name","football"],["routerLink","/awards",1,"cnt"],["name","trophy"],["routerLink","/select-teams",1,"cnt"],["name","git-compare"],["routerLink","/rule-book",1,"cnt"],["name","book"]],template:function(t,e){1&t&&(l.TgZ(0,"ion-header"),l.TgZ(1,"ion-toolbar"),l.TgZ(2,"ion-title"),l._uU(3,"Fantascivolizia"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(4,"ion-content",0),l.TgZ(5,"mat-list"),l.TgZ(6,"mat-list-item"),l.TgZ(7,"mat-card",1),l.TgZ(8,"ion-row"),l._UZ(9,"ion-icon",2),l.TgZ(10,"p"),l._uU(11,"Rose"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(12,"mat-list-item"),l.TgZ(13,"mat-card",3),l.TgZ(14,"ion-row"),l._UZ(15,"ion-icon",4),l.TgZ(16,"p"),l._uU(17,"Montepremi"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(18,"mat-list-item"),l.TgZ(19,"mat-card",5),l.TgZ(20,"ion-row"),l._UZ(21,"ion-icon",6),l.TgZ(22,"p"),l._uU(23,"Tool Scambi"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(24,"mat-list-item"),l.TgZ(25,"mat-card",7),l.TgZ(26,"ion-row"),l._UZ(27,"ion-icon",8),l.TgZ(28,"p"),l._uU(29,"Regolamento"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA())},directives:[i.Gu,i.sr,i.wd,i.W2,a.i$,a.Tg,s.a8,i.YI,c.rH,i.Nd,i.gu],styles:[".cnt-home[_ngcontent-%COMP%]{--background:none;background-color:#424242}.cnt-home[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]{margin:2.5em 0}.cnt-home[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   .cnt[_ngcontent-%COMP%]{border:1px solid grey;background-color:#fff;color:#000;width:100%;padding:0}.cnt-home[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   .cnt[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:2em;height:2em;margin:1em}.cnt-home[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   .cnt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;margin:auto 0}"]}),t})()}];let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[c.Bz.forChild(u)],c.Bz]}),t})();const m=[a.ie,s.QW];let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[o.ez,r.u5,i.Pc,...m,d]]}),t})()},4253:(t,e,n)=>{"use strict";n.r(e),n.d(e,{SelectTeamsPageModule:()=>g});var o=n(1116),r=n(1462),i=n(4812),a=n(5713),s=n(7368),c=n(9979);function l(t,e){if(1&t&&(s.TgZ(0,"ion-select-option",4),s.TgZ(1,"b"),s._uU(2),s.qZA(),s.qZA()),2&t){const t=e.$implicit;s.s9C("value",t.teamId),s.xp6(2),s.Oqu(t.name)}}function u(t,e){if(1&t&&(s.TgZ(0,"ion-select-option",4),s.TgZ(1,"b"),s._uU(2),s.qZA(),s.qZA()),2&t){const t=e.$implicit;s.s9C("value",t.teamId),s.xp6(2),s.Oqu(t.name)}}const d=[{path:"",component:(()=>{class t{constructor(t,e){this.dataLoader=t,this.router=e}ngOnInit(){this.teams=this.dataLoader.getTeams()}changeFirstTeam(t){this.firstTeamId=t.detail.value}changeSecondTeam(t){this.secondTeamId=t.detail.value}navigateToTool(){this.router.navigate(["/tool-exchange"],{queryParams:{firstTeamId:this.firstTeamId,secondTeamId:this.secondTeamId}})}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(c.W),s.Y36(a.F0))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-select-teams"]],decls:13,vars:3,consts:[["placeholder","Seleziona la tua squadra","required","",2,"width","100%","font-weight","bold","font-size","larger",3,"ionChange"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Seleziona la squadra avversaria","required","",2,"width","100%","font-weight","bold","font-size","larger",3,"ionChange"],[3,"disabled","click"],[3,"value"]],template:function(t,e){1&t&&(s.TgZ(0,"ion-header"),s.TgZ(1,"ion-toolbar"),s.TgZ(2,"ion-title"),s._uU(3,"Seleziona squadre"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(4,"ion-content"),s.TgZ(5,"ion-card"),s.TgZ(6,"ion-select",0),s.NdJ("ionChange",function(t){return e.changeFirstTeam(t)}),s.YNc(7,l,3,2,"ion-select-option",1),s.qZA(),s.TgZ(8,"ion-select",2),s.NdJ("ionChange",function(t){return e.changeSecondTeam(t)}),s.YNc(9,u,3,2,"ion-select-option",1),s.qZA(),s.TgZ(10,"ion-row"),s.TgZ(11,"ion-button",3),s.NdJ("click",function(){return e.navigateToTool()}),s._uU(12,"Prosegui"),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(7),s.Q6J("ngForOf",e.teams),s.xp6(2),s.Q6J("ngForOf",e.teams),s.xp6(2),s.Q6J("disabled",!e.firstTeamId||!e.secondTeamId))},directives:[i.Gu,i.sr,i.wd,i.W2,i.PM,i.t9,i.QI,o.sg,i.Nd,i.YG,i.n0],styles:["ion-card[_ngcontent-%COMP%]{background-color:#424242;color:#fff}ion-button[_ngcontent-%COMP%]{margin:1em auto}"]}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[a.Bz.forChild(d)],a.Bz]}),t})(),g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[o.ez,r.u5,i.Pc,m]]}),t})()},8735:(t,e,n)=>{"use strict";n.d(e,{L:()=>r});var o=n(7368);let r=(()=>{class t{transform(t,...e){return Math.round(100*t)/100}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=o.Yjl({name:"round",type:t,pure:!0}),t})()},4877:(t,e,n)=>{"use strict";n.d(e,{U:()=>r});var o=n(7368);let r=(()=>{class t{transform(t,...e){return t?t.substring(0,3).toUpperCase():t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=o.Yjl({name:"shortTeam",type:t,pure:!0}),t})()}}]);