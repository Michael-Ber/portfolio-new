import { typed1 } from "./lang";



const theme = () => {
    const btn = document.querySelector('.theme-btn');
    const trigger = btn.querySelector('.theme-btn__trigger');
    const elementToChangeBackgroundColor = document.querySelectorAll('.theme-bg');
    const elementToChangeTextColor = document.querySelectorAll('.theme-color');
    const btnsToChangeBorderColor = document.querySelectorAll('.btn.theme');
    const burgerLinesChangeColor = document.querySelectorAll('.theme-burger');
    const svgToChangeColor = document.querySelectorAll('svg.theme');
    const githubSvg = svgToChangeColor[0];
    const mailSvg = svgToChangeColor[1];
    const introImgChangeTheme = document.querySelector('.intro');
    const checkboxChangeTheme = document.querySelector('input.theme');
    const skillsCardsChangeTheme = document.querySelectorAll('article.theme');
    const aboutImagesDark = document.querySelectorAll('.section-bg .theme-dark');
    const aboutImagesLight = document.querySelectorAll('.section-bg .theme-light');
    const introStrokes = document.querySelectorAll('.title-intro__str');
    const sectionBg = document.querySelectorAll('section.theme');
    const bgImageTheme = document.querySelector('.content-img.theme').children;



    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'dark');
        darkTheme();
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
                case 'FOOTER': item.style.boxShadow = '0 0 5px 0 #000'; item.style.background = '#fff'; break;
                case 'SELECT': item.style.border = '1px solid #000'; item.style.background = '#fff'; break;
                case 'I': item.style.background = '#000'; break;
                default: item.style.background = '#fff';
            }

        })
        bgImageTheme[0].style.display = 'block';
        bgImageTheme[1].style.display = 'none';
        bgImageTheme[2].style.background = 'linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, 0.8))';
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
        mailSvg.classList.remove('theme-mail');
        introImgChangeTheme.classList.remove('theme-intro');
        checkboxChangeTheme.classList.remove('theme-checkbox');
        aboutImagesDark.forEach(img => {
            img.style.display = 'none';
        })
        aboutImagesLight.forEach(img => {
            img.style.display = 'block';
        })
        typed1.forEach(typed => {
            typed.reset(true)
        })
        sectionBg.forEach(bg => {
            bg.classList.remove('section-bg_dark');
            bg.classList.add('section-bg_light');
        })
    }

    function darkTheme() {
        elementToChangeBackgroundColor.forEach(item => {
            switch (item.tagName) {
                case 'HEADER': item.style.boxShadow = '0 0 5px 0 #fff'; item.style.background = '#0d1221'; break;
                case 'FOOTER': item.style.boxShadow = '0 0 5px 0 #fff'; item.style.background = '#0d1221'; break;
                case 'SELECT': item.style.border = '1px solid #fff'; item.style.background = '#0d1221'; break;
                case 'I': item.style.background = '#fff'; break;
                case 'OPTION': item.style.background = '#000'; break;
                default: item.style.background = ' #0d1221';
            }
        })
        bgImageTheme[0].style.display = 'none';
        bgImageTheme[1].style.display = 'block';
        bgImageTheme[2].style.background = 'linear-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, 0.9))';
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
        mailSvg.classList.toggle('theme-mail');
        introImgChangeTheme.classList.add('theme-intro');
        checkboxChangeTheme.classList.toggle('theme-checkbox');
        aboutImagesDark.forEach(img => {
            img.style.display = 'block';
        })
        aboutImagesLight.forEach(img => {
            img.style.display = 'none';
        })
        typed1.forEach(typed => {
            typed.reset(true)
        })
        sectionBg.forEach(bg => {
            bg.classList.add('section-bg_dark');
            bg.classList.remove('section-bg_light');
        })
    }



}

export { theme }