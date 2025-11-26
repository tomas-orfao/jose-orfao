document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".nav-lista-tele");

    // Toggle mobile menu
    hamburger.addEventListener("click", function() {
        mobileMenu.classList.toggle("show");
        const expanded = this.getAttribute("aria-expanded") === "true";
        this.setAttribute("aria-expanded", !expanded);
    });

    // Toggle sub-dropdown
    const dropdownLinks = document.querySelectorAll(".nav-lista-tele .has-dropdown > a");
    dropdownLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            this.parentElement.classList.toggle("active");
        });
    });
});

