const gallery = document.querySelector('.gallery');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let isDragging = false;
let startX;
let scrolLeft;

// Функция для прокрутки галереи
function scrollGallery(direction) {
    const itemWidth = document.querySelector('.gallery-item').offsetWidth + 10;
    gallery.scrollBy({ left: direction * itemWidth, behavior: "smooth" });
}

prevBtn.addEventListener('click', () => scrollGallery(-1));
nextBtn.addEventListener('click', () => scrollGallery(1));

// Обработка нажатия мыши
gallery.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - gallery.offsetLeft;
    scrolLeft = gallery.scrollLeft;
    gallery.style.cursor = 'grabbing';
});

// Обработка перемещения мыши
gallery.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - gallery.offsetLeft;
    const walk = (x - startX) * 2; // Скорость перемещения
    gallery.scrollLeft = scrolLeft - walk;
});

// Завершаем перетаскивание мышью
gallery.addEventListener('mouseup', () => {
    isDragging = false;
    gallery.style.cursor = "grab";
});

// Выход за пределы галереи, завершение перетаскивания
gallery.addEventListener('mouseleave', () => {
    isDragging = false;
    gallery.style.cursor = "grab";
});

// Обработка на мобильных устройствах (сенсорный экран)
gallery.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - gallery.offsetLeft;
    scrolLeft = gallery.scrollLeft;
    gallery.style.cursor = 'grabbing';
});

gallery.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - gallery.offsetLeft;
    const walk = (x - startX) * 2;
    gallery.scrollLeft = scrolLeft - walk;
});

gallery.addEventListener('touchend', () => {
    isDragging = false;
    gallery.style.cursor = "grab";
});

gallery.addEventListener('touchcancel', () => {
    isDragging = false;
    gallery.style.cursor = "grab";
});

// Добавление функционала для мобильных устройств

