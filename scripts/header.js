function toggleMenu() {
  var menuLinks = document.getElementById('menu-links');
  if (menuLinks.style.display === 'flex') {
    menuLinks.style.display = 'none';
  } else {
    menuLinks.style.display = 'flex';
  }
}
