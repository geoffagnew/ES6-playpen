const cities = [];
const cityData = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

fetch(cityData)
  .then(res => res.json())
  .then(data => cities.push(...data))
  .catch(error => console.log(error));  

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayResults() {
  const results = findMatches(this.value, cities);
  if(this.value.length > 0) {
    const resultsHtml = results.map(place => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(regex, `<span class=\"highlight\">${this.value}</span>`);
      const stateName = place.state.replace(regex, `<span class=\"highlight\">${this.value}</span>`);
      return `
        <li>
          <strong>${cityName}</strong> 
          ${stateName} 
          <div class="population">Population: ${place.population}</div>
        </li>
      `;
    }).join("");
    return resultsContainer.innerHTML = resultsHtml;
  } else {
    return resultsContainer.innerHTML = "";
  }
}

const resultsContainer = document.querySelector(".suggestions");
const input = document.querySelector(".search");

input.addEventListener("keyup", displayResults);