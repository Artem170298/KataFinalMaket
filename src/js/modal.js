
let openMenu = document.querySelector('.burger-icon-upp-m');
let call = document.querySelector('.call-icon-upp-m');
let chat = document.querySelector('.chat-icon-upp-m');
let blureFeedback = document.querySelector('.blure-feedback');
let orderACallClose = document.querySelector('.orderACall__close');
let feedbackClose = document.querySelector('.feedback__close');
let menuCall = document.querySelector('.ic-phone');
let menuChat = document.querySelector('.ic-chat');
let closeMenu = document.querySelector('.header-menu__ic-burger');

let bMenu = document.querySelector('.rectangle');
let bMenuClose = 'rectangle--close';
let bMenuOpen = 'rectangle--open';

let containerBlure = document.querySelector('.container__blure');
let containerBlureClose = 'container__blure--close';
let containerBlureOpen = 'container__blure--open';

let bFeedback = document.querySelector('.feedback');
let bFeedbackClose = 'feedback--close';
let bFeedbackOpen = 'feedback--open';

let bOrderACall = document.querySelector('.orderACall');
let bOrderACallClose = 'orderACall--close';
let bOrderACallOpen = 'orderACall--open';

let blureFeedbackClose = 'blure-feedback--close';
let blureFeedbackOpen = 'blure-feedback--open';

function openModalWindow(butt, block, modeCl, modeOp, blureBlock, modeBlCl, modeBlOp){
    butt.addEventListener('click', function(evt){
        evt.preventDefault();
        
        block.classList.remove(modeCl);
        block.classList.add(modeOp);
        blureBlock.classList.remove(modeBlCl);
        blureBlock.classList.add(modeBlOp);
        
    })
};

function closeModalWindow(butt, block, modeCl, modeOp, blureBlock, modeBlCl, modeBlOp){
    butt.addEventListener('click', function(evt){
        evt.preventDefault();
        
        block.classList.remove(modeOp);
        block.classList.add(modeCl);
        blureBlock.classList.remove(modeBlOp);
        blureBlock.classList.add(modeBlCl);
        
    })
}

openModalWindow(openMenu, bMenu, bMenuClose, bMenuOpen, containerBlure, containerBlureClose, containerBlureOpen);
openModalWindow(call, bOrderACall, bOrderACallClose, bOrderACallOpen, blureFeedback, blureFeedbackClose, blureFeedbackOpen);
openModalWindow(chat, bFeedback, bFeedbackClose, bFeedbackOpen, blureFeedback, blureFeedbackClose, blureFeedbackOpen);
openModalWindow(menuCall, bOrderACall, bOrderACallClose, bOrderACallOpen, blureFeedback, blureFeedbackClose, blureFeedbackOpen);
openModalWindow(menuChat, bFeedback, bFeedbackClose, bFeedbackOpen, blureFeedback, blureFeedbackClose, blureFeedbackOpen);

closeModalWindow(closeMenu, bMenu, bMenuClose, bMenuOpen, containerBlure, containerBlureClose, containerBlureOpen);
closeModalWindow(containerBlure, bMenu, bMenuClose, bMenuOpen, containerBlure, containerBlureClose, containerBlureOpen);
closeModalWindow(blureFeedback, bOrderACall, bOrderACallClose, bOrderACallOpen, blureFeedback, blureFeedbackClose, blureFeedbackOpen);
closeModalWindow(blureFeedback, bFeedback, bFeedbackClose, bFeedbackOpen, blureFeedback, blureFeedbackClose, blureFeedbackOpen);
closeModalWindow(orderACallClose, bOrderACall, bOrderACallClose, bOrderACallOpen, blureFeedback, blureFeedbackClose, blureFeedbackOpen);
closeModalWindow(feedbackClose, bFeedback, bFeedbackClose, bFeedbackOpen, blureFeedback, blureFeedbackClose, blureFeedbackOpen);

