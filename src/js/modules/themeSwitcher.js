export function themeSwitcher() {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const themeSwitcher = document.querySelector(".toggle-theme");
  const body = document.body.classList;
  let theme = localStorage.getItem("theme");

  if (!theme) {
    if (prefersDarkScheme.matches) {
      body.add("dark-mode");
      theme = "dark-mode";
      localStorage.setItem("theme", theme);
    }
  } else {
    theme === "dark-mode" ? body.add("dark-mode") : body.remove("dark-mode");
  }

  themeSwitcher.addEventListener("click", () => {
    theme !== "dark-mode" ? (theme = "dark-mode") : (theme = "light");
    body.value !== "dark-mode" ? body.add("dark-mode") : body.remove("dark-mode");
    localStorage.setItem("theme", theme);
  });
}
