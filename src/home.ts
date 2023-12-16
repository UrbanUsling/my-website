window.onload = function () {
    var filePath: string = 'static/textfiles/villkor.txt';
    var outputElement: HTMLElement | null = document.getElementById('termsOutput');
  
    // Check if the output element is present before trying to set text content
    if (outputElement) {
      fetch(filePath)
        .then(response => response.text())
        .then(text => {
          outputElement!.textContent = text;
        })
        .catch(error => {
          console.error('Error reading file:', error);
        });
    }
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    var termsLink: HTMLElement | null = document.getElementById("termsLink");
    var iframeContainer: HTMLElement | null = document.getElementById("iframeContainer");
  
    // Check if the elements are present before trying to add event listeners
    if (termsLink && iframeContainer) {
      // Add click event listener to the "Terms and Conditions" link
      termsLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior
  
        // Show the iframe container
        if (iframeContainer!.style) {
          iframeContainer!.style.display = "block";
        }
  
        // Set the iframe source
        var iframe: HTMLIFrameElement | null = iframeContainer!.querySelector('iframe'); // Use querySelector on iframeContainer
        if (iframe) {
          iframe.src = "/terms";
        }
      });
    }
  });
  
  (window as any).enableSubmit = function() {
    // Get the checkbox and submit button elements
    var checkbox: HTMLInputElement | null = document.getElementById("exampleCheck1") as HTMLInputElement;
    var submitButton: HTMLButtonElement | null = document.getElementById("submitButton") as HTMLButtonElement;
  
    // Enable or disable the submit button based on the checkbox state
    if (submitButton) {
      submitButton.disabled = !checkbox.checked;
    }
  }
  
  
  function submitForm() {
    // Get the form and iframe elements
    var form = document.getElementById("myForm") as HTMLFormElement | null;
    var iframeContainer2 = document.getElementById("iframeContainer2") as HTMLElement | null;

    // Check if the elements are present before trying to hide/show
    if (form && iframeContainer2) {
        // Hide the form
        form.style.display = "none";

        // Show the iframe container
        if (iframeContainer2.style) {
            iframeContainer2.style.display = "block";
        }
    }

    // Set the iframe source
    var iframe = iframeContainer2?.querySelector('iframe') as HTMLIFrameElement | null;
    if (iframe) {
        iframe.src = "/confirmation";
    }
}
