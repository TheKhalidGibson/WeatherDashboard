let searchEl = document.querySelector("#search");
let searchList = document.querySelector("#search-list");
let searchResults = [];
let forecastContainer1 = document.querySelector("#forecastContainer1")
let forecastContainer2 = document.querySelector("#forecastContainer2")
let forecastContainer3 = document.querySelector("#forecastContainer3")
let forecastContainer4 = document.querySelector("#forecastContainer4")
let forecastContainer5 = document.querySelector("#forecastContainer5")
let forecastContainer6 = document.querySelector("#forecastContainer6")
let fiveDayForcast = [0,8,16,24,32]
const apiKey = "dd13cf1650c8484f942a9cd1a13f9ff5"

const searchInput = document.querySelector("input")
init();



// function renderSearchResults(){

//     for (let i = 0; i < searchResults.length; i++) {

//         let searchResults = searchResults[i];

//         let li = document.createElement("li");
//         li.textContent = searchResults;
//         li.setAttribute("data-index", i);


//         searchList.appendChild(li);


//     }

// }









// [i].value = localStorage.getItem("inputCity");


function renderSearchResults() {

    for (let i = 0; i < searchResults.length; i++) {

        let searchResults = searchResults[i];

        let li = document.createElement("li");
        li.textContent = searchResults;
        li.setAttribute("#search-list", i);


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


    let icon = "https://openweathermap.org/img/wn/___ICON___.png";
// searchList.addEventListener("click", function (event))

searchEl.addEventListener("click", function (event) {

    event.preventDefault()


    console.log(searchInput.value)
    console.log(event.target)


    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchInput.value}&limit=5&appid=${apiKey}`)
        .then(response => response.json())
        .then(citiesFound => {
            let cityFound = citiesFound[0];
            console.log(cityFound)
            return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${cityFound.lat}&lon=${cityFound.lon}&appid=${apiKey}&units=imperial`)
        })
        .then(response => response.json())
        .then(forecast => {


            let card1 = `<div class="card-header text-white bg-dark">
            ${forecast.city.name} ${dayjs().format('(M/D/YYYY)')}
          </div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">Temp: ${forecast.list[0].main.temp} °F</p>
            <p class="card-text">Wind: ${forecast.list[0].wind.speed} MPH</p>
            <p class="card-text">Humidity: ${forecast.list[0].main.humidity} %</p>
            </div>`

            //represents the first three hours out of 24
            //first card
            forecastContainer1.innerHTML += card1;
            console.log(forecast);
            console.log(forecast.list[0].main.temp);

           let card2 = `  <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${dayjs().format('(M/D/YYYY)')}</h5>
            <img src="https://openweathermap.org/img/w/${forecast.list[0].weather[0].icon}.png" class="card-subtitle mb-2 text-muted">
            <p class="card-text">Temp: ${forecast.list[0].main.temp} °F</p>
            <p class="card-text">Wind: ${forecast.list[0].wind.speed} MPH</p>
            <p class="card-text">Humidity: ${forecast.list[0].main.humidity} %</p>
            </div>
        </div>`;
           let card3 = `  <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${dayjs().add(1, "day").format('(M/D/YYYY)')}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${forecast.list[8].weather[0].icon}</h6>
            <p class="card-text">Temp: ${forecast.list[8].main.temp} °F</p>
            <p class="card-text">Wind: ${forecast.list[8].wind.speed} MPH</p>
            <p class="card-text">Humidity: ${forecast.list[8].main.humidity} %</p>
            </div>
        </div>`;
           let card4 = `  <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${dayjs().add(2, "day").format('(M/D/YYYY)')}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${forecast.list[16].weather[0].icon}</h6>
            <p class="card-text">Temp: ${forecast.list[16].main.temp} °F</p>
            <p class="card-text">Wind: ${forecast.list[16].wind.speed} MPH</p>
            <p class="card-text">Humidity: ${forecast.list[16].main.humidity} %</p>
            </div>
        </div>`;
           let card5 = `  <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${dayjs().format('(M/D/YYYY)')}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${forecast.list[24].weather[0].icon}</h6>
            <p class="card-text">Temp: ${forecast.list[24].main.temp} °F</p>
            <p class="card-text">Wind: ${forecast.list[24].wind.speed} MPH</p>
            <p class="card-text">Humidity: ${forecast.list[24].main.humidity} %</p>
            </div>
        </div>`;
           let card6 = `  <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${dayjs().format('(M/D/YYYY)')}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${forecast.list[32].weather[0].icon}</h6>
            <p class="card-text">Temp: ${forecast.list[32].main.temp} °F</p>
            <p class="card-text">Wind: ${forecast.list[32].wind.speed} MPH</p>
            <p class="card-text">Humidity: ${forecast.list[32].main.humidity} %</p>
            </div>
        </div>`;
            
        forecastContainer2.innerHTML += card2;
        forecastContainer3.innerHTML += card3;
        forecastContainer4.innerHTML += card4;
        forecastContainer5.innerHTML += card5;
        forecastContainer6.innerHTML += card6;
            //second card
            console.log(forecast.list[7]);
            

        // }).catch((err) => {
        //     console.log(err)
})


        

    // if (!coordinates.lat && !coordinates.lon) {
    //     console.log("coordinates are falsy")
    //     return null
    // }

});


function name(params) {

    for (let i = 0; i < fiveDayForcast.length; i++) {
        
        // let fiveDayForcast = forecast.list[]
        
    }
    
}

// this event listener saves the data

searchEl.addEventListener("click", function(event){

    if (event.target.matches("button")) {

        let citiesSearched = event.target.getAttribute("forecast")

        // localStorage.setItem()
        
    }
})


//make event listener for buttons

// if (event.target.matches("button")) {

//     let citySearched = event.target.getAttribute("inputCity")

//     console.log("city searched", typeof citySearched)

//     // let searchList = previousElementSibling

//     // console.log("search List", searchList.value)

//     localStorage.setItem(citySearched, searchList.value)

// }