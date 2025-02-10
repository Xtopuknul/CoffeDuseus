document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('ul li a');
    const currentUrl = window.location.pathname.split('/').pop(); // Получаем имя файла страницы

    links.forEach(link => {
        if (link.getAttribute('href') === currentUrl) {
            link.classList.add('active');
        }
    });
});

