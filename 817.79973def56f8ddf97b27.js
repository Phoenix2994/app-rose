(self.webpackChunkfantascivolizia=self.webpackChunkfantascivolizia||[]).push([[817],{817:(t,e,a)=>{"use strict";a.r(e),a.d(e,{TeamPageModule:()=>k});var n=a(1116),o=a(1462),i=a(4812),l=a(9199),r=a(2797),c=a(3070),s=a(5181),u=a(9550),m=a(5713),d=a(7368),f=a(8898);function g(t,e){if(1&t&&(d.TgZ(0,"ion-select-option",17),d.TgZ(1,"b"),d._uU(2),d.qZA(),d.qZA()),2&t){const t=e.$implicit;d.s9C("value",t.teamId),d.xp6(2),d.Oqu(t.name)}}function h(t,e){1&t&&(d.TgZ(0,"th",18),d._uU(1,"Ruolo"),d.qZA())}const p=function(t){return{"background-color":t}};function Z(t,e){if(1&t&&(d.TgZ(0,"td",19),d.TgZ(1,"b",20),d._uU(2),d.qZA(),d.qZA()),2&t){const t=e.$implicit,a=d.oxw();d.xp6(1),d.Q6J("ngStyle",d.VKq(2,p,a.computeRoleColor(t.role))),d.xp6(1),d.Oqu(t.role)}}function C(t,e){1&t&&(d.TgZ(0,"th",18),d._uU(1,"Nome"),d.qZA())}function q(t,e){if(1&t&&(d.TgZ(0,"td",19),d._uU(1),d.qZA()),2&t){const t=e.$implicit;d.xp6(1),d.Oqu(t.name)}}function x(t,e){1&t&&(d.TgZ(0,"th",18),d._uU(1,"Squadra"),d.qZA())}function y(t,e){if(1&t&&(d.TgZ(0,"td",21),d._uU(1),d.qZA()),2&t){const t=e.$implicit;d.xp6(1),d.hij(" ",t.team," ")}}function T(t,e){1&t&&(d.TgZ(0,"th",22),d._uU(1,"Quot"),d.qZA())}function A(t,e){if(1&t&&(d.TgZ(0,"td",23),d._uU(1),d.qZA()),2&t){const t=e.$implicit;d.xp6(1),d.hij(" ",t.quot," ")}}function v(t,e){1&t&&(d.TgZ(0,"th",22),d._uU(1,"Valore"),d.qZA())}function w(t,e){if(1&t&&(d.TgZ(0,"td",23),d._uU(1),d.ALo(2,"currency"),d.qZA()),2&t){const t=e.$implicit;d.xp6(1),d.hij(" ",d.xi3(2,1,t.value,"EUR")," ")}}function D(t,e){1&t&&d._UZ(0,"tr",24)}function N(t,e){if(1&t){const t=d.EpF();d.TgZ(0,"tr",25),d.NdJ("click",function(){const e=d.CHM(t).$implicit;return d.oxw().navigateToPlayer(e.playerId)}),d.qZA()}}const _=[{path:"",component:(()=>{class t{constructor(t,e){this.dataLoader=t,this.router=e,this.players=[],this.displayedColumns=["role","name","team","quot","value"]}ngOnInit(){this.teams=this.dataLoader.getTeams(),this.teamId=this.dataLoader.teamId,this.players=[...this.dataLoader.getTeam(this.teamId).players],this.dataLoader.$teamId.subscribe(t=>{this.teamId=t,this.players=[...this.dataLoader.getTeam(this.teamId).players]})}changeTeam(){this.dataLoader.$teamId.next(this.teamId)}computeRoleColor(t){switch(t){case"P":return"#F8AB29";case"D":return"#63C623";case"C":return"#2E6BE6";case"A":return"#F21A3C"}}navigateToPlayer(t){this.router.navigate(["/tabs/player"],{queryParams:{id:t,teamId:this.teamId}})}}return t.\u0275fac=function(e){return new(e||t)(d.Y36(f.W),d.Y36(m.F0))},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-team"]],decls:23,vars:7,consts:[[3,"translucent"],["required","",2,"width","100%","font-weight","bold","font-size","larger",3,"value","ionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"fullscreen"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","role"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","team"],["style","text-decoration: underline","mat-cell","",4,"matCellDef"],["matColumnDef","quot"],["class","align-right","mat-header-cell","",4,"matHeaderCellDef"],["class","align-right","mat-cell","",4,"matCellDef"],["matColumnDef","value"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],[3,"value"],["mat-header-cell",""],["mat-cell",""],[1,"role",3,"ngStyle"],["mat-cell","",2,"text-decoration","underline"],["mat-header-cell","",1,"align-right"],["mat-cell","",1,"align-right"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(t,e){1&t&&(d.TgZ(0,"ion-header",0),d.TgZ(1,"ion-toolbar"),d.TgZ(2,"ion-select",1),d.NdJ("ionChange",function(){return e.changeTeam()}),d.YNc(3,g,3,2,"ion-select-option",2),d.qZA(),d.qZA(),d.qZA(),d.TgZ(4,"ion-content",3),d.TgZ(5,"table",4),d.ynx(6,5),d.YNc(7,h,2,0,"th",6),d.YNc(8,Z,3,4,"td",7),d.BQk(),d.ynx(9,8),d.YNc(10,C,2,0,"th",6),d.YNc(11,q,2,1,"td",7),d.BQk(),d.ynx(12,9),d.YNc(13,x,2,0,"th",6),d.YNc(14,y,2,1,"td",10),d.BQk(),d.ynx(15,11),d.YNc(16,T,2,0,"th",12),d.YNc(17,A,2,1,"td",13),d.BQk(),d.ynx(18,14),d.YNc(19,v,2,0,"th",12),d.YNc(20,w,3,4,"td",13),d.BQk(),d.YNc(21,D,1,0,"tr",15),d.YNc(22,N,1,0,"tr",16),d.qZA(),d.qZA()),2&t&&(d.Q6J("translucent",!0),d.xp6(2),d.s9C("value",e.teamId),d.xp6(1),d.Q6J("ngForOf",e.teams),d.xp6(1),d.Q6J("fullscreen",!0),d.xp6(1),d.Q6J("dataSource",e.players),d.xp6(16),d.Q6J("matHeaderRowDef",e.displayedColumns),d.xp6(1),d.Q6J("matRowDefColumns",e.displayedColumns))},directives:[i.Gu,i.sr,i.t9,i.QI,n.sg,i.W2,l.BZ,l.w1,l.fO,l.Dz,l.as,l.nj,i.n0,l.ge,l.ev,n.PC,l.XQ,l.Gk],pipes:[n.H9],styles:["table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]{color:#fff;border-radius:50%;padding:5px 9px}table[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}"]}),t})()}];let b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[m.Bz.forChild(_)],m.Bz]}),t})();var Q=a(7321),I=a(7919);(0,n.qS)(a.n(I)(),"de");const Y=[l.p0,r.QW,c.lN,s.LD,u.c];let k=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({providers:[{provide:d.soG,useValue:"de"}],imports:[[n.ez,o.u5,i.Pc,Q.e,b,...Y]]}),t})()}}]);