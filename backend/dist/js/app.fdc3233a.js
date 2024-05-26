(function(){"use strict";var t={4268:function(t,n,e){var r=e(5130),o=e(6768);const a={id:"app"};function i(t,n,e,r,i,u){const c=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",a,[(0,o.bF)(c)])}var u={},c=e(1241);const s=(0,c.A)(u,[["render",i]]);var l=s,f=e(1387),d=e.p+"img/ship.e4049565.png";const p=t=>((0,o.Qi)("data-v-09315886"),t=t(),(0,o.jt)(),t),b={class:"landing-page"},v=p((()=>(0,o.Lk)("nav",{class:"navbar"},[(0,o.Lk)("div",{class:"container"},[(0,o.Lk)("img",{alt:"Logo",src:d,class:"logo"})])],-1))),g={class:"hero-section"},m={class:"container"},k=p((()=>(0,o.Lk)("h1",null,"Titanic Survival Prediction",-1))),h=p((()=>(0,o.Lk)("p",null,"A ML model to predict if you will survive the Crash !",-1))),L={class:"button-container"},y=p((()=>(0,o.Lk)("button",{class:"cta-button"},"Wish me Luck 💪🏼",-1))),_=p((()=>(0,o.Lk)("button",{class:"cta-button"},"Learn Basics ⚒️",-1)));function I(t,n,e,r,a,i){const u=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",b,[v,(0,o.Lk)("div",g,[(0,o.Lk)("div",m,[k,h,(0,o.Lk)("div",L,[(0,o.bF)(u,{to:"/predict"},{default:(0,o.k6)((()=>[y])),_:1}),(0,o.bF)(u,{to:"/basics"},{default:(0,o.k6)((()=>[_])),_:1})])])])])}var F={name:"LandingPage"};const O=(0,c.A)(F,[["render",I],["__scopeId","data-v-09315886"]]);var w=O;const E=(0,o.Lk)("h1",null,"Predict Page",-1),j=(0,o.Lk)("button",{class:"cta-button"},"Back 🤛🏼",-1),A=(0,o.Lk)("label",{for:"stringInput"},"Enter a String:",-1),S=(0,o.Lk)("label",{for:"integerInput"},"Enter an Integer:",-1),C=(0,o.Lk)("button",{type:"submit",class:"cta-button"},"Submit",-1);function P(t,n,e,a,i,u){const c=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",null,[E,(0,o.bF)(c,{to:"/"},{default:(0,o.k6)((()=>[j])),_:1}),(0,o.Lk)("form",{onSubmit:n[2]||(n[2]=(0,r.D$)(((...t)=>u.submitForm&&u.submitForm(...t)),["prevent"]))},[A,(0,o.bo)((0,o.Lk)("input",{type:"text",id:"stringInput","onUpdate:modelValue":n[0]||(n[0]=t=>i.stringInput=t)},null,512),[[r.Jo,i.stringInput]]),S,(0,o.bo)((0,o.Lk)("input",{type:"number",id:"integerInput","onUpdate:modelValue":n[1]||(n[1]=t=>i.integerInput=t)},null,512),[[r.Jo,i.integerInput,void 0,{number:!0}]]),C],32)])}var B=e(8355),x={data(){return{stringInput:"",integerInput:null}},methods:{async submitForm(){try{const t=await B.A.post("http://127.0.0.1:8000/submit-form",{string_input:this.stringInput,integer_input:this.integerInput});console.log(t.data)}catch(t){console.error("Error submitting form:",t)}}}};const D=(0,c.A)(x,[["render",P]]);var T=D,M=e(4232);const X={id:"app"},V=(0,o.Lk)("h2",null,"Value:",-1),J={class:"button-container"},U=(0,o.Lk)("button",{class:"cta-button"},"Back 🤛🏼",-1);function Q(t,n,e,r,a,i){const u=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",X,[V,(0,o.Lk)("h1",null,(0,M.v_)(a.messageFromBackend),1),(0,o.Lk)("div",J,[(0,o.Lk)("button",{class:"cta-button",onClick:n[0]||(n[0]=(...t)=>i.fetchData&&i.fetchData(...t))},"Fetch Data from Backend"),(0,o.bF)(u,{to:"/"},{default:(0,o.k6)((()=>[U])),_:1})])])}var W={name:"App",data(){return{messageFromBackend:""}},methods:{fetchData(){B.A.get("http://127.0.0.1:8000").then((t=>{this.messageFromBackend=t.data.message})).catch((t=>{console.error("Error fetching data from backend:",t)}))}}};const $=(0,c.A)(W,[["render",Q]]);var q=$;const z=[{path:"/",component:w},{path:"/predict",component:T},{path:"/basics",component:q}],G=(0,f.aE)({history:(0,f.LA)(),routes:z});(0,r.Ef)(l).use(G).mount("#app")}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return t[r].call(a.exports,a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(n,r,o,a){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],a=t[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(e.O).every((function(t){return e.O[t](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){t.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,o,a]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={524:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var o,a,i=r[0],u=r[1],c=r[2],s=0;if(i.some((function(n){return 0!==t[n]}))){for(o in u)e.o(u,o)&&(e.m[o]=u[o]);if(c)var l=c(e)}for(n&&n(r);s<i.length;s++)a=i[s],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(l)},r=self["webpackChunkvue_frontend"]=self["webpackChunkvue_frontend"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[504],(function(){return e(4268)}));r=e.O(r)})();
//# sourceMappingURL=app.fdc3233a.js.map