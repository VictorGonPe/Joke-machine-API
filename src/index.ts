import { addJoke, getPoint, resetPoint, dataWeather, rateButtons } from "./events.js";
import { config } from "./config"
console.log('JOKE KEY:', import.meta.env.VITE_API_KEY_JOKE);


let reportJokes: { joke: string, score: number, date: string }[] = [];
type jokeData = { joke: string, score: number, date: string };
let data: jokeData;
let currentJoke: string = '';
let state = 1;

const blob = document.querySelector('.blob');
blob?.classList.add('magicpattern');

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
}

const callAPIJoke2 = async () => {
  const random = (Math.random() * 99 + 1);

  try {
    const response = await fetch(`https://chandler-bing-jokes-api.p.rapidapi.com/jokes/${random}`, {
      headers: {
        'x-rapidapi-key': config.jokeKey,
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

}

callAPIJoke();

//_______________________________________________________________________________
const nextButton = document.querySelector('.btnNext') as HTMLButtonElement;

nextButton?.addEventListener('click', () => {
  if (!nextButton) return;

  nextButton.disabled = true;
  const score = getPoint();

  reportJokes.push({
    joke: currentJoke,
    score: score,
    date: new Date().toISOString()
  });

  resetPoint();
  if (state === 1) {
    callAPIJoke();
    blob?.classList.add('magicpattern');
    blob?.classList.remove('magicpattern2');
    //classTogle
  } else {
    callAPIJoke2();
    blob?.classList.add('magicpattern2');
    blob?.classList.remove('magicpattern');
  }
  nextButton.disabled = false;
});
//__________________________________________________________________________________

const callAPIWeather = async () => {
  try {
    const response = await fetch('https://open-weather13.p.rapidapi.com/city/barcelona/EN', {
      headers: {
        'x-rapidapi-key':config.weatherKey,
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

//callAPIWeather();

