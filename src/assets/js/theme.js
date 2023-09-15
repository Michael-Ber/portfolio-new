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

    if(!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'light');
        lightTheme();
    }else {
        if(localStorage.getItem('theme') === 'dark') {
            btn.classList.add(('theme-btn_dark'));
            trigger.classList.add('theme-btn__trigger_dark');
            darkTheme();
            
        }else {
            lightTheme()
        }
    }

    btn.addEventListener('click', function() {
        if(!this.classList.contains('theme-btn__trigger_dark')) {
            this.classList.toggle(('theme-btn_dark'));
            trigger.classList.toggle('theme-btn__trigger_dark');
            
        }
        switch(localStorage.getItem('theme')) {
            case 'light': localStorage.setItem('theme', 'dark'); break;
            case 'dark': localStorage.setItem('theme', 'light'); break;
        }
        if(localStorage.getItem('theme') === 'light') {
            lightTheme();
        }else {
            darkTheme();
        }
    })

    function lightTheme() {
        elementToChangeBackgroundColor.forEach(item => {
            switch(item.tagName) {
                case 'HEADER': item.style.boxShadow = '0 0 5px 0 #000'; break;
                case 'SELECT': item.style.border = '1px solid #000';break;
            }
            item.style.backgroundColor = '#fff';
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
        githubSvg.classList.remove('theme-github');
        logoSvg.classList.remove('theme-logo');
        mailSvg.classList.remove('theme-mail');
        introImgChangeTheme.classList.remove('theme-intro');
        checkboxChangeTheme.classList.remove('theme-checkbox');
    }

    function darkTheme() {
        elementToChangeBackgroundColor.forEach(item => {
            switch(item.tagName) {
                case 'HEADER': item.style.boxShadow = '0 0 5px 0 #fff'; break;
                case 'SELECT': item.style.border = '1px solid #fff';break;
            }
            item.style.backgroundColor = '#000';
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
        githubSvg.classList.toggle('theme-github');
        logoSvg.classList.toggle('theme-logo');
        mailSvg.classList.toggle('theme-mail');
        introImgChangeTheme.classList.toggle('theme-intro');
        checkboxChangeTheme.classList.toggle('theme-checkbox');
    }

    

}

export {theme}