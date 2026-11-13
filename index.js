const mobilemenu = document.getElementById('menu-toggle');

const navlinks = document.querySelector('.nav-links');

mobilemenu.addEventListener('click',()=>{
    navlinks.classList.toggle('active');
});
