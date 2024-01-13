// Get the modal
var modal = document.getElementById("myModal");

//Get the hidepage page
var hidepage=document.getElementById("hidepage");
  
// Get the button that opens the modal
var menubtn = document.getElementById("menubtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
menubtn.onclick = function() {
  hidepage.style.display="none";
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  hidepage.style.display="block";
}

// When the user clicks anywhere outside of the modal, close the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    hidepage.style.display="block";
  }
}

// When the user presses the escape key, close the modal
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
    hidepage.style.display="block";
  }
});