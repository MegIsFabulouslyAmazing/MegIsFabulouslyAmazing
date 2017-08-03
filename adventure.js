var userInput = "";
var command = "";
var room = 0;
var mapLocation = ["Programming", "Claflin", "Quad West", "Tower West", "DO", "Archway West", "Quad East", "Great Room", "Tower East", "CO", "Archway East", "Alumni", "KSC", "Severance", "Art Room", "Board Game Room", "Founders", "Lulu Wang", "Green", "Pendleton", "Dana Hall"];

var roomText = ["Welcome to the PO! This is where we make the magic happens.", 
"The Claflin boulders are firm and strong. They are green baby, ahhh!", "There are kids playing frisbee.", 
"The Comets killed the dinosaurs, so be careful here! Your living group is sitting out on the hall screaming and crying. The are in a big huddle in one corner. Across the hall, there is a glowing orb that is humming ominously.", 
"The Deans have freezie pops!", 
"There's a staff member playing guitar in the archway.", 
"There are kids playing wallball", 
"Folk jam club is meeting right now", 
"The Zephyrs might blow you away!", 
"Come here to change your classes", 
"You can hear a staff member playing guitar in the archway.", 
"This is where community meeting happens. There is no one here right now.", 
"Wow, this place is really far away.", 
"Look, a Phoenix!", 
"There's a lot of art in here. Adam and Kai are busy helping kids get creative in here.", 
"Board games galore! If only you had time to play games.", 
"There are classes here.", 
"This building is really weird. None of the corners are 90 degrees!", "Classes happen here", 
"Classes happen here", 
"Wow! Where are you? It's almost like you've been magically transported to an entirely different campus!"]

var helpText = "In order to play this game there are a few things you should know! Type commands into the box below the text area to play. All commands work with capitalization, no capitalization, and initials. For example, to move, you can type 'north', 'North', or 'n'. Other commands to move are 'south', 'east', and 'west'. You can also type 'look' to see the detailed description of a room, 'take' followed by the name of an item in a room, which should be typed exactly as it is in the description of the room, to pick up an object, or 'use' followed by the name of an item you have picked up to use an item. You can type 'inventory' to see what you currently have in your backpack."

var inventory = [];

var roomChecked = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

var hatUsed = 0;
var capeUsed = 0;

