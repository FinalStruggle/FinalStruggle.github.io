//global variables located here

let roomId = -1; //id of the current room

var msgTime;

let expandInvItem = "Nothing";

let itemSelected = "NA";
let prevItemSelected = "NA";

let hunger = 80;
let thirst = 80;
let health = 100;

let timeLeft = 361; //06:01 into minutes

let currentCarry = 0;
let carryMax = 20; //carry capacity
let timePerWeight = 1; //number corresponds to the number of minutes lost per 1 KG
let hungerPerWeight = 0.5; //number corresponds to the number of hunger lost per 1 KG
let thirstPerWeight = 0.5; //number corresponds to the number of thirst lost per 1 KG

let night = false; //check if it's time night or not

let day = 0;
let dayscene = false; //check if the cutscene is playing or not

var tickTimeout;

let storyline = -1; //determine the conversation with npcs

var textTimeout;

let script = -1;

let cutsceneLine = -1;

let npcid = 0;

let badGuyHp = 0;
let badGuyId = 0;
var badGuyHit;

var circleTimeout;
var circleTimeout2;

let attackCooldown = false;
let badGuyAttackCooldown = false;

//assign html elements to variables
let bgchange = document.getElementById("backgroundcontent");
let skychange = document.getElementById("skying");
let overlay = document.getElementById("overlay");

let n0Trigger = document.getElementById("n0Trigger");
let n1Trigger = document.getElementById("n1Trigger");
let n2Trigger = document.getElementById("n2Trigger");
let n3Trigger = document.getElementById("n3Trigger");

let textBox = document.getElementById("textbox");
let textin = document.getElementById("dialogue");

let previewtxt = document.getElementById("previewtxt");

let item0 = document.getElementById("item0");
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");

let backpackIcon = document.getElementById("backpackico");
let extraInventorySpace = document.getElementById("extrainventory");

let carryTxt = document.getElementById("carryweight");
let timeTxt = document.getElementById("time");

let hpTxt = document.getElementById("hp");
let hungerTxt = document.getElementById("hunger");

let dayTxt = document.getElementById("newday");

let storageSpace = document.getElementById("storage");

let npc = document.getElementById("npc");
let npcbox = document.getElementById("npcbox");
let npcpara = document.getElementById("npcpara");
let npcname = document.getElementById("npcname");

let cutsceneBox = document.getElementById("cutscene");
let cutsceneTxt = document.getElementById("cuttext");
let cutsceneSkip = document.getElementById("skipscene");

let badGuy = document.getElementById("badguy");

let fps = document.getElementById("fps");

let obj0 = document.getElementById("obj0");
let obj1 = document.getElementById("obj1");
let obj2 = document.getElementById("obj2");
let obj3 = document.getElementById("obj3");
let obj4 = document.getElementById("obj4");

let bedtxt = document.getElementById("bedprompt");

document.addEventListener('contextmenu', event => event.preventDefault()); //disable right click

function titleTransition() {
	bgchange.style.backgroundImage = "url(img/renders/bg17.png)";
	for (var j = 0; j<=4-1; j++) { //do this 4 times per room
		if (roomInfo[17][(j+1)] != "NA" && triggerPosition[17][((6*j)+5)]!="arrow.png") { //check if button exists
				document.getElementById("n"+j+"Trigger").style.display = "block"; //display button
				document.getElementById("n"+j+"Trigger").style.width = triggerPosition[17][(6*j)]; //display trigger width
				document.getElementById("n"+j+"Trigger").style.height = triggerPosition[17][((6*j)+1)]; //display trigger height
				document.getElementById("n"+j+"Trigger").style.top = triggerPosition[17][((6*j)+2)]; //display trigger top
				document.getElementById("n"+j+"Trigger").style.left = triggerPosition[17][((6*j)+3)]; //display trigger left
				document.getElementById("n"+j+"Trigger").style.transform = "rotate("+triggerPosition[17][((6*j)+4)]+")"; //display trigger rotation
				document.getElementById("n"+j+"Trigger").style.content = "url(img/triggers/" + triggerPosition[17][((6*j)+5)]+")"; //display trigger source
		}
	}
	preload("img/renders/bg4/candle1.png",
		"img/renders/bg4/candle2.png",
		"img/renders/bg4/candle3.png",
		"img/renders/bg4/table.png",
		"img/renders/bg4/table.png",
		"img/renders/bg5/bed.png",
		"img/renders/bg5/candle.png",
		"img/renders/bg5/door1.png",
		"img/renders/bg5/door1open.png",
		"img/renders/bg5/door2.png",
		"img/renders/bg5/door2open.png",
		"img/renders/bg6/generator.png",
		"img/renders/bg6/lever.png",
		"img/renders/bg6/leveron.png",
		"img/renders/bg8/door1.png",
		"img/renders/bg8/door1open.png",
		"img/renders/bg8/faucet.png",
		"img/renders/bg8/faucetopen.png",
		"img/renders/bg12/door1.png",
		"img/renders/bg12/door1open.png",
		"img/renders/bg12/door2.png",
		"img/renders/bg12/door2open.png",
		"img/renders/bg12/door3.png",
		"img/renders/bg12/door3open.png",
		"img/renders/bg12/door4.png",
		"img/renders/bg12/door4open.png",
		"img/renders/bg16/planks.png",
		"img/npcs/npc0.png",
		"img/npcs/npc0dead.png",
		"img/npcs/npc0talk.png",
		"img/npcs/npc1.png",
		"img/npcs/npc2.png",
		"img/npcs/npc2talk.gif",
		"img/badguy0.png",
		"img/badguy0attack.png",
		"img/badguy0damage.png",
		"img/ui/fueler.png",
		"img/ui/fuelerselect.png",
		"img/ui/hudselect.png",
		"img/ui/inv.png",
		"img/triggers/arrow.png",
		"img/triggers/car.png",
		"img/triggers/carmirror.png",
		"img/triggers/cupboards.png",
		"img/triggers/door1.png",
		"img/triggers/door2.png",
		"img/triggers/door3.png",
		"img/triggers/door4.png",
		"img/triggers/door5.png",
		"img/triggers/door6.png",
		"img/triggers/door7.png",
		"img/triggers/generator.png",
		"img/triggers/generatoron.png",
		"img/triggers/house1.png",
		"img/triggers/house1mirror.png",
		"img/triggers/house2.png",
		"img/triggers/house2light.png",
		"img/triggers/house2mirror.png",
		"img/triggers/house2mirrorlight.png",
		"img/triggers/house2planks.png",
		"img/triggers/house2mirrorplanks.png",
		"img/triggers/house3.png",
		"img/triggers/house4.png",
		"img/triggers/house4mirror.png",
		"img/triggers/house5.png",
		"img/triggers/ladder.png",
		"img/triggers/stairs.png",
		"img/triggers/stairs2.png",
		"img/triggers/trapdoor.png",
		"img/cutscene0.jpg",
		"img/cutscene1.jpg",
		"img/cutscene2.jpg",
		"img/stabbing.gif",
		"img/renders/bg7light.png",
		"img/renders/bg16light.png");
}

function startGame(){ //starts the game
	console.log("No Secrets Here! :)"); //funni haha for who opens console

	setTimeout(function(){ //wait 1 second for the animation to play out
		resetLocal(); //resets elements from previous rooms, like buttons
	}, 505);
	debugtick();

	//get rid of title screen and displays the hud, inventory and item system
	document.getElementById("titlescreen").style.display = "none";
	spawnItems(); //generates all the items in the world
	introCutscene(); //play cutscene
}

