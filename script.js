//for header dropdown
// Add this JavaScript to handle edge cases and improve hover behavior
document.addEventListener("DOMContentLoaded", function () {
  const dropdownTriggers = document.querySelectorAll(".btn-dropdown-trigger");

  dropdownTriggers.forEach((trigger) => {
    const dropdown = trigger.nextElementSibling;
    if (!dropdown.classList.contains("dropdown-content")) return;
    console.log(dropdown);
    // Handle mouse enter/leave for both trigger and dropdown
    const showDropdown = () => {
      dropdown.style.opacity = "1";
      dropdown.style.visibility = "visible";
      dropdown.style.transform = "translateY(0)";
    };

    const hideDropdown = (e) => {
      const isOverTrigger = trigger.contains(e.relatedTarget);
      const isOverDropdown = dropdown.contains(e.relatedTarget);

      if (!isOverTrigger && !isOverDropdown) {
        dropdown.style.opacity = "0";
        dropdown.style.visibility = "hidden";
        dropdown.style.transform = "translateY(-10px)";
      }
    };

    trigger.addEventListener("mouseenter", showDropdown);
    trigger.addEventListener("mouseleave", hideDropdown);
    dropdown.addEventListener("mouseenter", showDropdown);
    dropdown.addEventListener("mouseleave", hideDropdown);
  });
});

// city modal start ----------------------------------------------

const cities = [
  // ... your existing cities ...
  {
    name: "Agra",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/039/original/Agra_%281%29.png?1731563705",
  },
  {
    name: "Ahmedabad",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/023/original/Ahmedabad_%282%29.png?1731563735",
  },
  {
    name: "Bangalore",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/001/original/Bangalore_%281%29.png?1731326022",
  },
  {
    name: "Bangalore Airport",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/051/original/Bangalore_Airport_%281%29.png?1731563761",
  },
  {
    name: "Belagavi",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/103/original/Belagavi.png?1731326075",
  },
  {
    name: "Bhubaneswar",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/097/original/Bhubaneswar_%282%29.png?1731563802",
  },
  {
    name: "Calicut",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/098/original/Calicut_%281%29.png?1731326162",
  },
  {
    name: "Chandigarh",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/024/original/Chandigarh_%281%29.png?1731326195",
  },
  {
    name: "Chikmagalur",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/007/original/Chikmangluru_%281%29.png?1731326256",
  },
  {
    name: "Cochin",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/021/original/Kochi_%281%29.png?1731326788",
  },
  {
    name: "Coorg",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/003/original/Coorg_-_Madikeri_%281%29.png?1731326317",
  },
  {
    name: "Delhi",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/034/original/Delhi_%281%29.png?1731326343",
  },
  {
    name: "Gandhinagar",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/033/original/Gandhi_Nagar_%282%29.png?1731563835",
  },
  {
    name: "Guntur",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/096/original/Guntur_%282%29.png?1731563858",
  },
  {
    name: "Gurugram",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/040/original/Gurugram_652fd0242a3833bf5b68f9d647a12253.jpg?1558600016",
  },
  {
    name: "Guwahati",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/095/original/Guwahati_%281%29.png?1731326553",
  },
  {
    name: "Hampi",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/112/original/Hampi.png?1733997694",
  },
  {
    name: "Hubli-Dharwad",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/015/original/Hubli_%281%29.png?1731326602",
  },
  {
    name: "Hyderabad",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/012/original/Hyderabad_%282%29.png?1733997419",
  },
  {
    name: "Jaipur",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/089/original/Jaipur_%284%29.png?1731563896",
  },
  {
    name: "Jaisalmer",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/035/original/Jaisalmer_%282%29.png?1731563922",
  },
  {
    name: "Jodhpur",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/041/original/Jodhpur_%282%29.png?1731563944",
  },
  {
    name: "Kolkata",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/042/original/Kolkata_%282%29.png?1731563970",
  },
  {
    name: "Leh Ladakh",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/110/original/Leh_Ladakh.png?1723629399",
  },
  {
    name: "Manali",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/088/original/Manali_%281%29.png?1731326891",
  },
  {
    name: "Mangalore",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/005/original/Mangalore_%281%29.png?1731326918",
  },
  {
    name: "Mysore",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/004/original/Mysore_%281%29.png?1731327038",
  },
  {
    name: "Pondicherry",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/013/original/Pondicherry_%281%29.png?1731327552",
  },
  {
    name: "Puri",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/027/original/Puri_%281%29.png?1731328715",
  },
  {
    name: "Ranchi",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/094/original/Ranchi_%282%29.png?1731563999",
  },
  {
    name: "Surat",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/105/original/Surat_%281%29.png?1731328875",
  },
  {
    name: "Tirupati",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/038/original/Tirupati_%281%29.png?1731329122",
  },
  {
    name: "Trivandrum",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/010/original/Trivandrum_%281%29.png?1731329152",
  },
  {
    name: "Udaipur",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/037/original/Udaipur_%281%29.png?1731329273",
  },
  {
    name: "Udupi-Manipal",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/006/original/Udupi_%281%29.png?1731329303",
  },
  {
    name: "Vijayawada",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/009/original/Vijayawada_%281%29.png?1731329331",
  },
  {
    name: "Vizag",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/011/original/Vizag_%281%29.png?1731329358",
  },
  {
    name: "Wayanad",
    image: "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/091/original/Wayanad_%281%29.png?1731329398",
  },
];

function createCityCard(city) {
  return `
            <div class="city-card" onclick="selectCity('${city.name}')">
                <img src="${city.image}" alt="${city.name}">
                <div class="city-name">${city.name}</div>
            </div>
         `;
}

function populateCityGrid(citiesArray) {
  const cityGrid = document.getElementById("citiesGrid");
  cityGrid.innerHTML = citiesArray.map((city) => createCityCard(city)).join("");
}

function filterCities(searchTerm) {
  const filtered = cities.filter((city) => city.name.toLowerCase().includes(searchTerm.toLowerCase()));
  populateCityGrid(filtered);
}

function openModal() {
  document.getElementById("modalOverlay").style.display = "block";
  //document.body.style.overflow = "hidden";

  // Trigger reflow
  document.getElementById("modalOverlay").offsetHeight;
  document.getElementById("modalOverlay").classList.add("active");
  //document.body.style.overflow = "hidden";

  populateCityGrid(cities);
}

function closeModal() {
  const modal = document.getElementById("modalOverlay");
  modal.classList.remove("active");
  setTimeout(() => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }, 300); // Match the transition duration
}

function clearSearch() {
  document.querySelector(".city-modal-search-input").value = "";
  populateCityGrid(cities);
}

function selectCity(cityName) {
  const button = document.getElementById("citySelectButton");
  button.textContent = cityName;
  closeModal();
}

document.getElementById("modalOverlay").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});

// Initialize
populateCityGrid(cities);

// city modal end----------------------------------------------

//sidebar start----------------------------------------------

const sidebar = document.querySelector(".sidebar");
const backdrop = document.querySelector(".sidebar-backdrop");
const closeBtn = document.querySelector(".sidebar-close-btn");
const showBtn = document.querySelector(".show-sidebar-btn");

function openSidebar() {
  sidebar.classList.add("active");
  backdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  sidebar.classList.remove("active");
  backdrop.classList.remove("active");
  document.body.style.overflow = "auto";
}

closeBtn.addEventListener("click", closeSidebar);
backdrop.addEventListener("click", closeSidebar);
showBtn.addEventListener("click", openSidebar);
// Close sidebar on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeSidebar();
});

//sidebar end----------------------------------------------

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
