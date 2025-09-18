// Toggle hamburger menu
function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  menu.classList.toggle("open");
  menu.classList.toggle("hidden");
}

// Counter animation for stats
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    let current = +counter.innerText.replace("+", "");
    const increment = target / 200; // speed

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 15);
    } else {
      counter.innerText = target >= 1000 ? target.toLocaleString() + "+" : target;
    }
  };
  updateCounter();
});


// Toggle hamburger menu
// document.getElementById("menu-btn").addEventListener("click", () => {
//   document.getElementById("menu").classList.toggle("hidden");
// });


