(self.webpackChunkfantascivolizia=self.webpackChunkfantascivolizia||[]).push([[8308],{8308:(e,t,o)=>{"use strict";o.r(t),o.d(t,{FreePageModule:()=>Q});var n=o(1116),l=o(1462),a=o(4812),r=o(9199),i=o(2797),c=o(3070),u=o(767),s=o(9550),g=o(5713),d=o(7368),m=o(9637),Z=o(6343),f=o(4877);function p(e,t){1&e&&(d.TgZ(0,"th",25),d._uU(1,"Ruolo"),d.qZA())}const h=function(e){return{"background-color":e}};function T(e,t){if(1&e&&(d.TgZ(0,"td",26),d.TgZ(1,"b",27),d._uU(2),d.qZA(),d.qZA()),2&e){const e=t.$implicit,o=d.oxw();d.xp6(1),d.Q6J("ngStyle",d.VKq(2,h,o.computeRoleColor(e.role))),d.xp6(1),d.Oqu(e.role)}}function q(e,t){1&e&&(d.TgZ(0,"th",25),d._uU(1,"Nome"),d.qZA())}function A(e,t){if(1&e&&(d.TgZ(0,"td",26),d._uU(1),d.ALo(2,"formatName"),d.qZA()),2&e){const e=t.$implicit;d.xp6(1),d.Oqu(d.lcZ(2,1,e.name))}}function C(e,t){1&e&&(d.TgZ(0,"th",25),d._uU(1,"Squadra"),d.qZA())}function y(e,t){if(1&e&&(d.TgZ(0,"td",28),d._uU(1),d.ALo(2,"shortTeam"),d.qZA()),2&e){const e=t.$implicit;d.xp6(1),d.hij(" ",d.lcZ(2,1,e.team)," ")}}function w(e,t){1&e&&(d.TgZ(0,"th",29),d._uU(1,"Quot"),d.qZA())}function b(e,t){if(1&e&&(d.TgZ(0,"td",30),d._uU(1),d.qZA()),2&e){const e=t.$implicit;d.xp6(1),d.hij(" ",e.quot," ")}}function x(e,t){1&e&&d._UZ(0,"tr",31)}function _(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"tr",32),d.NdJ("click",function(){const t=d.CHM(e).$implicit;return d.oxw().navigateToPlayer(t.playerId)}),d.qZA()}}const v=[{path:"",component:(()=>{class e{constructor(e,t){this.dataLoader=e,this.router=t,this.players=[],this.displayedColumns=["role","name","team","quot"],this.nameToFilter=""}ngOnInit(){this.players=[...this.dataLoader.getFreePlayers()]}computeRoleColor(e){switch(e){case"P":return"#F8AB29";case"D":return"#63C623";case"C":return"#2E6BE6";case"A":return"#F21A3C"}}navigateToPlayer(e){this.router.navigate(["/tabs/player"],{queryParams:{id:e}})}filter(){this.players=[...this.dataLoader.getFreePlayers()].filter(e=>(!this.roleToFilter||e.role===this.roleToFilter)&&(!this.nameToFilter||e.name.toLowerCase().includes(this.nameToFilter.toLowerCase())))}}return e.\u0275fac=function(t){return new(t||e)(d.Y36(m.W),d.Y36(g.F0))},e.\u0275cmp=d.Xpm({type:e,selectors:[["app-free"]],decls:42,vars:7,consts:[[3,"translucent"],[3,"fullscreen"],["placeholder","Ruolo",3,"ngModel","ngModelChange","ionChange"],["value",""],[1,"role",2,"background-color","#f8ab29"],["value","P"],["value","D"],[1,"role",2,"background-color","#63c623"],["value","C"],[1,"role",2,"background-color","#2e6be6"],["value","A"],[1,"role",2,"background-color","#f21a3c"],["placeholder","Nome",3,"ngModel","ionChange","ngModelChange"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","role"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","team"],["style","text-decoration: underline","mat-cell","",4,"matCellDef"],["matColumnDef","quot"],["class","align-right","mat-header-cell","",4,"matHeaderCellDef"],["class","align-right","mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[1,"role",3,"ngStyle"],["mat-cell","",2,"text-decoration","underline"],["mat-header-cell","",1,"align-right"],["mat-cell","",1,"align-right"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(e,t){1&e&&(d.TgZ(0,"ion-header",0),d.TgZ(1,"ion-toolbar"),d.TgZ(2,"ion-title"),d._uU(3," Svincolati "),d.qZA(),d.qZA(),d.qZA(),d.TgZ(4,"ion-content",1),d.TgZ(5,"ion-card"),d.TgZ(6,"ion-grid"),d.TgZ(7,"ion-row"),d.TgZ(8,"ion-col"),d.TgZ(9,"ion-select",2),d.NdJ("ngModelChange",function(e){return t.roleToFilter=e})("ionChange",function(){return t.filter()}),d.TgZ(10,"ion-select-option",3),d.TgZ(11,"b",4),d._uU(12,"Tutti i ruoli"),d.qZA(),d.qZA(),d.TgZ(13,"ion-select-option",5),d.TgZ(14,"b",4),d._uU(15,"Portiere"),d.qZA(),d.qZA(),d.TgZ(16,"ion-select-option",6),d.TgZ(17,"b",7),d._uU(18,"Difensore"),d.qZA(),d.qZA(),d.TgZ(19,"ion-select-option",8),d.TgZ(20,"b",9),d._uU(21,"Centrocampista"),d.qZA(),d.qZA(),d.TgZ(22,"ion-select-option",10),d.TgZ(23,"b",11),d._uU(24,"Attaccante"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(25,"ion-col"),d.TgZ(26,"ion-input",12),d.NdJ("ionChange",function(){return t.filter()})("ngModelChange",function(e){return t.nameToFilter=e}),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(27,"table",13),d.ynx(28,14),d.YNc(29,p,2,0,"th",15),d.YNc(30,T,3,4,"td",16),d.BQk(),d.ynx(31,17),d.YNc(32,q,2,0,"th",15),d.YNc(33,A,3,3,"td",16),d.BQk(),d.ynx(34,18),d.YNc(35,C,2,0,"th",15),d.YNc(36,y,3,3,"td",19),d.BQk(),d.ynx(37,20),d.YNc(38,w,2,0,"th",21),d.YNc(39,b,2,1,"td",22),d.BQk(),d.YNc(40,x,1,0,"tr",23),d.YNc(41,_,1,0,"tr",24),d.qZA(),d.qZA()),2&e&&(d.Q6J("translucent",!0),d.xp6(4),d.Q6J("fullscreen",!0),d.xp6(5),d.Q6J("ngModel",t.roleToFilter),d.xp6(17),d.Q6J("ngModel",t.nameToFilter),d.xp6(1),d.Q6J("dataSource",t.players),d.xp6(13),d.Q6J("matHeaderRowDef",t.displayedColumns),d.xp6(1),d.Q6J("matRowDefColumns",t.displayedColumns))},directives:[a.Gu,a.sr,a.wd,a.W2,a.PM,a.jY,a.Nd,a.wI,a.t9,a.QI,l.JJ,l.On,a.n0,a.pK,a.j9,r.BZ,r.w1,r.fO,r.Dz,r.as,r.nj,r.ge,r.ev,n.PC,r.XQ,r.Gk],pipes:[Z.c,f.U],styles:["table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]{color:#fff;border-radius:50%;padding:5px 9px}table[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}"]}),e})()}];let D=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[g.Bz.forChild(v)],g.Bz]}),e})();var N=o(7321),k=o(7919),P=o.n(k),F=o(5425);(0,n.qS)(P(),"de");const M=[r.p0,i.QW,c.lN,u.LD,s.c];let Q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({providers:[{provide:d.soG,useValue:"de"}],imports:[[n.ez,l.u5,a.Pc,N.e,D,F.m,...M]]}),e})()}}]);