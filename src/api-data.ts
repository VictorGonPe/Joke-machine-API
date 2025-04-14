import { config } from "./config"

interface ApiConfig {
    url: string;
    header: Record<string, string>;
}

export const joke1: ApiConfig = {
    url: 'https://icanhazdadjoke.com/',
    header: { Accept: 'application/json' }
}

export const joke2 = (): ApiConfig => {
    const random = (Math.random() * 99 + 1);
    return {
        url: `https://chandler-bing-jokes-api.p.rapidapi.com/jokes/${random}`,
        header: {
            'x-rapidapi-key': config.jokeKey,
            'x-rapidapi-host': 'chandler-bing-jokes-api.p.rapidapi.com'
        }
    };
}

export const weather: ApiConfig = {
    url: 'https://open-weather13.p.rapidapi.com/city/barcelona/EN',
    header: {
        'x-rapidapi-key': config.weatherKey,
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
    }
}




