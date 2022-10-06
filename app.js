//creating variables
//starting with the elements we will need to create the navbar
const ulNav = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const main = document.querySelector("main");

//main function that works as the start button
function start() {
  // link the navbar with the sections
  sections.forEach((section) => {
    const sId = section.id;
    const linkList = `<li><a href="#${sId}" id="${sId}" data-nav="${sId}" class="menu__link"> ${sId} </a></li>`;
    ulNav.insertAdjacentHTML("beforeend", linkList);
    const link = document.getElementById(sId);
    ulNav.style.cssText = `text-align : center; opacity : 0.9; font-family: Arial, Helvetica, sans-serif;`;
    // Scroll to anchor ID using scrollinto event
    link.addEventListener("click", (event) => {
      event.preventDefault();
      // smooth scrolling function to add the feature of smooth scrolling
      section.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
function callback(e) {
  // Set sections as active
  // here we selected the item of the navbar
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
  threshold: 0.5,
};
const tracker = new IntersectionObserver(callback, choice);
// Add active class to section
window.addEventListener("scroll", function () {
  for (const section of sections) {
    tracker.observe(section);
  }
});

// make a sticky button to go on the top of the page on click
let mybtn = `<button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>`;
// create the button and add it to the page

main.insertAdjacentHTML("beforeend", mybtn);
let mybutton = document.getElementById("myBtn");
// style the button eith css
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
// the function to scroll to the top
window.onscroll = function () {
  scrollFunction();
};
// if we scroll down 20px of the page  the button will appear
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

//the function that starts the page and i but it at the end of the js file
// ,so all the function the first thing the browser read
start();
