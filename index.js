import{a as w,S,i as n}from"./assets/vendor-DQvd0HNi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const M="55171601-d88ff61a1cb42e3978e59d2e4",P="https://pixabay.com/api/";async function p(r,o=1){return(await w.get(P,{params:{key:M,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}})).data}const m=document.querySelector(".gallery"),f=document.querySelector(".loader"),h=()=>f.classList.remove("hidden"),g=()=>f.classList.add("hidden"),q=new S(".gallery a",{captionsData:"alt",captionDelay:250}),y=function(r){const o=r.map(e=>`
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
      `).join("");m.insertAdjacentHTML("beforeend",o),q.refresh()},x=function(){m.innerHTML=""},v=document.querySelector(".load-more"),L=()=>v.classList.remove("hidden"),b=()=>v.classList.add("hidden"),u=document.querySelector(".form"),R=u.elements["search-text"],$=document.querySelector(".load-more");let i=1,c="",d=0;async function B(r){r.preventDefault();const o=R.value.trim();if(!o){n.error({message:"Please enter some text",position:"topRight"});return}c=o,i=1,x(),b(),h();try{const e=await p(c,i);d=e.totalHits,e.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(y(e.hits),Math.ceil(d/15)>1&&L(),u.reset())}catch(e){n.error({message:"Something went wrong!",position:"topRight"}),console.error(e)}finally{g()}}async function O(){i+=1,b(),h();try{const r=await p(c,i);y(r.hits);const o=document.querySelector(".gallery-item");if(o){const a=o.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}const e=Math.ceil(d/15);i>=e?n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):L()}catch(r){n.error({message:"Error loading more images!",position:"topRight"}),console.error(r)}finally{g()}}u.addEventListener("submit",B);$.addEventListener("click",O);
//# sourceMappingURL=index.js.map
