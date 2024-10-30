/*$(".menu-element__link").click(function() {
    const thisElement = $(this);

    if (thisElement.hasClass('active')) {
        return;
    }

    const linkHref = thisElement.attr("href");
    const hrefElement = $(linkHref);

    const paddingTop = parseInt(hrefElement.css("padding-top"));
    const menuHeight = $(".header-top").height();

    $([document.documentElement, document.body]).animate({
        scrollTop: hrefElement.offset().top - paddingTop - menuHeight
    }, 1500);

    $(".menu-element__link.active").removeClass('active');
    thisElement.addClass('active');
});*/

const menuHeight = document.querySelector(".header-top").clientHeight;

/* Active link after click */
document.querySelectorAll(".menu-element__link").forEach(element => {
  element.addEventListener("click", function (e) {
    e.preventDefault();

    if (hasClass(this, 'active')) {
      return;
    }

    const linkHref = this.getAttribute("href");
    const hrefElement = document.getElementById(linkHref.replace("#", ""));

    const paddingTop = parseInt(getComputedStyle(document.querySelector('#work')).paddingTop);

    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: hrefElement.offsetTop - paddingTop - menuHeight
    });

    changeActiveMenuElement(this);
  });
});

/* Active link on scroll to section */
const options = {
  threshold: 0.3
}
const callback = function (entries) {
  entries.forEach(entry => {
    const sectionMenuLink = document.querySelector(`.menu-element__link[href='#${entry.target.id}']`);
    if (entry.isIntersecting && !hasClass(sectionMenuLink, 'active')) {
      changeActiveMenuElement(sectionMenuLink);
    }
  });
};
const observer = new IntersectionObserver(callback, options);
document.querySelectorAll(".observer-section").forEach(element => {
  observer.observe(element);
});

// Общие функции
/**
 * Меняет активный элемент в пунктах меню
 * @param element Ссылка в меню
 */
function changeActiveMenuElement(element) {
  document.querySelector(".menu-element__link.active").classList.remove('active');
  element.classList.add('active');
}

/**
 * Проверяет наличие класса у элемента
 * @param element
 * @param className
 */
function hasClass(element, className) {
  return element.classList.contains(className);
}

