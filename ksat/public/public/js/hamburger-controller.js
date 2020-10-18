const menu = document.querySelector('#menu');
const hamburger = document.querySelector('#hamburger');
const toggle = document.querySelector('#toggle');

hamburger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
        toggle.classList.add('rotate-90');
    } else {
        menu.classList.add('hidden');
        toggle.classList.remove('rotate-90')
    }
})





