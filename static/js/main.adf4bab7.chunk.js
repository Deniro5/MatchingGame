(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(41)},28:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),i=a.n(r),l=a(15),o=a(16),s=a(21),m=a(17),u=a(22),f=a(5),p=a(2),d=a(20),b=a.n(d),g=(a(28),function(e){return c.a.createElement("div",{className:"homeContainer"},c.a.createElement("div",{className:"buttonContainer"},c.a.createElement("h1",{className:"title"}," Matching Game "),c.a.createElement("p",{style:{fontWeight:"bold",fontSize:"24px",marginBottom:"15px"}}," Instructions: "),c.a.createElement("p",null," Find all matching pairs before the timer runs out! Select a difficulty below to start. "),c.a.createElement(f.b,{to:"/easy"},c.a.createElement("button",{id:"easyBtn"}," Easy ")),c.a.createElement(f.b,{to:"/medium"},c.a.createElement("button",{id:"mediumBtn"}," Medium ")),c.a.createElement(f.b,{to:"/hard"},c.a.createElement("button",{id:"hardBtn"}," Hard "))))}),E=a(8),h=a(4),j=function(e){return c.a.createElement("div",{onClick:e.click.bind(void 0),className:"flip-card "+(e.showImage?"rotate":"")},c.a.createElement("div",{className:"flip-card-inner "+(e.showImage?"rotate":"")},c.a.createElement("div",{class:"flip-card-front"},c.a.createElement("h1",null," ? ")),c.a.createElement("div",{class:"flip-card-back"},c.a.createElement("img",{alt:"",src:e.imgsrc}))))},O=["imgs/sun.png","imgs/bird.png","imgs/volcano.png","imgs/cactus.png","imgs/ball.png","imgs/flower.png","imgs/car.png","imgs/key.png","imgs/snake.png","imgs/cloud.png"],v=function(e,t){var a=Object(n.useState)([]),r=Object(h.a)(a,2),i=r[0],l=r[1],o=Object(n.useState)(-1),s=Object(h.a)(o,2),m=s[0],u=s[1],d=Object(n.useState)(!1),b=Object(h.a)(d,2),v=b[0],y=b[1],k=Object(n.useState)(60),w=Object(h.a)(k,2),S=w[0],N=w[1],B=Object(n.useState)(0),C=Object(h.a)(B,2),M=C[0],x=C[1],T=Object(n.useState)(),I=Object(h.a)(T,2),J=I[0],W=I[1],Y=Object(n.useState)(!1),z=Object(h.a)(Y,2),D=z[0],F=z[1],G=Object(n.useState)(!1),H=Object(h.a)(G,2),R=H[0],q=H[1],A=Object(n.useState)(8),K=Object(h.a)(A,2),L=K[0],P=K[1],Q=Object(p.f)().diff;Object(n.useEffect)(function(){var e,t=[],a=Object(E.a)(O);e="hard"===Q?16:"medium"===Q?12:8;for(var n=0;n<e/2;n++){var c=Math.floor(Math.random()*(10-n));t.push({flipped:!1,imgsrc:a[c]}),t.push({flipped:!1,imgsrc:a[c]}),a.splice(c,1)}l(function(e){for(var t=[],a=e.length-1;a>=0;a--){var n=Math.floor(Math.random()*a);t.push(e[n]),e.splice(n,1)}return t}(t)),P(e)},[]),Object(n.useEffect)(function(){if(0===S){clearTimeout(J),alert("You lost. Try again!");for(var e=Object(E.a)(i),t=0;t<e.length;t++)e[t].flipped=!0;l(e),F(!0)}else if(M<L/2){var a=setTimeout(function(){N(S-1)},1e3);W(a)}},[S]),Object(n.useEffect)(function(){M===L/2&&(alert("Congratulations. You Win!"),clearTimeout(J),F(!0))},[M]);var U=function(e){if(!v&&!D&&!i[e].flipped){var t=Object(E.a)(i);t[e].flipped=!0,m<0?(u(e),l(t)):t[m].imgsrc===t[e].imgsrc?(l(t),u(-1),x(M+1)):(u(-1),l(t),y(!0),setTimeout(function(){var a=Object(E.a)(t);a[m].flipped=!1,a[e].flipped=!1,l(a),y(!1)},1e3))}};return R?c.a.createElement(g,null):c.a.createElement("div",{className:"boardContainer"},c.a.createElement("h2",{className:"timer"},"Time Remaining: ",S," seconds"),i.map(function(e,t){return c.a.createElement(j,{imgsrc:e.imgsrc,click:U.bind(void 0,t),showImage:e.flipped})}),D&&c.a.createElement(f.b,{to:"/",style:{textDecoration:"none"}},c.a.createElement("button",{className:"homeBtn",onClick:function(){q(!0)}}," Back to Menu ")))},y=b()(),k=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(f.a,{history:y},c.a.createElement("div",{className:"app-container"},c.a.createElement(p.c,null,c.a.createElement(p.a,{exact:!0,path:"/",component:g}),c.a.createElement(p.a,{exact:!0,path:"/:diff",component:v}),"/>")))}}]),t}(n.Component);i.a.render(c.a.createElement(k,null),document.getElementById("root"))}},[[23,2,1]]]);
//# sourceMappingURL=main.adf4bab7.chunk.js.map