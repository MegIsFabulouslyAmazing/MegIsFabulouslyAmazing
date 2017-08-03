var userInput = "";
var command = "";
var room = 0;
var mapLocation = ["Programming", "Claflin", "Quad West", "Tower West", "DO", "Archway West", "Quad East", "Great Room", "Tower East", "CO", "Archway East", "Alumni", "KSC", "Severance", "Art Room", "Board Game Room", "Founders", "Lulu Wang", "Green", "Pendleton", "Dana Hall"];

var roomText = ["Welcome to the PO! This is where we make the magic happens. Someone left a magic wand on the desk.", 
"The Claflin boulders are firm and strong. They are green baby, ahhh!", 
"Children are fleeing the quad. Screaming as they attempt to escape the run. There appears to be four water spouts coming toward the quad from the lake.", 
"The Comets killed the dinosaurs, so be careful here! Your living group is sitting out on the hall screaming and crying. The are in a big huddle in one corner. Across the hall, there is a glowing orb that is humming ominously.", 
"The Deans have freezie pops! There are no Deans here though, they are out trying to make the crying children cry less. This isn't the CO.", 
"There's a staff member playing guitar in the archway. They seem completely unaware of the weather.", 
"The storm has ripped the covering off of the sun dial, only it doesn't seem to be a sun dial anymore. There is a perfect place to put a spherical object of some sort.", 
"Folk jam club is meeting right now. The music seems to be soothing the children. Several staff members are looking anxiously out the windows.", 
"The Zephyrs might blow you away! Although really with this storm, you might actually get blown away. Be careful out there!", 
"Come here to change your classes. This isn't the DO.", 
"You can hear a staff member playing guitar in the archway.", 
"This is where community meeting happens. There is no one here right now. They are all cowering in fear back on the quad.", 
"Wow, this place is really far away.", 
"Look, a Phoenix!", 
"There's a lot of art in here. Adam and Kai are busy helping kids get creative in here. In one corner is a really sparkly cape. Someone went a little nuts with the glitter... I thought Devyn banned that stuff.", 
"Board games galore! If only you had time to play games.", 
"There are classes here.", 
"This building is really weird. None of the corners are 90 degrees! Out of the corner of your eye, you see a hat on the ground. It's weird though, when you try to look straight at it, nothing seems to be there.", 
"The view is really great from the top of this tower. What are you doing climbing all these stairs though?? You're supposed to be on a mission! Stop getting distracted by a pretty view!", 
"Classes happen here.", 
"Wow! Where are you? It's almost like you've been magically transported to an entirely different campus! As you step into the dark hallway, the lights begin to flicker. From around a corner appears EVIL KAREN THE TICK, OVERLORD OF THE BLOODSUCKING DISEASE RIDDEN ARACHNID MONSTERS! Quick! Do something to save yourself!"]

var helpText1 = "In order to play this game there are a few things you should know! Type commands into the box below the text area and then press enter to play. Movement commands work with capitalization, no capitalization, and initials. For example, to move, you can type 'north', 'North', or 'n'. Other commands to move are 'south', 'east', and 'west'."

var helpText2 = "You can also type 'look' to see the detailed description of a room, 'take' followed by the name of an item in a room, which should be typed exactly as it is in the description of the room, to pick up an object, or 'use' followed by the name of an item you have picked up to use an item. You can type 'inventory' to see what you currently have in your backpack."

var inventory = [];

var roomChecked = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

var itemTaken = [0, 0, 0, 0];
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
    else if (userInput.includes("take") || userInput.includes("Take")){
        command = "t";
    }
    else if (userInput.includes("use") || userInput.includes("Use")){
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
        addNewText(helpText1);
        addNewText(helpText2);
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
    else{
        addNewText("You can't go that way!");
    }
}

