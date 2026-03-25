import{a as p,S as f,i}from"./assets/vendor-DQvd0HNi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="55171601-d88ff61a1cb42e3978e59d2e4",y="https://pixabay.com/api/";async function h(s){return(await p.get(y,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),g=()=>d.classList.remove("hidden"),L=()=>d.classList.add("hidden"),w=new f(".gallery a",{captionsData:"alt",captionDelay:250}),b=function(s){const o=s.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p>Likes: ${t.likes}</p>
          <p>Views: ${t.views}</p>
          <p>Comments: ${t.comments}</p>
          <p>Downloads: ${t.downloads}</p>
        </div>
      </li>
      `).join("");u.insertAdjacentHTML("beforeend",o),w.refresh()},v=function(){u.innerHTML=""},a=document.querySelector(".form"),l=a.elements["search-text"];async function S(s){s.preventDefault();const o=l.value.trim();if(!o){i.error({message:"Please enter some text",position:"topRight"});return}g(),v();try{const t=await h(o);t.hits.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(b(t.hits),a.reset(),l.focus())}catch{i.error({message:"Something went wrong!",position:"topRight"})}finally{L()}}a.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
