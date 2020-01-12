const doraemon = document.getElementById('doraemon');
const panda = document.getElementById('panda');
const pika = document.getElementById('pika');
const carrot = document.getElementById('carrot');
const modelImg = document.getElementById('model-img');

let lastLabel = null;

function changeLabel(label) {
    label.style.backgroundColor = '#29362b';
    label.style.color = '#81c96c';
    label.style.borderColor = '#81c96c';
}

function checkLastLabel(label) {
    if (lastLabel !== label) {
        if (lastLabel) {
            lastLabel.style.backgroundColor = '';
            lastLabel.style.color = '';
            lastLabel.style.borderColor = '';   
        }
        lastLabel = label;
    }
}

function doraemonClick() {
    checkLastLabel(doraemon);
    changeLabel(doraemon);
    modelImg.src = 'images/Doraemon Jack-O-Lantern.jpg';
}

doraemonClick();

doraemon.addEventListener('click', doraemonClick);

panda.addEventListener('click', function() {
    checkLastLabel(panda);
    changeLabel(panda);
    modelImg.src = 'images/Panda Keychain.jpg';
});

pika.addEventListener('click', function() {
    checkLastLabel(pika);
    changeLabel(pika);
    modelImg.src = 'images/PikaSpoon.jpg';
});

carrot.addEventListener('click', function() {
    checkLastLabel(carrot);
    changeLabel(carrot);
    modelImg.src = 'images/Carrot Keychain.jpg';
});

const links = document.getElementById('links');

function menuClick() {
    if (links.style.display === "block") {
        links.style.display = "none";
    }
    else {
        links.style.display = "block";
    }
}

const mediaQuery = window.matchMedia('(min-width: 920px)');

function showLinks(mediaQuery) {
    if (mediaQuery.matches) {
        links.style.display = "block";
    }
    else {
        links.style.display = "none";
    }
}

mediaQuery.addEventListener('change', showLinks);