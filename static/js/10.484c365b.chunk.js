(this["webpackJsonpluminour-react-challenge"]=this["webpackJsonpluminour-react-challenge"]||[]).push([[10],{148:function(e,t,n){"use strict";var r=n(19),a=n.n(r),c=n(30),u=n(35),o=n(12),i=n(25),s=function(){return JSON.parse(localStorage.getItem("carts")||"[]")},l=function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.i)(100);case 2:return n=s().find((function(e){return e.userId===t}))||{items:[]},e.abrupt("return",n.items);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,u,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s(),c={userId:t,items:n},u=[],(i=r.find((function(e){return e.userId===t})))||(u=[].concat(Object(o.a)(r),[c])),i&&(u=r.map((function(e){return e.userId===t?c:e}))),a=u,localStorage.setItem("carts",JSON.stringify(a)),e.abrupt("return",c);case 8:case"end":return e.stop()}var a}),e)})));return function(t,n){return e.apply(this,arguments)}}();n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return v}));var d=function(e){return{type:u.a.setItems,payload:{items:e}}},p=function(){return{type:u.a.fetchStart}},b=function(e){return{type:u.a.fetchEnd,payload:{errorMessage:e}}},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(p()),t.prev=1,t.next=4,l(e);case 4:r=t.sent,n(d(r)),n(b()),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),n(b());case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},v=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(p()),n.prev=1,n.next=4,f(e,t);case 4:r(d(t)),r(b()),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),r(b(n.t0.message));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()}},150:function(e,t,n){"use strict";var r=n(44),a=n(0),c=n(26),u=n(19),o=n.n(u),i=n(30),s=n(36),l=n(12),f=n(25),d=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/books/v1/volumes?q=book");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){return JSON.parse(localStorage.getItem("books")||"null")},b=function(e){return localStorage.setItem("books",JSON.stringify(e))},m=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.i)(1e3);case 2:return e.abrupt("return",p());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.i)(1e3);case 2:return n=p()||[],r=[].concat(Object(l.a)(t),Object(l.a)(n)),b(r),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.i)(1e3);case 2:n=p()||[],r=Object(f.h)(t,n),b(r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.i)(1e3);case 2:return n=p()||[],r=n.filter((function(e){return!t.find((function(t){return t.id===e.id}))})),b(r),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){return{type:s.a.setBooks,payload:{books:e}}},k=function(e){return{type:s.a.addBooks,payload:{books:e}}},g=function(e){return{type:s.a.updateBooks,payload:{books:e}}},y=function(e){return{type:s.a.deleteBooks,payload:{books:e}}},x=function(){return{type:s.a.fetchStart}},w=function(e){return{type:s.a.fetchEnd,payload:{errorMessage:e}}};n.d(t,"b",(function(){return E})),n.d(t,"a",(function(){return I}));var E=function(e){var t=Object(a.useState)(!e),n=Object(r.a)(t,2),u=n[0],s=n[1],l=Object(c.b)(),p=Object(c.c)((function(e){return e.books})),b=p.books,O=p.loading,j=p.hasLoaded,k=p.errorMessage;return Object(a.useEffect)((function(){j&&u||O||(s(!0),l(function(){var e=Object(i.a)(o.a.mark((function e(t){var n,r,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(x()),e.prev=1,e.next=4,m();case 4:if(null!==(n=e.sent)){e.next=14;break}return e.next=8,d();case 8:return r=e.sent,a=r&&r.items.map((function(e){return Object(f.j)(e)}))||[],e.next=12,v(a);case 12:c=e.sent,t(h(c));case 14:n&&t(h(n)),t(w()),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(1),console.log(e.t0),t(w(e.t0.message));case 22:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}()))}),[j,O,e,l,u]),{books:b,loading:O,hasLoaded:j,errorMessage:k}},I=function(){var e=Object(c.b)();return{deleteBooks:function(t){return e(function(e){return function(){var t=Object(i.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(x()),t.prev=1,t.next=4,j(e);case 4:n(y(e)),n(w()),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),n(w(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(t))},addBooks:function(t){return e(function(e){return function(){var t=Object(i.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(x()),t.prev=1,t.next=4,v(e);case 4:r=t.sent,n(k(r)),n(w()),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),n(w(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))},updateBooks:function(t){return e(function(e){return function(){var t=Object(i.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(x()),t.prev=1,t.next=4,O(e);case 4:n(g(e)),n(w()),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),n(w(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}},151:function(e,t,n){"use strict";var r=n(44),a=n(9),c=n(26),u=n(149),o=n(19),i=n.n(o),s=n(30),l=n(16),f=n(12),d=n(25),p=function(){return JSON.parse(localStorage.getItem("orders")||"[]")},b=function(e){return localStorage.setItem("orders",JSON.stringify(e))},m=function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.i)(1e3);case 2:return n=p(),e.abrupt("return",n.filter((function(e){return e.buyer.id===t})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.i)(1e3);case 2:return n=p(),r=[].concat(Object(f.a)(t),Object(f.a)(n)),b(r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.i)(1e3);case 2:n=p(),r=Object(d.h)(t,n),b(r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=n(148),h=function(e){return{type:l.a.setOrders,payload:{orders:e}}},k=function(e){return{type:l.a.updateOrders,payload:{orders:e}}},g=function(){return{type:l.a.fetchStart}},y=function(){return{type:l.a.fetchEnd}},x=function(e){return function(){var t=Object(s.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(g()),t.prev=1,t.next=4,m(e);case 4:r=t.sent,n(h(r)),n(y()),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),n(y());case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(s.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(g()),t.prev=1,t.next=4,O(e);case 4:n(k(e)),n(y()),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),n(y());case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},E=n(49),I=n(0);n.d(t,"d",(function(){return S})),n.d(t,"c",(function(){return C})),n.d(t,"a",(function(){return N})),n.d(t,"b",(function(){return B}));var S=function(){return Object(c.c)((function(e){return e.orders}))},C=function(){var e=Object(c.b)();return{createOrder:function(t,n){return e((r={id:Object(u.uuid)(),buyer:{id:t.id,name:t.name,surname:t.surname,username:t.username},status:l.b.new,items:n},function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g()),e.prev=1,e.next=4,v([r]);case 4:n=e.sent,t(h(n)),t(Object(j.b)(r.buyer.id,[])),t(y()),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),t(y());case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()));var r},confirmOrder:function(t){return e(w([Object(a.a)({},t,{status:l.b.paid})]))},cancelOrder:function(t){return e(w([Object(a.a)({},t,{status:l.b.canceled})]))},updateOrder:function(t){return e(w([t]))}}},N=function(){var e=Object(c.b)(),t=Object(E.b)(),n=Object(c.c)((function(e){return e.orders}));return Object(I.useEffect)((function(){!n.hasLoaded&&!n.loading&&t.me&&t.me.id&&e(x(t.me.id))})),Object(a.a)({},n,{loading:t.loading||n.loading})},B=function(e){var t=Object(I.useState)(!1),n=Object(r.a)(t,2),a=n[0],u=n[1],o=Object(c.b)(),i=Object(c.c)((function(e){return e.orders})),s=i.orders,l=i.loading,f=i.hasLoaded;return Object(I.useEffect)((function(){!e||a||l||(u(!0),o(x(e)))}),[e,l,o,a]),{orders:s,loading:l,hasLoaded:f}}},178:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(150),u=n(135),o=n(165),i=n(1),s=n(2),l=(n(5),n(3)),f=n(104),d=n(4),p=a.a.forwardRef((function(e,t){var n=e.classes,r=e.className,c=e.raised,u=void 0!==c&&c,o=Object(s.a)(e,["classes","className","raised"]);return a.a.createElement(f.a,Object(i.a)({className:Object(l.a)(n.root,r),elevation:u?8:1,ref:t},o))})),b=Object(d.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(p),m=["video","audio","picture","iframe","img"],v=a.a.forwardRef((function(e,t){var n=e.children,r=e.classes,c=e.className,u=e.component,o=void 0===u?"div":u,f=e.image,d=e.src,p=e.style,b=Object(s.a)(e,["children","classes","className","component","image","src","style"]),v=-1!==m.indexOf(o),O=!v&&f?Object(i.a)({backgroundImage:'url("'.concat(f,'")')},p):p;return a.a.createElement(o,Object(i.a)({className:Object(l.a)(r.root,c,v&&r.media,-1!=="picture img".indexOf(o)&&r.img),ref:t,style:O,src:v?f||d:void 0},b),n)})),O=Object(d.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(v),j=a.a.forwardRef((function(e,t){var n=e.classes,r=e.className,c=e.component,u=void 0===c?"div":c,o=Object(s.a)(e,["classes","className","component"]);return a.a.createElement(u,Object(i.a)({className:Object(l.a)(n.root,r),ref:t},o))})),h=Object(d.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(j),k=n(138),g=n(137),y=function(e){var t=e.book,n=e.handleClick,r=t.id,c=t.title,u=t.author,i=t.published_date,s=t.book_cover,l=t.quantity;return a.a.createElement(o.a,{item:!0,xs:12,sm:6,md:6,lg:3},a.a.createElement(b,{raised:!0},a.a.createElement(o.a,{container:!0,spacing:1,direction:"row",justify:"center",alignItems:"center"},a.a.createElement(o.a,{item:!0,xs:4,sm:3},a.a.createElement(O,{image:s,component:"img",title:"".concat(c," image")})),a.a.createElement(o.a,{item:!0,xs:8},a.a.createElement(h,null,a.a.createElement(o.a,{container:!0,direction:"column",wrap:"nowrap"},a.a.createElement(k.a,{component:"h6",variant:"h6"},c),a.a.createElement(k.a,{noWrap:!0,variant:"subtitle2",color:"textSecondary"},"ID: ".concat(r)),a.a.createElement(k.a,{variant:"subtitle2",color:"textSecondary"},u),a.a.createElement(k.a,{noWrap:!0,variant:"subtitle2",color:"textSecondary"},i),a.a.createElement(k.a,{noWrap:!0,variant:"subtitle2",color:"textSecondary"},"Quantity: ".concat(l)),a.a.createElement(o.a,{container:!0,spacing:1},a.a.createElement(g.a,{variant:"outlined",onClick:function(){return n(t)}},"Add to Cart"))))))))},x=n(26),w=n(148),E=n(25),I=function(){var e=Object(x.b)(),t=Object(x.c)((function(e){return e.cartItems})).items;return{addOrIncreaseItem:Object(r.useCallback)((function(n,r){if(!Object(E.c)(r.id,t)){var a=Object(E.a)(r,t);return e(Object(w.b)(n,a))}var c=Object(E.b)(r,t);return e(Object(w.b)(n,c))}),[t,e]),removeOrDecreaseItem:Object(r.useCallback)((function(n,r){var a=Object(E.c)(r.id,t);if(a&&1===a.quantity){var c=Object(E.f)(r,t);return e(Object(w.b)(n,c))}var u=Object(E.g)(r,t);return e(Object(w.b)(n,u))}),[t,e]),removeItem:Object(r.useCallback)((function(n,r){var a=t.filter((function(e){return e.id!==r.id}));return e(Object(w.b)(n,a))}),[t,e])}},S=n(44),C=n(49),N=n(180),B=n(136),J=n(169),M=n(170),L=n(181),q=n(171),R=n(151),W=function(){var e=Object(r.useState)(!1),t=Object(S.a)(e,2),n=t[0],c=t[1],i=Object(C.b)().me,s=function(e){var t=Object(x.b)(),n=Object(x.c)((function(e){return e.cartItems})),a=n.items,c=n.loading,u=n.hasLoaded;return Object(r.useEffect)((function(){!e||u||c||t(Object(w.a)(e))}),[e,u,c,t]),{items:a,loading:c,hasLoaded:u}}(i&&i.id||"").items,l=I(),f=l.addOrIncreaseItem,d=l.removeOrDecreaseItem,p=l.removeItem,b=Object(R.d)().loading,m=Object(R.c)().createOrder,v=s.reduce((function(e,t){return e+t.quantity}),0),O=function(e){return function(){return i&&i.id&&f(i.id,e)}},j=function(e){return function(){return i&&i.id&&d(i.id,e)}},h=function(e){return function(){return i&&i.id&&p(i.id,e)}};return i?a.a.createElement(o.a,{container:!0,justify:"flex-end"},b&&a.a.createElement(u.a,null),a.a.createElement(g.a,{disabled:!!b||0===s.length,onClick:function(){return v>0&&c(!0)}},"Cart: ".concat(v)),a.a.createElement(N.a,{anchor:"right",open:n,onClose:function(){return c(!1)}},a.a.createElement(o.a,{container:!0},a.a.createElement(B.a,null,s.map((function(e){return a.a.createElement(J.a,{key:"".concat(e.id),divider:!0},a.a.createElement(M.a,null,a.a.createElement(L.a,{alt:e.title,src:e.book_cover,variant:"square"})),a.a.createElement(q.a,{primary:e.title}),a.a.createElement("div",null,a.a.createElement(g.a,{onClick:j(e)},"<"),a.a.createElement("span",null,"Quantity: ".concat(e.quantity)),a.a.createElement(g.a,{onClick:O(e)},">")),a.a.createElement("div",null,a.a.createElement(g.a,{onClick:h(e)},"Remove")))})))),s.length>0&&a.a.createElement(o.a,{container:!0,justify:"center"},a.a.createElement(g.a,{onClick:function(){if(i)return c(!1),m(i,s)},variant:"contained",fullWidth:!1},"Create Order")))):null};t.default=function(){var e=Object(c.b)(),t=e.books,n=e.loading,r=I().addOrIncreaseItem,i=Object(C.b)().me,s=function(e){return i&&i.id&&r(i.id,e)};return a.a.createElement("div",null,n&&a.a.createElement(u.a,null),!n&&a.a.createElement(o.a,{container:!0,spacing:1},a.a.createElement(W,null),t.map((function(e){return a.a.createElement(y,{key:e.id,book:e,handleClick:s})}))))}}}]);
//# sourceMappingURL=10.484c365b.chunk.js.map