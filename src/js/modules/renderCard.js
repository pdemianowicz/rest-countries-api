export function renderCard(data) {
  document.querySelector(".country").innerHTML = "";
  data.forEach((e) => {
    const countryFlag = e.flags.png;
    const countryName = e.name.common;
    const countryPopulation = numberWithCommas(e.population);
    const countryRegion = e.region;
    const countryCapital = e.capital;

    const div = document.createElement("div");
    div.classList.add("card-country");

    const stringToInject = `
    <a href="index.html?name=${countryName}">
      <div class="card-country__picture">
      <img  src="${countryFlag}" alt="Flag ${countryName}" />
      </div>
      <div class="card-country__info">
          <h2>${countryName}</h2>
          <ul>
              <li>Population: <span class="card-country__info-population"> ${countryPopulation}</span></li>
              <li>Region:<span class="card-country__info-region"> ${countryRegion}</span></li>
              <li>Capital:<span class="card-country__info-capital"> ${countryCapital}</span></li>
           </ul>
      </div></a>`;

    div.innerHTML = stringToInject;
    document.querySelector(".country").appendChild(div);
  });
}

// function renderNav() {
//   const stringToInject = `
//   <form>
//   <label for="search">
//   <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
//     <title>search</title>
//     <path
//       fill="currentColor"
//       d="M31.715 28.953c0.381 0.381 0.381 0.999 0 1.381l-1.381 1.381c-0.382 0.381-1 0.381-1.381 0l-9.668-9.668c-0.105-0.105-0.175-0.229-0.222-0.361-1.983 1.449-4.418 2.314-7.063 2.314-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12 0 2.645-0.865 5.080-2.314 7.063 0.132 0.047 0.256 0.116 0.361 0.222l9.668 9.668zM12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8c0-4.418-3.582-8-8-8z"
//     ></path>
//   </svg>
//   <input id="search" type="text" placeholder="Search for a country..." />
// </label>
// <div class="country-filter">
//   <button class="toggle-btn" aria-controls="dropdown-content" aria-expanded="false">
//     Filter by Region
//     <svg class="arrow_down-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//       <title>arrow down</title>
//       <path fill="currentColor" d="M7.406 8.578l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z"></path>
//     </svg>
//   </button>
//   <ul class="dropdown-content" data-visible="false">
//     <li>All</li>
//     <li>Africa</li>
//     <li>Americas</li>
//     <li>Asia</li>
//     <li>Europe</li>
//     <li>Oceania</li>
//   </ul>
// </div>
// </form>`;

//   document.querySelector("nav").innerHTML = stringToInject;
// }

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
