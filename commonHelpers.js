import{a as h,S as v,i as f}from"./assets/vendor-D1eTGYtO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();h.defaults.baseURL="https://pixabay.com/api/";async function u({q:r,page:o,per_page:s}){const i="45152929-a1340ee97784cf10d0ad70de4",e=new URLSearchParams({key:i,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:s});try{return await h.get("",{params:e}).then(({data:t})=>t).catch(t=>console.log(t))}catch(t){console.error(t)}}function g(r){const o=document.querySelector(".js-gallery"),s=r.map(({webformatURL:e,largeImageURL:t,tags:l,likes:m,views:y,comments:b,downloads:L})=>`
        <a href="${t}" class="gallery__link">
            <div class="photo-card">
                <img src="${e}" alt="${l}"/>
                <div class="info">
                    <p class="text-photo"><strong>Likes:</strong> ${m}</p>
                    <p class="text-photo"><strong>Views:</strong> ${y}</p>
                    <p class="text-photo"><strong>Comments:</strong> ${b}</p>
                    <p class="text-photo"><strong>Downloads:</strong> ${L}</p>
                </div>
            </div>
        </a>
    `).join("");o.insertAdjacentHTML("beforeend",s),new v(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.9}).refresh()}function w(){const r=document.querySelector(".gallery");r.innerHTML=""}function c(r){const o=document.querySelector(".js-loader");o&&(r?o.style.display="inline-block":o.style.display="none")}class x{constructor(o,s){this.buttonEL=o,this.hiddenClass=s}hide(){this.buttonEL.classList.add(this.hiddenClass)}show(){this.buttonEL.classList.remove(this.hiddenClass)}disable(){this.buttonEL.disabled=!0}enable(){this.buttonEL.disabled=!1}}const d=document.querySelector(".btn-primary"),n=new x(d);n.hide();const a={q:"",page:1,per_page:15,maxPage:0},C=document.querySelector(".js-form-container");C.addEventListener("submit",E);async function E(r){r.preventDefault(),w();const o=r.currentTarget;if(a.q=o.elements.search.value.toLowerCase().trim(),!a.q){f.error({message:"Please enter the data in the input field",position:"topRight",messageColor:"#ffffff",backgroundColor:"#EF4040"}),c(!1);return}a.page=1,n.show(),n.disable();try{c(!0);const{total:s,hits:i}=await u(a);if(a.maxPage=Math.ceil(s/a.per_page),a.maxPage>1?(n.enable(),d.addEventListener("click",p)):n.hide(),!i.length){n.enable(),f.error({message:"Sorry, there was an error fetching the images. Please try again later!",position:"topRight",messageColor:"#ffffff",backgroundColor:"#EF4040"});return}g(i),lightbox.refresh()}catch{f.error({message:"Sorry, there are no images matching your search",position:"topRight",messageColor:"#ffffff",backgroundColor:"#EF4040"})}finally{c(!1),a.page===a.maxPage?n.hide():n.enable(),o.reset()}}async function p(){n.disable(),a.page+=1;try{c(!0);const{hits:r}=await u(a);g(r);let s=document.querySelector(".scrol").getBoundingClientRect();window.scrollBy({top:s.height*2,left:s.width,behavior:"smooth"})}catch(r){console.log(r)}finally{c(!1),a.page>=a.maxPage?(n.hide(),f.info({message:"You have reached the end of search results.",position:"topRight",messageColor:"#ffffff",backgroundColor:"#4e75ff"}),n.hide(),d.removeEventListener("click",p)):n.enable()}}
//# sourceMappingURL=commonHelpers.js.map