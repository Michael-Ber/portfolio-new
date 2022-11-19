'use strict';

import {burger} from './burger';
import {scroll} from './scroll';
import {setLanguage, lang} from './lang';
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
        const clsNameStr = item.classList.value.match(/lng-[a-z]*/ig).join('');
        // console.log(clsNameStr);
        // console.log(lang[clsNameStr]['ru']);
    });
    setLanguage(lang, '.lang-selector');
});