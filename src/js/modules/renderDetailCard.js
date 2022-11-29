export function checkClickedCountry(e) {
  const apiLink = `https://restcountries.com/v3.1/all`,
    specifiedFields = `?fields=flags,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders,cca3`;

  fetch(`${apiLink}${specifiedFields}`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((data) => {
        if (e.name.common !== data.name.common) return;
        renderDetailCard(data);
      });
    })
    .catch((error) => console.error(error));

  function renderDetailCard(e) {
    const countryFlag = e.flags.png;
    const countryName = e.name.common;
    const countryNatiweName = getCurrencies(e.name.nativeName)?.[0].official;
    const countryPopulation = e.population;
    const countryRegion = e.region;
    const countrySubRegion = e.subregion;
    const countryCapital = e.capital;

    const countryTLD = e.tld;
    const countryCurrencies = getCurrencies(e.currencies)?.[0].name;
    const countryLanguages = getCurrencies(e.languages)?.join(", "); // array

    const stringToInject = `
      <a href="index.html">
      <svg class="arrow_left-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <title>arrow-left</title>
        <path fill="currentColor" d="M3.828 9l6.071-6.071-1.414-1.414-8.485 8.485 8.485 8.485 1.414-1.414-6.071-6.071h16.172v-2h-16.172z">
        </path></svg> Back </a>
     <div class="picture">
       <img src="${countryFlag}" alt="" />
     </div>
     <div class="card-country-detail">
       <h2>${countryName}</h2>
       <ul>
         <ul>
         <li>Native Name: <span>${countryNatiweName}</span></li>
           <li>Population: <span>${countryPopulation}</span></li>
           <li>Region: <span>${countryRegion}</span></li>
           <li>Sub Region: <span>${countrySubRegion}</span></li>
           <li>Capital: <span>${countryCapital}</span></li>
         </ul>
         <ul>
           <li>Top Level Domain: <span>${countryTLD}</span></li>
           <li>Currencies: <span>${countryCurrencies}</span></li>
           <li>Languages: <span>${countryLanguages}</span></li>
         </ul>
         <ul class="border-countries">
           <li>
             Border Countries:
             ${e.borders.map((border) => ` <a href="index.html?name=${border}">${border}</a> `).join("")}
           </li>
         </ul>
       </ul>
     </div>`;
    document.querySelector(".country-detail").innerHTML = stringToInject;
  }
}

function getCurrencies(x) {
  if (x) {
    const value = Object.values(x);
    return value;
  }
  return;
}
