'use strict';

import {burger} from './burger';
import {scroll} from './scroll';

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
    scroll({arrow: '.arrow-up', arrowActive: 'arrow-up_active'});

    document.querySelectorAll('.lng').forEach(item => {
        console.log(item.classList.contains('lng-about'));
    });
});