//this function is meant to change location, "submittedRoomId" is the id of the location recieved
function changeLocal(submittedRoomId,subTriggerId) {
	overlay.style.display="block";
	setTimeout(function(){
		overlay.style.opacity = "100";
		npc.removeAttribute("onclick");
		npcbox.removeAttribute("onclick");
	}, 5);

	if (submittedRoomId==20 && timeLeft==361) {
		timeLeft=700;
		ticks();
	}

	setTimeout(function(){ //wait 1 second for the animation to play out
		resetLocal(); //resets elements from previous rooms, like buttons
		
		if (submittedRoomId>=20) {
			//update time based on the road
		timeTick(subTriggerId);
		document.getElementById("hud").style.display = "block";
		}

		roomId = submittedRoomId; //conversion to public variable
		
		innerMonologe(); //talk to himself
	
		checkNpc(); //check if room has npcs

		checkObj(); //check if room has objects

		//checkBadGuy(); //check if room has enemies
	
		roomInfo[roomId][9] = true; //mark location as found

		if (roomInfo[roomId][10]== true) { //location has a sky
			skychange.style.display = "block";
		}else{
			skychange.style.display = "none";
		}
	
		if (dayscene==false) {
			bgchange.style.backgroundImage = "url(img/renders/bg"+ roomId + roomInfo[roomId][12] +")"; //changes room
			skychange.style.width = "300%";
		}

		checkGenerator(); //check if room has generator
	
		for (var j = 0; j<=roomItems[roomId].length-1; j++) { //do this 4 times per room
			if (roomItems[roomId][j] != 0 && typeof roomItems[roomId][j] !== 'undefined') { //check if items exist
				document.getElementById("item" + j).src = "img/items/item"+ roomItems[roomId][j] +".png"; //assign item
				document.getElementById("item" + j).style.width = itemPosition[roomId][(5*j)]; //display item width
				var s = itemPosition[roomId][(5*j)];
				s = s.replace("%", "");
				document.getElementById("item" + j).style.height = s*1.78 + "%"; //display item height
				document.getElementById("item" + j).style.top = itemPosition[roomId][((5*j)+1)]; //display item top
				document.getElementById("item" + j).style.left = itemPosition[roomId][((5*j)+2)]; //display item left
				document.getElementById("item" + j).style.transform = "rotate("+itemPosition[roomId][((5*j)+3)]+")"; //display item rotation
				document.getElementById("item" + j).style.zIndex = itemPosition[roomId][((5*j)+4)]; //display item zindex
				document.getElementById("item" + j).style.display = "block"; //display item
			}
		}
		for (var j = 0; j<=4-1; j++) { //do this 4 times per room
		if (roomInfo[roomId][(j+1)] != "NA") { //check if button exists
			document.getElementById("n"+j+"Trigger").style.display = "block"; //display button
			document.getElementById("n"+j+"Trigger").style.width = triggerPosition[roomId][(6*j)]; //display trigger width
			document.getElementById("n"+j+"Trigger").style.height = triggerPosition[roomId][((6*j)+1)]; //display trigger height
			document.getElementById("n"+j+"Trigger").style.top = triggerPosition[roomId][((6*j)+2)]; //display trigger top
			document.getElementById("n"+j+"Trigger").style.left = triggerPosition[roomId][((6*j)+3)]; //display trigger left
			document.getElementById("n"+j+"Trigger").style.transform = "rotate("+triggerPosition[roomId][((6*j)+4)]+")"; //display trigger rotation
			document.getElementById("n"+j+"Trigger").style.content = "url(img/triggers/" + triggerPosition[roomId][((6*j)+5)]+")"; //display trigger source

			if (typeof restrictionList[script] !== 'undefined') { //check if there's restrictions
				for (var i = 0; i <= restrictionList[script].length - 1; i++) {
					if (roomInfo[roomId][(j+1)].toString() == restrictionList[script][i]) {
						document.getElementById("n"+j+"Trigger").removeAttribute("onclick");
						document.getElementById("n"+j+"Trigger").removeAttribute("onmouseover"); //what room the player will go to if pressed
						document.getElementById("n"+j+"Trigger").style.transition = "99999999s filter linear";
						document.getElementById("n"+j+"Trigger").style.cursor = "auto";
						if (triggerPosition[roomId][(j*6)+5]=="arrow.png") {
							document.getElementById("n"+j+"Trigger").style.display = "none";
						}
						break;
					}else{
						document.getElementById("n"+j+"Trigger").setAttribute("onclick", "changeLocal("+ roomInfo[roomId][(j+1)] + ","+j+")"); //what room the player will go to if pressed
						document.getElementById("n"+j+"Trigger").setAttribute("onmouseover", "directionPreview("+(j+1)+")");
						document.getElementById("n"+j+"Trigger").style.transition = "0.2s filter linear";
						document.getElementById("n"+j+"Trigger").style.cursor = "pointer";
					}
				}
			}else{
				document.getElementById("n"+j+"Trigger").setAttribute("onclick", "changeLocal("+ roomInfo[roomId][(j+1)] + ","+j+")"); //what room the player will go to if pressed
			}

			if (roomInfo[roomId][(j+1)] == 14 && script==-1 || roomInfo[roomId][(j+1)] == 8 && genFuel[0][1]==false || roomInfo[roomId][(j+1)] == 9 && genFuel[0][1]==false || roomInfo[roomId][(j+1)] == 10 && genFuel[0][1]==false) { //if you haven't talked with the old man you can't leave
				document.getElementById("n"+j+"Trigger").style.display = "none"; //display button
			}
			
		}
		}
		
	}, 300);

	setTimeout(function(){
		overlay.style.opacity = "0";
	}, 700);


	setTimeout(function(){
		overlay.style.display = "none";
	}, 1500);

}

//this function is meant to deactivate assets
function resetLocal(){
	//disable all triggers
	n0Trigger.style.display = "none";
	n1Trigger.style.display = "none";
	n2Trigger.style.display = "none";
	n3Trigger.style.display = "none";

	//disable text
	textBox.style.display = "none";

	//disable all items
	item0.style.display = "none";
	item1.style.display = "none";
	item2.style.display = "none";
	item3.style.display = "none";
	item4.style.display = "none";

	//disable all objects
	obj0.style.display = "none";
	obj1.style.display = "none";
	obj2.style.display = "none";
	obj3.style.display = "none";
	obj4.style.display = "none";

	//disable npcs
	npc.style.display = "none";
	badGuy.style.display = "none";

	//disable bed and containers
	storageSpace.style.display = "none";

	//close inventory
	expandInv(false);

	//stop timeout to avoid issues
	clearTimeout(msgTime);
}

//this function is meant to show where the player will go after hovering on a button
function directionPreview(whichButton) {
	if (roomId!=-1) {
		var temp = roomInfo[roomId][whichButton]; //determine what room ID the button you're hovering leads to
		document.getElementById("n"+(whichButton-1)+"Trigger").style.filter = "drop-shadow(0px 0px 0 white);";
	
		if (roomInfo[temp][9]==true) { //checks if you've been to this location before
			previewtxt.innerHTML = roomInfo[temp][0]; //determinte room name and writting it;
			if (roomId>=20) {
				previewtxt.innerHTML = roomInfo[temp][0] + "<br />("+roomInfo[roomId][(4+whichButton)]+" minutes)"; //determinte room name and time writting it;
			}
		}else{
			previewtxt.innerHTML = "???";
		}
	
		document.getElementById("previewdiv").style.display = "block"; //display text div
	}
}

//stop previewing text when stop hovering
function stopPreview(whichButton) {
	document.getElementById("previewdiv").style.display = "none"; //disable text div
}

//this function is meant to go through every room and spawn 0 to 4 random items
function spawnItems(){
	for (var i = 0; i <= roomInfo.length - 1; i++) { //checks how many rooms exist
		roomItems[i] = new Array(); 
		for(var j = 0; j<=roomInfo[i][11]-1; j++){ //repeats proccess 4 times per room
			if (roomInfo[i][11]!=0) {
				var numb = Math.floor((Math.random() * (lootTable[i].length)) + 0); //randomly generates number from loottable
				roomItems[i][j] = lootTable[i][numb]; //atributes an item ID
			}else{
				roomItems[i][j] = 0; 
			}
		}
	}

	//scripted items
	roomItems[8][0] = 101; //alcohol
	roomItems[12][3] = 8; //cloth
	roomItems[13][1] = 5; //jerry can
	//roomItems[32][0] = 104; //backpack
}

