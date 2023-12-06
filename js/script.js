// Get references to the toggle links
var lightModeLink = document.getElementById("light-mode");
var darkModeLink = document.getElementById("dark-mode");

// Add click event listeners to the toggle links
lightModeLink.addEventListener("click", function(event) {
  event.preventDefault();
  activateStyle("light");
});

darkModeLink.addEventListener("click", function(event) {
  event.preventDefault();
  activateStyle("dark");
});

// Function to activate the selected style
function activateStyle(style) {
  // Get all the toggle links
  var toggleLinks = document.getElementsByClassName("header-lng")[0].getElementsByTagName("a");

  // Remove the active class from all toggle links
  for (var i = 0; i < toggleLinks.length; i++) {
    toggleLinks[i].classList.remove("active");
  }

  // Add the active class to the selected toggle link
  if (style === "light") {
    lightModeLink.classList.add("active");
    // Apply light mode CSS
    // Replace "light.css" with your actual light mode CSS file name
    document.getElementById("css-file").setAttribute("href", "css/light.css");
  } else if (style === "dark") {
    darkModeLink.classList.add("active");
    // Apply dark mode CSS
    // Replace "dark.css" with your actual dark mode CSS file name
    document.getElementById("css-file").setAttribute("href", "css/dark.css");
  }
}
