function toggleMenu() {
  var menu = document.querySelector('.menu');
  var windowWidth = window.innerWidth;

  if (windowWidth <= 814) {
    menu.style.flexDirection = 'column';
  } else {
    menu.style.flexDirection = 'row';
  }

  menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}
  
window.addEventListener('resize', () => {
  toggleMenu(); 
  const menu = document.querySelector('.menu');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (window.innerWidth <= 814) {
    menu.style.display = 'none';
    menuToggle.style.display = 'block';
  } else {
    menu.style.display = 'flex';
    menuToggle.style.display = 'none';
  }
});
  
window.addEventListener('load', () => {
      toggleMenu(); 
  const menu = document.querySelector('.menu');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (window.innerWidth <= 814) {
    menu.style.display = 'none';
    menuToggle.style.display = 'block';
  } else {
    menu.style.display = 'flex';
    menuToggle.style.display = 'none';
  }
});


  