const apiurl = `http://api.weatherapi.com/v1/current.json?q="Richmond_Hills"&key=7c7e36ef01d94161bc2222432252905`

async function getCurrentWeather(){
    const apiRes = await fetch(apiurl)
    const result = await apiRes.json();

    console.log('API response: ', result)


    const currentTempInCelcius = result.current.temp_c;

    const city = result.location.name;

    const icon = result.current.condition.icon;
    const text = result.current.condition.text;
    

    console.log(currentTempInCelcius)

    const placeholder = document.querySelector('#weatherinfo')

    placeholder.innerHTML = `
        <p> Right now it's .... </p>
        <p>${currentTempInCelcius}C in ${city}!</p>

        <img src="${icon}" alt="${text}">
        <p>${text}</p>
        <p>${error}</p>
    `
}

getCurrentWeather();