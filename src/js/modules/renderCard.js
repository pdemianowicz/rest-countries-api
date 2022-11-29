export function renderCard(country) {
  document.querySelector(".country").innerHTML = "";
  country.forEach((e) => {
    const div = document.createElement("div");
    div.classList.add("card-country");

    const stringToInject = `
    <a href="index.html?name=${e.name.common}">
      <div class="card-country__picture">
      <img  src="${e.flags.png}" alt="Flag ${e.name.common}" />
      </div>
      <div class="card-country__info">
          <h2>${e.name.common}</h2>
          <ul>
              <li>Population: <span class="card-country__info-population"> ${numberWithCommas(e.population)}</span></li>
              <li>Region:<span class="card-country__info-region"> ${e.region}</span></li>
              <li>Capital:<span class="card-country__info-capital"> ${e.capital}</span></li>
           </ul>
      </div></a>`;

    div.innerHTML = stringToInject;
    document.querySelector(".country").appendChild(div);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
