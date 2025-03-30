let currentPoint = 0;
export function addJoke(datos) {
    const p = document.getElementById('joke');
    if (p) {
        p.innerText = datos;
    }
}
export function getPoint() {
    return currentPoint;
}
export function resetPoint() {
    currentPoint = 0;
}
export function rate() {
    const btnOneStart = document.querySelector('.btnOne');
    const btnTwoStart = document.querySelector('.btnTwo');
    const btnTreeStart = document.querySelector('.btnTree');
    btnOneStart === null || btnOneStart === void 0 ? void 0 : btnOneStart.addEventListener('click', () => {
        currentPoint = 1;
    });
    btnTwoStart === null || btnTwoStart === void 0 ? void 0 : btnTwoStart.addEventListener('click', () => {
        currentPoint = 2;
    });
    btnTreeStart === null || btnTreeStart === void 0 ? void 0 : btnTreeStart.addEventListener('click', () => {
        currentPoint = 3;
    });
    return currentPoint;
}
