(function(){"use strict";var e={743:function(e,r,t){var n=t(9242),a=t(3396);const i={class:"menu"},s=(0,a._)("label",{class:"menu__create",for:"create"},[(0,a._)("h1",null,"Добавить нового игрока")],-1),l=(0,a._)("label",{class:"menu__edit",for:"edit"},[(0,a._)("h1",null,"Редактирование игроков")],-1);function o(e,r,t,o,u,c){const p=(0,a.up)("CreatePlayer"),y=(0,a.up)("EditPlayers");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",i,[(0,a._)("input",{onClick:r[0]||(r[0]=(...e)=>c.showMenu&&c.showMenu(...e)),class:"menu__input",type:"radio",name:"menu",id:"create",value:"create",checked:""}),s,(0,a._)("input",{onClick:r[1]||(r[1]=(...e)=>c.showMenu&&c.showMenu(...e)),class:"menu__input",type:"radio",name:"menu",id:"edit",value:"edit"}),l]),(0,a.wy)((0,a.Wm)(p,{onCreatePlayer:c.createPlayers,playersList:u.playersList,onSetCreatePlayerError:e.setCreatePlayerError},null,8,["onCreatePlayer","playersList","onSetCreatePlayerError"]),[[n.F8,u.showCreate]]),(0,a.wy)((0,a.Wm)(y,{onChangeName:c.changeName,onPlusLife:c.plusLife,onMinusLife:c.minusLife,playersList:u.playersList},null,8,["onChangeName","onPlusLife","onMinusLife","playersList"]),[[n.F8,u.showEdit]])],64)}t(7658);const u={class:"create row"};function c(e,r,t,i,s,l){const o=(0,a.up)("ErrorMessage");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("form",u,[(0,a.wy)((0,a._)("input",{class:"create__input",id:"name",type:"text",onInput:r[0]||(r[0]=(...e)=>l.clearError&&l.clearError(...e)),"onUpdate:modelValue":r[1]||(r[1]=e=>s.players_name=e),placeholder:"Имя"},null,544),[[n.nr,s.players_name]]),(0,a.wy)((0,a._)("input",{class:"create__input",id:"life",type:"number",min:"0",onInput:r[2]||(r[2]=(...e)=>l.clearError&&l.clearError(...e)),"onUpdate:modelValue":r[3]||(r[3]=e=>s.players_life=e),placeholder:"Жизней"},null,544),[[n.nr,s.players_life]]),(0,a._)("button",{class:"create__btn",type:"submit",onClick:r[4]||(r[4]=(...e)=>l.createPlayer&&l.createPlayer(...e))},"Создать")]),(0,a.Wm)(o,{message:s.createPlayerError},null,8,["message"])])}var p=t(7139);const y={class:"error"};function f(e,r,t,n,i,s){return(0,a.wg)(),(0,a.iD)("span",y,(0,p.zw)(t.message),1)}var h={name:"ErrorMessage",props:{message:{type:Array}}},m=t(89);const d=(0,m.Z)(h,[["render",f]]);var _=d,v={name:"CreatePlayer",components:{ErrorMessage:_},props:{playersList:{type:Array}},data(){return{players_name:"",players_life:"",createPlayerError:""}},methods:{createPlayer(e){e.preventDefault(),""!==this.players_name&&void 0!==this.players_name?""!==this.players_life&&void 0!==this.players_life?this.players_life<=0?this.createPlayerError="Значение жизней не может быть меньше или равно нулю":this.playersList.map((e=>e.name)).includes(this.players_name)?this.createPlayerError="Пользователь с таким именем уже существует":(this.$emit("create-player",this.players_name,this.players_life),this.players_name="",this.players_life=""):this.createPlayerError="Укажите количество жизней":this.createPlayerError="Укажите имя"},clearError(){this.createPlayerError=""}}};const g=(0,m.Z)(v,[["render",c]]);var w=g;const E={class:"edit row"},L=["value","onChange"],P=["onClick"],C={class:"edit__lifeCount"},b=["onClick"],k=(0,a._)("h2",null,"Рейтинг",-1),x=["textContent"];function M(e,r,t,i,s,l){const o=(0,a.up)("ErrorMessage");return(0,a.wg)(),(0,a.iD)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.playersList,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t},[(0,a._)("div",E,[(0,a._)("input",{class:"edit__name",id:"name",type:"text",onInput:r[0]||(r[0]=(...e)=>l.clearError&&l.clearError(...e)),value:e.name,onChange:e=>l.changeName(t,e.target.value)},null,40,L),(0,a._)("button",{class:"edit__button",href:"#",onClick:(0,n.iM)((e=>l.minusLife(t)),["prevent"])},"-",8,P),(0,a._)("span",C,(0,p.zw)(e.life),1),(0,a._)("button",{class:"edit__button",href:"#",onClick:(0,n.iM)((e=>l.plusLife(t)),["prevent"])},"+",8,b)]),t===this.unValidIndex?((0,a.wg)(),(0,a.j4)(o,{key:0,message:s.editPlayerErorr},null,8,["message"])):(0,a.kq)("",!0)])))),128)),k,(0,a._)("table",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.rating,((e,r)=>((0,a.wg)(),(0,a.iD)("tr",{key:r},[(0,a._)("td",{textContent:(0,p.zw)(`${l.rating.map((e=>e.life)).indexOf(e.life)+1}`)},null,8,x),(0,a._)("td",null,[(0,a.Uk)("У игрока "),(0,a._)("b",null,(0,p.zw)(e.name),1),(0,a.Uk)(" "+(0,p.zw)(e.life)+" жизней",1)])])))),128))])])}var O={name:"EditPlayers",components:{ErrorMessage:_},props:{playersList:{type:Array}},data(){return{editPlayerErorr:"",unValidIndex:0}},computed:{rating(){let e=(e,r)=>e.map(((e,r)=>({item:e,index:r}))).sort(((e,t)=>r(e.item,t.item)||e.index-t.index)).map((({item:e})=>e));return e(this.playersList,((e,r)=>r.life-e.life))}},methods:{plusLife(e){this.$emit("plus-life",e)},minusLife(e){this.$emit("minus-life",e)},changeName(e,r){return this.playersList.filter((r=>this.playersList.indexOf(r)!==e)).map((e=>e.name)).includes(r)?(this.unValidIndex=e,this.editPlayerErorr="Пользователь с таким именем уже существует",r):(this.$emit("change-name",e,r),r)},clearError(){this.editPlayerErorr=""}}};const D=(0,m.Z)(O,[["render",M]]);var j=D,N={name:"App",components:{CreatePlayer:w,EditPlayers:j},data(){return{playersList:[],showCreate:!0,showEdit:!1}},methods:{createPlayers(e,r){this.playersList.push({name:e,life:r})},showMenu(){let e=document.getElementsByName("menu");for(let r of e)r.checked&&("create"===r.value?(this.showCreate=!0,this.showEdit=!1):"edit"===r.value&&(this.showEdit=!0,this.showCreate=!1))},changeName(e,r){this.playersList[e].name=r},plusLife(e){this.playersList[e].life++},minusLife(e){this.playersList[e].life>0?this.playersList[e].life--:this.playersList[e].life=0}}};const I=(0,m.Z)(N,[["render",o]]);var z=I;(0,n.ri)(z).mount("#app")}},r={};function t(n){var a=r[n];if(void 0!==a)return a.exports;var i=r[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(r,n,a,i){if(!n){var s=1/0;for(c=0;c<e.length;c++){n=e[c][0],a=e[c][1],i=e[c][2];for(var l=!0,o=0;o<n.length;o++)(!1&i||s>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[o])}))?n.splice(o--,1):(l=!1,i<s&&(s=i));if(l){e.splice(c--,1);var u=a();void 0!==u&&(r=u)}}return r}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,a,i]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={143:0};t.O.j=function(r){return 0===e[r]};var r=function(r,n){var a,i,s=n[0],l=n[1],o=n[2],u=0;if(s.some((function(r){return 0!==e[r]}))){for(a in l)t.o(l,a)&&(t.m[a]=l[a]);if(o)var c=o(t)}for(r&&r(n);u<s.length;u++)i=s[u],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(c)},n=self["webpackChunkplayers"]=self["webpackChunkplayers"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(743)}));n=t.O(n)})();
//# sourceMappingURL=app.bf0994e6.js.map