//this function is meant to update the time after every action that takes time
function timeTick(whichTrigger) {

	var temp = timePerWeight* currentCarry; //calculate weight to time
	temp = Math.round(temp);

	if (whichTrigger!="NA" && roomInfo[roomId][(5+whichTrigger)]!="NA") {
		timeLeft = timeLeft + (roomInfo[roomId][(whichTrigger+5)] + temp); //decreases time based on the rooms distance and the current weight carry

		for (var i = 0; i <= genFuel.length - 1; i++) { 
			if (genFuel[i][1]==true && genFuel[i][0]>0) { //decrease fuel based on time walked
				genFuel[i][0]=genFuel[i][0]-(roomInfo[roomId][(whichTrigger+5)] * 100)/1440;
			}
		}

		//convert to hours
		var hours = (timeLeft / 60);
		var rhours = Math.floor(hours);
		var rhourstxt = rhours;
		if (rhours<=9) {
			rhourstxt = "0" + rhours;
		}
		var minutes = (hours - rhours) * 60;
		var rminutes = Math.round(minutes);
		var rminutestxt = rminutes;
		if (rminutes<=9) {
			rminutestxt = "0" + rminutes;
		}

		if (timeLeft>=1440) { //prevent time from going into the negatives
			timeLeft = 0;
		}else{
			if (timeLeft>=1320 || timeLeft<=359) { //after 22 pm and before 6 am
				night = true;
				safetyCheck();
			}
		}

		if (timeLeft>=360 && timeLeft<1320 && night == true) { //checks if day has passed
			night = false;
		}

		timeTxt.innerHTML = "Time: " + rhourstxt + ":" + rminutestxt; //updates time text

		var temp2 = (roomInfo[roomId][(whichTrigger+5)] / 20); //reduce thirst based on distance
		temp2 = Math.round(temp2);
		var temp4 = thirstPerWeight* currentCarry; //calculate thirst to time
		temp4 = Math.round(temp4);
		thirst = thirst - (temp2 + temp4);

		var temp3 = (roomInfo[roomId][(whichTrigger+5)] / 40); //reduce hunger based on distance
		temp3 = Math.round(temp3);
		var temp5 = hungerPerWeight* currentCarry; //calculate hunger to time
		temp5 = Math.round(temp5);
		hunger = hunger - (temp3 + temp5);
		if (thirst<=0) { //prevent it from underflowing
			thirst=0;
			hpUpdate("minthirst");
		}
		if (hunger<=0) { //prevent it from underflowing
			hunger=0;
			hpUpdate("minhunger");
		}
		hungerTxt.innerHTML = "Hunger: "+ hunger +" | Thirst: " + thirst;

		itemEvents(99);
	}
}

//this function is meant to associate items to their behaviours
function itemEvents(whichSlot){
	if (whichSlot<15) { //normal inv
		var whatItem = inventoryRoom[whichSlot];
		inventoryRoom[whichSlot] = 0;
	}else{ //extra storage
		if (whichSlot==99) {
			var whatItem = 106;
		}else{
			var whatItem = storageRoom[roomId][(whichSlot-15)];
			storageRoom[roomId][(whichSlot-15)] = 0;
		}
	}
	whatItem=parseFloat(whatItem); //convert string to number
	switch (whatItem){
		case 1: //big bean
			thirst = thirst + 10; //repleniches thirst
			hunger = hunger + 40; //repleniches hunger
			break;
		case 2: //small bean
			thirst = thirst + 5; //repleniches thirst
			hunger = hunger + 20; //repleniches hunger
			break;
		case 3: //bear
			thirst = thirst + 20; //repleniches thirst
			break;
		case 15: //bear
			thirst = thirst + 20; //repleniches thirst
			break;
		case 19: //bear
			thirst = thirst + 25; //repleniches thirst
			break;
		case 20: //big sauce
			thirst = thirst + 10; //repleniches thirst
			hunger = hunger + 20; //repleniches hunger
			break;
		case 21: //sauce
			thirst = thirst + 5; //repleniches thirst
			hunger = hunger + 10; //repleniches hunger
			break;
		case 22: //soup
			thirst = thirst + 5; //repleniches thirst
			hunger = hunger + 25; //repleniches hunger
			break;
		case 100: //bandages
			health = parseInt(health) + 35; //heals
			break;
		case 101: //alcohol
			health = parseInt(health) + 10; //heals
			thirst = thirst + 5; //repleniches thirst
			break;
		case 105: //water bucket
			thirst = thirst + 50; //repleniches thirst
			inventoryRoom[whichSlot] = 6; //sets an empty bucket on the inventory
			break;
		case 106: //clock
			for (var i = 0; i <= 2; i++) { //check if clock is in primary inv
				if (inventoryRoom[i]==106) {
					timeTxt.style.display = "block";
					return;
				}else{
					timeTxt.style.display = "none";
				}
			}
			break;
	}
	if (thirst>=100) { //prevent it from going into the negatives
		thirst = 100;
		hpUpdate("maxthirst");
	}
	if (hunger>=100) { //prevent it from going into the negatives
		hunger=100;
		hpUpdate("maxhunger");
	}
	if (health>=100) { //prevent it from going above the limit
		health=100;
	}
	hungerTxt.innerHTML = "Hunger: "+ hunger +" | Thirst: " + thirst;
	hpTxt.innerHTML = "HP: " + health;
}

//this function is meant to run after x seconds
function ticks(){
		if (dayscene==false) {
			var tempBrightness = 0;
			tickTimeout = setTimeout(function(){ //wait 10 seconds to decrease a minute
		
				timeLeft = timeLeft + 1;
		
				for (var i = 0; i <= genFuel.length - 1; i++) {
					if (genFuel[i][1]==true && genFuel[i][0]>0) {
						genFuel[i][0]=genFuel[i][0]-0.0694;
					}
				}
		
				//convert to hours
				var hours = (timeLeft / 60);
				var rhours = Math.floor(hours);
				var rhourstxt = rhours;
				if (rhours<=9) {
					rhourstxt = "0" + rhours;
				}
				var minutes = (hours - rhours) * 60;
				var rminutes = Math.round(minutes);
				var rminutestxt = rminutes;
				if (rminutes<=9) {
					rminutestxt = "0" + rminutes;
				}
		
				if (timeLeft>=1440) { //prevent time from going into the negatives
					timeLeft = 0;
				}else{
					if (timeLeft>=1320 || timeLeft<=359) { //after 22 pm and before 6 am
						//safetyCheck();
					}
				}
		
				if (timeLeft>300 && timeLeft<720) { //transition from night to day
					tempBrightness=(timeLeft-300)/420;
					tempBrightness= Math.round((tempBrightness + Number.EPSILON) * 100) / 100;
					tempBrightness= tempBrightness*100;
					if (tempBrightness>=10) {
						filterSun(tempBrightness);
					}
					
				}else{
					if (timeLeft>=720 && timeLeft<=1020) {//middle of day
						filterSun(100);
					}else{
						if (timeLeft>1020 && timeLeft<1320) { //transition from day to night
							tempBrightness=(timeLeft-1020)/300;
							tempBrightness= Math.round((tempBrightness + Number.EPSILON) * 100) / 100;
							tempBrightness= 100-(tempBrightness*100);
							if (tempBrightness>=10) {
								filterSun(tempBrightness);
							}
						}else{
							if (timeLeft>=1320 || timeLeft<=300) {//middle of night
								filterSun(10);
							}
						}
					}
				}
		
				if (timeLeft>=360 && timeLeft<1320 && night == true) { //checks if day has passed
					night = false;
				}
		
				timeTxt.innerHTML = "Time: " + rhourstxt + ":" + rminutestxt; //updates time text
		
				itemEvents(99);
				if (typeof timeLeft !== 'undefined') {
					document.getElementById("timeleftdebug").innerHTML = "timeLeft =" + timeLeft;
				}
				ticks();
			}, 1000);
		}
		
}

//this function is meant to decrease or increase the hp
function hpUpdate(hpMod){
	switch(hpMod){
		case "maxthirst":
			health = health + 15;
			break;
		case "maxhunger":
			health = health + 10;
			break;
		case "minthirst":
			health = health - 30;
			break;
		case "minhunger":
			health = health - 20;
			break;
	}
	if (health>100) { //prevent hp from overflowing
		health=100;
	}else{
		if (health<=0) { //dies
			death();
		}
	}
	hpTxt.innerHTML = "HP: " + health;
}

//this function is meant to check if the player is in a safe location
function safetyCheck(){
	for (var i = 0; i <= bunkerLocal.length - 1; i++) {
		if (bunkerLocal[i]==roomId) { //if not in a safe local
			return;
		}
	}
	health = health - 5;
	hpTxt.innerHTML = "HP: " + health;
	textin.innerHTML="It's so cold, I need to get to the bunker...";
	textBox.style.display="block";
	if (health <=0 ) {
		death();
	}
}

