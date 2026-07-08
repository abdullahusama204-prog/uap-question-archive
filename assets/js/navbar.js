// ===============================
// Professional Navbar
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    // Navbar না থাকলে কোনো Error হবে না
    if (!menuToggle || !navLinks) return;

    // Mobile Menu Toggle
    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

    // Mobile-এ Link-এ Click করলে Menu Close হবে
    const navItems = document.querySelectorAll(".nav-links a");

    navItems.forEach(item => {

        item.addEventListener("click", () => {

            if (window.innerWidth <= 768) {

                navLinks.classList.remove("active");

            }

        });

    });

    // Desktop-এ Resize করলে Menu Reset হবে
    window.addEventListener("resize", () => {

        if (window.innerWidth > 768) {

            navLinks.classList.remove("active");

        }

    });

});