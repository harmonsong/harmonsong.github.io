/**
 * Page animations: scroll-in, hero text reveal, seismic wave background
 */

document.addEventListener("DOMContentLoaded", function () {
  // =========================================================================
  // Scroll-in animations using IntersectionObserver
  // =========================================================================
  const scrollElements = document.querySelectorAll(".scroll-in");

  if (scrollElements.length > 0 && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    scrollElements.forEach((el) => observer.observe(el));
  }

  // =========================================================================
  // CV timeline stagger animation
  // =========================================================================
  const cvCards = document.querySelectorAll(".cv .card");
  if (cvCards.length > 0 && "IntersectionObserver" in window) {
    const cvObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            cvObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
    );

    cvCards.forEach((card, index) => {
      card.classList.add("scroll-in");
      card.style.transitionDelay = `${index * 0.1}s`;
      cvObserver.observe(card);
    });
  }

  // =========================================================================
  // Hero text animation (name reveal + subtitle slide-up)
  // =========================================================================
  const heroTitle = document.querySelector(".post-header .post-title");
  const heroSubtitle = document.querySelector(".post-header .desc");

  if (heroTitle) {
    // Split name into individual characters for letter-by-letter reveal
    const text = heroTitle.textContent.trim();
    const spans = heroTitle.querySelectorAll("span");

    // Only animate if it's the home page hero
    if (heroTitle.closest(".post") && !heroTitle.dataset.animated) {
      heroTitle.dataset.animated = "true";

      // If the title uses spans (first_name / last_name), animate them
      if (spans.length > 0) {
        heroTitle.classList.add("hero-title-animate");
        spans.forEach((span, i) => {
          span.style.opacity = "0";
          span.style.transform = "translateY(20px)";
          span.style.transition = `opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.15}s, transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.15}s`;
          span.style.display = "inline-block";

          setTimeout(() => {
            span.style.opacity = "1";
            span.style.transform = "translateY(0)";
          }, 100);
        });
      } else {
        // Single text node - animate the whole title
        heroTitle.style.opacity = "0";
        heroTitle.style.transform = "translateY(20px)";
        heroTitle.style.transition =
          "opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";

        setTimeout(() => {
          heroTitle.style.opacity = "1";
          heroTitle.style.transform = "translateY(0)";
        }, 100);
      }
    }
  }

  if (heroSubtitle) {
    heroSubtitle.style.opacity = "0";
    heroSubtitle.style.transform = "translateY(15px)";
    heroSubtitle.style.transition =
      "opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s, transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s";

    setTimeout(() => {
      heroSubtitle.style.opacity = "1";
      heroSubtitle.style.transform = "translateY(0)";
    }, 100);
  }

  // =========================================================================
  // Seismic wave background (subtle SVG canvas animation)
  // =========================================================================
  const heroSection = document.querySelector(".post-header");
  if (heroSection && document.querySelector("body.home-page")) {
    createSeismicWave(heroSection);
  }

  // Also try on the about page layout
  const aboutPost = document.querySelector(".post");
  if (aboutPost && window.location.pathname === "/") {
    createSeismicWave(aboutPost);
  }
});

/**
 * Creates an animated seismic wave SVG background
 */
function createSeismicWave(container) {
  // Don't add if already present
  if (container.querySelector(".seismic-bg")) return;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("seismic-bg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.setAttribute("preserveAspectRatio", "none");
  svg.style.cssText =
    "position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; opacity: 0.06; z-index: 0;";

  // Create multiple wave paths
  const numWaves = 5;
  const paths = [];

  for (let i = 0; i < numWaves; i++) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "currentColor");
    path.setAttribute("stroke-width", "1.5");
    path.style.color = "var(--global-theme-color)";
    svg.appendChild(path);
    paths.push(path);
  }

  container.style.position = "relative";
  container.insertBefore(svg, container.firstChild);

  // Ensure content is above the wave
  Array.from(container.children).forEach((child) => {
    if (child !== svg) {
      child.style.position = "relative";
      child.style.zIndex = "1";
    }
  });

  // Animate the waves
  let frame = 0;
  const speed = 0.005;

  function animate() {
    frame++;
    const width = svg.clientWidth || 800;
    const height = svg.clientHeight || 300;

    paths.forEach((path, i) => {
      const yBase = height * (0.3 + i * 0.12);
      const amplitude = 15 + i * 5;
      const frequency = 0.008 - i * 0.001;
      const phase = frame * speed + i * 0.8;

      let d = `M 0 ${yBase}`;
      for (let x = 0; x <= width; x += 8) {
        const y =
          yBase +
          Math.sin(x * frequency + phase) * amplitude +
          Math.sin(x * frequency * 2.5 + phase * 1.3) * (amplitude * 0.3);
        d += ` L ${x} ${y}`;
      }
      path.setAttribute("d", d);
    });

    requestAnimationFrame(animate);
  }

  // Respect reduced motion preference
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    animate();
  } else {
    // Static single frame for reduced motion
    frame = 100;
    const width = svg.clientWidth || 800;
    const height = svg.clientHeight || 300;
    paths.forEach((path, i) => {
      const yBase = height * (0.3 + i * 0.12);
      const amplitude = 15 + i * 5;
      const frequency = 0.008 - i * 0.001;
      let d = `M 0 ${yBase}`;
      for (let x = 0; x <= width; x += 8) {
        const y = yBase + Math.sin(x * frequency) * amplitude;
        d += ` L ${x} ${y}`;
      }
      path.setAttribute("d", d);
    });
  }
}
