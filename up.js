// scroll effect
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

//up
const backToTopButton = document.querySelector(".back-to-top");
const section1 = document.querySelector("section");

window.addEventListener("scroll", () => {
    backToTopButton.style.display = window.scrollY > section1.offsetHeight ? "flex" : "none";
});