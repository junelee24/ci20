var pages= ["home", "writings", "drawings", "sketchbook", "prints", "travel", "organizations", "contact","links"];


//select class
var words = document.querySelector(".sidebar");
//for loop to create list
for (let i = 0; i < pages.length; i++){
  console.log(pages[i]);

//add links + jquery selector$ (pages[i]=the items in list)
//links="(no content)"
  var links = `<a href = "" class="sidebar-link"> ${pages[i]}</a>`;
// change the list into links using innerHTML
  words.innerHTML += links;
}


//reference:
//https://www.w3schools.com/js/js_loop_for.asp
//https://www.w3schools.com/jquery/jquery_ref_selectors.asp