document.querySelectorAll('input[name="lang"]').forEach((input) => {
  input.addEventListener('change', function () {
    const langRU = document.querySelector('.switcher-wrapper label[for="lang-ru"]');
    const langEN = document.querySelector('.switcher-wrapper label[for="lang-eng"]');

    if (this.id === 'lang-ru') {
      // Анимация для смены текста Ru
      langRU.style.color = '#fff';
      langRU.style.transform = 'scale(1.2)';
      langEN.style.color = 'rgba(255, 255, 255, 0.6)';
      langEN.style.transform = 'scale(1.1)';
    } else if (this.id === 'lang-eng') {
      // Анимация для смены текста Eng
      langEN.style.color = '#fff';
      langEN.style.transform = 'scale(1.2)';
      langRU.style.color = 'rgba(255, 255, 255, 0.6)';
      langRU.style.transform = 'scale(1.1)';
    }

    // Восстановление масштаба после анимации
    setTimeout(() => {
      langRU.style.transform = 'scale(1)';
      langEN.style.transform = 'scale(1)';
    }, 400);
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const nameElement = document.querySelector('.name');

  function hideName() {
    nameElement.style.opacity = 0; // Прячем элемент через 10 секунд
  }

  function showName() {
    nameElement.style.opacity = 1; // Показываем элемент обратно через 3 секунды
  }

  // Прячем через 10 секунд
  setTimeout(hideName, 10000);

  // Показываем снова через 3 секунды после скрытия
  setTimeout(showName, 13000);
});
  document.addEventListener('DOMContentLoaded', function () {
  const logo = document.querySelector('.logo-image');

  // Убираем класс bounce после анимации
  setTimeout(() => {
  logo.classList.remove('bounce');
}, 1500);

  // Добавляем повторяющуюся анимацию на hover
  logo.addEventListener('mouseover', function () {
  setTimeout(() => {
  logo.classList.add('spin-effect');
}, 100); // Небольшая задержка для плавности
});

  logo.addEventListener('mouseout', function () {
  setTimeout(() => {
  logo.classList.remove('spin-effect');
}, 300); // Отключение после задержки
});
});
document.addEventListener('DOMContentLoaded', () => {
  const logoImage = document.querySelector('.logo-image');
  const popHi = document.querySelector('.Pop-hi');
  let hideTimeout; // Переменная для хранения таймера

  // Показ иконок при наведении на логотип
  logoImage.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout); // Если таймер уже был запущен, очищаем его
    popHi.style.opacity = "1"; // Делаем иконки видимыми
  });

  // Скрытие иконок через 7 секунд после ухода курсора с логотипа
  logoImage.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
      popHi.style.opacity = "0"; // Скрываем иконки
    }, 7000); // Таймер на 7 секунд
  });

  // Отмена скрытия иконок, если курсор на иконках
  popHi.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout); // Очищаем таймер скрытия
  });

  // Запуск таймера на скрытие, если курсор уходит с иконок
  popHi.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
      popHi.style.opacity = "0"; // Скрываем иконки через 7 секунд
    }, 7000); // Таймер на 7 секунд
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const logoImage = document.querySelector('.logo-image');
  const headerTop = document.querySelector('.header-top');
  let hideTimeout; // Переменная для хранения таймера

  // Показ ссылки "Alex" при наведении на логотип
  logoImage.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout); // Если таймер был запущен, очищаем его
    headerTop.classList.add('logo-visible'); // Делаем ссылку видимой
  });

  // Скрытие ссылки через 10 секунд после ухода курсора с логотипа
  logoImage.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
      headerTop.classList.remove('logo-visible'); // Скрываем ссылку через 10 секунд
    }, 10000); // Таймер на 10 секунд
  });
});

const controls = document.querySelectorAll('.slider__controls-element');
let activeIndex = 0;

controls.forEach((control, index) => {
  control.addEventListener('click', () => {
    controls[activeIndex].classList.remove('active');
    control.classList.add('active');
    activeIndex = index;

    // Действие при переключении слайдов
    document.querySelector(`.slider__input:nth-of-type(${index + 1})`).checked = true;
  });
});

// Автоматическое переключение между слайдами
let autoSwitch = setInterval(() => {
  controls[activeIndex].classList.remove('active');
  activeIndex = (activeIndex + 1) % controls.length;
  controls[activeIndex].classList.add('active');

  // Переключение слайдов
  document.querySelector(`.slider__input:nth-of-type(${activeIndex + 1})`).checked = true;
}, 3000);

// Остановка автоматического переключения при наведении
document.querySelector('.slider__controls').addEventListener('mouseenter', () => {
  clearInterval(autoSwitch);
});

