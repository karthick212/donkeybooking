(this.webpackJsonpkevell=this.webpackJsonpkevell||[]).push([[0],{30:function(e,t,a){e.exports=a(60)},35:function(e,t,a){},36:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(26),o=a.n(s),c=(a(35),a(8)),l=a(9),i=a(11),m=a(10),u=a(29),d=(a(36),a(27)),g=a(62),h=a(63),p=a(64),E=a(65),f=a(12),v=a.n(f),b=(a(54),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).clear=function(){var e=n.state;e.isEdit=!1,Object.keys(e).forEach((function(t){"error"!==t&&(e[t]="")})),n.setState({data:e}),n.autoinc()},n.onChange=function(e){n.setState(Object(d.a)({},e.target.name,e.target.value))},n.validateFields=function(){var e=n.state,t=n.state.error;Object.keys(t).forEach((function(e){t[e]=""}));var a=!1;return""===e.username&&(t.username="Please Fill UserName",a=!0),""===e.age&&(t.age="Please Fill Age",a=!0),""===e.designation&&(t.designation="Please Fill Designation",a=!0),n.setState({error:t}),console.log(a),a},n.getUser=function(){v.a.get(n.props.serverURL+"/api/getUser",{params:{code:n.state.code}}).then((function(e){console.log(e);var t=n.state,a=e.data.data[0];"success"===e.data.status&&(t.username=a.username,t.age=a.age,t.designation=a.designation,t.isEdit=!0,n.setState({data:t}))}))},n.onSubmit=function(e){if(e.preventDefault(),!n.validateFields()){var t=n.state,a=(n.state.error,n.state.isEdit?n.props.serverURL+"/api/updateuser":n.props.serverURL+"/api/adduser");v.a.post(a,t).then((function(e){"success"===e.data.status?(n.state.isEdit?alert("Successfully Updated..!!"):alert("Successfully Inserted..!!"),n.autoinc(),n.clear()):alert("Connection Error..!")}))}},n.autoinc=function(){v.a.get(n.props.serverURL+"/api/adduser/auto").then((function(e){console.log(e),n.setState({code:e.data[0].id})}))},n.componentDidMount=function(){n.autoinc()},n.state={code:"",username:"",age:"",designation:"",isEdit:!1,error:{username:"",age:"",designation:"",errmsg:""}},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row text-left centerscreen"},r.a.createElement("div",{className:"col-4"}),r.a.createElement("div",{className:"col-4"},r.a.createElement(g.a,null,r.a.createElement(h.a,{tag:"h4"},"CRUD Operations (Test)"),r.a.createElement(p.a,{className:"padding-20 font-weight-bold"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"UserCode"),r.a.createElement("input",{name:"code",type:"text",className:"form-control",onChange:this.onChange,value:this.state.code})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"User Name"),r.a.createElement("input",{name:"username",type:"text",className:"form-control",onChange:this.onChange,value:this.state.username}),""!==this.state.error.username?r.a.createElement("span",{className:"error"},this.state.error.username):""),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Age"),r.a.createElement("input",{name:"age",type:"number",className:"form-control",onChange:this.onChange,value:this.state.age}),""!==this.state.error.age?r.a.createElement("span",{className:"error"},this.state.error.age):""),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Designation"),r.a.createElement("input",{name:"designation",type:"text",className:"form-control",onChange:this.onChange,value:this.state.designation}),""!==this.state.error.designation?r.a.createElement("span",{className:"error"},this.state.error.designation):""),r.a.createElement("div",{className:"text-right"},r.a.createElement(E.a,{color:"primary",onClick:this.onSubmit},"Submit"),"  ",r.a.createElement(E.a,{color:"primary",onClick:this.getUser},"GetData"),"  ",r.a.createElement(E.a,{color:"secondary",onClick:this.clear},"Clear")),""!==this.state.error.errmsg?r.a.createElement("span",{className:"error"},this.state.error.errmsg):""))),r.a.createElement("div",{className:"col-4"})))}}]),a}(r.a.Component)),N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={serverURL:"http://18.213.86.227:4000"},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,{basename:"Test"},r.a.createElement(b,this.state))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.dbb51646.chunk.js.map