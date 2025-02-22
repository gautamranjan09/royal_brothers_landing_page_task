//for header dropdown
// Add this JavaScript to handle edge cases and improve hover behavior
document.addEventListener('DOMContentLoaded', function() {
    const dropdownTriggers = document.querySelectorAll('.btn-dropdown-trigger');
    
    dropdownTriggers.forEach(trigger => {
      const dropdown = trigger.nextElementSibling;
      if (!dropdown.classList.contains('dropdown-content')) return;
      console.log(dropdown);
      // Handle mouse enter/leave for both trigger and dropdown
      const showDropdown = () => {
        dropdown.style.opacity = '1';
        dropdown.style.visibility = 'visible';
        dropdown.style.transform = 'translateY(0)';
      };
  
      const hideDropdown = (e) => {
        const isOverTrigger = trigger.contains(e.relatedTarget);
        const isOverDropdown = dropdown.contains(e.relatedTarget);
        
        if (!isOverTrigger && !isOverDropdown) {
          dropdown.style.opacity = '0';
          dropdown.style.visibility = 'hidden';
          dropdown.style.transform = 'translateY(-10px)';
        }
      };
  
      trigger.addEventListener('mouseenter', showDropdown);
      trigger.addEventListener('mouseleave', hideDropdown);
      dropdown.addEventListener('mouseenter', showDropdown);
      dropdown.addEventListener('mouseleave', hideDropdown);
    });
  });

//for featured section crousel
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const items = Array.from(document.querySelectorAll(".carousel-item"));
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");

  const itemWidth = 350;
  let currentIndex = 0;
  let autoSlideInterval;

  // Clone items for infinite scroll
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });

  function updateSlide(animate = true) {
    track.style.transition = animate ? "transform 0.5s ease-in-out" : "none";
    track.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
  }

  function slide(direction) {
    if (direction === "next") {
      currentIndex++;
    } else {
      currentIndex--;
    }

    updateSlide();

    // Reset position when reaching cloned items
    if (currentIndex >= items.length) {
      setTimeout(() => {
        track.style.transition = "none";
        currentIndex = 0;
        updateSlide(false);
      }, 500);
    } else if (currentIndex < 0) {
      setTimeout(() => {
        track.style.transition = "none";
        currentIndex = items.length - 1;
        updateSlide(false);
      }, 500);
    }
  }

  function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => slide("next"), 4000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  prevButton.addEventListener("click", () => {
    slide("prev");
    startAutoSlide();
  });

  nextButton.addEventListener("click", () => {
    slide("next");
    startAutoSlide();
  });

  // **Pause carousel when hovering over any item**
  track.addEventListener("mouseenter", stopAutoSlide);
  track.addEventListener("mouseleave", startAutoSlide);

  startAutoSlide();
});