document.querySelector('.slider__controls').addEventListener('mouseleave', () => {
  autoSwitch = setInterval(() => {
    controls[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + 1) % controls.length;
    controls[activeIndex].classList.add('active');

    // Переключение слайдов
    document.querySelector(`.slider__input:nth-of-type(${activeIndex + 1})`).checked = true;
  }, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
  const skillItems = document.querySelectorAll(".skills-list__element");
  const skillFilters = document.querySelectorAll(".skill-filter");

  // 1. Анимация появления при прокрутке
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // После появления больше не отслеживать
        }
      });
    },
    { threshold: 0.2 } // Появляется, когда 20% блока видно
  );

  skillItems.forEach(item => observer.observe(item));

  // 2. Эффект свечения активного фильтра
  skillFilters.forEach(filter => {
    filter.addEventListener("click", () => {
      skillFilters.forEach(f => f.classList.remove("active"));
      filter.classList.add("active");
    });
  });

  // 3. Плавающее увеличение при наведении
  skillItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "scale(1.08)";
      item.style.transition = "transform 0.3s ease";
    });
    item.addEventListener("mouseleave", () => {
      item.style.transform = "scale(1)";
    });
  });

  // 4. Случайное подсвечивание навыков каждые 3 секунды
  setInterval(() => {
    const randomItem = skillItems[Math.floor(Math.random() * skillItems.length)];
    randomItem.classList.add("highlight");
    setTimeout(() => randomItem.classList.remove("highlight"), 800);
  }, 1000);
});
document.addEventListener("DOMContentLoaded", function() {
  const workElements = document.querySelectorAll('.work-element');

  function updateBackgroundSize() {
    const isMobile = window.innerWidth <= 768;

    workElements.forEach(element => {
      if (isMobile) {
        element.style.backgroundSize = 'contain'; // На мобильных изображение "вмещается" в блок
        element.style.backgroundPosition = 'center';
        element.style.backgroundRepeat = 'no-repeat';
      } else {
        element.style.backgroundSize = 'cover'; // На десктопах изображение "покрывает" блок
      }
    });
  }

  // Вызываем функцию при загрузке и при изменении размера экрана
  updateBackgroundSize();
  window.addEventListener('resize', updateBackgroundSize);
});

document.querySelectorAll('.work-element').forEach((element) => {
  const video = element.querySelector('.background-video');

  element.addEventListener('mouseenter', () => {
    video.style.display = 'block';
    video.play();
  });

  element.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
    video.style.display = 'none';
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Находим все элементы, к которым будет применяться анимация
  const workElements = document.querySelectorAll(".work-element__animation");

  // Создаем observer для отслеживания видимости элементов
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Если элемент виден, добавляем класс animate для запуска анимации
        entry.target.classList.add("animate");
        // Отключаем отслеживание этого элемента, чтобы анимация не перезапускалась
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // Запускаем анимацию, когда элемент на 10% виден в зоне видимости
  });

  // Наблюдаем за каждым элементом
  workElements.forEach(element => {
    observer.observe(element);
  });
});


document.querySelectorAll('.work-element__projects-element, .work-project, .work-element__skills-element').forEach(element => {
  element.addEventListener('mouseenter', () => {
    const tooltip = element.querySelector('.work-tooltip');

    // Определяем положение и регулируем позицию
    const rect = element.getBoundingClientRect();
    if (window.innerWidth - rect.right < 250) { // Если мало места справа
      tooltip.style.left = 'auto';
      tooltip.style.right = '100%';
    } else {
      tooltip.style.left = '50%';
      tooltip.style.right = 'auto';
    }

    tooltip.style.display = 'block';
  });

  element.addEventListener('mouseleave', () => {
    const tooltip = element.querySelector('.work-tooltip');
    tooltip.style.display = 'none';
  });
});
// Выбираем элементы с tooltip
const tooltipElements = document.querySelectorAll('.work-element__skills-element, .work-project, .work-element__projects-element, .work-project__title');

tooltipElements.forEach(element => {
  const tooltip = element.querySelector('.work-tooltip');
  let hideTimeout;

  // Плавное появление tooltip при наведении
  element.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout); // Очищаем таймер, если он был установлен
    tooltip.classList.remove('fade-out'); // Убираем класс исчезновения
    tooltip.classList.add('fade-in'); // Добавляем класс появления
  });

  // Плавное исчезновение tooltip при уходе курсора
  element.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
      tooltip.classList.remove('fade-in'); // Убираем класс появления
      tooltip.classList.add('fade-out'); // Добавляем класс исчезновения
    }, 500); // Задержка исчезновения
  });
});
document.querySelectorAll('.skills-list__element').forEach(element => {
  element.addEventListener('click', function () {
    const skill = this.getAttribute('data-skill');

    // Скрываем все карточки
    document.querySelectorAll('.skill-card').forEach(card => {
      card.style.display = 'none';
    });

    // Отображаем соответствующую карточку
    const selectedCard = document.querySelector(`.skill-card[data-skill="${skill}"]`);
    if (selectedCard) {
      selectedCard.style.display = 'block';
    }
  });
});
document.querySelectorAll('.skills-list__element').forEach(element => {
  element.addEventListener('click', function () {
    const skill = this.getAttribute('data-skill');
    const skillData = getSkillData(skill);

    if (skillData) {
      // Обновляем содержимое карточки
      document.querySelector('.skill-card__image').src = skillData.image;
      document.querySelector('.skill-card__name').textContent = skillData.name;
      document.querySelector('.skill-card__description').textContent = skillData.description;

      // Устанавливаем прогресс
      const progressBar = document.querySelector('.skill-card__progress-percent');
      progressBar.textContent = skillData.progress;
      progressBar.style.width = skillData.progress; // Для визуальной полосы прогресса

      // Показать карточку
      document.querySelector('.skill-card').style.display = 'block';
    } else {
      console.error(`Данные для навыка "${skill}" не найдены.`);
    }
  });
});

