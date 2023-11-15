function findInstrument(element, instruments) {
    const id = Number(element.closest('.js-item').dataset.id);
    const product = instruments.find(el => id === el.id);
    return product;
    };

    export {findInstrument};