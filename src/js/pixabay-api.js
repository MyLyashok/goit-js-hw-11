import axios from 'axios';

const apiKey = '55171601-d88ff61a1cb42e3978e59d2e4';
const url = 'https://pixabay.com/api/';



export async function getImagesByQuery(query) {
        const response = await axios.get(url, {
            params: {
                key: apiKey,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true
            }
        });
        return response.data;
    
}