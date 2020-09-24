const navbarElement = document.getElementById('navbar')
const navbarButtons = navbarElement.querySelectorAll('.option-navbar')

let usedWidthButtons = 0;
navbarButtons.forEach(element => {
  usedWidthButtons += Number(window.getComputedStyle(element).width.replace('px', ''))+5+5
})

const navbarWidth = getComputedStyle(navbarElement).width

if(navbarWidth <= usedWidthButtons) {
  
}

