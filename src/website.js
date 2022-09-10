import loadContact from "./contact";
import loadHome from "./home";
import loadMenu from "./menu";

//Generates a navbar for the website
function createNavbar() {
    const navbar = document.createElement('div')
    navbar.classList.add('navbar')

    //Creates a button on the navbar for the menu
    const homeButton = document.createElement('button');
    homeButton.classList.add('button-nav');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton)
        loadHome();
    })

    //Creates a button on the navbar for the menu
    const menuButton = document.createElement('button');
    menuButton.classList.add('button-nav');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton)
        loadMenu();
    })

    //Creates a button on the navbar for the menu
    const contactButton = document.createElement('button');
    contactButton.classList.add('button-nav');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton)
        loadContact();
    })

    navbar.appendChild(homeButton);
    navbar.appendChild(menuButton);
    navbar.appendChild(contactButton);

    return navbar;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav");
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
  }

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

//Clears any existing content and loads the home class
function intitialize() {
    const content = document.getElementById("content");

    content.appendChild(createNavbar());
    content.appendChild(createMain())
    
    loadHome();
}

export default intitialize;