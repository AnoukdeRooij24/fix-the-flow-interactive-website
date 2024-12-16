// Harry laten groeien


// zoek in de DOM de button met als classname groeispurt
let groeiButton = document.querySelector('button.groeispurt')

// zoek de afbeelding van Harry die we willen laten groeien
let harrry = document.querySelector('img.harry-img')

// als je op de groeibutton klinkt dan moet harry groter worden
groeiButton.addEventListener('click', grotermaken)

// als de keyframe animatie klaar is dan wil ik harry weer kleiner maken
harrry.addEventListener('animationend', grotermaken)

// de functie grotermaken moet de classname harry groeien eraf gehaald worden
function grotermaken() {
  harrry.classList.toggle('harrygroeien');
}