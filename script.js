document.addEventListener("DOMContentLoaded", function() {
    // Toggle Project Details
    window.toggleDetails = function(id) {
      const details = document.getElementById(id);
      if (details.classList.contains("hidden")) {
        details.classList.remove("hidden");
      } else {
        details.classList.add("hidden");
      }
    };
  
    // Form Validation
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
  
      if (name && email) {
        alert(`Thank you, ${name}! We will contact you at ${email} soon.`);
      } else {
        alert("Please fill in all fields.");
      }
    });
  });
  