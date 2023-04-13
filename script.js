const navEl = document.getElementById("nav-mobile-menu");
const nav = document.getElementsByTagName("nav");

navEl.addEventListener("click", () => {
    nav[1].classList.toggle("active");
});

const planBtn = document.getElementById("custom-checkbox");
const plans = document.querySelectorAll(".pricing-body-plans > div");

planBtn.addEventListener("click", function() {
    this.classList.toggle("anually");
    plans[0].classList.toggle("active");
    plans[1].classList.toggle("active");
});