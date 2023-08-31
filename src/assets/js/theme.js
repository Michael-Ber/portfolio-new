const theme = () => {
    const btn = document.querySelector('.theme-btn');
    const trigger = btn.querySelector('.theme-btn__trigger');
    const elementToChangeBackgroundColor = document.querySelectorAll('.theme-bg');
    const elementToChangeTextColor = document.querySelectorAll('.theme-color');
    const btnsToChangeBorderColor = document.querySelectorAll('.btn');

    if(!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'light');
    }else {
        if(localStorage.getItem('theme') === 'dark') {
            btn.classList.add(('theme-btn_dark'));
            trigger.classList.add('theme-btn__trigger_dark');
            elementToChangeBackgroundColor.forEach(item => {
                item.style.backgroundColor = '#000';
            })
            elementToChangeTextColor.forEach(item => {
                item.style.color = '#fff';
            })
            btnsToChangeBorderColor.forEach(item => {
                item.classList.add('btn_dark')
            })
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
            elementToChangeBackgroundColor.forEach(item => {
                item.style.backgroundColor = '#fff';
            })
            elementToChangeTextColor.forEach(item => {
                item.style.color = '#000'
            })
            btnsToChangeBorderColor.forEach(item => {
                item.classList.toggle('btn_dark')
            })
        }else {
            elementToChangeBackgroundColor.forEach(item => {
                item.style.backgroundColor = '#000';
            })
            elementToChangeTextColor.forEach(item => {
                item.style.color = '#fff';
            })
            btnsToChangeBorderColor.forEach(item => {
                console.log(item)
                item.classList.toggle('btn_dark')
            })
        }
    })

    

}

export {theme}