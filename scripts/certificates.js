
function toggleCertificates() {
  var certificates = document.getElementsByClassName('fechado');
  var toggleBtnText = document.getElementById('button-text');
  var allHidden = true;

  for (var i = 0; i < certificates.length; i++) {
    if (certificates[i].style.display !== 'none') {
      allHidden = false;
      break;
    }
  }

  for (var i = 0; i < certificates.length; i++) {
    if (allHidden) {
      certificates[i].style.display = 'block';
    } else {
      certificates[i].style.display = 'none';
    }
  }

  toggleBtnText.textContent = allHidden ? 'Menos' : 'Mais';

  if (!allHidden) {
    window.location.href = '#certificates';
  }
}