//this function is meant to manage a death scenario
function death(){
	cutprep(false);
	bgchange.style.backgroundImage = "url(img/ui/hudselect.png)";
	setTimeout(function(){ //cutscene
		bgchange.style.backgroundImage = "url(img/gameover.jpg)";
		document.getElementById("newdaytxt").innerHTML = "You Died!"; //update text
		document.getElementById("newday").style.display = "block";
		document.getElementById("reload").style.display = "block";
	}, 1000); 
}

//this function is meant to add items from the world into the inventory
function addInventory(itmPosition) {

	unselectItem();

	switch (roomItems[roomId][itmPosition]){
		case 103: //plastic bag
			if(expandInvItem == "Nothing"){
				document.getElementById("item" + itmPosition).style.display = "none"; //gets rid of item
				roomItems[roomId][itmPosition] = 0; //sets it to 0 on the database
				for (var i = 3; i <= 6; i++) { //expands inventory
					inventoryRoom[i] = 0;
				}
				backpackIcon.src = "img/items/item103.png"; //assign plastic bag as backpack icon
				expandInvItem = "Plastic Bag";
				return;
			}
			break;
		case 104: //backpack
			expandInv(false);
			document.getElementById("item" + itmPosition).style.display = "none"; //gets rid of item
			roomItems[roomId][itmPosition] = 0; //sets it to 0 on the database
			for (var i = 3; i <= inventoryRoom.length - 1; i++) { //expands inventory
				if (inventoryRoom[i]=="NA") {
					inventoryRoom[i] = 0;
				}
			}
			if (expandInvItem=="Plastic Bag") { //add plastic bag to inventory
				expandInvItem = "Backpack";
				roomItems[roomId][itmPosition] = 103;
				addInventory(itmPosition);
			}
			backpackIcon.src = "img/items/item104.png"; //assign backpack as backpack icon
			expandInvItem = "Backpack";
			return;
			break;
	}

	var whatItem = roomItems[roomId][itmPosition];
	
	var currentCarryTemp = currentCarry + itemInfo[whatItem][2];

	for (var i = 0; i <= inventoryRoom.length - 1; i++) {
		if (inventoryRoom[i]==0 && currentCarryTemp<carryMax) { //if there's an available slot & you can carry it

			inventoryRoom[i] = whatItem; //add it to the database
			roomItems[roomId][itmPosition] = 0; //remove it from the database
			updateCarry();
			document.getElementById("item"+itmPosition).src = "img/items/item0.png";
			document.getElementById("item"+itmPosition).style.display = "none";
			
			document.getElementById("inv"+i).src = "img/items/item"+inventoryRoom[i]+".png";

			itemEvents(99);
			return; 
		}
	}

	if (currentCarryTemp<carryMax) { //if there's no slots available
		textin.innerHTML = "I can't carry this...";
	}else{
		textin.innerHTML = "This is too heavy...";
	}
	
	textBox.style.display = "block";

	itemEvents(99);
}

//this function is meant to interact with items present in the inventory
function askItem(selected){

	textBox.style.display = "none";

	prevItemSelected = itemSelected; //determine the last selected item
	itemSelected = selected; //determine this selected item

	if (inventoryRoom[prevItemSelected]!=0 && prevItemSelected!="NA") {
		if (prevItemSelected!=itemSelected) { //clicked on 2 different items
			if (selected<15 && prevItemSelected<15) { //between normal inventory
				crafting(prevItemSelected,itemSelected);
				//switch them on the database
				var temp = inventoryRoom[itemSelected];
				inventoryRoom[itemSelected]=inventoryRoom[prevItemSelected];
				inventoryRoom[prevItemSelected]=temp;

				//assign new items
				document.getElementById("inv" + prevItemSelected).src = "img/items/item"+ inventoryRoom[prevItemSelected] +".png";
				document.getElementById("inv" + itemSelected).src = "img/items/item"+ inventoryRoom[itemSelected] +".png";
				unselectItem();
				updateCarry();
				itemEvents(99);
				return;
			}else{
				for (var i = 0; i <= storageLocal.length - 1; i++) {
					if (roomId==storageLocal[i]) {
						if (storageRoom[roomId][(prevItemSelected-15)]!=0) {
							if (selected>=15 && prevItemSelected>=15) { //between storage
								//switch them on the database
								var temp = storageRoom[roomId][(itemSelected-15)];
								storageRoom[roomId][(itemSelected-15)]=storageRoom[roomId][(prevItemSelected-15)];
								storageRoom[roomId][(prevItemSelected-15)]=temp;
				
								//assign new items
								document.getElementById("inv" + prevItemSelected).src = "img/items/item"+ storageRoom[roomId][(prevItemSelected-15)] +".png";
								document.getElementById("inv" + itemSelected).src = "img/items/item"+ storageRoom[roomId][(itemSelected-15)] +".png";
								unselectItem();
								updateCarry();
								itemEvents(99);
								return;
							}else{
								if (selected<15 && prevItemSelected>=15) { //from storage to the normal inv
									//switch them on the database
									var temp = inventoryRoom[itemSelected];
									inventoryRoom[itemSelected]=storageRoom[roomId][(prevItemSelected-15)];
									storageRoom[roomId][(prevItemSelected-15)]=temp;
					
									//assign new items
									document.getElementById("inv" + prevItemSelected).src = "img/items/item"+ storageRoom[roomId][(prevItemSelected-15)] +".png";
									document.getElementById("inv" + itemSelected).src = "img/items/item"+ inventoryRoom[itemSelected] +".png";
									unselectItem();
									updateCarry();
									itemEvents(99);
									return;
								}else{ //from normal inv to storage
									//switch them on the database
									var temp = storageRoom[roomId][(itemSelected-15)];
									storageRoom[roomId][(itemSelected-15)]=inventoryRoom[prevItemSelected];
									inventoryRoom[prevItemSelected]=temp;
									
									leverGenerator(5,0,1);
									//assign new items
									document.getElementById("inv" + prevItemSelected).src = "img/items/item"+ inventoryRoom[prevItemSelected] +".png";
									document.getElementById("inv" + itemSelected).src = "img/items/item"+ storageRoom[roomId][(itemSelected-15)] +".png";
									unselectItem();
									updateCarry();
									itemEvents(99);
									return;
								}
							}
					}
				}
				}
			}
		}else{ //double click
			if (roomId!=6 && roomId!=36 && itemSelected<15) { //prevent them from using items
				var whatItem = inventoryRoom[itemSelected];
				var itemcount = 0;
	
				for (var i = 0; i <= 3 - 1; i++) {
					if (inventoryRoom[i]==whatItem) { //check how many items the same item exists in the inventory
						itemcount++;
					}
				}
				if (whatItem==8 && itemcount==1 && roomId<20 || whatItem==101 && itemcount==1 && roomId<20 || whatItem==100 && itemcount==1 && roomId<20 || whatItem==107 && itemcount==1 && roomId<20 || whatItem==5 && itemcount==1 && roomId<20 ) { //doesn't let him consume some items
					unselectItem();
					textin.innerHTML="I think need this...";
					textBox.style.display="block";
					return;
				}else{
					itemEvents(itemSelected); //checks item event
					if (selected<15) {
						document.getElementById("inv" + itemSelected).src = "img/items/item"+ inventoryRoom[itemSelected] +".png";
					}else{
						document.getElementById("inv" + itemSelected).src = "img/items/item"+ storageRoom[roomId][(prevItemSelected-15)] +".png";
					}
					unselectItem();
					updateCarry();
					itemEvents(99);
					return;
				}
			}
			
		}
	}
	
	
	if (prevItemSelected!="NA") {
		if (prevItemSelected<15) {
			document.getElementById("inv"+prevItemSelected).style.backgroundImage = "url(img/ui/inv.png)";
		}else{
			document.getElementById("inv"+prevItemSelected).style.backgroundImage = "url(img/ui/"+storagePosition[roomId][3]+".png)";
		}
	}

	if (selected<15) {
		document.getElementById("inv"+selected).style.backgroundImage = "url(img/ui/hudselect.png)";
	}else{
		document.getElementById("inv"+selected).style.backgroundImage = "url(img/ui/"+storagePosition[roomId][3]+"select.png)";
	}

	if (selected<15) { //check normal inventory
		var itemID = inventoryRoom[selected]; //determine Item Id
	}else{ //check storage
		var itemID = storageRoom[roomId][(selected-15)]; //determine Item Id
	}

	if (itemID!=0) { //if there are items assigned do the prompt
		textin.innerHTML = "Click again to " + itemInfo[itemID][1] + itemInfo[itemID][0] + ".";
		textBox.style.display = "block";
	}

}

