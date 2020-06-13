const body = document.querySelector('body');
const btOpen = document.getElementById('btn-open');
const closeMenu = document.querySelectorAll('[data-close="menu"]');
const tab1 = document.getElementById('tab-1');
const tab2 = document.getElementById('tab-2');
const tab3 = document.getElementById('tab-3');
const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const content3 = document.getElementById('content3');
// const btnFooter = document.querySelector('#footer button');

// btnFooter.addEventListener('click', e => {
//     window.scrollTo(0, 0);
// })


btOpen.addEventListener('click', e => {
    body.classList.add('open-menu');
})

closeMenu.forEach(el => {
    el.addEventListener('click', e => {
        body.classList.remove('open-menu');
    })
})

tab1.addEventListener('click', e => {
    event.preventDefault();
    tab1.classList.add("show");
    tab2.classList.remove("show");
    tab3.classList.remove("show");
})

tab2.addEventListener('click', e => {
    event.preventDefault();
    tab1.classList.remove("show");
    tab2.classList.add("show");
    tab3.classList.remove("show");
})

tab3.addEventListener('click', e => {
    event.preventDefault();
    tab1.classList.remove("show");
    tab2.classList.remove("show");
    tab3.classList.add("show");
})