
/* 1. Mobile Navigation */

var menuToggle = document.getElementById("menu-toggle");
var navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Close navigation menu");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
});

/* Close mobile menu when a navigation link is clicked */

var navItems = navLinks.querySelectorAll("a");

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});


/* 2. Home Page Recipe Search */

var searchForm = document.getElementById("recipe-search");
var searchInput = document.getElementById("search-input");
var recipeCards = document.querySelectorAll(".recipe-card");
var noResults = document.getElementById("no-results");

function searchRecipes() {
    var searchText = searchInput.value.toLowerCase().trim();
    var foundRecipes = 0;

    recipeCards.forEach(function (card) {
        var recipeName = card.querySelector("h3").textContent.toLowerCase();
        var recipeDetails = card.getAttribute("data-search").toLowerCase();

        if (
            searchText === "" ||
            recipeName.includes(searchText) ||
            recipeDetails.includes(searchText)
        ) {
            card.style.display = "block";
            foundRecipes++;
        } else {
            card.style.display = "none";
        }
    });

    if (foundRecipes === 0) {
        noResults.hidden = false;
    } else {
        noResults.hidden = true;
    }
}

/* Search when the form is submitted */
if(searchForm){
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        searchRecipes();
    
        document.getElementById("recommendations").scrollIntoView({
            behavior: "smooth"
        });
    });
}


/* Update recipe cards as the user types */
if(searchInput){
    searchInput.addEventListener("input", function () {
        searchRecipes();
    });
}

// reveal animation
const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15,
        rootMargin: "0px 0px -30px 0px"
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


// Form script
(() => {
    const modal = document.getElementById("authModal");
    const modalContent = document.getElementById("authModalContent");
    const openButton = document.getElementById("openLoginModal");
    const closeButton = document.getElementById("closeBtn");

    const loginSection = document.getElementById("loginForm");
    const signupSection = document.getElementById("signupForm");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    // Open modal
    function openModal() {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.style.overflow = "hidden";
      showLogin();
    }

    // Close modal
    function closeModal() {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.style.overflow = "";
      openButton.focus();
    }

    // Show login
    function showLogin() {
      loginSection.classList.remove("hidden");
      signupSection.classList.add("hidden");
      document.getElementById("loginEmail").focus();
    }

    // Show signup
    function showSignup() {
      loginSection.classList.add("hidden");
      signupSection.classList.remove("hidden");
      document.getElementById("firstName").focus();
    }

    openButton.addEventListener("click", openModal);
    closeButton.addEventListener("click", closeModal);

    document.getElementById("showSignup")
      .addEventListener("click", showSignup);

    document.getElementById("showLogin")
      .addEventListener("click", showLogin);

    // Close when clicking the background
    modal.addEventListener("click", event => {
      if (event.target === modal) closeModal();
    });

    modalContent.addEventListener("click", event => {
      event.stopPropagation();
    });

    // Close with Escape
    document.addEventListener("keydown", event => {
      if (
        event.key === "Escape" &&
        !modal.classList.contains("hidden")
      ) {
        closeModal();
      }
    });

    // Validation error helpers
    function showError(id, message) {
      const input = document.getElementById(id);
      const error = document.getElementById(id + "Error");

      error.textContent = message;
      error.classList.remove("hidden");
      input.classList.add("border-red-500");
      input.setAttribute("aria-invalid", "true");
    }

    function clearError(id) {
      const input = document.getElementById(id);
      const error = document.getElementById(id + "Error");

      error.textContent = "";
      error.classList.add("hidden");
      input.classList.remove("border-red-500");
      input.removeAttribute("aria-invalid");
    }

    // Clear errors when typing
    ["loginEmail", "mobile", "signupEmail", "signupPassword"]
      .forEach(id => {
        document.getElementById(id).addEventListener("input", () => {
          clearError(id);
        });
      });

    // Allow digits only in mobile number
    document.getElementById("mobile").addEventListener("input", event => {
      event.target.value = event.target.value
        .replace(/\D/g, "")
        .slice(0, 10);
    });

    // Login form validation
    document.getElementById("loginSubmit")
      .addEventListener("submit", event => {
        event.preventDefault();

        const emailOrPhone =
          document.getElementById("loginEmail").value.trim();

        const password = document.getElementById("loginPassword");

        if (
          !emailPattern.test(emailOrPhone) &&
          !phonePattern.test(emailOrPhone)
        ) {
          showError(
            "loginEmail",
            "Enter a valid email or 10-digit phone number."
          );
          document.getElementById("loginEmail").focus();
          return;
        }

        clearError("loginEmail");

        if (!password.value) {
          password.reportValidity();
          password.focus();
          return;
        }

        // Connect your backend login API here.
        alert("Login form validated successfully!");
      });

    // Signup form validation
    document.getElementById("signupSubmit")
      .addEventListener("submit", event => {
        event.preventDefault();

        let valid = true;

        const email =
          document.getElementById("signupEmail").value.trim();

        const mobile =
          document.getElementById("mobile").value;

        const password =
          document.getElementById("signupPassword").value;

        if (!emailPattern.test(email)) {
          showError("signupEmail", "Enter a valid email address.");
          valid = false;
        } else {
          clearError("signupEmail");
        }

        if (!phonePattern.test(mobile)) {
          showError("mobile", "Enter exactly 10 digits.");
          valid = false;
        } else {
          clearError("mobile");
        }

        if (password.length < 8) {
          showError(
            "signupPassword",
            "Password must contain at least 8 characters."
          );
          valid = false;
        } else {
          clearError("signupPassword");
        }

        if (!valid) {
          signupSection
            .querySelector('[aria-invalid="true"]')
            ?.focus();
          return;
        }

        // Connect your backend registration API here.
        alert("Signup form validated successfully!");
      });
  })();