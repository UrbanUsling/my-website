document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const termsLink = document.getElementById("termsLink") as HTMLAnchorElement | null;
  const iframeContainer = document.getElementById("iframeContainer") as HTMLDivElement | null;

  // Check if the elements are present before trying to add event listeners
  if (termsLink && iframeContainer) {
      // Add click event listener to the "Terms and Conditions" link
      termsLink.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent the default link behavior

          // Show the iframe container
          iframeContainer.style.display = "block";

          // Set the iframe source
          const iframe = iframeContainer.querySelector('iframe') as HTMLIFrameElement | null; // Use querySelector on iframeContainer
          if (iframe) {
              iframe.src = "/terms";
          }
      });
  }
});

function enableSubmit() {
  // Get the checkbox and submit button elements
  const checkbox = document.getElementById("exampleCheck1") as HTMLInputElement | null;
  const submitButton = document.getElementById("submitButton") as HTMLButtonElement | null;

  // Enable or disable the submit button based on the checkbox state
  if (submitButton && checkbox) {
      submitButton.disabled = !checkbox.checked;
  }
}

function submitForm() {
  // Get the form and iframe elements
  const form = document.getElementById("myForm") as HTMLFormElement | null;
  const iframeContainer2 = document.getElementById("iframeContainer2") as HTMLDivElement | null;

  // Check if the elements are present before trying to hide/show
  if (form && iframeContainer2) {
      // Hide the form
      form.style.display = "none";

      // Show the iframe container
      iframeContainer2.style.display = "block";
  }

  // Serialize the form data
  const formData = new FormData(form as HTMLFormElement);

  // Create an XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Configure it to make a POST request to /confirmation
  xhr.open("POST", "/confirmation", true);

  // Set the onload event handler to handle the response
  xhr.onload = function () {
      if (xhr.status === 200) {
          // Update the iframe content with the response
          const iframe = document.getElementById("iframe") as HTMLIFrameElement | null;
          if (iframe) {
              iframe.contentDocument!.body.innerHTML = xhr.responseText;
          }
      } else {
          // Handle errors
          console.error('Error submitting form:', xhr.statusText);
      }
  };

  // Send the form data
  xhr.send(formData);
}
