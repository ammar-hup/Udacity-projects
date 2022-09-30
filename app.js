const ulNav = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const main = document.querySelector("main");

for (const section of sections) {
  const sId = section.id;
  const linkList = `<li><a href="#${sId}" data-nav="${sId}" class="menu__link"> ${sId} </a></li>`;
  ulNav.insertAdjacentHTML("beforeend", linkList);
  ulNav.style.cssText = `text-align : center; opacity : 0.9; font-family: Arial, Helvetica, sans-serif;`;
}

let mybtn = `<button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>`;

main.insertAdjacentHTML("beforeend", mybtn);
let mybutton = document.getElementById("myBtn");
mybutton.style.cssText = `display: none;
position: fixed ;
bottom: 10px;
right: 20px;
background-color: rgb(67 97 116 / 41%);
color: white;
cursor: pointer;
padding: 13px;
border-radius: 9px;
font-size: 17px;`;

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
}

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
  threshold: 0.4,
};
const tracker = new IntersectionObserver(callback, choice);

window.addEventListener("scroll", function () {
  for (const section of sections) {
    tracker.observe(section);
  }
});
