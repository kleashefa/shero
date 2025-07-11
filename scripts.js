//Funksionalitet hamburger menu
const hamburger = document.getElementById("hamburger");
const navWrapper = document.getElementById("navWrapper");

hamburger.addEventListener("click", () => {
  navWrapper.classList.toggle("active");
  document.body.style.overflow = navWrapper.classList.contains("active")
    ? "hidden"
    : "auto";

  hamburger.textContent = navWrapper.classList.contains("active") ? "✖" : "☰";
});

//Karusel per hero-banner
document.addEventListener("DOMContentLoaded", () => {
  try {
    const glide = new Glide(".glide", {
      type: "carousel",
      perView: 1,
      gap: 0,
      bound: true,
      autoplay: 2000,
      animationDuration: 1200,
      hoverpause: true,
      keyboard: true,
    }).mount();

    // Pause/Play functionality
    const pausePlayBtn = document.getElementById("pausePlayBtn");
    let isPlaying = true;

    pausePlayBtn.addEventListener("click", () => {
      if (isPlaying) {
        glide.pause();
        pausePlayBtn.textContent = "▶";
        isPlaying = false;
      } else {
        glide.play();
        pausePlayBtn.textContent = "||";
        isPlaying = true;
      }
    });
  } catch (error) {
    console.error("Glide initialization failed:", error);
  }

  //Funksionalitet per tab buttons
  const tabButtons = document.querySelectorAll(".tab-button");
  if (tabButtons.length > 0) {
    tabButtons[0].classList.add("active");
  }
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));

      button.classList.add("active");
    });
  });

  // Karusel per testimonials
  try {
    const testimonialGlide = new Glide(".glide-testimonials", {
      type: "carousel",
      perView: 1,
      gap: 0,
      bound: true,
      autoplay: false,
      animationDuration: 1200,
      keyboard: true,
    }).mount();
  } catch (error) {
    console.error("Testimonial Glide initialization failed:", error);
  }

  // Karusel per health benefits
  try {
    const healthBenefitsGlide = new Glide(".glide-health-benefits", {
      type: "carousel",
      perView: 5,
      gap: 20,
      bound: true,
      autoplay: false,
      animationDuration: 1200,
      keyboard: true,
      breakpoints: {
        1024: {
          perView: 4,
        },
        768: {
          perView: 2,
        },
      },
    });
    healthBenefitsGlide.mount();

    // Event listeners for the plus buttons
    const plusButtons = document.querySelectorAll(".benefit-plus");
    plusButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.stopPropagation();
        const card = this.closest(".benefit-card");
        const title = card.querySelector(".benefit-title").textContent;

        console.log("Plus button clicked for:", title);

        card.classList.toggle("expanded");
      });
    });
  } catch (error) {
    console.error("Health Benefits Glide initialization failed:", error);
  }

  //Karusel per testimonials
  try {
    const testimonialGlide = new Glide(".glide-testimonials", {
      type: "carousel",
      perView: 1,
      gap: 0,
      bound: true,
      autoplay: false,
      animationDuration: 1200,
      keyboard: true,
    });
    testimonialGlide.mount();
  } catch (error) {
    console.error("Testimonial Glide initialization failed:", error);
  }

  // Karusel per doctor quotes
  try {
    const doctorQuotesGlide = new Glide(".glide-doctor-quotes", {
      type: "carousel",
      perView: 1,
      gap: 0,
      bound: true,
      autoplay: false,
      animationDuration: 1200,
      keyboard: true,
    });
    doctorQuotesGlide.mount();

    //Doctor name navigation buttons
    const doctorNavBtns = document.querySelectorAll(".doctor-nav-btn");

    doctorNavBtns.forEach((btn, index) => {
      btn.addEventListener("click", function () {
        //Goes to the corresponding slide
        doctorQuotesGlide.go(`=${index}`);
      });
    });

    //Active state on slide change
    doctorQuotesGlide.on("move", function () {
      const currentIndex = doctorQuotesGlide.index;

      //Update active button
      doctorNavBtns.forEach((btn, index) => {
        if (index === currentIndex) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });
    });
  } catch (error) {
    console.error("Doctor quotes carousel initialization failed:", error);
  }
  if (window.innerWidth > 600) {
    const recipesGlide = new Glide(".glide-recipes", {
      type: "carousel",
      perView: 3,
      gap: 20,
      bound: true,
      autoplay: false,
      animationDuration: 1200,
      keyboard: true,
      breakpoints: {
        1024: {
          perView: 3,
        },
        768: {
          perView: 3,
        },
      },
    });
    recipesGlide.mount();
  }
});
