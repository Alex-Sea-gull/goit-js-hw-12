import{a as d,S as b,i as f}from"./assets/vendor-D1eTGYtO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();d.defaults.baseURL="https://pixabay.com/api/";async function u(t){const r="45152929-a1340ee97784cf10d0ad70de4",n=new URLSearchParams({key:r,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});try{return(await d.get("",{params:n})).data}catch(i){console.error(i)}}function h(t){const r=document.querySelector(".js-gallery"),n=t.map(({webformatURL:e,largeImageURL:o,tags:l,likes:g,views:p,comments:m,downloads:y})=>`
        <a href="${o}" class="gallery__link">
            <div class="photo-card">
                <img src="${e}" alt="${l}"/>
                <div class="info">
                    <p class="text-photo"><strong>Likes:</strong> ${g}</p>
                    <p class="text-photo"><strong>Views:</strong> ${p}</p>
                    <p class="text-photo"><strong>Comments:</strong> ${m}</p>
                    <p class="text-photo"><strong>Downloads:</strong> ${y}</p>
                </div>
            </div>
        </a>
    `).join("");r.innerHTML=n,new b(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.9}).refresh()}function L(){const t=document.querySelector(".gallery");t.innerHTML=""}function c(t){const r=document.querySelector(".js-loader");r&&(t?r.style.display="inline-block":r.style.display="none")}class x{constructor(r,n){this.buttonEL=r,this.hiddenClass=n}hide(){this.buttonEL.classList.add(this.hiddenClass)}show(){this.buttonEL.classList.remove(this.hiddenClass)}disable(){this.buttonEL.disabled=!0}enable(){this.buttonEL.disabled=!1}}const v=document.querySelector(".btn-primary"),a=new x(v);a.hide();const s={q:"",page:1,per_page:15,maxPage:0},w=document.querySelector(".js-form-container");w.addEventListener("submit",C);async function C(t){t.preventDefault(),L();const r=t.currentTarget;if(s.q=r.elements.search.value.toLowerCase().trim(),!s.q){f.error({message:"Please enter the data in the input field",position:"topRight",messageColor:"#ffffff",backgroundColor:"#EF4040"}),c(!1);return}s.page=1,a.show(),a.disable();try{c(!0);const{total:n,hits:i}=await u(s);if(s.maxPage=Math.ceil(n/s.per_page),s.maxPage>1?(a.enable(),a.addEventListener("click",E)):a.hide(),!i.length){a.disable(),f.error({message:"Sorry, there was an error fetching the images. Please try again later!",position:"topRight",messageColor:"#ffffff",backgroundColor:"#EF4040"});return}h(i),lightbox.refresh()}catch{f.error({message:"Sorry, there are no images matching your search",position:"topRight",messageColor:"#ffffff",backgroundColor:"#EF4040"})}finally{c(!1),s.page>=s.maxPage?a.hide():a.enable(),r.reset()}}async function E(){if(s.page>=s.maxPage){a.hide(),f.info({message:"You have reached the end of search results.",position:"topRight",messageColor:"#ffffff",backgroundColor:"#4e75ff"});return}s.page+=1,a.disable(),c(!0);try{const t=await u(s);h(t),lightbox.refresh()}catch(t){console.log(t)}finally{c(!1),a.enable()}}
//# sourceMappingURL=commonHelpers.js.map
