const rocket = document.getElementById("rocket");
const cloudOne = document.getElementById("cloud-one");
const cloudTwo = document.getElementById("cloud-two");
const cloudThree = document.getElementById("cloud-three");
const cloudFour = document.getElementById("cloud-four");
const cloudFive = document.getElementById("cloud-five");

function move() {
    const incrementer = window.scrollY;
    rocket.style.bottom = incrementer * 0.1 + '%';
    cloudOne.style.bottom = 40 + incrementer * 0.2 + '%';
    cloudOne.style.marginLeft = 70 + incrementer * 0.2 + '%';
    cloudTwo.style.bottom = 80 + incrementer * 0.2 + '%';
    cloudThree.style.bottom = 60 + incrementer * 0.2 + '%';
    cloudFour.style.bottom = 70 + incrementer * 0.2 + '%';
    cloudFour.style.marginLeft = 60 + incrementer * 0.2 + '%';
    cloudFive.style.bottom = 60 + incrementer * 0.2 + '%';
    cloudFive.style.marginRight = 50 + incrementer * 0.2 + '%';
   
}


window.addEventListener('scroll', move)



// TAB CONTENTS ----------------------------------------------------------

const tabLinks = document.getElementsByClassName('tab-links')
const tabContents = document.getElementsByClassName('tab-contents')


function opentab(tabName) {
   for(tabLink of tabLinks) {
       tabLink.classList.remove("active-link")
   };

   for(tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
}

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab")

}


// HIDDEN ELEMENT ------------------------------------------------------------

const hiddenDiv = document.getElementById("hidden")
let isClicked = true;

function showOrHide () {
    
    if (isClicked == true){

        hiddenDiv.style.display = 'block';
        isClicked = false;
    } else {
        hiddenDiv.style.display = 'none';
        isClicked = true;
    }
    
}

// MENU BAR --------------------------

const menuButton = document.getElementById('menu-btn');
const nav = document.getElementById('hidden-menu')

function navToggle() {
  menuButton.classList.toggle('open');
  nav.classList.toggle('hidden-menu');
  document.body.classList.toggle('no-scroll');

}

menuButton.addEventListener('click', navToggle) 