var typed = new Typed(".text", {
  strings: [
    "Java Full Stack Developer",
    "Spring Boot Developer",
    "Web Developer",
    "AWS Devops",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".heading", { origin: "top" });
ScrollReveal().reveal(".home-content", { origin: "left" });
ScrollReveal().reveal(".about-img", { origin: "left" });
ScrollReveal().reveal(".about-content", { origin: "right" });
ScrollReveal().reveal(".services-container", { origin: "bottom" });
ScrollReveal().reveal(".portfolio-container", { origin: "bottom" });
ScrollReveal().reveal(".contact p", { origin: "bottom" });
