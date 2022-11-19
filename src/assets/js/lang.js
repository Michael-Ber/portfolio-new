
const lang = {
    'lng-about' : {
        'en' : 'about',
        'ru': 'обо мне'
    },
    'lng-skills' : {
        'en' : 'skills',
        'ru': 'навыки'
    },
    'lng-works' : {
        'en' : 'works',
        'ru': 'мои работы'
    },
    'lng-contact' : {
        'en' : 'contact',
        'ru': 'контакты'
    },
    'lng-intro' : {
        'en' : `Hi, <br>I'm Michael,<br> web developer`,
        'ru': 'Привет,<br> меня зовут Михаил,<br> я веб-разработчик'
    },
    'lng-btnContact' : {
        'en' : 'Contact me!',
        'ru': 'Свяжитесь со мной'
    },
    'lng-prof' : {
        'en' : 'Freelancer',
        'ru': 'Фрилансер'
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
    window.location.hash = '#en';
    select.addEventListener('change', () => {
        let language = select.value;
        
        window.location.hash  = `#${language}`;
        
        let hash = window.location.hash;

        tagsForLangChange.forEach(item => {
            const clsNameStr = item.classList.value.match(/lng-[a-z]*/ig).join('');
            console.log(item);
            if(item.classList.contains(clsNameStr)) {
                item.innerHTML = langObject[clsNameStr][hash.substring(1)];
            }
            // console.log(clsNameStr);
            // console.log(lang[clsNameStr]['ru']);
        });
    })
}

export {setLanguage, lang};