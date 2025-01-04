

// блок бренды
let readMore = document.querySelector(".main__read-more");
let icButtonRM = document.querySelector(".main__read-more .read-more__icon-img");
let textButtonRM = document.querySelector(".main__read-more .read-more__text-button");
let b_brends = document.querySelector(".block-brends");
// блок артикл
let arrticle__readMore = document.querySelector(".b-arrticle__read-more-upp-m");
let icButtonRMA = document.querySelector(".b-arrticle__read-more-upp-m .read-more__icon-img");
let textButtonRMA = document.querySelector(".b-arrticle__read-more-upp-m .read-more__text-button");
let bParagUppM = document.querySelector(".b-article__parag-upp-m");

// техника
let readMoreTec = document.querySelector(".read-more.technic__read-more");
let icButtonRMTec = document.querySelector(".read-more.technic__read-more .read-more__icon-img");
let textButtonRMTec = document.querySelector(".read-more.technic__read-more .read-more__text-button");
let b_technic = document.querySelector(".block-technics");
// .technic__read-more
// переменные
let arrticle__readMoreOPEN = 'b-article__parag-upp-m--open';

let read = 'Читать далее';
let closes = 'Скрыть';
let showAll = 'Показать все';


function openBlock(block, mode, textOp, window, textButton, icButton){

    block.addEventListener('click', function(evt){

        evt.preventDefault();
        let openIc = "../src/Image/pictures/expand.png";
        let clossIc = "../src/Image/pictures/expand-closs.png";

        if (textButton.textContent === closes){
            window.classList.remove(mode)
            textButton.textContent = textOp;
            icButton.src = openIc;
        }else{
            window.classList.add(mode);
            textButton.textContent = closes;
            icButton.src = clossIc;
        }
    })
}

openBlock(arrticle__readMore, arrticle__readMoreOPEN, read, bParagUppM, textButtonRMA, icButtonRMA );
openBlock(readMore, 'block-brends--open', showAll, b_brends, textButtonRM, icButtonRM);
openBlock(readMoreTec, 'block-technics--open', showAll, b_technic, textButtonRMTec, icButtonRMTec);