let sidemenu = document.getElementById('sidemenu');
let menubtn = document.getElementById('menubtn');

menubtn.addEventListener('click', function() {
    sidemenu.classList.toggle('active');
});