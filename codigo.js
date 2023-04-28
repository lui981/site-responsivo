const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (username.value === 'luis' && password.value === '981276778') {
        window.location.href = 'index.html';
    }
});
