(this.webpackJsonpproducthunt=this.webpackJsonpproducthunt||[]).push([[0],{102:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(20),o=a.n(r),i=(a(102),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function c(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var l=a(17),u=a(18),m=a(25),d=a(22),g=a(26),h=a(15),p=a(34),f=a(78),v=a.n(f),E=function(){function e(t,a,n,s,r){Object(l.a)(this,e),this.data=n,this.msgHandler=s,this.status=t,this.statusText=a,this.message=r}return Object(u.a)(e,[{key:"setData",value:function(e){this.data=e}},{key:"setMsgHandler",value:function(e){this.msgHandler=e}},{key:"setStatus",value:function(e){this.status=e}},{key:"setStatusText",value:function(e){this.statusText=e}},{key:"setMessage",value:function(e){this.message=e}}]),e}(),b=a(197),y=a(184),k=function(e){function t(e,a){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e,a))).state={showMessage:!0},n.handleMsgDismiss=n.handleMsgDismiss.bind(Object(p.a)(n)),n}return Object(g.a)(t,e),Object(u.a)(t,[{key:"handleMsgDismiss",value:function(){this.setState({showMessage:!1})}},{key:"componentWillReceiveProps",value:function(){this.setState({showMessage:!0})}},{key:"render",value:function(){return s.a.createElement("div",null,this.state.showMessage&&s.a.createElement(b.a,{severity:this.props.messageResponse,onClose:this.handleMsgDismiss},s.a.createElement(y.a,null,this.props.message),this.props.customView))}}]),t}(s.a.Component),O={createMessageHandler:function(e,t){return s.a.createElement(k,{message:e,messageResponse:t})},createMsgHandlerCustomView:function(e,t,a){return s.a.createElement(k,{message:e,messageResponse:t,customView:a})}};var j={SUCCESS:"success",ERROR:"error",INFO:"info",WARNING:"warning"},w=new(function(){function e(){Object(l.a)(this,e);var t=v.a.create({baseURL:"https://api.producthunt.com/v1/",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer YR64Kx1ZG1Lw48g3YpkGrf_Eiru09iZXSVHOj_kr9VY"}});t.interceptors.response.use(this.handleSuccess,this.handleError),this.service=t}return Object(u.a)(e,[{key:"handleSuccess",value:function(e){var t=new E;return t.setData(e.data),t.setStatus(e.status),t.setStatusText(e.statusText),t}},{key:"handleError",value:function(e){var t=new E;if(void 0!==e.response)switch(e.response.status){case 401:return localStorage.removeItem("authkey"),e.config.headers.Authorization="Bearer YR64Kx1ZG1Lw48g3YpkGrf_Eiru09iZXSVHOj_kr9VY",e.config.__isRetryRequest=!0,this.service.request(e.config);default:return t.setStatus(e.response.status),t.setStatusText(e.response.statusText),t}return t.setMessage(e.message),t.setMsgHandler(O.createMessageHandler(e.message,j.ERROR)),t}},{key:"get",value:function(e,t,a){return this.service.get(e).then((function(e){200===e.status?t(e):a(e)}))}},{key:"post",value:function(e,t,a){return this.service.post(e).then((function(e){201===e.status?t(e):a(e)}))}}]),e}()),L=a(194),S=a(195),x=a(57),H=a.n(x),D={convertUTCStringToFormattedDate:function(e,t){return H()(new Date(e)).format(t)},convertDateToFormattedDate:function(e,t){return H()(e).format(t)}};var T=a(80),C=a.n(T),N=a(185),M=a(186),R=a(187),_=a(183),V=a(42),B=a(81),Y=a.n(B),A=a(83),F=a.n(A),U=a(41),W=a.n(U),G=a(29);var P=function(e){var t=e.isHomePage,a=e.pageName,n=Object(N.a)((function(e){return{appBar:{marginBottom:"1rem"},toolbarButtons:{marginLeft:"auto"},menuButton:{marginRight:e.spacing(2)}}}))();return s.a.createElement(M.a,{position:"static",className:n.appBar},s.a.createElement(R.a,{variant:"regular"},s.a.createElement(_.a,{edge:"start",className:n.menuButton,color:"inherit","aria-label":"menu"},t?s.a.createElement(Y.a,null):s.a.createElement(G.b,{to:"/homepage"},s.a.createElement(F.a,null))),s.a.createElement(V.a,{variant:"h6",color:"inherit"},t?"ProductHunt":a),t&&s.a.createElement(G.b,{className:n.toolbarButtons,to:"myupvotes"},s.a.createElement(W.a,{"aria-controls":"menu-appbar"}))))},I=a(193),Z=a(84),J=a(90),q=a(188),z=a(196),K=a(200),X=a(50),Q=a(190),$=a(189),ee=a(191),te=a(192),ae=a(198),ne=a(199),se=a(87),re=a.n(se),oe=a(4),ie=a(85),ce=a.n(ie),le=a(86),ue=a.n(le);var me=function(e){var t=e.posts,a=e.isVotesList,n=Object(N.a)((function(e){return{card:{maxWidth:345},cardTagline:{height:40},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:X.a[500]},chip:{margin:e.spacing(.5)},favRed:{color:X.a[500]}}}))(),r=s.a.useState(!1),o=Object(J.a)(r,2),i=o[0],c=o[1];return s.a.createElement(q.a,{className:n.card},s.a.createElement($.a,{className:n.media,image:t.thumbnail.image_url,title:t.thumbnail.media_type}),s.a.createElement(Q.a,{avatar:s.a.createElement(ne.a,{"aria-label":"recipe",className:n.avatar,src:t.user.image_url["30px"]}),title:t.name,subheader:"Created At "+D.convertUTCStringToFormattedDate(t.created_at,"HH:mm:ss")}),s.a.createElement(ee.a,null,s.a.createElement(V.a,{variant:"body2",color:"textSecondary",className:n.cardTagline,component:"p"},t.tagline)),s.a.createElement(te.a,{disableSpacing:!0},!a&&s.a.createElement(_.a,{"aria-label":"add to favorites",onClick:function(e){return a=t.id,void w.post("posts/"+a+"/vote",(function(e){}),(function(e){}));var a}},t.current_user.voted_for_post&&s.a.createElement(W.a,{className:n.favRed}),!t.current_user.voted_for_post&&s.a.createElement(W.a,null)),s.a.createElement(_.a,{"aria-label":"share",disabled:!0},s.a.createElement(ce.a,null),s.a.createElement(V.a,{variant:"body2",color:"textSecondary",component:"p"},"\xa0",t.comments_count)),s.a.createElement(_.a,{"aria-label":"share",disabled:!0},s.a.createElement(ue.a,null),s.a.createElement(V.a,{variant:"body2",color:"textSecondary",component:"p"},"\xa0",t.votes_count)),s.a.createElement(_.a,{className:Object(oe.a)(n.expand,Object(Z.a)({},n.expandOpen,i)),onClick:function(){c(!i)},"aria-expanded":i,"aria-label":"show more"},s.a.createElement(re.a,null))),s.a.createElement(ae.a,{in:i,timeout:"auto",unmountOnExit:!0},s.a.createElement(ee.a,null,s.a.createElement(z.a,{p:1}),t.topics.map((function(e){return s.a.createElement(K.a,{key:e.id,label:e.name,className:n.chip})})))))};var de=function(e){var t=e.displayList,a=e.isVotesList,n=Object(N.a)((function(e){return{root:{flexGrow:1,marginTop:e.spacing(1)}}}))();return s.a.createElement("div",{className:n.root},s.a.createElement(I.a,{container:!0,spacing:10},t.map((function(e){return s.a.createElement(I.a,{item:!0,xs:4,key:e.id},s.a.createElement(me,{posts:a?e.post:e,isVotesList:a}))}))))},ge=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={msgHandler:null,postsList:[],selectedDate:new Date,isLoading:!1},a.onDateChange=a.onDateChange.bind(Object(p.a)(a)),a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getAccessToken("")}},{key:"getAccessToken",value:function(e){var t=this;t.setState({isLoading:!0,postsList:[],msgHandler:null}),w.get("posts"+e,(function(e){t.setState({postsList:e.data.posts,isLoading:!1})}),(function(e){t.setState({msgHandler:e.msgHandler,isLoading:!1})}))}},{key:"onDateChange",value:function(e){this.setState({selectedDate:e}),this.getAccessToken("?day="+D.convertDateToFormattedDate(e,"YYYY-MM-DD"))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(L.a,{fixed:!0},s.a.createElement(P,{isHomePage:!0,pageName:"ProductHunt"}),this.state.msgHandler,s.a.createElement("div",{className:"right-align"},s.a.createElement(C.a,{onChange:this.onDateChange,value:this.state.selectedDate})),this.state.isLoading&&s.a.createElement(S.a,null),s.a.createElement(de,{displayList:this.state.postsList})))}}]),t}(s.a.Component),he=Object(h.f)(ge),pe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={msgHandler:null,votesList:[],isLoading:!1},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getVotesForUser("2352271")}},{key:"getVotesForUser",value:function(e){var t=this;t.setState({isLoading:!0,postsList:[],msgHandler:null}),w.get("users/"+e+"/votes",(function(e){console.log("votes:"+JSON.stringify(e.data)),t.setState({votesList:e.data.votes,isLoading:!1})}),(function(e){t.setState({msgHandler:e.msgHandler,isLoading:!1})}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(L.a,{fixed:!0},s.a.createElement(P,{isHomePage:!1,pageName:"My UpVotes"}),this.state.msgHandler,this.state.isLoading&&s.a.createElement(S.a,null),s.a.createElement(de,{displayList:this.state.votesList,isVotesList:!0})))}}]),t}(s.a.Component),fe=Object(h.f)(pe),ve=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement(G.a,null,s.a.createElement(h.c,null,s.a.createElement(h.a,{path:"/index.html",component:he}),s.a.createElement(h.a,{path:"/homepage",component:he}),s.a.createElement(h.a,{path:"/myupvotes",component:fe})))}}]),t}(s.a.Component);o.a.render(s.a.createElement(ve,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/komaljain/product-hunt-assigment",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/komaljain/product-hunt-assigment","/service-worker.js");i?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):c(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):c(e)}))}}()},97:function(e,t,a){e.exports=a(157)}},[[97,1,2]]]);
//# sourceMappingURL=main.bc0987a1.chunk.js.map