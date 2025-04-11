import { buttons } from "./dom";

let currentPoint: number;

export function rateButtons() {

    buttons.btnOneStar?.addEventListener('click', () => {
        currentPoint = 1;
    })

    buttons.btnTwoStar?.addEventListener('click', () => {
        currentPoint = 2;
    })

    buttons.btnTreeStar?.addEventListener('click', () => {
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