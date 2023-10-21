'use strict';
import Typed from 'typed.js';

const lang = {
    'lng-about': {
        'en': 'About',
        'ru': 'Обо мне'
    },
    'lng-skills': {
        'en': 'Skills',
        'ru': 'Навыки'
    },
    'lng-works': {
        'en': 'Works',
        'ru': 'Мои работы'
    },
    'lng-contact': {
        'en': 'Contact',
        'ru': 'Контакты'
    },
    'lng-intro': {
        'en': [`Hi,`, `I'm Michael,`, `web developer`],
        'ru': ['Привет,', 'меня зовут Михаил,', 'я веб-разработчик']
    },
    'lng-btnContact': {
        'en': 'Contact me!',
        'ru': 'Свяжитесь со мной'
    },
    'lng-prof': {
        'en': ['Freelancer', 'Front-end developer'],
        'ru': ['Фрилансер', 'Фронт-енд разработчик']
    },
    'lng-descrBeforeLink': {
        'en': "Hello, my name is Michael. I'm junior front-end developer. I've been learning front-end for two years, finished five web developing courses on Udemy and have been practicing all that time. My ",
        'ru': 'Привет, меня зовут Михаил. Я джуниор фронт-енд разработчик. Я изучаю фронт-енд два года, закончил пять курсов веб-разработки на Udemy, все это время практикуюсь. '
    },
    'lng-descrAfterLink': {
        'en': "you can see on works section.",
        'ru': 'вы можете посмотреть в секции работ.'
    },
    'lng-worksLink': {
        'en': "works",
        'ru': "Мои работы"
    },
    'lng-skillsSubtitle': {
        'en': 'What i use in my work',
        'ru': 'Что я использую в работе'
    },
    'lng-html': {
        'en': 'HTML can be described as the language that ultimately gives web pages (and websites) the appearance and structure that is seen by end users.',
        'ru': 'HTML - стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере'
    },
    'lng-css': {
        'en': 'CSS is the abbreviation for the term “cascading style sheets” and describes how HTML elements should be displayed.',
        'ru': 'CSS расшифровывается как каскадные таблицы стилей и описывает как HTML элементы должны отображаться'
    },
    'lng-js': {
        'en': 'This programming language allows you to bring anything to life: sliders, windows, tooltips, tabs, receiving data from the server, and much more.',
        'ru': 'Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое'
    },
    'lng-react': {
        'en': 'This library allows you to create web applications. I can create the most interactive product for your purposes.',
        'ru': 'Эта библиотека позволяет создавать web-приложения. Я могу создать максимально интерактивный продукт именно под ваши цели'
    },
    'lng-jquery': {
        'en': 'The Jquery library will speed up development. Without the need to integrate it into the project, we will not, but the skill of working with it is present.',
        'ru': 'Библиотека Jquery позволит ускорить разработку. Без необходимости интегрировать в проект мы её не будем, но навык работы с ней присутствует.'
    },
    'lng-mongodb': {
        'en': 'A document-oriented database management system that does not require a description of the table schema. Considered one of the classic examples of NoSQL systems, uses JSON-like documents and database schema.',
        'ru': 'Документоориентированная система управления базами данных, не требующая описания схемы таблиц. Считается одним из классических примеров NoSQL-систем, использует JSON-подобные документы и схему базы данных.'
    },
    'lng-nodejs': {
        'en': 'This platform allows you to create a backend for your product - "brains" that will perform actions that the user does not see.',
        'ru': 'Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут выполнять действия, которые пользователь не видит.'
    },
    'lng-sites': {
        'en': 'Web sites creating',
        'ru': 'Создание веб-сайтов'
    },
    'lng-apps': {
        'en': 'Web applications creating',
        'ru': 'Создание веб-приложений'
    },
    'lng-data': {
        'en': 'Work with data',
        'ru': 'Работа с данными'
    },
    'lng-creativity': {
        'en': 'Creativity',
        'ru': 'Креативность'
    },
    'lng-design': {
        'en': 'Design creating',
        'ru': 'Создание дизайна'
    },
    'lng-softSkills': {
        'en': 'Soft skills',
        'ru': 'Soft skills'
    },
    'lng-portfolio': {
        'en': 'Portfolio',
        'ru': 'Портфолио'
    },
    'lng-worksSubtitle': {
        'en': 'Some of my works',
        'ru': 'Мои работы'
    },
    'lng-contactSubtitle': {
        'en': 'Form for contact',
        'ru': 'Форма для связи'
    },
    'lng-contactDescr': {
        'en': "I'm interested in freelance opportunities. However, if you have other request or question, you can use a form.",
        'ru': 'Мне интересны фриланс-возможности. Если у вас остались вопросы, можете использовать форму для связи'
    },
    'lng-name': {
        'en': 'Name',
        'ru': 'Имя'
    },
    'lng-email': {
        'en': 'Email',
        'ru': 'Почта'
    },
    'lng-msg': {
        'en': 'Message',
        'ru': 'Сообщение'
    },
    'lng-btnSend': {
        'en': 'Send message!',
        'ru': 'Отправить!'
    },
    'lng-privacy': {
        'en': 'I agree with the',
        'ru': 'Я согласен(а) с'
    },
    'lng-privacyLink': {
        'en': 'privacy policy',
        'ru': 'политикой конфиденциальности'
    },
    'lng-privacyHref': {
        'en': 'privacy-en.html',
        'ru': 'privacy-ru.html'
    },
    'lng-preview': {
        'en': 'view',
        'ru': 'смотреть'
    }
};
let typed1 = [];

