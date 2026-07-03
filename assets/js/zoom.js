let startDistance = 0;

viewer.addEventListener("wheel", function(e){

    e.preventDefault();

    if(e.deltaY < 0){

        scale += 0.1;

    }else{

        scale -= 0.1;

    }

    if(scale < 1){

        scale = 1;

    }

    fullImage.style.transform = "scale("+scale+")";

});

viewer.addEventListener("touchstart", function(e){

    if(e.touches.length===2){

        let dx=e.touches[0].clientX-e.touches[1].clientX;

        let dy=e.touches[0].clientY-e.touches[1].clientY;

        startDistance=Math.sqrt(dx*dx+dy*dy);

    }

});

viewer.addEventListener("touchmove", function(e){

    if(e.touches.length===2){

        e.preventDefault();

        let dx=e.touches[0].clientX-e.touches[1].clientX;

        let dy=e.touches[0].clientY-e.touches[1].clientY;

        let currentDistance=Math.sqrt(dx*dx+dy*dy);

        if(currentDistance>startDistance){

            scale += 0.03;

        }else{

            scale -= 0.03;

        }

        if(scale<1){

            scale=1;

        }

        fullImage.style.transform="scale("+scale+")";

        startDistance=currentDistance;

    }

});