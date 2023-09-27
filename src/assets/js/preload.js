'use strict';

const preload = async () => {
    const img = document.querySelector('#intro-img');
    const overlay = document.querySelector('.overlay');
    console.log('PRELOAD');

    img.onload = function () {
        overlay.classList.remove('overlay_active');
    }

    img.onload();
};
export { preload };