// Get all elements with aria-label="Cancel request"
var manageButtons = document.querySelectorAll('[aria-label="Manage"]');

// Function to process each button
function processButton(button) {
    // Click the button
    button.click();

    // Wait for 800ms before clicking "Unfollow"
    setTimeout(function() {
        clickUnfollow();
    }, 800);
}

// Loop through each cancel button and process it one by one
manageButtons.forEach(function(button) {
    // Process each button with a delay
    setTimeout(function() {
        processButton(button);
    }, 200);
});

// Function to click the "Unfollow" button
function clickUnfollow() {
    // Find all span elements
    var spanElements = document.querySelectorAll('span');

    // Loop through each span element
    spanElements.forEach(function(spanElement) {
        // Check if the text is "Unfollow" and the parent element doesn't contain "Follow"
        if (spanElement.textContent.trim() === 'Unfollow' && !spanElement.closest('[aria-label="Follow"]')) {
            // Simulate a click on the "Unfollow" button
            spanElement.click();
        }
    });
}
