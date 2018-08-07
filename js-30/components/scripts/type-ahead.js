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

function displayResults(wordToMatch, cities) {
  let results = findMatches(wordToMatch, cities);
  let resultsHtml = results.map(place => {
    // const regex = new RegExp(this.value, "gi");
    return `<li><span>${place.city}</span> ${place.state} Population: ${place.population}</li>`;
  }).join("");
  return resultsContainer.innerHTML = resultsHtml;
}

const resultsContainer = document.querySelector(".suggestions");
const input = document.querySelector(".search");

input.addEventListener("keyup", (e) => {
  let inputVal = e.target.value;
  if(inputVal.length > 0) {
    displayResults(inputVal, cities);
  } else {
    return resultsContainer.innerHTML = "";
  }
});