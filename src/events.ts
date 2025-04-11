import { buttons, pJoke, textWeather } from "./dom";

export function addJoke(datos: string) {
    if (pJoke) {
        pJoke.innerText = datos;
    }
}

export function addWeather(dataAPIWeather: string, iconUrl?: string) {
    if (textWeather) {
        textWeather.innerHTML = iconUrl
            ? `<img src="${iconUrl}" alt="icono del clima" style="width: 50px; vertical-align: middle;"> ${dataAPIWeather}`
            : dataAPIWeather;
    }
}