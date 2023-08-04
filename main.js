function giveInfo() {
  alert(" oops can't display contents ATM!!");
  // break;
}

// Smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const btn = document.getElementById("btn1");
btn.addEventListener("click", prevent);

function prevent(e) {
  e.preventDefault();
}

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  })
);

// change color

const text = document.getElementsByTagName("input");

for (let i = 0; i < text.length; i++) {
  text[i].style.color = "white";
}

// contact me form
