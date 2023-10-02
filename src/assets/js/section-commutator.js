


export const sectionCommutator = () => {
    // const sections = document.querySelectorAll('section');
    // const linksWrapper = document.querySelector('.links-header__list');

    // linksWrapper.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     if (e.target.hash) {
    //         const showSection = Array.from(sections).filter(section => section.id === e.target.hash.substring(1))[0];
    //         sections.forEach(section => section.classList.remove('section-active'));
    //         if (e.target.hash === '#about') {
    //             showSection.style.display = 'flex';
    //             showSection.classList.add('section-active');
    //         } else {
    //             showSection.style.display = 'block';
    //         }

    //     }
    // })

    const slider = document.querySelector('.slider');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const sections = document.querySelectorAll('section');
    const linksWrapper = document.querySelector('.links-header__list');
    const slideWidth = slider.getBoundingClientRect().width;
    const slideHeight= slider.getBoundingClientRect().height;
    const toFirstSlide = document.querySelector('.header__logo');

    sliderWrapper.style.width = slideWidth * sections.length + 'px';
    sections.forEach(section => section.style.width);
    slider.style.height = '100vh';
    console.log(window.innerHeight);
    linksWrapper.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.hash) {
            const sectionNum = Array.from(sections).findIndex(section => section.id === e.target.hash.substring(1));
            sliderWrapper.style.transform = `translateX(-${sectionNum * slideWidth}px)`;
            slider.style.height = Array.from(sections)[sectionNum].getBoundingClientRect().height + 'px';
        }
    });
    toFirstSlide.addEventListener('click', (e) => {
        e.preventDefault();
        sliderWrapper.style.transform = `translateX(${0}px)`;
    });


}