// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ========= TYPE WRITER =========
const words = ['Developer.', 'Designer.'];
const textEl = document.getElementById('text');

let wordIndex = 0, charIndex = 0, isDeleting = false;

function type() {
  const word = words[wordIndex];
  textEl.textContent = word.substring(0, charIndex);

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  if (!isDeleting && charIndex === word.length) {
    setTimeout(() => isDeleting = true, 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  const speed = isDeleting ? 80 : 120;
  setTimeout(type, speed);
}

type();

// ========== SCROLL ICON FUNCTIONALITY ==========        
function scrollToNextSection() {
    const aboutSection = document.querySelector('.about-me');            
    if (aboutSection) {
        aboutSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}
// Hide scroll icon when scrolled past first section
window.addEventListener('scroll', () => {
    const scrollIcon = document.querySelector('.scroll-icon');
    const firstSectionHeight = window.innerHeight;
    
    // Hide when scrolled 20% past the first section
    if (window.scrollY > firstSectionHeight * 0.2) {
        scrollIcon.classList.add('hidden');
    } else {
        scrollIcon.classList.remove('hidden');
    }
});
// ========== END SCROLL ICON FUNCTIONALITY ==========

// Add some interactive particles effect
function createParticle() {
  const particle = document.createElement("div");
  particle.style.position = "fixed";
  particle.style.width = "2px";
  particle.style.height = "2px";
  particle.style.backgroundColor = "#00ff88";
  particle.style.pointerEvents = "none";
  particle.style.zIndex = "1";
  particle.style.borderRadius = "50%";
  particle.style.left = Math.random() * window.innerWidth + "px";
  particle.style.top = window.innerHeight + "px";
  particle.style.opacity = "0.7";

  document.body.appendChild(particle);

  const animation = particle.animate(
    [
      { transform: "translateY(0px)", opacity: 0.7 },
      {
        transform: `translateY(-${window.innerHeight + 100}px)`,
        opacity: 0,
      },
    ],
    {
      duration: 15000 + Math.random() * 10000,
      easing: "linear",
    }
  );

  animation.addEventListener("finish", () => {
    particle.remove();
  });
}

// Create particles occasionally
setInterval(createParticle, 3000);