import { addJoke, getPoint, resetPoint, dataWeather, rateButtons } from "./events.js";
import { API_KEY_WEATHER } from "./api-key.js";
import { API_KEY_JOKE } from "./api-key.js";

let reportJokes: { joke: string, score: number, date: string }[] = [];
type jokeData = { joke: string, score: number, date: string };
let data: jokeData;
let currentJoke: string = '';
let state = 1;
let random = (Math.random() * 98 + 1);

rateButtons();


const callAPIJoke = async () => {

  try {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' }
    })
    data = await response.json();
    currentJoke = data.joke;
    addJoke(currentJoke);
    console.log(reportJokes);

  } catch (error) {
    console.log(error);
  }
  state = 2;
  console.log(`primer chiste: ${state}`);

}

const callAPIJoke2 = async () => {

  try {
    const response = await fetch(`https://chandler-bing-jokes-api.p.rapidapi.com/jokes/99`, {
      headers: {
        'x-rapidapi-key': API_KEY_JOKE,
        'x-rapidapi-host': 'chandler-bing-jokes-api.p.rapidapi.com'
      }
    });
    const data = await response.json();
    currentJoke = data.joke;
    addJoke(currentJoke);
    console.log(reportJokes);

  } catch (error) {
    console.error('Error to read the API Joke 2', error);
    return {
      status: 'error',
      message: 'Error to read the API Joke 2',
      data: null
    };
  }
  state = 1;
  console.log(`segundo chiste: ${state}`);
}

//callAPIJoke();

//_______________________________________________________________________________
const nextButton = document.querySelector('.btnNext');
nextButton?.addEventListener('click', () => {

  const score = getPoint();

  reportJokes.push({
    joke: currentJoke,
    score: score,
    date: new Date().toISOString()
  });

  resetPoint();
  if (state === 1) {
    callAPIJoke();
  } else {
    callAPIJoke2();
  }
});
//__________________________________________________________________________________

const fetchWeather = async () => {
  try {
    const response = await fetch('https://open-weather13.p.rapidapi.com/city/barcelona/EN', {
      headers: {
        'x-rapidapi-key': API_KEY_WEATHER,
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
      }
    });
    const data = await response.json();
    const temp = data.main?.temp;
    const iconCode = data.weather[0]?.icon;
    const urlIcon = `https://openweathermap.org/img/wn/${iconCode}@2x.png`

    if (temp !== undefined && iconCode) {
      dataWeather(`  |  ${((temp - 32) * 5 / 9).toFixed(2)}°C`, urlIcon);
    } else {
      dataWeather('No se pudo obtener el clima actual');
    }

  } catch (err) {
    return {
      status: 'error',
      message: console.log('Error to read the API Weather', err),
      data: null
    }
  }
}

//fetchWeather();

