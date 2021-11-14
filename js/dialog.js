// Get the contentPopup
var contentPopup = document.getElementById('contentPopup');

// Get the button that opens the contentPopup
var btn = document.getElementById("myBtn");



// Get the <span> element that closes the contentPopup
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the contentPopup
btn.onclick = function() {
    contentPopup.style.display = "block";
}

// When the user clicks on <span> (x), close the contentPopup
span.onclick = function() {
    contentPopup.style.display = "none";
}

// When the user clicks anywhere outside of the contentPopup, close it
window.onclick = function(event) {
    if (event.target == contentPopup) {
        contentPopup.style.display = "none";
    }
}