import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { instruments } from './helpers/instruments';
import { createMarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';
import { findInstrument } from './helpers/findInstrument';
import { common } from './common';

const list = document.querySelector('.js-list');
const info = document.querySelector('.js-info')
let favorite = JSON.parse(localStorage.getItem(common.KEY_Favorite)) ?? [];
let basket = JSON.parse(localStorage.getItem(common.KEY_Basket)) ?? [];

createMarkup(instruments, list);

list.addEventListener('click', onClick);

function onClick(e) {
    e.preventDefault();
    if(e.target.classList.contains('js-info')){
        const instrument = findInstrument(e.target, instruments);
        createModal(instrument);
    };
    if(e.target.classList.contains('js-favorite')){
       const instrument = findInstrument(e.target, instruments);
       const isInList = favorite.some(el => el.id === instrument.id);
       if(isInList){
        return;
       }
       favorite.push(instrument);
       localStorage.setItem(common.KEY_Favorite, JSON.stringify(favorite))
    };
    if (e.target.classList.contains('js-basket')){
        const instrument = findInstrument(e.target, instruments);
        basket.push(instrument);
        localStorage.setItem(common.KEY_Basket, JSON.stringify(basket))
    }
};

export {favorite};
export {basket};