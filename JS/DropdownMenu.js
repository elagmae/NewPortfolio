const btn = document.getElementById("menu-btn");
const dropdown = document.querySelector("nav-dropdown");

let isOpen = false;

function openMenu() {
  isOpen = true;
  dropdown.classList.add("active");
}

function closeMenu() {
  isOpen = false;
  dropdown.classList.remove("active");
}

// toggle bouton
btn.addEventListener("click", (e) => {
  e.stopPropagation(); // important pour éviter fermeture immédiate
  isOpen ? closeMenu() : openMenu();
});

// clic sur les liens = fermeture
dropdown.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

// clic dehors = fermeture
document.addEventListener("click", (e) => {
  const clickedInsideMenu = dropdown.contains(e.target);
  const clickedButton = btn.contains(e.target);

  if (!clickedInsideMenu && !clickedButton) {
    closeMenu();
  }
});