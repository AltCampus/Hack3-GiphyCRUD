var search = document.querySelector(".user-search");
var url = "https://api.giphy.com/v1/gifs/search?";
var key = "&api_key=YmbYIzqV3QRKpdYOkG2FarNnE0pDClSS";
var gif1 = document.querySelector('.gif1');
var query = "";
var random = "random";
var trending = "trending";
var randomBtn = document.querySelector(".random");
var trendingBtn = document.querySelector(".trending");
let addImage = document.querySelector('.one');
let favBtn = document.querySelector('.favc')
let printArr = [];
let favArr = JSON.parse(localStorage("fav")) || [];

function displayInfo(userSearch, arr = []){

  var completeUrl =  url + key + query;
  fetch(completeUrl).then(data =>  data.json()).then( res => {
    for (let i = 0; i < 20; i++) {
      var htmlText = "";
      htmlText = `<span class="img" >
                  <a data-id="${i}" target="_blank" href="${res.data[i].images.fixed_height_downsampled.url}"><img class="gif" data-id="${i}" src="${res.data[i].images.fixed_height_downsampled.url}"></a>
                  <button data-id="${i}" class="fav">Add To Fav</button>
                  <span>
                  `
      addImage.innerHTML += htmlText;
      printArr.push(`${res.data[i].images.fixed_height_downsampled.url}`);
    }
  })  
  printArr.map((v, i) => {
    addImage.innerHTML += v;
  });
  search.value = "";

}

function displayValue(event){
  addImage.innerHTML = "";
  printArr = [];
  var userSearch = search.value;
  query = `&q=${userSearch}`;
  if(event.code == "Enter") {
    displayInfo(userSearch, printArr);
  }
}

function displayRandom(e){
  e.preventDefault();
  // console.log(e,'called inside display')
  var userSearch = random;
  query = `&q=${userSearch}`;
  displayInfo(userSearch, printArr);
  console.log(e);
}


function displayTrending(e){
  e.preventDefault();
  query = `&q=${trending}`;
  displayInfo(trending, printArr);
 
}
function btnAct(e) {
  if(e.target.classList.contains('fav')) {
    var id = e.target.dataset.id;
    if (favArr.includes(printArr[id])) return;
    favArr.push(printArr[id]);
  }
  if (e.target.classList.contains('del')) {
    var id = e.target.dataset.id;
    favArr.splice(id,1);
    // dispFav(e);
  }
}

function dispFav(e) {
  e.preventDefault();
  addImage.innerHTML = " ";
  favArr.forEach((v,i) => {
    var dip = `<span class="img" >
                  <a data-id="${i}" target="_blank" href="${v}"><img class="gif" data-id="${i}" src="${v}"></a>
                  <button data-id="${i}" class="del">delete</button>
                <span>`;
    addImage.innerHTML += dip;
  });
}


search.addEventListener('keypress', displayValue);
randomBtn.addEventListener('click', displayRandom);
trendingBtn.addEventListener('click', displayTrending);
addImage.addEventListener("click", btnAct);
favBtn.addEventListener("click", dispFav);
