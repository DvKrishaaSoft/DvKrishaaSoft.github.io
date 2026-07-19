const projects = [

{
    category:"WooCommerce",
    title:"La Reina",
    image:"assets/images/lareinalrn.com.png",
    description:"Premium WooCommerce Store",
    url:"https://lareinalrn.com/"
},

{
    category:"Healthcare",
    title:"Mind Body FHC",
    image:"assets/images/mindbodyfhc.com.png",
    description:"Healthcare Website",
    url:"https://mindbodyfhc.com/"
},

{
    category:"Corporate",
    title:"Siminovitch Prize",
    image:"assets/images/siminovitchprize.com.png",
    description:"Corporate Website",
    url:"https://siminovitchprize.com/"
}

];

const portfolio=document.getElementById("portfolio-grid");

projects.forEach(project=>{

portfolio.innerHTML+=`

<div class="portfolio-card">

<img src="${project.image}" alt="${project.title}">

<div class="portfolio-content">

<span>${project.category}</span>

<h3>${project.title}</h3>

<p>${project.description}</p>

<a href="${project.url}" target="_blank">

Visit Website →

</a>

</div>

</div>

`;

});


document.querySelectorAll('.nav-links a').forEach(anchor => {

anchor.addEventListener('click', function(e){

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({

behavior:'smooth'

});

});

});


document.addEventListener("DOMContentLoaded", function () {

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.pageYOffset > 300) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }

        });

        backToTop.onclick = function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        };

    }

});
