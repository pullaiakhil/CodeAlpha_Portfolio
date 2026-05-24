// =====================================
// ACTIVE NAVBAR
// =====================================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop =
    section.offsetTop;

    if (
      pageYOffset >=
      sectionTop - 200
    ) {

      current =
      section.getAttribute("id");

    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (
      link.getAttribute("href")
      .includes(current)
    ) {

      link.classList.add("active");

    }

  });

});


// =====================================
// SCROLL REVEAL
// =====================================

const revealElements =
document.querySelectorAll(

  ".glass-card, .skill-card, .project-card, .cert-card, .hero-left, .hero-right"

);

function revealOnScroll() {

  revealElements.forEach((element) => {

    const windowHeight =
    window.innerHeight;

    const revealTop =
    element.getBoundingClientRect().top;

    const revealPoint = 100;

    if (
      revealTop <
      windowHeight - revealPoint
    ) {

      element.classList.add("show");

    }

  });

}

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();


// =====================================
// SMOOTH SCROLL
// =====================================

document.querySelectorAll(
  'a[href^="#"]'
)

.forEach(anchor => {

  anchor.addEventListener(
    "click",

    function (e) {

      e.preventDefault();

      document.querySelector(
        this.getAttribute("href")
      )

      .scrollIntoView({

        behavior: "smooth"

      });

    }

  );

});


// =====================================
// BACK TO TOP BUTTON
// =====================================

const topBtn =
document.createElement("button");

topBtn.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

topBtn.classList.add("top-btn");

topBtn.style.position = "fixed";

topBtn.style.bottom = "30px";

topBtn.style.right = "30px";

topBtn.style.width = "60px";

topBtn.style.height = "60px";

topBtn.style.border = "none";

topBtn.style.borderRadius = "50%";

topBtn.style.cursor = "pointer";

topBtn.style.fontSize = "22px";

topBtn.style.color = "white";

topBtn.style.background =
"linear-gradient(45deg,#00d9ff,#8b5cf6)";

topBtn.style.boxShadow =
"0 0 25px rgba(0,217,255,0.6)";

topBtn.style.display = "none";

topBtn.style.zIndex = "999";

topBtn.style.transition = "0.4s";

window.addEventListener("scroll", () => {

  if (window.scrollY > 400) {

    topBtn.style.display = "block";

  }

  else {

    topBtn.style.display = "none";

  }

});

topBtn.addEventListener("mouseenter", () => {

  topBtn.style.transform =
  "scale(1.1) translateY(-5px)";

});

topBtn.addEventListener("mouseleave", () => {

  topBtn.style.transform =
  "scale(1)";

});

topBtn.addEventListener("click", () => {

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

});


// =====================================
// FLOATING PARTICLES
// =====================================

const particleCount = 40;

for (let i = 0; i < particleCount; i++) {

  const particle =
  document.createElement("span");

  particle.classList.add("particle");

  document.body.appendChild(particle);

  const size =
  Math.random() * 6 + 2;

  particle.style.width =
  `${size}px`;

  particle.style.height =
  `${size}px`;

  particle.style.left =
  `${Math.random() * 100}vw`;

  particle.style.top =
  `${Math.random() * 100}vh`;

  particle.style.position =
  "fixed";

  particle.style.background =
  "rgba(255,255,255,0.25)";

  particle.style.borderRadius =
  "50%";

  particle.style.pointerEvents =
  "none";

  particle.style.zIndex = "-1";

  particle.style.animation =
  `floatParticle ${
    Math.random() * 12 + 8
  }s linear infinite`;

}


// =====================================
// MOUSE GLOW EFFECT
// =====================================

const cursorGlow =
document.createElement("div");

document.body.appendChild(cursorGlow);

cursorGlow.style.width = "250px";

cursorGlow.style.height = "250px";

cursorGlow.style.position = "fixed";

cursorGlow.style.background =
"radial-gradient(circle, rgba(0,217,255,0.25), transparent 70%)";

cursorGlow.style.borderRadius = "50%";

cursorGlow.style.pointerEvents = "none";

cursorGlow.style.zIndex = "-1";

cursorGlow.style.transform =
"translate(-50%, -50%)";

document.addEventListener("mousemove", (e) => {

  cursorGlow.style.left =
  e.clientX + "px";

  cursorGlow.style.top =
  e.clientY + "px";

});


// =====================================
// TYPING EFFECT
// =====================================

const typingElement =
document.querySelector(".hero-tag");

const texts = [

  "✦ FRONTEND DEVELOPER",

  "✦ AI ENTHUSIAST",

  "✦ UI/UX DESIGNER",

  "✦ FUTURE SOFTWARE ENGINEER"

];

let textIndex = 0;

let charIndex = 0;

function typeEffect() {

  if (charIndex < texts[textIndex].length) {

    typingElement.textContent +=
    texts[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 80);

  }

  else {

    setTimeout(eraseEffect, 1500);

  }

}

function eraseEffect() {

  if (charIndex > 0) {

    typingElement.textContent =
    texts[textIndex].substring(
      0,
      charIndex - 1
    );

    charIndex--;

    setTimeout(eraseEffect, 40);

  }

  else {

    textIndex++;

    if (textIndex >= texts.length) {

      textIndex = 0;

    }

    setTimeout(typeEffect, 300);

  }

}

typingElement.textContent = "";

typeEffect();


// =====================================
// HERO PARALLAX
// =====================================

window.addEventListener("mousemove", (e) => {

  const hero =
  document.querySelector(".glass-circle");

  const x =
  (window.innerWidth / 2 - e.pageX) / 40;

  const y =
  (window.innerHeight / 2 - e.pageY) / 40;

  hero.style.transform =
  `rotateY(${x}deg) rotateX(${y}deg)`;

});


// =====================================
// EXTRA ANIMATION CSS
// =====================================

const style =
document.createElement("style");

style.innerHTML = `

@keyframes floatParticle {

  0%{
    transform:translateY(0px);
    opacity:0;
  }

  50%{
    opacity:1;
  }

  100%{
    transform:translateY(-120vh);
    opacity:0;
  }

}

.show{

  opacity:1 !important;

  transform:
  translateY(0px)
  scale(1) !important;

  transition:1s ease;
}

.glass-card,
.skill-card,
.project-card,
.cert-card,
.hero-left,
.hero-right{

  opacity:0;

  transform:
  translateY(50px)
  scale(0.95);
}

.active{
  color:#00d9ff !important;
}

.skill-card:hover,
.project-card:hover,
.cert-card:hover,
.glass-card:hover{

  transform:
  translateY(-15px)
  scale(1.03);

  transition:0.4s;
}

`;

document.head.appendChild(style);
