function home() {

    //Home
    //Creates a div with the home class
    const home = document.createElement('div');
    home.classList.add("home");

    //Created the header for the home
    const homeHeader = document.createElement("h1")
    homeHeader.innerText="Welcome to restaurant"

    //Creates and sources image for the home page
    const chefImage = document.createElement("img");
    chefImage.src = "images/chef.png";
    chefImage.alt = "Chef"

    //Appends everthing needed to the home paragraph
    home.appendChild(homeHeader);
    home.appendChild(createParagraph("Best Pizza in your country"));
    home.appendChild(chefImage);
    return home;
}

//Generates a paragraph with text fed into the function
function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById('main')
    // main.textContent="";
    main.appendChild(home())
}

export default loadHome;