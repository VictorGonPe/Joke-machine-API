import { getPoint, resetPoint, rateButtons } from "./score.js";
import { joke1, joke2, weather } from "./api-data.js";
import { callAPIJoke, callAPIJoke2, callAPIWeather, currentJoke } from "./api-service.js";
import { blob, buttons } from "./dom.js";

let reportJokes: { joke: string, score: number, date: string }[] = [];
type jokeData = { joke: string, score: number, date: string };
let data: jokeData;
let state = 1;
resetPoint();


blob?.classList.add('magicpattern2');

rateButtons();

callAPIJoke2(joke2.url, joke2.header);

//_______________________________________________________________________________


buttons.nextButton?.addEventListener('click', () => {
  if (!buttons.nextButton) return;

  buttons.nextButton.disabled = true;
  const score = getPoint();

  reportJokes.push({
    joke: currentJoke,
    score: score,
    date: new Date().toISOString()
  });

  console.log(reportJokes);

  resetPoint();

  if (state === 1) {
    callAPIJoke(joke1.url, joke1.header);
    blob?.classList.add('magicpattern');
    blob?.classList.remove('magicpattern2');
    state = 2;
  } else {
    callAPIJoke2(joke2.url, joke2.header);
    blob?.classList.add('magicpattern2');
    blob?.classList.remove('magicpattern');
    state = 1;
  }
  buttons.nextButton.disabled = false;
});


//callAPIWeather(weather.url,weather.header);