//this function is meant to unselect Items from the Inventory
function unselectItem(){
	if (itemSelected!="NA") {
		if (itemSelected<15) {
			document.getElementById("inv"+itemSelected).style.backgroundImage = "url(img/ui/inv.png)";
		}else{
			document.getElementById("inv"+itemSelected).style.backgroundImage = "url(img/ui/"+storagePosition[roomId][3]+".png)";
		}
	}
	if (prevItemSelected!="NA") {
		if (prevItemSelected<15) {
			document.getElementById("inv"+prevItemSelected).style.backgroundImage = "url(img/ui/inv.png)";
		}else{
			document.getElementById("inv"+prevItemSelected).style.backgroundImage = "url(img/ui/"+storagePosition[roomId][3]+".png)";
		}
	}
	prevItemSelected = "NA";
	itemSelected = "NA";
	textBox.style.display = "none";
}

//this function is meant to open or close the extra inventory
function expandInv(openState){
	//unselects items
	unselectItem();

	if (openState==true) { //open inventory
		if (expandInvItem=="Backpack") { //open animation
			backpackIcon.src = "img/items/item104open.png";
		}
		backpackIcon.setAttribute("onclick", "expandInv(false)");
		extraInventorySpace.style.display = "block";
		for (var i = inventoryRoom.length - 1; i >= 0; i--) {
			if (inventoryRoom[i]!="NA") { //if it exists, show it
				document.getElementById("inv" + i).style.display = "inline";
			}
		}

		updateCarry();

	}else{ //close inventory
		backpackIcon.setAttribute("onclick", "expandInv(true)");
		extraInventorySpace.style.display = "none";
		if (expandInvItem=="Backpack") { //close animation
			backpackIcon.src = "img/items/item104.png";
		}
	}
}

function expandContainer(openState,objSlt){
	//unselects items
	unselectItem();

	if (openState==true) { //open inventory
		if (objSlt!="NA") { //in case it's an object activating it
			roomObj[roomId][(objSlt*3)+2]=("expandContainer(false,"+objSlt+")");
		}
		storageSpace.style.display = "block";
		storageSpace.style.width = storagePosition[roomId][0];
		storageSpace.style.top = storagePosition[roomId][1];
		storageSpace.style.left = storagePosition[roomId][2];
		for (var i = 0; i <= storageRoom[roomId].length - 1; i++) {
			if (storageRoom[roomId][i]!="NA") { //if it exists, show it
				document.getElementById("inv" + (i+15)).src = "img/items/item"+storageRoom[roomId][i]+".png";
				document.getElementById("inv" + (i+15)).style.display = "inline";
				document.getElementById("inv" + (i+15)).style.backgroundImage = "url(img/ui/"+storagePosition[roomId][3]+".png)";
			}
		}

	}else{ //close inventory
		if (objSlt!="NA") {
			roomObj[roomId][(objSlt*3)+2]=("expandContainer(true,"+objSlt+")");
		}
		storageSpace.style.display = "none";
	}
}

//this function is meant to update the weight
function updateCarry(){
	var carryTemp = 0;
	for (var i = 0; i <= inventoryRoom.length - 1; i++) {
		if (inventoryRoom[i] != "NA") {
			var item = inventoryRoom[i];
			carryTemp = carryTemp + itemInfo[item][2];
		}
	}
	currentCarry = carryTemp;
	carryTxt.innerHTML = currentCarry.toFixed(1) + " / " + carryMax +" KG"; //update text
}

//this function is meant to check if the currect location has npcs or not
function checkNpc(){
	for (var i = 0; i <= (npcLocal.length/2) - 1; i++) {
		if (npcLocal[(i*2)]==roomId && npcLocal[(i*2)+1]<=script) { //there's npcs in this room
			npc.style.display = "block";
			npc.style.animationDirection="reverse";
			replayAnime(npc);
			npc.style.zIndex = npcPos[i][0];
			npc.style.width = npcPos[i][1];
			npc.style.left = npcPos[i][2];
			npc.style.top = npcPos[i][3];
			if (npcPos[i][4]!="NA") {
				npc.src = "img/npcs/"+npcPos[i][4];
			}else{
				npc.src = "img/npcs/npc"+ i +".png";
			}
			npc.setAttribute("onclick","talkNPC("+ i +","+npcChapter[i]+")");
			npcbox.setAttribute("onclick","talkNPC("+ i +","+npcChapter[i]+")");
			return;
		}
	}
	//there's no npcs in this room
	npc.style.display = "none";
}

//this function is meant to happen when an npc is clicked
function talkNPC(npcidsub,chapter) {
	overlay.setAttribute("onclick","expandInv(false);talkNPC("+ npcid +","+npcChapter[npcid]+")");
	npcid=npcidsub;
	clearTimeout(textTimeout);
	//change to different screen
	overlay.style.display="block";

	setTimeout(function(){ //wait 2 second for the animation to play out
		overlay.style.opacity = "100";
	}, 5);

	//progress story
	storyline=storyline+1;

	if (typeof npcChange[npcid] !== 'undefined') {
		if (npcChange[npcid][chapter][0]==storyline) {
			npc.src = "img/npcs/"+npcChange[npcid][chapter][1];
		}
	}

	if (storyline==0) {
		//kickstart the animation
		npc.style.width = npcTalk[npcid][0];
		npc.style.left = npcTalk[npcid][1];
		npc.style.top = npcTalk[npcid][2];
		npc.style.zIndex= 6;
		textTimeout = setTimeout(function(){ //wait 2 second for the animation to play out
				npcbox.style.display="block";
				npcpara.innerHTML = story[npcid][chapter][storyline+1];
				npcname.innerHTML = story[npcid][chapter][0];
		}, 1500);
		return;
	}

	npcpara.innerHTML = story[npcid][chapter][storyline+1];
	npcname.innerHTML = story[npcid][chapter][0];

	if (story[npcid][chapter][storyline+1]!=undefined) {
		//replay animation
		npcpara.style.animationDirection="reverse";
		replayAnime(npcpara);
		npcbox.style.display="block";
	}else{
		storyline=-1;
		npcbox.style.display="none";
		npc.style.width = npcPos[npcid][1];
		npc.style.left = npcPos[npcid][2];
		npc.style.top = npcPos[npcid][3];
		npcChapter[npcid] = npcChapter[npcid] + 1;
		switch (npcid){
			case 0: //Old Mitchell
				if (script<0) {
					script=0;
					n0Trigger.style.display = "block";
				}
				if (npcChapter[npcid]==2) {
					npcChapter[npcid] = 1;
				}else{
					if (npcChapter[npcid]==4) {
						npcChapter[npcid] = 3;
					}
				}
				break;
			case 1: //Eric
				if (npcChapter[npcid]>=1 && script!=5) {
					npcChapter[npcid] = 1;
					script=2;
				}else{
					if (npcChapter[npcid]==3) {
						script=6; //after getting knife from with Eric

						npcLocal[0] = 5; //old man now spawns in basement
						npcLocal[1] = 8;
						npcChapter[0] = 2; //set new dialogue
						changeLocal(2,"NA");
						for (var i = 0; i <= 3 - 1; i++) { //swap bandages for a knife
							if (inventoryRoom[i]==100) {
								inventoryRoom[i]=107;
								document.getElementById("inv" + i).src = "img/items/item"+ inventoryRoom[i] +".png";
								break;
							}
						}
					}
				}
				break;
			case 2: //Intruder
				if (npcChapter[npcid]==1) { //talk for first time, start battle
					script=11;
					checkBadGuy();
				}else{
					if (npcChapter[npcid]>=2) { //keep her in loop after dying
						npcChapter[npcid] = 2;
					}
				}
				break;
		}
		npc.setAttribute("onclick","talkNPC("+ npcid +","+npcChapter[npcid]+")");
		npcbox.setAttribute("onclick","talkNPC("+ npcid +","+npcChapter[npcid]+")");
		overlay.setAttribute("onclick","expandInv(false);");
		textTimeout = setTimeout(function(){ //wait 2 second for the animation to play out
			overlay.style.opacity = "0";
			if (npcPos[npcid][4]!="NA") {
				npc.src = "img/npcs/"+npcPos[npcid][4];
			}else{
				npc.src = "img/npcs/npc"+ npcid +".png";
			}
		}, 5);
		textTimeout = setTimeout(function(){ //wait 2 second for the animation to play out
			overlay.style.display="none";
			npc.style.zIndex = npcPos[npcid][0];
		}, 500);
	}
	
	
}

