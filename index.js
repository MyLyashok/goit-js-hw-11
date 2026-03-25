import{a as p,S as f,i as n}from"./assets/vendor-DQvd0HNi.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="55171601-d88ff61a1cb42e3978e59d2e4",y="https://pixabay.com/api/";async function g(r){return(await p.get(y,{params:{key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const d=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=()=>u.classList.remove("hidden"),v=()=>u.classList.add("hidden"),L=new f(".gallery a",{captionsData:"alt",captionDelay:250}),b=function(r){const a=r.map(s=>`
      <li class="gallery-item">
        <a href="${s.largeImageURL}">
          <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}" loading="lazy" />
        </a>
        
<div class="info">
  <div class="info-item">
    <span class="label">Likes</span>
    <span class="value">${s.likes}</span>
  </div>
  <div class="info-item">
    <span class="label">Views</span>
    <span class="value">${s.views}</span>
  </div>
  <div class="info-item">
    <span class="label">Comments</span>
    <span class="value">${s.comments}</span>
  </div>
  <div class="info-item">
    <span class="label">Downloads</span>
    <span class="value">${s.downloads}</span>
  </div>
</div>
      </li>
      `).join("");d.insertAdjacentHTML("beforeend",a),L.refresh()},w=function(){d.innerHTML=""},i=document.querySelector(".form"),c=i.elements["search-text"];async function S(r){r.preventDefault();const a=c.value.trim();if(!a){n.error({message:"Please enter some text",position:"topRight"});return}h(),w();try{const s=await g(a);s.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(b(s.hits),i.reset(),c.focus())}catch{n.error({message:"Something went wrong!",position:"topRight"})}finally{v()}}i.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
