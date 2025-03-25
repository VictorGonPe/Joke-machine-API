"use strict";
fetch('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' }
})
    .then(response => response.json())
    .then(data => console.log("Joke: ", data.joke));
