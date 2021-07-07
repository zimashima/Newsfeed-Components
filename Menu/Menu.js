/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function menuComp(menuarray) {
  
  //definition
  const theMenu = document.createElement('div')
  const menuPanel = document.createElement('ul')

  //structure
  
  theMenu.appendChild(menuPanel)


  //class
  theMenu.classList.add('menu')

  //content

  menuarray.forEach(item => {
    let theItem = document.createElement('li');
    theItem.textContent = item;
    theItem.classList.add('menu-ul-li');
    menuPanel.appendChild(theItem);
  })

  const menubutton = document.querySelector('.menu-button')

  menubutton.addEventListener('click', (e)=>{
    theMenu.classList.toggle('menu--open')
    theMenu.style.transition = "0.3s";
  })

  return theMenu
}

const thisMenu = menuComp(menuItems)

document.querySelector('.header').appendChild(thisMenu)
