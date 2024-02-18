function toggleMenu() {
    var menu = document.querySelector('.right-nav');
    menu.classList.toggle('show');
}

var typeData = new Typed(".role", {
    strings: [
      "Empower yourself with tech",
      "Get In Demand Skills",
      "Upskill yourself with new technologies",
      "Gain Practical Training",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });