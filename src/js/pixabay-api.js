'use strict';

export function searchImagesByQuery(query) {
    const URL = "https://pixabay.com/api/";
    const API_KEY = "45152929-a1340ee97784cf10d0ad70de4";
    // Так не потрібно зберігати ключі

    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    return fetch(`${URL}?${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .catch(console.log);
}
