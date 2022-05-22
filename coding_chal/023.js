const headerEle = document.querySelector("h1");

// * Output
const output = (countryObj) => {
  headerEle.insertAdjacentHTML(
    "afterbegin",
    `You're in ${countryObj.name}.<br>`
  );
};

// * Fetches the data from the Countries API of a particular country
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => {
      if (!response.ok) throw new Error("Country Not Found");
      return response.json();
    })
    .then((data) => output(data[0]))
    .catch((err) => console.log(`${err}`));
};

const whereAmI = function (lat, long) {
  // ? Reverse Geocoding
  fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
    .then((response) => response.json())
    .then((result) => {
      if (!Object.hasOwn(result, "city"))
        throw new Error(result.error.description);
      getCountryData(result.country);
    })
    .catch((err) => console.log(`${err}`));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
// whereAmI(00232, 13.381);
