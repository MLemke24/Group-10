let word, appear, time

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
    console.log('RESPONSE HAPPENING first fetch')
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
<<<<<<< HEAD
      console.log('WE R IN THE IF!!!')

      const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://giphy.p.rapidapi.com/v1/gifs/search?api_key=33awPwF4gZQMEcMG6udPnLDeOiylsMLV&q=funny%20cat",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "d8002eed6bmsh7f05bd1fa3ad782p18b85cjsnc8a6a8a71b69",
            "x-rapidapi-host": "giphy.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log('GIFY!!!!',response.data[0].images.original.url);
        var img = $('<img>')
        img.attr('src', response.data[0].images.original.url)
        $('#gamebox').append(img)
    });

    // fetch("https://ronreiter-meme-generator.p.rapidapi.com/meme?meme=Condescending-Wonka&bottom=Bottom%20Text&top=Top%20Text&font_size=50&font=Impact", {
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-key": "d8002eed6bmsh7f05bd1fa3ad782p18b85cjsnc8a6a8a71b69",
    //         "x-rapidapi-host": "ronreiter-meme-generator.p.rapidapi.com"
    //     }
    // }).then(res => {
    //     console.log('REs!!!!!', res)
    //     return res.body.json()
    // }).then(res => {
    //         console.log('dataaa coming back form fetch', res)
=======

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
>>>>>>> main
    
      
<<<<<<< HEAD
    //             alert(" this is a test to see if this works! Add a point")
           

    //     })
} else {
    alert("this is just a test You suck")
}
=======
    
	} else {
     let getX = document.getElementById("word")

     let setX = document.createElement("span")
     setX.setAttribute("style", 'font-size:100px;')
     setX.innerHTML = '&#10060'
     getX.appendChild(setX)
  }
    
>>>>>>> main
}
  


// next.addEventListener("click", getWord)
click.addEventListener("click", getWord)

