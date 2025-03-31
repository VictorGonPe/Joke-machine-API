import { addJoke, rate, getPoint, resetPoint } from "./events.js";

let reportJokes: { joke: string, score: number, date: string }[] = [];
type jokeData = { joke: string, score: number, date: string };
let data : jokeData;

rate();


const callAPI = async () => {
  try {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' }
    })
    data = await response.json();

    addJoke(data.joke);

    console.log(reportJokes);
    //return data;

  } catch (error) {
    console.log(error);
  }
}

callAPI();

const nextButton = document.querySelector('.btnNext');
nextButton?.addEventListener('click', () => {

  const score = getPoint();

  reportJokes.push({
    joke: data.joke,
    score: score,
    date: new Date().toISOString()
  });

  resetPoint();
  callAPI();
});
