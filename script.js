console.log("hii maderchodo")

let apiKey = "ae3c6bc105d51d4ecb6125d3e78aec18";

let city_name = document.querySelector("#city-name");
let temp = document.querySelector("#temperature");
let wind = document.querySelector("#wind");
let uv = document.querySelector("#uv");

let city = "Jaipur";

async function checkWeather() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url).then((res)=>{
        console.log(res);
        return res.json();
    }).then((data)=>{
        console.log(data);
        city_name.innerText = data.name;

        temp.innerText = Math.round(data.main.temp) + "°"; 
        wind.innerText = data.wind.speed + " km/h";
    }).catch((err)=>{
        console.log("error aa gyaa"+err);
    });
    
}
checkWeather();