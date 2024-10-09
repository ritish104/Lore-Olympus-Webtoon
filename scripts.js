// Smooth scroll for 'Read More' button
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
  navbar.classList.toggle('active'); 
});

// =======
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#read-more').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Carousel functionality
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
  }
  
  document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });
  
  document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });
  
  // Initialize the first slide
  showSlide(currentSlide);
  document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('.lazy');
  
    function loadImages(image) {
      image.src = image.dataset.src;
    }
  
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          loadImages(img);
          observer.unobserve(img);
        }
      });
    });
  
    lazyImages.forEach(image => {
      imageObserver.observe(image);
    });
  });
// ===================
document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
  
    readMoreButtons.forEach((button) => {
      button.addEventListener('click', function () {
        const description = this.previousElementSibling; // The paragraph with character description
        const moreText = description.querySelector('.more-text');
  
        // Toggle visibility of the extra content
        if (moreText.style.display === "none" || moreText.style.display === "") {
          moreText.style.display = "inline";
          this.textContent = "Read Less"; // Change button text
        } else {
          moreText.style.display = "none";
          this.textContent = "Read More"; // Change button text
        }
      });
    });
  });
  
