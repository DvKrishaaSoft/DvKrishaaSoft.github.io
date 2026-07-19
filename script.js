
window.addEventListener("scroll", function(){

    const header = document.querySelector(".header");

    if(window.scrollY > 100){

        header.style.background = "#020617";

    }else{

        header.style.background = "#111827";

    }

});
