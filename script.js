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

document.querySelectorAll(".pergunta").forEach(pergunta => {
    pergunta.addEventListener("click", () => { //adicionar a opção de clicar em cada pergunta

        const resposta = pergunta.nextElementSibling;   //a constante resposta é = à div que está abaixo da pergunta
        const arrow = pergunta.querySelector(".arrow"); //a constante arrow é = à div arrow no html

        resposta.classList.toggle("open"); //adiciona o open ou remove o open da class no css 
        arrow.classList.toggle("rotate");

        // Fechar as outras
        document.querySelectorAll(".resposta").forEach(a => {
            if (a !== resposta) a.classList.remove("open");
        });
        /* seleciona todas as .resposta do html document.querySelectorAll(".resposta")
        vê cada uma forEach(a => { - neste caso "a" é só o nome que dás à variavel da resposta
        e (a for diferente da resposta que vem imediatamente de uma pergunta que não selecionou) então 
        a.classList.remove("open"); fecha a resposta */
        
        document.querySelectorAll(".arrow").forEach(seta => {
            if (seta !== arrow) seta.classList.remove("rotate");
        });

    });
});