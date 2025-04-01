import { addJoke, rate, getPoint, resetPoint, dataWeather } from "./events.js";
let reportJokes = [];
let data;
rate();
const callAPIJoke = async () => {
    try {
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: { Accept: 'application/json' }
        });
        data = await response.json();
        addJoke(data.joke);
        console.log(reportJokes);
    }
    catch (error) {
        console.log(error);
    }
};
callAPIJoke();
const nextButton = document.querySelector('.btnNext');
nextButton === null || nextButton === void 0 ? void 0 : nextButton.addEventListener('click', () => {
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
    var _a, _b, _c;
    try {
        const response = await fetch('https://open-weather13.p.rapidapi.com/city/barcelona/EN', {
            headers: {
                'x-rapidapi-key': '261147ba53mshe0fbdc7a3104a16p15cc6ejsnbc8601f212b6',
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
            message: console.log('Error to read the API', err),
            data: null
        };
    }
};
fetchWeather();
