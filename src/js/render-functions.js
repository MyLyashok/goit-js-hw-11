import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

const loader = document.querySelector('.loader');
const showLoader = () => loader.classList.remove('hidden');
const hideLoader = () => loader.classList.add('hidden');


const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const createGallery = function (images) {
  const markup = images
    .map(image => {
      return `
      <li class="gallery-item">
        <a href="${image.largeImageURL}">
          <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        </a>
        
<div class="info">
  <div class="info-item">
    <span class="label">Likes</span>
    <span class="value">${image.likes}</span>
  </div>
  <div class="info-item">
    <span class="label">Views</span>
    <span class="value">${image.views}</span>
  </div>
  <div class="info-item">
    <span class="label">Comments</span>
    <span class="value">${image.comments}</span>
  </div>
  <div class="info-item">
    <span class="label">Downloads</span>
    <span class="value">${image.downloads}</span>
  </div>
</div>
      </li>
      `;
    })
    .join('');

    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
};

const clearGallery = function () {
  gallery.innerHTML = '';
};

export { createGallery, clearGallery, showLoader, hideLoader };