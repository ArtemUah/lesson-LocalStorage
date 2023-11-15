import { common } from "./common";
import { createMarkupForBasket } from "./helpers/createMarkup";
import { findInstrument } from "./helpers/findInstrument";
import { instruments } from "./helpers/instruments";


const list = document.querySelector('.js-list');
const basket = JSON.parse(localStorage.getItem(common.KEY_Basket)) ?? [];
let favorite = JSON.parse(localStorage.getItem(common.KEY_Favorite)) ?? [];

createMarkupForBasket(basket, list);
list.addEventListener('click', onClick);
function onClick (e) {
    e.preventDefault;
    if (e.target.classList.contains('js-info')){
        const instrument = findInstrument(e.target, instruments);
        createModal(instrument)
    };
    if (e.target.classList.contains('js-favorite')){
        const instrument = findInstrument(e.target, instruments);
        const inList = favorite.some(el => el.id === instrument.id);
        if(inList){
            return;
        };
        favorite.push(instrument);
        localStorage.setItem(common.KEY_Favorite, JSON.stringify(favorite));
    }
    if(e.target.classList.contains('js-basket-delete')){
        const instrumentId = findInstrument(e.target, instruments).id;
        const index = basket.reduce((acc, el, idx)=>{
            if( el.id = instrumentId){
                acc = idx;
            }
            return acc;
        }, '');
        basket.splice(index, 1);
        localStorage.setItem(common.KEY_Basket, JSON.stringify(basket));
        createMarkupForBasket(basket,list)
    }
};


