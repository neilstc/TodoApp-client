(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{48:function(e,t,a){e.exports=a(82)},53:function(e,t,a){},54:function(e,t,a){},72:function(e,t,a){},77:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(43),c=a.n(r),o=(a(53),a(54),a(3)),s=a(4),i=a(8),m=a(7),u=a(15),d=a(18),p=a.n(d),h="https://pacific-badlands-76024.herokuapp.com",b=new(function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"getUser",value:function(e,t){console.log("send request to backend");return p.a.get("http://localhost:4000/users/".concat(e,"/todos"))}},{key:"registerUser",value:function(e,t){var a={email:e,password:t};return p.a.post("http://localhost:4000/register",a)}},{key:"getTodos",value:function(e){return p.a.get("".concat(h,"/users/").concat(e,"/todos"))}},{key:"getTodo",value:function(e,t){return p.a.get("".concat(h,"/users/").concat(e,"/todos/").concat(t))}},{key:"deleteTodo",value:function(e,t){return p.a.delete("".concat(h,"/users/").concat(e,"/todos/").concat(t))}},{key:"updateTodo",value:function(e,t,a){return p.a.put("".concat(h,"/users/").concat(e,"/todos/").concat(t),a)}},{key:"createTodo",value:function(e,t){return p.a.post("".concat(h,"/users/").concat(e,"/todos"),t)}}]),e}()),E=new(function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"registerSuccessfulLogin",value:function(e,t){sessionStorage.setItem("authenticatedUser",e)}},{key:"registerUser",value:function(e,t){b.registerUser(e,t)}},{key:"logout",value:function(){console.log("user logged out"),sessionStorage.removeItem("authenticatedUser")}},{key:"isUserLogged",value:function(){return!!sessionStorage.getItem("authenticatedUser")}}]),e}()),g=a(2),v=(a(72),a(44)),f=a(45),k=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=E.isUserLogged();return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light bg-light mb-3"},l.a.createElement("div",null,l.a.createElement("a",{href:"https://propit.co.il/",className:"navbar-brand"}," ",l.a.createElement("img",{alt:"PROPIT",src:"data:image/png;base64,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",width:"100",height:"30"}))),l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("span",null,"\xa0\xa0\xa0\xa0\xa0\xa0"),l.a.createElement(v.a,{size:"20px",className:"justifyContent:50px"}),l.a.createElement("span",null,"\xa0\xa0\xa0\xa0\xa0"),l.a.createElement(f.a,{size:"20px",color:"black"}),l.a.createElement("span",null,"\xa0\xa0\xa0\xa0\xa0"),l.a.createElement(l.a.Fragment,null,"077-9985041")),l.a.createElement("ul",{className:"navbar-nav navbar-collapse justify-content-end"},!e&&l.a.createElement("li",{className:"nav-link"},l.a.createElement(u.b,{to:"/login"},"Login")),e&&l.a.createElement("li",{className:"nav-link"},l.a.createElement(u.b,{to:"/logout",onClick:E.logout},"'"))),l.a.createElement("ul",{className:"navbar-nav "},e&&l.a.createElement("li",{className:"nav-item g"},l.a.createElement(u.b,{className:"nav-link ",to:"/welcome"},l.a.createElement("h6",null,"\u05dc\u05d9\u05d3\u05d9\u05dd \u05d7\u05de\u05d9\u05dd \ud83d\udd25")," ")),e&&l.a.createElement("li",{className:"nav-item "},l.a.createElement(u.b,{className:"nav-link",to:"/welcome"},"\u05e7\u05d1\u05dc \u05d4\u05e6\u05e2\u05d5\u05ea \u05d0\u05d9\u05e9\u05d9\u05d5\u05ea")),e&&l.a.createElement("li",{className:"nav-item "},l.a.createElement(u.b,{className:"nav-link",to:"/welcome"},"\u05ea\u05d2\u05de\u05d5\u05dc \u05e9\u05d5\u05ea\u05e4\u05d9\u05dd")),e&&l.a.createElement("li",{className:"nav-item hover-green "},l.a.createElement(u.b,{className:"nav-link",to:"/welcome"},"\u05d4\u05d5\u05e1\u05e4\u05ea \u05e0\u05db\u05e1")),e&&l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{className:"nav-link",to:"/welcome"},"\u05de\u05d7\u05e9\u05d1\u05d5\u05df \u05e9\u05d8\u05d7\u05d9\u05dd")),e&&l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.b,{className:"nav-link",to:"/todos"},"\u05de\u05d5\u05e2\u05d3\u05e4\u05d9\u05dd")),e&&l.a.createElement("div",{className:"btn-group border size=20"},l.a.createElement("a",{className:"btn btn-success"},"\u05de\u05d2\u05d5\u05e8\u05d9\u05dd"),l.a.createElement("a",{className:"btn btn-default"},"\u05de\u05e1\u05d7\u05e8\u05d9"))))))}}]),a}(n.Component),y=Object(g.f)(k),j=a(22),N=a(9),w=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={email:"",password:""},n.handlerOnChange=n.handlerOnChange.bind(Object(N.a)(n)),n.loginClicked=n.loginClicked.bind(Object(N.a)(n)),n.onRegisterClicked=n.onRegisterClicked.bind(Object(N.a)(n)),n}return Object(s.a)(a,[{key:"handlerOnChange",value:function(e){this.setState(Object(j.a)({},e.currentTarget.name,e.currentTarget.value))}},{key:"loginClicked",value:function(e){console.log("clicked"),console.log(this.state),"string"===typeof this.state.email&&"string"===typeof this.state.password&&(E.registerSuccessfulLogin(this.state.email,this.state.password),this.props.history.push("/welcome/:neil/todos"))}},{key:"onRegisterClicked",value:function(e){this.props.history.push("/register")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-3 center"},l.a.createElement("main",{className:"pa4 black-80"},l.a.createElement("div",{className:"measure"},l.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},l.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Sign In"),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6"},"Email"),l.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black  w-100",type:"email",name:"email",id:"email-address",onChange:this.handlerOnChange})),l.a.createElement("div",{className:"mv3"},l.a.createElement("label",{className:"db fw6 lh-copy f6"},"Password"),l.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black w-100",type:"password",name:"password",id:"password",onChange:this.handlerOnChange}))),l.a.createElement("div",{className:""},l.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in",onClick:this.loginClicked})),l.a.createElement("br",null),l.a.createElement("div",{className:"lh-copy mt3"},l.a.createElement("p",{className:"f3 link dim black db",onClick:this.onRegisterClicked},"Register"))))))}}]),a}(n.Component),O=a(25),C=(a(77),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={todos:[],message:""},n.onUpdateClicked=n.onUpdateClicked.bind(Object(N.a)(n)),n.refreshTodos=n.refreshTodos.bind(Object(N.a)(n)),n.refreshTodos=n.refreshTodos.bind(Object(N.a)(n)),n.onAddClicked=n.onAddClicked.bind(Object(N.a)(n)),n.onDeletedClick=n.onDeletedClick.bind(Object(N.a)(n)),n.onCompletedChecked=n.onCompletedChecked.bind(Object(N.a)(n)),n}return Object(s.a)(a,[{key:"onCompletedChecked",value:function(e){console.log("before",e.completed),e.completed=!e.completed,b.updateTodo("neil",e.id.toString(),e),console.log("after",e.completed),this.refreshTodos()}},{key:"onDeletedClick",value:function(e){var t=this;console.log(e),b.deleteTodo("neil",e).then((function(e){t.setState({message:" \ud83d\ude09 \u05d4\u05de\u05e9\u05d9\u05de\u05d4 \u05e0\u05de\u05d7\u05e7\u05d4 \u05dc\u05d0 \u05e8\u05d0\u05d9\u05e0\u05d5 \u05db\u05dc\u05d5\u05dd"}),t.refreshTodos()}))}},{key:"onAddClicked",value:function(){this.props.history.push("/todos/-1")}},{key:"onUpdateClicked",value:function(e){this.props.history.push("/todos/".concat(e))}},{key:"refreshTodos",value:function(){var e=this;b.getTodos(" ").then((function(t){return e.setState({todos:t.data})}))}},{key:"componentDidMount",value:function(){this.refreshTodos()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h1",null," \xa0\u05e0\u05d9\u05d4\u05d5\u05dc \u05de\u05e9\u05d9\u05de\u05d5\u05ea "),l.a.createElement("div",{className:"container"},l.a.createElement("input",{className:"form-control w-90 input-field fa f-usericon",type:"text",placeholder:"...\u05d7\u05d9\u05e4\u05d5\u05e9 \u05de\u05e9\u05d9\u05de\u05d4","aria-label":"Search",style:{width:"1115px"}})),l.a.createElement("td",null,l.a.createElement("p",null," \xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0")),this.state.message&&l.a.createElement("div",{className:" alert alert-success"}," ",this.state.message," "),l.a.createElement("div",{className:"container"},l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-success ",onClick:this.onAddClicked},"\u05de\u05e9\u05d9\u05de\u05d4 \u05d7\u05d3\u05e9\u05d4")),l.a.createElement("td",null,l.a.createElement("p",null," \xa0 \xa0\xa0")),l.a.createElement("td",null," ",l.a.createElement("p",null," \u05d4\u05d9\u05e1\u05d8\u05d5\u05e8\u05d9\u05ea \u05d4\u05e1\u05db\u05de\u05d9\u05dd")),l.a.createElement("td",null,l.a.createElement("p",null," \xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0")),l.a.createElement("td",null,l.a.createElement("p",null," \xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0")),l.a.createElement("td",null,l.a.createElement("p",null," \xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0")),l.a.createElement("td",null,l.a.createElement("p",null," \xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0")),l.a.createElement("td",null,l.a.createElement("p",null," \xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0")),l.a.createElement("td",null,l.a.createElement("p",null," \xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0")),l.a.createElement("td",null,l.a.createElement("p",null," \xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0")),l.a.createElement("td",null,l.a.createElement("p",null," \xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0")),l.a.createElement("td",null," ",l.a.createElement("p",null," ",l.a.createElement("strong",null,":\u05e8\u05e9\u05d9\u05de\u05ea \u05d4\u05dc\u05e7\u05d7\u05d5\u05ea \u05e9\u05dc\u05da")))),l.a.createElement("table",{className:"table shadow-3"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"  "),l.a.createElement("th",null,"   "),l.a.createElement("th",null," ",l.a.createElement("strong",null," \u05e4\u05e2\u05d5\u05dc\u05d5\u05ea")),l.a.createElement("th",null," ",l.a.createElement("strong",null,"\u05ea\u05d0\u05e8\u05d9\u05da \u05d9\u05e6\u05d9\u05e8\u05ea \u05de\u05e9\u05d9\u05de\u05d4"),"  "),l.a.createElement("th",null,"  ",l.a.createElement("strong",null,"?\u05d4\u05d5\u05e9\u05dc\u05dd ")),l.a.createElement("th",null,l.a.createElement("strong",null," \u05ea\u05d9\u05d0\u05d5\u05e8")," "),l.a.createElement("th",null,l.a.createElement("strong",null," \u05de\u05e1\u05f3")," "))),l.a.createElement("tbody",null,this.state.todos.map((function(t){return l.a.createElement("tr",{key:t.id,className:"hover-bg-green "},l.a.createElement("td",null,l.a.createElement(O.a,{className:"pointer",onClick:function(){return e.onDeletedClick(t.id)}})),l.a.createElement("td",null," ",l.a.createElement(O.c,{className:"pointer",onClick:function(a){return e.onUpdateClicked(t.id)}})),l.a.createElement("td",null," ",l.a.createElement(O.b,{className:"pointer  ",onClick:function(a){return e.onUpdateClicked(t.id)}})),l.a.createElement("td",null,t.targetDate.toString()," "),l.a.createElement("td",null,l.a.createElement("input",{name:"isCompleted",type:"checkbox",checked:t.completed,onChange:function(){return e.onCompletedChecked(t)}})),l.a.createElement("td",null,t.text," "),l.a.createElement("td",null,t.id," "))}))))))}}]),a}(n.Component)),S=a(30),U=a.n(S),q=a(26),W=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={id:n.props.match.params.id,text:" ",targetDate:U()(new Date).format("DD.MM.YYYY")},n}return Object(s.a)(a,[{key:"validate",value:function(e){var t={};return e.description||(t="Enter a decription"),t}},{key:"componentDidMount",value:function(){var e=this;-1!==parseInt(this.state.id)&&b.getTodo("neil",this.state.id).then((function(t){console.log(t.data.targetDate),console.log(t.data.text),e.setState({targetDate:t.data.targetDate,text:t.data.text})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.text,n=t.targetDate;return l.a.createElement("div",null,l.a.createElement(q.b,{initialValues:{text:a,targetDate:n},validateOnChange:!1,validateOnBlur:!1,enableReinitialize:!0,onSubmit:function(t,a){var n={id:parseInt(e.state.id,10),text:t.text,targetDate:U()(t.targetDate).format("DD.MM.YYYY"),completed:!1};console.log(parseInt(e.state.targetDate)),-1===parseInt(e.state.id)?b.createTodo("neil",n).then((function(t){console.log(t.data),e.props.history.push("/todos")})):b.updateTodo("neil",e.state.id,n).then((function(){return e.props.history.push("/todos")}))}},(function(e){return l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement("fieldset",{className:"form-group"},l.a.createElement("label",null,"Target Date"),l.a.createElement(q.a,{className:"form-control",type:"date",name:"targetDate"})),l.a.createElement("fieldset",{className:"form-group"},l.a.createElement("label",null," Description "),l.a.createElement(q.a,{className:"form-control",type:"text",name:"text"})),e.errors.text&&l.a.createElement("div",{id:"feedback"},e.errors.text),l.a.createElement("button",{className:"btn btn-success",type:"submit"},"Save"))})))}}]),a}(n.Component),x=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={email:"",password:""},n.handlerOnChange=n.handlerOnChange.bind(Object(N.a)(n)),n.onSubmitClicked=n.onSubmitClicked.bind(Object(N.a)(n)),n}return Object(s.a)(a,[{key:"onSubmitClicked",value:function(e){console.log("clicked"),console.log(this.state),E.registerUser(this.state.email,this.state.password),this.props.history.push("/todos")}},{key:"handlerOnChange",value:function(e){this.setState(Object(j.a)({},e.currentTarget.name,e.currentTarget.value))}},{key:"render",value:function(){return l.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-3 center"},l.a.createElement("main",{className:"pa4 black-80"},l.a.createElement("div",{className:"measure"},l.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},l.a.createElement("legend",{className:"f4 fw6 ph0 mh0"}," Register "),l.a.createElement("div",{className:"mv3"},l.a.createElement("label",{className:"db fw6 lh-copy f6"},"Name"),l.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent w-100",type:"text",name:"name",id:"name",onChange:this.handlerOnChange})),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6"},"Email"),l.a.createElement("input",{className:"pa2 input-reset ba bg-transparent   w-100",type:"email",name:"email",id:"email-address",onChange:this.handlerOnChange})),l.a.createElement("div",{className:"mv3"},l.a.createElement("label",{className:"db fw6 lh-copy f6"},"Password"),l.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent  w-100",type:"password",name:"password",id:"password",onChange:this.handlerOnChange}))),l.a.createElement("div",{className:""},l.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in",onClick:this.onSubmitClicked})))))}}]),a}(n.Component),A=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null," Logged out! "),l.a.createElement("div",{className:"container"},"BYE!."))}}]),a}(n.Component),T=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement("footer",{className:"footer"},l.a.createElement("span",{className:"text-muted"},' "need that job" @Neil Michaeli ')))}}]),a}(n.Component),D=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null," Somethiong went wrong ")}}]),a}(n.Component),z=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=E.isUserLogged();return console.log(e),l.a.createElement("div",{className:"TodoApp"},l.a.createElement(u.a,null,l.a.createElement(y,null),l.a.createElement(g.c,null,l.a.createElement(g.a,{path:"/",exact:!0,component:w}),l.a.createElement(g.a,{path:"/login",component:w}),l.a.createElement(g.a,{path:"/register",component:x}),e&&l.a.createElement(g.a,{path:"/welcome/:username",component:C}),e&&l.a.createElement(g.a,{path:"/todos/:id",component:W}),e&&l.a.createElement(g.a,{path:"/todos",component:C}),e&&l.a.createElement(g.a,{path:"/logout",onClick:E.logout,component:A}),l.a.createElement(g.a,{path:"/error",component:D})),l.a.createElement(T,null)))}}]),a}(n.Component);a(80);var I=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(z,null))};a(81),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.cc7022a1.chunk.js.map