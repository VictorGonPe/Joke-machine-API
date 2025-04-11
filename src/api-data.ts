import { config } from "./config"

const random = (Math.random() * 99 + 1);

export const joke1 = {
    url:'https://icanhazdadjoke.com/',
    header:{ Accept: 'application/json' }
}

export const joke2 = {
    url:`https://chandler-bing-jokes-api.p.rapidapi.com/jokes/${random}`,
    header:{
        'x-rapidapi-key': config.jokeKey,
        'x-rapidapi-host': 'chandler-bing-jokes-api.p.rapidapi.com'
      }
}

export const weather = {
    url:'https://open-weather13.p.rapidapi.com/city/barcelona/EN',
    header: {
        'x-rapidapi-key':config.weatherKey,
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
    }
}





