let count = 0;

const statusText = document.getElementById('status');
const greetButton = document.getElementById('greet');
const resetButton = document.getElementById('reset');
const themeButton = document.getElementById('theme-toggle');

greetButton.addEventListener('click', () => {
    count++;
    statusText.textContent = 'Număr click-uri: ' + count;
});

resetButton.addEventListener('click', () => {
    count = 0;
    statusText.textContent = 'Apasă butonul de mai jos pentru a trimite un click.';
});

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
