// Variables for count to grab array elements
var nouns1 = ["Captian", "Cat", "Mouse"];
var verbs = ["runs", "jumps", "flies"];
var adjectives = ["big", "small", "fast"];
var nouns2 = ["house", "tree", "cheese"];
var settings = ["in the park", "on the moon", "at home"];

document.addEventListener('DOMContentLoaded', function() {
document.getElementById('noun1').addEventListener('click', noun1_on_click);
document.getElementById('verb').addEventListener('click', verb_on_click);
document.getElementById('adjective').addEventListener('click', adjective_on_click);
document.getElementById('noun2').addEventListener('click', noun2_on_click);
document.getElementById('setting').addEventListener('click', setting_on_click);
document.getElementById('random').addEventListener('click', random_on_click);
document.getElementById('playback').addEventListener('click', playback_on_click);
});

/* Functions
-------------------------------------------------- */

function student() {
    var studentId = '20089820';
    var studentName = 'Oleg Zenderman';
    document.getElementById('student').textContent = `ID: ${studentId}, Name: ${studentName}`;
}

function noun1_on_click() {
    var chosenNoun1 = getRandomElement(nouns1);
    document.getElementById("choosenNoun1").textContent = chosenNoun1;
}

function verb_on_click() {
    var chosenVerb = getRandomElement(verbs);
    document.getElementById("choosenVerb").textContent = chosenVerb;
}

function adjective_on_click() {
    var chosenAdjective = getRandomElement(adjectives);
    document.getElementById("choosenAdjective").textContent = chosenAdjective;
}

function noun2_on_click() {
    var chosenNoun2 = getRandomElement(nouns2);
    document.getElementById("choosenNoun2").textContent = chosenNoun2;
}

function setting_on_click() {
    var chosenSetting = getRandomElement(settings);
    document.getElementById("choosenSetting").textContent = chosenSetting;
}

function playback_on_click() {
    var story = `${document.getElementById("choosenNoun1").textContent} 
                 ${document.getElementById("choosenVerb").textContent} 
                 ${document.getElementById("choosenAdjective").textContent} 
                 ${document.getElementById("choosenNoun2").textContent} 
                 ${document.getElementById("choosenSetting").textContent}`;
    document.getElementById("story").textContent = story;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    var story = `${getRandomElement(nouns1)} 
                 ${getRandomElement(verbs)} 
                 ${getRandomElement(adjectives)} 
                 ${getRandomElement(nouns2)} 
                 ${getRandomElement(settings)}`;
    document.getElementById("story").textContent = story;
}

// Function to pick a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}