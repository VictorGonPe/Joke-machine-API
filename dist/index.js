import { addJoke, getPoint, resetPoint, dataWeather, rateButtons } from "./events.js";
import { API_KEY_WEATHER } from "./api-key.js";
import { API_KEY_JOKE } from "./api-key.js";
let reportJokes = [];
let data;
let currentJoke = '';
let state = 1;
let random = (Math.random() * 200 + 1);
rateButtons();
const callAPIJoke = async () => {
    try {
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: { Accept: 'application/json' }
        });
        data = await response.json();
        currentJoke = data.joke;
        addJoke(currentJoke);
        console.log(reportJokes);
    }
    catch (error) {
        console.log(error);
    }
    state = 2;
    console.log(`primer chiste: ${state}`);
};
const callAPIJoke2 = async () => {
    try {
        const response = await fetch(`https://chandler-bing-jokes-api.p.rapidapi.com/jokes/${random.toFixed(0)}`, {
            headers: {
                'x-rapidapi-key': API_KEY_JOKE,
                'x-rapidapi-host': 'chandler-bing-jokes-api.p.rapidapi.com'
            }
        });
        const data = await response.json();
        currentJoke = data.joke;
        addJoke(currentJoke);
        console.log(reportJokes);
    }
    catch (error) {
        console.error('Error to read the API Joke 2', error);
        return {
            status: 'error',
            message: 'Error to read the API Joke 2',
            data: null
        };
    }
    state = 1;
    console.log(`segundo chiste: ${state}`);
};
//callAPIJoke();
//_______________________________________________________________________________
const nextButton = document.querySelector('.btnNext');
nextButton === null || nextButton === void 0 ? void 0 : nextButton.addEventListener('click', () => {
    const score = getPoint();
    reportJokes.push({
        joke: currentJoke,
        score: score,
        date: new Date().toISOString()
    });
    resetPoint();
    if (state === 1) {
        callAPIJoke();
    }
    else {
        callAPIJoke2();
    }
});
//__________________________________________________________________________________
const fetchWeather = async () => {
    var _a, _b, _c;
    try {
        const response = await fetch('https://open-weather13.p.rapidapi.com/city/barcelona/EN', {
            headers: {
                'x-rapidapi-key': API_KEY_WEATHER,
                'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
            }
        });
        const data = await response.json();
        const temp = (_a = data.main) === null || _a === void 0 ? void 0 : _a.temp;
        const climaticCondition = (_b = data.weather[0]) === null || _b === void 0 ? void 0 : _b.main;
        const iconCode = (_c = data.weather[0]) === null || _c === void 0 ? void 0 : _c.icon;
        const urlIcon = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        if (temp !== undefined && climaticCondition && iconCode) {
            dataWeather(`${climaticCondition} | ${((temp - 32) * 5 / 9).toFixed(2)}°C`, urlIcon);
        }
        else {
            dataWeather('No se pudo obtener el clima actual');
        }
    }
    catch (err) {
        return {
            status: 'error',
            message: console.log('Error to read the API Weather', err),
            data: null
        };
    }
};
fetchWeather();
