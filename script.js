const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 50) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});


// JavaScript for Project Section Modal
document.addEventListener("DOMContentLoaded", () => {
  const projectDetails = {
    1: {
      title: "Car Game",
      description: "A fast-paced car racing game developed in Python. Features smooth gameplay, multiple levels, and AI opponents.",
      technologies: "Python, Pygame",
    },
    2: {
      title: "Chess Game",
      description: "A fully functional chess game with AI capabilities. Play against the computer or a friend in two-player mode.",
      technologies: "Python, Tkinter, AI Algorithms",
    },
    3: {
      title: "Portfolio Website",
      description: "A sleek, responsive portfolio website designed to showcase my projects and skills. Built using modern web technologies.",
      technologies: "HTML, CSS, JavaScript",
    },
  };

  const modal = document.getElementById("project-modal");
  const modalDetails = document.getElementById("modal-details");
  const closeBtn = document.querySelector(".close");
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const projectId = card.getAttribute("data-project");
      const project = projectDetails[projectId];
      modalDetails.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <p><strong>Technologies:</strong> ${project.technologies}</p>
      `;
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

const texts = ["Web Developer", "Programmer", "Designer"];
let i = 0;
const rotatingText = document.querySelector(".rotating-text");
setInterval(() => {
  rotatingText.textContent = texts[i];
  i = (i + 1) % texts.length;
}, 2000);