function getSkillData(skill) {
  const skills = {
    html: {
      image: "\\icons\\html2.png",
      name: "HTML",
      description: "Язык разметки, который отвечает за структуру\n" +
        "                  и логическую организацию веб-страницы,\n" +
        "                  определяя, как различные элементы — текст, изображения,\n" +
        "                  таблицы, формы — будут расположены и связаны между собой.На HTML я могу создавать многослойные структуры, включая сложные формы,\n" +
        "                  сетки с мультимедийным контентом, настраивать интерактивные элементы,\n" +
        "                  такие как ссылки и кнопки, и внедрять метаданные для улучшения взаимодействия\n" +
        "                  с поисковыми системами и оптимизации отображения в браузерах.",
      progress: "95%",
    },
    css: {
      image: "\\icons\\css.png",
      name: "CSS",
      description: "Уверенно работаю с CSS, создавая адаптивные и стильные интерфейсы.\n" +
        "                  С помощью CSS я управляю расположением элементов, делаю их анимации плавными и привлекательными,\n" +
        "                  настраиваею эффекты наведения и интерактивность, создаю сложные сетки и адаптирую их под разные экраны.\n" +
        "                  Люблю CSS за его способность визуально оживлять сайт: превращать идеи в реальность,\n" +
        "                  создавать динамичные интерфейсы и добавлять те самые мелкие детали, которые делают пользовательский опыт особенным и запоминающимся.\n" +
        "                  Этот язык помогает выражать креативность, делая дизайн чётким, стильным и профессиональным.",
      progress: "90%",
    },

    less: {
      image: "\\icons\\less-logo.png",
      name: "less",
      description: "Инструменты, которые делают работу с CSS быстрее и удобнее. Они добавляют структуру и логику, упрощают повторное использование стилей и позволяют создавать более гибкие и масштабируемые дизайны.",
      progress: "80%",
    },
    figma: {
      image: "\\icons\\figma.png",
      name: "Figma",
      description: "универсальный инструмент для UI/UX-дизайна, который позволяет проектировать интерфейсы, создавать интерактивные прототипы и работать в команде в реальном времени. Она работает прямо в браузере, что избавляет от необходимости устанавливать софт и делает доступ к проекту возможным с любого устройства. В Figma удобно разрабатывать адаптивные макеты, легко вносить правки и тестировать пользовательские сценарии. Благодаря библиотекам компонентов и стилей, дизайнеры могут поддерживать единый визуальный стиль, а разработчики — проще переносить макеты в код.",
      progress: "70%",
    } ,
    boots: {
      image: "\\icons\\bootstrap.png",
      name: "Bootstrap",
      description: "мощный фреймворк для создания адаптивных веб-сайтов, который предоставляет готовые компоненты, сетки и стили, упрощая процесс разработки. Он позволяет создавать интерфейсы, которые выглядят хорошо на любых устройствах, и включает множество настроек, которые легко кастомизировать под нужды проекта.",
      progress: "75%",
    },
    Python: {
      image: "\\icons\\py.png",
      name: "Python",
      description: "Люблю Python за его простоту и универсальность. Он интуитивно понятен и легко читается,\n" +
        "                  что делает его отличным языком для быстрого старта и написания чистого кода. Python также поддерживает множество библиотек\n" +
        "                  и фреймворков, благодаря чему его можно использовать практически в любой сфере — от автоматизации тестирования до\n" +
        "                  разработки сложных веб-приложений и анализа данных. Этот язык позволяет быстро реализовывать идеи, фокусируясь на решении задач,\n" +
        "                  а не на синтаксических тонкостях.",
      progress: "70%",
    },
    Django: {
      image: "\\icons\\dj.png",
      name: "Django",
      description: "Мощный веб-фреймворк на Python, который позволяет быстро и эффективно создавать веб-приложения. Он предоставляет полный набор инструментов для разработки: системы аутентификации, работу с базами данных, маршрутизацию, шаблоны и админ-панель. Django помогает поддерживать структуру проекта, обеспечивает безопасность и ускоряет процесс разработки, делая его одним из самых популярных фреймворков для создания сложных веб-сервисов.",
      progress: "50%",
    },
    PyTest: {
      image: "\\icons\\pt.webp",
      name: "PyTest",
      description: "Фреймворк для тестирования на Python, который делает написание и запуск тестов простым и удобным. Он поддерживает различные типы тестов, от модульных до интеграционных, и обладает лаконичным синтаксисом, что снижает количество кода. Благодаря гибкости и мощным фиктурам Pytest позволяет организовать тестирование эффективно и масштабируемо, что делает его идеальным выбором как для небольших проектов, так и для крупных систем.",
      progress: "55%",
    },
    Unittest: {
      image: "\\icons\\u.webp",
      name: "Unittest",
      description: " Встроенный фреймворк для тестирования в Python, который позволяет создавать и организовывать тесты для модулей и функций. Он обеспечивает структуру для написания тест-кейсов, выполнения тестов и проверки ожидаемых результатов, поддерживает концепции тестовых наборов, фикстур и ассертов. Unittest помогает автоматизировать тестирование и поддерживать качество кода, делая его надёжным инструментом для тестирования приложений различного масштаба.",
      progress: "65%",
    },
    Aiogram: {
      image: "\\icons\\t.png",
      name: "Aiogram",
      description: "Асинхронный фреймворк для создания Telegram-ботов на Python, который использует библиотеку asyncio для эффективной обработки запросов. Благодаря асинхронности Aiogram позволяет боту быстро реагировать на сообщения и обрабатывать несколько запросов одновременно, что делает его идеальным для проектов с высоким количеством пользователей. Фреймворк поддерживает широкий набор функций Telegram API, таких как команды, кнопки, клавиатуры, а также удобные хендлеры для обработки событий, что облегчает разработку и делает код более организованным и читаемым.",
      progress: "85%",
    },
    Allure: {
      image: "\\icons\\a2.png",
      name: "Allure",
      description: "Инструмент для создания визуально привлекательных и интерактивных отчётов о тестировании, который интегрируется с различными фреймворками, такими как Pytest и JUnit. Он собирает данные о выполненных тестах, включая статус, время выполнения и детали ошибок, и преобразует их в наглядный отчёт. Allure упрощает анализ результатов тестов, позволяя группировать и сортировать их по категориям, что делает его ценным инструментом для повышения прозрачности и удобства тестирования.",
      progress: "70%",
    },
    Selenium: {
      image: "\\icons\\s.png",
      name: "Selenium",
      description: "инструмент для автоматизации веб-браузеров, который широко используется для тестирования веб-приложений. Он поддерживает несколько языков программирования, включая Python, Java, и JavaScript, что делает его гибким для использования в различных проектах. Selenium позволяет эмулировать действия пользователя, такие как клики, ввод текста и навигацию, что помогает в тестировании функциональности и поведения веб-сайтов. Благодаря поддержке различных браузеров (Chrome, Firefox, Edge и других) и возможности интеграции с фреймворками, Selenium является одним из самых популярных инструментов для тестирования.",
      progress: "65%",
    },
    JS: {
      image: "\\icons\\js.png",
      name: "JavaScript",
      description: "Люблю JavaScript за его гибкость и возможность создавать интерактивные элементы, которые делают сайт по-настоящему \"живым\".\n" +
        "              Этот язык дает огромный простор для креативности: от простых анимаций и эффектов до сложных функциональных решений, таких как управление контентом или\n" +
        "              асинхронное взаимодействие с сервером. В JS классно то, что с его помощью можно не только улучшить визуал сайта,\n" +
        "              но и настроить логику, сделав проект интерактивным и отзывчивым на действия пользователя.",
      progress: "50%",
    },
    ts: {
      image: "\\icons\\ts1.png",
      name: "TypeScript",
      description: "TypeScript ценен за свою структуру и строгую типизацию, которые делают код более надежным и читаемым. В отличие от JavaScript, он позволяет обнаруживать ошибки на этапе компиляции благодаря статической проверке типов, что особенно полезно в крупных проектах. TypeScript помогает поддерживать чистоту кода и предотвращает множество потенциальных багов, повышая общую эффективность разработки.",
      progress: "50%",
    },
    React: {
      image: "\\icons\\r.png",
      name: "React",
      description: "мощный инструмент для создания мобильных приложений, который позволяет использовать JavaScript и React для разработки кросс-платформенных приложений с нативным интерфейсом. Он объединяет удобство веб-разработки с возможностями нативных компонентов, что позволяет создавать приложения для iOS и Android одновременно, снижая затраты и время. Благодаря обширной экосистеме и переиспользованию компонентов React, разработчики могут быстро наращивать функционал, одновременно обеспечивая высокую производительность и нативный опыт для пользователей.",
      progress: "50%",
    },
    Postman: {
      image: "\\icons\\post.png",
      name: "Postman",
      description: " Один из инструментов, которым я уверенно владею и использую для тестирования API. В моей практике есть примеры коллекций с уже прописанными тестами, что позволяет быстро и точно проверять работу запросов и их ответы. Благодаря Postman я могу автоматизировать проверку статусов, данных и заголовков, а также создавать цепочки запросов для сложных сценариев. Этот инструмент значительно ускоряет тестирование и позволяет мне обеспечивать высокое качество продукта, делая процесс проверки API эффективным и гибким",
      progress: "100%",
    },
    DevTools: {
      image: "\\icons\\dev.png",
      name: "DevTools",
      description: "Благодаря опыту тестирования и пониманию основ HTML, CSS и JavaScript. Эти инструменты позволяют мне быстро находить и анализировать ошибки, проверять сетевые запросы и оценивать производительность веб-приложений. Умение работать с DevTools помогает мне глубже погружаться в детали front-end и API-тестирования, что улучшает точность и качество тестирования продукта.",
      progress: "100%",
    },
   Jira: {
      image: "\\icons\\j.png",
      name: "Jira",
      description: "Инструмент для управления проектами и отслеживания задач, широко используемый в сфере разработки и тестирования ПО. \n" +
        "              Он позволяет организовывать и управлять задачами, багами и пользовательскими историями, а также следить за прогрессом проекта.\n" +
        "              В Jira можно настроить рабочие процессы (workflows) для различных типов задач, \n" +
        "              что делает её гибкой и удобной для использования в разных командах и методологиях, включая Agile и Scrum.",
      progress: "80%",
    },
    ChatGPT: {
      image: "\\icons\\gpt.png",
      name: "ChatGPT",
      description: "Инструмент для управления проектами и отслеживания задач, широко используемый в сфере разработки и тестирования ПО. \n" +
        "              Он позволяет организовывать и управлять задачами, багами и пользовательскими историями, а также следить за прогрессом проекта.\n" +
        "              В Jira можно настроить рабочие процессы (workflows) для различных типов задач, \n" +
        "              что делает её гибкой и удобной для использования в разных командах и методологиях, включая Agile и Scrum.",
      progress: "80%",
    },
    Google: {
      image: "\\icons\\gpt.png",
      name: "Google",
      description: "Выступает в качестве незаменимого источника для расширения моего профессионального кругозора в тестировании и программировании, предоставляя доступ к многослойному массиву знаний, который включает документацию, форумы разработчиков и ресурсы по анализу передовых методологий и алгоритмов. Используя сложные поисковые операторы и специализированные ресурсы, я могу оперативно находить информацию по стандартам API, структурам данных и паттернам тестирования, что помогает мне развивать гибкость и точность в решении задач. Кроме того, Google стимулирует интегративное обучение, предлагая доступ к онлайн-инструментам и лабораториям, что позволяет мне углубляться в теоретические аспекты и в практическое применение новейших технологий в реальном времени.",
      progress: "100%",
    },
    SQL: {
      image: "\\icons\\sql.png",
      name: "SQL",
      description: "Использую SQL в тестировании для проверки корректности данных и целостности базы. С его помощью я проверяю, что данные правильно сохраняются, обновляются и удаляются после выполнения действий в приложении. SQL-запросы позволяют мне быстро находить и анализировать возможные несоответствия, что особенно важно при тестировании сложных бизнес-логик и процессов, завязанных на взаимодействии с базой данных. Такой подход помогает мне обеспечивать высокое качество данных и стабильность системы.",
      progress: "70%",
    },
    GIT: {
      image: "\\icons\\git.png",
      name: "GIT",
      description: "Использую Git для управления версиями кода в тестировании и программировании. В репозитории у меня хранятся примеры моих работ, включая тестовые скрипты и автотесты, что позволяет отслеживать изменения, откатываться к предыдущим версиям и эффективно управлять тестовой документацией. Используя Git, я могу работать над проектами, не беспокоясь о потерях данных или ошибках, а также делиться своими наработками и поддерживать их актуальность",
      progress: "70%",
    } ,
    VMware: {
      image: "\\icons\\vm.png",
      name: "VMware",
      description: "Использую VMware в тестировании для создания и управления виртуальными машинами, что позволяет мне воспроизводить различные операционные системы и конфигурации окружения. Это помогает тестировать приложения на разных платформах и в различных версиях операционных систем, не затрагивая основное рабочее устройство. С помощью VMware я могу быстро переключаться между виртуальными машинами, что упрощает тестирование кросс-платформенной совместимости и позволяет выявлять баги, связанные с различиями в окружении, обеспечивая стабильность и качество продукта.",
      progress: "100%",
    },
    Dbeaver: {
      image: "\\icons\\db.png",
      name: "Dbeaver",
      description: "инструмент для работы с базами данных, который я активно использую в тестировании для выполнения SQL-запросов, анализа и управления данными. С его помощью я подключаюсь к различным типам баз данных (MySQL, PostgreSQL, Oracle и другим), что позволяет легко проверять, как данные сохраняются и обновляются после выполнения действий в приложении. DBeaver помогает мне быстро анализировать структуру таблиц, отслеживать изменения данных, выполнять запросы для проверки целостности данных и создавать сложные SQL-запросы, необходимые для глубокого анализа бизнес-логики.",
      progress: "80%",
    }
  };
  return skills[skill];
}
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// Функция для скрытия меню
function hideMenu() {
  console.log('Скрываем меню'); // Лог для отслеживания
  menu.classList.remove('open');
}

// Таймер
const hamburgerCheckbox = document.getElementById("hamburger");

// Функция, которая снимет галочку после 3 секунд
function autoCloseMenu() {
  setTimeout(() => {
    hamburgerCheckbox.checked = false;
  }, 3000); // 3000 миллисекунд = 3 секунды
}

// Слушаем изменения на checkbox
hamburgerCheckbox.addEventListener("change", () => {
  if (hamburgerCheckbox.checked) {
    autoCloseMenu(); // Запускаем таймер только если меню открывается
  }
});
