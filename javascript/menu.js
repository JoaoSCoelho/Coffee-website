function openMenu() {
  const menuButtonImg = document.querySelector('#menu-button img')
  const menu = document.getElementById('menu')
  const main = document.querySelector('main')

  if (menu.style.display === 'none') {

    menu.style.display = 'block';
    main.style.display = 'none';
    menuButtonImg.src = 'images/iconfinder_interface-78_4634454.svg'

  } else {

    menu.style.display = 'none';
    main.style.display = 'block';
    menuButtonImg.src = 'images/iconfinder_-_Hamburger-Menu-More-Navigation-_3844473.svg'

  }
}

openMenu();