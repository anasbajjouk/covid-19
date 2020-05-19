(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{16:function(e,t,a){e.exports={container:"Cards_container__3LnWB",card:"Cards_card__1EPZL",infected:"Cards_infected__3UnVL",recovered:"Cards_recovered__1jgW8",deaths:"Cards_deaths__1q_jQ"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(71),o=a.n(c),u=a(6),s=a.n(u),i=a(10),l=a(72),d=a(73),f=a(84),p=a(83),m=a(224),v=a(228),h=a(225),b=a(226),y=a(16),g=a.n(y),E=a(74),x=a.n(E),C=a(75),_=a.n(C),w=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;if(!a)return"Loading...";return r.a.createElement("div",{className:g.a.container},r.a.createElement(m.a,{container:!0,spacing:3,justify:"center"},[{label:"Infected",text:"Number of active cases of COVID-19"},{label:"Recovered",text:"Number of recoveries from COVID-19"},{label:"Deaths",text:"Number of deaths caused by COVID-19"}].map((function(e,t){return r.a.createElement(m.a,{key:t+500,item:!0,component:v.a,xs:12,md:3,className:_()(g.a.card,"Infected"===e.label?g.a.infected:"Recovered"===e.label?g.a.recovered:g.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},e.label),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:"Infected"===e.label?a.value:"Recovered"===e.label?n.value:c.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},e.text)))}))))},j=a(31),O=a(32),k=a.n(O),N="https://covid19.mathdro.id/api",S=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=N,t&&(a="".concat(N,"/countries/").concat(t)),e.prev=2,e.next=5,k.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(N,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(N,"/countries"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.countries.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(45),V=a(81),R=a.n(V),L=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(n.useState)([]),d=Object(j.a)(l,2),f=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=f.length?r.a.createElement(B.b,{data:{labels:f.map((function(e){return e.date})),datasets:[{data:f.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:f.map((function(e){return e.deaths})),label:"Infected",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,v=a?r.a.createElement(B.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{data:[a.value,c.value,o.value],label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null;return r.a.createElement("div",{className:R.a.container},u?v:m)},U=a(229),A=a(227),P=a(82),J=a.n(P),M=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(j.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,D();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(U.a,{className:J.a.formControl},r.a.createElement(A.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t+50,value:e},e)}))))},W=a(33),q=a.n(W),G=a(34),K=a.n(G),Q=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return(r.a.createElement("div",{className:q.a.container},r.a.createElement("picture",{className:q.a.image},r.a.createElement("source",{media:"(min-width: 650px)",srcSet:K.a}),r.a.createElement("source",{media:"(min-width: 465px)",srcSet:K.a}),r.a.createElement("img",{className:q.a.image,src:K.a,alt:"corona_image",style:{width:"auto"}})),r.a.createElement(w,{data:t}),r.a.createElement(M,{handleCountryChange:this.handleCountryChange}),r.a.createElement(L,{data:t,country:a})))}}]),a}(r.a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root"))},33:function(e,t,a){e.exports={container:"App_container__3SREN",image:"App_image__ptCBT"}},34:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},81:function(e,t,a){e.exports={container:"Chart_container__BVBCK"}},82:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__1a4u6"}},87:function(e,t,a){e.exports=a(207)}},[[87,1,2]]]);
//# sourceMappingURL=main.b53c1b61.chunk.js.map