import { addJokeText, addWeatherText } from "./dom";

let currentJoke: string = '';

export const callAPIJoke = async (urlAPI: string, headerObject: Record<string, string>) => {

    try {
        const response = await fetch(urlAPI, {
            headers: headerObject
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        currentJoke = data.joke;
        addJokeText(currentJoke);

    } catch (error) {
        console.error('Error to read the API Joke', error);
        return {
            status: 'error',
            message: 'Error to read the API Joke',
            data: null
        };
    }
}

export const callAPIWeather = async (urlAPI: string, headerObject: Record<string, string>) => {
    try {
        const response = await fetch(urlAPI, {
            headers: headerObject
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const temp = data.main?.temp;
        const iconCode = data.weather[0]?.icon;
        const urlIcon = `https://openweathermap.org/img/wn/${iconCode}@2x.png`

        if (temp !== undefined && iconCode) {
            addWeatherText(`  |  ${((temp - 32) * 5 / 9).toFixed(2)}°C`, urlIcon);
        } else {
            addWeatherText('No se pudo obtener el clima actual');
        }

    } catch (err) {
        console.log('Error to read the API Weather', err);
        return {
            status: 'error',
            message: 'Error to read the API weather',
            data: null
        }
    }
}

export { currentJoke };