import loadContact from "./contact";
import loadHome from "./home";
import loadMenu from "./menu";

function navbar() {

    //Navbar
    //Generates a navbar at the top of the page
    const navbar = document.createElement('div')
    navbar.classList.add('navbar')

    navbar.append(createLink('Link1'));
    navbar.append(createLink('Link2'));
    navbar.append(createLink('Link3'));

    return navbar;
}

function createLink(link) {
    const navbarLink = document.createElement('button');
    navbarLink.classList.add('navlinks');
    navbarLink.setAttribute(`onclick`, `console.log("${link}");`)
    navbarLink.innerText = (link)

    return navbarLink
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

    content.appendChild(navbar());
    content.appendChild(createMain())
    
    loadHome();
    loadMenu();
    loadContact();
}

export default intitialize;