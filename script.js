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



<script>
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // link पर क्लिक करने से menu अपने आप बंद हो जाए
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
</script>


