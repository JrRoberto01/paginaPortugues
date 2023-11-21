//Toogle Nav Menu

function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);

  import { Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Ripple });