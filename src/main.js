import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

const form = document.querySelector('.form');
const input = form.elements['search-text'];

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

    showLoader();    
    clearGallery();     

    try {
        const data = await getImagesByQuery(rawValue);

        if (data.hits.length === 0) {
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight"
            });
        } else {
            createGallery(data.hits);
            form.reset();
            input.focus();
        }

    } catch (error) {
        iziToast.error({
            message: "Something went wrong!",
            position: "topRight"
        });
    } finally {
        hideLoader();
    }
}

form.addEventListener('submit', submitForm);