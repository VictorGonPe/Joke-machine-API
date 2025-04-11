import { resetPoint, rateButtons } from "./score.js";
import { joke2, weather } from "./api-data.js";
import { callAPIJoke, callAPIWeather } from "./api-service.js";
import { blob } from "./dom.js";
import { eventNextJoke } from "./events.js";

resetPoint();
rateButtons();

blob?.classList.add('magicpattern');

callAPIJoke(joke2().url, joke2().header);

callAPIWeather(weather.url,weather.header);

eventNextJoke;



