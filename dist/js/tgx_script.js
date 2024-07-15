// script.js
document.getElementById('interactiveButton').addEventListener('mousedown', function(event) {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left; // Координата X внутри кнопки

    if (x < rect.width / 2) {
        // Нажата левая половина кнопки
        button.classList.add('left');
        button.classList.remove('right');
    } else {
        // Нажата правая половина кнопки
        button.classList.add('right');
        button.classList.remove('left');
    }
});

document.getElementById('interactiveButton').addEventListener('mouseup', function(event) {
    // Вернуть кнопку в исходное состояние при отпускании
    const button = event.currentTarget;
    button.classList.remove('left', 'right');
});