function setLanguage(langObject, langSelector) {
    const select = document.querySelector(langSelector);
    const tagsForLangChange = document.querySelectorAll('.lng');
    const introTitle = Array.from(document.querySelector('.intro__title').children);
    const aboutTitle = document.querySelector('.about__subtitle');


    window.location.hash = '#en';

    let hashOld = window.location.hash.substring(1);

    try {
        // Typed.js for intro__title, no loop

        for (let i = 0; i < introTitle.length; i++) {
            try {
                const typed = new Typed(introTitle[i], {
                    strings: [lang['lng-intro'][window.location.hash.substring(1)][i]],
                    typeSpeed: 40,
                    startDelay: 900 * i,
                    showCursor: false,
                    onReset: self => {
                        try {
                            self.strings = [lang['lng-intro'][window.location.hash.substring(1)][i]]
                        } catch (error) {
                            console.log(error)
                        }
                    },
                    onComplete: self => {
                        try {
                            animateText(introTitle[i], 'title-intro__letter');
                        } catch (error) {
                            console.log(error)
                        }
                    }
                });
                typed1.push(typed);
            } catch (error) {
                console.log(error)
            }

        }

        // Typed.js for about__subtitle with loop=true
        const typed2 = new Typed(aboutTitle, {
            strings: lang['lng-prof'][window.location.hash.substring(1)],
            typeSpeed: 60,
            loop: true,
            showCursor: false,
            smartBackspace: false,
            startDelay: 500,
            backDelay: 1000,
            backSpeed: 30,
            onReset: (self) => {
                try {
                    aboutTitle.style.opacity = 0;
                } catch (error) {
                    onslotchange.log(error)
                }
            },
            onBegin: (self) => {
                try {
                    setTimeout(() => {
                        aboutTitle.style.opacity = 1;
                    }, 600);
                    self.strings = lang['lng-prof'][window.location.hash.substring(1)];
                    self.strings.options = lang['lng-prof'][window.location.hash.substring(1)];
                } catch (error) {
                    console.log(error)
                }

            }
        });

        //change hash

        select.addEventListener('input', () => {
            let language = select.value;
            window.location.hash = `#${language}`;
            let hash = window.location.hash.substring(1);
            if (hashOld !== hash) {
                changeLanguage(hash);
            }
        })

        window.addEventListener('popstate', () => {   //without that language changes only 1 time
            let hash = window.location.hash.substring(1);
            select.value = window.location.hash.substring(1);
            changeLanguage(hash);
        });

        function changeLanguage(hash) {
            try {
                typed1.forEach((obj, j) => {
                    obj.reset();
                });
                typed2.reset();
                tagsForLangChange.forEach(item => {
                    const clsNameStr = item.classList.value.match(/lng-[a-z]*/ig).join('');

                    if (item.classList.contains(clsNameStr)) {
                        item.innerHTML = langObject[clsNameStr][hash];
                    }
                });
                document.querySelector('.privacy__link').setAttribute('href', `${lang['lng-privacyHref'][hash]}`);
            } catch (error) {
                console.log(error)
            }

        }


        //Animate literals
        function animateText(parentNode, letterClass) {
            let parent = parentNode;
            let content = parent.innerHTML;
            let themeClass = '';
            parent.innerHTML = '';

            if (window.localStorage.getItem('theme') === 'dark') {
                themeClass += 'title-intro__letter_light'
            } else {
                themeClass += 'title-intro__letter_dark'
            }

            for (let i = 0; i < content.length; i++) {
                let letter = document.createElement('span');
                if (content[i] == ' ') {
                    letter.classList.add('space-item');
                    letter.innerHTML = content[i];
                    parent.appendChild(letter);
                } else {
                    letter.classList.add(letterClass, themeClass);
                    letter.innerHTML = content[i];
                    parent.appendChild(letter);
                }
            }
        }
    } catch (error) {
        console.log(error)
    }
}

export { setLanguage, lang, typed1 };