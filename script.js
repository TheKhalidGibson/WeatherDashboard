fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=dd13cf1650c8484f942a9cd1a13f9ff5")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })


fetch("https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=dd13cf1650c8484f942a9cd1a13f9ff5")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })