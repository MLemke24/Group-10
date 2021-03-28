let word, appear, time

// Functioning Word API
let click = document.getElementById("action")

// let submit = document.getElementById("btn")

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
          // console.log(word)
        
         
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






document.getElementById("btn").onclick = function(event) {
  
  let results = document.getElementById("spell").value
//   console.log(results)
//  console.log(word)
  if (word === results){

    fetch("https://ronreiter-meme-generator.p.rapidapi.com/meme?meme=Condescending-Wonka&bottom=Bottom%20Text&top=Top%20Text&font_size=50&font=Impact", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "d8002eed6bmsh7f05bd1fa3ad782p18b85cjsnc8a6a8a71b69",
		"x-rapidapi-host": "ronreiter-meme-generator.p.rapidapi.com"
	}
    

      
    alert(" this is a test to see if this works! Add a point")
  } else {
    alert("this is just a test You suck")
  }

}

click.addEventListener("click", getWord)

// submit.addEventListener("click", submitWord)