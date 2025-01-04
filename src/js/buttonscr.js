// import './swiper.js';
//import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';

// let readMore = document.querySelector(".main__read-more");
// let icButtonRM = document.querySelector(".main__read-more .read-more__icon-img");
// let textButtonRM = document.querySelector(".main__read-more .read-more__text-button");
// let b_brends = document.querySelector(".block-brends");

// readMore.addEventListener('click', function(evt){

//     evt.preventDefault();
//     let openIc = "../src/Image/pictures/expand.png";
//     let clossIc = "../src/Image/pictures/expand-closs.png";

//     if (textButtonRM.textContent === "Скрыть"){
//         b_brends.classList.remove("block-brends--open")
//         textButtonRM.textContent = "Показать все";
//         icButtonRM.src = openIc;
//     }else{
//         b_brends.classList.add("block-brends--open");
//         textButtonRM.textContent = "Скрыть";
//         icButtonRM.src = clossIc;
//     }
// })
if(document.documentElement.clientWidth < 768){
    let block_brends = document.querySelector('.block-brends');
    block_brends.classList.add('swiper');
    // block_brends.classList.remove('block-brends')

    let block_brends__list = document.querySelector('.block-brends__list');
    block_brends__list.classList.add('swiper-wrapper');
    // block_brends__list.classList.remove('block-brends__list');

    let swiper_button_next = document.createElement('div');
    swiper_button_next.classList.add('swiper-button-next');

    let swiper_button_prev = document.createElement('div');
    swiper_button_prev.classList.add('swiper-button-prev');

    let swiper_pagination = document.createElement('div');
    swiper_pagination.classList.add('swiper-pagination');


    block_brends.appendChild(swiper_button_next);
    block_brends.appendChild(swiper_button_prev);
    block_brends.appendChild(swiper_pagination);


    let block_technics = document.querySelector('.block-technics');
    block_technics.classList.add('swiper');
    // block_technics.classList.remove('block-technics');

    let block_technics__list = document.querySelector('.block-technics__list');
    block_technics__list.classList.add('swiper-wrapper');
    // block_technics__list.classList.remove('block-technics__list');

    let swiper_button_next1 = document.createElement('div');
    swiper_button_next1.classList.add('swiper-button-next');

    let swiper_button_prev1 = document.createElement('div');
    swiper_button_prev1.classList.add('swiper-button-prev');

    let swiper_pagination1 = document.createElement('div');
    swiper_pagination1.classList.add('swiper-pagination');

    block_technics.appendChild(swiper_button_next1);
    block_technics.appendChild(swiper_button_prev1);
    block_technics.appendChild(swiper_pagination1);


    let price_list = document.querySelector('.price-list');
    price_list.classList.add('swiper');
    // block_brends.classList.remove('block-brends')

    let price_rectangle = document.querySelector('.price-rectangle');
    price_rectangle.classList.add('swiper-wrapper');
    // block_brends__list.classList.remove('block-brends__list');

    let price_rectangle__elemets = document.querySelectorAll('.service');

    for(variable of price_rectangle__elemets){
        variable.classList.add('swiper-slide');
    }

    let swiper_button_next2 = document.createElement('div');
    swiper_button_next2.classList.add('swiper-button-next');

    let swiper_button_prev2 = document.createElement('div');
    swiper_button_prev2.classList.add('swiper-button-prev');

    let swiper_pagination2 = document.createElement('div');
    swiper_pagination2.classList.add('swiper-pagination');


    price_list.appendChild(swiper_button_next2);
    price_list.appendChild(swiper_button_prev2);
    price_list.appendChild(swiper_pagination2);


    let swiper = new Swiper(".swiper", {
        slidesPerView: "auto",
        spaceBetween: 16, //16,
       

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dinamicBullets: true,
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            snapOnRelease: true,
            dragSize: 'auto',
            draggable: true 
        },

        mousewhell: true,
        keyboard: true,
    })
}

    // let swiper1 = new Swiper(".block-technics", {
    //     slidesPerView: 'auto',
    //     spaceBetween: 16,

    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },

    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //         dinamicBullets: true,
    //     },

    //     scrollbar: {
    //         el: '.swiper-scrollbar',
    //         draggable: true,
    //         snapOnRelease: true,
    //         dragSize: 'auto',
    //         draggable: true 
    //     },

    //     mousewhell: true,
    //     keyboard: true,
    // })


