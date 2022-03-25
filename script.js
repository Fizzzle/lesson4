'use strict';

const box = document.querySelector('.box'),
    btn = document.querySelector('button');

// const width = box.clientWidth;
// const heigth = box.clientHeight;

// const width = box.offsetWidth;
// const heigth = box.offsetHeight;

const width = box.scrollWidth;
const heigth = box.scrollHeight;

console.log(width, heigth);

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
});

console.log(document.documentElement.scrollTop)