(self.webpackChunk_emp_react_export=self.webpackChunk_emp_react_export||[]).push([["src_bootstrap_tsx-webpack_sharing_consume_default_classnames_classnames"],{27298:function(e,t,n){"use strict";n.r(t);var r=n(22491),o=n.n(r),c=n(57673),s=n.n(c),u=(n(57239),n(91250)),a=n(82925),i=n(31929),l=n(78603),m=n(92523),f=n(25905),p=n(81109),d=n.n(p),h=n(67154),E=n.n(h),R=n(6479),g=n.n(R),U=n(61934),_=[{type:U.INTERNAL_PAGE,name:"首页",owner:"self",path:"home"},{type:U.MENU,name:"项目模块",path:"inspectionsMenu",children:[{type:U.INTERNAL_PAGE,name:"项目模块",owner:"project",path:"project"}]}].map((function(e){var t=e.children,n=void 0===t?[]:t,r=g()(e,["children"]),o=n.map((function(e){return d()(d()({},e),{},{id:(1e10*Math.random()).toFixed(0)})}));return d()(d()({},r),{},{children:o,id:(1e10*Math.random()).toFixed(0)})})),B=n(49575),L=n(55264),k=n.n(L),w=document.documentElement.clientWidth,M=(0,u.connect)((function(e){return d()({},e)}),(function(e){return{setBaseURL:function(t){return e((0,B.setBaseURL)(t))},setBaseHostURL:function(t){return e((0,B.setBaseHostURL)(t))},setBaseWebsocketURL:function(t){return e((0,B.setBaseWebsocketURL)(t))},setMenus:function(t){return e((0,B.setMenus)(t))},setUserInfo:function(t){return e((0,B.setUserInfo)(t))},setToken:function(t){return e((0,B.setToken)(t))},setIsToggleMenu:function(t){return e((0,B.setIsToggleMenu)(t))},setViewWidth:function(t){return e((0,B.setViewWidth)(t?w-80-20:w-200-20))}}}))((function(e){return o().createElement(k(),E()({},e,{menuConfigs:_}))})),I=n(84490),x=n.n(I),T=n(80549),W=n.n(T),b=n(67195),P=n.n(b),v=function(){return o().createElement(m.Switch,null,o().createElement(m.Route,{path:"/root",exact:!0,render:function(){return o().createElement(m.Redirect,{to:"/root/innerPage/self/home"})}}),o().createElement(m.Route,{path:"/root/innerPage/self/home",exact:!0,component:W()}),o().createElement(m.Route,{path:"/root/innerPage/project/project",exact:!0,component:P()}))},N=document.documentElement.clientWidth,j=(0,u.connect)((function(e){return d()({},e)}),(function(e){return{setBaseURL:function(t){return e((0,B.setBaseURL)(t))},setBaseHostURL:function(t){return e((0,B.setBaseHostURL)(t))},setBaseWebsocketURL:function(t){return e((0,B.setBaseWebsocketURL)(t))},setMenus:function(t){return e((0,B.setMenus)(t))},setUserInfo:function(t){return e((0,B.setUserInfo)(t))},setToken:function(t){return e((0,B.setToken)(t))},setIsToggleMenu:function(t){return e((0,B.setIsToggleMenu)(t))},setViewWidth:function(t){return e((0,B.setViewWidth)(t?N-80-20:N-200-20))}}}))((function(e){return o().createElement(x(),E()({},e,{viewRouterComponent:o().createElement(v,null)}))})),y=function(){return o().createElement(u.Provider,{store:f.store},o().createElement(l.r,{loading:null,persistor:f.persistor},o().createElement(i.default,{locale:a.Z},o().createElement(m.BrowserRouter,null,o().createElement(m.Switch,null,o().createElement(m.Route,{path:"/",exact:!0,render:function(){return o().createElement(m.Redirect,{to:"/login"})}}),o().createElement(m.Route,{path:"/login",exact:!0,component:M}),o().createElement(m.Route,{path:"/root",component:j}))))))};s().render(o().createElement(y,null),document.getElementById("emp-root"))}}]);