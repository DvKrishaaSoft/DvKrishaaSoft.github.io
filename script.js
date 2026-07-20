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
},

{
    category:"WooCommerce",
    title:"Creator.co",
    image:"assets/images/creator.jpg",
    description:"WooCommerce Project",
    url:"#"
},

{
    category:"WooCommerce",
    title:"Zwilling Canada",
    image:"assets/images/zwilling.jpg",
    description:"WooCommerce Website",
    url:"#"
},

{
    category:"WooCommerce",
    title:"Dr. Freds Innovative",
    image:"assets/images/drfred.jpg",
    description:"WooCommerce Store",
    url:"#"
},

{
    category:"Healthcare",
    title:"MTP Foundation",
    image:"assets/images/mtp.jpg",
    description:"Healthcare Website",
    url:"#"
},

{
    category:"Healthcare",
    title:"Kimme Myles",
    image:"assets/images/kimme.jpg",
    description:"Healthcare Website",
    url:"#"
},

{
    category:"Healthcare",
    title:"Rajeunir",
    image:"assets/images/rajeunir.jpg",
    description:"Healthcare Website",
    url:"#"
},

{
    category:"Healthcare",
    title:"Intima HC",
    image:"assets/images/intima.jpg",
    description:"Healthcare Website",
    url:"#"
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

// ddddd
const projectsContainer = document.getElementById("projects");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");

let allProjects = [];

async function loadProjects() {
    try {
        const response = await fetch("projects.json");
        allProjects = await response.json();

        displayProjects(allProjects);
    } catch (error) {
        console.error("Error loading projects:", error);
    }
}

function displayProjects(projects) {

    projectsContainer.innerHTML = "";

    if (projects.length === 0) {
        projectsContainer.innerHTML = "<h3>No Projects Found</h3>";
        return;
    }

    projects.forEach(project => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${project.name}</h3>

            <p><strong>Category:</strong> ${project.category}</p>

            <p><strong>Technology:</strong> ${project.technology}</p>

            <a href="${project.url}" target="_blank">
                Visit Website →
            </a>
        `;

        projectsContainer.appendChild(card);

    });

}

function filterProjects() {

    const searchText = searchInput.value.toLowerCase();

    const selectedCategory = categorySelect.value;

    const filtered = allProjects.filter(project => {

        const matchesSearch =
            project.name.toLowerCase().includes(searchText) ||
            project.technology.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "All" ||
            project.category === selectedCategory;

        return matchesSearch && matchesCategory;

    });

    displayProjects(filtered);

}

searchInput.addEventListener("input", filterProjects);

categorySelect.addEventListener("change", filterProjects);

loadProjects();


