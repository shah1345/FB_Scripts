// Get all elements with aria-label="Cancel request"
var cancelButtons = document.querySelectorAll('[aria-label="Cancel request"]');

// Loop through each cancel button and click it
cancelButtons.forEach(function(button) {
  button.click();
});
