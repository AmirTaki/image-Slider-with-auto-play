const list = document.querySelector(".slider .list");
const items = document.querySelectorAll(".slider .list .item");
const dots = document.querySelectorAll('.slider .dots li');
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let active = 0
let lengthItems = items.length ;

console.log(lengthItems)

const reloadSlider = () => {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';
}

next.addEventListener("click", (e) => {
    
    active + 1 > lengthItems - 1 ? active = 0 : active++;
    reloadSlider();
})