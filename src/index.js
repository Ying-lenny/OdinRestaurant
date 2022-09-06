import _ from 'lodash';
import printMe from './print.js';

 function component() {
    const restaurantContainer = document.createElement('div');
    const menu = document.createElement('div')
    const btn = document.createElement('button');

    //Container for all divs
    restaurantContainer.innerHTML = _.join(['Hello', 'webpack'], ' ');
    restaurantContainer.classList.add('restaurant-container')

    menu.innerHTML = ("Hi There");
    menu.classList.add('menu-container')

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    restaurantContainer.appendChild(btn);
    restaurantContainer.append(menu)
    
    return restaurantContainer;
 }

 document.body.appendChild(component());