function crafting(prevItemSelected,itemSelected) {
	for (var j = 0; j<=craftlist.length-1; j++){
		if (craftlist[j][0]==inventoryRoom[prevItemSelected] && craftlist[j][1]==inventoryRoom[itemSelected] || craftlist[j][0]==inventoryRoom[itemSelected] && craftlist[j][1]==inventoryRoom[prevItemSelected]) {
			inventoryRoom[prevItemSelected] = 100; //craft bandages from cloth and alcohol
			inventoryRoom[itemSelected] = 0;

			//special msg
			script=4;
			return;
		}
	}
}

//this function is meant to handle the character's speach
function innerMonologe() {
	if (health<30) {
		textin.innerHTML="I don't feel so good...";
		textBox.style.display="block";
	}else{
		if (thirst<30) {
			textin.innerHTML="I'm thirsty...";
			textBox.style.display="block";
		}else{
			if (hunger<30) {
			textin.innerHTML="I'm hungry...";
			textBox.style.display="block";
			}
		}
	}
	switch (roomId){
		case 17: //road
			if (script==7) {
				script=8;
			}
			break;
		case 3: //road
			if (script==6) {
				script=7;
			}
			break;
		case 4: //old man's house
			if (script==9) {
				script=10;
			}
			break;
		case 6: //generator
			expandContainer(true,"NA");
			break;
		case 7: //enter house
			if (script<3 && genFuel[0][1]==true) {
				script=3;
			}else{
				if (genFuel[0][1]==false) {
					textin.innerHTML="It's too dark...";
					textBox.style.display="block";
				}
			}
			break;
		case 14: //old man's house entrance
			if (script==8) {
				script=9;
			}
			break;
		case 17: //city start
			if (script==12) {
				script=13;
			}
			break;
		case 36: //generator
			//expandContainer(true,"NA");
			break;
	}
	switch (script){
		case 0: //move out of house
			if (roomId==14) {
				textin.innerHTML="I better go to the big house and look for the items I need...";
				script=1;
				textBox.style.display="block";
			}
			break;
		case 2: //move to eric
			if (roomId==2) {
				textin.innerHTML="I should make the bandages before meeting him again...";
				textBox.style.display="block";
			}
			break;
		case 3: //can't leave house
			if (roomId==7 && genFuel[0][1]==true) {
				textin.innerHTML="I have to craft a bandage before leaving...";
				textBox.style.display="block";
			}
			break;
		case 4: //craft bandages
				textin.innerHTML="Alright, I got the bandages, lets trade with Eric.";
				script=5;
				npcChapter[1] = 2; //change eric dialogue
				textBox.style.display="block";
			break;
	}
}

function introCutscene(skip) {
	cutsceneBox.removeAttribute("onclick");
	cutsceneSkip.removeAttribute("onclick");
	cutsceneSkip.style.cursor = "default";
	overlay.style.display="block";

	setTimeout(function(){ //wait 2 second for the animation to play out
		overlay.style.opacity = "100";
	}, 5);

	//progress story
	cutsceneLine=cutsceneLine+1;

	if (cutsceneLine==cutscene.length || skip==true) { //end cutscene
		changeLocal(5,"NA"); //sends player to the start
		cutsceneBox.style.display = "none";
		cutsceneSkip.style.display = "none";
		inventory.style.display ="block";
		//ticks();
		resonanceAudio("MouseClick");
	}else{
		setTimeout(function(){
		replayAnime(cutsceneBox);
		bgchange.style.backgroundImage = "url(img/cutscene"+cutsceneLine+".jpg)";
		},500);
		var introTimeout = setTimeout(function(){
			overlay.style.opacity = "0";
		
			cutsceneTxt.innerHTML= cutscene[cutsceneLine];

			cutsceneSkip.style.display = "block";
			cutsceneSkip.style.cursor = "pointer";
			cutsceneSkip.setAttribute("onclick", "introCutscene(true);");
	
			replayAnime(cutsceneBox);
			cutsceneBox.setAttribute("onclick", "introCutscene();");
		},1000);
		setTimeout(function(){
		overlay.style.display="none";
		},1500);
	}

}

//this function is meant to replay animations
function replayAnime(object){
	if (object.style.animationDirection=="reverse") {
		object.style.animationDirection = "normal";
	}else{
		object.style.animationDirection = "reverse";
	}
	//replay animation
	object.style.display = "none";
	object.classList.remove("textanime");
	void object.offsetWidth;
	object.classList.add("textanime");
	object.style.display = "block";
}

//this function is meant to check if the currect location has npcs or not
function checkBadGuy(){
	for (var i = 0; i <= badGuyLocal.length - 1; i++) {
		if (badGuyLocal[i][0]==roomId && badGuyLocal[i][1]==script && badGuyLocal[i][2]>0) {
			badGuyHp = badGuyLocal[i][2]; //assign badguy hp from database
			badGuyId = i;

			badGuy.style.display = "block";
			badGuy.src = "img/badguy"+ i +".png";
			document.getElementById("triggers").style.display = "none"; //remove triggers
			npc.style.display = "none"; //remove npc

			document.getElementById("attackbtn").style.display = "block";

			//badGuyAttacks(); //begin atacking
			//expand();
			textin.innerHTML="Click on the Attack button to attack!";
			textBox.style.display="block";
			return;
		}
	}
}

//this function is meant to deal damage to the enemy and leave a cooldown before the next attack
function attack(){
	if (attackCooldown==false) {
		attackCooldown=true;
		document.getElementById("attackbtn").style.filter = "contrast(0%)";
		for (var j = 0; j<3; j++){
			var tempitem = inventoryRoom[j];
			if (itemInfo[tempitem][3]==true) { //check inventory for weapons
				badGuyHp=badGuyHp-weaponInfo[tempitem][0];
				badGuyLocal[badGuyId][2] = badGuyHp;
				badGuy.src = "img/badguy"+ badGuyId +"damage.png";
				fps.src= "img/stabbing.gif";
				fps.style.display="block";
				break;
			}
		}
		setTimeout(function(){ //wait for weapon cooldown
			attackCooldown=false;
			document.getElementById("attackbtn").style.filter = "contrast(200%)";
			fps.style.display="none";
			fps.src= "img/black.png";
			badGuy.src = "img/badguy"+ badGuyId +".png";
			if (badGuyId==0 && badGuyHp==24) {
				document.getElementById("circle").style.display = "block";
				document.getElementById("circle").style.width = "17%";
				document.getElementById("circle").style.height = "30%";
				document.getElementById("circle").style.left = "70%";
				document.getElementById("circle").style.top = "40%";
				textin.innerHTML="Click on the Block button to defend from incoming attacks!";
				textBox.style.display="block";
			}
		},weaponInfo[tempitem][1]);
	}

	if (badGuyHp<=0) { //badguy dies
		badGuyLocal[badGuyId][2] = 0; //remove him from database
		npcChange[2][0] = ["1","npc2dead.png"];
		npcChange[2][1] = ["0","npc2dead.png"];
		npcChange[2][2] = ["0","npc2dead.png"];
		npcPos[0][4]= "npc0dead.png"; //change old man to be dead
		npcPos[0][2]= "17%";
		npcPos[0][3]= "61%";

		npcTalk[0][0]= "41%";
		npcTalk[0][1]= "56%";
		npcTalk[0][2]= "22%";

		npc.src = "img/npcs/npc2dead.png";

		npc.style.width = "23%"; //display npc width
		npc.style.top = "54.6%"; //display npc top
		npc.style.left = "47%"; //display npc left

		npcPos[2][4]= "npc2dead.png"; //change bandid to be dead
		npcPos[2][2]= "54.6%";	
		npcPos[2][3]= "47%";

		npcTalk[2][0]= "54%";
		npcTalk[2][1]= "43%";
		npcTalk[2][2]= "23%";

		item4.src = "img/items/item"+ badGuyLocal[badGuyId][4] +".png"; //assign item
		roomItems[roomId][4] = badGuyLocal[badGuyId][4]; //add item to the database
		item4.style.width = itemPosition[roomId][20]; //display item width
		item4.style.top = itemPosition[roomId][21]; //display item top
		item4.style.left = itemPosition[roomId][22]; //display item left
		item4.style.transform = "rotate("+itemPosition[roomId][23]+")"; //display item rotation
		item4.style.zIndex = itemPosition[roomId][24]; //display item zindex
		item4.style.display="block";

		script=12;

		roomInfo[4][1]=20; //change database to lead to city, this should be changed into a cutscene later
		n0Trigger.setAttribute("onclick", "changeLocal("+ roomInfo[4][1] +",0)");
		n1Trigger.setAttribute("onclick", "changeLocal("+ roomInfo[4][2] +",0)");
		//get rid of enemy and qte
		badGuy.style.display="none";
		clearTimeout(badGuyHit);
		document.getElementById("circle").style.display = "none";
		document.getElementById("attackbtn").style.display = "none";
		clearTimeout(circleTimeout);
		clearTimeout(circleTimeout2);

		document.getElementById("triggers").style.display = "block";
		n1Trigger.style.display = "block"; //unlock basement
		n0Trigger.style.display = "block"; //unlock house
		npc.style.display = "block"; //npc is back
	}
}

