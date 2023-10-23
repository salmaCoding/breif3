//popup code
function openPopUp() {
    document.getElementById("mypopup").style.display = "block";
  }
  
  function closePopUp() {
    document.getElementById("mypopup").style.display = "none";
  }
  
  //magazine allow read
  if (localStorage.getItem('user') !== null) {
      var readElements = document.querySelectorAll('.read');
      for (var i = 0; i < readElements.length; i++) {
          readElements[i].style.display = 'block';
      }
   
  } else {
      var containerText = document.querySelectorAll('.game-buy');
      for (var i = 0; i < containerText.length; i++) { 
          containerText[i].innerHTML += '<a  class="fake">read</a>';
      }
  }
  
  