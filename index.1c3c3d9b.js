!function(){var t={};t=function t(n,i,e){function o(a,c){if(!i[a]){if(!n[a]){var s=void 0;if(!c&&s)return s(a,!0);if(r)return r(a,!0);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}var u=i[a]={exports:{}};n[a][0].call(u.exports,(function(t){return o(n[a][1][t]||t)}),u,u.exports,t,n,i,e)}return i[a].exports}for(var r=void 0,a=0;a<e.length;a++)o(e[a]);return o}({1:[function(t,n,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.create=i.visible=void 0;var e=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=document.createElement("div");return i.innerHTML=t.trim(),!0===n?i.children:i.firstChild},o=function(t,n){var i=t.children;return 1===i.length&&i[0].tagName===n},r=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};i.visible=r,i.create=function(t,n){var i=function(t,n){var i=e('\n\t\t<div class="basicLightbox '.concat(n.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),r=i.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return r.appendChild(t)}));var a=o(r,"IMG"),c=o(r,"VIDEO"),s=o(r,"IFRAME");return!0===a&&i.classList.add("basicLightbox--img"),!0===c&&i.classList.add("basicLightbox--video"),!0===s&&i.classList.add("basicLightbox--iframe"),i}(t=function(t){var n="string"==typeof t,i=t instanceof HTMLElement==1;if(!1===n&&!1===i)throw new Error("Content must be a DOM element/node or string");return!0===n?Array.from(e(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(n)),a=function(t){return!1!==n.onClose(c)&&function(t,n){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===r(t)||t.parentElement.removeChild(t),n()}),410),!0}(i,(function(){if("function"==typeof t)return t(c)}))};!0===n.closable&&i.addEventListener("click",(function(t){t.target===i&&a()}));var c={element:function(){return i},visible:function(){return r(i)},show:function(t){return!1!==n.onShow(c)&&function(t,n){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),n()}))}),10),!0}(i,(function(){if("function"==typeof t)return t(c)}))},close:a};return c}},{}]},{},[1])(1);var n=[{id:1,img:"https://static.dnipro-m.ua/cache/products/1248/catalog_origin_257336.jpg",name:"Шуруповерт",price:150,description:"Мережевий дриль-шуруповерт TD-30 — надійний помічник для робіт по дому та в невеликій майстерні, якщо необхідно виконувати роботу переважно з закручування кріпильних елементів. Муфта регулювання крутного моменту робить інструмент універсальним вибором як для свердління, так і для роботи з кріпленнями."},{id:2,img:"https://static.dnipro-m.ua/cache/products/1248/catalog_origin_257336.jpg",name:"Перфоратор",price:3948,description:"Перфоратор бочковий Dnipro-M ВН-20 використовується для виконання широкого спектру будівельних і ремонтних робіт: буріння та свердління отворів, розмішування будівельних сумішей, демонтажу і т.д."},{id:3,img:"https://static.dnipro-m.ua/cache/products/1248/catalog_origin_257336.jpg",name:"Шліфмашина",price:1299,description:"Кутова шліфувальна машина Dnipro-M GS-98 – модель, яка поєднує в собі оптимальне співвідношення потужності, ваги та мобільності. Конструкція шліфмашини сприяє зручній та надійній роботі, навіть однією рукою. Інструмент ідеально підходить для виконання різу на висоті та використання у важкодоступних місцях. Низький рівень шуму та вібрації, двопозиційне розташування додаткової рукоятки під кутом 100 градусів, мінімізує втому під час шліфування."},{id:4,img:"https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі."},{id:5,img:"https://static.dnipro-m.ua/cache/products/2300/catalog_origin_261037.jpg",name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M має не тільки високу точність вимірювань і чудові захисні властивості, а й надає максимальний комфорт користувачеві в процесі експлуатації."},{id:6,img:"https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",name:"Тример",price:3699,description:"Тример електричний Dnipro-M 110 призначений для покосу густої трави, а також кущів з діаметром стовбура до 10 мм."},{id:7,img:"https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",name:"Мотокоса",price:11049,description:"Мотокоса Dnipro-M 43 призначена для покосу трави, чагарників, бур'янів, газонів, а також для заготівлі сіна в невеликих масштабах.    Використовується для польових робіт на садовій ділянці площею до 2000 м2."},{id:8,img:"https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",name:"Генератор",price:10890,description:"Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі або у приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос."}];function i(t,n){var i=Number(t.closest(".js-item").dataset.id);return n.find((function(t){return i===t.id}))}$553dc769982d198b$export$919daad019702595={KEY_Favorite:"favorite",KEY_Basket:"basket"};var e,o,r,a,c,s=document.querySelector(".js-list"),d=(document.querySelector(".js-info"),null!==(e=JSON.parse(localStorage.getItem($553dc769982d198b$export$919daad019702595.KEY_Favorite)))&&void 0!==e?e:[]),u=null!==(o=JSON.parse(localStorage.getItem($553dc769982d198b$export$919daad019702595.KEY_Basket)))&&void 0!==o?o:[];a=s,c=0!==(r=n).length?r.map((function(t){var n=t.id,i=t.img,e=t.name;return'<li data-id="'.concat(n,'" class="js-item">\n    <img src="').concat(i,'" alt="').concat(e,'" width="300">\n    <h2>').concat(e,'</h2>\n    <p><a href="#" class="js-info">More information</a></p>\n    <div><button class="js-favorite">Add to favorite</button>\n    <button class="js-basket">Add to basket</button></div>\n  </li>')})).join(""):'<li class="js-item">\n    <img src="https://hostiq.ua/wiki/wp-content/uploads/2021/05/03-error-404-not-found-1.png" alt="404 Error" width="600">\n  </li>',a.innerHTML=c,s.addEventListener("click",(function(e){if(e.preventDefault(),e.target.classList.contains("js-info")){var o=i(e.target,n);r=o,t.create('\n    <div class="modal">\n    <img src="'.concat(r.img,'" alt="').concat(r.name,'" width="200">\n    <h2>').concat(r.name,"</h2>\n    <h3>").concat(r.price," uah</h3>\n    <p>").concat(r.description,'</p>\n    <div><button class="js-favorite">Add to favorite</button>\n    <button class="js-basket">Add to basket</button></div>\n    </div>\n    ')).show()}var r;if(e.target.classList.contains("js-favorite")){var a=i(e.target,n);if(d.some((function(t){return t.id===a.id})))return;d.push(a),localStorage.setItem($553dc769982d198b$export$919daad019702595.KEY_Favorite,JSON.stringify(d))}if(e.target.classList.contains("js-basket")){var c=i(e.target,n);u.push(c),localStorage.setItem($553dc769982d198b$export$919daad019702595.KEY_Basket,JSON.stringify(u))}}))}();
//# sourceMappingURL=index.1c3c3d9b.js.map
