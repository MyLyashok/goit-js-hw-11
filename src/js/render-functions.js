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
          <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p>Likes: ${image.likes}</p>
          <p>Views: ${image.views}</p>
          <p>Comments: ${image.comments}</p>
          <p>Downloads: ${image.downloads}</p>
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