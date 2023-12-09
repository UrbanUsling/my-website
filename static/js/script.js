window.onload = function() {
    var filePath = 'static/textfiles/villkor.txt';
    var outputElement = document.getElementById('termsOutput');

    fetch(filePath)
        .then(response => response.text())
        .then(text => {
            outputElement.textContent = text;
        })
        .catch(error => {
            console.error('Error reading file:', error);
        });
};

document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    var termsLink = document.getElementById("termsLink");
    var iframeContainer = document.getElementById("iframeContainer");

    // Add click event listener to the "Terms and Conditions" link
    termsLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Show the iframe container
        iframeContainer.style.display = "block";

        // Set the iframe source
        var iframe = document.querySelector('iframe');
        iframe.src = "/terms";
    });
});

function enableSubmit() {
    // Get the checkbox and submit button elements
    var checkbox = document.getElementById("exampleCheck1");
    var submitButton = document.getElementById("submitButton");

    // Enable or disable the submit button based on the checkbox state
    submitButton.disabled = !checkbox.checked;
}
