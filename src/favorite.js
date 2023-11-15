import {common} from './common';
import { createMarkup, createMarkupForFavorite } from "./helpers/createMarkup";
import { findInstrument } from "./helpers/findInstrument";
import { instruments } from "./helpers/instruments";
import { createModal } from "./helpers/createModal";

const list = document.querySelector('.js-list');
let favorite = JSON.parse(localStorage.getItem(common.KEY_Favorite)) ?? [];
createMarkupForFavorite(favorite, list);
const basket = JSON.parse(localStorage.getItem(common.KEY_Basket)) ?? [];

list.addEventListener('click', onClick);

function onClick(e){
    e.preventDefault();
    if(e.target.classList.contains('js-info')){
        const instrument = findInstrument(e.target, instruments);
        createModal(instrument)
    }
    if(e.target.classList.contains('js-basket')){
        const instrument = findInstrument(e.target, instruments);
        basket.push(instrument);
        localStorage.setItem(common.KEY_Basket, JSON.stringify(basket));
    }
    if(e.target.classList.contains('js-favorite-delete')){
        const instrumentId = findInstrument(e.target, instruments).id;
        const index = favorite.reduce((acc, el, idx,) => {
            if (el.id === instrumentId){
                acc = idx
            }
            return acc;
        }, '');
        favorite.splice(index, 1);
        localStorage.setItem(common.KEY_Favorite, JSON.stringify(favorite));
        createMarkupForFavorite(favorite, list);

    }
}