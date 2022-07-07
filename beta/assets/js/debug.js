var tickers = 1;
function debugtick(){
	setTimeout(function(){
		if (typeof roomId !== 'undefined') {
		    document.getElementById("roomiddebug").innerHTML = "roomId =" + roomId;
		}
		if (typeof npcid !== 'undefined' && typeof npcid !== 'undefined') {
			document.getElementById("npcchapterdebug").innerHTML = "npcChapter[" +npcid +"] =" + npcChapter[npcid];
		}
		if (typeof script !== 'undefined') {
			document.getElementById("scriptdebug").innerHTML = "script =" + script;
		}
		if (typeof badGuyId !== 'undefined') {
			document.getElementById("badguyiddebug").innerHTML = "badGuyId =" + badGuyId;
		}
		if (typeof badGuyHp !== 'undefined') {
			document.getElementById("badguyhpdebug").innerHTML = "badGuyHp =" + badGuyHp;
		}
		if (typeof health !== 'undefined') {
			document.getElementById("healthdebug").innerHTML = "health =" + health;
		}
		if (typeof hunger !== 'undefined') {
			document.getElementById("hungerdebug").innerHTML = "hunger =" + hunger;
		}
		if (typeof thirst !== 'undefined') {
			document.getElementById("thirstdebug").innerHTML = "thirst =" + thirst;
		}
		if (typeof timeLeft !== 'undefined') {
			document.getElementById("timeleftdebug").innerHTML = "timeLeft =" + timeLeft;
		}
		if (typeof currentCarry !== 'undefined') {
			document.getElementById("weightdebug").innerHTML = currentCarry.toFixed(1) + " / " + carryMax +" KG";
		}
		if (typeof genFuel[1][0] !== 'undefined') {
			document.getElementById("fueldebug").innerHTML = "genFuel[1][0] =" + genFuel[1][0];
		}
		tickers=tickers+2;
		//document.getElementById("backgroundcontent").style.backgroundPosition = "right " +tickers +"px center";
		//console.log(tickers);
		debugtick();
	},1000);
}

function debugChangeLocal(){
	changeLocal(document.getElementById("inputroomid").value,"NA");
}

function debugScript(){
	script = document.getElementById("inputscript").value;
}

function debugDisplay(){
	document.getElementById("debug").style.display = "none";
}

function debugAddInventory(){
	for (var i = 0; i <= inventoryRoom.length - 1; i++) {
		if (inventoryRoom[i]==0) { //if there's an available slot & you can carry it
			inventoryRoom[i] = document.getElementById("inputinventory").value; //add it to the database
			updateCarry();
			document.getElementById("inv"+i).src = "img/items/item"+inventoryRoom[i]+".png";
			return; 
		}
	}
}

function debugHealth(){
	health = document.getElementById("inputhealth").value;
	hpTxt.innerHTML = "HP: " + health;
}

function debugFilter() {
	bgchange.style.filter = "brightness(20%)";
	skychange.style.filter = "brightness(20%)";
}

function debugTimeLeft() {
	timeLeft = parseInt(timeLeft) + document.getElementById("inputtimeleft").value;
}

function debugHitbox(a){
	if (a==true) {
		n0Trigger.style.backgroundColor = "red";
		n1Trigger.style.backgroundColor = "green";
		n2Trigger.style.backgroundColor = "blue";
		n3Trigger.style.backgroundColor = "yellow";
		document.getElementById("inputhitbox").onclick = function() {debugHitbox(false)};
	}else{
		n0Trigger.style.backgroundColor = "transparent";
		n1Trigger.style.backgroundColor = "transparent";
		n2Trigger.style.backgroundColor = "transparent";
		n3Trigger.style.backgroundColor = "transparent";
		document.getElementById("inputhitbox").onclick = function() {debugHitbox(true)};
	}
}