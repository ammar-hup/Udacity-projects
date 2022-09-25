// Global Variables

const ul = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
const fragment = document.createDocumentFragment();

// Scroll to section on link click

function buildNavigationMenu() {
  sections.forEach(function (section) {
    const sectionId = section.id;
    const sectionTitle = section.getAttribute("data-nav");
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.setAttribute("href", "#" + "sectionId");
    // link.href = '#${sectionId}'
    link.setAttribute("class", "menu__link");
    link.textContent = sectionTitle;
    link.addEventListener("click", function (e) {
      e.preventDefault();
      section.scrollIntoView({
        behavior: "smooth",
      });
    });
    li.appendChild(link);
    li.style.cssText =
      "color: black; opacity : 0.9; font-family: Arial, Helvetica, sans-serif;align-content:center ; text-transform: capitalize; font-style: italic ;";
    document.getElementById("navbar__list").style.cssText =
      "text-align : center;";
    fragment.appendChild(li);
  });
  ul.appendChild(fragment);
}
window.addEventListener("load", buildNavigationMenu);

// make a shadow for section background

function callback(entries) {
  const actvLink = document.querySelector(`a[href="#${entries[0].target.id}"]`);
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("your-active-class");
    actvLink.classList.add("active-lnk");
  } else {
    entries[0].target.classList.remove("your-active-class");
    actvLink.classList.remove("active-lnk");
  }
}
const choice = {
  root: null,
  rootMargin: "0px",
  threshold: 0.68,
};
const tracker = new IntersectionObserver(callback, choice);

window.addEventListener("scroll", function () {
  for (const section of sections) {
    tracker.observe(section);
  }
});
