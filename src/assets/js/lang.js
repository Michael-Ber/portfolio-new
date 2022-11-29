'use strict';

import Typed from 'typed.js';

const lang = {
    'lng-about' : {
        'en' : 'About',
        'ru': 'Обо мне'
    },
    'lng-skills' : {
        'en' : 'Skills',
        'ru': 'Навыки'
    },
    'lng-works' : {
        'en' : 'Works',
        'ru': 'Мои работы'
    },
    'lng-contact' : {
        'en' : 'Contact',
        'ru': 'Контакты'
    },
    'lng-intro' : {
        'en' : [`Hi,`, `I'm Michael,`, `web developer`],
        'ru': ['Привет,', 'меня зовут Михаил,', 'я веб-разработчик']
    },
    // 'lng-intro-2' : {
    //     'en' : `I'm Michael,`,
    //     'ru': 'меня зовут Михаил,'
    // },
    // 'lng-intro-3' : {
    //     'en' : `web developer`,
    //     'ru': 'я веб-разработчик'
    // },
    'lng-btnContact' : {
        'en' : 'Contact me!',
        'ru': 'Свяжитесь со мной'
    },
    'lng-prof' : {
        'en' : ['Freelancer', 'Front-end developer'],
        'ru': ['Фрилансер', 'Фронт-енд разработчик']
    },
    'lng-descr' : {
        'en' : "Hello, my name is Michael. I'm junior front-end developer.I've been learning front-end for two years, finished five web developing courses on Udemy and have been practicing all that time. My you can see below.",
        'ru': 'Привет, меня зовут Михаил. Я джуниор фронт-енд разработчик. Я изучаю фронт-енд два года, закончил пять курсов веб-разработки на Udemy, все это время практикуюсь. вы можете посмотреть ниже '
    },
    'lng-worksSubtitle' : {
        'en' : 'What i use in my work',
        'ru': 'Что я использую в работе'
    },
    'lng-html' : {
        'en' : 'HTML can be described as the language that ultimately gives web pages (and websites) the appearance and structure that is seen by end users.',
        'ru': 'HTML - стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере'
    },
    'lng-css' : {
        'en' : 'CSS is the abbreviation for the term “cascading style sheets” and describes how HTML elements should be displayed.',
        'ru': 'CSS расшифровывается как каскадные таблицы стилей и описывает как HTML элементы должны отображаться'
    },
    'lng-js' : {
        'en' : 'This programming language allows you to bring anything to life: sliders, windows, tooltips, tabs, receiving data from the server, and much more.',
        'ru': 'Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое'
    },
    'lng-react' : {
        'en' : 'This library allows you to create web applications. I can create the most interactive product for your purposes.',
        'ru': 'Эта библиотека позволяет создавать web-приложения. Я могу создать максимально интерактивный продукт именно под ваши цели'
    },
    'lng-jquery' : {
        'en' : 'The Jquery library will speed up development. Without the need to integrate it into the project, we will not, but the skill of working with it is present.',
        'ru': 'Библиотека Jquery позволит ускорить разработку. Без необходимости интегрировать в проект мы её не будем, но навык работы с ней присутствует.'
    },
    'lng-sites' : {
        'en' : 'Web sites creating',
        'ru': 'Создание веб-сайтов'
    },
    'lng-apps' : {
        'en' : 'Web applications creating',
        'ru': 'Создание веб-приложений'
    },
    'lng-data' : {
        'en' : 'Work with data',
        'ru': 'Работа с данными'
    },
    'lng-creativity' : {
        'en' : 'Creativity',
        'ru': 'Креативность'
    },
    'lng-design' : {
        'en' : 'Design creating',
        'ru': 'Создание дизайна'
    },
    'lng-softSkills' : {
        'en' : 'Soft skills',
        'ru': 'Soft skills'
    },
    'lng-portfolio' : {
        'en' : 'Portfolio',
        'ru': 'Портфолио'
    },
    'lng-worksSubtitle' : {
        'en' : 'Some of my works',
        'ru': 'Мои работы'
    },
    'lng-contactSubtitle' : {
        'en' : 'Form for contact',
        'ru': 'Форма для связи'
    },
    'lng-contactDescr' : {
        'en' : "I'm interested in freelance opportunities. However, if you have other request or question, you can use a form.",
        'ru': 'Мне интересны фриланс-возможности. Если у вас остались вопросы, можете использовать форму для связи'
    },
    'lng-name' : {
        'en' : 'Name',
        'ru': 'Имя'
    },
    'lng-email' : {
        'en' : 'Email',
        'ru': 'Почта'
    },
    'lng-msg' : {
        'en' : 'Message',
        'ru': 'Сообщение'
    },
    'lng-btnSend' : {
        'en' : 'Send message!',
        'ru': 'Отправить!'
    },
    'lng-privacy' : {
        'en' : 'I agree with the',
        'ru': 'Я согласен(а) с'
    },
    'lng-privacyLink' : {
        'en' : 'privacy policy',
        'ru': 'политикой конфиденциальности'
    },
};

