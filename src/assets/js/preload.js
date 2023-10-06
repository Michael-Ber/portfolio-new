'use strict';

const preload = async () => {
    const img1 = document.querySelector('#content-img-light');
    const img2 = document.querySelector('#content-img-dark');
    const overlay = document.querySelector('.overlay');
    try {
        img1.onload = function () {
            return true;
        }
        img2.onload = function () {
            return true;
        }
        if (img1.onload() && img2.onload()) {
            overlay.classList.remove('overlay_active');
        }
    } catch (error) {
        console.log(error)
    }
};
export { preload };