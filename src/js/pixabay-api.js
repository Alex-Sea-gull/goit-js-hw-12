'use strict';

import axios from 'axios';

axios.defaults.baseURL = "https://pixabay.com/api/";

export async function searchImagesByQuery(query) {
    const API_KEY = "45152929-a1340ee97784cf10d0ad70de4";
    // Так не потрібно зберігати ключі

    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    try {
        const response = await axios.get('', { params });
        return response.data;
    } catch (err) {
        console.error(err);
    }
}