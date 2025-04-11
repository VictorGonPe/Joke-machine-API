import { buttons, blob } from "./dom";
import { getPoint, resetPoint } from "./score";
import { callAPIJoke, currentJoke } from "./api-service.js";
import { joke1, joke2 } from "./api-data.js";

let reportJokes: { joke: string, score: number, date: string }[] = [];
let state = 1;

export const eventNextJoke = buttons.nextButton?.addEventListener('click', () => {
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
        blob?.classList.add('magicpattern2');
        blob?.classList.remove('magicpattern');
        state = 2;
    } else {
        callAPIJoke(joke2().url, joke2().header);
        blob?.classList.add('magicpattern');
        blob?.classList.remove('magicpattern2');
        state = 1;
    }
    buttons.nextButton.disabled = false;
});