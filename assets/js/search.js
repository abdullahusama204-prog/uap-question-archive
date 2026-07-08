// ===============================
// Search System
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Search JS Loaded");

    const searchInput = document.getElementById("searchInput");

    if (!searchInput) {
        console.log("Search Input NOT Found");
        return;
    }

    console.log("Search Input Found");

    searchInput.addEventListener("input", function () {

        const value = this.value.toLowerCase().trim();

        const cards = document.querySelectorAll(".batch-card");

        cards.forEach(card => {

            const text = card.textContent.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

});