function take(){
    if (room == 3 && userInput.includes("orb") && !itemTaken[1]){
        addNewText("You can't seem to pick it up! You might need to use something magical to help you.");
        itemTaken[1] = 1;
        roomText[3] = "The Comets killed the dinosaurs, so be careful here! Your living group is sitting out on the hall screaming and crying. The are in a big huddle in one corner.";
        
    }
    else if (room == 14 && userInput.includes("cape") && !itemTaken[3]){
        inventory.push("cape");
        addNewText("You have picked up the cape!");
        itemTaken[3] = 1;
        roomText[14] = "There's a lot of art in here. Adam and Kai are busy helping kids get creative in here. Someone went a little nuts with the glitter... I thought Devyn banned that stuff.";
    }
    else if (room == 0 && userInput.includes("wand") && !itemTaken[0]){
        inventory.push("wand");
        addNewText("You have picked up the wand!");
        itemTaken[0] = 1;
        roomText[0] = "Welcome to the PO! This is where we make the magic happens.";
    }
    else if (room == 17 && userInput.includes("hat") && !itemTaken[2]){
        inventory.push("hat");
        addNewText("You have picked up the hat!");
        itemTaken[2] = 1;
        roomText[17] = "This building is really weird. None of the corners are 90 degrees!";
    }
    else{
        addNewText("Sorry, that's not possible. Make sure you spelled the item exactly as it appears in the text!");
    }
}

function use(){
    console.log("use");
    var itemIndex
    if (room == 6 && userInput.includes("orb") && inventory.indexOf("orb") != -1){
            itemIndex = inventory.indexOf("orb");
            inventory.splice(itemIndex, itemIndex + 1);
            addNewText("You have placed the orb on the stand! Nothing seems to be happening though...");
            console.log(inventory);
    }
    else if (room == 6 && userInput.includes("wand") && inventory.indexOf("wand") != -1){
        if (hatUsed && capeUsed){
            addNewText("Something is happening!!!!!!");
            console.log(inventory);
            room = 20;
        }
        else{
            addNewText("Hmmm... That didn't quite work. You must be missing something magical.");
        }
    }
    else if (room == 3 && userInput.includes("wand") && inventory.indexOf("wand") != -1){
            addNewText("You have used the wand to pick up the orb!");
            inventory.push("orb");
            console.log(inventory);
    }
    else if (room == 20 && userInput.includes("wand") && inventory.indexOf("wand") != -1){
            addNewText("You use your magical wand to smother EVIL KAREN THE TICK, OVERLORD OF THE BLOODSUCKING DISEASE RIDDEN ARACHNID MONSTERS! with bug spray. As she starts to cough in a haze of bug spray, your Secret Staff Buddy Meghan Jimenez smashes through one of the walls riding a dragon named Carl. Carl breathes flames at EVIL KAREN THE TICK, OVERLORD OF THE BLOODSUCKING DISEASE RIDDEN ARACHNID MONSTERS! who quickly becomes EVIL KAREN THE BARBECUED TICK, OVERLORD OF THE BLOODSUCKING DISEASE RIDDEN ARACHNID MONSTERS! As soon as EVIL KAREN THE BARBECUED TICK, OVERLORD OF THE BLOODSUCKING DISEASE RIDDEN ARACHNID MONSTERS falls to the ground repenting for her sins against Cruise Night, the sky begins to clear. You give Meghan a high-five and climb aboard Carl to fly off into the beautiful, cloudless sky to cruise night. Congratulations! You have won!");
    }
    else if (userInput.includes("cape")){
        if (inventory.indexOf("cape") != -1){
            itemIndex = inventory.indexOf("cape");
            inventory.splice(itemIndex, itemIndex + 1);
            addNewText("You are now wearing the cape!");
            capeUsed = 1;
            console.log(inventory);
        }
        else if (hatUsed){
            addNewText("You are already wearing the cape!");
        }
    }
    else if (userInput.includes("hat") && inventory.includes("hat")){
        if (inventory.indexOf("hat") != -1){
            console.log("hat");
            itemIndex = inventory.indexOf("hat");
            inventory.splice(itemIndex, itemIndex + 1);
            addNewText("You are now wearing the hat!");
            hatUsed = 1;
            console.log(inventory);
        }
        else if(capeUsed){
            addNewText("You are already wearing the cape!");
        }
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