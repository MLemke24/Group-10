let word, definition, pronunciation, appear, time, createCircle

// Functioning Word API
let click = document.getElementById("action")

// document.getElementById("gamebox").style.display = "none"

document.getElementById("next-btn").onclick = function(){
document.getElementById("word").innerHTML = ""
document.getElementById("definition").innerHTML = ""
document.getElementById("spell").value = ""
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
      console.log(data)
      document.getElementById("countdown").style.display = "block"
      document.getElementById("gamebox").style.display = "block"

      time = 3;

      timer = setInterval (function function1() {
  
        document.getElementById("inner_circle").innerHTML = time + "&nbsp";
        console.log(time)
        time -= 1
        if(time < 0 ) {
          clearInterval(timer)
          document.getElementById("countdown").style.display = "none"
          
         
          word = data[0].word
          definition = data[0].definition
          pronunciation = data[0].pronunciation
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
  if (word.toLowerCase() === results.toLowerCase()){

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
        setGif.setAttribute('id', 'giphy')
        grabGiphy.appendChild(setGif)

        let grabDefinition = document.getElementById("definition")

        let setDefinition = `
        <h3 id="learn"> Word: ${word} </h3>
        <p id="learn"> Definition: ${definition}</p>
        <p id="learn"> Pronunciation: ${pronunciation}</p>
        `
        grabDefinition.innerHTML = setDefinition
       console.log(definition)
       console.log(pronunciation)
      });
    
      
    
	} else {
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
  

// next.addEventListener("click", getWord)
click.addEventListener("click", getWord)

