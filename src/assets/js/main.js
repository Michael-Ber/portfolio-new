'use strict';
import { burger } from './burger';
import { scroll } from './scroll';
import { setLanguage, lang } from './lang';
import { percentCreation } from './percents';
import { form } from './form';
import { theme } from './theme';
import { preload } from './preload';
import { sectionCommutator } from './section-commutator';
import { changePhotoLocation } from './changePhotoLocation';


window.addEventListener('DOMContentLoaded', () => {
    // scroll({ arrow: '.arrow-up', arrowActive: 'arrow-up_active' });

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
    percentCreation('.skills__diagrams-item', '.diagrams-item__percent', '.bottom-diagrams-item__bg-front');
    form('.contact__form');
    theme();
    preload();
    sectionCommutator();
    window.addEventListener('resize', changePhotoLocation);
    changePhotoLocation();


});

