// ============================================
// ORBITON - INTERACTIVE SCRIPT
// ============================================

// Modal functionality
const modal = document.getElementById("waitlist-modal");
const modalButtons = document.querySelectorAll(
  '[data-modal-target="waitlist-modal"]',
);
const closeButton = modal.querySelector(".modal-close");

// Open modal
modalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

// Close modal
const closeModal = () => {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
};

closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});

// Form submission
const emailForm = document.getElementById("email-form");
const modalForm = document.getElementById("modal-form");

const handleFormSubmit = (e, formElement) => {
  e.preventDefault();

  const emailInput = formElement.querySelector('input[type="email"]');
  const email = emailInput.value;

  if (!email) return;

  // Create a success message
  const button = formElement.querySelector('button[type="submit"]');
  const originalText = button.textContent;

  button.textContent = "✓ Added to waitlist!";
  button.style.opacity = "0.8";
  button.disabled = true;

  // Simulate API call (in production, this would be a real API)
  setTimeout(() => {
    console.log("Submitted email:", email);

    // Reset form
    emailInput.value = "";
    button.textContent = originalText;
    button.style.opacity = "1";
    button.disabled = false;

    // Close modal if it was opened via modal
    if (formElement === modalForm) {
      closeModal();
    }
  }, 1500);
};

emailForm.addEventListener("submit", (e) => handleFormSubmit(e, emailForm));
modalForm.addEventListener("submit", (e) => handleFormSubmit(e, modalForm));

// Intersection Observer for fade-in animations on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  section.classList.add("section-observe");
  observer.observe(section);
});

// Observe problem cards
document.querySelectorAll(".problem-card").forEach((card, index) => {
  card.style.animation = `fade-in 0.8s ease-out ${index * 0.15}s both`;
  observer.observe(card);
});

// Observe solution cards
document.querySelectorAll(".solution-card").forEach((card, index) => {
  card.style.animation = `fade-in 0.8s ease-out ${index * 0.15}s both`;
  observer.observe(card);
});

// Observe feature cards
document.querySelectorAll(".feature-card").forEach((card, index) => {
  card.style.animation = `fade-in 0.8s ease-out ${index * 0.2}s both`;
  observer.observe(card);
});

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add active state to logo click (scroll to top)
document.querySelector(".logo").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Keyboard navigation for accessibility
document.addEventListener("keydown", (e) => {
  // Alt + W for waitlist (accessibility shortcut)
  if (e.altKey && e.key.toLowerCase() === "w") {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    document.querySelector(".modal-input").focus();
  }
});

// ============================================
// ORBITAL ANIMATION ENHANCEMENTS
// ============================================

// Add subtle parallax effect to orbital background on mouse move
const hero = document.querySelector(".hero");
const orbitalBg = document.querySelector(".orbital-bg");

if (hero && orbitalBg) {
  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x - rect.width / 2) * 0.02;
    const moveY = (y - rect.height / 2) * 0.02;

    orbitalBg.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  hero.addEventListener("mouseleave", () => {
    orbitalBg.style.transform = "translate(0, 0)";
  });
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images if any (for future use)
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}

// ============================================
// ANALYTICS HOOKS (for future integration)
// ============================================

// Track button clicks
document.querySelectorAll(".cta-button").forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonText = button.textContent;
    console.log("CTA Button clicked:", buttonText);
    // In production, send to analytics service
  });
});

// Track form submissions
document.addEventListener("submit", (e) => {
  const form = e.target;
  const email = form.querySelector('input[type="email"]')?.value;
  if (email) {
    console.log("Form submitted with email:", email);
    // In production, send to analytics service
  }
});

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================

// Add focus visible styles for keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    document.body.classList.add("keyboard-nav");
  }
});

document.addEventListener("mousedown", () => {
  document.body.classList.remove("keyboard-nav");
});

console.log("Orbiton landing page loaded successfully ✨");
