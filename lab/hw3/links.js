var pages= ["home", "writings", "drawings", "sketchbook", "prints", "travel", "organizations", "contact","links"];


//select class
// determine word length
// attach links
var words = document.querySelector(".sidebar");

for (let i = 0; i < pages.length; i++){
  console.log(pages[i]);


  var links = `<a href = "" class="sidebar-link"> ${pages[i]}</a>`;


  words.innerHTML += links;
}
