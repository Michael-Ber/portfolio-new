import { closeBurgerMenu } from "./burger";


export const sectionCommutator = () => {

    const slider = document.querySelector('.slider');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const container = document.querySelector('.container');
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.navlink');
    let slideWidth = slider.getBoundingClientRect().width;
    const logo = document.querySelectorAll('.logo');


    let prevSlideNum = null;
    let actualSlide = 0;

    window.addEventListener('resize', sectionMedia);
    sectionMedia();
    if (Number(window.getComputedStyle(container).width.replace(/px/ig, '')) < 576) {
        slider.style.height = 'calc(100vh - 100px)';
    } else {
        slider.style.height = '100vh';
    }

    links.forEach(link => {
        link.addEventListener('click', triggerSlider);
    })


    logo.forEach(item => {
        item.addEventListener('click', goToIntro);
    })

    function goToIntro(e) {
        e.preventDefault();
        const hash = recursyForTagname(e.target); //intro
        const sectionNum = Array.from(sections).findIndex(section => section.id === hash);
        cleanSections(sections);
        slider.style.height = Array.from(sections)[sectionNum].offsetHeight + 'px';
        links.forEach(link => link.classList.remove('link_active'));
        if (prevSlideNum > sectionNum) {
            sections[sectionNum].classList.add('section-active-toleft');
        } else {
            sections[sectionNum].classList.add('section-active-toright');
        }
        sliderWrapper.style.transform = `translateX(${0}px)`;
    }

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
        slideWidth = slider.getBoundingClientRect().width;
        sliderWrapper.style.width = slideWidth * sections.length + 'px';
        sliderWrapper.style.transform = `translateX(-${actualSlide * slideWidth}px)`;
        setTimeout(() => {
            slider.style.height = Array.from(sections)[actualSlide].clientHeight + 'px';
        }, 1000)

    }

    function triggerSlider(e) {
        e.preventDefault();
        if (e.target.hash) {
            const sectionNum = Array.from(sections).findIndex(section => section.id === e.target.hash.substring(1));
            sliderWrapper.style.transform = `translateX(-${sectionNum * slideWidth}px)`;
            slider.style.height = Array.from(sections)[sectionNum].offsetHeight + 'px';
            cleanSections(sections);
            actualSlide = sectionNum;

            links.forEach(link => link.classList.remove('link_active'));
            Array.from(links)
                .filter(link => link.hash.substring(1) === e.target.hash.substring(1))
                .forEach(filteredLink => filteredLink.classList.add('link_active'))
            //Remove Twitching from when scroll appear
            if (window.innerHeight < sections[sectionNum].clientHeight) {
                document.body.style.marginRight = `-${removeTwitching()}px`;
                document.body.style.overflowX = `hidden`;
                document.querySelector('.content-img').style.marginRight = `-${removeTwitching()}px`;
                document.querySelector('.aside-links__right').style.right = `${-80 - removeTwitching()}px`;

            } else {
                document.body.style.marginRight = `0px`;
                document.body.style.overflowX = `unset`;
                document.querySelector('.content-img').style.marginRight = `0px`;
                document.querySelector('.aside-links__right').style.right = `-80px`;
            }
            //
            //change animation for section when slider goes to right or to left
            if (prevSlideNum > sectionNum) {
                sections[sectionNum].classList.add('section-active-toleft');
                sections[sectionNum + 1].classList.add('section-active-toleft-prev');
            } else {
                sections[sectionNum].classList.add('section-active-toright');
                sections[sectionNum - 1].classList.add('section-active-toright-prev');
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