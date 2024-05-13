function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

var burgerMenu = document.querySelector('.buger-menu');

var menuList = document.querySelector('.menu-list');

burgerMenu.addEventListener('click', function() {
    if (window.innerWidth >= 220 && window.innerWidth <= 1024) {
      
        menuList.classList.toggle('affiche');
    }
});
