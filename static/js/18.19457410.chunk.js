(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[18],{1087:function(e,t,a){"use strict";a.r(t);var i=a(3),c=a.n(i),l=a(505),n=a(8),d=a(18),s=a(1),r=a(461),o=(a(488),a(465),a(891),a(475)),u=a(476),v=a(510),p=a(482),j=a(509),m=a(514),b=a(7),h=function(e){var t=e.product,a=Object(s.useState)([]),i=Object(d.a)(a,2),c=i[0],l=i[1],n=Object(s.useState)([]),r=Object(d.a)(n,2),o=r[0],u=r[1];return Object(s.useEffect)((function(){if(t){var e=null===t||void 0===t?void 0:t.product_options;null===e||void 0===e||e.forEach((function(e){"k\xedch th\u01b0\u1edbc"===(null===e||void 0===e?void 0:e.name.toLowerCase())&&u(e.values),"m\xe0u s\u1eafc"===(null===e||void 0===e?void 0:e.name.toLowerCase())&&l(e.values)}))}})),Object(b.jsx)("div",{children:Object(b.jsx)(v.a,{className:"border-dark",children:Object(b.jsxs)(p.a,{children:[Object(b.jsxs)("div",{className:"product-detail--contain__info",children:[Object(b.jsx)("h2",{className:"product-detail--title",children:"M\xe3 s\u1ea3n ph\u1ea9m"}),Object(b.jsx)("p",{children:null===t||void 0===t?void 0:t.id})]}),Object(b.jsxs)("div",{className:"product-detail--contain__info",children:[Object(b.jsx)("h2",{className:"product-detail--title",children:"Lo\u1ea1i s\u1ea3n ph\u1ea9m"}),Object(b.jsx)("p",{children:null===t||void 0===t?void 0:t.category})]}),Object(b.jsxs)("div",{className:"product-detail--contain__info",children:[Object(b.jsx)("h2",{className:"product-detail--title",children:"Nh\xe3n hi\u1ec7u"}),Object(b.jsx)("p",{children:null===t||void 0===t?void 0:t.brand})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"product-detail--contain",children:[Object(b.jsx)("h2",{className:"product-detail--title",children:"K\xedch th\u01b0\u1edbc"}),Object(b.jsx)("div",{className:"product-detail--size-contain d-flex",children:o&&(null===o||void 0===o?void 0:o.map((function(e,t){return Object(b.jsx)("div",{className:"product-detail--size text-uppercase",children:e},t)})))})]}),Object(b.jsxs)("div",{className:"product-detail--contain",children:[Object(b.jsx)("h2",{className:"product-detail--title",children:"M\xe0u"}),Object(b.jsx)("div",{className:"product-detail--color-contain d-flex",children:c&&(null===c||void 0===c?void 0:c.map((function(e,t){return Object(b.jsx)("div",{className:"product-detail--color",children:e},t)})))})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"input-add-item",children:[Object(b.jsx)(j.a,{className:"name",children:"Th\xeam thu\u1ed9c t\xednh"}),Object(b.jsx)(m.a,{isClearable:!0})]})]})})})},x=a(123),O=a(470),f=a(471),y=a(459),_=a.n(y),g=a(472),N=a.n(g),w=a(477),k=function(e){var t=e.product,a=Object(s.useState)([]),i=Object(d.a)(a,2),c=i[0],l=i[1];Object(s.useEffect)((function(){t&&l(null===t||void 0===t?void 0:t.product_images)}));var n=new _.a({meta:{type:"avatar"},autoProceed:!0,restrictions:{allowedFileTypes:["image/*"]}});n.use(N.a),n.on("thumbnail:generated",(function(e,a){var i={file:e,preview:a};c.push(i),l(Object(x.a)(c)),t.product_images=c}));var r=new _.a({meta:{type:"avatar"},autoProceed:!0,restrictions:{allowedFileTypes:["image/*"]}});r.use(N.a),r.on("thumbnail:generated",(function(e,a){var i={file:e,preview:a};c.push(i),l(Object(x.a)(c)),t.product_images=c}));return Object(b.jsx)("div",{children:Object(b.jsx)(v.a,{className:"border-dark mb-0",children:Object(b.jsx)(p.a,{children:Object(b.jsxs)("div",{className:"product-detail--contain",children:[Object(b.jsxs)("div",{className:"d-flex justify-content-between align-items-center",style:{marginBottom:"10px"},children:[Object(b.jsx)("h3",{className:"product-detail--title product-detail-title__detail mb-0",children:"\u1ea2nh \u0111\u1ea1i di\u1ec7n"}),Object(b.jsx)("div",{className:"product-detail--add-image",children:Object(b.jsx)(f.a,{uppy:n,accept:"image/png, image/jpeg",locale:{strings:{dropHereOr:"Th\xeam h\xecnh \u1ea3nh"}}})})]}),Object(b.jsx)("div",{className:"product-detail--contain-image",style:{minHeight:"506px"},children:Object(b.jsx)("div",{className:"product-detail--image-product",children:c.length?c.map((function(e,a){return Object(b.jsx)("div",{className:"rounded",children:Object(b.jsxs)("div",{className:"image",children:[Object(b.jsx)("img",{src:(null===e||void 0===e?void 0:e.thumb_url)?null===e||void 0===e?void 0:e.thumb_url:null===e||void 0===e?void 0:e.preview,alt:"imgProduct",className:"img"}),Object(b.jsx)("div",{className:"btn-delete",children:Object(b.jsx)("img",{src:O.a,alt:"delete",onClick:function(a){!function(e,a){c.splice(c.indexOf(a),1),l(Object(x.a)(c)),t.product_images=c}(0,e)}})})]})},a)})):Object(b.jsxs)("div",{className:"empty",children:[Object(b.jsxs)("div",{className:"empty-image",children:[Object(b.jsx)("img",{className:"img-contain",src:w.a,alt:"empty"}),Object(b.jsx)("p",{children:"Ch\u1ecdn h\xecnh"})]}),Object(b.jsx)(f.a,{uppy:r})]})})})]})})})})},C=a(1079),S=a(1059),T=a(1100),F=a(1060),E=a(1062),P=a(573),z=a(659),L=a(647),B=a(672),H=function(e){var t=e.product,a=e.variant_groups,i=e.setVariantFromTable;var c=Object(s.useState)(),l=Object(d.a)(c,2),n=l[0],r=l[1];return Object(b.jsx)(v.a,{className:"mb-0",children:Object(b.jsx)(p.a,{className:"p-0",children:Object(b.jsx)("div",{className:"table-contain",children:Object(b.jsxs)(C.a,{className:"table-product",responsive:!0,children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",className:"text-nowrap text-center",children:"\u1ea2nh"}),Object(b.jsx)("th",{scope:"col",className:"text-nowrap",children:"T\xean phi\xean b\u1ea3n s\u1ea3n ph\u1ea9m"}),Object(b.jsx)("th",{scope:"col",className:"text-nowrap text-center",children:"Gi\xe1"}),Object(b.jsx)("th",{scope:"col",className:"text-nowrap text-center",children:"K\xedch th\u01b0\u1edbc"}),Object(b.jsx)("th",{scope:"col",className:"text-nowrap text-center",children:"M\xe0u"}),Object(b.jsx)("th",{scope:"col",className:"text-nowrap text-center",children:"S\u1ed1 l\u01b0\u1ee3ng"}),Object(b.jsx)("th",{scope:"col",className:"text-nowrap text-center",children:"T\u1ed3n kho"}),Object(b.jsx)("th",{scope:"col",className:"text-nowrap text-center"})]})}),Object(b.jsx)("tbody",{children:null===a||void 0===a?void 0:a.map((function(e,a){var c,l,d,s,o;return Object(b.jsxs)("tr",{className:n===a?"bg-grey":"",onClick:function(t){r(a),i(e)},children:[Object(b.jsx)("td",{className:"text-nowrap",children:Object(b.jsx)("div",{className:"table-img",children:Object(b.jsx)("img",{src:null===e||void 0===e||null===(c=e.default)||void 0===c?void 0:c.thumb_url,alt:""})})}),Object(b.jsx)("td",{className:"text-nowrap",children:null===t||void 0===t?void 0:t.name}),Object(b.jsxs)("td",{className:"text-nowrap text-center",children:[Object(P.a)(null===e||void 0===e||null===(l=e.default)||void 0===l?void 0:l.variant_retail_price),"\u0111"]}),Object(b.jsx)("td",{className:"text-center",children:null===e||void 0===e?void 0:e.sizes.join(" - ")}),Object(b.jsx)("td",{className:"text-nowrap text-center",children:null===e||void 0===e||null===(d=e.default)||void 0===d?void 0:d.color}),Object(b.jsx)("td",{className:"text-nowrap text-center",children:null===e||void 0===e||null===(s=e.default)||void 0===s?void 0:s.color}),Object(b.jsx)("td",{className:"text-nowrap text-center",children:null===e||void 0===e||null===(o=e.default)||void 0===o?void 0:o.color}),Object(b.jsx)("td",{className:"text-nowrap text-center",children:Object(b.jsxs)(S.a,{children:[Object(b.jsx)(T.a,{tag:"div",className:"btn btn-sm",children:Object(b.jsx)(z.a,{className:"cursor-pointer"})}),Object(b.jsxs)(F.a,{right:!0,children:[Object(b.jsxs)(E.a,{to:"/product/detail/".concat(e.id),className:"w-100",onClick:function(){},children:[Object(b.jsx)(L.a,{size:14,className:"mr-50"}),Object(b.jsx)("span",{className:"align-middle",children:"Ch\u1ec9nh s\u1eeda"})]}),Object(b.jsxs)(E.a,{className:"w-100",onClick:function(){},children:[Object(b.jsx)(B.a,{size:14,className:"mr-50"}),Object(b.jsx)("span",{className:"align-middle",children:"X\xf3a"})]})]})]})})]},a)}))})]})})})})},R=a(947),V=a(707),M=function(e){var t=e.product,a=Object(s.useState)((null===t||void 0===t?void 0:t.product_description)?V.EditorState.createWithContent(V.ContentState.createFromText(null===t||void 0===t?void 0:t.product_description)):V.EditorState.createEmpty()),i=Object(d.a)(a,2),c=i[0],l=i[1];return Object(b.jsxs)("div",{style:{marginBottom:"25px"},children:[Object(b.jsx)("h2",{className:"product-detail--title",children:"M\xf4 t\u1ea3 s\u1ea3n ph\u1ea9m"}),Object(b.jsx)(R.Editor,{editorClassName:"rounded-0",toolbarClassName:"rounded-0 editor",editorState:c,onEditorStateChange:function(e){return function(e){l(e),t.product_description=e.getCurrentContent().getPlainText()}(e)}})]})},U=function(e){var t=e.product,a=Object(s.useState)((null===t||void 0===t?void 0:t.product_image_details)?null===t||void 0===t?void 0:t.product_image_details:[]),i=Object(d.a)(a,2),c=i[0],l=i[1],n=new _.a({meta:{type:"avatar"},autoProceed:!0,restrictions:{allowedFileTypes:["image/*"]}});n.use(N.a),n.on("thumbnail:generated",(function(e,a){var i={file:e,preview:a};c.push(i),l(Object(x.a)(c)),t.product_image_details=c}));var r=new _.a({meta:{type:"avatar"},autoProceed:!0,restrictions:{allowedFileTypes:["image/*"]}});r.use(N.a),r.on("thumbnail:generated",(function(e,a){var i={file:e,preview:a};c.push(i),l(Object(x.a)(c)),t.product_image_details=c}));return Object(b.jsxs)("div",{className:"product-detail--contain",children:[Object(b.jsxs)("div",{className:"d-flex justify-content-between align-items-center",style:{marginBottom:"10px"},children:[Object(b.jsx)("h3",{className:"product-detail--title product-detail-title__detail mb-0",children:"H\xecnh \u1ea3nh m\xf4 t\u1ea3 s\u1ea3n ph\u1ea9m"}),Object(b.jsx)("div",{className:"product-detail--add-image",children:Object(b.jsx)(f.a,{uppy:r,locale:{strings:{dropHereOr:"Th\xeam h\xecnh \u1ea3nh"}}})})]}),Object(b.jsx)("div",{className:"product-detail--contain-image",children:c.length?Object(b.jsx)("div",{className:"image-grid",children:c.map((function(e,a){return Object(b.jsx)("div",{className:"rounded",children:Object(b.jsxs)("div",{className:"image",children:[Object(b.jsx)("img",{src:(null===e||void 0===e?void 0:e.image_url)?null===e||void 0===e?void 0:e.image_url:null===e||void 0===e?void 0:e.preview,alt:"imgProduct",className:"img"}),Object(b.jsx)("div",{className:"btn-delete",children:Object(b.jsx)("img",{src:O.a,alt:"delete",onClick:function(a){!function(e,a){c.splice(c.indexOf(a),1),l(Object(x.a)(c)),t.product_image_details=c}(0,e)}})})]})},a)}))}):Object(b.jsxs)("div",{className:"empty",children:[Object(b.jsxs)("div",{className:"empty-image",children:[Object(b.jsx)("img",{className:"img-contain",src:w.a,alt:"empty"}),Object(b.jsx)("p",{children:"Ch\u1ecdn h\xecnh"})]}),Object(b.jsx)(f.a,{uppy:n})]})})]})},G=a(6),D=function(e){var t=e.product,a=e.type_values,i=Object(s.useState)([]),r=Object(d.a)(i,2),o=r[0],u=r[1];function v(e,a){var i=o[a];if(void 0===i){var c;if(i={current_type:e,value:"",label:""},void 0!==(null===t||void 0===t?void 0:t.product_types)&&(null===t||void 0===t||null===(c=t.product_types)||void 0===c?void 0:c.length)>0){var n,d=Object(l.a)(null===e||void 0===e?void 0:e.product_types);try{for(d.s();!(n=d.n()).done;){var s,r=n.value,u=Object(l.a)(null===t||void 0===t?void 0:t.product_types);try{for(u.s();!(s=u.n()).done;){var v,p=s.value;if(e.id===p.type_value_id)r.id===(null===p||void 0===p||null===(v=p.product_has_type)||void 0===v?void 0:v.product_type_id)&&(i={current_type:e,product_type:r,value:null===r||void 0===r?void 0:r.id,label:null===r||void 0===r?void 0:r.name})}}catch(j){u.e(j)}finally{u.f()}}}catch(j){d.e(j)}finally{d.f()}}return o[a]=i,o[a]}return o[a]}function p(){return(p=Object(n.a)(c.a.mark((function e(a,i,n){var d,s,r,v,p,j,m,b,h,O,f,y;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===(null===a||void 0===a?void 0:a.value)||null===(null===a||void 0===a?void 0:a.value)||""===(null===a||void 0===a?void 0:a.value)){e.next=12;break}if(!(d=null===i||void 0===i?void 0:i.product_types.filter((function(e){return(null===e||void 0===e?void 0:e.id)===(null===a||void 0===a?void 0:a.value)})))||0!==(null===d||void 0===d?void 0:d.length)){e.next=8;break}return s={type_value_id:i.id,name:a.value},e.next=6,G.a.post("/admin/product/type/add",s);case 6:(r=e.sent)&&(p=null===r||void 0===r||null===(v=r.data)||void 0===v?void 0:v.data,null===i||void 0===i||i.product_types.push(p),null===i||void 0===i||i.product_type_converts.push({current_type:i,value:p.id,label:p.name}),d.push(p));case 8:if(j=o[n]){j.current_type=i,j.product_type=d[0],j.value=null===(m=d[0])||void 0===m?void 0:m.id,j.label=null===a||void 0===a?void 0:a.label,o[n]=j,u(Object(x.a)(o)),b=null,h=Object(l.a)(t.product_types);try{for(h.s();!(O=h.n()).done;)(f=O.value).type_value_id===i.id&&(b=f)}catch(c){h.e(c)}finally{h.f()}b?(t.product_types.splice(t.product_types.indexOf(b),1),t.product_types.push(j)):t.product_types.push(j),console.log(t.product_types)}e.next=14;break;case 12:(y=o[n])&&(y.current_type=i,y.product_type=null,y.value="",y.label="",o[n]=y,u(Object(x.a)(o)),t.product_types.splice(t.product_types.indexOf(y),1));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{children:null===a||void 0===a?void 0:a.map((function(e,t){return Object(b.jsxs)("div",{className:"product-detail--item",children:[Object(b.jsx)(j.a,{className:"name",children:null===e||void 0===e?void 0:e.name}),Object(b.jsx)(m.a,{isClearable:!0,value:v(e,t),onChange:function(a){(function(e,t,a){return p.apply(this,arguments)})(a,e,t).then()},options:null===e||void 0===e?void 0:e.product_type_converts})]},t)}))})})},I=function(e){var t=e.product,a=e.default_type_values,i=Object(s.useState)([]),r=Object(d.a)(i,2),o=r[0],u=r[1];function v(){return(v=Object(n.a)(c.a.mark((function e(a,i,l){var n,d,s,r,v,p,j,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===(null===a||void 0===a?void 0:a.value)||null===(null===a||void 0===a?void 0:a.value)||""===(null===a||void 0===a?void 0:a.value)){e.next=12;break}if(!(n=null===i||void 0===i?void 0:i.product_types.filter((function(e){return(null===e||void 0===e?void 0:e.id)===(null===a||void 0===a?void 0:a.value)})))||0!==(null===n||void 0===n?void 0:n.length)){e.next=8;break}return d={type_value_id:i.id,name:a.value},e.next=6,G.a.post("/admin/product/type/add",d);case 6:(s=e.sent)&&(v=null===s||void 0===s||null===(r=s.data)||void 0===r?void 0:r.data,null===i||void 0===i||i.product_types.push(v),null===i||void 0===i||i.product_type_converts.push({current_type:i,value:v.id,label:v.name}),n.push(v));case 8:(p=o[l])&&(p.current_type=i,p.product_type=n,p.value=null===(j=n[0])||void 0===j?void 0:j.id,p.label=null===a||void 0===a?void 0:a.label,u(Object(x.a)(o)),t.product_types.push(p)),e.next=14;break;case 12:(m=o[l])&&(m.current_type=i,m.product_type=null,m.value="",m.label="",u(Object(x.a)(o)),t.product_types.splice(t.product_types.indexOf(m),1));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,a){var i=o[a];if(void 0===i){var c;if(i={current_type:e,value:"",label:""},void 0!==(null===t||void 0===t?void 0:t.product_types)&&(null===t||void 0===t||null===(c=t.product_types)||void 0===c?void 0:c.length)>0){var n,d=Object(l.a)(null===t||void 0===t?void 0:t.product_types);try{for(d.s();!(n=d.n()).done;){var s=n.value;if(e.id===s.type_value_id){var r,u=Object(l.a)(null===e||void 0===e?void 0:e.product_types);try{for(u.s();!(r=u.n()).done;){var v,p=r.value;p.id===(null===s||void 0===s||null===(v=s.product_has_type)||void 0===v?void 0:v.product_type_id)&&(i={current_type:e,product_type:p,value:null===p||void 0===p?void 0:p.id,label:null===p||void 0===p?void 0:p.name})}}catch(j){u.e(j)}finally{u.f()}}}}catch(j){d.e(j)}finally{d.f()}}return o[a]=i,o[a]}return o[a]}return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{children:null===a||void 0===a?void 0:a.map((function(e,t){return Object(b.jsxs)("div",{className:"product-detail--item",children:[Object(b.jsx)(j.a,{className:"name",children:null===e||void 0===e?void 0:e.name}),Object(b.jsx)(m.a,{isClearable:!0,value:p(e,t),onChange:function(a){(function(e,t,a){return v.apply(this,arguments)})(a,e,t).then()},options:null===e||void 0===e?void 0:e.product_type_converts})]},t)}))})})},J=function(e){var t=e.product,a=e.type_values,i=e.default_type_values,c=e.dispatch;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"d-flex align-items-center",style:{marginBottom:"10px"},children:Object(b.jsx)("h2",{className:"product-detail--title mb-0",style:{marginRight:"15px"},children:"Th\xf4ng s\u1ed1 k\u1ef9 thu\u1eadt"})}),Object(b.jsx)("div",{className:"py-50 tabs-product-detail",children:Object(b.jsxs)(o.a,{className:"mx-0",children:[Object(b.jsx)(u.a,{className:"col-md-6 col-sm-12",children:Object(b.jsx)(D,{dispatch:c,product:t,type_values:a})}),Object(b.jsx)(u.a,{className:"col-md-6 col-sm-12",children:Object(b.jsx)(I,{dispatch:c,product:t,default_type_values:i})})]})})]})},K=a(24),q=a(583),W=function(e){var t,a=e.product,i=e.variantGroup,r=Object(s.useState)(null),o=Object(d.a)(r,2),u=o[0],j=o[1],m=Object(s.useState)([]),h=Object(d.a)(m,2),y=h[0],g=h[1],k=Object(s.useState)({}),C=Object(d.a)(k,2),S=C[0],T=C[1],F=Object(s.useState)(!1),E=Object(d.a)(F,2),P=E[0],z=E[1],L=Object(s.useState)(!1),B=Object(d.a)(L,2),H=B[0],R=B[1];Object(s.useEffect)(Object(n.a)(c.a.mark((function e(){var t,n,d,s,r,o,v,p,m,b,h,x;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i||!(null===i||void 0===i?void 0:i.default)||null!==u&&u===(null===i||void 0===i||null===(t=i.default)||void 0===t?void 0:t.id)){e.next=6;break}return j(null===i||void 0===i||null===(n=i.default)||void 0===n?void 0:n.id),e.next=4,Object(K.o)(null===a||void 0===a?void 0:a.id,null===i||void 0===i||null===(d=i.default)||void 0===d?void 0:d.id);case 4:if(null===(r=e.sent)||void 0===r||null===(s=r.data)||void 0===s?void 0:s.data)if(v=null===r||void 0===r||null===(o=r.data)||void 0===o?void 0:o.data,p=[],m={},v&&v.length>0){b=Object(l.a)(v);try{for(b.s();!(h=b.n()).done;)"image"===(x=h.value).type?p.push(x):"video"===x.type&&(m=x)}catch(c){b.e(c)}finally{b.f()}g(p),T(m)}else g([]),T(null);case 6:case"end":return e.stop()}}),e)}))));var V=new _.a({meta:{type:"video"},autoProceed:!0,restrictions:{allowedFileTypes:["video/*"]}});V.on("file-added",function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(a={}).url=URL.createObjectURL(t.data),a.video_file=t.data,a.media_type="video",T(a),z(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var M=new _.a({meta:{type:"video"},autoProceed:!0,restrictions:{allowedFileTypes:["video/*"]}});M.on("file-added",function(){var e=Object(n.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(a={}).url=URL.createObjectURL(t.data),a.video_file=t.data,a.media_type="video",T(a),z(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var U=new _.a({meta:{type:"avatar"},autoProceed:!0,restrictions:{allowedFileTypes:["image/*"]}});U.use(N.a),U.on("thumbnail:generated",(function(e,t){var a={file:e,preview:t};y.push(a),g(Object(x.a)(y)),z(!0)}));var G=new _.a({meta:{type:"avatar"},autoProceed:!0,restrictions:{allowedFileTypes:["image/*"]}});G.use(N.a),G.on("thumbnail:generated",(function(e,t){var a={file:e,preview:t};y.push(a),g(Object(x.a)(y)),z(!0)}));function D(){return(D=Object(n.a)(c.a.mark((function e(){var t,n,d,s,r,o,u,v,p,j,m,b,h,x,O,f,_,g,N,w,k,C,T,F,E,P,L,B,H,V,M,U,G,D,I;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(y.length>0||S)){e.next=32;break}if(z(!1),R(!0),s=new FormData,0,r=!1,o=[],y.forEach((function(e){"number"!==typeof(null===e||void 0===e?void 0:e.id)&&void 0===(null===e||void 0===e?void 0:e.url)?(r=!0,s.append("images",e.file.data)):o.push(e)})),!r){e.next=13;break}return e.next=11,Object(K.q)(s);case 11:u=e.sent,y.forEach((function(e){var t,a;null===u||void 0===u||null===(t=u.data)||void 0===t||null===(a=t.data)||void 0===a||a.forEach((function(t){var a,i;if((null===e||void 0===e||null===(a=e.file)||void 0===a||null===(i=a.data)||void 0===i?void 0:i.name)===t.originalname){e.file_path=t.originalname,e.file_name=t.filename,e.url=t.url,e.thumb_url=t.thumb_url,e.mimetype=t.mimetype;var c={};c.file_path=t.originalname,c.file_name=t.filename,c.url=t.url,c.thumb_url=t.thumb_url,c.mimetype=t.mimetype,o.push(c)}}))}));case 13:if(v={},!(null===S||void 0===S?void 0:S.video_file)){e.next=21;break}return(j=new FormData).append("video",S.video_file),e.next=19,Object(K.r)(j);case 19:(null===(m=e.sent)||void 0===m||null===(p=m.data)||void 0===p?void 0:p.data)&&(b=m.data.data,v.file_path=null===b||void 0===b?void 0:b.originalname,v.file_name=null===b||void 0===b?void 0:b.filename,v.url=null===b||void 0===b?void 0:b.url,v.media_type="video");case 21:h=[],x=Object(l.a)(i.variants);try{for(x.s();!(O=x.n()).done;){f=O.value,_=Object(l.a)(o);try{for(_.s();!(g=_.n()).done;)N=g.value,(w={}).type="image",w.option=f.color&&""!==f.color?f.color:"default",w.url=N.url,w.thumb_url=N.thumb_url,w.variant_id=f.id,-1===h.indexOf(w)&&h.push(w)}catch(c){_.e(c)}finally{_.f()}v&&(null===v||void 0===v?void 0:v.url)&&((k={}).type="video",k.option=f.color&&""!==f.color?f.color:"default",k.url=v.url,k.variant_id=f.id,h.push(k))}}catch(c){x.e(c)}finally{x.f()}for(C=[],T=0,F={},E=0,P=o;E<P.length;E++)V=P[E],2===++T&&(T=3),M={},1===T&&(F.image_url=V.url,F.thumb_url=V.thumb_url),M.media_type="image",M.option=(null===i||void 0===i||null===(L=i.default)||void 0===L?void 0:L.color)&&""!==(null===i||void 0===i||null===(B=i.default)||void 0===B?void 0:B.color)?null===i||void 0===i||null===(H=i.default)||void 0===H?void 0:H.color:"default",M.url=V.url,M.thumb_url=V.thumb_url,M.product_id=null===a||void 0===a?void 0:a.id,M.position=T,C.push(M);return(null===v||void 0===v?void 0:v.url)&&((I={}).media_type="video",I.option=(null===i||void 0===i||null===(U=i.default)||void 0===U?void 0:U.color)&&""!==(null===i||void 0===i||null===(G=i.default)||void 0===G?void 0:G.color)?null===i||void 0===i||null===(D=i.default)||void 0===D?void 0:D.color:"default",I.url=v.url,I.product_id=null===a||void 0===a?void 0:a.id,I.position=2,C.push(I)),e.next=31,Object(K.p)(C,h,F,null===a||void 0===a?void 0:a.id,(null===i||void 0===i||null===(t=i.default)||void 0===t?void 0:t.color)&&""!==(null===i||void 0===i||null===(n=i.default)||void 0===n?void 0:n.color)?null===i||void 0===i||null===(d=i.default)||void 0===d?void 0:d.color:"default");case 31:R(!1);case 32:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return null!==i?Object(b.jsx)(v.a,{className:"product-variant-item__card border-dark",children:Object(b.jsxs)(p.a,{className:"py-2",children:[Object(b.jsxs)("div",{className:"product-detail--contain",children:[H&&Object(b.jsxs)("div",{className:"loading",children:[Object(b.jsx)("div",{className:"effect-1 effects"}),Object(b.jsx)("div",{className:"effect-2 effects"}),Object(b.jsx)("div",{className:"effect-3 effects"})]}),Object(b.jsxs)("div",{className:"product-detail--contain",children:[Object(b.jsx)("div",{className:"d-flex justify-content-end",children:Object(b.jsx)("button",{className:"btn btn-primary mr-0 w-25",disabled:!P,onClick:function(){return D.apply(this,arguments)},children:"L\u01b0u"})}),Object(b.jsx)("h2",{className:"product-detail--title",children:"T\xean phi\xean b\u1ea3n s\u1ea3n ph\u1ea9m"}),Object(b.jsx)("input",{className:"product-detail--name",type:"text",value:null===i||void 0===i||null===(t=i.default)||void 0===t?void 0:t.name,onChange:function(e){console.log(e)}})]}),Object(b.jsxs)("div",{className:"d-flex justify-content-between align-items-center",style:{marginBottom:"10px"},children:[Object(b.jsx)("h3",{className:"product-detail--title product-detail-title__detail mb-0",children:"H\xecnh \u1ea3nh phi\xean b\u1ea3n"}),Object(b.jsx)("div",{className:"product-detail--add-image",children:Object(b.jsx)(f.a,{uppy:U,accept:"image/png, image/jpeg",locale:{strings:{dropHereOr:"Th\xeam h\xecnh \u1ea3nh"}}})})]}),Object(b.jsx)("div",{className:"product-detail--contain-image",children:y.length?Object(b.jsx)("div",{className:"product-detail--image-product",children:y.map((function(e,t){return Object(b.jsx)("div",{className:"rounded",children:Object(b.jsxs)("div",{className:"image",children:[Object(b.jsx)("img",{src:(null===e||void 0===e?void 0:e.thumb_url)?null===e||void 0===e?void 0:e.thumb_url:null===e||void 0===e?void 0:e.preview,alt:"imgProduct",className:"img"}),Object(b.jsx)("div",{className:"btn-delete",children:Object(b.jsx)("img",{src:O.a,alt:"delete",onClick:function(t){var a;a=e,y.splice(y.indexOf(a),1),g(Object(x.a)(y)),z(!0)}})})]})},t)}))}):Object(b.jsxs)("div",{className:"empty",children:[Object(b.jsx)("div",{className:"empty-image",children:Object(b.jsx)("img",{className:"img-contain",src:w.a,alt:"empty"})}),Object(b.jsx)(f.a,{uppy:G})]})})]}),Object(b.jsxs)("div",{className:"product-detail--contain",children:[Object(b.jsxs)("div",{className:"d-flex justify-content-between align-items-center",style:{marginBottom:"10px"},children:[Object(b.jsx)("h3",{className:"product-detail--title product-detail-title__detail mb-0",children:"Video phi\xean b\u1ea3n"}),Object(b.jsx)("div",{className:"product-detail--add-image",children:Object(b.jsx)(f.a,{uppy:V,accept:"video/mp4,video/x-m4v,video/*",locale:{strings:{dropHereOr:"Th\xeam video"}}})})]}),Object(b.jsx)("div",{className:"product-detail--contain-image",children:Object(b.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:S&&(null===S||void 0===S?void 0:S.url)?Object(b.jsx)("div",{className:"rounded",children:Object(b.jsxs)("div",{className:"video-contain position-relative",children:[Object(b.jsx)("video",{autoPlay:!0,playsInline:!0,loop:!0,className:"video",children:Object(b.jsx)("source",{src:null===S||void 0===S?void 0:S.url})}),Object(b.jsx)("div",{className:"btn-delete",children:Object(b.jsx)("img",{src:O.a,alt:"delete",className:"icon-delete",onClick:function(e){T({}),z(!0)}})})]})}):Object(b.jsxs)("div",{className:"empty",children:[Object(b.jsx)("div",{className:"empty-image",children:Object(b.jsx)("img",{className:"img-contain",src:q.a,alt:"empty"})}),Object(b.jsx)(f.a,{uppy:M})]})})})]})]})}):Object(b.jsx)("div",{})},X=a(513),A=function(e){var t=e.product,a=e.isSubmit,i=e.variant_groups,c=e.type_values,l=e.default_type_values,n=e.dispatch,r=e.handleSubmitButton,j=Object(s.useState)(null),m=Object(d.a)(j,2),x=m[0],O=m[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"product-item mb-2",children:[Object(b.jsxs)("div",{className:"d-flex align-items-center justify-content-between pb-1",children:[Object(b.jsx)("p",{className:"title-item",children:"S\u1ea3n ph\u1ea9m"}),Object(b.jsx)("button",{className:"btn btn-primary btn-save",disabled:a,onClick:r,children:"L\u01b0u"})]}),Object(b.jsxs)(o.a,{className:"product-wrapper bg-white mx-0",children:[Object(b.jsx)(u.a,{className:"col-lg-8 col-sm-12 product-detail",children:Object(b.jsx)(v.a,{className:"border-dark mb-0",children:Object(b.jsxs)(p.a,{children:[Object(b.jsxs)("div",{className:"product-detail--contain",children:[Object(b.jsx)("h2",{className:"product-detail--title",children:"T\xean s\u1ea3n ph\u1ea9m"}),Object(b.jsx)("input",{className:"product-detail--name",type:"text",defaultValue:null===t||void 0===t?void 0:t.name})]}),Object(b.jsx)(M,{dispatch:n,product:t}),Object(b.jsx)(U,{dispatch:n,product:t}),Object(b.jsx)(J,{dispatch:n,product:t,type_values:c,default_type_values:l})]})})}),Object(b.jsxs)(u.a,{className:"col-lg-4 col-sm-12 product-detail",children:[Object(b.jsx)(h,{dispatch:n,product:t}),Object(b.jsx)(k,{dispatch:n,product:t})]})]})]}),Object(b.jsxs)("div",{className:"product-variant-item",children:[Object(b.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(b.jsx)("p",{className:"title-item white-space-nowrap pb-1",children:"Phi\xean b\u1ea3n s\u1ea3n ph\u1ea9m"}),Object(b.jsx)(X.a,{text:"Th\xeam phi\xean b\u1ea3n",link:"/product/".concat(null===t||void 0===t?void 0:t.id,"/product-variant/create")})]}),Object(b.jsxs)(o.a,{className:"product-wrapper bg-white mx-0",children:[Object(b.jsx)(u.a,{className:"col-lg-8 col-sm-12 product-detail",children:Object(b.jsx)(v.a,{className:"border-dark",children:Object(b.jsx)(p.a,{children:Object(b.jsx)(H,{dispatch:n,product:t,variant_groups:i,setVariantFromTable:function(e){O(e)}})})})}),x&&Object(b.jsx)(u.a,{className:"col-lg-4 col-sm-12 product-detail",children:Object(b.jsx)(W,{dispatch:n,product:t,variantGroup:x})})]})]})]})},Q=a(122);a(493),t.default=function(){var e,t=Object(r.i)().id,a=Object(Q.b)(),i=Object(Q.c)((function(e){return e.products})),o=Object(s.useState)(!0),u=Object(d.a)(o,2),v=(u[0],u[1]),p=Object(s.useState)(!1),j=Object(d.a)(p,2),m=j[0],h=j[1];function x(){return(x=Object(n.a)(c.a.mark((function e(){var t,a,l,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=i.product,m||!(null===t||void 0===t?void 0:t.id)){e.next=7;break}return h(!0),e.next=5,Object(K.j)(t);case 5:(null===(l=e.sent)||void 0===l||null===(a=l.data)||void 0===a?void 0:a.status)?(h(!1),i.product=null,null===(n=history)||void 0===n||n.go(-1)):h(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(s.useEffect)((function(){a(Object(K.m)(t)),v(!1)}),[a]);return null!==(null===i||void 0===i?void 0:i.product)&&void 0!==(null===i||void 0===i?void 0:i.product)&&(null===i||void 0===i||null===(e=i.product)||void 0===e?void 0:e.id)===t?Object(b.jsx)(s.Fragment,{children:Object(b.jsxs)("div",{className:"app-ecommerce-details",children:[m&&Object(b.jsxs)("div",{className:"loading",children:[Object(b.jsx)("div",{className:"effect-1 effects"}),Object(b.jsx)("div",{className:"effect-2 effects"}),Object(b.jsx)("div",{className:"effect-3 effects"})]}),Object(b.jsx)(A,{isSubmit:m,handleSubmitButton:function(){return x.apply(this,arguments)},dispatch:a,product:null===i||void 0===i?void 0:i.product,variants:null===i||void 0===i?void 0:i.variants,type_values:null===i||void 0===i?void 0:i.type_values,default_type_values:null===i||void 0===i?void 0:i.default_type_values,variant_groups:function(e){if(e&&(null===e||void 0===e?void 0:e.length)>0){var t=[],a=[];if(e.forEach((function(e){if(""!==e.color){var t,i=!1,c=Object(l.a)(a);try{for(c.s();!(t=c.n()).done;){t.value===e.color&&(i=!0)}}catch(n){c.e(n)}finally{c.f()}i||a.push(e.color)}})),0===a.length){var i,c={sizes:[],default:"",variants:[]},n=Object(l.a)(e);try{for(n.s();!(i=n.n()).done;){var d=i.value;c.default=d,c.sizes.push(d.size),c.variants.push(d)}}catch(m){n.e(m)}finally{n.f()}t.push(c)}else{var s,r=Object(l.a)(a);try{for(r.s();!(s=r.n()).done;){var o,u=s.value,v={sizes:[],default:"",variants:[]},p=Object(l.a)(e);try{for(p.s();!(o=p.n()).done;){var j=o.value;u===j.color&&(v.default=j,v.sizes.push(j.size),v.variants.push(j))}}catch(m){p.e(m)}finally{p.f()}t.push(v)}}catch(m){r.e(m)}finally{r.f()}}return t}}(null===i||void 0===i?void 0:i.variants)})]})}):Object(b.jsx)("div",{})}},465:function(e,t,a){},470:function(e,t,a){"use strict";t.a=a.p+"static/media/ic_delete.258f0e9c.svg"},477:function(e,t,a){"use strict";t.a=a.p+"static/media/ic_upload_img.2c0cf09c.svg"},488:function(e,t,a){},493:function(e,t,a){},513:function(e,t,a){"use strict";var i=a(475),c=a(476),l=a(452),n=a(664),d=(a(1),a(7));t.a=function(e){var t=e.text,a=e.link;return Object(d.jsx)(i.a,{className:"d-flex align-items-center justify-content-end w-100 pb-1 m-0",children:Object(d.jsx)(c.a,{md:2,className:"d-flex align-items-center justify-content-end p-0",children:Object(d.jsxs)(l.b,{className:"btn btn-primary white-space-nowrap",to:a,children:[Object(d.jsx)(n.a,{color:"white",size:18,style:{marginRight:"10px"}})," ",t]})})})}},573:function(e,t,a){"use strict";t.a=function(e){return new Intl.NumberFormat("vi-VN").format(e)}},583:function(e,t,a){"use strict";t.a=a.p+"static/media/ic_video_empty.6a337f36.svg"},891:function(e,t,a){}}]);
//# sourceMappingURL=18.19457410.chunk.js.map