//this function is meant to deal with bad guy attacks
function badGuyAttacks(){
	setTimeout(function(){ //repeat
		if (health>0 && badGuyHp>0 && badGuyAttackCooldown==false) { //both alive
			badGuyAttackCooldown = true;
			setTimeout(function(){ //animation
				badGuy.src = "img/badguy"+ badGuyId +".png";
			},400);
			badGuyHit = setTimeout(function(){ //wait for weapon cooldown
				if (badGuyId!=0) {
					health=health-badGuyLocal[badGuyId][3];
				}
				hpUpdate("NA");
				badGuy.src = "img/badguy"+ badGuyId +"attack.png";
	
				badGuyAttackCooldown = false;
	
				badGuyAttacks();
			},badGuyLocal[badGuyId][5]);
		}
	},500);
}

//dodge qte
function expand(){
	setTimeout(function(){ //repeat

	if (health>0 && badGuyHp>0){
		var leftRando = Math.floor(Math.random() * 61) + 20;
		var topRando = Math.floor(Math.random() * 61) + 20;
		document.getElementById("circle").style.display = "block";
		document.getElementById("circle").style.width = "0%";
		document.getElementById("circle").style.height = "0%";
		document.getElementById("circle").style.left = (leftRando+6) + "%";
		document.getElementById("circle").style.top = (topRando+10) + "%";
		setTimeout(function(){ //tell him to decrease
			document.getElementById("circle").style.width = "17%";
			document.getElementById("circle").style.height = "30%";
			document.getElementById("circle").style.left = leftRando + "%";
			document.getElementById("circle").style.top = topRando + "%";
		},50);
		circleTimeout = setTimeout(function(){ //wait circle
			document.getElementById("circle").style.display = "none";
		},badGuyLocal[badGuyId][5]-50);
		circleTimeout2 = setTimeout(function(){ //repeat
			expand();
		},badGuyLocal[badGuyId][5]);
	}
	
	},500);
}

//clicking on the qte
function expandClick(){
	document.getElementById("circle").style.display = "none";
	clearTimeout(badGuyHit);
	clearTimeout(circleTimeout);
	clearTimeout(circleTimeout2);
	badGuy.src = "img/badguy"+ badGuyId +".png";
	badGuyAttackCooldown = false;
	setTimeout(function(){ //repeat
		badGuyAttacks();
		expand();
	},50);
}

//this function is meant to check if the currect location has storage systems or not
function checkObj(){
	if (typeof roomObj[roomId] !== 'undefined') { //check if there's restrictions
		for (var i = 0; i <= (roomObj[roomId].length/3) - 1; i++) {
			document.getElementById("obj" + i).src = "img/renders/bg"+roomId+"/"+ roomObj[roomId][(i*3)+1];
			document.getElementById("obj" + i).style.width = objectPosition[roomId][(5*i)]; //display item width
			document.getElementById("obj" + i).style.top = objectPosition[roomId][((5*i)+1)]; //display item top
			document.getElementById("obj" + i).style.left = objectPosition[roomId][((5*i)+2)]; //display item left
			document.getElementById("obj" + i).style.transform = "rotate("+objectPosition[roomId][((5*i)+3)]+")"; //display trigger left
			document.getElementById("obj" + i).style.zIndex = objectPosition[roomId][((5*i)+4)]; //display item zindex
			if (roomObj[roomId][(i*3)+2]=="NA") {
				document.getElementById("obj" + i).setAttribute("onclick", "objInteract("+ roomObj[roomId][(i*3)] +"," + i + ")");
			}else{
				document.getElementById("obj" + i).setAttribute("onclick", roomObj[roomId][(i*3)+2] + ",objInteract("+ roomObj[roomId][(i*3)] +"," + i + ")");
			}
			document.getElementById("obj" + i).style.display = "block"; //display item
		}
	}
}

//this function is meant to handle object interactions
function objInteract(objId,objTrg) {
	unselectItem();
	textin.innerHTML=interactObj[objId][0]; //display message
	textBox.style.display="block";

	if (typeof interactObj[objId][1] !== 'undefined') { //check if it exists
		//add it to the database
		var tempObjSrc = roomObj[roomId][(objTrg*3)+1]; //swap source
		roomObj[roomId][(objTrg*3)+1] = interactObj[objId][1];
		interactObj[objId][1] = tempObjSrc;
	}
	if (typeof interactObj[objId][2] !== 'undefined') {
		var tempObjWidth = objectPosition[roomId][(5*objTrg)]; //swap width
		objectPosition[roomId][(5*objTrg)] = interactObj[objId][2];
		interactObj[objId][2] = tempObjWidth;

		var tempObjTop = objectPosition[roomId][((5*objTrg)+1)]; //swap top
		objectPosition[roomId][((5*objTrg)+1)] = interactObj[objId][3];
		interactObj[objId][3] = tempObjTop;

		var tempObjLeft = objectPosition[roomId][((5*objTrg)+2)]; //swap left
		objectPosition[roomId][((5*objTrg)+2)] = interactObj[objId][4];
		interactObj[objId][4] = tempObjLeft;

		var tempObjDeg = objectPosition[roomId][((5*objTrg)+3)]; //swap rotation
		objectPosition[roomId][((5*objTrg)+3)] = interactObj[objId][5];
		interactObj[objId][5] = tempObjDeg;
	}
	checkObj(); //check the objects again to update them
}

//this function is meant to handle room's functionality depending on their generators
function checkGenerator(){
	if (roomInfo[roomId][13]!="NA" && genFuel[(roomInfo[roomId][13])][0]!=0 && genFuel[(roomInfo[roomId][13])][1]==true) { //if it has a generator and it has fuel then turn on lights
		bgchange.style.backgroundImage = "url(img/renders/bg"+ roomId +"light"+ roomInfo[roomId][12] +")"; //changes room
	}
}

function leverGenerator(leverId,generatorId,objTrg) {
	if (storageRoom[roomId][0]==5) { //if there's a jerry can inside the storage
		if (genFuel[generatorId][0]<=90) {
			genFuel[generatorId][0]=genFuel[generatorId][0]+40;
			storageRoom[roomId][0]=0;
			document.getElementById("inv15").src = "img/items/item0.png";
			setTimeout(function(){
				textin.innerHTML="I added fuel to the generator.";
				textBox.style.display="block";
			}, 5);
		}else{
			setTimeout(function(){
				textin.innerHTML="The generator is already full!";
				textBox.style.display="block";
			}, 5);
		}
		if (genFuel[generatorId][0]>100) {
			genFuel[generatorId][0]=100;
		}
	}
}

function leverToggle(leverId,generatorId){
	if (genFuel[generatorId][0]>0) {
		if (genFuel[generatorId][1]==false) {
			genFuel[generatorId][1]=true;
			interactObj[leverId][1]="leveron.png";
			interactObj[leverId][0]="I turned it on.";
			triggerPosition[16][17]="generatoron.png";
			triggerPosition[1][17]="house2light.png";
		triggerPosition[3][17]="house2mirrorlight.png";
		}else{
			genFuel[generatorId][1]=false;
			interactObj[leverId][1]="lever.png";
			interactObj[leverId][0]="I turned it off.";
			triggerPosition[16][17]="generator.png";
			triggerPosition[1][17]="house2.png";
			triggerPosition[3][17]="house2mirror.png";
		}
	}
	
}

