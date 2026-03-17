const btn = document.querySelector(".btn-toggle-theme");

// detect system theme correctly
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

let currentTheme = localStorage.getItem("theme") || preferredTheme;

function setTheme(theme) {
  localStorage.setItem("theme", theme);

  document.body.classList.remove("light-theme", "dark-theme");
  document.body.classList.add(theme + "-theme");

  currentTheme = theme;
}

// set initial theme
setTheme(currentTheme);

// toggle on click
btn.addEventListener("click", function () {
  setTheme(currentTheme === "light" ? "dark" : "light");
});
