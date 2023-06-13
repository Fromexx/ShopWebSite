const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header_menu");
const hamColor = document.querySelectorAll(".bar");
const fixatedBody = document.body;

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    fixatedBody.classList.toggle("body-fixated");
    hamColor.forEach(element => {
        hamColor[0].classList.toggle("active");
        hamColor[2].classList.toggle("active");
    });
});

document.querySelectorAll(".header_menu_item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    fixatedBody.classList.remove("body-fixated");
    hamColor.forEach(element => {
        hamColor[0].classList.remove("active");
        hamColor[2].classList.remove("active");
    });
}));
