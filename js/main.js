const hero = document.querySelector("#hero");
const heroIntro = document.querySelector(".hero-intro");
const tabs = document.querySelector(".tabs");
const searchFilters = document.querySelector(".search-filters");
const showSearchFilters = document.querySelector(".show-search-filters");
const showSearchFilterButton = document.querySelector(
  ".show-search-filter-button"
);
const carsFilterSidebar = document.querySelector(".cars-filter-sidebar");

const carsFilterSidebarButton = document.querySelector(
  ".cars-filter-sidebar-button"
);

const carsFilterCloseSidebarButton = document.querySelector(
  ".cars-filter-close-sidebar-button"
);
const carDetailSmallImages = document.querySelectorAll(
  ".car-detail-small-image"
);
const overlay = document.querySelector(".overlay");
const reviewCards = document.querySelector(".review-cards");
const reviewCard = document.querySelectorAll(".review-card");
const reviewAmount = document.querySelectorAll(".review-amount");
const reviewText = document.querySelector(".review-text");
const createReviewForm = document.querySelector("#create-review-form");
const createReview = document.querySelector(".create-review");
const createReviewButton = document.querySelector(".create-review-button");

const labels = document.querySelectorAll(".label");
const inputs = document.querySelectorAll(".input input");

const loading = document.querySelector(".loading");
const toggleHeads = document.querySelectorAll(".toggle-head");
const toggles = document.querySelectorAll(".toggle");

toggleHeads.forEach((toggleHead, i) => {
  toggleHead.addEventListener("click", () => {
    toggles.forEach((toggle, i) => {
      toggle.classList.toggle("toggle-close");
    });
  });
});

// loading
setTimeout(() => {
  loading.style = "display:none";
  document.body.classList.add("overflow-hidden");
}, 2500);

setTimeout(() => {
  document.body.classList.remove("overflow-hidden");
}, 2500);

inputs.forEach((input, i) => {
  input.addEventListener("focus", (e) => {
    labels.forEach((label, i) => {
      e.currentTarget.parentElement.classList.add("focus-input");
    });
  });
});

inputs.forEach((item, i) => {
  item.addEventListener("focusout", (e) => {
    labels.forEach((label, i) => {
      e.currentTarget.parentElement.classList.remove("focus-input");
    });
  });
});

console.log(reviewCard.length);
reviewAmount.innerText = "21";

createReviewButton &&
  createReviewButton.addEventListener("click", () => {
    createReview.classList.toggle("show");
  });

createReviewForm &&
  createReviewForm.addEventListener("submit", (e) => {
    console.log(e.target[0].value);
    let reviewTextElement = document.createElement("p");
    let reviewCardElement = document.createElement("div");
    reviewTextElement.textContent = e.target[0].value;

    reviewCardElement.innerHTML = `
      <div class="review-card-head">
        <div class="review-card-user">
          <div class="review-card-profile">
            // image
          </div>
          <div class="review-card-username">
            <h6>username</h6>
            <span>Apple CEO</span>
          </div>
        </div>
        <div class="review-stars">
          <i
            class="fa-solid fa-star"
            style="font-size: var(--font-l); color: #ffd43b;"
          ></i>
          <i
            class="fa-solid fa-star"
            style="font-size: var(--font-l); color: #ffd43b;"
          ></i>
          <i
            class="fa-regular fa-star"
            style="color: var(--gray); font-size: var(--font-l);"
          ></i>
          <i
            class="fa-regular fa-star"
            style="color: var(--gray); font-size: var(--font-l);"
          ></i>
          <i
            class="fa-regular fa-star"
            style="color: var(--gray); font-size: var(--font-l);"
          ></i>
        </div>
      </div>
      <div class="review-card-content">
        ${reviewTextElement.textContent}
      </div>

    `;
    reviewCardElement.classList.add("review-card");
    reviewCards.appendChild(reviewCardElement);

    e.preventDefault();
  });

carDetailSmallImages &&
  carDetailSmallImages.forEach((item) => {
    overlay.addEventListener("click", () => {
      item.classList.remove("zoom");
      overlay.style = `display:none`;
      document.body.classList.toggle("overflow-hidden");
    });
  });

carDetailSmallImages &&
  carDetailSmallImages.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.add("zoom");
      overlay.style = `
      width: 100%;
      height: 100%;
      background: var(--black);
      opacity: 0.7;
      display: block;
      position: absolute;
      `;
    });
  });

carsFilterSidebarButton &&
  carsFilterSidebarButton.addEventListener("click", () => {
    carsFilterSidebar.classList.add("show-cars-filter-sidebar");
  });

carsFilterCloseSidebarButton &&
  carsFilterCloseSidebarButton.addEventListener("click", () => {
    carsFilterSidebar.classList.remove("show-cars-filter-sidebar");
  });

showSearchFilterButton &&
  showSearchFilterButton.addEventListener("click", () => {
    searchFilters.classList.toggle("show-search-filters");
  });

// show hero detail
hero &&
  setTimeout(() => {
    hero.innerHTML = `
  <div class="container" >
  <div class="hero-detail">
    <div class="hero-detail-content">
      <h1 class="hero-detail-title">
          Discover the world on wheels with our car rental service
      </h1>
      <p class="hero-description">
        Choose from a wide range of cars that fit your style and budget.
        Experience the freedom of the open road with our reliable and
        efficient rental service.
       </p>
       <button class="contact-us-button">
        <span>Contact us</span>
        <div class="chevron-right">
          <i class="fa-solid fa-chevron-right" style='color:var(--black)'></i>
        </div>
        </button>
      </div>
        <div class="hero-detail-image">
          <img src="./assets/images/hero-image-2.png" alt="hero image" />
        </div>
  </div>
  <a href="#search-cars" class="blinking-swipe-down-icon">
    <img src="../assets/icons/swipe-down-icon.png"/>
  </a>
  </div>
  `;
  }, 4000);
