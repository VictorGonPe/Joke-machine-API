import { addJoke, rate, getPoint, resetPoint, dataWeather } from "./events.js";

let reportJokes: { joke: string, score: number, date: string }[] = [];
type jokeData = { joke: string, score: number, date: string };
let data: jokeData;

rate();


const callAPIJoke = async () => {
  try {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' }
    })
    data = await response.json();

    addJoke(data.joke);

    console.log(reportJokes);

  } catch (error) {
    console.log(error);
  }
}

callAPIJoke();


const nextButton = document.querySelector('.btnNext');
nextButton?.addEventListener('click', () => {

  const score = getPoint();

  reportJokes.push({
    joke: data.joke,
    score: score,
    date: new Date().toISOString()
  });

  resetPoint();
  callAPIJoke();
});


const fetchWeather = async () => {
  try {
    const responseWeather= await fetch('https://open-weather13.p.rapidapi.com/city/barcelona/ES', {
      headers: {
        'x-rapidapi-key': '261147ba53mshe0fbdc7a3104a16p15cc6ejsnbc8601f212b6',
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
      }
    });
    const weatherData = await responseWeather.json();
    console.log('weatherData:', weatherData);

    const temp = weatherData.main?.temp;
    const feels = weatherData.main?.feels_like;
    const condition = weatherData.weather?.[0]?.main;

    if (temp !== undefined && condition) {
      //const icon = getWeatherIcon(condition);
      //dataWeather(`${icon} ${condition} | ${((temp - 32)* 5 / 9).toFixed(2)}°C`);
      dataWeather(`${condition} | ${((temp - 32)* 5 / 9).toFixed(2)}°C`);
    } else {
      dataWeather('No se pudo obtener el clima actual');
    }

  } catch (err) {
    return {
      status: 'error',
      message: console.log('Error to read the API', err),
      data: null
    }
  }
}

//fetchWeather();

