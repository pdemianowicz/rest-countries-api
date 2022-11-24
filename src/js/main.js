import { themeSwitcher } from "./modules/themeSwitcher.js";
import { renderCard } from "./modules/renderCard.js";
// import { searchCountry } from "./modules/searchCountry.js";
import { renderDetailCard } from "./modules/renderDetailCard.js";

const btnFilter = document.querySelector(".toggle-btn");
const drowndownContent = document.querySelector(".dropdown-content");
themeSwitcher();

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    if (window.location.search.includes("?name=")) {
      const searchParams = new URLSearchParams(window.location.search);
      const countryCode = searchParams.get("name");
      document.querySelector("nav").remove();
      document.querySelector(".country").innerHTML = "";

      data.filter((item) => {
        if (item.name.common === countryCode) return renderDetailCard(item);
      });
    } else {
      renderCard(data);
      searchCountry(data);
      filterByRegion(data);
    }
  })
  .catch((error) => console.error(error));

function searchCountry(data) {
  const form = document.querySelector("form");
  const input = document.querySelector("#search");
  form.addEventListener("click", (e) => {
    e.preventDefault();

    input.addEventListener("keyup", () => {
      const searchText = input.value.toLowerCase();
      const matchedCountry = data.filter((item) => {
        const nameCountry = item.name.common.toLowerCase();
        if (nameCountry.indexOf(searchText) !== -1) return item;
      });
      renderCard(matchedCountry);
    });
  });
}

function filterByRegion(data) {
  const regions = document.querySelectorAll(".dropdown-content li");
  regions.forEach((e) => {
    e.addEventListener("click", (e) => {
      drowndownContent.setAttribute("data-visible", false);
      const filter = e.target.textContent;
      btnFilter.innerHTML = filterButton(filter);

      if (filter === "All") return renderCard(data);
      const filterData = data.filter((item) => item.region === filter);
      renderCard(filterData);
    });
  });
}

function filterButton(filter) {
  return `${filter}
  <svg class="arrow_down-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>arrow down</title>
    <path fill="currentColor" d="M7.406 8.578l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z"></path>
  </svg>`;
}

btnFilter.addEventListener("click", (e) => {
  const visibility = drowndownContent.getAttribute("data-visible");

  if (visibility !== "false") return drowndownContent.setAttribute("data-visible", false);
  return drowndownContent.setAttribute("data-visible", true);
});

document.addEventListener("click", (event) => {
  if (!drowndownContent.contains(event.target) && !btnFilter.contains(event.target)) {
    drowndownContent.setAttribute("data-visible", false);
  }
});
