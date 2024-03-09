function getTable(tableName){
    fetch("./data.json")    
        .then(response => response.json())
        .then(games => games[tableName])
        .then(games => loadMovies(games));

        function loadMovies(games) {
            // Find the element “col” in HTML
            var CardMovie = document.getElementById("col");
            var cards = [];
            // Read every movie from the array
            for (var i = 0; i < games.length; i++) {
                let title = games[i].title;
                let review = games[i].review;
                let description = games[i].description;
                let url = games[i].image_url;
                let card = "card" + i.toString();
                // create a new HTML div division
                let AddCardMovie = document.createElement("div");
                // add class = “col” to new division for Bootstrap
                AddCardMovie.classList.add("col");
                // create Bootstrap card
                AddCardMovie.innerHTML = `
                <div id=${card} class="card shadow-sm">
                <img src=${url} class="card-img-top" alt="${title} image"></img>
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
                                    <p class="card-text" id = "${title}review">${review}</p>
                                    <input type="text" id="${title}text" placeholder="Enter your review">
                                    <button id="${title}">Add Review</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                    </div>
                </div>
                `;
                CardMovie.appendChild(AddCardMovie);

                let ccard = document.getElementById(card);
                cards.push(ccard);

                document.getElementById(title).addEventListener("click", function() {
                const title = event.target.id;
                document.getElementById(title+"review").innerText = document.getElementById(title+"text").value;
                })

            } // end of for

            
        } // end of function
}