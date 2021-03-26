
var getUserRepos = function (user) {
    var apiUrl = "https://api.github.com/users/"+user+"/repos";
    fetch(apiUrl).then(function(response) {
  response.json().then(function(data) {
    console.log(data);
  });
});
}

var formSubmithandler = function(event) {
    event.preventDefault();
    var username = nameInputEl.value.trim();

    if (username) {
        getUserRepos(username);
        nameInputEl.value = "";
    } else {
        alert("Please enter a GitHub username")
    }
    }

// Functioning Word API
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
        
  })
 })
.catch(err => {
	console.error(err);
});
