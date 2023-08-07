let searchEl = document.querySelector("#search");
let searchList = document.querySelector("#search-list");
let searchResults = [];
const apiKey = "dd13cf1650c8484f942a9cd1a13f9ff5"

const searchInput = document.querySelector("input")
// function renderSearchResults(){

    //     for (let i = 0; i < searchResults.length; i++) {
        
        //         let searchResults = searchResults[i];

//         let li = document.createElement("li");
//         li.textContent = searchResults;
//         li.setAttribute("data-index", i);


//         searchList.appendChild(li);


//     }

// }


function fetchCoordinates(searchQuery = "") {

    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=5&appid=${apiKey}`)
        .then(response => response.json())
        .then(citiesFound => {
            let firstCity = citiesFound[0];
            console.log(firstCity.lat);
            console.log(firstCity.lon);

            return firstCity

        }).catch((err) => {
            console.log(err)
        })
}

// This promise corresponds with the return fetch above.. once the return fetch is returned it will activate this promise
function fetchCurrentWeather(params = { lat: "0", lon: "0" }) {


    fetch(`https://api.openweathermap.org/geo/1.0/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        .then(response => response.json())
        .then(citiesFound => {

            console.log(citiesFound);
        })
}


// [i].value = localStorage.getItem("inputCity");

searchEl.addEventListener("click", function (event) {

    event.preventDefault()

    
    console.log(searchInput.value)
    console.log(event.target)

    const coordinates = fetchCoordinates(searchInput.value)
    console.log(coordinates)

    if (!coordinates.lat && !coordinates.lon) {
        console.log("coordinates are falsy")
        return null
    }

    
    const currentWeather = fetchCurrentWeather(coordinates)
    console.log()
    
    
    
    
    
    if (event.target.matches("button")) {
        
        let citySearched = event.target.getAttribute("inputCity")

            console.log("city searched", typeof citySearched)
        
        let searchList = previousElementSibling

            console.log("search List", searchList.value)
        
        localStorage.setItem(citySearched, searchList.value)
        
    }
    
});


function renderSearchResults(){
    
    for (let i = 0; i < searchResults.length; i++) {
        
        let searchResults = searchResults[i];
        
        let li = document.createElement("li");
        li.textContent = searchResults;
        li.setAttribute("data-index", i);
        
        
        searchList.appendChild(li);
        
        
    }
    
}


function init() {

    let storedSearchResults = JSON.parse(localStorage.getItem("searchResults"));

    if (storedSearchResults !== null) {

        searchResults = storedSearchResults;
        
    }

    renderSearchResults();
}

    // The following fetch should be nested inside of an event listener



// searchList.addEventListener("click", function (event))