(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{361:function(t,o,e){},423:function(t,o,e){"use strict";e(361)},451:function(t,o,e){"use strict";e.r(o);e(38);var content=e(360),n=e(460),c=e(432),r=e(367),d=e(313),l=e(307),f=e(442),_=e(458),v=e(306),m=e(461),S=e(435),C=e(365),h=e(447),y=e(457),w=e(462),k={name:"Product",components:{SfGallery:n.a,SfHeading:c.a,SfPrice:r.a,SfRating:d.a,SfIcon:l.a,SfTabs:f.a,SfProperty:_.a,SfButton:v.a,SfReview:m.a,SfAddToCart:S.a,SfColor:C.a,SfSelect:h.a,SfBreadcrumbs:y.a,SfNotification:w.a},data:function(){return{current:1,selectedColor:"beige",selectedSize:void 0,qty:1,product:content.a.product(this.$route.params.id),selected:!1,breadcrumbs:[{text:"Inicio",link:"/"},{text:"Pagina de facebook",link:"https://www.facebook.com/Aprolim-102511875638617"},{text:"Ubicacion",link:"https://www.google.com.bo/maps/place/17%C2%B023'34.8%22S+66%C2%B008'31.9%22W/@-17.393,-66.1427416,19z/"}],isOpenNotification:!1,openTab:1}},created:function(){},mounted:function(){document.getElementsByClassName("sf-add-to-cart__button")[0].innerText="Solicitar"},methods:{addToCart:function(){var t=this;console.log("clicked"),this.isOpenNotification=!0,setTimeout((function(){t.isOpenNotification=!1}),6e3),window.open("https://api.whatsapp.com/send?phone=59172751138&text=Solicito "+this.qty+" x "+this.product.title,"_blank")},changeTab:function(t){document.getElementById("tabs").scrollIntoView({behavior:"smooth",block:"end"}),this.openTab=t}}},x=(e(423),e(63)),component=Object(x.a)(k,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"product"}},[e("SfBreadcrumbs",{staticClass:"breadcrumbs desktop-only",attrs:{breadcrumbs:t.breadcrumbs}}),t._v(" "),e("div",{staticClass:"product"},[e("SfGallery",{staticClass:"product__gallery",attrs:{images:t.product.images}}),t._v(" "),e("div",{staticClass:"product__info"},[e("div",{staticClass:"product__header"},[e("SfHeading",{staticClass:"sf-heading--no-underline sf-heading--left",attrs:{title:t.product.title,level:1}}),t._v(" "),e("SfIcon",{staticClass:"product__drag-icon smartphone-only",attrs:{icon:"drag",size:"42px",color:"#E0E0E1"}})],1),t._v(" "),e("div",{staticClass:"product__price-and-rating"},[e("SfPrice",{attrs:{regular:t.product.price.regular}}),t._v(" "),e("div",[e("div",{staticClass:"product__rating"},[e("SfRating",{attrs:{score:t.product.rating.score,max:t.product.rating.max}}),t._v(" "),t.product.reviews?e("a",{staticClass:"product__count",attrs:{href:"#"}},[t._v("\n              ("+t._s(t.product.reviews.length)+")\n            ")]):t._e()],1)])],1),t._v(" "),e("div",[e("p",{staticClass:"product__description desktop-only"},[t._v("\n          "+t._s(t.product.description)+"\n        ")]),t._v(" "),e("SfAddToCart",{staticClass:"product__add-to-cart",on:{click:t.addToCart},model:{value:t.qty,callback:function(o){t.qty=o},expression:"qty"}})],1),t._v(" "),t._l(t.product.details,(function(o,i){return e("SfProperty",{key:i,staticClass:"product__property",attrs:{name:o.name,value:o.value},scopedSlots:t._u(["Category"===o.name?{key:"value",fn:function(){return[e("SfButton",{staticClass:"sf-button--text product__property__button"},[t._v("\n            "+t._s(o.value))])]},proxy:!0}:null],null,!0)})}))],2)],1),t._v(" "),e("transition",{attrs:{name:"slide"}},[e("SfNotification",{staticClass:"notification",attrs:{visible:t.isOpenNotification,message:t.qty+" x "+t.product.title+" ha sido solicitado"},on:{"click:close":function(o){t.isOpenNotification=!1}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("span")]},proxy:!0}])})],1)],1)}),[],!1,null,"72a0a681",null);o.default=component.exports}}]);