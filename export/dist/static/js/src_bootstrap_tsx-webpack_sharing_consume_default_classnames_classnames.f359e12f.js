(self.webpackChunk_emp_react_export=self.webpackChunk_emp_react_export||[]).push([["src_bootstrap_tsx-webpack_sharing_consume_default_classnames_classnames"],{27298:function(e,t,n){"use strict";n.r(t);var r=n(22491),o=n.n(r),c=n(57673),u=n.n(c),s=(n(57239),n(91250)),a=n(82925),i=n(31929),l=n(78603),m=n(92523),p=n(25905),f=n(81109),d=n.n(f),h=n(67154),E=n.n(h),R=n(6479),g=n.n(R),U=n(61934),_=[{type:U.INTERNAL_PAGE,name:"首页",owner:"self",path:"home"},{type:U.MENU,name:"项目模块",path:"inspectionsMenu",children:[{type:U.INTERNAL_PAGE,name:"react项目模块",owner:"project",path:"project"},{type:U.INTERNAL_PAGE,name:"vue2项目模块",owner:"project",path:"vue2project"}]}].map((function(e){var t=e.children,n=void 0===t?[]:t,r=g()(e,["children"]),o=n.map((function(e){return d()(d()({},e),{},{id:(1e10*Math.random()).toFixed(0)})}));return d()(d()({},r),{},{children:o,id:(1e10*Math.random()).toFixed(0)})})),L=n(49575),w=n(55264),B=n.n(w),k=document.documentElement.clientWidth,I=(0,s.connect)((function(e){return d()({},e)}),(function(e){return{setBaseURL:function(t){return e((0,L.setBaseURL)(t))},setBaseHostURL:function(t){return e((0,L.setBaseHostURL)(t))},setBaseWebsocketURL:function(t){return e((0,L.setBaseWebsocketURL)(t))},setMenus:function(t){return e((0,L.setMenus)(t))},setUserInfo:function(t){return e((0,L.setUserInfo)(t))},setToken:function(t){return e((0,L.setToken)(t))},setIsToggleMenu:function(t){return e((0,L.setIsToggleMenu)(t))},setViewWidth:function(t){return e((0,L.setViewWidth)(t?k-80-20:k-200-20))}}}))((function(e){return o().createElement(B(),E()({},e,{menuConfigs:_}))})),M=n(84490),x=n.n(M),T=n(17787),W=n(80549),b=n.n(W),j=n(67195),v=n.n(j),P=n(64214),N=n.n(P),A=(0,T.VueInReact)(N()),y=function(){return o().createElement(m.Switch,null,o().createElement(m.Route,{path:"/root",exact:!0,render:function(){return o().createElement(m.Redirect,{to:"/root/innerPage/self/home"})}}),o().createElement(m.Route,{path:"/root/innerPage/self/home",exact:!0,component:b()}),o().createElement(m.Route,{path:"/root/innerPage/project/project",exact:!0,component:v()}),o().createElement(m.Route,{path:"/root/innerPage/project/vue2project",exact:!0},o().createElement(r.Fragment,null,o().createElement(A,null))))},V=document.documentElement.clientWidth,C=(0,s.connect)((function(e){return d()({},e)}),(function(e){return{setBaseURL:function(t){return e((0,L.setBaseURL)(t))},setBaseHostURL:function(t){return e((0,L.setBaseHostURL)(t))},setBaseWebsocketURL:function(t){return e((0,L.setBaseWebsocketURL)(t))},setMenus:function(t){return e((0,L.setMenus)(t))},setUserInfo:function(t){return e((0,L.setUserInfo)(t))},setToken:function(t){return e((0,L.setToken)(t))},setIsToggleMenu:function(t){return e((0,L.setIsToggleMenu)(t))},setViewWidth:function(t){return e((0,L.setViewWidth)(t?V-80-20:V-200-20))}}}))((function(e){return o().createElement(x(),E()({},e,{viewRouterComponent:o().createElement(y,null)}))})),H=function(){return o().createElement(s.Provider,{store:p.store},o().createElement(l.r,{loading:null,persistor:p.persistor},o().createElement(i.default,{locale:a.Z},o().createElement(m.BrowserRouter,null,o().createElement(m.Switch,null,o().createElement(m.Route,{path:"/",exact:!0,render:function(){return o().createElement(m.Redirect,{to:"/login"})}}),o().createElement(m.Route,{path:"/login",exact:!0,component:I}),o().createElement(m.Route,{path:"/root",component:C}))))))};u().render(o().createElement(H,null),document.getElementById("emp-root"))}}]);