//dom concept

//call window object speech recognation
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

//create html element through javascript and insert element
var p = document.createElement("p");
var words = document.getElementById("words");
words.appendChild(p);
console.log(words);

recognition.addEventListener("result", e => {
    console.log(e.results);
    var transcript = [...e.results].map(result => result[0]).map(result => result.transcript).join("");
    
    p.innerHTML = transcript; 
    if(e.results[0].isFinal){
        p = document.createElement('p');
        words.appendChild(p);
        p.innerHTML = transcript;
    } 
}); //this is dom method to listen events

recognition.addEventListener('end',recognition.start);
recognition.start(); //strating speech recognation...