function keys(event){
    //record which key was pressed
    var key = event.which;
    //If the key pressed is "enter"
    if (key == 13){
        addNewText(userInput);
        getCommand();
        changeRoom();
        addNewText("You are in ".concat(mapLocation[room]));
        //if the room has not yet been visited, the room text is printed
        if (roomChecked[room] == 0){
            addNewText(roomText[room]);
            roomChecked[room] = 1;
        }
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
    else if (userInput == "help" || userInput == "Help" || userInput == "h"){
        command = "h";
    }
    else if (userInput == "look" || userInput == "Look" || userInput == "l"){
        command = "l";
    }
    else if (userInput == "inventory" || userInput == "Inventory" || userInput == "i"){
        command = "i";
    }
    else if (userInput.includes("take") || userInput.includes("Take") || userInput.includes("t")){
        command = "t";
    }
    else if (userInput.includes("use") || userInput.includes("Use") || userInput.includes("u")){
        command = "u";
    }
    else{
        command = "none";
    }
    console.log(command);
    console.log("room: ", room);
}

function changeRoom(){
    if (command == "none"){
        addNewText("Sorry, I don't recognize that command, please try again! Type 'Help' if you need help!")
    }
    else if (command == 'i'){
        addNewText("Here is your inventory:");
        for (i = 0; i < inventory.length; i++){
            addNewText(inventory[i]);
        }
    }
    else if (command == 't'){
        take();
    }
    else if (command == 'u'){
        use();
    }
    else if (command == 'h'){
        addNewText(helpText);
    }
    else if (command == 'l'){
        addNewText(roomText[room]);
        roomChecked[room] = 1;
    }
    else if (room == 0){
        switch(command){
            case "n":
                room = 1;
                break;
            case "e":
                room = 2;
                break;
            default:
                addNewText("You can't go that way!");
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
                addNewText("You can't go that way!");
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
                addNewText("You can't go that way!");
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
                addNewText("You can't go that way!");
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
                addNewText("You can't go that way!");
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
                addNewText("You can't go that way!");
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
                addNewText("You can't go that way!");
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
                addNewText("You can't go that way!");
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
                addNewText("You can't go that way!");
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
                addNewText("You can't go that way!");
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
                addNewText("You can't go that way!");
                break;
        }
    }
    else if (room == 12){
        switch(command){
            case "s":
                room = 11;
                break;
            default:
                addNewText("You can't go that way!");
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
                addNewText("You can't go that way!");
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
                addNewText("You can't go that way!");
                break;
        }
    }
    else if (room == 15){
        switch(command){
            case "w":
                room = 6;
                break;
            default:
                addNewText("You can't go that way!");
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
                addNewText("You can't go that way!");
                break;
        }
    }
    else if (room == 17){
        switch(command){
            case "w":
                room = 11;
                break;
            default:
                addNewText("You can't go that way!");
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
                addNewText("You can't go that way!");
                break;
        }
    }
    else if (room == 19){
        switch(command){
            case "w":
                room = 18;
                break;
            default:
                addNewText("You can't go that way!");
                break;
        }
    }
}

function take(){
    if (room == 3){
        if (userInput.includes("orb")){
            addNewText("You can't seem to pick it up! You might need to use something magical to help you.");
        }
    }
    else if (room == 14 && userInput.includes("cape")){
            inventory.push("cape");
            addNewText("You have picked up the cape!");
    }
    else if (room == 0 && userInput.includes("wand")){
            inventory.push("wand");
            addNewText("You have picked up the wand!");
    }
    else if (room == 17 && userInput.includes("hat")){
            inventory.push("hat");
            addNewText("You have picked up the hat!");
    }
    else{
        addNewText("Sorry, that's not possible. Make sure you spelled the item exactly as it appears in the text!");
    }
}

function use(){
    var itemIndex
    if (room == 6 && userInput.includes("orb")){
            itemIndex = inventory.indexOf("orb");
            inventory.splice(itemIndex, itemIndex + 1);
            addNewText("You have used the orb! Nothing seems to be happening though...");
            console.log(inventory);
    }
    else if (room == 6 && userInput.includes("wand")){
        if (hatUsed && capeUsed){
                addNewText("Something is happening!!!!!!");
                console.log(inventory);
        }
        else{
            addNewText("Hmmm... That didn't quite work. You must be missing something magical.");
        }
    }
    else if (room == 3 && userInput.includes("wand")){
            addNewText("You have used the wand to pick up the orb!");
            inventory.push("orb");
            console.log(inventory);
    }
    else if (userInput.includes("cape")){
        itemIndex = inventory.indexOf("cape");
        inventory.splice(itemIndex, itemIndex + 1);
        addNewText("You are now wearing the cape!");
        console.log(inventory);
    }
    else if (userInput.includes("hat")){
        itemIndex = inventory.indexOf("hat");
        inventory.splice(itemIndex, itemIndex + 1);
        addNewText("You are now wearing the hat!");
        console.log(inventory);
    }
    else{
        addNewText("Sorry, that's not possible. Make sure you spelled the item exactly as it appears in the text!");
    }
}

function updateScroll(){
    var element = document.getElementById("gameTextDiv");
    element.scrollTop = element.scrollHeight;
}

function addNewText(text){
    //create new paragraph
    var para = document.createElement("p");
    //create text node
    var node = document.createTextNode(text);
    //put text node in new paragraph
    para.appendChild(node);
    //get the element you want to append the paragraph to
    var element = document.getElementById("gameText");
    //append the paragraph
    element.appendChild(para);
    //move the scrollbar to the bottom of the text box
    updateScroll();
}