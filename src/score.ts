import { buttons } from "./dom";

let currentPoint: number;

export function rateButtons(): void {
    buttons.btnOneStar?.addEventListener('click', () => {
        currentPoint = 1;
    })

    buttons.btnTwoStar?.addEventListener('click', () => {
        currentPoint = 2;
    })

    buttons.btnTreeStar?.addEventListener('click', () => {
        currentPoint = 3;
    })
}

export function getPoint(): number {
    return currentPoint;
}

export function resetPoint(): void {
    currentPoint = 0;
}