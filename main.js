(()=>{"use strict";var e=function(e,t,i,r){return new(i||(i=Promise))((function(n,o){function s(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))};var t=function(e,t,i,r){return new(i||(i=Promise))((function(n,o){function s(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))};const i=class{InitSliderBlink(e,t,i){let r="."+t,n="."+i,o=document.querySelector("."+e),s=document.querySelector(r);function a(e){if(!o)return;if(!n)return;let t=o.querySelector(n);if(!t)return;t.classList.remove(i);let r=o.querySelector(".n"+e);if(!r)return;if(r.classList.add(i),!s)return;let a=s.querySelector(n);if(!a)return;a.classList.remove(i);let c=s.querySelector(".n"+e);c&&c.classList.add(i)}console.log("sliderBox",e),o&&Array.from(o.children).forEach(((e,n)=>{let o=`<div class="${t}-item n${n} ${0===n?i:""}" data-index="${n}" ></div>`;s&&(s.innerHTML+=o,s.querySelectorAll(`${r}-item`).forEach((e=>{e.addEventListener("click",(function(){console.log("@@@OK",e.dataset),e.dataset.index&&a(+e.dataset.index)}))})))})),setInterval((()=>{if(console.log("play auto "),!o)return;console.log("play auto in");let e=o.querySelector("."+i);if(!e)return;if(!e.dataset.index)return;let t=+e.dataset.index;a(t===o.children.length-1?0:t+1)}),5e3)}InitBtnComment(){}InitBtnSortComments(e){}DisplayComments(e,t){}InitTextAreaBigger(){}},r=class extends i{constructor(){super()}DisplayMain(){console.log("@view"),this.InitSliderBlink("j-slider-img","j-dots","active")}DisplayMovingCategories(e){let t=document.querySelector(".active-cat");if(!t)return;t.classList.remove("active-cat");let i=document.querySelector(".c"+e);i&&i.classList.add("active-cat")}DisplayBooks(e,t){const i=document.querySelector(".books__row");i&&(t?i.innerText="":console.log(),e.forEach((e=>{console.log("===================   book");const t=`\n      \n      <div class="books__item item ${e.GetPrivateID()}">\n      <img src="${e.GetPrivateImageLink()}" class="item__img_big" alt="" srcset="">\n      <div class="item__column">\n        <div class="item__autor">${e.GetPrivateAuthors()}</div>\n        <div class="item__title">${e.GetPrivateTitle()}</div>\n        <div class="item__stars">\n          <div class="star">\n            ${e.GetPrivateAverageRating()}\n          </div>\n          <div class="review">${e.GetPrivateRatingsCount()} review</div>\n        </div>\n        <div class="item__desc j-${e.GetPrivateID()}-desc">  <p class="desc__text"> ${e.GetPrivateFullDescription()&&e.GetPrivateFullDescription().length>35?e.GetPrivateSmallDescription():e.GetPrivateFullDescription()}</p></div>\n        <div class="item__price">${e.GetPrivatePrice()}   ${e.GetPrivateCode()}</div>\n\n        <button class="item__btn  .j-${e.GetPrivateID()}-btn">buy now</button>\n      </div>\n    </div>\n    `;i.insertAdjacentHTML("beforeend",t);const r=document.querySelector(`.j-${e.GetPrivateID()}-desc-btn`);r&&r.addEventListener("click",(()=>{let t=document.querySelector(`.j-${e.GetPrivateID()}-desc`);console.log(r),t&&(t.innerHTML=e.GetPrivateFullDescription())}))})))}DisplayCounter(){let e=localStorage.getItem("counter");const t=document.querySelector(".header__counter");t&&(e||(e="0"),t.innerText=e)}};class n{constructor(){this.privateControllers}SetPrivateControllers(e){this.privateControllers=e}Init(){this.privateControllers.PageMain()}}document.addEventListener("DOMContentLoaded",(function(){const i=new r,o=new class{Get(e){return t(this,void 0,void 0,(function*(){let i,r=`https://www.googleapis.com/books/v1/volumes?q=%22subject:${e}%22&key=AIzaSyBsMDinhM8dAeM41Bi_tAcfNrKMgGVQANI&printType=books&startIndex=0&maxResults=10&langRestrict=en`,n=[];return yield(()=>t(this,void 0,void 0,(function*(){i=yield(console.log(r),fetch(r).then((e=>e.json())).then((e=>(console.log(typeof e),e))).catch((()=>{console.log("error")}))),i.items.forEach((e=>{const t=new class{constructor(){this.privateID,this.privateTitle,this.privateAuthors,this.privateImageLink,this.privateDescription,this.privatePrice,this.privateRatingsCount,this.privatevAverageRating,this.privateCode}SetPrivateID(e){this.privateID=e}SetPrivateTitle(e){this.privateTitle=e}SetPrivateAuthors(...e){this.privateAuthors=e}SetPrivateImageLink(e){this.privateImageLink=e}SetPrivateDescription(e){this.privateDescription=e}SetPrivatePrice(e){this.privatePrice=e}SetPrivateRatingsCount(e){this.privateRatingsCount=e}SetPrivateAverageRating(e){this.privatevAverageRating=e}SetPrivateCode(e){this.privateCode=e}GetPrivateID(){return this.privateID}GetPrivateTitle(){return this.privateTitle}GetPrivateAuthors(){return this.privateAuthors}GetPrivateImageLink(){return this.privateImageLink}GetPrivatePrice(){return this.privatePrice?this.privatePrice:"Free"}GetPrivateRatingsCount(){return this.privateRatingsCount?this.privateRatingsCount:0}GetPrivateAverageRating(){this.privatevAverageRating||(this.privatevAverageRating=0);let e="";for(let t=0;t<this.privatevAverageRating;t++)e+='<img src="./img/Star.png" class="item__img" alt="" srcset="">',console.log("res    ",e);const t=5-this.privatevAverageRating;for(let i=0;i<t;i++)e+='<img src="./img/Star-grey.png" class="item__img" alt="" srcset="">';return e}GetPrivateCode(){return this.privateCode?this.privateCode:""}GetPrivateFullDescription(){return this.privateDescription?this.privateDescription.substring(0,250):"Unfortunately, there is no description"}GetPrivateSmallDescription(){return this.privateDescription?`${this.privateDescription.substring(0,90)} <span class='j-${this.GetPrivateID()}-desc-btn  m-desc-full-btn'>...</span>`:"Unfortunately, there is no description"}PublicDisplayFieldsForAnswer(e,t,i){}PuplicDisplayAnswer(e){}PuplicSetAnswer(){}PublicSaveAnswer(){}PublicInitBtnMakeLike(){}};this.check(e.id)?t.SetPrivateID(e.id):console.log(),this.check(e.volumeInfo.title)?t.SetPrivateTitle(e.volumeInfo.title):console.log(),this.check(e.volumeInfo.authors)?t.SetPrivateAuthors(...e.volumeInfo.authors):console.log(),this.check(e.volumeInfo.ratingsCount)?t.SetPrivateRatingsCount(e.volumeInfo.ratingsCount):console.log(),this.check(e.volumeInfo.averageRating)?t.SetPrivateAverageRating(e.volumeInfo.averageRating):console.log(),this.check(e.volumeInfo.description)?t.SetPrivateDescription(e.volumeInfo.description):console.log(),this.check(e.volumeInfo.imageLinks.thumbnail)?t.SetPrivateImageLink(e.volumeInfo.imageLinks.thumbnail):console.log(),this.check(e.saleInfo)&&this.check(e.saleInfo.retailPrice)&&this.check(e.saleInfo.retailPrice.amount)&&(t.SetPrivatePrice(e.saleInfo.retailPrice.amount),t.SetPrivateCode(e.saleInfo.retailPrice.currencyCode)),n.push(t)}))})))(),n}))}check(e){return!!e}},s=new class{constructor(){this.privateModels,this.privateView}SetPrivateModels(e){this.privateModels=e}SetPrivateViews(e){this.privateView=e}PageMain(){this.privateView.DisplayMain(),this.selectCategories(),this.privateView.DisplayCounter(),this.lazyLoadEvent()}selectCategories(){return e(this,void 0,void 0,(function*(){let t=document.querySelectorAll(".books__category"),i=yield this.privateModels.Get("Architecture");this.privateView.DisplayBooks(i,!0),this.selectBookEvent(i),t.forEach((t=>{t.addEventListener("click",(()=>e(this,void 0,void 0,(function*(){if(!t.dataset.index)return;this.privateView.DisplayMovingCategories(+t.dataset.index);let e=yield this.privateModels.Get(t.innerText);this.privateView.DisplayBooks(e,!0)}))))}))}))}selectBookEvent(e){let t=document.querySelectorAll(".item__btn");t&&t.forEach((e=>{e.addEventListener("click",(()=>{let e=+localStorage.getItem("counter")+1;console.log("newCounter  ",e),localStorage.setItem("counter",JSON.stringify(e)),this.privateView.DisplayCounter()}))}))}lazyLoadEvent(){return e(this,void 0,void 0,(function*(){let t=document.querySelector(".footer__btn");t&&t.addEventListener("click",(()=>e(this,void 0,void 0,(function*(){let e=yield this.privateModels.Get("Architecture");this.privateView.DisplayBooks(e,!1),this.selectBookEvent(e)}))))}))}};s.SetPrivateModels(o),s.SetPrivateViews(i);const a=new n;a.SetPrivateControllers(s),a.Init(),console.log("app")}))})();
//# sourceMappingURL=main.js.map