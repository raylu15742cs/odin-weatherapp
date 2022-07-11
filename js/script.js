

async function getWeather(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2bea9dcd5f540fa40291b4106448558b&units=imperial`
      )
        .then(function(response) {
            return response.json()
        })
        .then(function(response){
            let maindiv = document.getElementById("main-content")

            let location = document.createElement("h1");
                location.innerHTML = response.name
            let maincontainer = document.createElement("div")
            maincontainer.classList.add("maincontainer")

            let leftside  = document.createElement("div")
            let weather = document.createElement("h3")
            weather.innerHTML = response.weather[0].main;
            let temp = document.createElement("h2")
            temp.innerHTML = `${response.main.temp}&#8457`;
            
            leftside.appendChild(weather)
            leftside.appendChild(temp)
            
            let rightside = document.createElement('div')

            let feelslike = document.createElement('p')
            feelslike.innerHTML = `FEELS LIKE : ${response.main.feels_like}&#8457`
            let wind= document.createElement('p');
            wind.innerHTML = `WIND : ${response.wind.speed}MPH`;
            let humidity = document.createElement('p');
            humidity.innerHTML = `HUMIDITY : ${response.main.humidity}%`;

            rightside.appendChild(feelslike);
            rightside.appendChild(wind);
            rightside.appendChild(humidity);

            maincontainer.appendChild(leftside)
            maincontainer.appendChild(rightside);
            maindiv.appendChild(location);
            maindiv.appendChild(maincontainer);
        })
}

let inputlistener = document.getElementById("cityname")
inputlistener.addEventListener("onsubmit", function() {
    console.log("hi")
})

getWeather('Rosemead')