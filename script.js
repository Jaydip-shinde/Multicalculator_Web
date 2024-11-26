// Select elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle the active class on hamburger click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  // Add animation to hamburger lines
  hamburger.classList.toggle('toggle');
  const lines = hamburger.querySelectorAll('.line');
  lines.forEach((line, index) => {
    line.style.transform = hamburger.classList.contains('toggle')
      ? `rotate(${15 * (index + 1)}deg)`
      : 'rotate(0)';
  });
});



document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".symbols-wrapper");
    const symbols = wrapper.innerHTML; // Store original symbols
    // Duplicate symbols until they fill the container width
    while (wrapper.scrollWidth < window.innerWidth * 2) {
      wrapper.innerHTML += symbols;
    }
  });

 
  
  let currentIndex = 0;
  const slides = document.querySelectorAll('.quote-slide');
  const totalSlides = slides.length;
  const carousel = document.querySelector('.carousel');
  
  function showNextSlide() {
    // Increment the index
    currentIndex++;
  
    // Smoothly transition to the next slide
    carousel.style.transition = 'transform 0.8s ease-in-out';
    const offset = -currentIndex * 100; // Shift by 100% for each slide
    carousel.style.transform = `translateX(${offset}%)`;
  
    // Handle the loop when reaching the duplicate slide
    if (currentIndex === totalSlides) {
      setTimeout(() => {
        // Reset to the first slide without animation
        carousel.style.transition = 'none'; // Disable animation
        currentIndex = 0; // Reset index
        carousel.style.transform = 'translateX(0)'; // Reset position
      }, 3000); // Wait for 3 seconds (time for the last slide)
    }
  }
  
  // Auto-slide every 3 seconds
  setInterval(showNextSlide, 3000);
  
  
  

  
  //  DROPDWON CARDS

// Attach click event to buttons
// Attach click event to buttons
document.querySelectorAll('.custom-button').forEach(button => {
  button.addEventListener('click', () => {
    const menuID = button.id.replace('button', 'menu');
    const dropdown = document.getElementById(menuID);
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', (event) => {
  const isInsideDropdown = event.target.matches('.custom-button') || event.target.matches('.custom-dropdown') || event.target.matches('.custom-option');
  if (!isInsideDropdown) {
    document.querySelectorAll('.custom-dropdown').forEach(menu => menu.style.display = 'none');
  }
});

// Ensure smooth scroll behavior on older browsers or custom implementations
document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetID = this.getAttribute('href').substring(1); // Get ID without "#"
    const targetElement = document.getElementById(targetID);

    if (targetElement) {
      // Smooth scroll logic
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

    

document.querySelectorAll('.ajax-form').forEach(form => {
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from reloading the page
    
    const formData = new FormData(this); // Get form data
    formData.append('type', this.getAttribute('data-type')); // Add message type
    
    const responseDiv = this.querySelector('.form-response');

    fetch('http://127.0.0.1:5000/submit', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          responseDiv.textContent = "Submitted successfully!";
          responseDiv.style.color = 'green';

          // Clear the form inputs
          this.reset();
        } else {
          responseDiv.textContent = "Error submitting form. Please try again.";
          responseDiv.style.color = 'red';
        }
      })
      .catch(() => {
        responseDiv.textContent = "An error occurred. Please try again later.";
        responseDiv.style.color = 'red';
      });
  });
});

