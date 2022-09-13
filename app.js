const url = "https://api.openweathermap.org/data/2.5/"
const key = "bc982dc543c5cc603af06b9711e909cd"


const setQuery = (e) => {
if(e.keyCode == "13"){

    getResult(searchBar.value)
    searchBar.value = ""
}


}

    const getResult = (cityName) =>{
        let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
        fetch(query).then(response =>{ return response.json()}).then(showResult)
    }
         const showResult = (result) => {
    
        let city = document.querySelector("#city")
        city.innerHTML = `${result.name}, ${result.sys.country}`
        let createIcon = document.createElement("i")
        createIcon.innerHTML = ` <i class="fa-solid fa-flag"></i>`
        city.append(createIcon)
    
        let temp = document.querySelector("#temp")
        temp.innerHTML = `${Math.round(result.main.temp)}°C`

        let createTempIcon = document.createElement("i")
        createTempIcon.innerHTML = ` <i class="fa-solid fa-temperature-three-quarters"></i>` 
        temp.append(createTempIcon)
        
        let desc = document.querySelector("#desc")
        desc.innerHTML = `${result.weather[0].description}`


        let createDescIcon = document.createElement("i")
        createDescIcon.innerHTML = ` <i  class="fa-solid fa-cloud-sun-rain"></i>`
        desc.append(createDescIcon)
    
        let minmax = document.querySelector("#minmax")
        minmax.innerHTML = `En düşük hava sıcaklığı: ${Math.round(result.main.temp_min)}°C  <i class="fa-solid fa-temperature-arrow-down"></i> || En yüksek hava sıcaklığı: ${Math.round(result.main.temp_max)}°C  <i class="fa-solid fa-temperature-arrow-up"></i>  `

         }
         
const searchBar = document.querySelector("#inputWeather")
searchBar.addEventListener("keypress", setQuery)