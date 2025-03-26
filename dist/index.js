"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const callAPI = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('https://icanhazdadjoke.com/', {
            headers: { Accept: 'application/json' }
        });
        const data = yield response.json();
        const p = document.getElementById('joke');
        if (p)
            p.innerText = data.joke;
    }
    catch (error) {
        console.log(error);
    }
});
callAPI();
const nextButton = document.querySelector('.next-joke');
nextButton === null || nextButton === void 0 ? void 0 : nextButton.addEventListener('click', () => {
    callAPI();
});
