'use strict';
import { sendReq } from "./services/sendRequest";

const form = (formSelector) => {
    const form = document.querySelector(formSelector);
    const inputs = form.querySelectorAll('[name]');
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const submit = form.querySelector('.contact__submit');

    const message = {
        'loading': './assets/icons/spinner.gif',
        'error': {
            'en': 'something goes wrong :(',
            'ru': 'что-то пошло не так :(',
            'img': './assets/icons/wrong.svg'
        },
        'error-input': {
            'en': 'This field is required',
            'ru': 'Это поле обязательно для заполнения'
        },
        'error-for-btn' : {
            'en': 'Some fields were not filled out',
            'ru': 'Некоторые поля формы не заполнены'
        },
        'success': {
            'en': 'Thank you. I will contact you soon',
            'ru': 'Спасибо, скоро я с вами свяжусь',
            'img': './assets/icons/success.svg'
        }
    };

    inputs.forEach(input => {
        if(input.type !== 'checkbox') {
            input.addEventListener('input', () => {
                if(input.classList.contains('wrong')) {
                    input.classList.remove('wrong');
                    input.parentNode.removeChild(Array.from(input.parentNode.children)[Array.from(input.parentNode.children).length-1]);
                }
                if(input.value !== '') {
                    input.nextElementSibling.style.display = 'none';
                }else {
                    input.nextElementSibling.style.display = 'block';
                }
            });
        }else {
            input.addEventListener('change', () => {
                if(input.classList.contains('wrong')) {
                    input.classList.remove('wrong');
                    input.parentNode.removeChild(Array.from(input.parentNode.children)[Array.from(input.parentNode.children).length-1]);
                }
            })
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let a = 0;
        let hash = window.location.hash.substring(1);
        inputs.forEach(input => {
            if(!input.value || (input.type === 'checkbox' && !input.checked)) {
                let span = document.createElement('span');
                span.textContent = message['error-input'][hash];
                span.classList.add('contact__notfilled');
                input.parentNode.appendChild(span);
                input.classList.add('wrong');
                a=1;
            }
        });
        if(a > 0) {
            let divForm = document.createElement('div');
            divForm.classList.add('contact__notfilled');
            divForm.textContent = message['error-for-btn'][hash];
            submit.appendChild(divForm);
            console.log('here');
            return;
        }
        let formData = new FormData(form);
        let object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });
        let jsonData = JSON.stringify(object);
        sendReq("mailer/smart.php", jsonData)
            .then((res) => {
                showModal('success', window.location.hash.substring(1), modal);
            })
            .catch(() => {
                showModal('error', window.location.hash.substring(1), modal);
            })
            .finally(() => {
                this.reset();
                inputs.forEach(input => {
                    if(input.type === 'checkbox') {
                        input.checked = false;
                    }else {
                        input.value = '';
                        input.nextElementSibling.style.display = 'block';
                    }
                    
                }); 
                setTimeout(() => removeModal(modal), 15000);
            })
        
        function showModal(condition, hash, modalElem) {
            modalElem.classList.add('modal_active');
            overlay.classList.add('overlay_active');
            document.documentElement.addEventListener('click', (e) => {
                if(e.target.hasAttribute('data-close') || e.target.classList.contains('overlay')) {
                    removeModal(modal);
                }
            });
            switch(condition) {
                case 'success': modal.innerHTML = 
                    `
                        <div class="modal__img">
                            <img src="${message['success']['img']}">
                        </div>
                        <div class="modal__msg">${message['success'][hash]}</div>
                        <div class="modal__close" data-close>&#10005;</div>
                    `; break;
                case 'error': modal.innerHTML = 
                    `   
                        <div class="modal__img">
                            <img src="${message['error']['img']}">
                        </div>
                        <div class="modal__msg">${message['error'][hash]}</div>
                        <div class="modal__close" data-close>&#10005;</div>
                    `;break;
            }
        }
        function removeModal(modalElem) {
            modalElem.classList.remove('modal_active');
            overlay.classList.remove('overlay_active');
            modalElem.innerHTML = '';
        }   
    });
};

export {form};