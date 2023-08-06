// The following fetch should be nested inside of an event listener

fetch("https://api.openweathermap.org/geo/1.0/direct?q=Dallas&limit=5&appid=dd13cf1650c8484f942a9cd1a13f9ff5")
    .then(response => response.json())
    .then(citiesFound => {
        let firstCity = citiesFound[0];
        console.log(firstCity.lat);
        console.log(firstCity.lon);

        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=dd13cf1650c8484f942a9cd1a13f9ff5`)

    })

    // This promise corresponds with the return fetch above.. once the return fetch is returned it will activate this promise
    
    .then(response => response.json())
    .then(data => {

        console.log(data);
    })