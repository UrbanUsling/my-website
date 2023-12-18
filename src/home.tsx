import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

window.onload = function () {
  const filePath = 'static/textfiles/villkor.txt';
  const outputElement = document.getElementById('termsOutput');

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
  const termsLink = document.getElementById("termsLink");
  const iframeContainer = document.getElementById("iframeContainer");

  // Check if the elements are present before trying to add event listeners
  if (termsLink && iframeContainer) {
      // Add click event listener to the "Terms and Conditions" link
      termsLink.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent the default link behavior

          // Show the iframe container
          iframeContainer.style.display = "block";

          // Set the iframe source
          const iframe = iframeContainer.querySelector('iframe'); // Use querySelector on iframeContainer
          if (iframe) {
              iframe.src = "/terms";
          }
      });
  }
});

function enableSubmit() {
  // Get the checkbox and submit button elements
  var checkbox = document.getElementById("exampleCheck1") as HTMLInputElement;
  var submitButton = document.getElementById("submitButton") as HTMLButtonElement;

  // Enable or disable the submit button based on the checkbox state
  if (submitButton) {
    submitButton.disabled = !checkbox.checked;
  }
}

function submitForm() {
  // Get the form and iframe elements
  var form = document.getElementById("myForm") as HTMLFormElement;
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
    console.log('XHR Status:', xhr.status);

    if (xhr.status === 200) {
      var contentType = xhr.getResponseHeader('Content-Type');

      if (contentType && contentType.includes('application/json')) {
        // Parse as JSON
        try {
          var response = JSON.parse(xhr.responseText);
          // Handle the JSON response
          if (response.success) {
            console.log('Form submitted successfully');
          } else {
            console.error('Form submission failed:', response.error);
          }
        } catch (e) {
          console.error('Error parsing JSON:', e);
        }
      } else {
        // Handle as HTML
        console.log('Received HTML response:', xhr.responseText);

        var iframeContainer2 = document.getElementById("iframeContainer2");
        if (iframeContainer2) {
          var iframe = iframeContainer2.querySelector('iframe');
          if (iframe) {
            // Set the content of the iframe to the HTML response
            iframe.srcdoc = xhr.responseText;
          }
          // Show the iframe container
          iframeContainer2.style.display = "block";
        }
      }
      setFormSubmitted(true);
    } else {
      console.error('Error submitting form:', xhr.statusText);
    }
  };

  // Send the form data
  xhr.send(formData);
}

// Your React component
const App: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Add other state variables and logic as needed

  return (
    <div>
      {/* Your HTML/JSX code here */}
      <form action="/confirmation" className="form_reg" style={{ marginTop: "30px" }} id="myForm" onSubmit={(e) => { e.preventDefault(); submitForm(); }}>
        <div className="mb-3 reg">
          <label htmlFor="exampleInputFullName" className="form-label">Fullständigt namn</label>
          <input type="text" className="form-control" name="full_name" id="exampleInputFullName" style={{ width: "40ch" }} aria-describedby="FullNameHelp" required />
        </div>
        <div className="mb-3 reg">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" name="email" id="exampleInputEmail1" style={{ width: "40ch" }} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 form-check check_reg">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={enableSubmit} />
          <label className="form-check-label" htmlFor="exampleCheck1">Jag godkänner  <a href="/terms" id="termsLink">villkoren</a></label>
        </div>
        <div id="iframeContainer" style={{ display: "none" }}>
          <iframe name="termsFrame" style={{ width: "100%", height: "300px", border: "1px solid #ccc" }}></iframe>
        </div>
        <button type="submit" className="btn btn-primary" id="submitButton" disabled={formSubmitted}>Submit</button>
      </form>

      <div id="iframeContainer2" style={{ display: "none" }}>
        <iframe id="iframe" name="termsFrame" style={{ width: "50%", height: "100px", marginTop: "20px", marginLeft: "25%", border: "1px solid #ccc" }}></iframe>
      </div>
    </div>
  );
};

// Create a root for rendering the React component
const rootElement = document.getElementById('home2');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
function setFormSubmitted(arg0: boolean) {
  throw new Error('Function not implemented.');
}

