const ul = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
const fragment_file = document.createDocumentFragment();

let i = 1;
for (const section of sections) {
  const sectionId = section.id;
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.href = "#${sectionId}";
  link.classList = "menu__link";
  link.textContent = "section " + i;
  link.addEventListener("click", function (evannt) {
    evannt.preventDefault();
    section.scrollIntoView({
      behavior: "smooth",
    });
  });
  li.appendChild(link);
  li.style.cssText =
    "color: black; opacity : 0.9; font-family: Arial, Helvetica, sans-serif;align-content:center ; text-transform: capitalize; font-style: italic ;";
  document.getElementById("navbar__list").style.cssText =
    "text-align : center;";
  fragment_file.appendChild(li);
  i++;
}
ul.appendChild(fragment_file);

function callback(e) {
  const actvLink = document.querySelector(`a[href="#${e[0].target.id}"]`);
  if (e[0].isIntersecting) {
    e[0].target.classList.add("your-active-class");
    actvLink.classList.add("active-lnk");
  } else {
    e[0].target.classList.remove("your-active-class");
    actvLink.classList.remove("active-lnk");
  }
}
const choice = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};
const tracker = new IntersectionObserver(callback, choice);

window.addEventListener("scroll", function () {
  for (const section of sections) {
    tracker.observe(section);
  }
});
