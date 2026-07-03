let scale = 1;

const viewer = document.getElementById("viewer");
const fullImage = document.getElementById("fullImage");
const downloadLink = document.getElementById("downloadLink");

function openImage(img){

    viewer.style.display = "flex";

    fullImage.src = img.src;

    downloadLink.href = img.src;

    scale = 1;

    fullImage.style.transform = "scale(1)";
}

viewer.addEventListener("click", function(e){

    if(e.target === viewer){

        viewer.style.display = "none";

    }

});