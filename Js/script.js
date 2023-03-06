let header = document.querySelector('header');
const menu = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-menu');

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    nav.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    menu.classList.remove("active");
    nav.classList.remove("active");
}))

function openpg(pgname) {
    var i;
    var x = document.getElementsByClassName("poop");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(pgname).style.display = "flex";
}