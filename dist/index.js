import { addJoke, rate, getPoint, resetPoint } from "./events.js";
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
