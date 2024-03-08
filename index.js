fetch("./data.json")    .then(response => response.json())
.then(myMovies => loadMovies(myMovies));

function loadMovies(myMovies) {
// Find the element “col” in HTML
var CardMovie = document.getElementById("col");
var checkboxes = [];
var cards = [];
// Read every movie from the array
for (var i = 0; i < myMovies.length; i++) {
    let title = myMovies[i].title;
    let description = myMovies[i].description;
    let url = myMovies[i].image_url;
    let checkbox = "checkbox" + i.toString();
    let card = "card" + i.toString();
    // create a new HTML div division
    let AddCardMovie = document.createElement("div");
    // add class = “col” to new division for Bootstrap
    AddCardMovie.classList.add("col");
    // create Bootstrap card
    AddCardMovie.innerHTML = `
    <div id=${card} class="card shadow-sm">
    <img src=${url} class="card-img-top" alt="..."></img>
    <div class="card-body">
        <div class="row">
            <div class="col">
                <h5 class="card-title">${title}</h5>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <p class="card-text">${description}</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card review-card" id=${title}>
                    <div class="card-body">
                        <h6 class="card-title">Review</h6>
                        <p class="card-text">Insert review here</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
        </div>
    </div>
    `;
    // append new division
    CardMovie.appendChild(AddCardMovie);

    let cbox = document.getElementById(checkbox);
    checkboxes.push(cbox);
    let ccard = document.getElementById(card);
    cards.push(ccard);

    // explore console
    console.log(checkbox);
    console.log(card);

} // end of for
console.log(checkboxes);
console.log(cards);
// Add event listeners to checkboxes to toggle card visibility
checkboxes.forEach((checkboxParam, index) => {
    console.log(index);
    checkboxParam.addEventListener('change', () => {
        if (checkboxParam.checked) {
            cards[index].style.display = 'block'; // Show the card
        }
        else {
            cards[index].style.display = 'none'; // Hide the card
        }
    });
});
} // end of function