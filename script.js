document.addEventListener("DOMContentLoaded", function () {
        // Check system dark mode preference (initial setup)
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark");
        }
    
        // Listen for system theme changes
        window
          .matchMedia("(prefers-color-scheme: dark)")
          .addEventListener("change", (e) => {
            if (e.matches) {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }
          });
    
        // Mobile Menu
        const mobileMenuButton = document.getElementById("mobile-menu-button");
        const mobileMenu = document.getElementById("mobile-menu");
    
        if (mobileMenuButton && mobileMenu) {
          mobileMenuButton.addEventListener("click", function () {
            mobileMenu.classList.toggle("hidden");
          });
    
          const mobileMenuLinks = mobileMenu.querySelectorAll("a");
          mobileMenuLinks.forEach((link) => {
            link.addEventListener("click", function () {
              mobileMenu.classList.add("hidden");
            });
          });
        }
    
        // Project Filter
        const filterButtons = document.querySelectorAll(".project-filter-btn");
        const projectCards = document.querySelectorAll(".project-card");
    
        filterButtons.forEach((button) => {
          button.addEventListener("click", function () {
            const filter = this.getAttribute("data-filter");
    
            // Update active button
            filterButtons.forEach((btn) => {
              btn.classList.remove("bg-primary", "text-white");
              btn.classList.add("bg-gray-100", "text-gray-700");
            });
            this.classList.remove("bg-gray-100", "text-gray-700");
            this.classList.add("bg-primary", "text-white");
    
            // Filter projects
            projectCards.forEach((card) => {
              const categories = card.getAttribute("data-category").split(" ");
              if (filter === "all" || categories.includes(filter)) {
                card.style.display = "block";
              } else {
                card.style.display = "none";
              }
            });
          });
        });
    
        // Skill Animation
        const skillBars = document.querySelectorAll(".skill-progress");
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = "0";
                setTimeout(() => {
                  entry.target.style.width = width;
                }, 100);
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.5 }
        );
    
        skillBars.forEach((bar) => {
          observer.observe(bar);
        });
    
        // Custom Checkbox
        const checkbox = document.getElementById("agreement-checkbox");
        if (checkbox) {
          checkbox.addEventListener("click", function () {
            this.classList.toggle("checked");
            this.style.background = this.classList.contains("checked")
              ? "#3B82F6"
              : "transparent";
          });
        }
    
        // Form Validation (assuming this is still needed)
        function validateForm(event) {
          event.preventDefault(); // Stop default form submission
    
          // Validation logic
          const name = document.getElementById("name").value.trim();
          const email = document.getElementById("email").value.trim();
          const message = document.getElementById("message").value.trim();
    
          let isValid = true;
          document.getElementById("nameError").textContent = "";
          document.getElementById("emailError").textContent = "";
          document.getElementById("messageError").textContent = "";
    
          if (!name) {
            document.getElementById("nameError").textContent = "Name is required.";
            isValid = false;
          }
          if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            document.getElementById("emailError").textContent =
              "Valid email is required.";
            isValid = false;
          }
          if (!message) {
            document.getElementById("messageError").textContent =
              "Message is required.";
            isValid = false;
          }
    
          const agreementChecked = document
            .getElementById("agreement-checkbox")
            .classList.contains("checked");
          if (!agreementChecked) {
            alert("You must agree to the terms.");
            isValid = false;
          }
    
          // 🚀 Submit if valid
          if (isValid) {
            event.target.submit(); // 👈 this line is very important
          }
        }
    
        // Attach form validation to the form (if the form exists)
        const contactForm = document.querySelector('form[name="contact"]');
        if (contactForm) {
          contactForm.addEventListener("submit", validateForm);
        }
    
        // Scroll listener
        window.addEventListener("scroll", () => {
          if (window.scrollY > 50) {
            document.body.classList.add("scrolled");
          } else {
            document.body.classList.remove("scrolled");
          }
        });
      });