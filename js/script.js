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

document.addEventListener('DOMContentLoaded', function() {
  const menuHeight = document.querySelector(".header-top") ? document.querySelector(".header-top").clientHeight : 0;

  // Функция для инициализации переходов по якорным ссылкам
  function initMenuLinks() {
    document.querySelectorAll(".menu-element__link").forEach(element => {
      element.addEventListener("click", function(e) {
        e.preventDefault();

        if (hasClass(this, 'active')) return;

        const linkHref = this.getAttribute("href");
        const hrefElement = document.getElementById(linkHref.replace("#", ""));

        if (hrefElement) {
          const paddingTop = parseInt(getComputedStyle(hrefElement).paddingTop || "0");
          window.scroll({
            behavior: 'smooth',
            left: 0,
            top: hrefElement.offsetTop - paddingTop - menuHeight
          });
          changeActiveMenuElement(this);
        } else {
          console.warn(`Элемент с ID ${linkHref.replace("#", "")} не найден.`);
        }
      });
    });
  }

  // Функция для инициализации кнопок для отображения карточек
  function initSkillButtons() {
    document.querySelectorAll('.skills-list__element').forEach(element => {
      element.addEventListener('click', function() {
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
  }

  // Функция для работы с IntersectionObserver для анимаций
  function initIntersectionObserver() {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    // Наблюдаем за каждым элементом, который должен анимироваться
    document.querySelectorAll(".skills-list__element, .work-element__animation").forEach(element => {
      observer.observe(element);
    });
  }

  // Функция для смены активного элемента в меню
  function changeActiveMenuElement(element) {
    const activeLink = document.querySelector(".menu-element__link.active");
    if (activeLink) activeLink.classList.remove('active');
    element.classList.add('active');
  }

  // Проверка наличия класса у элемента
  function hasClass(element, className) {
    return element && element.classList ? element.classList.contains(className) : false;
  }

  // Инициализация всех функций
  initMenuLinks();
  initSkillButtons();
  initIntersectionObserver();

  // Слайдер
  let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
  }
  if (slides.length > 0) {
    setInterval(showNextSlide, 7000);
  }

  // Обработчик для видео на элементах "work-element"
  document.querySelectorAll('.work-element').forEach((element) => {
    const video = element.querySelector('.background-video');
    if (video) {
      element.addEventListener('mouseenter', () => {
        video.style.display = 'block';
        video.play();
      });
      element.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
        video.style.display = 'none';
      });
    }
  });
});


let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

setInterval(showNextSlide, 7000); // 15 секунд


document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function showNextSlide() {
    // Удаляем 'active' у всех слайдов для начала
    slides.forEach(slide => slide.classList.remove('active'));

    // Добавляем 'active' к следующему слайду
    slides[currentIndex].classList.add('active');

    // Перемещаем индекс к следующему слайду, циклично
    currentIndex = (currentIndex + 1) % slides.length;
  }

  // Проверяем, соответствует ли текущая ширина экрана мобильным устройствам
  if (window.matchMedia("(max-width: 768px)").matches) {
    // Запускаем интервал только для мобильных устройств
    setInterval(showNextSlide, 3000); // 15 секунд
  }
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
  }, 7000); // 3000 миллисекунд = 3 секунды
}

// Слушаем изменения на checkbox
hamburgerCheckbox.addEventListener("change", () => {
  if (hamburgerCheckbox.checked) {
    autoCloseMenu(); // Запускаем таймер только если меню открывается
  }
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
