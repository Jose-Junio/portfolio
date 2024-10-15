document.addEventListener('DOMContentLoaded', function() {
  var cards = document.getElementsByClassName('card');
  for (let i = 0; i < cards.length; i++) {
    cards[i].onclick = function () {
      var imgSrc = this.getElementsByTagName('img')[0].src;
      document.getElementById('modalImg').src = imgSrc;
      document.getElementById('myModal').style.display = "block";
    }
  }
  document.getElementsByClassName('close')[0].onclick = function () {
    document.getElementById('myModal').style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == document.getElementById('myModal')) {
      document.getElementById('myModal').style.display = "none";
    }
  }
});


