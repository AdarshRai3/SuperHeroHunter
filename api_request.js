const request = new XMLHttpRequest();
request.open("GET", "https://api.marvel.com/v1/public/characters");
request.setRequestHeader("Authorization", "Bearer 1654237600, bc5a15119a81b785720ecc9e25e5b0a3");
request.send();

request.onload = function() {
  if (request.status === 200) {
    const characters = JSON.parse(request.responseText);
    console.log(characters);
  } else {
    console.log(request.status);
  }
};

