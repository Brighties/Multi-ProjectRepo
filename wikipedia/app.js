// define the wikipedia API URL
const url =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";

// let's select the DOM elements and store in a variable
const formElement = document.querySelector(".form");
const inputField = document.querySelector(".form-input");
const resultsElement = document.querySelector(".results");

// let's create functons that will handle the form submission
let handleSubmit = (e) => {
  e.preventDefault();
  const value = inputField.value;
  // if value does not exist
  if (!value) {
    resultsElement.innerHTML =
      "<div class='error'> Please enter a valid search term </div>";
    return;
  }

  // call the fetchpages function
  fetchPages(value);
};

// add event listener to the form element
formElement.addEventListener("submit", handleSubmit);

// create the fetch pages function =>  this is fetch pages based on the value of the input field
const fetchPages = async (searchTerm) => {
  resultsElement.innerText = "Loading. . .";
  try {
    const response = await fetch(`${url} + ${searchTerm}`);

    const data = await response.json();
    const results = data.query.search;
    if (results.length < 1) {
      resultsElement.innerHTML =
        '<div class="error"> No matching results. Please try again later </div>';
      return;
    }
    renderResults(results);
  } catch (error) {
    resultsElement.innerHTML =
      '<div class = "error"> There was an error fetching the results . . .</div>';
  }
};

const renderResults = (list) => {
  const cardsList = list
    .map((item) => {
      const { title, snippet, pageid } = item;
      return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
              <h4>${title}</h4>
              <p>
                ${snippet}
              </p>
            </a>`;
    })
    .join("");
  /**
    the join("") method is necessary to ensure that the HTML elements are concatenated 
    without any extra characters such as spaces between them.
     */
  resultsElement.innerHTML = `<div class="articles">
            ${cardsList}
          </div>`;
};
