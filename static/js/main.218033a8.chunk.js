(this["webpackJsonpuser-input-proj"]=this["webpackJsonpuser-input-proj"]||[]).push([[0],[,,,,function(e,n,a){e.exports={container:"UsernameForm_container___FiWL",username:"UsernameForm_username__ZtA8z",age:"UsernameForm_age__bjq0q",invalid:"UsernameForm_invalid__q9w1y"}},,function(e,n,a){e.exports={container:"InvalidInput_container__ED0CR","invalid-input":"InvalidInput_invalid-input__1H7Hh","invalid-message":"InvalidInput_invalid-message__5Yoj4",error:"InvalidInput_error__2SoUe"}},,function(e,n,a){e.exports={"username-list":"UsernameList_username-list__3YzOv"}},,function(e,n,a){e.exports={container:"Username_container__3-oSp"}},function(e,n,a){e.exports={card:"Card_card__1UW_E"}},function(e,n,a){e.exports={backdrop:"Backdrop_backdrop__3YTui"}},function(e,n,a){e.exports={app:"App_app__2eUn3"}},,,,,,function(e,n,a){},,function(e,n,a){"use strict";a.r(n);var t=a(1),c=a.n(t),r=a(9),s=a.n(r),i=(a(19),a(14)),o=a(2),l=a(8),u=a.n(l),d=a(10),j=a.n(d),m=a(11),h=a.n(m),b=a(0),p=function(e){return Object(b.jsx)("div",{className:h.a.card,children:e.children})},g=function(e){return Object(b.jsx)(p,{children:Object(b.jsxs)("li",{className:j.a.container,children:[Object(b.jsxs)("h3",{children:["Name: ",e.name]}),Object(b.jsxs)("h3",{children:["Age: ",e.age]})]})})},O=function(e){var n=e.usernameData;return 0===n.length?Object(b.jsx)("h2",{className:u.a["username-list"],children:"No names found"}):Object(b.jsx)("div",{className:u.a["username-list"],children:n.map((function(e){return Object(b.jsx)(g,{name:e.username,age:e.age},Math.random().toString())}))})},_=a(4),v=a.n(_),x=a(6),f=a.n(x),N=a(12),S=a.n(N),F=function(e){return Object(b.jsx)("div",{onClick:e.hideBackdrop,className:S.a.backdrop,children:e.children})},I=function(e){return Object(b.jsx)(F,{hideBackdrop:e.hideModal,children:Object(b.jsx)("div",{className:f.a.container,children:Object(b.jsxs)("div",{className:f.a["invalid-input"],children:[Object(b.jsx)("h3",{className:f.a["invalid-message"],children:"This is an invalid input"}),e.children,Object(b.jsx)("button",{onClick:e.hideModal,children:"Okay"})]})})})},U=function(e){var n=Object(t.useState)(""),a=Object(o.a)(n,2),c=a[0],r=a[1],s=Object(t.useState)(""),i=Object(o.a)(s,2),l=i[0],u=i[1],d=Object(t.useState)(!1),j=Object(o.a)(d,2),m=j[0],h=j[1],p=function(e,n){e.length<=0||n.length<=0?(h(!0),console.log("lenght <= 0")):n<0&&(h(!0),console.log("age < 0"))};return console.log(+l),console.log(+l<=0?"invalidAgeMessage":""),Object(b.jsxs)("div",{children:[!0===m&&Object(b.jsx)(I,{username:c,age:l,onChangeInvalidInput:h,errorHandler:p,hideModal:function(){h(!1)},children:Object(b.jsx)("p",{className:v.a.error,children:+l<0?"Please, enter a Age which is greater than 0":" Fanculo"})}),Object(b.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a={username:c,age:l};p(a.username,a.age),e.onSaveUsernameData(a),r(""),u("")},className:v.a.container,children:[Object(b.jsxs)("div",{className:v.a.username,children:[Object(b.jsx)("label",{htmlFor:"username",children:"Username"}),Object(b.jsx)("input",{value:c,onChange:function(e){r(e.target.value)},name:"username"})]}),Object(b.jsxs)("div",{className:v.a.age,children:[Object(b.jsx)("label",{htmlFor:"age",children:"Age"}),Object(b.jsx)("input",{value:l,onChange:function(e){u(e.target.value)},name:"age"})]}),Object(b.jsx)("button",{type:"submit",className:m?"classes.invalid":"",children:"Submit"})]})]})},k=a(13),C=a.n(k);var D=function(){var e=Object(t.useState)(""),n=Object(o.a)(e,2),a=n[0],c=n[1];return Object(b.jsxs)("div",{className:C.a.app,children:[Object(b.jsx)(U,{onSaveUsernameData:function(e){c((function(n){return[e].concat(Object(i.a)(n))}))},user:a}),Object(b.jsx)(O,{usernameData:a})]})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(n){var a=n.getCLS,t=n.getFID,c=n.getFCP,r=n.getLCP,s=n.getTTFB;a(e),t(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root")),A()}],[[21,1,2]]]);
//# sourceMappingURL=main.218033a8.chunk.js.map