const navId = document.getElementById("nav_menu"),
  ToggleBtnId = document.getElementById("toggle_btn"),
  CloseBtnId = document.getElementById("close_btn");

// ==== SHOW MENU ==== //
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});

// ==== HIDE MENU ==== //
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
});

// Get the About link element
const aboutLink = document.getElementById("about");

// Add a click event listener to the About link
aboutLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior

  // Get the target section element (About section)
  const aboutSection = document.getElementById("aboutSection");

  // Scroll to the About section using smooth behavior
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

// Get the Project link element
const projectLink = document.getElementById("project");

projectLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior

  const projectSection = document.getElementById("projectSection");

  projectSection.scrollIntoView({ behavior: "smooth" });
});

// Get the Skills link element
const skillsLink = document.getElementById("skills");

skillsLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior

  const skillsSection = document.getElementById("skillsSection");

  skillsSection.scrollIntoView({ behavior: "smooth" });
});

// ==== Animate on Scroll Initialize  ==== //
AOS.init();

// ==== GSAP Animations ==== //
// ==== LOGO  ==== //
gsap.from(".logo", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});
// ==== NAV-MENU ==== //
gsap.from(".nav_menu_list .nav_menu_item", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
  stagger: 0.3,
});
// ==== TOGGLE BTN ==== //
gsap.from(".toggle_btn", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
});
// ==== MAIN HEADING  ==== //
gsap.from(".main-heading", {
  opacity: 0,
  y: 30,
  delay: 2.4,
  duration: 1,
});
// ==== INFO TEXT ==== //
gsap.from(".info-text", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});
// ==== SPLASH TEXT ==== //
gsap.from(".splash-text", {
  opacity: 0,
  y: 20,
  delay: 3.2,
  duration: 1,
});
// ==== SPLASH TEXT TYPED ==== //
gsap.from("#flavour-text", {
  opacity: 0,
  y: 20,
  delay: 3.2,
  duration: 1,
});
// ==== CTA BUTTONS ==== //
gsap.from(".btn_wrapper", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});
// ==== TEAM IMAGE ==== //
gsap.from(".team_img_wrapper img", {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 1,
});
