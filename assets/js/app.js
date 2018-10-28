var search = document.querySelector(".user-search");
var uri = "http://api.giphy.com/v1/gifs/search?";
var key = "&api_key=YmbYIzqV3QRKpdYOkG2FarNnE0pDClSS";
var gif1 = document.querySelector('.gif1');
var gif2 = document.querySelector('.gif2');
var gif3 = document.querySelector('.gif3');
var gif4 = document.querySelector('.gif4');
var gif5 = document.querySelector('.gif5');
var gif6 = document.querySelector('.gif6');
var address = document.querySelector('.address');
var displayGif = document.querySelector(".display-gif");
var spinner = document.querySelector(".lds-hourglass");
spinner.style.display = "none";

function displayInfo(userSearch){
  var completeUrl =  uri + key + query;
  fetch(completeUrl).then(sata =>  sata.json()).then(res => {
  //   res.data.forEach((item, i) => {

  //   });
  //  for(var i = 0 ; i < res.data.length ; i++){
    gif1.src = res.data[0].images.fixed_height_downsampled.url;
  // }
    gif2.src = res.data[1].images.fixed_height_downsampled.url;
    gif3.src = res.data[2].images.fixed_height_downsampled.url;
    gif4.src = res.data[3].images.fixed_height_downsampled.url;
    gif5.src = res.data[4].images.fixed_height_downsampled.url;
    gif6.src = res.data[5].images.fixed_height_downsampled.url;
    search.value = "";
    spinner.style.display = "none";
  });
}


function displayValue(event){
  var userSearch = search.value;
  query = `&q=${userSearch}`;
  if(event.code == "Enter") {
  displayInfo(userSearch);
  spinner.style.display = "block";
}
}

search.addEventListener('keypress', displayValue);