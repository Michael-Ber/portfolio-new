
export const changePhotoLocation = () => {
    try {
        if(window.matchMedia("(max-width: 767px)").matches) {
            if(document.querySelector('.about__wrapper').children.length > 1) {
                document.querySelector('.about__wrapper .about__left').remove();
                document.querySelector('.about__right .right-about__text .about__title').insertAdjacentElement('afterend',createElement());
                console.log('here?')
            }
        }else {
            if(document.querySelector('.about__right .about__left')) {
                document.querySelector('.about__right .about__left').remove();
                document.querySelector('.about__wrapper').insertAdjacentElement('afterbegin',createElement());
            }
        }


        function createElement() {
            console.log('resize');
            const leftPart = document.createElement('div');
            leftPart.classList.add('about__left');
            leftPart.innerHTML = `<img src="./assets/img/photo-min.png" width="100%" height="100%" alt="photo" loading="lazy">`;
            return leftPart;
        }
        
    } catch (error) {
        console.log(error)
    }
}


