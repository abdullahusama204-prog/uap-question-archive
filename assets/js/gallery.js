// ===============================
// Professional Gallery Viewer
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const viewer = document.getElementById("viewer");
    const fullImage = document.getElementById("fullImage");

    // Viewer না থাকলে Error হবে না
    if (!viewer || !fullImage) return;

    const galleryImages = document.querySelectorAll(".gallery-card img");

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            fullImage.src = image.src;
            fullImage.alt = image.alt;

            viewer.style.display = "flex";

        });

    });

    // ছবির বাইরে Click করলে Viewer Close হবে
    viewer.addEventListener("click", (event) => {

        if (event.target === viewer) {

            viewer.style.display = "none";

        }

    });

    // ESC চাপলে Viewer Close হবে
    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            viewer.style.display = "none";

        }

    });

});