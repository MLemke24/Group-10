// Global calls 
var save = document.querySelector(".save")
var highscorePage = document.querySelector(".highscores")
var log = document.querySelector(".finalLog")
let word, definition, pronunciation, appear, time, createCircle
let userScore = 0;
let click = document.getElementById("action")

// Next Button On Click
document.getElementById("next-btn").onclick = function () {
  time = 3
  document.getElementById("word").innerHTML = ""
  document.getElementById("definition").innerHTML = ""
  document.getElementById("spell").value = ""
  document.getElementById("time-left").style.display = "block"
  getWord()
}

// Get Word Function 
let getWord = function () {
  fetch("https://random-words-with-pronunciation.p.rapidapi.com/word", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "630b6ad385mshad49248fe7e32e3p1d76e3jsnf0bd5377f502",
      "x-rapidapi-host": "random-words-with-pronunciation.p.rapidapi.com"
    }
  })
    .then(function (response) {
      response.json().then(function (data) {

        // Change Views
        document.getElementById("start-game").style.display = "none"
        document.getElementById("countdown").style.display = "block"
        document.getElementById("gamebox").style.display = "block"


        // 3 Second Timer
        time = 3;

        timer = setInterval(function function1() {

          document.getElementById("inner_circle").innerHTML = time + "&nbsp";
          // console.log(time)
          time -= 1

          if (time < 0) {

            //  WORD APPEARS!

            clearInterval(timer)
            document.getElementById("inner_circle").innerHTML = ""
            document.getElementById("countdown").style.display = "none"
            document.getElementById("time-left").style.display = "none"
            document.getElementById("spell").autofocus;

            // Get Values
            word = data[0].word
            definition = data[0].definition
            pronunciation = data[0].pronunciation
            console.log(word)

            appear = document.getElementById("word")

            //  console.log(appear)
            appear.innerHTML = word


            setTimeout(function () {
              document.getElementById("word").innerHTML = ""


            }, 1000)
          }
        }, 1000)
      })
    })
    .catch(err => {
      console.error(err);
    });
};

// When Next Button Is Clicked
document.getElementById("main-btn").onclick = function (event) {

  let results = document.getElementById("spell").value
  //   console.log(results)
  //  console.log(word)

  // Word Comparison
  if (word.toLowerCase() === results.toLowerCase()) {

    userScore += 1; //upgrading score value with 1
    document.getElementById("yourScore").innerHTML = "Your Score: " + userScore
    console.log(userScore);
    fetch(
      'https://api.giphy.com/v1/gifs/random?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN'
    )
      // Convert the response to JSON
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        // console.log(response)
        let grabGiphy = document.getElementById("word")

        var setGif = document.createElement("img")
        setGif.setAttribute('src', response.data.image_url)
        setGif.setAttribute('id', 'giphy')
        grabGiphy.appendChild(setGif)

        let grabDefinition = document.getElementById("definition")

        let setDefinition = `
        <h3 id="learn"> Word: ${word} </h3>
        <p id="learn"> Definition: ${definition}</p>
        <p id="learn"> Pronunciation: ${pronunciation}</p>
        `
        grabDefinition.innerHTML = setDefinition
        //  console.log(definition)
        //  console.log(pronunciation)
      });


    // IF  word was wrong
  } else  {


    userScore -= 1; //downgrade score value with 1
    console.log(userScore)
    if (userScore < 0){
      userScore = 0

    }
    document.getElementById("yourScore").innerHTML = "Your Score: " + userScore

    let getX = document.getElementById("word")


    let setX = document.createElement("span")
    setX.setAttribute("style", 'font-size:100px;')
    setX.innerHTML = '&#10060'
    getX.appendChild(setX)

    let grabDefinition = document.getElementById("definition")

    let setDefinition = `
        <h3 id="learn"> Word: ${word} </h3>
        <p id="learn"> Definition: ${definition}</p>
        <p id="learn"> Pronunciation: ${pronunciation}</p>
        `
    grabDefinition.innerHTML = setDefinition
 
  

}

}

document.getElementById("end-game").onclick = function () {
document.getElementById("gamebox").style.display = "none"
document.getElementById("log").style.display = "block"

document.getElementById("highScore").innerHTML = userScore
}

// save ganme sacore and present score
function saveGame() {

  // Bring Up Scores Page

  document.getElementById("log").style.display = "none"

  document.getElementById("finale").style.display = "block"

  // Place values of High Score and Initials

  highscore = document.getElementById("highScore").innerHTML


  initials = document.getElementById("initials").value
console.log(initials)

if (initials <= 0){
  window.alert("Must put in your Initials")
  return;
}

  let logScores = JSON.parse(localStorage.getItem("yourScores")) || [];

  // push to array and save
  let numbers = {Initials: initials, Score: highscore }
  logScores.push(numbers)
  console.log(logScores)


  setScore(logScores)


  localStorage.setItem("yourScores", JSON.stringify(logScores))


};

// display scores
function setScore(logScores) {

  for (var i = 0; i < logScores.length; i++) {
    var logScore = document.getElementById("finalLog")
    var ulScores = document.createElement("li")
    ulScores.setAttribute('class', 'yourScores')
    ulScores.textContent = logScores[i].Score

    finalLog.appendChild(ulScores)

    var ulInitials = document.createElement('li')
    ulInitials.setAttribute('class', 'yourInitials')
    ulInitials.textContent = logScores[i].Initials;

    finalLog.appendChild(ulInitials)


  };

};



// Bring up high Scores Page

function highscores() {

  document.getElementById("action").style.display = "none"

  document.getElementById("finale").style.display = "block"

  var getScore = JSON.parse(localStorage.getItem("yourScores"));

  setScore(getScore)
  console.log(getScore)


};

document.getElementById("try").onclick = function() {
  getWord()
}


// next.addEventListener("click", getWord)
click.addEventListener("click", getWord)

save.addEventListener("click", saveGame)

highscorePage.addEventListener("click", highscores)