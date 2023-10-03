import { closeBurgerMenu } from "./burger";


export const sectionCommutator = () => {

    const slider = document.querySelector('.slider');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const container = document.querySelector('.container');
    const sections = document.querySelectorAll('section');
    const linksWrapper = document.querySelector('.links-header__list');
    const burgerLinksWrapper = document.querySelector('.menu__list');
    const slideWidth = slider.getBoundingClientRect().width;
    const slideHeight = slider.getBoundingClientRect().height;
    const toFirstSlide = document.querySelector('.header__logo');
    sliderWrapper.style.width = slideWidth * sections.length + 'px';
    sections.forEach(section => section.style.width);
    slider.style.height = '100vh';

    let prevSlideNum = null;

    window.addEventListener('resize', sectionMedia);
    sectionMedia();


    linksWrapper.addEventListener('click', triggerSlider);

    burgerLinksWrapper.addEventListener('click', triggerSlider);

    toFirstSlide.addEventListener('click', (e) => {
        e.preventDefault();
        const hash = recursyForTagname(e.target); //intro
        const sectionNum = Array.from(sections).findIndex(section => section.id === hash);
        cleanSections(sections);
        if (prevSlideNum > sectionNum) {
            sections[sectionNum].classList.add('section-active-toleft');
        } else {
            sections[sectionNum].classList.add('section-active-toright');
        }
        sliderWrapper.style.transform = `translateX(${0}px)`;
    });

    // need to return from <a href="#intro"> -> intro
    function recursyForTagname(target) {
        if (target.tagName === 'A') {
            return target.hash.substring(1)
        }
        return recursyForTagname(target.parentNode)
    }
    //
    function removeTwitching() {

        let res = 0;
        const body = document.querySelector('body');
        const div = document.createElement('div');
        div.style.width = '60px';
        div.style.height = '60px';
        div.style.visibility = 'hidden';
        div.style.overflowY = 'scroll';
        body.appendChild(div);
        res = div.offsetWidth - div.clientWidth;
        body.removeChild(div);
        return res;
    }

    function cleanSections(arr) {
        arr.forEach(section => section.classList.remove('section-active-toright', 'section-active-toleft'))
    }

    function setSectionWidth(sections, width) {
        sections.forEach(section => section.style.minWidth = width);
    }

    function sectionMedia() {
        switch (window.getComputedStyle(container).width) {
            case '1240px': setSectionWidth(sections, window.getComputedStyle(container).width); break;
            case '960px': setSectionWidth(sections, window.getComputedStyle(container).width); break;
            case '720px': setSectionWidth(sections, window.getComputedStyle(container).width); break;
            case '520px': setSectionWidth(sections, window.getComputedStyle(container).width); break;
            default: setSectionWidth(sections, window.getComputedStyle(container).width); break;
        }
    }

    function triggerSlider(e) {
        e.preventDefault();
        if (e.target.hash) {
            const sectionNum = Array.from(sections).findIndex(section => section.id === e.target.hash.substring(1));
            sliderWrapper.style.transform = `translateX(-${sectionNum * slideWidth}px)`;
            slider.style.height = Array.from(sections)[sectionNum].getBoundingClientRect().height + 'px';
            cleanSections(sections);
            //Remove Twitching from when scroll appear
            if (window.innerHeight < sections[sectionNum].clientHeight) {
                document.body.style.marginRight = `-${removeTwitching()}px`;
                document.body.style.overflowX = `hidden`;
                document.querySelector('header').style.padding = `10px ${60 - removeTwitching()}px 10px 50px`;
                document.querySelector('.content-img').style.marginRight = `-${removeTwitching()}px`;
                document.querySelector('.aside-links__right').style.right = `${-80 - removeTwitching()}px`;

            } else {
                document.body.style.marginRight = `0px`;
                document.body.style.overflowX = `unset`;
                document.querySelector('header').style.padding = `10px 60px 10px 50px`;
                document.querySelector('.content-img').style.marginRight = `0px`;
                document.querySelector('.aside-links__right').style.right = `-80px`;
            }
            //
            //change animation for section when slider goes to right or to left
            if (prevSlideNum > sectionNum) {
                sections[sectionNum].classList.add('section-active-toleft');
            } else {
                sections[sectionNum].classList.add('section-active-toright');
            }
            prevSlideNum = sectionNum;
            //
        }
        if (document.querySelector('.burger__menu').classList.contains('burger__menu_active')) {
            closeBurgerMenu(
                document.querySelector('.burger__btn'),
                document.querySelector('.burger__menu'),
                'burger__btn_active',
                'burger__menu_active',
                document.body
            )
        }
    }


}