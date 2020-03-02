document.onkeydown = function(e) {
    if (e.keyCode == 8) {
      deleteElement();
    }
    if ("abcdefghijklmnopqrstuvwxyz".includes(e.key.toLowerCase())) {
        createLetter(e.key);
    }
    console.log("entry #" + entryCount + " : " + e.keyCode + " | " + e.key + ". Showing " + displayCount);

}




var entryCount = 0;
var displayCount = 0;

function createLetter(key) {
    entryCount += 1;
    displayCount += 1;

    if (entryCount > 15){
        document.getElementById("layer1top").style.color = "black";
        document.getElementById("layer1right").style.color = "black";
        document.getElementById("layer1bottom").style.color = "black";
        document.getElementById("layer1left").style.color = "black";
    }
    if (entryCount > 16){
        document.getElementById("layer2top").style.color = "black";
        document.getElementById("layer2right").style.color = "black";
        document.getElementById("layer2bottom").style.color = "black";
        document.getElementById("layer2left").style.color = "black";
    }
    if (entryCount > 17){
        document.getElementById("layer3top").style.color = "black";
        document.getElementById("layer3right").style.color = "black";
        document.getElementById("layer3bottom").style.color = "black";
        document.getElementById("layer3left").style.color = "black";
    }
    if (entryCount > 18){
        document.getElementById("layer4top").style.color = "black";
        document.getElementById("layer4right").style.color = "black";
        document.getElementById("layer4bottom").style.color = "black";
        document.getElementById("layer4left").style.color = "black";
    }
    if (entryCount > 19){
        document.getElementById("layer5top").style.color = "black";
        document.getElementById("layer5right").style.color = "black";
        document.getElementById("layer5bottom").style.color = "black";
        document.getElementById("layer5left").style.color = "black";
    }
    if (entryCount > 20){
        document.getElementById("layer6top").style.color = "black";
        document.getElementById("layer6right").style.color = "black";
        document.getElementById("layer6bottom").style.color = "black";
        document.getElementById("layer6left").style.color = "black";
    }
    if (entryCount > 21){
        document.getElementById("layer7top").style.color = "black";
        document.getElementById("layer7right").style.color = "black";
        document.getElementById("layer7bottom").style.color = "black";
        document.getElementById("layer7left").style.color = "black";
    }
    if (entryCount > 22){
        document.getElementById("layer8top").style.color = "black";
        document.getElementById("layer8right").style.color = "black";
        document.getElementById("layer8bottom").style.color = "black";
        document.getElementById("layer8left").style.color = "black";
    }
    if (entryCount > 23){
        document.getElementById("layer9top").style.color = "black";
        document.getElementById("layer9right").style.color = "black";
        document.getElementById("layer9bottom").style.color = "black";
        document.getElementById("layer9left").style.color = "black";
    }
    if (entryCount > 24){
        document.getElementById("layer10top").style.color = "black";
        document.getElementById("layer10right").style.color = "black";
        document.getElementById("layer10bottom").style.color = "black";
        document.getElementById("layer10left").style.color = "black";
    }
    if (entryCount > 25){
        document.getElementById("end").style.opacity= "1";
    }



//LAYER1
    //top
    var cursor1top = document.querySelector("#cursor1top");
    var span1top = document.createElement("span");

    span1top.innerHTML = "ESCAPE!";

    cursor1top.parentNode.insertBefore(span1top, cursor1top);


    //right
    var cursor1right = document.querySelector("#cursor1right");
    var span1right = document.createElement("span");

    span1right.innerHTML = "THIS!";
    cursor1right.parentNode.insertBefore(span1right, cursor1right);

    //bottom
    var cursor1bottom = document.querySelector("#cursor1bottom");
    var span1bottom = document.createElement("span");

    span1bottom.innerHTML = "ESCAPE!";
    cursor1bottom.parentNode.insertBefore(span1bottom, cursor1bottom);

    //left
    var cursor1left = document.querySelector("#cursor1left");
    var span1left = document.createElement("span");

    span1left.innerHTML = "THIS!";
    cursor1left.parentNode.insertBefore(span1left, cursor1left);

// LAYER2//////////////////////////////////////////////
//top
var cursor2top = document.querySelector("#cursor2top");
var span2top = document.createElement("span");

span2top.innerHTML = "NOW!";

cursor2top.parentNode.insertBefore(span2top, cursor2top);

//right
var cursor2right = document.querySelector("#cursor2right");
var span2right = document.createElement("span");

span2right.innerHTML = "TUNNEL!";
cursor2right.parentNode.insertBefore(span2right, cursor2right);

//bottom
var cursor2bottom = document.querySelector("#cursor2bottom");
var span2bottom = document.createElement("span");

span2bottom.innerHTML = "NOW!";
cursor2bottom.parentNode.insertBefore(span2bottom, cursor2bottom);

//left
var cursor2left = document.querySelector("#cursor2left");
var span2left = document.createElement("span");

span2left.innerHTML = "TUNNEL!";
cursor2left.parentNode.insertBefore(span2left, cursor2left);



// LAYER3//////////////////////////////////////////////
//top
var cursor3top = document.querySelector("#cursor3top");
var span3top = document.createElement("span");

span3top.innerHTML = "REACH";

cursor3top.parentNode.insertBefore(span3top, cursor3top);

//right
var cursor3right = document.querySelector("#cursor3right");
var span3right = document.createElement("span");

span3right.innerHTML = "THE";
cursor3right.parentNode.insertBefore(span3right, cursor3right);

//bottom
var cursor3bottom = document.querySelector("#cursor3bottom");
var span3bottom = document.createElement("span");

span3bottom.innerHTML = "REACH";
cursor3bottom.parentNode.insertBefore(span3bottom, cursor3bottom);

//left
var cursor3left = document.querySelector("#cursor3left");
var span3left = document.createElement("span");

span3left.innerHTML = "THE";
cursor3left.parentNode.insertBefore(span3left, cursor3left);

// LAYER4//////////////////////////////////////////////
//top
var cursor4top = document.querySelector("#cursor4top");
var span4top = document.createElement("span");

span4top.innerHTML = "END!";

cursor4top.parentNode.insertBefore(span4top, cursor4top);

//right
var cursor4right = document.querySelector("#cursor4right");
var span4right = document.createElement("span");

span4right.innerHTML = "END!";
cursor4right.parentNode.insertBefore(span4right, cursor4right);

//bottom
var cursor4bottom = document.querySelector("#cursor4bottom");
var span4bottom = document.createElement("span");

span4bottom.innerHTML = "END!";
cursor4bottom.parentNode.insertBefore(span4bottom, cursor4bottom);

//left
var cursor4left = document.querySelector("#cursor4left");
var span4left = document.createElement("span");

span4left.innerHTML = "END!";
cursor4left.parentNode.insertBefore(span4left, cursor4left);

// LAYER5//////////////////////////////////////////////
//top
var cursor5top = document.querySelector("#cursor5top");
var span5top = document.createElement("span");

span5top.innerHTML = "ESCAPE!";

cursor5top.parentNode.insertBefore(span5top, cursor5top);

//right
var cursor5right = document.querySelector("#cursor5right");
var span5right = document.createElement("span");

span5right.innerHTML = "ESCAPE!";
cursor5right.parentNode.insertBefore(span5right, cursor5right);

//bottom
var cursor5bottom = document.querySelector("#cursor5bottom");
var span5bottom = document.createElement("span");

span5bottom.innerHTML = "ESCAPE!";
cursor5bottom.parentNode.insertBefore(span5bottom, cursor5bottom);

//left
var cursor5left = document.querySelector("#cursor5left");
var span5left = document.createElement("span");

span5left.innerHTML = "ESCAPE!";
cursor5left.parentNode.insertBefore(span5left, cursor5left);

// LAYER6//////////////////////////////////////////////
//top
var cursor6top = document.querySelector("#cursor6top");
var span6top = document.createElement("span");

span6top.innerHTML = "ESCAPE!";

cursor6top.parentNode.insertBefore(span6top, cursor6top);

//right
var cursor6right = document.querySelector("#cursor6right");
var span6right = document.createElement("span");

span6right.innerHTML = "ESCAPE!";
cursor6right.parentNode.insertBefore(span6right, cursor6right);

//bottom
var cursor6bottom = document.querySelector("#cursor6bottom");
var span6bottom = document.createElement("span");

span6bottom.innerHTML = "ESCAPE!";
cursor6bottom.parentNode.insertBefore(span6bottom, cursor6bottom);

//left
var cursor6left = document.querySelector("#cursor6left");
var span6left = document.createElement("span");

span6left.innerHTML = "ESCAPE!";
cursor6left.parentNode.insertBefore(span6left, cursor6left);

// LAYER7//////////////////////////////////////////////
//top
var cursor7top = document.querySelector("#cursor7top");
var span7top = document.createElement("span");

span7top.innerHTML = "GETOUT!";

cursor7top.parentNode.insertBefore(span7top, cursor7top);

//right
var cursor7right = document.querySelector("#cursor7right");
var span7right = document.createElement("span");

span7right.innerHTML = "GETOUT!";
cursor7right.parentNode.insertBefore(span7right, cursor7right);

//bottom
var cursor7bottom = document.querySelector("#cursor7bottom");
var span7bottom = document.createElement("span");

span7bottom.innerHTML = "GETOUT!";
cursor7bottom.parentNode.insertBefore(span7bottom, cursor7bottom);

//left
var cursor7left = document.querySelector("#cursor7left");
var span7left = document.createElement("span");

span7left.innerHTML = "GETOUT!";
cursor7left.parentNode.insertBefore(span7left, cursor7left);

// LAYER8//////////////////////////////////////////////
//top
var cursor8top = document.querySelector("#cursor8top");
var span8top = document.createElement("span");

span8top.innerHTML = "LEAVE!";

cursor8top.parentNode.insertBefore(span8top, cursor8top);

//right
var cursor8right = document.querySelector("#cursor8right");
var span8right = document.createElement("span");

span8right.innerHTML = "LEAVE!";
cursor8right.parentNode.insertBefore(span8right, cursor8right);

//bottom
var cursor8bottom = document.querySelector("#cursor8bottom");
var span8bottom = document.createElement("span");

span8bottom.innerHTML = "LEAVE!";
cursor8bottom.parentNode.insertBefore(span8bottom, cursor8bottom);

//left
var cursor8left = document.querySelector("#cursor8left");
var span8left = document.createElement("span");

span8left.innerHTML = "LEAVE!";
cursor8left.parentNode.insertBefore(span8left, cursor8left);

// LAYER9//////////////////////////////////////////////
//top
var cursor9top = document.querySelector("#cursor9top");
var span9top = document.createElement("span");

span9top.innerHTML = "ESCAPE!";

cursor9top.parentNode.insertBefore(span9top, cursor9top);

//right
var cursor9right = document.querySelector("#cursor9right");
var span9right = document.createElement("span");

span9right.innerHTML = "ESCAPE!";
cursor9right.parentNode.insertBefore(span9right, cursor9right);

//bottom
var cursor9bottom = document.querySelector("#cursor9bottom");
var span9bottom = document.createElement("span");

span9bottom.innerHTML = "ESCAPE!";
cursor9bottom.parentNode.insertBefore(span9bottom, cursor9bottom);

//left
var cursor9left = document.querySelector("#cursor9left");
var span9left = document.createElement("span");

span9left.innerHTML = "ESCAPE!";
cursor9left.parentNode.insertBefore(span9left, cursor9left);

// LAYER10//////////////////////////////////////////////
//top
var cursor10top = document.querySelector("#cursor10top");
var span10top = document.createElement("span");

span10top.innerHTML = "NOW!";

cursor10top.parentNode.insertBefore(span10top, cursor10top);

//right
var cursor10right = document.querySelector("#cursor10right");
var span10right = document.createElement("span");

span10right.innerHTML = "NOW!";
cursor10right.parentNode.insertBefore(span10right, cursor10right);

//bottom
var cursor10bottom = document.querySelector("#cursor10bottom");
var span10bottom = document.createElement("span");

span10bottom.innerHTML = "NOW!";
cursor10bottom.parentNode.insertBefore(span10bottom, cursor10bottom);

//left
var cursor10left = document.querySelector("#cursor10left");
var span10left = document.createElement("span");

span10left.innerHTML = "NOW!";
cursor10left.parentNode.insertBefore(span10left, cursor10left);
}
