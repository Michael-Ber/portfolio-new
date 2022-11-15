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
          close = document.querySelector(closeSelector);
          
    burgerBtn.addEventListener('click', function() {
        if(!this.classList.contains(btnActiveClass)) {
            this.classList.add(btnActiveClass);
            burgerMenu.classList.add(menuActiveClass);
            overlay.classList.add(overlayActiveClass);
        }else {
            this.classList.remove(btnActiveClass);
            burgerMenu.classList.remove(menuActiveClass);
            overlay.classList.remove(overlayActiveClass);
        }
    });
    close.addEventListener('click', () => {
        burgerBtn.classList.remove(btnActiveClass);
        burgerMenu.classList.remove(menuActiveClass);
        overlay.classList.remove(overlayActiveClass);
    });
}


export {burger};