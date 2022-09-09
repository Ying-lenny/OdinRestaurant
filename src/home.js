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

//Menu
//Generates a menu with food items on it
function menu() {
    const menu = document.createElement('div');
    const menuItems = document.createElement('div');
    menu.classList.add("menu");
    menuItems.classList.add("menu-items")

    const menuHeader = document.createElement("h1");
    menuHeader.innerText="Menu";

    menu.appendChild(menuHeader);
    menu.appendChild(menuItems);
    menuItems.append(createRecipe("Potato Soup", "It soup"));
    menuItems.append(createRecipe("Chicken Taquito", "It chicken"));
    menuItems.append(createRecipe("Italian Sloppy", "It Italian"));
    menuItems.append(createRecipe("Pizza", "It good"));

    return menu;
}

//Generates a paragraph with text fed into the function
function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

//Generates a recipe based on a name and description
function createRecipe(name, description) {
    const menuItem = document.createElement("div")
    menuItem.classList.add("menu-item")

    //Name for recipe
    const recipeName = document.createElement("h2")
    recipeName.textContent = name

    //Image for recipe
    const recipeImage = document.createElement("img");
    recipeImage.src = `images/${name}.png`
    recipeImage.alt = `${name}`

    //Description for recipe
    const recipeDescription = document.createElement("p");
    recipeDescription.textContent = description

    menuItem.appendChild(recipeName);
    menuItem.appendChild(recipeImage);
    menuItem.appendChild(recipeDescription)

    return menuItem
}

//Contact
//Generates a contact page with information about who to contact
function contact() {
    const contact = document.createElement('div');
    const contactItems = document.createElement('div');
    contact.classList.add("contact");
    contactItems.classList.add('contact-items')

    const contactHeader = document.createElement('h1')
    contactHeader.innerText="Contact Us!";

    contact.appendChild(contactHeader);
    contact.appendChild(contactItems);
    contactItems.appendChild(createContact("Carl"));
    contactItems.appendChild(createContact("Tracy"));

    return contact
}

//Generates a contact about 
function createContact(name) {
    const contactItem = document.createElement('div');
    contactItem.classList.add('contact-item')

    //Name for contact
    const contactName = document.createElement('h2');
    contactName.textContent = name

    //Image for contact
    const contactImage = document.createElement('img');
    contactImage.src = `images/${name}.png`
    contactImage.alt = `${name}`

    contactItem.appendChild(contactName);
    contactItem.appendChild(contactImage);

    return contactItem;
}


//Clears any existing content and loads the home class
function loadHome() {
    const main = document.getElementById("content");
    main.textContent = "";
    main.appendChild(home());
    main.appendChild(menu());
    main.appendChild(contact());
}

export default loadHome;