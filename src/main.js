const list = document.querySelector(".slider .list");
const items = document.querySelectorAll(".slider .list .item");
const dots = document.querySelectorAll('.slider .dots li');
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let active = 0
let lengthItems = items.length ;


const reloadSlider = () => {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector(".slider .dots li.active");
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active')
}

next.addEventListener("click", (e) => {
    
    active + 1 > lengthItems - 1 ? active = 0 : active++;
    reloadSlider();
})

prev.addEventListener("click", (e) => {
    active - 1 < 0 ? active = lengthItems - 1  : active --;
    reloadSlider();
})


dots.forEach((li, key) => {
    
})
