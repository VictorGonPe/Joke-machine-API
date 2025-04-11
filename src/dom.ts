export const buttons = {
    btnOneStar: document.querySelector('.btnOne'),
    btnTwoStar: document.querySelector('.btnTwo'),
    btnTreeStar: document.querySelector('.btnTree'),
    nextButton: document.querySelector('.btnNext') as HTMLButtonElement
}

export const pJoke = document.getElementById('joke');
export const textWeather = document.querySelector('.weather');
export const blob = document.querySelector('.blob');

export function addJokeText(datos: string) {
    if (pJoke) {
        pJoke.innerText = datos;
    }
}

export function addWeatherText(dataAPIWeather: string, iconUrl?: string) {
    if (textWeather) {
        textWeather.innerHTML = iconUrl
            ? `<img src="${iconUrl}" alt="icono del clima" style="width: 50px; vertical-align: middle;"> ${dataAPIWeather}`
            : dataAPIWeather;
    }
}