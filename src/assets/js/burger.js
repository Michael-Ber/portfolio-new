'use strict';

const burger = ({
    btn : btnSelector,
    menu: menuSelector,
    overlay: overlaySelector,
    btnActive: btnActiveClass,
    menuActive: menuActiveClass,
    overlayActive: overlayActiveClass,
    close: closeSelector
}) => {
    const burgerBtn = document.querySelector(btnSelector),
          burgerMenu = document.querySelector(menuSelector),
          overlay = document.querySelector(overlaySelector),
          close = document.querySelector(closeSelector),
          body = document.querySelector('body');
          
    burgerBtn.addEventListener('click', function() {
        if(!this.classList.contains(btnActiveClass)) {
            this.classList.add(btnActiveClass);
            burgerMenu.classList.add(menuActiveClass);
            // overlay.classList.add(overlayActiveClass);
            body.style.overflow = 'hidden';
            body.style.marginRight = `${getScrollWidth()}px`;
        }else {
            this.classList.remove(btnActiveClass);
            burgerMenu.classList.remove(menuActiveClass);
            // overlay.classList.remove(overlayActiveClass);
            body.style.overflow = 'unset';
            body.style.marginRight = `0px`;
        }
    });
    close.addEventListener('click', () => {
        burgerBtn.classList.remove(btnActiveClass);
        burgerMenu.classList.remove(menuActiveClass);
        // overlay.classList.remove(overlayActiveClass);
        body.style.overflow = 'unset';
        body.style.marginRight = `0px`;
    });
}
function getScrollWidth() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
}


export {burger};