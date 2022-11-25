'use strict';
import {burger} from './burger';
import {scroll} from './scroll';
import {setLanguage, lang} from './lang';
import {parallax} from './parallax';
import {percentCreation} from './percents';

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

    setLanguage(lang, '.lang-selector');
    parallax('#intro', '.intro__bg');
    percentCreation('.skills__diagrams-item', '.diagrams-item__percent', '.bottom-diagrams-item__bg-front')
    
});