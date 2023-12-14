window.onload = function () {
    var filePath = 'static/textfiles/villkor.txt';
    var outputElement = document.getElementById('termsOutput');

    // Check if the output element is present before trying to set text content
    if (outputElement) {
        fetch(filePath)
            .then(response => response.text())
            .then(text => {
                outputElement.textContent = text;
            })
            .catch(error => {
                console.error('Error reading file:', error);
            });
    }
};

document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    var termsLink = document.getElementById("termsLink");
    var iframeContainer = document.getElementById("iframeContainer");

    // Check if the elements are present before trying to add event listeners
    if (termsLink && iframeContainer) {
        // Add click event listener to the "Terms and Conditions" link
        termsLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default link behavior

            // Show the iframe container
            iframeContainer.style.display = "block";

            // Set the iframe source
            var iframe = iframeContainer.querySelector('iframe'); // Use querySelector on iframeContainer
            if (iframe) {
                iframe.src = "/terms";
            }
        });
    }
});

function enableSubmit() {
    // Get the checkbox and submit button elements
    var checkbox = document.getElementById("exampleCheck1");
    var submitButton = document.getElementById("submitButton");

    // Enable or disable the submit button based on the checkbox state
    if (submitButton) {
        submitButton.disabled = !checkbox.checked;
    }
}

function handleApiResponse(response) {
    var iframe = document.getElementById("iframe");

    if (response && response.success != null) {
        renderConfirmation(response.person, response.success);
    }

    if (iframe && response.html != null) {
        iframe.contentDocument.body.innerHTML = response.html;
    }
}

function submitForm() {
    // Get the form and iframe elements
    var form = document.getElementById("myForm");
    var iframeContainer2 = document.getElementById("iframeContainer2");

    // Check if the elements are present before trying to hide/show
    if (form && iframeContainer2) {
        // Hide the form
        form.style.display = "none";

        // Show the iframe container
        iframeContainer2.style.display = "block";
    }

    // Serialize the form data
    var formData = new FormData(form);

    // Create an XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Configure it to make a POST request to /confirmation
    xhr.open("POST", "/confirmation", true);

    // Set the onload event handler to handle the response
    xhr.onload = function () {
        if (xhr.status === 200) {
            try {
                // Try to parse the response as JSON
                var response = JSON.parse(xhr.responseText);
                handleApiResponse(response);
            } catch (e) {
                // If parsing as JSON fails, assume it's HTML
                handleApiResponse({ html: xhr.responseText });
            }
        } else {
            // Handle errors
            console.error('Error submitting form:', xhr.statusText);
        }
    };

    // Send the form data
    xhr.send(formData);
}
