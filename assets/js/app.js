var search = document.querySelector(".user-search");
var url = "http://api.giphy.com/v1/gifs/search?";
var key = "&api_key=YmbYIzqV3QRKpdYOkG2FarNnE0pDClSS";
var gif1 = document.querySelector('.gif1');
var address = document.querySelector('.address');
let addImage = document.querySelector('.one');
let printArr = [];

function displayInfo(userSearch, arr = []){
  var completeUrl =  url + key + query;
  for (let i = 0; i < 20; i++) {
    var htmlText = "";
    fetch(completeUrl).then(data=>  data.json()).then( res => {
      htmlText = `<a data-id="${i}" target="_blank" href="${res.data[i].images.fixed_height_downsampled.url}"><img class="gif" data-id="${i}" src="${res.data[i].images.fixed_height_downsampled.url}"></a>`
      addImage.innerHTML += htmlText;
  })  
  }
  printArr.map((v, i) => {
    addImage.innerHTML += v;
    console.log(v);
  });
  search.value = "";

}


function displayValue(event){
  var userSearch = search.value;
  query = `&q=${userSearch}`;
  if(event.code == "Enter") {
  displayInfo(userSearch, printArr);
}
}

search.addEventListener('keypress', displayValue);