var search = document.querySelector(".user-search");
var url = "http://api.giphy.com/v1/gifs/search?";
var key = "&api_key=YmbYIzqV3QRKpdYOkG2FarNnE0pDClSS";
var gif1 = document.querySelector('.gif1');
var address = document.querySelector('.address');

function displayInfo(userSearch){
  var completeUrl =  url + key + query;
  fetch(completeUrl).then(data =>  data.json()).then(res => {
    gif1.src = res.data[0].images.fixed_height_downsampled.url;
    search.value = "";
  });
}


function displayValue(event){
  var userSearch = search.value;
  query = `&q=${userSearch}`;
  if(event.code == "Enter") {
  displayInfo(userSearch);
}
}

search.addEventListener('keypress', displayValue);