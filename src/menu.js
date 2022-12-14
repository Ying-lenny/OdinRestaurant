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

function loadMenu() {
    const main = document.getElementById('main')
    main.textContent="";
    main.appendChild(menu())
}

export default loadMenu;