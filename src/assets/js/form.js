'use strict';
import { sendReq } from "./services/sendRequest";

const form = (formSelector) => {
    const form = document.querySelector(formSelector);
    const inputs = form.querySelectorAll('[name]');
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay-form-submit');
    const submit = form.querySelector('.contact__submit');




    const message = {
        'loading': './assets/icons/spinner.svg',
        'error': {
            'img': './assets/icons/wrong.svg'
        },
        'error-input': {
            'en': 'This field is required',
            'ru': 'Это поле обязательно для заполнения'
        },
        'error-for-btn': {
            'en': 'Some fields were not filled out',
            'ru': 'Некоторые поля формы не заполнены'
        },
        'success': {
            'img': './assets/icons/success.svg'
        }
    };



    inputs.forEach(input => {
        if (input.type !== 'checkbox') {
            input.addEventListener('input', () => {
                if (input.classList.contains('wrong')) {
                    input.classList.remove('wrong');
                    input.parentNode.removeChild(Array.from(input.parentNode.children)[Array.from(input.parentNode.children).length - 1]);
                }
                if (input.value !== '') {
                    input.nextElementSibling.style.display = 'none';
                } else {
                    input.nextElementSibling.style.display = 'block';
                }
            });
        } else {
            input.addEventListener('change', () => {
                if (input.classList.contains('wrong')) {
                    input.classList.remove('wrong');
                    input.parentNode.removeChild(Array.from(input.parentNode.children)[Array.from(input.parentNode.children).length - 1]);
                }
            })
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let spinner = document.createElement('img');
        spinner.setAttribute('src', message['loading']);
        spinner.style.cssText = `width: 40px; height: 40px; margin-left: 20px`;
        submit.appendChild(spinner);


        let a = 0;
        let hash = window.location.hash.substring(1);
        inputs.forEach(input => {
            if (!input.value || (input.type === 'checkbox' && !input.checked)) {
                let span = document.createElement('span');
                span.textContent = message['error-input'][hash];
                span.classList.add('contact__notfilled');
                input.parentNode.appendChild(span);
                input.classList.add('wrong');
                a = 1;
                submit.removeChild(spinner);
            }
        });
        if (a > 0) {
            let divForm = document.createElement('div');
            divForm.classList.add('contact__notfilled-main');
            divForm.innerHTML = message['error-for-btn'][hash];
            document.documentElement.appendChild(divForm);
            setTimeout(() => {
                document.documentElement.removeChild(divForm);
            }, 3000);
            return;
        }
        let formData = new FormData(form);
        let object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });
        let jsonData = JSON.stringify(object);

        sendReq("https://portfolio-mailer-8yue.onrender.com/send_mail", jsonData)
            .then((res) => {
                submit.removeChild(spinner);
                showModal(res, window.location.hash.substring(1), modal);
            })
            .catch((err) => {
                submit.removeChild(spinner);
                showModal('error', window.location.hash.substring(1), modal);
            })
            .finally(() => {
                this.reset();
                inputs.forEach(input => {
                    if (input.type === 'checkbox') {
                        input.checked = false;
                    } else {
                        input.value = '';
                        input.nextElementSibling.style.display = 'block';
                    }

                });
                setTimeout(() => removeModal(modal), 7000);
            })

        function showModal(condition, hash, modalElem) {
            modalElem.classList.add('modal_active');
            overlay.classList.add('overlay-form-submit_active');
            document.documentElement.addEventListener('click', (e) => {
                if (e.target.hasAttribute('data-close') || e.target.classList.contains('overlay')) {
                    removeModal(modal);
                }
            });
            if (condition.hasOwnProperty('success')) {
                modal.innerHTML =
                    `
                        <div class="modal__img modal__img_suc">
                            <img src="${message['success']['img']}">
                        </div>
                        <div class="modal__msg">${condition.message[hash]}</div>
                        <div class="modal__close" data-close>&#10005;</div>
                    `
            } else if (condition.hasOwnProperty('error')) {
                modal.innerHTML =
                    `   
                        <div class="modal__img modal__img_wrong">
                            <img src="${message['error']['img']}">
                        </div>
                        <div class="modal__msg">${condition.message[hash]}</div>
                        <div class="modal__close" data-close>&#10005;</div>
                    `
            }
        }
        function removeModal(modalElem) {
            modalElem.classList.remove('modal_active');
            overlay.classList.remove('overlay-form-submit_active');
            modalElem.innerHTML = '';
        }
    });
};
export { form };

