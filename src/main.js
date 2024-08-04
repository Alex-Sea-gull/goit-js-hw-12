'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchImagesByQuery } from './js/pixabay-api.js';
import { createMarkupImages, clearGallery } from './js/render-functions.js';
import { toggleLoader } from './js/loader.js';
import ButtonService from './js/loadMoreService.js';

const loadMoreBtnElement = document.querySelector('.btn-primary');
const loadMoreBtn = new ButtonService(loadMoreBtnElement);
loadMoreBtn.hide();

const params = {
    q: '',
    page: 1,
    per_page: 15,
    maxPage: 0,
};

const searchForm = document.querySelector('.js-form-container');
searchForm.addEventListener('submit', searchFoto);

async function searchFoto(event) {
    event.preventDefault();
    clearGallery();
    const form = event.currentTarget;
    params.q = form.elements.search.value.toLowerCase().trim();

    if (!params.q) {
        iziToast.error({
            message: 'Please enter the data in the input field',
            position: 'topRight',
            messageColor: '#ffffff',
            backgroundColor: '#EF4040',
        });
        toggleLoader(false);
        return;
    }

    params.page = 1;
    loadMoreBtn.show();
    loadMoreBtn.disable();

    try {
        toggleLoader(true);
        const { total, hits } = await searchImagesByQuery(params);
        params.maxPage = Math.ceil(total / params.per_page);

        if (params.maxPage > 1) {
            loadMoreBtn.enable();
            loadMoreBtn.addEventListener('click', handleLoadMore);
        } else {
            loadMoreBtn.hide();
        }
        if (!hits.length) {
            loadMoreBtn.disable();
            iziToast.error({
                message: `Sorry, there was an error fetching the images. Please try again later!`,
                position: 'topRight',
                messageColor: '#ffffff',
                backgroundColor: '#EF4040',
            });
            return;
        }

        createMarkupImages(hits);
        lightbox.refresh();

    } catch (err) {
        iziToast.error({
            message: 'Sorry, there are no images matching your search',
            position: 'topRight',
            messageColor: '#ffffff',
            backgroundColor: '#EF4040',
        });

    } finally {
        toggleLoader(false);
        if (params.page >= params.maxPage) {
            loadMoreBtn.hide();
        } else {
            loadMoreBtn.enable();
        }
        form.reset();
    }
}

async function handleLoadMore() {
    if (params.page >= params.maxPage) {
        loadMoreBtn.hide();
        iziToast.info({
            message: 'You have reached the end of search results.',
            position: 'topRight',
            messageColor: '#ffffff',
            backgroundColor: '#4e75ff',
        });
        return;
    }

    params.page += 1;
    loadMoreBtn.disable();
    toggleLoader(true);

    try {
        const hits = await searchImagesByQuery(params);
        createMarkupImages(hits);
        lightbox.refresh();
    } catch (err) {
        console.log(err);
    } finally {
        toggleLoader(false);
        loadMoreBtn.enable();
    }
}