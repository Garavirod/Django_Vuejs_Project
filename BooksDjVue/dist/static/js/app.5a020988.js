(function(t){function e(e){for(var s,i,n=e[0],l=e[1],c=e[2],u=0,v=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(v.length)v.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],s=!0,i=1;i<o.length;i++){var l=o[i];0!==r[l]&&(s=!1)}s&&(a.splice(e--,1),t=n(n.s=o[0]))}return t}var s={},r={app:0},a=[];function i(t){return n.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e9bea09e"}[t]+".js"}function n(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.e=function(t){var e=[],o=r[t];if(0!==o)if(o)e.push(o[2]);else{var s=new Promise((function(e,s){o=r[t]=[e,s]}));e.push(o[2]=s);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.src=i(t);var c=new Error;a=function(e){l.onerror=l.onload=null,clearTimeout(u);var o=r[t];if(0!==o){if(o){var s=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",c.name="ChunkLoadError",c.type=s,c.request=a,o[1](c)}r[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(e)},n.m=t,n.c=s,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(o,s,function(e){return t[e]}.bind(null,s));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var s=o("85ec"),r=o.n(s);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),o("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),o("router-link",{attrs:{to:"/books"}},[t._v("List Books")])],1),o("router-view")],1)},a=[],i=(o("034f"),o("2877")),n={},l=Object(i["a"])(n,r,a,!1,null,null,null),c=l.exports,u=(o("d3b7"),o("8c4f")),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},v=[],p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[o("h1",[t._v(t._s(t.msg))]),t._m(0),o("h3",[t._v("Installed CLI Plugins")]),t._m(1),o("h3",[t._v("Essential Links")]),t._m(2),o("h3",[t._v("Ecosystem")]),t._m(3)])},m=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),o("br"),t._v(" check out the "),o("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[t._v("vuex")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("li",[o("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),o("li",[o("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),o("li",[o("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),o("li",[o("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),o("li",[o("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[o("li",[o("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),o("li",[o("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),o("li",[o("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),o("li",[o("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],b={name:"HelloWorld",props:{msg:String}},f=b,h=(o("7def"),Object(i["a"])(f,p,m,!1,null,"1935ec24",null)),k=h.exports,g={name:"Home",components:{HelloWorld:k}},_=g,w=Object(i["a"])(_,d,v,!1,null,null,null),C=w.exports,y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"conatiner"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col text-left"},[o("h2",[t._v("Books List")]),o("b-button",{staticClass:"m-2",attrs:{size:"sm",variant:"info",pill:"",to:{name:"NewBook"}}},[t._v("Register a book")]),o("div",{staticClass:"col-md-12"},[o("b-table",{attrs:{striped:"",hover:"",items:t.books,fields:t.fields},scopedSlots:t._u([{key:"cell(action)",fn:function(e){return[o("b-button",{staticClass:"mr-2",attrs:{size:"sm",variant:"primary",pill:"",to:{name:"EditBook",params:{bookId:e.item.id}}}},[t._v(" Edit")]),o("b-button",{attrs:{size:"sm",variant:"danger",pill:"",to:{name:"DeleteBook",params:{bookId:e.item.id}}}},[t._v("Delete")])]}}])})],1)],1)])])},x=[],j={data:function(){return{fields:[{key:"title",label:"Título"},{key:"description",label:"Descripción"},{key:"action",label:""}],books:[]}},methods:{getBooks:function(){var t=this;this.axios.get("books/").then((function(e){t.books=e.data})).catch((function(t){console.log(t)}))}},created:function(){this.getBooks()}},D=j,E=Object(i["a"])(D,y,x,!1,null,null,null),T=E.exports,B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col text-left"},[o("h2",[t._v("Edit book")]),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:t.alert.color},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(t._s(t.alert.message))])],1)]),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("b-card",{attrs:{"border-variant":"primary",header:t.book.title,"header-bg-variant":"primary","header-text-variant":"white",align:"center"}},[o("b-card-text",[t._v("This is the infromation about the book")]),o("form",{on:{submit:t.onSubmit}},[o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("Title")]),o("div",{staticClass:"col-sm-6"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.book.title,expression:"book.title",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Title",name:"title"},domProps:{value:t.book.title},on:{input:function(e){e.target.composing||t.$set(t.book,"title",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"description"}},[t._v("Description")]),o("div",{staticClass:"col-sm-6"},[o("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.book.description,expression:"book.description",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{name:"description",rows:"3",placeholder:"Description"},domProps:{value:t.book.description},on:{input:function(e){e.target.composing||t.$set(t.book,"description",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),o("div",{staticClass:"row"},[o("div",{staticClass:"col text-right"},[o("b-button",{attrs:{type:"submit",variant:"primary",pill:"",disabled:!!t.validaCampos()}},[t._v("Update")]),o("b-button",{staticClass:"ml-1",attrs:{type:"submit",variant:"warning",pill:"",to:{name:"ListBook"}}},[t._v("Back to List")])],1)])])],1)],1)])])])])},O=[],$=(o("a4d3"),o("e01a"),o("bc3a")),S=o.n($),R=o("1940"),A=o.n(R),I={data:function(){return{bookId:this.$route.params.bookId,book:{title:"",description:""},alert:{color:"",message:""},dismissSecs:5,dismissCountDown:0}},methods:{onSubmit:function(t){var e=this;t.preventDefault();var o="books/".concat(this.bookId,"/");S.a.put(o,this.book).then((function(t){e.book.title=t.data.title,e.book.description=t.data.description,e.alert.color="success",e.alert.message="The book was updated successfuly !",swal("The book was updated succesfuly","","success")})).catch((function(t){console.log("THERE WAS AN ERROR >:"+t),e.alert.color="danger",e.alert.message="There was an error for updating the book"})),this.showAlert()},getBook:function(){var t=this,e="books/".concat(this.bookId,"/");S.a.get(e).then((function(e){t.book.title=e.data.title,t.book.description=e.data.description})).catch((function(t){console.log("THERE WAS AN ERROR >:"+t)}))},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},validaCampos:function(){var t=!1;return""==this.book.description||""==this.book.title||t}},created:function(){this.getBook()}},P=I,L=Object(i["a"])(P,B,O,!1,null,null,null),N=L.exports,H=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("h3",[t._v("Are you sure you wish delete this book?")]),o("p",[t._v("Title : "+t._s(this.bookDelete.title))]),o("p",[t._v("Description : "+t._s(this.bookDelete.description))])])]),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("b-button",{attrs:{variant:"danger"},on:{click:t.deleteBook}},[t._v(" Delete Book ")])],1)])])},W=[],U={data:function(){return{bookId:this.$route.params.bookId,bookDelete:{title:"",description:""}}},methods:{getBook:function(){var t=this,e="books/".concat(this.bookId,"/");S.a.get(e).then((function(e){t.bookDelete.title=e.data.title,t.bookDelete.description=e.data.description})).catch((function(t){console.log("THERE WAS AN ERROR >:"+t)}))},deleteBook:function(){var t="books/".concat(this.bookId,"/");S.a.delete(t).then((function(t){location.href="/books"})).catch((function(t){A()("It couldn't delete the book","","error"),console.log(t)}))}},created:function(){this.getBook()}},z=U,M=Object(i["a"])(z,H,W,!1,null,null,null),F=M.exports,J=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col text-left"},[o("h2",[t._v("New book")]),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:t.alert.color},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(t._s(t.alert.message))])],1)]),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("b-card",{attrs:{"border-variant":"primary",header:t.book.title,"header-bg-variant":"primary","header-text-variant":"white",align:"center"}},[o("b-card-text",[t._v("This is the infromation about the book")]),o("form",{on:{submit:t.onSubmit}},[o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("Title")]),o("div",{staticClass:"col-sm-6"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.book.title,expression:"book.title",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Title",name:"title"},domProps:{value:t.book.title},on:{input:function(e){e.target.composing||t.$set(t.book,"title",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"description"}},[t._v("Description")]),o("div",{staticClass:"col-sm-6"},[o("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.book.description,expression:"book.description",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{name:"description",rows:"3",placeholder:"Description"},domProps:{value:t.book.description},on:{input:function(e){e.target.composing||t.$set(t.book,"description",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),o("div",{staticClass:"row"},[o("div",{staticClass:"col text-right"},[o("b-button",{attrs:{type:"submit",variant:"primary",pill:"",disabled:!!t.validaCampos()}},[t._v("Create")]),o("b-button",{staticClass:"ml-1",attrs:{type:"submit",variant:"warning",pill:"",to:{name:"ListBook"}}},[t._v("Back to List")])],1)])])],1)],1)])])])])},q=[],V=(o("b0c0"),{data:function(){return{book:{title:"",description:""},alert:{color:"",message:""},dismissSecs:5,dismissCountDown:0}},methods:{onSubmit:function(t){var e=this;t.preventDefault();var o="books/";S.a.post(o,this.book).then((function(t){e.book.title=t.data.title,e.book.description=t.data.description,e.alert.color="success",e.alert.message="The book was updated successfuly !",swal("The book was created succesfuly","","success")})).catch((function(t){console.log("THERE WAS AN ERROR >:"+t),e.alert.color="danger",e.alert.message="There was an error for creating the book"})),this.showAlert()},validaCampos:function(){var t=!1;return""==this.book.description||""==this.book.name||t},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}}}),Y=V,G=Object(i["a"])(Y,J,q,!1,null,null,null),K=G.exports;s["default"].use(u["a"]);var Q=[{path:"/",name:"Home",component:C},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}},{path:"/books",name:"ListBook",component:T},{path:"/books/:bookId/edit",name:"EditBook",component:N},{path:"/books/:bookId/delete",name:"DeleteBook",component:F},{path:"/books/new",name:"NewBook",component:K}],X=new u["a"]({mode:"history",base:"/",routes:Q}),Z=X,tt=o("2f62");s["default"].use(tt["a"]);var et=new tt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ot=o("5f5b"),st=o("a7fe"),rt=o.n(st);o("f9e3"),o("2dd8");s["default"].use(ot["a"]),s["default"].use(rt.a,S.a),S.a.defaults.baseURL="http://localhost:8000/api/v1.0/",s["default"].config.productionTip=!1,new s["default"]({router:Z,store:et,render:function(t){return t(c)}}).$mount("#app")},"7def":function(t,e,o){"use strict";var s=o("8e33"),r=o.n(s);r.a},"85ec":function(t,e,o){},"8e33":function(t,e,o){}});
//# sourceMappingURL=app.5a020988.js.map