'use strict';

import {burger} from './burger';

window.addEventListener('DOMContentLoaded', () => {
    burger({
        btn: '.burger__btn',
        menu: '.burger__menu',
        overlay: '.overlay',
        btnActive: 'burger__btn_active',
        menuActive: 'burger__menu_active',
        overlayActive: 'overlay_active',
        close: '.menu__close'
    });

    // function animateBtn() {
    //     let target = this;
    //     for(let i = 0; i <= 100; i++) {
    //         changeBgFwd(i);
    //     }
    //     function changeBgFwd(i) {
    //         setTimeout(() => {
    //             target.style.background = `linear-gradient(to right, red ${i}%, transparent ${i}%)`
    //         }, i * 2.5)
    //     }
    // }
    // function removeAnimateBtn() {
    //     let target = this;
    //     for(let i = 100; i >= 0; i--) {
    //         changeBgBwd(i);
    //     }
    //     function changeBgBwd(i) {
    //         setTimeout(() => {
    //             target.style.background = `linear-gradient(to left, transparent ${i}%, red ${i}%)`
    //         }, i * 2.5)
    //     }
    // }

    // for(let i = 0; i <= 100; i++) {

    // }

    // document.querySelector('.btn').addEventListener('mouseenter', animateBtn);
    // document.querySelector('.btn').addEventListener('mouseleave', removeAnimateBtn);
});