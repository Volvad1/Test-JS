const trafficLightEl = document.querySelector('#trafficLight');
const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');

function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeYellow);
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('black');
}



function makeYellow() {
    trafficLightEl1.style.background = ('yellow');
    trafficLightEl1.removeEventListener('click', makeYellow);
    trafficLightEl1.addEventListener('click', makeGreen);
    trafficLightEl2.style.background = ('black');
    trafficLightEl.style.background = ('black');
}



function makeGreen() {
    trafficLightEl2.style.background = ('green');
    trafficLightEl2.removeEventListener('click', makeGreen);
    trafficLightEl2.addEventListener('click', makeRed);
    trafficLightEl.style.background = ('black');
    trafficLightEl1.style.background = ('black');
}

trafficLightEl.addEventListener('click', makeRed);