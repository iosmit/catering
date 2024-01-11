// Get the modal
var modal = document.getElementById("myModal");

//Get the base page
var base=document.getElementById("hidePage");
var nav=document.getElementById("navbar");
  
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  base.style.display="none";
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  base.style.display="block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    base.style.display="block";
  }
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
    base.style.display="block";
  }
});
