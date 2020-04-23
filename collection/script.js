
var xmlhttp = new XMLHttpRequest();
var url = "data-json.txt"; //your filename
var data = [];
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    //we do something here
    console.log(data);
  if (document.getElementById('index')) {
      buildIndex(data);
    }

   else {
      buildItem(data);
    }
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function buildIndex(data){
  //for each row of data:
  for (i = 0; i < data.length; i++){
    var item = document.createElement("li");
    item.classList.add('items');
    item.classList.add(data[i].year);
    item.classList.add(data[i].field);
    item.classList.add(data[i].effort);
    item.classList.add(data[i].purpose);
    item.classList.add(data[i].location);




    var elem = document.createElement("a");
    elem.innerText = data[i].title;
    elem.href = "item.html?id=" + i;
    elem.href = "item.html?id=" + i;

    item.appendChild(elem);
    //finally, attach to '.result' div
    document.querySelector('.result').appendChild(item);

  }

}
function buildItem(data){
  //get URL parameter "id"
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var id = parseInt(urlParams.get('id'));
  console.log('currently seeing item ' + id);

  document.querySelector('h1').innerText = data[id].title;
  document.querySelector('.field').innerText = data[id].field;
  document.querySelector('.effort').innerText = data[id].effort;
  document.querySelector('.purpose').innerText = data[id].purpose;
  document.querySelector('.location').innerText = data[id].location;
  document.querySelector('.orientation').innerText = data[id].orientation;
  document.querySelector('.innerImage').src = data[id].imageURL;




    var nextId, prevId;
    if (id == data.length - 1) {
      nextId = 0;
    }
    else {
      nextId = id + 1;
    }
    if (id == 0) {
      prevId = data.length - 1;
    }
    else {
      prevId = id - 1;
    }
    document.querySelector('.next').href = "item.html?id=" + nextId;
    document.querySelector('.prev').href = "item.html?id=" + prevId;

}

function show(target){
  var items = document.querySelectorAll('.items');
  for (i = 0; i < items.length; i++){
    items[i].style.display = "none";
  }
  var selected = document.querySelectorAll(target);
  for (i = 0; i < selected.length; i++){
    selected[i].style.display = "inline-block";
  }
  var filters = document.querySelectorAll('.filters');
  for (i = 0; i < filters.length; i++){
    filters[i].classList.remove('selected');
  }
  if (target !== ".items"){
    event.target.classList.add('selected');
  }
}
