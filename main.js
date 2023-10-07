function giveInfo() {
  alert(" oops can't display contents ATM!!");
  // break;
}

// Smooth scrolling to sections
document
  .querySelectorAll('a[href^="#"]')
  .forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
    });
  });

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

document.addEventListener("DOMContentLoaded", function () {
  function handleSubmit(event) {
      event.preventDefault();
      const name = document.querySelector('input[name="name"]').value;
      const email = document.querySelector('input[name="email"]').value;
      const message = document.querySelector('textarea[name="area"]').value;

      fetch("http://localhost:3000/send-email", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
      })
          .then((response) => response.json())
          .then((data) => {
              if (data.success) {
                  alert(data.message);
              } else {
                  alert("Failed to send email. Please try again later.");
              }
          })
          .catch((error) => {
              console.error(error);
              alert("An error occurred while sending the email. Please try again later.");
          });
  }

  const form = document.querySelector('form');
  form.addEventListener("submit", handleSubmit);
});
