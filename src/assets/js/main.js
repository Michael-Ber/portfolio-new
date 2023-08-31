'use strict';
import {preload} from './preload';
import {burger} from './burger';
import {scroll} from './scroll';
import {setLanguage, lang} from './lang';
import {parallax} from './parallax';
import {percentCreation} from './percents';
import {form} from './form';
import { theme } from './theme';


window.addEventListener('DOMContentLoaded', () => {
    // preload('.preload', '.preload__loading').then(
    //     res => {
    //         if(res === true) {
    //             setTimeout(() => {
    //                 setLanguage(lang, '.lang-selector');//delay for make text typed visible
    //             }, 1500);
                
    //         }
    //     }
    // );
    scroll({arrow: '.arrow-up', arrowActive: 'arrow-up_active'});
    setLanguage(lang, '.lang-selector');
    burger({
        btn: '.burger__btn',
        menu: '.burger__menu',
        overlay: '.overlay',
        btnActive: 'burger__btn_active',
        menuActive: 'burger__menu_active',
        overlayActive: 'overlay_active',
        close: '.menu__close'
    });
    // parallax('.app', '.app__bg');
    percentCreation('.skills__diagrams-item', '.diagrams-item__percent', '.bottom-diagrams-item__bg-front');
    form('.contact__form');
    theme();
});