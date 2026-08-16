// Graphic Studio - Main JavaScript
console.log("Graphic Studio website loaded successfully.");

document.addEventListener("DOMContentLoaded", function () {

    /* ---------- MOBILE MENU TOGGLE ---------- */
    var menuToggle = document.getElementById("menuToggle");
    var navbarMenu = document.getElementById("navbarMenu");

    if (menuToggle && navbarMenu) {
        menuToggle.addEventListener("click", function () {
            navbarMenu.classList.toggle("open");
        });

        // close menu when a link is tapped (mobile)
        navbarMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navbarMenu.classList.remove("open");
            });
        });
    }

    /* ---------- ACTIVE NAV LINK HIGHLIGHT ---------- */
    var currentFile = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-link").forEach(function (link) {
        var linkFile = link.getAttribute("href").split("/").pop();
        if (linkFile === currentFile) {
            link.classList.add("active");
        }
    });

    /* ---------- FLOATING WHATSAPP BUTTON ---------- */
    var floatBtn = document.getElementById("floatingWhatsapp");
    if (floatBtn) {
        var number = document.body.getAttribute("data-whatsapp") || "917745036055";
        var text = document.body.getAttribute("data-whatsapp-text") ||
            "Hello Graphic Studio, I want to know more about your designs.";
        floatBtn.href = "https://wa.me/" + number + "?text=" + encodeURIComponent(text);
    }

    /* ---------- SCROLL REVEAL ANIMATIONS ---------- */
    var revealEls = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window && revealEls.length) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealEls.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        // fallback: no observer support, just show everything
        revealEls.forEach(function (el) {
            el.classList.add("active");
        });
    }

});
