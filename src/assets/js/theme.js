import { setLanguage, lang, typed1 } from "./lang";



const theme = () => {
    const btn = document.querySelector('.theme-btn');
    const trigger = btn.querySelector('.theme-btn__trigger');
    const elementToChangeBackgroundColor = document.querySelectorAll('.theme-bg');
    const elementToChangeTextColor = document.querySelectorAll('.theme-color');
    const btnsToChangeBorderColor = document.querySelectorAll('.btn.theme');
    const burgerLinesChangeColor = document.querySelectorAll('.theme-burger');
    const svgToChangeColor = document.querySelectorAll('svg.theme');
    const logoSvg = svgToChangeColor[0];
    const githubSvg = svgToChangeColor[1];
    const mailSvg = svgToChangeColor[2];
    const introImgChangeTheme = document.querySelector('.intro');
    const checkboxChangeTheme = document.querySelector('input.theme');
    const skillsCardsChangeTheme = document.querySelectorAll('article.theme');
    // const aboutRightChangeTheme = document.querySelector('.right-about__bg');
    const aboutImagesDark = document.querySelectorAll('.section-bg .theme-dark');
    const aboutImagesLight = document.querySelectorAll('.section-bg .theme-light');
    const introStrokes = document.querySelectorAll('.title-intro__str');


    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'light');
        lightTheme();
    } else {
        if (localStorage.getItem('theme') === 'dark') {
            btn.classList.add(('theme-btn_dark'));
            trigger.classList.add('theme-btn__trigger_dark');
            darkTheme();

        } else {
            lightTheme()
        }
    }

    btn.addEventListener('click', function () {
        if (!this.classList.contains('theme-btn__trigger_dark')) {
            this.classList.toggle(('theme-btn_dark'));
            trigger.classList.toggle('theme-btn__trigger_dark');

        }
        switch (localStorage.getItem('theme')) {
            case 'light': localStorage.setItem('theme', 'dark'); break;
            case 'dark': localStorage.setItem('theme', 'light'); break;
        }
        if (localStorage.getItem('theme') === 'light') {
            lightTheme();
        } else {
            darkTheme();
        }
    })
    function lightTheme() {
        elementToChangeBackgroundColor.forEach(item => {
            switch (item.tagName) {
                case 'HEADER': item.style.boxShadow = '0 0 5px 0 #000'; item.style.background = '#fff'; break;
                case 'SELECT': item.style.border = '1px solid #000'; item.style.background = '#fff'; break;
                default: item.style.background = '#fff';
            }

        })
        burgerLinesChangeColor.forEach(line => {
            line.style.backgroundColor = '#333';
        })
        elementToChangeTextColor.forEach(item => {
            item.style.color = '#000'
        })
        btnsToChangeBorderColor.forEach(item => {
            item.classList.remove('btn_dark')
        })
        skillsCardsChangeTheme.forEach(card => {
            card.classList.remove('theme-skills-card');
        })
        introStrokes.forEach(stroke => {
            stroke.style.color = '#000';
        })
        githubSvg.classList.remove('theme-github');
        logoSvg.classList.remove('theme-logo');
        mailSvg.classList.remove('theme-mail');
        introImgChangeTheme.classList.remove('theme-intro');
        checkboxChangeTheme.classList.remove('theme-checkbox');
        // aboutRightChangeTheme.style.backgroundColor = '#fff';
        // aboutRightChangeTheme.style.opacity = '0.3';
        // aboutImages[0].style.display = 'none';
        // aboutImages[1].style.display = 'block';
        aboutImagesDark.forEach(img => {
            img.style.display = 'none';
        })
        aboutImagesLight.forEach(img => {
            img.style.display = 'block';
        })
        typed1.forEach(typed => {
            typed.reset(true)
        })

    }

    function darkTheme() {
        elementToChangeBackgroundColor.forEach(item => {
            switch (item.tagName) {
                case 'HEADER': item.style.boxShadow = '0 0 5px 0 #fff'; item.style.background = '#000'; break;
                case 'SELECT': item.style.border = '1px solid #fff'; item.style.background = '#000'; break;
                default: item.style.background = 'radial-gradient(#000 10%, #0d1221 50%)';
            }
        })
        burgerLinesChangeColor.forEach(line => {
            line.style.backgroundColor = '#fff';
        })
        elementToChangeTextColor.forEach(item => {
            item.style.color = '#fff';
        })
        btnsToChangeBorderColor.forEach(item => {
            item.classList.toggle('btn_dark')
        })
        skillsCardsChangeTheme.forEach(card => {
            card.classList.toggle('theme-skills-card');
        })
        introStrokes.forEach(stroke => {
            stroke.style.color = '#fff';
        })
        githubSvg.classList.toggle('theme-github');
        logoSvg.classList.toggle('theme-logo');
        mailSvg.classList.toggle('theme-mail');
        introImgChangeTheme.classList.add('theme-intro');
        checkboxChangeTheme.classList.toggle('theme-checkbox');
        // aboutRightChangeTheme.style.backgroundColor = '#000';
        // aboutRightChangeTheme.style.opacity = '0.2';
        // aboutImages[0].style.display = 'block';
        // aboutImages[1].style.display = 'none';
        aboutImagesDark.forEach(img => {
            img.style.display = 'block';
        })
        aboutImagesLight.forEach(img => {
            img.style.display = 'none';
        })
        typed1.forEach(typed => {
            typed.reset(true)
        })
    }



}

export { theme }