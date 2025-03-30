import { addJoke, rate, getPoint, resetPoint } from "./events.js";

let reportJokes : {joke: string, score: number, date: string }[] = [];

rate();

const callAPI = async () => {
  try {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' }
    })
    const data = await response.json();
    const score =  getPoint();

    reportJokes.push({
      joke: data.joke,
      score: score,
      date: new Date().toISOString()
    });

    addJoke(data.joke);
    resetPoint();

    console.log(reportJokes);

  } catch (error) {
    console.log(error);
  }
}

callAPI();

const nextButton = document.querySelector('.btnNext');
nextButton?.addEventListener('click', callAPI);