function plankRemove(){
	for (var j = 0; j<=inventoryRoom.length-1; j++){
		if (inventoryRoom[j]==0) {
			inventoryRoom[j]=108;
			document.getElementById("inv"+j).src = "img/items/item"+inventoryRoom[j]+".png";
			triggerPosition[1][17]="house2.png";
			triggerPosition[3][17]="house2mirror.png";
			return;
		}
	}
	objInteract(6,0);
	setTimeout(function(){
		textin.innerHTML="I can't carry these planks...";
		textBox.style.display="block";
	}, 5);
}

function filterSun(percent){
	skychange.style.filter = "brightness("+percent+"%)";
	if (roomInfo[roomId][14]==true) { //if it's outdoors
		bgchange.style.filter = "brightness("+percent+"%)";
		obj0.style.filter = "brightness("+percent+"%)";
		obj1.style.filter = "brightness("+percent+"%)";
		obj2.style.filter = "brightness("+percent+"%)";
		obj3.style.filter = "brightness("+percent+"%)";
		obj4.style.filter = "brightness("+percent+"%)";
		n0Trigger.style.filter = "brightness("+percent+"%)";
		n1Trigger.style.filter = "brightness("+percent+"%)";
		n2Trigger.style.filter = "brightness("+percent+"%)";
		n3Trigger.style.filter = "brightness("+percent+"%)";
		npc.style.filter = "brightness("+percent+"%)";
		item0.style.filter = "brightness("+percent+"%)";
		item1.style.filter = "brightness("+percent+"%)";
		item2.style.filter = "brightness("+percent+"%)";
		item3.style.filter = "brightness("+percent+"%)";
		item4.style.filter = "brightness("+percent+"%)";
	}else{
		bgchange.style.filter = "brightness(100%)";
		obj0.style.filter = "brightness(100%)";
		obj1.style.filter = "brightness(100%)";
		obj2.style.filter = "brightness(100%)";
		obj3.style.filter = "brightness(100%)";
		obj4.style.filter = "brightness(100%)";
		n0Trigger.style.filter = "brightness(100%)";
		n1Trigger.style.filter = "brightness(100%)";
		n2Trigger.style.filter = "brightness(100%)";
		n3Trigger.style.filter = "brightness(100%)";
		npc.style.filter = "brightness(100%)";
		item0.style.filter = "brightness(100%)";
		item1.style.filter = "brightness(100%)";
		item2.style.filter = "brightness(100%)";
		item3.style.filter = "brightness(100%)";
		item4.style.filter = "brightness(100%)";
	}
}

function sleep(prompt){
	unselectItem();
	if (prompt=="bed" && night==true) {
		overlay.style.display="block";

		setTimeout(function(){
			overlay.style.opacity = "100";
		}, 5);
	
		setTimeout(function(){
			bedtxt.style.animationDirection="reverse";
			replayAnime(bedtxt);
			bedtxt.style.display="block";
		}, 1500);
	}else{
		if (prompt=="no") {
			setTimeout(function(){ 
				overlay.style.opacity = "0";
				bedtxt.style.display="none";
			}, 5);
			setTimeout(function(){ 
				overlay.style.display="none";
			}, 500);
		}
		if (prompt=="yes") {
			dayscene=true;
			overlay.style.filter = "invert(100%)";
			bedtxt.style.display="none";
			day = day + 1; //new day
			document.getElementById("newdaytxt").innerHTML = "Day " + day; //update text
			setTimeout(function(){ //cutscene
				dayTxt.style.animationDirection="reverse";
				replayAnime(dayTxt);
				dayTxt.style.display="block";
			}, 1000);
			setTimeout(function(){ //cutscene
				overlay.style.opacity = "0";
				dayTxt.style.display = "none";
				timeLeft=359;
				dayscene=false;
				ticks();
				for (var j = 21; j<=35-1; j++){ //populate db with more 0
					for (var i = 0; i<=day-1; i++){
						var templength = lootTable[j].length;
						lootTable[j][templength]=0;
					}
				}
				spawnItems();
			}, 5000);
			setTimeout(function(){ //cutscene
				overlay.style.display="none";
				overlay.style.filter = "invert(0%)";
			}, 5500); 
		}
	}
}

var images = [];
var loadtotal = 0;
var currentload = 0;
function preload() {
	for (var i = 0; i < arguments.length; i++) {
		loadtotal=loadtotal+1;
        images[i] = new Image();
        images[i].src = preload.arguments[i];
        images[i].setAttribute("onload", "loadcheck()");
    }
    for (var i = 0; i < 20; i++) {
    	loadtotal=loadtotal+1;
        images[i] = new Image();
        images[i].src = "img/renders/bg"+ i + roomInfo[i][12];
        images[i].setAttribute("onload", "loadcheck()");
    }
    for (var i = 0; i < 22; i++) {
    	loadtotal=loadtotal+1;
        images[i] = new Image();
        images[i].src = "img/items/item"+ i +".png";
        images[i].setAttribute("onload", "loadcheck()");
    }
    for (var i = 100; i < 108; i++) {
    	if (i!=102) {
    		loadtotal=loadtotal+1;
    		images[i] = new Image();
        	images[i].src = "img/items/item"+ i +".png";
        	images[i].setAttribute("onload", "loadcheck()");
    	}
    }
}

function loadcheck(){
	currentload=currentload+1;
	if (loadtotal>currentload) {
		document.getElementById("loadtxt").innerHTML = currentload + " / "+loadtotal+" Assets Loaded";
	}else{
		document.getElementById("loadlogo").style.display="none";
		document.getElementById("loadtxt").style.display="none";
		document.body.style.backgroundColor = "black";
		document.getElementById("content").style.display="block";
	}
}

function resonanceAudio(audioprompt){
	let audioroom = 0;
	if (typeof roomId === 'undefined'){
		audioroom = roomId;
	}
	// Create an AudioContext
	let audioContext = new AudioContext();

	// Create a (first-order Ambisonic) Resonance Audio scene and pass it
	// the AudioContext.
	let resonanceAudioScene = new ResonanceAudio(audioContext);

	// Connect the scene’s binaural output to stereo out.
	resonanceAudioScene.output.connect(audioContext.destination);

	// Define room dimensions.
	// By default, room dimensions are undefined (0m x 0m x 0m).
	let roomDimensions = {
	  width: audioInfo[audioroom][0],
	  height: audioInfo[audioroom][1],
	  depth: audioInfo[audioroom][2],
	};

	// Define materials for each of the room’s six surfaces.
	// Room materials have different acoustic reflectivity.
	let roomMaterials = {
  		// Room wall materials
  		left: audioInfo[audioroom][3],
  		right: audioInfo[audioroom][4],
  		front: audioInfo[audioroom][5],
  		back: audioInfo[audioroom][6],
  		// Room floor
  		down: audioInfo[audioroom][7],
  		// Room ceiling
  		up: audioInfo[audioroom][8],
	};

	// Add the room definition to the scene.
	resonanceAudioScene.setRoomProperties(roomDimensions, roomMaterials);

	// Create an AudioElement.
	let audioElement = document.createElement('audio');
	//audioElement.crossOrigin = "anonymous";

	// Load an audio file into the AudioElement.
	audioElement.src = 'sound/' + audioprompt + '.wav';

	// Generate a MediaElementSource from the AudioElement.
	let audioElementSource = audioContext.createMediaElementSource(audioElement);

	// Add the MediaElementSource to the scene as an audio input source.
	let source = resonanceAudioScene.createSource();
	audioElementSource.connect(source.input);

	// Set the source position relative to the room center (source default position).
	source.setPosition(audioInfo[audioroom][9], audioInfo[audioroom][10], audioInfo[audioroom][11]);

	// Play the audio.
	audioElement.play();
}

function audioEvent(incId,incConf){
	switch (incId){
		case 0:
		if (incConf=="false") {
			roomObj[5][2]="resonanceAudio('FirstRoomArmarioAbrir'); audioEvent(0,'true')";
		}else{
			roomObj[5][2]="resonanceAudio('FirstRoomArmarioFechar'); audioEvent(0,'false')";
		}
		break;
		case 2:
		if (incConf=="false") {
			roomObj[5][8]="resonanceAudio('FirstRoomArmarioAbrir'); audioEvent(0,'true')";
		}else{
			roomObj[5][8]="resonanceAudio('FirstRoomArmarioFechar'); audioEvent(0,'false')";
		}
	}
}