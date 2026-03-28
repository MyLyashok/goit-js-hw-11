import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from './js/render-functions';

const form = document.querySelector('.form');
const input = form.elements['search-text'];
const loadMoreBtn = document.querySelector('.load-more');

let currentPage = 1;
let searchQuery = "";
let totalHits = 0;

async function submitForm(event) {
    event.preventDefault();
    const rawValue = input.value.trim();
    
    if (!rawValue) {
        iziToast.error({
            message: "Please enter some text",
            position: "topRight"
        });
        return;
    }

   
    searchQuery = rawValue;
    currentPage = 1;
    
    clearGallery();
    hideLoadMoreButton(); 
    showLoader();    

    try {
        const data = await getImagesByQuery(searchQuery, currentPage);
        totalHits = data.totalHits;

        if (data.hits.length === 0) {
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight"
            });
        } else {
            createGallery(data.hits);
            
     
            const maxPage = Math.ceil(totalHits / 15);
            if (maxPage > 1) {
                showLoadMoreButton();
            }

            form.reset();
        }
    } catch (error) {
        iziToast.error({
            message: "Something went wrong!",
            position: "topRight"
        });
        console.error(error);
    } finally {
        hideLoader();
    }
}

async function handleLoadMore() {
    currentPage += 1;
    
    hideLoadMoreButton();
    showLoader();

    try {
        const data = await getImagesByQuery(searchQuery, currentPage);
        createGallery(data.hits);

    
        const card = document.querySelector('.gallery-item');
        if (card) {
            const cardHeight = card.getBoundingClientRect().height;
            window.scrollBy({
                top: cardHeight * 2,
                behavior: 'smooth',
            });
        }
        
   
        const maxPage = Math.ceil(totalHits / 15);
        if (currentPage >= maxPage) {₴
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: "topRight"
            });
         
        } else {
            showLoadMoreButton();
        }
    } catch (error) {
        iziToast.error({
            message: "Error loading more images!",
            position: "topRight"
        });
        console.error(error);
    } finally {
        hideLoader();
    }
}

form.addEventListener('submit', submitForm);
loadMoreBtn.addEventListener('click', handleLoadMore);