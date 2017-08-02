var userInput = "";
var command = "";
var room = 0;
var text = ["Programming", "Claflin", "Quad West", "Tower West", "DO", "Archway West", "Quad East", "Great Room", "Tower East", "CO", "Archway East", "Alumni", "KSC", "Severance", "Art Room", "Board Game Room", "Founders", "Lulu Wang", "Green", "Pendleton", "Dana Hall", "You can't go that way!"];

function keys(event) {
    //record which key was pressed
    var key = event.which;
    //If the key pressed is "enter"
    if (key == 13){
        getCommand();
        changeRoom();
        addNewText();
        //reset userInput variable and input box
        userInput = "";
        document.getElementById("userInputBox").value = "";
    }
    else{
        //add the most recent userInput to the rest collected so far
        userInput = userInput + String.fromCharCode(key);
    }
}

function getCommand(){
    if (userInput == "north" || userInput == "North" || userInput == "n"){
        command = "n";  
    }
    else if (userInput == "east" || userInput == "East" || userInput == "e"){
        command = "e";
    }
    else if (userInput == "south" || userInput == "South" || userInput == "s"){
        command = "s";
    }
    else if (userInput == "west" || userInput == "West" || userInput == "w"){
        command = "w";
    }
    else{
        command = "none";
    }
    console.log(command);
}

function changeRoom(){
    if (room == 0){
        switch(command){
            case "n":
                addNewText(text[1]);
                room = 1;
                break;
            case "e":
                addNewText(text[2]);
                room = 2;
                break;
            default:
                addNewText(text[21]);
                break;
        }
    }
    else if (room == 1){
        switch(command){
            case "n":
                addNewText(text[3]);
                room = 3;
                break;
            case "e":
                addNewText(text[6]);
                room = 6;
                break;
            case "w":
                addNewText(text[0]);
                room = 0;
                break;
            default:
                addNewText(text[21]);
                break;
        }
    }
}

function updateScroll(){
    var element = document.getElementById("gameTextDiv");
    element.scrollTop = element.scrollHeight;
}

function addNewText(){
    //create new paragraph
    var para = document.createElement("p");
    //create text node
    var node = document.createTextNode(text[room]);
    //put text node in new paragraph
    para.appendChild(node);
    //get the element you want to append the paragraph to
    var element = document.getElementById("gameText");
    //append the paragraph
    element.appendChild(para);
    //move the scrollbar to the bottom of the text box
    updateScroll();
}