var save = document.querySelector(".save")
var highscorePage = document.querySelector(".highscores")
var log = document.querySelector(".finalLog")

let word, appear, time

let userScore = 0;


// Functioning Word API
let click = document.getElementById("action")
// let next = document.getElementById("action")


document.getElementById("next-btn").onclick = function(){
document.getElementById("word").innerHTML = ""
document.getElementById("spell").innerHTML = ""
getWord()
}

let getWord = function() {
fetch("https://random-words-with-pronunciation.p.rapidapi.com/word", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "630b6ad385mshad49248fe7e32e3p1d76e3jsnf0bd5377f502",
		"x-rapidapi-host": "random-words-with-pronunciation.p.rapidapi.com"
	}
})
.then(function(response){
    response.json().then(function(data){
      time = 5;

      timer = setInterval (function function1() {
  
        document.getElementById("timer_sec").innerHTML = "Your word will appear in: " + time + "&nbsp";
        console.log(time)
        time -= 1
        if(time < 0 ) {
          clearInterval(timer)
          document.getElementById("timer_sec").innerHTML = ""
          word = data[0].word
          console.log(word)
        
         
        appear = document.getElementById("word")
        //  console.log(appear)
        appear.innerHTML = word
       

         setTimeout(function() {
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


document.getElementById("main-btn").onclick = function(event) {
  
  let results = document.getElementById("spell").value

//   console.log(results)
//  console.log(word)
  if (word === results){

    userScore += 1; //upgrading score value with 1
      console.log(userScore);
    fetch(
      'https://api.giphy.com/v1/gifs/random?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN'
    )
      // Convert the response to JSON
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response)
        let grabGiphy = document.getElementById("word")

        var setGif = document.createElement("img")
        setGif.setAttribute('src', response.data.image_url)
        grabGiphy.appendChild(setGif)
        
      });
    
      
    
	} else {
    userScore -= 1; //downgrade score value with 1
      console.log(userScore);
     let getX = document.getElementById("word")
     

     let setX = document.createElement("span")
     setX.setAttribute("style", 'font-size:100px;')
     setX.innerHTML = '&#10060'
     getX.appendChild(setX)
  }
    
}


// save ganme sacore and present score
function saveGame() {

  // Bring Up Scores Page

  document.getElementById("log").style.display = "none"

  document.getElementById("finale").style.display = "block"

  // Place values of High Score and Initials

  highscore = document.getElementById("highScore").innerHTML 
  

  initials = document.getElementById("initials").value

 


  let logScores = JSON.parse(localStorage.getItem("yourScores")) || [];
 
// push to array and save
  let numbers = {Score: highscore} 
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








// next.addEventListener("click", getWord)
click.addEventListener("click", getWord)

save.addEventListener("click", saveGame)

highscorePage.addEventListener("click", highscores)