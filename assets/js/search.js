// ===============================
// Search System
// ===============================

console.log("Search JS Loaded");

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    console.log("Search Input Found");

    searchInput.addEventListener("input", function () {

        console.log("Typing:", this.value);

        const value = this.value.toLowerCase().trim();

        const cards = document.querySelectorAll(".batch-card");

        cards.forEach(function(card) {

            const text = card.textContent.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

} else {

    console.log("Search Input NOT Found");

}