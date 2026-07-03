const imagesPerPage = 16;

let currentPage = 1;

const gallery = document.getElementById("gallery");

const images = gallery.getElementsByTagName("img");

function showPage(){

    let start = (currentPage-1)*imagesPerPage;

    let end = start + imagesPerPage;

    for(let i=0;i<images.length;i++){

        if(i>=start && i<end){

            images[i].style.display="block";

        }else{

            images[i].style.display="none";

        }

    }

}

function nextPage(){

    let totalPages = Math.ceil(images.length/imagesPerPage);

    if(currentPage < totalPages){

        currentPage++;

        showPage();

    }

}

function prevPage(){

    if(currentPage>1){

        currentPage--;

        showPage();

    }

}

showPage();