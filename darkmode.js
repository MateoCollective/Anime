// Get the body element
var body = document.querySelector("body");

// Get the toggle button
var toggleButton = document.querySelector("#toggle-dark-mode");

// Add an event listener to the toggle button
toggleButton.addEventListener("click", toggleDarkMode);

// Function to toggle dark mode
function toggleDarkMode() {
    // Check if the body has the "dark-mode" class
    if (body.classList.contains("dark-mode")) {
        // Remove the class to switch to light mode
        body.classList.remove("dark-mode");
    } else {
        // Add the class to switch to dark mode
        body.classList.add("dark-mode");
    }
}
