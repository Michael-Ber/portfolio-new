'use strict';
import { burger, closeBurgerMenu } from "./burger";
const scroll = ({
    arrow: arrowSelector,
    arrowActive: arrowActiveClass
}) => {
    const links = document.querySelectorAll('[href^="#"]');
    const speed = 0.2;

    window.addEventListener('scroll', () => {
        let fromTop = document.documentElement.scrollTop;
        let arrow = document.querySelector(arrowSelector);
        if (fromTop > 1650) {
            arrow.classList.add(arrowActiveClass);
        } else {
            arrow.classList.remove(arrowActiveClass);
        }
        if (fromTop > 1200) {
            document.querySelectorAll('.aside-links').forEach(link => {
                link.style.opacity = '1';
            });
        } else {
            document.querySelectorAll('.aside-links').forEach(link => {
                link.style.opacity = '0';
            });
        }
    });

    links.forEach(link => {
        if (link.hash) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                // Close burger menu after click to link
                closeBurgerMenu(
                    document.querySelector('.burger__btn'),
                    document.querySelector('.burger__menu'),
                    'burger__btn_active',
                    'burger__menu_active',
                    document.querySelector('body')
                );
                //
                let toSection = document.querySelector(link.hash).getBoundingClientRect().top - 100;
                let fromTop = document.documentElement.scrollTop;
                let start = null;
                requestAnimationFrame(step);

                function step(time) {
                    if (start === null) {
                        start = time;
                    }
                    let progress = time - start;
                    let r = toSection < 0 ? Math.max(fromTop - progress / speed, fromTop + toSection) : Math.min(fromTop + progress / speed, fromTop + toSection);
                    document.documentElement.scrollTo(0, r);
                    if (r != fromTop + toSection) {
                        requestAnimationFrame(step);
                    }
                }
            });
        }
    })


};

export { scroll };