function setLanguage(langObject, langSelector) {
    const select = document.querySelector(langSelector);
    const tagsForLangChange =  document.querySelectorAll('.lng');
    const introTitle = Array.from(document.querySelector('.intro__title').children);
    const aboutTitle = document.querySelector('.about__subtitle');

    window.location.hash = '#en';
    
    let hashOld = window.location.hash.substring(1);
    let typed1 = [];
    // Typed.js for intro__title, no loop
    
    for(let i = 0; i < introTitle.length; i++) {
        const typed = new Typed(introTitle[i], {
            strings: [lang['lng-intro'][window.location.hash.substring(1)][i]],
            typeSpeed: 40,
            startDelay: 900 * i,
            showCursor: false,
            onReset: self => {
                self.strings = [lang['lng-intro'][window.location.hash.substring(1)][i]]
            },
            onComplete: self => {
                animateText(introTitle[i], 'title-intro__letter');
            }
        });
        typed1.push(typed);
    }
    //

    // Typed.js for about__subtitle with loop=true
    let typed2 = new Typed(aboutTitle, {
        strings: lang['lng-prof'][window.location.hash.substring(1)],
        typeSpeed: 60,
        loop: true,
        showCursor: false,
        smartBackspace: false,
        startDelay: 500,
        backDelay: 1000,
        backSpeed: 30,
        onReset: (self) => {
            aboutTitle.style.opacity = 0;
        },
        onBegin: (self) => {
            setTimeout(() => {
                aboutTitle.style.opacity = 1;
            }, 600);
            self.strings = lang['lng-prof'][window.location.hash.substring(1)];
            self.strings.options = lang['lng-prof'][window.location.hash.substring(1)];
        }
    });

    //change hash
    
    select.addEventListener('input', () => {
        let language = select.value;
        window.location.hash  = `#${language}`;
        let hash = window.location.hash.substring(1);
        
        if(hashOld !== hash) {
            changeLanguage(hash);
        }
        
        
    })

    window.addEventListener('popstate', () => {
        let hash = window.location.hash.substring(1);
        select.value = window.location.hash.substring(1);
        changeLanguage(hash);
    });

    function changeLanguage(hash) {
        typed1.forEach((obj, j) => {
            obj.reset();
        });
        typed2.reset();
        tagsForLangChange.forEach(item => {
            const clsNameStr = item.classList.value.match(/lng-[a-z]*/ig).join('');
            if(item.classList.contains(clsNameStr)) {
                item.innerHTML = langObject[clsNameStr][hash];
            }
        });
    }

    //Animate literals
    function animateText(parentNode, letterClass) {
        let parent = parentNode;
        let content = parent.innerHTML;
        parent.innerHTML = '';

        for(let i = 0; i < content.length; i++) {
            let letter = document.createElement('span');
            if(content[i] == ' ') {
                letter.classList.add('space-item');
                letter.innerHTML = content[i];
                parent.appendChild(letter);
            }else {
                letter.classList.add(letterClass);
                letter.innerHTML = content[i];
                parent.appendChild(letter);
            }
        }
    }

}

export {setLanguage, lang};