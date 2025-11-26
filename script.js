document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".nav-lista-tele");
    const dropdownLinks = document.querySelectorAll(".nav-lista-tele .has-dropdown > a");

    let lastScroll = 0;

    // Hamburger toggle
    hamburger.addEventListener("click", function() {
        mobileMenu.classList.toggle("show");
        this.setAttribute("aria-expanded", mobileMenu.classList.contains("show"));
    });

    // Sub-dropdown toggle
    dropdownLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            this.parentElement.classList.toggle("active");
            // Do NOT touch the main menu's .show class here!
        });
    });

    // Hide menu on scroll down only
    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll && mobileMenu.classList.contains("show")) {
            mobileMenu.classList.remove("show");
            hamburger.setAttribute("aria-expanded", false);
        }

        lastScroll = currentScroll;
    });
});