const gallery = document.querySelector('.gallery');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let isDragging = false;
let startX;
let scrolLeft;

function scrollGallery(direction) {
    const itemWidth = document.querySelector('.gallery-item').offsetWidth + 10;
    gallery.scrollBy({ left: direction * itemWidth, behavior: "smooth"});
}
prevBtn.addEventListener('click', () => scrollGallery(-1));
nextBtn.addEventListener('click', () => scrollGallery(1));

gallery.addEventListener('mousedown', (e) => {
    isDragging = true; 
    startX = e.pageX - gallery.offsetLeft;
    scrolLeft = gallery.scrollLeft;
    gallery.style.cursor = 'grabbing'
});

gallery.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - gallery.offsetLeft;
    const walk = (x - startX) * 2;
    gallery.scrollLeft = scrolLeft - walk;
});

gallery.addEventListener('mouseup', () => {
    isDragging = false;
    gallery.style.cursor = "grab";
});

gallery.addEventListener('mouseleave', () => {
    isDragging = false;
    gallery.style.cursor = "grab";
});

document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger-menu");
    const menu = document.getElementById("nav-menu");

    burger.addEventListener("click", function () {
        menu.classList.toggle("active"); // Показываем меню
        burger.classList.toggle("active"); // Поворачиваем бургер
        burger.textContent = menu.classList.contains("active") ? "✖" : "☰"; // Меняем иконку
    });
});
