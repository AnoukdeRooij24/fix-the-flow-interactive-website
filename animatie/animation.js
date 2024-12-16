let showMoreButton = document.querySelector('.show-more');

let doSomething = function() {
    alert('Het werkt!');
}

showMoreButton.addEventListener('click', doSomething);

showMoreButton.addEventListener('click', function() {
    alert('Het werkt!');
});


document.body.classList.add('dark-mode'); // → <body class="dark-mode">

document.querySelector('section').classList.remove('font-large'); // → <section class="about">

document.querySelector('h1').classList.toggle('highlighted'); // → <h1 class="highlighted">, <h1 class="">, <h1 class="highlighted">, <h1 class="">, <h1 class="highlighted">...


let showMoreButton = document.querySelector('.show-more');
showMoreButton.addEventListener('click', function() {
    showMoreButton.classList.add('showing-more');
});