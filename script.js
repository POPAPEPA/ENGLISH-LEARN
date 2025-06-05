document.addEventListener('DOMContentLoaded', () => {
    // Выделение активного пункта меню
    const currentPage = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.parentElement.classList.add('active');
        }
    });

    // Обработка кликов по наборам слов
    const wordSets = document.querySelectorAll('.word-set');
    if (wordSets.length > 0) {
        wordSets.forEach(set => {
            set.addEventListener('click', () => {
                const title = set.querySelector('h4').textContent;
                alert(`Вы выбрали набор слов: "${title}"`);
                // Здесь можно добавить переход на страницу с деталями набора
            });
        });
    }

    // Анимация при загрузке
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 300);
});
function speakWord(word) {
    // Проверяем поддержку Web Speech API
    if ('speechSynthesis' in window) {
        // Останавливаем текущее произношение
        window.speechSynthesis.cancel();
        
        // Создаем новое высказывание
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        utterance.rate = 0.9; // Скорость произношения
        
        // Находим кнопку и добавляем класс playing
        const buttons = document.querySelectorAll('.speak-button');
        buttons.forEach(btn => {
            if (btn.getAttribute('data-word') === word) {
                btn.classList.add('playing');
            }
        });
        
        // Обработчик окончания речи
        utterance.onend = function() {
            buttons.forEach(btn => {
                if (btn.getAttribute('data-word') === word) {
                    btn.classList.remove('playing');
                }
            });
        };
        
        // Произносим слово
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Ваш браузер не поддерживает функцию озвучивания текста. Попробуйте использовать Chrome, Edge или Safari.');
    }
}

// Назначаем обработчики событий для кнопок
document.addEventListener('DOMContentLoaded', () => {
    const speakButtons = document.querySelectorAll('.speak-button');
    
    speakButtons.forEach(button => {
        button.addEventListener('click', function() {
            const word = this.getAttribute('data-word');
            speakWord(word);
        });
    });
    
    // Выделение активного пункта меню
    const currentPage = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.parentElement.classList.add('active');
        }
    });
});
function speakWord(word) {
    // Проверяем поддержку Web Speech API
    if ('speechSynthesis' in window) {
        // Останавливаем текущее произношение
        window.speechSynthesis.cancel();
        
        // Создаем новое высказывание
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        utterance.rate = 0.9; // Скорость произношения
        
        // Находим кнопку и добавляем класс playing
        const buttons = document.querySelectorAll('.speak-button');
        buttons.forEach(btn => {
            if (btn.getAttribute('data-word') === word) {
                btn.classList.add('playing');
            }
        });
        
        // Обработчик окончания речи
        utterance.onend = function() {
            buttons.forEach(btn => {
                if (btn.getAttribute('data-word') === word) {
                    btn.classList.remove('playing');
                }
            });
        };
        
        // Произносим слово
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Ваш браузер не поддерживает функцию озвучивания текста. Попробуйте использовать Chrome, Edge или Safari.');
    }
}

// Назначаем обработчики событий для кнопок
document.addEventListener('DOMContentLoaded', () => {
    const speakButtons = document.querySelectorAll('.speak-button');
    
    speakButtons.forEach(button => {
        button.addEventListener('click', function() {
            const word = this.getAttribute('data-word');
            speakWord(word);
        });
    });
    
    // Выделение активного пункта меню
    const currentPage = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.parentElement.classList.add('active');
        }
    });
});