let currentPoint: number;

export function addJoke(datos: string) {

    const p = document.getElementById('joke');
    if (p) {
        p.innerText = datos;
    }
}

export function rate() {
    const btnOneStart = document.querySelector('.btnOne');
    const btnTwoStart = document.querySelector('.btnTwo');
    const btnTreeStart = document.querySelector('.btnTree');

    btnOneStart?.addEventListener('click', () => {
        currentPoint = 1;
    })

    btnTwoStart?.addEventListener('click', () => {
        currentPoint = 2;
    })

    btnTreeStart?.addEventListener('click', () => {
        currentPoint = 3;
    })
    return currentPoint;
}

export function getPoint() {
    return currentPoint;
}

export function resetPoint() {
    currentPoint = 0;
}

export function dataWeather(dataAPIWeather: string, iconUrl?: string) {
    const textWeather = document.querySelector('.weather');
    if (textWeather) {
        textWeather.innerHTML = iconUrl
          ? `<img src="${iconUrl}" alt="icono del clima" style="width: 50px; vertical-align: middle;"> ${dataAPIWeather}`
          : dataAPIWeather;
      }
}