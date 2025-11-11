const btn = document.querySelector('.theme-btn');
btn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

document.addEventListener('DOMContentLoaded', () => {
  // Function to load placeholder content when an image fails to load
  window.loadPlaceholder = (img, text, iconClass) => {
    const parent = img.parentElement;
    const placeholderDiv = document.createElement('div');
    placeholderDiv.className = 'image-placeholder';
    placeholderDiv.style.display = 'flex';

    placeholderDiv.innerHTML = `
      <div class="placeholder-content">
        <i class="${iconClass}"></i>
        <p>${text}</p>
      </div>
    `;
    parent.insertBefore(placeholderDiv, img.nextElementSibling);
    img.style.display = 'none';
  };

  // Add smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add loading animation for images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('load', function() {
      this.classList.add('loaded');
    });
  });
});
