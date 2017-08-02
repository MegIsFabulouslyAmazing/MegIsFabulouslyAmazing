var userInput = "";
var command = "";
var room = 0;
var location = ["Programming", "Claflin", "Quad West", "Tower West", "DO", "Archway West", "Quad East", "Great Room", "Tower East", "CO", "Archway East", "Alumni", "KSC", "Severance", "Art Room", "Board Game Room", "Founders", "Lulu Wang", "Green", "Pendleton", "Dana Hall", "You can't go that way!"];

var room = ["Welcome to the PO! This is where we make the magic happen."]

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
    console.log("room: ", room);
}

function changeRoom(){
    if (room == 0){
        switch(command){
            case "n":
                room = 1;
                break;
            case "e":
                room = 2;
                break;
            default:
                break;
        }
    }
    else if (room == 1){
        switch(command){
            case "e":
                room = 2;
                break;
            case "s":
                room = 0;
                break;
            default:
                break;
        }
    }
    else if (room == 2){
        switch(command){
            case "n":
                room = 3;
                break;
            case "e":
                room = 6;
                break;
            case "w":
                room = 0;
                break;
            default:
                break;
        }
    }
    else if (room == 3){
        switch(command){
            case "n":
                room = 4;
                break;
            case "s":
                room = 2;
                break;
            default:
                break;
        }
    }
    else if (room == 4){
        switch(command){
            case "n":
                room = 5;
                break;
            case "e":
                room = 7;
                break;
            case "s":
                room = 3;
                break;
            default:
                break;
        }
    }
    else if (room == 5){
        switch(command){
            case "e":
                room = 10;
                break;
            case "s":
                room = 4;
                break;
            default:
                break;
        }
    }
    else if (room == 6){
        switch(command){
            case "n":
                room = 8;
                break;
            case "e":
                room = 13;
                break;
            case "w":
                room = 2;
                break;
            default:
                break;
        }
    }
    else if (room == 7){
        switch(command){
            case "e":
                room = 9;
                break;
            case "w":
                room = 4;
                break;
            default:
                break;
        }
    }
    else if (room == 8){
        switch(command){
            case "n":
                room = 9;
                break;
            case "s":
                room = 6;
                break;
            default:
                break;
        }
    }
    else if (room == 9){
        switch(command){
            case "n":
                room = 10;
                break;
            case "s":
                room = 8;
                break;
            case "w":
                room = 7;
                break;
            default:
                break;
        }
    }
    else if (room == 10){
        switch(command){
            case "n":
                room = 11;
                break;
            case "e":
                room = 16;
                break;
            case "s":
                room = 9;
                break;
            case "w":
                room = 5;
                break;
            default:
                break;
        }
    }
    else if (room == 11){
        switch(command){
            case "n":
                room = 12;
                break;
            case "e":
                room = 17;
                break;
            case "s":
                room = 10;
                break;
            default:
                break;
        }
    }
    else if (room == 12){
        switch(command){
            case "s":
                room = 11;
                break;
            default:
                break;
        }
    }
    else if (room == 13){
        switch(command){
            case "n":
                room = 14;
                break;
            case "w":
                room = 6;
                break;
            default:
                break;
        }
    }
    else if (room == 14){
        switch(command){
            case "n":
                room = 15;
                break;
            case "w":
                room = 6;
                break;
            default:
                break;
        }
    }
    else if (room == 15){
        switch(command){
            case "w":
                room = 6;
                break;
            default:
                break;
        }
    }
    else if (room == 16){
        switch(command){
            case "e":
                room = 18;
                break;
            case "w":
                room = 10;
                break;
            default:
                break;
        }
    }
    else if (room == 17){
        switch(command){
            case "w":
                room = 11;
                break;
            default:
                break;
        }
    }
    else if (room == 18){
        switch(command){
            case "e":
                room = 19;
                break;
            case "w":
                room = 16;
                break;
            default:
                break;
        }
    }
    else if (room == 19){
        switch(command){
            case "w":
                room = 18;
                break;
            default:
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
    var node = document.createTextNode(location[room]);
    //put text node in new paragraph
    para.appendChild(node);
    //get the element you want to append the paragraph to
    var element = document.getElementById("gameText");
    //append the paragraph
    element.appendChild(para);
    //move the scrollbar to the bottom of the text box
    updateScroll();
}