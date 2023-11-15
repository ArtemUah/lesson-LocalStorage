function createMarkup (arr, list) {
  let markup;
  if (arr.length !== 0){
    markup = arr.map(({id, img, name}) => `<li data-id="${id}" class="js-item">
    <img src="${img}" alt="${name}" width="300">
    <h2>${name}</h2>
    <p><a href="#" class="js-info">More information</a></p>
    <div><button class="js-favorite">Add to favorite</button>
    <button class="js-basket">Add to basket</button></div>
  </li>`).join('');
  } else {
    markup = `<li class="js-item">
    <img src="https://hostiq.ua/wiki/wp-content/uploads/2021/05/03-error-404-not-found-1.png" alt="404 Error" width="600">
  </li>`;
  };
  list.innerHTML = markup;
};

function createMarkupForFavorite (arr, list) {
  let markup;
  if (arr.length !== 0){
    markup = arr.map(({id, img, name}) => `<li data-id="${id}" class="js-item">
    <img src="${img}" alt="${name}" width="300">
    <h2>${name}</h2>
    <p><a href="#" class="js-info">More information</a></p>
    <div><button class="js-favorite-delete">Remove from favorite</button>
    <button class="js-basket">Add to basket</button></div>
  </li>`).join('');
  } else {
    markup = `<li class="js-item">
    <img src="https://hostiq.ua/wiki/wp-content/uploads/2021/05/03-error-404-not-found-1.png" alt="404 Error" width="600">
  </li>`;
  }
  list.innerHTML = markup;
};

function createMarkupForBasket (arr, list) {
  let markup;
  if (arr.length !== 0){
    markup = arr.map(({id, img, name}) => `<li data-id="${id}" class="js-item">
    <img src="${img}" alt="${name}" width="300">
    <h2>${name}</h2>
    <p><a href="#" class="js-info">More information</a></p>
    <div><button class="js-favorite">Add to favorite</button>
    <button class="js-basket-delete">Remove from basket</button></div>
  </li>`).join('');
  } else {
    markup = `<li class="js-item">
    <img src="https://hostiq.ua/wiki/wp-content/uploads/2021/05/03-error-404-not-found-1.png" alt="404 Error" width="600">
  </li>`;
  };
  list.innerHTML = markup;
};

export {createMarkup};
export {createMarkupForFavorite};
export {createMarkupForBasket};