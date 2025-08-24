const list = document.querySelector(".slider .list");
const items = document.querySelectorAll(".slider .list .item");
const dots = document.querySelectorAll('.slider .dots li');
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let active = 0



const reloadSlider = () => {
    let checkLeft = items[active].offsetLeft;
}

next.addEventListener("click", (e) => {
    active++;
    reloadSlider();
})