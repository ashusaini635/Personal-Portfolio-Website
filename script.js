document.addEventListener("DOMContentLoaded", function () {
        // Check system dark mode preference
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
      });

    // <script id="mobile-menu-script">
      document.addEventListener("DOMContentLoaded", function () {
        const mobileMenuButton = document.getElementById("mobile-menu-button");
        const mobileMenu = document.getElementById("mobile-menu");
        mobileMenuButton.addEventListener("click", function () {
          mobileMenu.classList.toggle("hidden");
        });
        const mobileMenuLinks = mobileMenu.querySelectorAll("a");
        mobileMenuLinks.forEach((link) => {
          link.addEventListener("click", function () {
            mobileMenu.classList.add("hidden");
          });
        });
      });

    // <script id="project-filter-script">
      document.addEventListener("DOMContentLoaded", function () {
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
      });

    // <script id="skill-animation-script">
      document.addEventListener("DOMContentLoaded", function () {
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
      });

    // <script id="custom-checkbox-script">
      document.addEventListener("DOMContentLoaded", function () {
        const checkbox = document.getElementById("agreement-checkbox");
        checkbox.addEventListener("click", function () {
          this.classList.toggle("checked");
        });
      });


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
          document.getElementById("nameError").textContent =
            "Name is required.";
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

      // Checkbox toggle
      document
        .getElementById("agreement-checkbox")
        .addEventListener("click", function () {
          this.classList.toggle("checked");
          this.style.background = this.classList.contains("checked")
            ? "#3B82F6"
            : "transparent";
        });
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          document.body.classList.add("scrolled");
        } else {
          document.body.classList.remove("scrolled");
        }
      });
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    document.querySelectorAll('.content').forEach((section) => {
        observer.observe(section);
    });

    // Dark mode toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const nav = document.querySelector('nav');
    const projectCards = document.querySelectorAll('.project-card');
    const inputs = document.querySelectorAll('input, textarea');
    const navLinks = document.querySelectorAll('.nav-links a');

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        nav.classList.toggle('dark-mode');
        projectCards.forEach(card => card.classList.toggle('dark-mode'));
        inputs.forEach(input => input.classList.toggle('dark-mode'));
        navLinks.forEach(link => link.classList.toggle('dark-mode'));

        // Store the theme preference
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Check for stored theme preference on page load
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        nav.classList.add('dark-mode');
        projectCards.forEach(card => card.classList.add('dark-mode'));
        inputs.forEach(input => input.classList.add('dark-mode'));
        navLinks.forEach(link => link.classList.add('dark-mode'));
    }
});

// Form validation
function validateForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    // Reset error messages
    document.querySelectorAll('.error-message').forEach(elem => elem.style.display = 'none');
    
    // Validate name
    if (name.length < 2) {
        document.getElementById('nameError').textContent = 'Name must be at least 2 characters long';
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }
    
    // Validate message
    if (message.length < 10) {
        document.getElementById('messageError').textContent = 'Message must be at least 10 characters long';
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }
    
    if (isValid) {
        const successMessage = document.getElementById('successMessage');
        successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
        successMessage.style.display = 'block';
        
        document.getElementById('contactForm').reset();
        
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }
    
    return false;
}