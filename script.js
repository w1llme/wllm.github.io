const button = document.getElementById('teleportButton');

// Функция для телепортации кнопки
button.addEventListener('mouseover', () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const randomX = Math.floor(Math.random() * (screenWidth - buttonWidth));
    const randomY = Math.floor(Math.random() * (screenHeight - buttonHeight));

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});

// Функция для изменения текста кнопки при нажатии
button.addEventListener('click', () => {
    button.textContent = "пачему";
    button.style.backgroundColor = "#4CAF50"; // Меняем цвет кнопки для визуального эффекта
    button.style.color = "#fff"; // Меняем цвет текста
    button.disabled = true; // Делаем кнопку неактивной после нажатия
});