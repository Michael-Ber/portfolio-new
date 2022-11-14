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
        //   body = document.querySelector('body');
          
    burgerBtn.addEventListener('click', function() {
        if(!this.classList.contains(btnActiveClass)) {
            this.classList.add(btnActiveClass);
            burgerMenu.classList.add(menuActiveClass);
            overlay.classList.add(overlayActiveClass);
            // body.style.overflow = "hidden";
            // body.style.paddingRight = `${offset}px`;
        }else {
            this.classList.remove(btnActiveClass);
            burgerMenu.classList.remove(menuActiveClass);
            overlay.classList.remove(overlayActiveClass);
            // body.style.overflow = 'unset';
            // body.style.paddingRight = 'unset';
        }
    });
    close.addEventListener('click', () => {
        burgerBtn.classList.remove(btnActiveClass);
        burgerMenu.classList.remove(menuActiveClass);
        overlay.classList.remove(overlayActiveClass);
    });
}


export {burger};