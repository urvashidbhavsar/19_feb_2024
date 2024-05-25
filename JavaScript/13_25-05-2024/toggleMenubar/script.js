function showMenu() {
    let nav = document.querySelector(".nav");
    nav.classList.toggle("show-nav")
}

var head = document.querySelector("header")
window.addEventListener("scroll", () => {
    var current = window.scrollY;
    if (current > 0) {
        head.classList.add("header-change")
    } else {
        head.classList.remove("header-change")
    }
})