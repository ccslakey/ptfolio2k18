// first modal
var icModal = document.getElementById('icModal');

// Get the button that opens the modal
var icBtn = document.getElementById("icBtn");

// Get the <span> element that closes the modal
var icSpan = document.getElementById("icClose");

// When the user clicks the button, open the modal
icBtn.onclick = function() {
  icModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
icSpan.onclick = function() {
  icModal.style.display = "none";
}


// second Modal
var vigModal = document.getElementById('vigModal');

// Get the button that opens the modal
var vigBtn = document.getElementById("vigBtn");

// Get the <span> element that closes the modal
var vigSpan = document.getElementById("vigClose");

// When the user clicks the button, open the modal
vigBtn.onclick = function() {
  vigModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
vigSpan.onclick = function() {
  vigModal.style.display = "none";
}



// third Modal
var gmdModal = document.getElementById('gmdModal');

// Get the button that opens the modal
var gmdBtn = document.getElementById("gmdBtn");

// Get the <span> element that closes the modal
var gmdSpan = document.getElementById("gmdClose");

// When the user clicks the button, open the modal
gmdBtn.onclick = function() {
  gmdModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
gmdSpan.onclick = function() {
  gmdModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  console.log("click!");
  console.log(event);
  if (event.target == icModal) {
    icModal.style.display = "none";
  }
  if (event.target == gmdModal) {
    gmdModal.style.display = "none";
  }
  if (event.target == vigModal) {
    vigModal.style.display = "none";
  }
}
