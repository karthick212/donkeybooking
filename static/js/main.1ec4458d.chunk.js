(this.webpackJsonptarnea=this.webpackJsonptarnea||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(20),l=a.n(s),o=(a(67),a(5)),i=a(6),c=a(8),m=a(7),d=a(13),u=a(25),p=(a(68),a(16)),h=Object(p.a)(),E=r.a.createContext(),v=a(11),g=(a(32),a(55)),f=new u.a,b=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onClick=function(){f.remove("login"),window.location.reload()},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.context.userdata,a={"second-level-node-1":{label:"Stores",index:0,url:"/Stores",access:"Owner"},"second-level-node-2":{label:"Employees",index:1,url:"/Employees",access:"Owner"},"second-level-node-3":{label:"Suppliers",index:2,url:"/Suppliers",access:"Owner,Manager"},"second-level-node-4":{label:"Customers",index:3,url:"/Customers",access:"Owner,Manager,SalesPerson"}};Object.keys(a).forEach((function(e,n,r){a[e].access.includes(t.usertype)||delete a[e]})),console.log(a);var n={"first-level-node-1":{label:"Master",index:0,nodes:a},"first-level-node-2":{label:"Logout",index:1,url:""}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-header"},r.a.createElement("h4",{className:"logo sidewidth text-center padding-12"},"Admin Panel"),r.a.createElement("div",{className:"navbar navbar-top padding-12"},"Welcome ",t.username)),r.a.createElement("div",{className:"main-header"},r.a.createElement("div",{className:"menu sidewidth"},r.a.createElement(g.a,{data:n,onClickItem:function(t){t.key;var a=t.label,n=t.url;void 0!==n&&("Logout"===a?e.onClick():e.props.history.push(n))}}))))}}]),a}(r.a.Component);b.contextType=E;var N=Object(v.f)(b),y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).toggle=function(){console.log("hii triggered")},n.state={isModal:!1},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement("div",{className:"menubar"},"Welcome Home"))}}]),a}(r.a.Component),C=a(24),x=a(4),S=a.n(x),w=a(114),O=a(115),k=a(117),j=a(116),U=a(61),D=a(112),F=a(113),P=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(o.a)(this,a),t.call(this)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.breadcrumb.split(","),t=[];for(var a in e){var n=Number(a),s="/"+e[n];n===e.length-1?t.push(r.a.createElement(D.a,{key:n,className:"text-right",active:!0},e[n])):0===n?t.push(r.a.createElement(D.a,{key:n,className:"text-right"},r.a.createElement(d.b,{to:"/"},e[n]))):t.push(r.a.createElement(D.a,{key:n,className:"text-right"},r.a.createElement(d.b,{to:s},e[n])))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{style:{marginBottom:"0.2rem"}},t))}}]),a}(r.a.Component),A=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(o.a)(this,a),t.call(this)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,this.props),r.a.createElement("div",null,r.a.createElement(w.a,null,r.a.createElement(O.a,null,r.a.createElement("div",{className:"row"},r.a.createElement("h4",{className:"col-10 text-left"},this.props.header),r.a.createElement("div",{className:"col-2"},r.a.createElement(k.a,{color:"primary",onClick:this.props.addnew},"Add New")))),r.a.createElement(j.a,null,r.a.createElement(U.c,{hover:!0,entriesOptions:[10,25,50],pagesAmount:4,pagingTop:!0,searchTop:!0,searchBottom:!1,data:this.props.data})))))}}]),a}(r.a.Component),I=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).addnew=function(){n.props.history.push("/Suppliers/Add")},n.deleteItem=function(e){!0===window.confirm("Are u want to Delete?")&&S.a.post(n.context.serverURL+"/api/Suppliers/Update",{id:e,action:"del",userid:1},{headers:{auth:n.context.token}}).then((function(e){"success"===e.data.status&&n.loadDate()}))},n.loadDate=function(){S.a.get(n.context.serverURL+"/api/Suppliers",{headers:{auth:n.context.token}}).then((function(e){"success"===e.data.status&&n.setState({viewdata:e.data.data})}))},n.componentDidMount=function(){n.loadDate()},n.state={viewdata:[]},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t={columns:[{label:"ID",field:"id",sort:"asc"},{label:"Supplier Name",field:"suppliername",sort:"asc"},{label:"Phone Number",field:"phoneno",sort:"asc"},{label:"Email ID",field:"email",sort:"asc"},{label:"GSTIN",field:"gstin",sort:"asc"},{label:"Action",field:"action"}],rows:Object(C.a)(this.state.viewdata.map((function(t,a){return{id:t.id,suppliername:t.suppliername,phoneno:t.phoneno,email:t.email,gstin:t.gstin,action:r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{className:"btn btn-primary btn-sm",to:{pathname:"/Suppliers/Add",state:{id:t.id}},onClick:e.toggle},"Edit"),"\xa0",r.a.createElement(d.b,{to:{},className:"btn btn-danger btn-sm",onClick:function(){return e.deleteItem(t.id)}},"Delete"))}})))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement("div",{className:"menubar"},r.a.createElement(A,{breadcrumb:"Home,Suppliers,View",header:"Suppliers",data:t,addnew:this.addnew})))}}]),a}(r.a.Component);I.contextType=E;var L=I,R=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).addnew=function(){n.props.history.push("/Customers/Add")},n.deleteItem=function(e){!0===window.confirm("Are u want to Delete?")&&S.a.post(n.context.serverURL+"/api/Customers/Update",{id:e,action:"del",userid:1},{headers:{auth:n.context.token}}).then((function(e){"success"===e.data.status&&n.loadDate()}))},n.loadDate=function(){S.a.get(n.context.serverURL+"/api/Customers",{headers:{auth:n.context.token}}).then((function(e){"success"===e.data.status&&n.setState({viewdata:e.data.data})}))},n.componentDidMount=function(){n.loadDate()},n.state={viewdata:[]},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t={columns:[{label:"ID",field:"id",sort:"asc"},{label:"Customer Name",field:"customername",sort:"asc"},{label:"Phone Number",field:"phoneno",sort:"asc"},{label:"Email ID",field:"email",sort:"asc"},{label:"Action",field:"action"}],rows:Object(C.a)(this.state.viewdata.map((function(t,a){return{id:t.id,customername:t.customername,phoneno:t.phoneno,email:t.email,action:r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{className:"btn btn-primary btn-sm",to:{pathname:"/Customers/Add",state:{id:t.id}},onClick:e.toggle},"Edit"),"\xa0",r.a.createElement(d.b,{to:{},className:"btn btn-danger btn-sm",onClick:function(){return e.deleteItem(t.id)}},"Delete"))}})))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement("div",{className:"menubar"},r.a.createElement(A,{breadcrumb:"Home,Customers,View",header:"Customers",data:t,addnew:this.addnew})))}}]),a}(r.a.Component);R.contextType=E;var q=R,T=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).addnew=function(){n.props.history.push("/Employees/Add")},n.deleteItem=function(e){!0===window.confirm("Are u want to Delete?")&&S.a.post(n.context.serverURL+"/api/Employees/Update",{empserial:e,action:"del",userid:1},{headers:{auth:n.context.token}}).then((function(e){console.log(e),"success"===e.data.status&&n.loadDate()}))},n.loadDate=function(){S.a.get(n.context.serverURL+"/api/Employees",{headers:{auth:n.context.token}}).then((function(e){"success"===e.data.status&&n.setState({viewdata:e.data.data})}))},n.componentDidMount=function(){n.loadDate()},n.state={viewdata:[]},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t={columns:[{label:"EmployeeID",field:"empid",sort:"asc"},{label:"Employee Name",field:"employeename",sort:"asc"},{label:"Phone Number",field:"phoneno",sort:"asc"},{label:"Email ID",field:"email",sort:"asc"},{label:"Action",field:"action"}],rows:Object(C.a)(this.state.viewdata.map((function(t,a){return{empid:t.employeeid,employeename:t.employeename,phoneno:t.phoneno,email:t.email,action:r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{className:"btn btn-primary btn-sm",to:{pathname:"/Employees/Add",state:{id:t.employeeserial}},onClick:e.toggle},"Edit"),"\xa0",r.a.createElement(d.b,{to:{},className:"btn btn-danger btn-sm",onClick:function(){return e.deleteItem(t.employeeserial)}},"Delete"))}})))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement("div",{className:"menubar"},r.a.createElement(A,{breadcrumb:"Home,Employees,View",header:"Employees",data:t,addnew:this.addnew})))}}]),a}(r.a.Component);T.contextType=E;var M=T,V=a(19),H=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).clear=function(){var e=n.state;Object.keys(e).forEach((function(t){"id"!==t&&"isUpdate"!==t&&"error"!==t&&(e[t]="")})),n.setState({data:e})},n.validateEmail=function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},n.validateFields=function(){var e=n.state,t=n.state.error;Object.keys(t).forEach((function(e){t[e]=""}));var a=!1;return""===e.id&&(t.id="Please Fill ID",a=!0),""===e.storename&&(t.storename="Please Fill StoreName",a=!0),""===e.address&&(t.address="Please Fill Address",a=!0),""===e.phoneno?(t.phoneno="Please Fill PhoneNo",a=!0):e.phoneno.length<10&&(t.phoneno="Enter Valid PhoneNo",a=!0),""===e.email?(t.email="Please Fill EmailID",a=!0):n.validateEmail(e.email)||(t.email="Please Fill Valid EmailID",a=!0),""===e.gstin?(t.gstin="Please Fill GSTIN",a=!0):e.gstin.length<15&&(t.gstin="Enter Valid GSTIN",a=!0),""===e.registerdetails&&(t.registerdetails="Please Fill Registration Details",a=!0),n.setState({error:t}),a},n.componentDidMount=function(){S.a.get(n.context.serverURL+"/api/Stores",{headers:{auth:n.context.token},params:{id:1}}).then((function(e){if(console.log(e),0===e.data.data.length)S.a.get(n.context.serverURL+"/api/Stores/Auto",{headers:{auth:n.context.token}}).then((function(e){n.setState({id:e.data.data[0].id})}));else{var t=e.data.data[0];console.log(t),n.setState({id:t.id,storename:t.storename,address:t.address,phoneno:t.phoneno,email:t.email,gstin:t.gstin,registerdetails:t.registerdetails,isUpdate:!0})}}))},n.onChange=function(e){n.setState(Object(V.a)({},e.target.name,e.target.value))},n.onSubmit=function(e){if(e.preventDefault(),!n.validateFields())if(n.state.isUpdate){var t=n.state;t.action="update",S.a.post(n.context.serverURL+"/api/Stores/Update",t,{headers:{auth:n.context.token}}).then((function(e){"success"===e.data.status&&n.props.history.push("/")})),alert("Store Details Updated Successfully..!!")}else{var a=n.state;S.a.post(n.context.serverURL+"/api/Stores/Add",a,{headers:{auth:n.context.token}}).then((function(e){"success"===e.data.status&&n.props.history.push("/")})),alert("Store Details Added Successfully..!!")}},n.state={id:"",storename:"",address:"",phoneno:"",email:"",gstin:"",registerdetails:"",isUpdate:!1,error:{id:"",storename:"",address:"",phoneno:"",email:"",gstin:"",registerdetails:""}},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.isUpdate?"Home,Stores,Update":"Home,Stores,Add New",t=this.state.isUpdate?"Update":"Add";return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement("div",{className:"menubar"},r.a.createElement(P,{breadcrumb:e}),r.a.createElement("div",{className:"row text-left"},r.a.createElement("div",{className:"col-2"}),r.a.createElement("div",{className:"col-8"},r.a.createElement(w.a,null,r.a.createElement(O.a,{tag:"h4"},t," Store"),r.a.createElement(j.a,{className:"padding-20 font-weight-bold"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"ID"),r.a.createElement("input",{name:"id",type:"text",className:"form-control",disabled:!0,value:this.state.id})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Store Name"),r.a.createElement("input",{name:"storename",type:"text",className:"form-control",required:!0,onChange:this.onChange,value:this.state.storename}),""!==this.state.error.storename?r.a.createElement("span",{className:"error"},this.state.error.storename):""),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Store Address"),r.a.createElement("textarea",{name:"address",className:"form-control",required:!0,onChange:this.onChange,value:this.state.address}),""!==this.state.error.address?r.a.createElement("span",{className:"error"},this.state.error.address):""),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Phone No"),r.a.createElement("input",{name:"phoneno",type:"text",className:"form-control",maxLength:"10",required:!0,onChange:this.onChange,value:this.state.phoneno}),""!==this.state.error.phoneno?r.a.createElement("span",{className:"error"},this.state.error.phoneno):""),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email ID"),r.a.createElement("input",{name:"email",type:"email",className:"form-control",required:!0,onChange:this.onChange,value:this.state.email}),""!==this.state.error.email?r.a.createElement("span",{className:"error"},this.state.error.email):""),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"GSTIN"),r.a.createElement("input",{name:"gstin",type:"text",className:"form-control",maxLength:"15",required:!0,onChange:this.onChange,value:this.state.gstin}),""!==this.state.error.gstin?r.a.createElement("span",{className:"error"},this.state.error.gstin):""),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Registration Details"),r.a.createElement("textarea",{name:"registerdetails",className:"form-control",required:!0,onChange:this.onChange,value:this.state.registerdetails}),""!==this.state.error.registerdetails?r.a.createElement("span",{className:"error"},this.state.error.registerdetails):""),r.a.createElement("div",{className:"text-right"},r.a.createElement(k.a,{color:"primary",onClick:this.onSubmit},"Submit"),"  ",r.a.createElement(k.a,{color:"secondary",onClick:this.clear},"Clear"))))),r.a.createElement("div",{className:"col-2"}))))}}]),a}(r.a.Component);H.contextType=E;var z=H,Z=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).clear=function(){var e=n.state;Object.keys(e).forEach((function(t){"id"!==t&&"isUpdate"!==t&&"error"!==t&&(e[t]="")})),n.setState({data:e})},n.validateEmail=function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},n.validateFields=function(){var e=n.state,t=n.state.error;Object.keys(t).forEach((function(e){t[e]=""}));var a=!1;return""===e.id&&(t.id="Please Fill ID",a=!0),""===e.suppliername&&(t.suppliername="Please Fill SupplierName",a=!0),""===e.address&&(t.address="Please Fill Address",a=!0),""===e.phoneno?(t.phoneno="Please Fill PhoneNo",a=!0):e.phoneno.length<10&&(t.phoneno="Enter Valid PhoneNo",a=!0),""===e.email?(t.email="Please Fill EmailID",a=!0):n.validateEmail(e.email)||(t.email="Please Fill Valid EmailID",a=!0),""===e.gstin?(t.gstin="Please Fill GSTIN",a=!0):e.gstin.length<15&&(t.gstin="Enter Valid GSTIN",a=!0),n.setState({error:t}),a},n.componentDidMount=function(){void 0!==n.props.location.state?S.a.get(n.context.serverURL+"/api/Suppliers",{headers:{auth:n.context.token},params:{id:n.props.location.state.id}}).then((function(e){var t=e.data.data[0];n.setState({id:t.id,suppliername:t.suppliername,address:t.address,phoneno:t.phoneno,email:t.email,gstin:t.gstin,isUpdate:!0})})):S.a.get(n.context.serverURL+"/api/Suppliers/Auto",{headers:{auth:n.context.token}}).then((function(e){n.setState({id:e.data.data[0].id})}))},n.onChange=function(e){n.setState(Object(V.a)({},e.target.name,e.target.value))},n.onSubmit=function(e){if(e.preventDefault(),!n.validateFields())if(n.state.isUpdate){var t=n.state;t.action="update",t.userid=1,S.a.post(n.context.serverURL+"/api/Suppliers/Update",t,{headers:{auth:n.context.token}}).then((function(e){"success"===e.data.status&&n.props.history.push("/Suppliers")})),alert("Supplier Details Updated Successfully..!!")}else{var a=n.state;a.userid=1,S.a.post(n.context.serverURL+"/api/Suppliers/Add",a,{headers:{auth:n.context.token}}).then((function(e){"success"===e.data.status&&n.props.history.push("/Suppliers")})),alert("Supplier Details Added Successfully..!!")}},n.state={id:"",suppliername:"",address:"",phoneno:"",email:"",gstin:"",isUpdate:!1,error:{id:"",suppliername:"",address:"",phoneno:"",email:"",gstin:""}},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.isUpdate?"Home,Suppliers,Update":"Home,Suppliers,Add New",t=this.state.isUpdate?"Update":"Add";return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement("div",{className:"menubar"},r.a.createElement(P,{breadcrumb:e}),r.a.createElement("div",{className:"row text-left"},r.a.createElement("div",{className:"col-2"}),r.a.createElement("div",{className:"col-8"},r.a.createElement(w.a,null,r.a.createElement(O.a,{tag:"h4"},t," Supplier"),r.a.createElement(j.a,{className:"padding-20 font-weight-bold"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"ID"),r.a.createElement("input",{name:"id",type:"text",className:"form-control",disabled:!0,value:this.state.id})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Supplier Name"),r.a.createElement("input",{name:"suppliername",type:"text",className:"form-control",required:!0,onChange:this.onChange,value:this.state.suppliername}),""!==this.state.error.suppliername?r.a.createElement("span",{className:"error"},this.state.error.suppliername):""),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Supplier Address"),r.a.createElement("textarea",{name:"address",className:"form-control",required:!0,onChange:this.onChange,value:this.state.address}),""!==this.state.error.address?r.a.createElement("span",{className:"error"},this.state.error.address):""),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Phone No"),r.a.createElement("input",{name:"phoneno",type:"text",className:"form-control",maxLength:"10",required:!0,onChange:this.onChange,value:this.state.phoneno}),""!==this.state.error.phoneno?r.a.createElement("span",{className:"error"},this.state.error.phoneno):""),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email ID"),r.a.createElement("input",{name:"email",type:"email",className:"form-control",required:!0,onChange:this.onChange,value:this.state.email}),""!==this.state.error.email?r.a.createElement("span",{className:"error"},this.state.error.email):""),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"GSTIN"),r.a.createElement("input",{name:"gstin",type:"text",className:"form-control",maxLength:"15",required:!0,onChange:this.onChange,value:this.state.gstin}),""!==this.state.error.gstin?r.a.createElement("span",{className:"error"},this.state.error.gstin):""),r.a.createElement("div",{className:"text-right"},r.a.createElement(k.a,{color:"primary",onClick:this.onSubmit},"Submit"),"  ",r.a.createElement(k.a,{color:"secondary",onClick:this.clear},"Clear"))))),r.a.createElement("div",{className:"col-2"}))))}}]),a}(r.a.Component);Z.contextType=E;var G=Z,$=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).clear=function(){var e=n.state;Object.keys(e).forEach((function(t){"id"!==t&&"isUpdate"!==t&&"error"!==t&&(e[t]="")})),n.setState({data:e})},n.validateEmail=function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},n.validateFields=function(){var e=n.state,t=n.state.error;Object.keys(t).forEach((function(e){t[e]=""}));var a=!1;return""===e.id&&(t.id="Please Fill ID",a=!0),""===e.customername&&(t.customername="Please Fill CustomerName",a=!0),""===e.address&&(t.address="Please Fill Address",a=!0),""===e.phoneno?(t.phoneno="Please Fill PhoneNo",a=!0):e.phoneno.length<10&&(t.phoneno="Enter Valid PhoneNo",a=!0),""===e.email?(t.email="Please Fill EmailID",a=!0):n.validateEmail(e.email)||(t.email="Please Fill Valid EmailID",a=!0),n.setState({error:t}),a},n.componentDidMount=function(){void 0!==n.props.location.state?S.a.get(n.context.serverURL+"/api/Customers",{headers:{auth:n.context.token},params:{id:n.props.location.state.id}}).then((function(e){var t=e.data.data[0];n.setState({id:t.id,customername:t.customername,address:t.address,phoneno:t.phoneno,email:t.email,isUpdate:!0})})):S.a.get(n.context.serverURL+"/api/Customers/Auto",{headers:{auth:n.context.token}}).then((function(e){n.setState({id:e.data.data[0].id})}))},n.onChange=function(e){n.setState(Object(V.a)({},e.target.name,e.target.value))},n.onSubmit=function(e){if(e.preventDefault(),!n.validateFields())if(n.state.isUpdate){var t=n.state;t.action="update",t.userid=1,S.a.post(n.context.serverURL+"/api/Customers/Update",t,{headers:{auth:n.context.token}}).then((function(e){"success"===e.data.status&&n.props.history.push("/Customers")})),alert("Customer Details Updated Successfully..!!")}else{var a=n.state;a.userid=1,S.a.post(n.context.serverURL+"/api/Customers/Add",a,{headers:{auth:n.context.token}}).then((function(e){"success"===e.data.status&&n.props.history.push("/Customers")})),alert("Customer Details Added Successfully..!!")}},n.state={id:"",customername:"",address:"",phoneno:"",email:"",isUpdate:!1,error:{id:"",customername:"",address:"",phoneno:"",email:""}},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.isUpdate?"Home,Customers,Update":"Home,Customers,Add New",t=this.state.isUpdate?"Update":"Add";return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement("div",{className:"menubar"},r.a.createElement(P,{breadcrumb:e}),r.a.createElement("div",{className:"row text-left"},r.a.createElement("div",{className:"col-2"}),r.a.createElement("div",{className:"col-8"},r.a.createElement(w.a,null,r.a.createElement(O.a,{tag:"h4"},t," Customer"),r.a.createElement(j.a,{className:"padding-20 font-weight-bold"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"ID"),r.a.createElement("input",{name:"id",type:"text",className:"form-control",disabled:!0,value:this.state.id})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Customer Name"),r.a.createElement("input",{name:"customername",type:"text",className:"form-control",required:!0,onChange:this.onChange,value:this.state.customername}),""!==this.state.error.customername?r.a.createElement("span",{className:"error"},this.state.error.customername):""),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Customer Address"),r.a.createElement("textarea",{name:"address",className:"form-control",required:!0,onChange:this.onChange,value:this.state.address}),""!==this.state.error.address?r.a.createElement("span",{className:"error"},this.state.error.address):""),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Phone No"),r.a.createElement("input",{name:"phoneno",type:"text",className:"form-control",maxLength:"10",required:!0,onChange:this.onChange,value:this.state.phoneno}),""!==this.state.error.phoneno?r.a.createElement("span",{className:"error"},this.state.error.phoneno):""),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email ID"),r.a.createElement("input",{name:"email",type:"email",className:"form-control",required:!0,onChange:this.onChange,value:this.state.email}),""!==this.state.error.email?r.a.createElement("span",{className:"error"},this.state.error.email):""),r.a.createElement("div",{className:"text-right"},r.a.createElement(k.a,{color:"primary",onClick:this.onSubmit},"Submit"),"  ",r.a.createElement(k.a,{color:"secondary",onClick:this.clear},"Clear"))))),r.a.createElement("div",{className:"col-2"}))))}}]),a}(r.a.Component);$.contextType=E;var B=$,W=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).clear=function(){var e=n.state;Object.keys(e).forEach((function(t){"empid"!==t&&"empserial"!==t&&"isUpdate"!==t&&"error"!==t&&(e[t]="")})),n.setState({data:e})},n.validateEmail=function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},n.validateFields=function(){var e=n.state,t=n.state.error;Object.keys(t).forEach((function(e){t[e]=""}));var a=!1;return""===e.id&&(t.id="Please Fill ID",a=!0),""===e.empname&&(t.empname="Please Fill EmployeeName",a=!0),""===e.designation&&(t.designation="Please Fill Designation",a=!0),""===e.phoneno?(t.phoneno="Please Fill PhoneNo",a=!0):e.phoneno.length<10&&(t.phoneno="Enter Valid PhoneNo",a=!0),""===e.email?(t.email="Please Fill EmailID",a=!0):n.validateEmail(e.email)||(t.email="Please Fill Valid EmailID",a=!0),""===e.password&&(t.password="Please Fill Password",a=!0),n.setState({error:t}),a},n.componentDidMount=function(){void 0!==n.props.location.state?S.a.get(n.context.serverURL+"/api/Employees",{headers:{auth:n.context.token},params:{id:n.props.location.state.id}}).then((function(e){console.log(e);var t=e.data.data[0];console.log(t),n.setState({empid:t.employeeid,empserial:t.employeeserial,empname:t.employeename,designation:t.designation,phoneno:t.phoneno,email:t.email,password:t.password,isUpdate:!0})})):S.a.get(n.context.serverURL+"/api/Employees/Auto",{headers:{auth:n.context.token}}).then((function(e){n.setState({empid:e.data.empid,empserial:e.data.empserial})}))},n.onChange=function(e){n.setState(Object(V.a)({},e.target.name,e.target.value))},n.onSubmit=function(e){if(e.preventDefault(),!n.validateFields())if(n.state.isUpdate){var t=n.state;t.action="update",t.userid=1,console.log(t),S.a.post(n.context.serverURL+"/api/Employees/Update",t,{headers:{auth:n.context.token}}).then((function(e){"success"===e.data.status&&n.props.history.push("/Employees")})),alert("Employee Details Updated Successfully..!!")}else{var a=n.state;a.userid=1,console.log(a),S.a.post(n.context.serverURL+"/api/Employees/Add",a,{headers:{auth:n.context.token}}).then((function(e){"success"===e.data.status&&n.props.history.push("/Employees")})),alert("Employee Details Added Successfully..!!")}},n.state={empid:"",empserial:"",empname:"",designation:"Owner",phoneno:"",email:"",password:"",isUpdate:!1,error:{empid:"",empserial:"",empname:"",designation:"",phoneno:"",email:"",password:""}},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.isUpdate?"Home,Employees,Update":"Home,Employees,Add New",t=this.state.isUpdate?"Update":"Add";return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement("div",{className:"menubar"},r.a.createElement(P,{breadcrumb:e}),r.a.createElement("div",{className:"row text-left"},r.a.createElement("div",{className:"col-2"}),r.a.createElement("div",{className:"col-8"},r.a.createElement(w.a,null,r.a.createElement(O.a,{tag:"h4"},t," Employee"),r.a.createElement(j.a,{className:"padding-20 font-weight-bold"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Employee ID"),r.a.createElement("input",{name:"empid",type:"text",className:"form-control",disabled:!0,value:this.state.empid})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Employee Name"),r.a.createElement("input",{name:"empname",type:"text",className:"form-control",required:!0,onChange:this.onChange,value:this.state.empname}),""!==this.state.error.empname?r.a.createElement("span",{className:"error"},this.state.error.empname):""),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Designation"),r.a.createElement("select",{name:"designation",className:"form-control",onChange:this.onChange,value:this.state.designation},r.a.createElement("option",{value:"Owner"},"Owner"),r.a.createElement("option",{value:"Manager"},"Manager"),r.a.createElement("option",{value:"SalesPerson"},"SalesPerson")),""!==this.state.error.designation?r.a.createElement("span",{className:"error"},this.state.error.designation):""),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Phone No"),r.a.createElement("input",{name:"phoneno",type:"text",className:"form-control",maxLength:"10",required:!0,onChange:this.onChange,value:this.state.phoneno}),""!==this.state.error.phoneno?r.a.createElement("span",{className:"error"},this.state.error.phoneno):""),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email ID"),r.a.createElement("input",{name:"email",type:"email",className:"form-control",required:!0,onChange:this.onChange,value:this.state.email}),""!==this.state.error.email?r.a.createElement("span",{className:"error"},this.state.error.email):""),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{name:"password",type:"text",className:"form-control",required:!0,onChange:this.onChange,value:this.state.password}),""!==this.state.error.password?r.a.createElement("span",{className:"error"},this.state.error.password):""),r.a.createElement("div",{className:"text-right"},r.a.createElement(k.a,{color:"primary",onClick:this.onSubmit},"Submit"),"  ",r.a.createElement(k.a,{color:"secondary",onClick:this.clear},"Clear"))))),r.a.createElement("div",{className:"col-2"}))))}}]),a}(r.a.Component);W.contextType=E;var J=W,K=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/",component:y}),r.a.createElement(v.a,{exact:!0,path:"/Employees",component:M}),r.a.createElement(v.a,{exact:!0,path:"/Suppliers",component:L}),r.a.createElement(v.a,{exact:!0,path:"/Customers",component:q}),r.a.createElement(v.a,{path:"/Stores",component:z}),r.a.createElement(v.a,{path:"/Employees/Add",component:J}),r.a.createElement(v.a,{path:"/Suppliers/Add",component:G}),r.a.createElement(v.a,{path:"/Customers/Add",component:B}),r.a.createElement(v.a,{render:function(){return r.a.createElement("h1",null,"Page Not Found")}}))}}]),a}(r.a.Component);K.contextType=E;var Q=Object(v.f)(K),X=new u.a,Y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).clear=function(){var e=n.state;Object.keys(e).forEach((function(t){"error"!==t&&(e[t]="")})),n.setState({data:e})},n.onChange=function(e){n.setState(Object(V.a)({},e.target.name,e.target.value))},n.validateFields=function(){var e=n.state,t=n.state.error;Object.keys(t).forEach((function(e){t[e]=""}));var a=!1;return""===e.username&&(t.username="Please Fill UserName",a=!0),""===e.password&&(t.password="Please Fill Password",a=!0),n.setState({error:t}),a},n.onSubmit=function(e){if(e.preventDefault(),!n.validateFields()){var t=n.state,a=n.state.error;console.log(t);var r=S.a.post(n.props.serverURL+"/api/login",t).then((function(e){console.log(e),"success"===e.data.status?X.set("login",{token:e.data.token,userdata:e.data.data,login:!0}):a.errmsg="Invalid UserName/Password..!!",n.setState({error:a,isLogin:t.isLogin}),n.props.storeData()}));console.log(r)}},n.state={username:"",password:"",error:{username:"",password:"",errmsg:""}},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row text-left centerscreen"},r.a.createElement("div",{className:"col-4"}),r.a.createElement("div",{className:"col-4"},r.a.createElement(w.a,null,r.a.createElement(O.a,{tag:"h4"},"User Authentication"),r.a.createElement(j.a,{className:"padding-20 font-weight-bold"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"User Name"),r.a.createElement("input",{name:"username",type:"text",className:"form-control",onChange:this.onChange,value:this.state.username}),""!==this.state.error.username?r.a.createElement("span",{className:"error"},this.state.error.username):""),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{name:"password",type:"password",className:"form-control",required:!0,onChange:this.onChange,value:this.state.password}),""!==this.state.error.password?r.a.createElement("span",{className:"error"},this.state.error.password):""),r.a.createElement("div",{className:"text-right"},r.a.createElement(k.a,{color:"primary",onClick:this.onSubmit},"Login"),"  ",r.a.createElement(k.a,{color:"secondary",onClick:this.clear},"Clear")),""!==this.state.error.errmsg?r.a.createElement("span",{className:"error"},this.state.error.errmsg):""))),r.a.createElement("div",{className:"col-4"})))}}]),a}(r.a.Component),_=new u.a,ee=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).storeData=function(){var t=_.get("login");t&&t.login&&e.setState({isLogin:!0,token:t.token,userdata:t.userdata})},e.componentDidMount=function(){e.storeData()},e.state={serverURL:"http://localhost:4000",token:"",userdata:[],isLogin:!1},e}return Object(i.a)(a,[{key:"render",value:function(){return this.state.isLogin?r.a.createElement(E.Provider,{value:{serverURL:this.state.serverURL,token:this.state.token,userdata:this.state.userdata}},r.a.createElement(d.a,{history:h},r.a.createElement(Q,null))):r.a.createElement(Y,Object.assign({},this.state,{storeData:this.storeData}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},62:function(e,t,a){e.exports=a(108)},67:function(e,t,a){},68:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.1ec4458d.chunk.js.map