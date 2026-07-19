const projects = [

{
    category:"WooCommerce",
    title:"La Reina",
    image:"assets/images/project1.jpg",
    description:"Premium WooCommerce Store",
    url:"https://example.com"
},

{
    category:"Healthcare",
    title:"Mind Body FHC",
    image:"assets/images/project2.jpg",
    description:"Healthcare Website",
    url:"https://example.com"
},

{
    category:"Corporate",
    title:"Siminovitch Prize",
    image:"assets/images/project3.jpg",
    description:"Corporate Website",
    url:"https://example.com"
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

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        backToTop.style.display = "block";
    }else{
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


