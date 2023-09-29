'use strict';

const preload = async () => {
    const img1 = document.querySelector('#content-img');
    const img2 = document.querySelector('#section-bg-img-dark');
    const img3 = document.querySelector('#section-bg-img-light');
    const overlay = document.querySelector('.overlay');

    img1.onload = function () {
        return true;
    }
    img2.onload = function () {
        return true;
    }
    img3.onload = function () {
        return true;
    }

    if (img1.onload() && img2.onload() && img3.onload()) {
        overlay.classList.remove('overlay_active');
    }


};
export { preload };