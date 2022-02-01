

// works section
function NewTab() {
  window.open(
    "https://www.geeksforgeeks.org", "_blank");
}

let projects = [
    {
      imgURL: "images/projects/Dark theme.png",
      imgALT: "My Project 1",
      title: "Dark Theme",
      techStack: "HTML/CSS",
      description: "lorem ipsum hello world",
      githubURL: "https://github.com/F1uffyDe5troyer/Project-do-over",
      liveProjectURL: "https://friendly-jennings-1a27d9.netlify.app/",
      
    },
    {
      imgURL: "images/projects/Css animation.png",
      imgALT: "My Project 2",
      title: "CSS Animation",
      techStack: "HTML/CSS",
      description: "lorem ipsum Python",
      githubURL: "#",
      liveProjectURL: "https://eager-beaver-21dff1.netlify.app/"
    },
    {
      imgURL: "images/projects/First Site.png",
      imgALT: "My Project 3",
      title: "First Site",
      techStack: "HTML/CSS",
      description: "lorem ipsum JS",
      githubURL: "https://github.com/F1uffyDe5troyer/Nav-bar-website",
      liveProjectURL: "https://sleepy-pare-db86c3.netlify.app/"
    },
    {
      imgURL: "images/projects/E-commerce.png",
      imgALT: "My Project 3",
      title: "Flower E-commerce",
      techStack: "HTML/CSS",
      description: "lorem ipsum JS",
      githubURL: "https://github.com/F1uffyDe5troyer/Single-page-site",
      liveProjectURL: "https://quizzical-lumiere-12f95f.netlify.app/"
    },
    {
      imgURL: "images/projects/Calculator.png",
      imgALT: "My Project 3",
      title: "Calculator",
      techStack: "HTML/CSS",
      description: "lorem ipsum JS",
      githubURL: "https://github.com/F1uffyDe5troyer/Calculator",
      liveProjectURL: "https://sleepy-payne-35b730.netlify.app/"
    },
  ];
  
  function createCard(card) {
    let createdCard = `<div class="project-card" techStack=${card.techStack} >
        <img src="${card.imgURL}" alt="${card.imgALT}">
        <h4>${card.title}</h4>
        <h6>${card.techStack}</h6>
        <p>${card.description}</p>
        <a href="${card.githubURL}">Github</a>
        <a href="${card.liveProjectURL}">Live</a>
      </div>
    `;
    return createdCard;
  }
  
  function renderCards() {
    let projectContainer = document.querySelector(".project-container");
    for (project of projects) {
      let card = createCard(project);
      projectContainer.innerHTML += card;
    }
  }
  
  renderCards();
  
  function filterCards(category) {
    let cards = document.getElementsByClassName("project-card");
  
    if (category === "All") {
      for (card of cards) {
        card.style.display = "block";
      }
      return;
    }
  
    for (card of cards) {
      console.log(card);
      card.style.display = "none";
    }
  
    let selectedCards = document.querySelectorAll(`[techStack='${category}']`);
  
    for (card of selectedCards) {
      card.style.display = "block";
    }
  }
  