// Functioning Word API
let click = document.getElementById("action")

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
    //   console.log(data)
      let word = data[0].word
    //   console.log(word)
      let appear = document.getElementById("word")
      appear.innerHTML = word
    
        
       setTimeout(function() {
           document.getElementById("word").remove()
       }, 3000)

  })
 })
.catch(err => {
	console.error(err);
});
};


click.addEventListener("click", getWord)
