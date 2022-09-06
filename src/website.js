function component() {
    const home = document.createElement('div');
    home.classList.add("home");

    home.appendChild(createParagraph("Best Pizza in your country"));
    return home;
 }

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("content");
    main.textContent = "";
    main.appendChild(component());
}

export default loadHome;