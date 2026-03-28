import{a as w,S,i as a}from"./assets/vendor-DQvd0HNi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const M="55171601-d88ff61a1cb42e3978e59d2e4",P="https://pixabay.com/api/";async function p(r,s=1){return(await w.get(P,{params:{key:M,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}})).data}const m=document.querySelector(".gallery"),f=document.querySelector(".loader"),h=()=>f.classList.remove("hidden"),g=()=>f.classList.add("hidden"),q=new S(".gallery a",{captionsData:"alt",captionDelay:250}),y=function(r){const s=r.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
        </a>
        
<div class="info">
  <div class="info-item">
    <span class="label">Likes</span>
    <span class="value">${e.likes}</span>
  </div>
  <div class="info-item">
    <span class="label">Views</span>
    <span class="value">${e.views}</span>
  </div>
  <div class="info-item">
    <span class="label">Comments</span>
    <span class="value">${e.comments}</span>
  </div>
  <div class="info-item">
    <span class="label">Downloads</span>
    <span class="value">${e.downloads}</span>
  </div>
</div>
      </li>
      `).join("");m.insertAdjacentHTML("beforeend",s),q.refresh()},x=function(){m.innerHTML=""},v=document.querySelector(".load-more"),L=()=>v.classList.remove("hidden"),b=()=>v.classList.add("hidden"),u=document.querySelector(".form"),R=u.elements["search-text"],$=document.querySelector(".load-more");let i=1,c="",d=0;async function B(r){r.preventDefault();const s=R.value.trim();if(!s){a.error({message:"Please enter some text",position:"topRight"});return}c=s,i=1,x(),b(),h();try{const e=await p(c,i);d=e.totalHits,e.hits.length===0?a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(y(e.hits),Math.ceil(d/15)>1?L():a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),u.reset())}catch(e){a.error({message:"Something went wrong!",position:"topRight"}),console.error(e)}finally{g()}}async function O(){i+=1,b(),h();try{const r=await p(c,i);y(r.hits);const s=document.querySelector(".gallery-item");if(s){const n=s.getBoundingClientRect().height;window.scrollBy({top:n*2,behavior:"smooth"})}const e=Math.ceil(d/15);i>=e?a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):L()}catch(r){a.error({message:"Error loading more images!",position:"topRight"}),console.error(r)}finally{g()}}u.addEventListener("submit",B);$.addEventListener("click",O);
//# sourceMappingURL=index.js.map
