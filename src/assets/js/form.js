'use strict';
import { sendReq } from "./services/sendRequest";

const form = (formSelector) => {
    const form = document.querySelector(formSelector);

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let formData = new FormData(form);
        let object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });
        let jsonData = JSON.stringify(object);
        console.log(jsonData);
        sendReq("mailer/mailer/smart.php", jsonData)
            .then((res) => console.log(res)).finally(this.reset())
    });
};

export {form};