"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[110],{3110:(ie,y,l)=>{l.r(y),l.d(y,{ExpandableSectionModule:()=>ne});var t=l(1737),f=l(268),E=l(8112);let M=(()=>{class i{constructor(){this._listeners=[]}notify(e,o){for(let a of this._listeners)a(e,o)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(o=>e!==o)}}ngOnDestroy(){this._listeners=[]}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();const v=new t.OlP("CdkAccordion");let H=0,I=(()=>{class i{constructor(e,o,a){this.accordion=e,this._changeDetectorRef=o,this._expansionDispatcher=a,this._openCloseAllSubscription=E.w0.EMPTY,this.closed=new t.vpe,this.opened=new t.vpe,this.destroyed=new t.vpe,this.expandedChange=new t.vpe,this.id="cdk-accordion-child-"+H++,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=a.listen((s,r)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===r&&this.id!==s&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}get expanded(){return this._expanded}set expanded(e){e=(0,f.Ig)(e),this._expanded!==e&&(this._expanded=e,this.expandedChange.emit(e),e?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(e){this._disabled=(0,f.Ig)(e)}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(v,12),t.Y36(t.sBO),t.Y36(M))},i.\u0275dir=t.lG2({type:i,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[t._Bn([{provide:v,useValue:void 0}])]}),i})(),O=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({}),i})();var x=l(4437),_=l(8976),A=l(659),F=l(8700),B=l(7003),R=l(9547),m=l(5996),V=l(6536),b=l(3857),C=l(4612),w=l(2263),N=l(1936),Y=l(2649),p=l(9421);const Q=["body"];function z(i,n){}const U=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],$=["mat-expansion-panel-header","*","mat-action-row"];function j(i,n){if(1&i&&t._UZ(0,"span",2),2&i){const e=t.oxw();t.Q6J("@indicatorRotate",e._getExpandedState())}}const L=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Z=["mat-panel-title","mat-panel-description","*"],P=new t.OlP("MAT_ACCORDION"),S="225ms cubic-bezier(0.4,0.0,0.2,1)",D={indicatorRotate:(0,p.X$)("indicatorRotate",[(0,p.SB)("collapsed, void",(0,p.oB)({transform:"rotate(0deg)"})),(0,p.SB)("expanded",(0,p.oB)({transform:"rotate(180deg)"})),(0,p.eR)("expanded <=> collapsed, void => collapsed",(0,p.jt)(S))]),bodyExpansion:(0,p.X$)("bodyExpansion",[(0,p.SB)("collapsed, void",(0,p.oB)({height:"0px",visibility:"hidden"})),(0,p.SB)("expanded",(0,p.oB)({height:"*",visibility:"visible"})),(0,p.eR)("expanded <=> collapsed, void => collapsed",(0,p.jt)(S))])};let J=(()=>{class i{constructor(e){this._template=e}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.Rgc))},i.\u0275dir=t.lG2({type:i,selectors:[["ng-template","matExpansionPanelContent",""]]}),i})(),K=0;const T=new t.OlP("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");let k=(()=>{class i extends I{constructor(e,o,a,s,r,g,h){super(e,o,a),this._viewContainerRef=s,this._animationMode=g,this._hideToggle=!1,this.afterExpand=new t.vpe,this.afterCollapse=new t.vpe,this._inputChanges=new w.x,this._headerId="mat-expansion-panel-header-"+K++,this._bodyAnimationDone=new w.x,this.accordion=e,this._document=r,this._bodyAnimationDone.pipe((0,B.x)((d,c)=>d.fromState===c.fromState&&d.toState===c.toState)).subscribe(d=>{"void"!==d.fromState&&("expanded"===d.toState?this.afterExpand.emit():"collapsed"===d.toState&&this.afterCollapse.emit())}),h&&(this.hideToggle=h.hideToggle)}get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=(0,f.Ig)(e)}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_hasSpacing(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this.opened.pipe((0,R.O)(null),(0,m.h)(()=>this.expanded&&!this._portal),(0,V.q)(1)).subscribe(()=>{this._portal=new x.UE(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._bodyAnimationDone.complete(),this._inputChanges.complete()}_containsFocus(){if(this._body){const e=this._document.activeElement,o=this._body.nativeElement;return e===o||o.contains(e)}return!1}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(P,12),t.Y36(t.sBO),t.Y36(M),t.Y36(t.s_b),t.Y36(_.K0),t.Y36(C.Qb,8),t.Y36(T,8))},i.\u0275cmp=t.Xpm({type:i,selectors:[["mat-expansion-panel"]],contentQueries:function(e,o,a){if(1&e&&t.Suo(a,J,5),2&e){let s;t.iGM(s=t.CRH())&&(o._lazyContent=s.first)}},viewQuery:function(e,o){if(1&e&&t.Gf(Q,5),2&e){let a;t.iGM(a=t.CRH())&&(o._body=a.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(e,o){2&e&&t.ekj("mat-expanded",o.expanded)("_mat-animation-noopable","NoopAnimations"===o._animationMode)("mat-expansion-panel-spacing",o._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[t._Bn([{provide:P,useValue:void 0}]),t.qOj,t.TTD],ngContentSelectors:$,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(e,o){1&e&&(t.F$t(U),t.Hsn(0),t.TgZ(1,"div",0,1),t.NdJ("@bodyExpansion.done",function(s){return o._bodyAnimationDone.next(s)}),t.TgZ(3,"div",2),t.Hsn(4,1),t.YNc(5,z,0,0,"ng-template",3),t.qZA(),t.Hsn(6,2),t.qZA()),2&e&&(t.xp6(1),t.Q6J("@bodyExpansion",o._getExpandedState())("id",o.id),t.uIk("aria-labelledby",o._headerId),t.xp6(4),t.Q6J("cdkPortalOutlet",o._portal))},directives:[x.Pl],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}\n'],encapsulation:2,data:{animation:[D.bodyExpansion]},changeDetection:0}),i})();class X{}const G=(0,A.sb)(X);let W=(()=>{class i extends G{constructor(e,o,a,s,r,g,h){super(),this.panel=e,this._element=o,this._focusMonitor=a,this._changeDetectorRef=s,this._animationMode=g,this._parentChangeSubscription=E.w0.EMPTY;const d=e.accordion?e.accordion._stateChanges.pipe((0,m.h)(c=>!(!c.hideToggle&&!c.togglePosition))):N.E;this.tabIndex=parseInt(h||"")||0,this._parentChangeSubscription=(0,Y.T)(e.opened,e.closed,d,e._inputChanges.pipe((0,m.h)(c=>!!(c.hideToggle||c.disabled||c.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe((0,m.h)(()=>e._containsFocus())).subscribe(()=>a.focusVia(o,"program")),r&&(this.expandedHeight=r.expandedHeight,this.collapsedHeight=r.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){const e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case b.L_:case b.K5:(0,b.Vb)(e)||(e.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e))}}focus(e,o){e?this._focusMonitor.focusVia(this._element,e,o):this._element.nativeElement.focus(o)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(k,1),t.Y36(t.SBq),t.Y36(F.tE),t.Y36(t.sBO),t.Y36(T,8),t.Y36(C.Qb,8),t.$8M("tabindex"))},i.\u0275cmp=t.Xpm({type:i,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(e,o){1&e&&t.NdJ("click",function(){return o._toggle()})("keydown",function(s){return o._keydown(s)}),2&e&&(t.uIk("id",o.panel._headerId)("tabindex",o.tabIndex)("aria-controls",o._getPanelId())("aria-expanded",o._isExpanded())("aria-disabled",o.panel.disabled),t.Udp("height",o._getHeaderHeight()),t.ekj("mat-expanded",o._isExpanded())("mat-expansion-toggle-indicator-after","after"===o._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===o._getTogglePosition())("_mat-animation-noopable","NoopAnimations"===o._animationMode))},inputs:{tabIndex:"tabIndex",expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},features:[t.qOj],ngContentSelectors:Z,decls:5,vars:1,consts:[[1,"mat-content"],["class","mat-expansion-indicator",4,"ngIf"],[1,"mat-expansion-indicator"]],template:function(e,o){1&e&&(t.F$t(L),t.TgZ(0,"span",0),t.Hsn(1),t.Hsn(2,1),t.Hsn(3,2),t.qZA(),t.YNc(4,j,1,1,"span",1)),2&e&&(t.xp6(4),t.Q6J("ngIf",o._showToggle()))},directives:[_.O5],styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true])::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;border:3px solid;border-radius:4px;content:""}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}\n'],encapsulation:2,data:{animation:[D.indicatorRotate]},changeDetection:0}),i})(),q=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[_.ez,A.BQ,O,x.eL]]}),i})();const ee=["*"];let te=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["aio-expandable-section"]],inputs:{title:"title"},ngContentSelectors:ee,decls:4,vars:1,consts:[[2,"background","inherit"]],template:function(e,o){1&e&&(t.F$t(),t.TgZ(0,"mat-expansion-panel",0)(1,"mat-expansion-panel-header"),t._uU(2),t.qZA(),t.Hsn(3),t.qZA()),2&e&&(t.xp6(2),t.hij(" ",o.title," "))},directives:[k,W],encapsulation:2}),i})(),ne=(()=>{class i{constructor(){this.customElementComponent=te}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[q]]}),i})()}}]);
//# sourceMappingURL=110.0c1cf9cf8e82859a.js.map