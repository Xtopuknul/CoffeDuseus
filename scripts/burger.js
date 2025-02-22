document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger-menu");
    const menu = document.getElementById("nav-menu");

    burger.addEventListener("click", function () {
        menu.classList.toggle("active"); // Показываем меню
        burger.classList.toggle("active"); // Поворачиваем бургер
        burger.textContent = menu.classList.contains("active") ? "✖" : "☰"; // Меняем иконку
    });
});
