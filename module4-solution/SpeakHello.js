
(function(window){
  var speakWord = "Hello";
  var helloSpeaker = {};

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker;

})(window);



var helloSpeaker = {};

// Attaching the "speak" method to the 'helloSpeaker' object
helloSpeaker.speak = function (name) {
  var speakWord = "Hello";
  console.log(speakWord + " " + name);
};

// Exposing only the 'speak' method to the global context
window.helloSpeaker = {
  speak: helloSpeaker.speak
};


// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "Hello";


function speak(name) { var speakWord = "Hello";
  console.log(speakWord + " " + name);
}


window.helloSpeaker = helloSpeaker;

