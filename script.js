const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const buttonsContainer = document.querySelector('.buttons');
const image = document.getElementById('image');
const title = document.getElementById('title');
const backgroundImage = document.querySelector('.background-image'); // Получаем фоновую картинку

// Функция для телепортации кнопки "Нет!"
noButton.addEventListener('mouseover', () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const randomX = Math.floor(Math.random() * (screenWidth - buttonWidth));
    const randomY = Math.floor(Math.random() * (screenHeight - buttonHeight));

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

// Функция для изменения текста кнопки "Нет!" при нажатии
noButton.addEventListener('click', () => {
    noButton.textContent = "пачему(";
    noButton.style.backgroundColor = "#4CAF50";
    noButton.style.color = "#fff";
});

// Функция для скрытия кнопок, фоновой картинки, показа GIF и изменения заголовка при нажатии на "Да"
yesButton.addEventListener('click', () => {
    buttonsContainer.style.display = 'none'; // Скрываем кнопки
    image.style.display = 'block'; // Показываем GIF

    // Меняем текст и стили заголовка
    title.textContent = "Ура! 💕";
    title.style.fontSize = "48px";
    title.style.transition = "all 0.5s ease";
    title.classList.add('rainbow-text'); // Добавляем класс для радужного эффекта
});