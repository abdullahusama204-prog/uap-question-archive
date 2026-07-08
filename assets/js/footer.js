// ===============================
// Professional Footer Loader
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    fetch("components/footer.html")
        .then(response => {

            if (!response.ok) {
                throw new Error("Footer could not be loaded.");
            }

            return response.text();

        })
        .then(data => {

            document.body.insertAdjacentHTML("beforeend", data);

        })
        .catch(error => {

            console.error("Footer Load Error:", error);

        });

});