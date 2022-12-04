'use strict';

const preload = async (parentSelector, loadingSelector) => {
    const parent = document.querySelector(parentSelector);
    const loading = document.querySelector(loadingSelector);
    const lines = loading.querySelectorAll('span');


    document.querySelector('.content').style.transform = `translateY(${parent.getBoundingClientRect().height}px)`;
    document.querySelector('.content').style.opacity = `0`;
    window.addEventListener('scroll', scrollTo0);

    function scrollTo0() {
        window.scrollTo(0, 0);
    }
    for (let line of lines) {
       await lineWidthSetting(line);
    }
    lines.forEach(line => {
        setTimeout(() => {
            line.style.animation = `lineAnimation .7s ease`;
        }, 200);
        
    });
    setTimeout(() => {
        parent.classList.add('preload_loaded');
        document.querySelector('.content').style.transform = `translateY(0px)`;
        document.querySelector('.content').style.opacity = `1`;
        window.removeEventListener('scroll', scrollTo0);
    }, 1000);

    

    async function lineWidthSetting(line) {
        return new Promise(resolve => {
            setTimeout(() => {
                for(let j = 0; j <= 100; j++) {
                    setTimeout(() => {
                        line.style.background = `linear-gradient(to right, #fff ${j}%, transparent ${j}%)`;
                    }, 1 * j)
                }
                resolve();
            }, 100);
        });
    }
    return new Promise(resolve => resolve(true));
};
export {preload};