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

function loadContact() {
    const main = document.getElementById('main')
    // main.textContent="";
    main.appendChild(contact())
}

export default loadContact;