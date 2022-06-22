//this file is used for storing large amounts of data

//list of each room's contents based on their ID. example: ["First Room",1,11,"NA","NA",60,60,"NA","NA", false,true,true,.png, "NA",true] = 
//[Room Name , Id of where to for button1, where button2, No Button3 so NA, Button 4 NA, time wasted on the trip, time waste, NA time, NA, beentolocation false, is there a sky? true, can it spawn items? true, file extension, NA generatorid, is it outdoors? true]
let roomInfo = new Array();

//tutorial
roomInfo[0] = new Array("Road",1,14,1,13,0,0,0,0, true,true,0,".png","NA",true,"NA","NA","NA","NA","Vento");
roomInfo[1] = new Array("Road",17,2,16,18,0,0,0,0, true,true,0,".png","NA",true,"NA","NA","NA","NA","Vento");
roomInfo[2] = new Array("Road",3,15,19,"NA",0,0,0,"NA", true,true,0,".png","NA",true,"NA","NA","NA","NA","Vento");
roomInfo[3] = new Array("Road",2,17,16,18,0,0,0,0, true,true,0,".png","NA",true,"NA","NA","NA","NA","Vento");
roomInfo[4] = new Array("Old Man's House",14,5,"NA","NA",0,0,"NA","NA", false,true,0,".png","NA",false,"MetalAbrir","FirstRoomTransitioningLadder","NA","NA","Vento2");
roomInfo[5] = new Array("Old Man's Basement",4,"NA","NA","NA",0,"NA","NA","NA", false,false,0,".png","NA",false,"FirstRoomTransitioningLadder","NA","NA","NA","BuzzLamp");
roomInfo[6] = new Array("Generator",16,"NA","NA","NA",0,"NA","NA","NA", false,false,0,".png","NA",true,"NA","NA","NA","NA","Vento2");
roomInfo[7] = new Array("Big House",16,8,9,10,0,0,0,0, false,true,0,".png",0,false,"DoorOpening","MoradiaFootSteps","MoradiaFootSteps","MoradiaFootSteps","GeradorEsq");
roomInfo[8] = new Array("Bathroom",7,"NA","NA","NA",0,"NA","NA","NA", false,true,0,".png","NA",false,"MoradiaFootSteps","NA","NA","NA","TorneiraPingar");	
roomInfo[9] = new Array("Living Room",7,12,"NA","NA",0,"NA","NA","NA", false,true,0,".png","NA",false,"MoradiaFootSteps","MoradiaFootSteps","NA","NA","GeradorDir");
roomInfo[10] = new Array("Upper Floor",7,11,"NA","NA",0,0,"NA","NA", false,true,0,".png","NA",false,"MoradiaFootSteps","MoradiaFootSteps","NA","NA","Dust");	
roomInfo[11] = new Array("Bedroom",10,"NA","NA","NA",0,"NA","NA","NA", false,true,1,".png","NA",false,"MoradiaFootSteps","NA","NA","NA","Dust");	
roomInfo[12] = new Array("Cupboards",9,"NA","NA","NA",0,"NA","NA","NA", false,false,3,".png","NA",false,"MoradiaFootSteps","NA","NA","NA","Dust");	
roomInfo[13] = new Array("Car",0,"NA","NA","NA",0,"NA","NA","NA", false,true,1,".png","NA",true,"NA","NA","NA","NA","Vento2");	
roomInfo[14] = new Array("Old Man's House Entrance",0,4,"NA","NA",0,0,"NA","NA", false,true,0,".png","NA",true,"NA","NA","NA","NA","Vento");	
roomInfo[15] = new Array("Eric's House Entrance",2,"NA","NA","NA",0,"NA","NA","NA", false,true,0,".png","NA",true,"NA","NA","NA","NA","Vento");	
roomInfo[16] = new Array("Big House Entrance",1,7,6,"NA",0,0,0,"NA", false,true,0,".png",0,true,"NA","DoorOpening","NA","NA","Vento");	
roomInfo[17] = new Array("Road",1,14,13,"NA",0,0,0,"NA", true,true,0,".png","NA",true,"NA","NA","NA","NA","Vento");	
roomInfo[18] = new Array("Ruined House",1,"NA","NA","NA",0,"NA","NA","NA", false,true,0,".png","NA",true,"NA","NA","NA","NA","Vento");	
roomInfo[19] = new Array("Ruined House",2,"NA","NA","NA",0,"NA","NA","NA", false,true,0,".png","NA",true,"NA","NA","NA","NA","Vento");

//city
roomInfo[20] = new Array("River",21,"NA","NA","NA",5,"NA","NA","NA", false,true,0,".png","NA",true,"NA","NA","NA","NA");
roomInfo[21] = new Array("Darby Street",22,20,"NA","NA",5,5,"NA","NA", false,true,4,".png","NA",true,"NA","NA","NA","NA");
roomInfo[22] = new Array("Darby Street",21,23,"NA","NA",5,5,"NA","NA", false,true,4,".png","NA",true,"NA","NA","NA","NA");
roomInfo[23] = new Array("Lyroy Avenue",22,32,24,34,5,5,5,5, false,true,4,".png","NA",true);
roomInfo[24] = new Array("Dougan Street",23,28,25,"NA",5,5,5,"NA", false,true,4,".png","NA",true,"NA","NA","NA","NA");
roomInfo[25] = new Array("Construction Site",24,26,"NA","NA",5,5,"NA","NA", false,true,4,".png","NA",true,"NA","NA","NA","NA");
roomInfo[26] = new Array("Construction Site",24,25,27,"NA",5,5,10,"NA", true,true,4,".png","NA",true,"NA","NA","NA","NA");
roomInfo[27] = new Array("Crane",26,"NA","NA","NA",10,"NA","NA","NA", false,true,4,".png","NA",true,"NA","NA","NA","NA");
roomInfo[28] = new Array("Laguna Avenue",24,29,31,"NA",5,5,5,"NA", false,true,4,".png","NA",true,"NA","NA","NA","NA");
roomInfo[29] = new Array("Clio Street",28,30,"NA","NA",5,5,"NA","NA", false,true,4,".png","NA",true,"NA","NA","NA","NA");
roomInfo[30] = new Array("Clio Street",29,"NA","NA","NA",5,"NA","NA","NA", false,true,4,".png","NA",true,"NA","NA","NA","NA");
roomInfo[31] = new Array("Clover Street",28,32,"NA","NA",5,5,"NA","NA", false,true,4,".png","NA",true,"NA","NA","NA","NA");
roomInfo[32] = new Array("Hospital",31,33,"NA","NA",5,5,"NA","NA", false,true,4,".png","NA",true,"NA","NA","NA","NA");
roomInfo[33] = new Array("Lyroy Avenue",32,22,34,24,5,5,5,5, false,true,4,".png","NA",true,"NA","NA","NA","NA");
roomInfo[34] = new Array("Crost Lane",23,0,35,"NA",5,5,5,"NA", false,true,4,".png","NA",true,"NA","NA","NA","NA");
roomInfo[35] = new Array("Amber Avenue",34,38,36,39,5,5,5,5, false,true,4,".png","NA",true,"NA","NA","NA","NA");
roomInfo[36] = new Array("Bower Street",35,37,"NA","NA",5,5,"NA","NA", false,true,4,".png","NA",true,"NA","NA","NA","NA");
roomInfo[37] = new Array("Market",36,"NA","NA","NA",5,"NA","NA","NA", false,true,4,".png","NA",true,"NA","NA","NA","NA");
roomInfo[38] = new Array("Parking Lot",35,39,"NA","NA",5,5,"NA","NA", false,true,4,".png","NA",true,"NA","NA","NA","NA");
roomInfo[39] = new Array("Parking Lot Exit",38,35,"NA","NA",5,5,"NA","NA", false,true,4,".png","NA",true,"NA","NA","NA","NA");
roomInfo[40] = new Array("","NA","NA","NA","NA","NA","NA","NA","NA", false,false,0,".png","NA",false,"NA","NA","NA","NA");


//list of the items in each given room	
let roomItems = new Array();	

//list of the item's position in each given room	
let itemPosition = new Array();	

//control width, top and left respectively for all 4 possible items in a room	
itemPosition[4] = new Array("NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","6%","68%","63%","0deg","1");	
itemPosition[8] = new Array("4%","45%","20%","0deg","0");		
itemPosition[11] = new Array("5%","59%","28%","0deg","0");	
itemPosition[12] = new Array("4%","86.4%","69%","0deg","0","4%","13.45%","42%","0deg","0","5%","71%","55%","0deg","0","5%","27.7%","69%","0deg","0");	
itemPosition[13] = new Array("7%","21%","47%","0deg","0","9%","43%","33%","0deg","0");

itemPosition[20] = new Array("5%","50%","0%","0deg","0","5%","60%","0%","0deg","0","5%","70%","0%","0deg","0","5%","80%","0%","0deg","0");
itemPosition[21] = new Array("5%","50%","0%","0deg","0","5%","60%","0%","0deg","0","5%","70%","0%","0deg","0","5%","80%","0%","0deg","0");
itemPosition[22] = new Array("5%","50%","0%","0deg","0","5%","60%","0%","0deg","0","5%","70%","0%","0deg","0","5%","80%","0%","0deg","0");
itemPosition[23] = new Array("5%","50%","0%","0deg","0","5%","60%","0%","0deg","0","5%","70%","0%","0deg","0","5%","80%","0%","0deg","0");
itemPosition[24] = new Array("5%","50%","0%","0deg","0","5%","60%","0%","0deg","0","5%","70%","0%","0deg","0","5%","80%","0%","0deg","0");
itemPosition[25] = new Array("5%","50%","0%","0deg","0","5%","60%","0%","0deg","0","5%","70%","0%","0deg","0","5%","80%","0%","0deg","0");
itemPosition[26] = new Array("5%","50%","0%","0deg","0","5%","60%","0%","0deg","0","5%","70%","0%","0deg","0","5%","80%","0%","0deg","0");
itemPosition[27] = new Array("5%","50%","0%","0deg","0","5%","60%","0%","0deg","0","5%","70%","0%","0deg","0","5%","80%","0%","0deg","0");
itemPosition[28] = new Array("5%","50%","0%","0deg","0","5%","60%","0%","0deg","0","5%","70%","0%","0deg","0","5%","80%","0%","0deg","0");
itemPosition[29] = new Array("5%","50%","0%","0deg","0","5%","60%","0%","0deg","0","5%","70%","0%","0deg","0","5%","80%","0%","0deg","0");
itemPosition[30] = new Array("5%","50%","0%","0deg","0","5%","60%","0%","0deg","0","5%","70%","0%","0deg","0","5%","80%","0%","0deg","0");
itemPosition[31] = new Array("5%","50%","0%","0deg","0","5%","60%","0%","0deg","0","5%","70%","0%","0deg","0","5%","80%","0%","0deg","0");
itemPosition[32] = new Array("5%","50%","0%","0deg","0","5%","60%","0%","0deg","0","5%","70%","0%","0deg","0","5%","80%","0%","0deg","0");
itemPosition[33] = new Array("5%","50%","0%","0deg","0","5%","60%","0%","0deg","0","5%","70%","0%","0deg","0","5%","80%","0%","0deg","0");
itemPosition[34] = new Array("5%","50%","0%","0deg","0","5%","60%","0%","0deg","0","5%","70%","0%","0deg","0","5%","80%","0%","0deg","0");
itemPosition[35] = new Array("5%","50%","0%","0deg","0","5%","60%","0%","0deg","0","5%","70%","0%","0deg","0","5%","80%","0%","0deg","0");
itemPosition[36] = new Array("5%","50%","0%","0deg","0","5%","60%","0%","0deg","0","5%","70%","0%","0deg","0","5%","80%","0%","0deg","0");
itemPosition[37] = new Array("5%","50%","0%","0deg","0","5%","60%","0%","0deg","0","5%","70%","0%","0deg","0","5%","80%","0%","0deg","0");
itemPosition[38] = new Array("5%","50%","0%","0deg","0","5%","60%","0%","0deg","0","5%","70%","0%","0deg","0","5%","80%","0%","0deg","0");
itemPosition[39] = new Array("5%","50%","0%","0deg","0","5%","60%","0%","0deg","0","5%","70%","0%","0deg","0","5%","80%","0%","0deg","0");


//list of the trigger's position in each given room
let triggerPosition = new Array();
//control width, top and left respectively for all 4 possible triggers in a room

//tutorial
triggerPosition[0] = new Array("54.4%","71%","-4%","-9.8%","0deg","bg0house.png","32%","94%","4.4%","-0.4%","0deg","house1.png","25%","25%","40%","52%","0deg","bg0ruinedhouse.png","32%","42%","42.2%","71%","0deg","car.png");
triggerPosition[1] = new Array("57%","12%","88%","21%","0deg","bg1bottom.png","14%","10%","51%","42%","0deg","arrow.png","40%","100%","0%","0%","0deg","house2planks.png","42%","47%","40%","58%","0deg","house4.png");
triggerPosition[2] = new Array("53%","10%","90%","22%","0deg","arrow.png","32%","82%","9%","68%","0deg","house3.png","32%","71%","20%","0%","0deg","house5.png");
triggerPosition[3] = new Array("54%","15%","85%","26%","0deg","arrow.png","14%","10%","51%","43%","0deg","arrow.png","39%","96%","0%","61%","0deg","house2mirrorplanks.png","42%","54%","29%","0%","0deg","house4mirror.png");
triggerPosition[4] = new Array("23%","100%","0%","0%","0deg","door6.png","10%","8%","68%","54%","0deg","trapdoor.png");
triggerPosition[5] = new Array("13%","100%","0%","0.4%","0deg","ladder.png");
triggerPosition[6] = new Array("5%","10%","80%","45%","0deg","arrow.png");
triggerPosition[7] = new Array("5%","10%","80%","45%","0deg","arrow.png","10%","31%","42%","41%","0deg","door3.png","19%","79%","21%","5%","0deg","door2.png","38%","91%","10%","62%","0deg","stairs.png");
triggerPosition[8] = new Array("5%","10%","65%","0%","0deg","arrow.png");
triggerPosition[9] = new Array("21%","104%","-4%","91%","0deg","door4.png","28%","38%","31.65%","22.5%","0deg","cupboards.png");
triggerPosition[10] = new Array("20%","42%","58%","19%","0deg","stairs2.png","21%","75%","9%","79%","0deg","door5.png","5%","10%","48%","70%","134deg","arrow.png");
triggerPosition[11] = new Array("5%","10%","65%","0%","0deg","arrow.png");
triggerPosition[12] = new Array("5%","10%","65%","0%","0deg","arrow.png");
triggerPosition[13] = new Array("5%","10%","65%","0%","0deg","arrow.png","5%","10%","65%","55%","0deg","arrow.png");
triggerPosition[14] = new Array("14%","46%","54%","86%","0deg","bg14side.png","18%","64%","36%","63%","0deg","door7.png");
triggerPosition[15] = new Array("5%","10%","65%","0%","0deg","arrow.png");
triggerPosition[16] = new Array("5%","10%","65%","0%","0deg","arrow.png","26%","69%","20%","71%","0deg","door1.png","11.7%","18%","80%","49%","0deg","generator.png");
triggerPosition[17] = new Array("54%","15%","85%","26%","0deg","arrow.png","35%","68%","16%","66%","0deg","house1mirror.png","31%","46%","44%","0%","0deg","carmirror.png");
triggerPosition[18] = new Array("5%","10%","65%","0%","0deg","arrow.png");
triggerPosition[19] = new Array("5%","10%","65%","0%","0deg","arrow.png");

//city
triggerPosition[20] = new Array("5%","10%","40%","6%","0deg","arrow.png");
triggerPosition[21] = new Array("5%","10%","88%","21%","0deg","arrow.png","5%","10%","69%","77%","0deg","arrow.png");
triggerPosition[22] = new Array("5%","10%","87%","47%","0deg","arrow.png","5%","10%","55%","47%","0deg","arrow.png");
triggerPosition[23] = new Array("5%","10%","87%","47%","0deg","arrow.png","5%","10%","55%","47%","0deg","arrow.png","5%","10%","60%","15%","0deg","arrow.png","5%","10%","60%","80%","0deg","arrow.png");
triggerPosition[24] = new Array("5%","10%","87%","47%","0deg","arrow.png","5%","10%","55%","47%","0deg","arrow.png","5%","10%","49%","15%","0deg","arrow.png");
triggerPosition[25] = new Array("5%","10%","35%","20%","0deg","arrow.png","5%","10%","61%","92%","0deg","arrow.png");
triggerPosition[26] = new Array("5%","10%","37%","9%","0deg","arrow.png","5%","10%","61%","2%","0deg","arrow.png","5%","10%","42%","47%","0deg","arrow.png");
triggerPosition[27] = new Array("5%","10%","87%","47%","0deg","arrow.png","5%","10%","55%","47%","0deg","arrow.png");
triggerPosition[28] = new Array("5%","10%","87%","47%","0deg","arrow.png","5%","10%","60%","15%","0deg","arrow.png","5%","10%","60%","80%","0deg","arrow.png");
triggerPosition[29] = new Array("5%","10%","87%","47%","0deg","arrow.png","5%","10%","55%","47%","0deg","arrow.png");
triggerPosition[30] = new Array("5%","10%","62%","93%","0deg","arrow.png");
triggerPosition[31] = new Array("5%","10%","87%","47%","0deg","arrow.png","5%","10%","55%","47%","0deg","arrow.png");
triggerPosition[32] = new Array("5%","10%","87%","47%","0deg","arrow.png","5%","10%","55%","9%","0deg","arrow.png");
triggerPosition[33] = new Array("5%","10%","87%","47%","0deg","arrow.png","5%","10%","55%","47%","0deg","arrow.png","5%","10%","60%","15%","0deg","arrow.png","5%","10%","60%","80%","0deg","arrow.png");
triggerPosition[34] = new Array("5%","10%","87%","47%","0deg","arrow.png","5%","10%","63%","4%","0deg","arrow.png","5%","10%","55%","47%","0deg","arrow.png");
triggerPosition[35] = new Array("5%","10%","87%","47%","0deg","arrow.png","5%","10%","55%","47%","0deg","arrow.png","5%","10%","60%","15%","0deg","arrow.png","5%","10%","60%","80%","0deg","arrow.png");
triggerPosition[36] = new Array("5%","10%","80%","47%","0deg","arrow.png","5%","10%","55%","69%","0deg","arrow.png");
triggerPosition[37] = new Array("5%","10%","71%","4%","0deg","arrow.png");
triggerPosition[38] = new Array("5%","10%","64%","4%","0deg","arrow.png","5%","10%","55%","92%","0deg","arrow.png");
triggerPosition[39] = new Array("5%","10%","77%","4%","0deg","arrow.png","5%","10%","68%","92%","0deg","arrow.png");

//list of items in the inventory, 0 means there's nothing there
const inventoryRoom = [0,0,0,"NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA"];

//list of item names, their uses, weight and if they're a weapon
let itemInfo = new Array();
itemInfo[0] = new Array("NA", "NA", 0,false);
itemInfo[1] = new Array("Large Baked Beans", "eat these ", 0.87,false);
itemInfo[2] = new Array("Baked Beans", "eat these ", 0.3,false);
itemInfo[3] = new Array("Beer", "drink this ", 0.35,false);
itemInfo[4] = new Array("Yellow Key", "throw away the ", 0.03,false);
itemInfo[5] = new Array("Jerry Can", "get rid of this ", 5,false);
itemInfo[6] = new Array("Blue Key", "throw away the ", 0.03,false);
itemInfo[7] = new Array("Rusty Key", "throw away the ", 0.03,false);
itemInfo[8] = new Array("Rusty Key", "throw away the ", 0.03,false);
itemInfo[9] = new Array("Old Key", "throw away the ", 0.08,false);
itemInfo[10] = new Array("Green Key", "throw away the ", 0.03,false);
itemInfo[11] = new Array("Red Key", "throw away the ", 0.03,false);
itemInfo[12] = new Array("Key", "throw away the ", 0.03,false);
itemInfo[13] = new Array("Lighter", "throw away the ", 0.05,false);
itemInfo[14] = new Array("Knife", "throw away the ", 0.06,false);
itemInfo[15] = new Array("Beer", "drink this ", 0.35,false);
itemInfo[16] = new Array("Flashlight", "throw away the ", 0.27,false);
itemInfo[17] = new Array("Hammer", "throw away the ", 0.45,true);
itemInfo[18] = new Array("Nails", "get rid of these ", 1,false);
itemInfo[19] = new Array("Soda", "drink this ", 0.32,false);
itemInfo[20] = new Array("Large Sauce", "drink this ", 0.7,false);
itemInfo[21] = new Array("Sauce", "drink this ", 0.3,false);
itemInfo[22] = new Array("Soup", "drink this ", 0.2,false);

itemInfo[100] = new Array("Bandages", "use these ", 0.3,false);
itemInfo[101] = new Array("Alcohol", "drink this ", 0.3,false);

itemInfo[103] = new Array("Plastic Bag", "get rid of this ", 0.1,false);
itemInfo[104] = new Array("Backpack", "get rid of this ", 1,false);
itemInfo[105] = new Array("Water Bucket", "drink this ", 5,false);
itemInfo[106] = new Array("Watch", "get rid of this ", 0.1,false);
itemInfo[107] = new Array("Knife", "get rid of this ", 0.06,true);
itemInfo[108] = new Array("Planks", "get rid of these ", 2,false);

//list all the bunker locations
const bunkerLocal = [33,34,35,36];

//list all the storage locations
const storageLocal = [6];

//list of items in storage, 0 means there's nothing there
let storageRoom = new Array();
storageRoom[6] = new Array(0,"NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA");
//storageRoom[36] = new Array(0,"NA","NA","NA","NA","NA","NA","NA","NA","NA","NA","NA");

//list all the npc locations and their script appearance
const npcLocal = [4,-1,15,-1,4,6];

//keep track of all the npc chapters
const npcChapter = [0,0,0];

//list all the npc positions
let npcPos = new Array();
npcPos[0] = ["1","21%","71%","28%","NA"];
npcPos[1] = ["1","37%","54%","33%","NA"];
npcPos[2] = ["1","23%","39%","18%","NA"];

//list all the npc talking positions
let npcTalk = new Array();
npcTalk[0] = ["36%","56%","11%","Buff"];
npcTalk[1] = ["50%","52%","6%","Eric"];
npcTalk[2] = ["34%","59%","6%","Girl"];

let npcChange = new Array();
npcChange[0] = new Array();
npcChange[0][0] = ["0","npc0talk.png"];
npcChange[0][1] = ["0","npc0talk.png"];
npcChange[0][2] = ["99","npc0talk.png"];
npcChange[0][3] = ["99","npc0talk.png"];
npcChange[2] = new Array();
npcChange[2][0] = ["1","npc2talk.gif"];
npcChange[2][1] = ["0","npc2talk.gif"];
npcChange[2][2] = ["0","npc2talk.gif"];

//npc dialogue
let story = new Array();
story[0] = new Array();
story[0][0] = new Array("Old Mitchell","Hey, you're finally awake","Don't forget that today we’re trading with Eric, he'll give you a knife in exchange for bandages.",
	"To craft them you have to select alcohol and cloth.","We used the last ones so we don't have any and you'll have to go get more.","I think I saw some supplies in that big house, but things have been dangerous.",
	"It's risky to leave the house! You'll have to go there yourself...");
story[0][1] = new Array("Old Mitchell","Maybe we're asking too much of you but… We can't survive without you, sorry if we can't help you more…");
story[0][2] = new Array("Old Mitchell","I knew this moment would come, you have to save yourself.", "You have a chance to survive, please get out of here while you can…");
story[0][3] = new Array("Old Mitchell","Thanks for everything…");
story[1] = new Array();
story[1][0] = new Array("Voice Behind Door (Eric)","What are you doing here?","Don't show up until you have everything ready for the exchange.","Disappear if you still want to keep the business going.");
story[1][1] = new Array("Voice Behind Door (Eric)","Disappear if you still want to keep the business going.");
story[1][2] = new Array("Voice Behind Door (Eric)","As promised, the knife is by the door.","I hope--","AAAAAAAAAAAAAAAAH!");
story[2] = new Array();
story[2][0] = new Array("Invader","HaHaHa, did this old man really think he could escape us for all this time?","But who's this? Your 'white knight' has arrived old man! You're lucky, you'll get to live a couple seconds longer.","Let me take care of you!");
story[2][1] = new Array("Invader","…","Do you think you won? We have dozens of people surrounding the village, you're not going anywhere…");
story[2][2] = new Array("Invader","…");

//crafting recipie
let craftlist = new Array();
craftlist[0]= new Array(101,8,100);

//cutscene text
let cutscene = new Array();
cutscene[0] = new Array("The year is 20XX, a nuclear war shook the planet.<br><br>Society collapsed but humans still walk the face of the planet.<br><br>Several factions were created, factions whose sole purpose is to conquer the remaining territories and bring destruction to all the opposing humans that remain.");
cutscene[1] = new Array("You are just another person stuck in this wasteland with the hope of returning to normalcy.<br><br>You dream of a paradise to escape from this world.");
cutscene[2] = new Array("Can you survive?");

//list all the enemy locations
let badGuyLocal = new Array();
//numbers represent the roomid, script number, hp, damage, item drop id, attack cooldown
badGuyLocal[0] = new Array(4,11,27,5,101,2000);

//information about weapons
let weaponInfo = new Array();
//numbers represent attack damage and cooldown speed in ms
weaponInfo[107] = new Array(3,5000);

//restrict areas based on the script
let restrictionList = new Array();
//each number is the script number, and the following are the restrcited areas
restrictionList[2] = new Array("15");
restrictionList[3] = new Array("16");
restrictionList[6] = new Array("5","13","15","16","18","19");
restrictionList[7] = new Array("2","3","5","13","15","16","18","19");
restrictionList[8] = new Array("1","2","3","5","13","15","16","18","19");
restrictionList[9] = new Array("0","1","2","3","5","13","15","16","18","19");
restrictionList[10] = new Array("0","1","2","3","5","13","14","15","16","18","19");

//list of the object's position in each given room
let objectPosition = new Array();
//control width, top and left respectively for all objects in a room
objectPosition[4] = new Array("29%","51%","59%","0deg","0","2.3%","32.7%","22.3%","0deg","0","2%","65%","52%","0deg","0","6.7%","69.4%","70%","0deg","1");
objectPosition[5] = new Array("6%","65%","82%","0deg","0","25.3%","65.4%","26.3%","0deg","0","8%","69%","87%","0deg","0","1.7%","54.4%","77.8%","0deg","0");
objectPosition[6] = new Array("68%","11%","17%","0deg","0","10%","29%","39%","0deg","0");
objectPosition[8] = new Array("13.2%","10%","18%","0deg","0","8%","73%","16%","0deg","0");
objectPosition[12] = new Array("14%","5%","39%","0deg","0","14%","5%","68%","0deg","0","14%","68%","53%","0deg","0","13%","69%","67%","0deg","0");
objectPosition[16] = new Array("37%","56%","34%","0deg","1");
//objectPosition[35] = new Array("25.3%","72.4%","50.3%","7deg","0");
//objectPosition[36] = new Array("68%","11%","17%","0deg","0","10%","29%","39%","0deg","0");

//list of the objects in each given room
let roomObj = new Array();
//numbers represent objId,
roomObj[4] = new Array("16","table.png","NA","13","candle1.png","resonanceAudio('CandleFire')","14","candle2.png","resonanceAudio('CandleFire')","15","candle3.png","resonanceAudio('CandleFire')");
roomObj[5] = new Array("0","door1.png","resonanceAudio('FirstRoomArmarioAbrir'); audioEvent(0,'true')","1","bed.png","resonanceAudio('FirstRoomBed')","2","door2.png","resonanceAudio('FirstRoomArmarioAbrir'); audioEvent(0,'true')","3","candle.png","resonanceAudio('CandleFire')");
roomObj[6] = new Array("4","generator.png","NA","5","lever.png","resonanceAudio('MotorSwitch'); leverToggle(5,0)");
roomObj[8] = new Array("7","door1.png","NA","8","faucet.png","resonanceAudio('AbrirTorneira');");
roomObj[12] = new Array("9","door1.png","NA","10","door2.png","NA","11","door3.png","NA","12","door4.png","NA");
roomObj[16] = new Array("6","planks.png","plankRemove()");
//roomObj[35] = new Array("1","bed.png","sleep('bed')");
//roomObj[36] = new Array("4","generator.png","NA","5","lever.png","leverGenerator(5,1,1)");

//list of object interactions

let interactObj = new Array();

interactObj[0] = new Array("","door1open.png","7%","65.5%","76%","0deg");
interactObj[1] = new Array("An unconfortable bed.");
interactObj[2] = new Array("","door2open.png","9%","74%","86%","0deg");
interactObj[3] = new Array("A small candle.");
interactObj[4] = new Array("An old generator.");
interactObj[5] = new Array("The generator has no fuel...");
interactObj[6] = new Array("I picked up the planks.","planks.png","0%","0%","0%","0deg");
interactObj[7] = new Array("","door1open.png","14.5%","15.2%","26%","0deg");
interactObj[8] = new Array("Hey the faucet still works!","faucetopen.png","8%","73%","16%","0deg");
interactObj[9] = new Array("","door1open.png","2%","-2%","51.5%","0deg");
interactObj[10] = new Array("","door2open.png","11.2%","-4%","78%","0deg");
interactObj[11] = new Array("","door3open.png","16%","95%","52.5%","0deg");
interactObj[12] = new Array("","door4open.png","13%","68%","78.3%","0deg");
interactObj[13] = new Array("Just a candle.");
interactObj[14] = new Array("A tiny candle.");
interactObj[15] = new Array("A candle.");
interactObj[16] = new Array("");

//list of generator fuel
let genFuel = new Array();
genFuel[0] = new Array(0,false);
genFuel[1] = new Array(0,false);

//list of the objects in each given room
let storagePosition = new Array();
storagePosition[6] = new Array("108%","178%","-53%","fueler");
//storagePosition[36] = new Array("108%","178%","-53%","fueler");


//loottables used to decide which items randomly spawn in each room
let lootTable = new Array();
lootTable[11] = new Array(0,13);
lootTable[12] = new Array(0,0,1,2,3);
lootTable[13] = new Array(0,3,15,19);
lootTable[21] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,100,101,103,105,106,107,108);
lootTable[22] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,100,101,103,105,106,107,108);
lootTable[23] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,100,101,103,105,106,107,108);
lootTable[24] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,100,101,103,105,106,107,108);
lootTable[25] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,100,101,103,105,106,107,108);
lootTable[26] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,100,101,103,105,106,107,108);
lootTable[27] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,100,101,103,105,106,107,108);
lootTable[28] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,100,101,103,105,106,107,108);
lootTable[29] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,100,101,103,105,106,107,108);
lootTable[30] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,100,101,103,105,106,107,108);
lootTable[31] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,100,101,103,105,106,107,108);
lootTable[32] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,100,101,103,105,106,107,108);
lootTable[33] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,100,101,103,105,106,107,108);
lootTable[34] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,100,101,103,105,106,107,108);
lootTable[35] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,100,101,103,105,106,107,108);
lootTable[36] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,100,101,103,105,106,107,108);
lootTable[37] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,100,101,103,105,106,107,108);
lootTable[38] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,100,101,103,105,106,107,108);
lootTable[39] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,100,101,103,105,106,107,108);
lootTable[40] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,100,101,103,105,106,107,108);

let audioInfo = new Array();
audioInfo[0] = new Array(6.0,100.0,100.0,"wood-panel","metal","uniform","uniform","grass","uniform",0,0,0);
audioInfo[1] = new Array(6.0,100.0,100.0,"wood-panel","brick-painted","uniform","uniform","grass","uniform",0,0,0);
audioInfo[2] = new Array(6.0,100.0,100.0,"brick-painted","wood-panel","uniform","uniform","grass","uniform",0,0,0);
audioInfo[3] = new Array(6.0,100.0,100.0,"brick-painted","wood-panel","uniform","uniform","grass","uniform",0,0,0);
audioInfo[4] = new Array(4.0,3.15,4.0,"wood-panel","wood-panel","wood-panel","wood-panel","parquet-on-concrete","metal",0,0,0);
audioInfo[5] = new Array(5.0,3.0,5.0,"concrete-block-coarse","concrete-block-coarse","concrete-block-coarse","concrete-block-coarse","concrete-block-coarse","concrete-block-coarse",0,0,0);
audioInfo[6] = new Array(100.0,100.0,1.5,"uniform","uniform","wood-panel","uniform","metal","uniform",0,0,0);
audioInfo[7] = new Array(4.0,3.0,5.3,"linoleum-on-concrete","wood-panel","linoleum-on-concrete","wood-panel","parquet-on-concrete","parquet-on-concrete",0,0,0);
audioInfo[8] = new Array(4.0,3.0,2.0,"polished-concrete-or-tile","polished-concrete-or-tile","polished-concrete-or-tile","polished-concrete-or-tile","polished-concrete-or-tile","polished-concrete-or-tile",0,0,0);
audioInfo[9] = new Array(4.0,3.0,8.0,"wood-panel","linoleum-on-concrete","wood-panel","wood-panel","parquet-on-concrete","parquet-on-concrete",0,0,0);
audioInfo[10] = new Array(4.0,3.0,8.0,"wood-panel","linoleum-on-concrete","wood-panel","wood-panel","parquet-on-concrete","wood-ceiling",0,0,0);
audioInfo[11] = new Array(4.0,3.0,4.0,"linoleum-on-concrete","wood-panel","wood-panel","linoleum-on-concrete","parquet-on-concrete","wood-ceiling",0,0,0);
audioInfo[12] = new Array(4.0,3.0,8.0,"wood-panel","linoleum-on-concrete","wood-panel","wood-panel","parquet-on-concrete","parquet-on-concrete",0,0,0);
audioInfo[13] = new Array(3.5,2.0,100.0,"metal","metal","uniform","uniform","metal","metal",0,0,0);
audioInfo[14] = new Array(100.0,100.0,6.0,"uniform","uniform","wood-panel","metal","grass","uniform",0,0,0);
audioInfo[15] = new Array(100.0,100.0,6.0,"uniform","uniform","wood-panel","brick-painted","grass","uniform",0,0,0);
audioInfo[16] = new Array(100.0,100.0,6.0,"uniform","uniform","wood-panel","brick-painted","grass","uniform",0,0,0);
audioInfo[17] = new Array(6.0,100.0,100.0,"metal","wood-panel","uniform","uniform","grass","uniform",0,0,0);
audioInfo[18] = new Array(100.0,100.0,6.0,"uniform","uniform","brick-painted","wood-panel","grass","uniform",0,0,0);
audioInfo[19] = new Array(100.0,100.0,6.0,"uniform","uniform","brick-painted","wood-panel","grass","uniform",0,0,0);
//city
audioInfo[20] = new Array(3.1,2.5,3.4,"brick-bare","curtain-heavy","marble","glass-thin","grass","transparent",-0.707,-0.707,0);
audioInfo[21] = new Array(3.1,2.5,3.4,"brick-bare","curtain-heavy","marble","glass-thin","grass","transparent",-0.707,-0.707,0);
audioInfo[22] = new Array(3.1,2.5,3.4,"brick-bare","curtain-heavy","marble","glass-thin","grass","transparent",-0.707,-0.707,0);
audioInfo[23] = new Array(3.1,2.5,3.4,"brick-bare","curtain-heavy","marble","glass-thin","grass","transparent",-0.707,-0.707,0);
audioInfo[24] = new Array(3.1,2.5,3.4,"brick-bare","curtain-heavy","marble","glass-thin","grass","transparent",-0.707,-0.707,0);
audioInfo[25] = new Array(3.1,2.5,3.4,"brick-bare","curtain-heavy","marble","glass-thin","grass","transparent",-0.707,-0.707,0);
audioInfo[26] = new Array(3.1,2.5,3.4,"brick-bare","curtain-heavy","marble","glass-thin","grass","transparent",-0.707,-0.707,0);
audioInfo[27] = new Array(3.1,2.5,3.4,"brick-bare","curtain-heavy","marble","glass-thin","grass","transparent",-0.707,-0.707,0);
audioInfo[28] = new Array(3.1,2.5,3.4,"brick-bare","curtain-heavy","marble","glass-thin","grass","transparent",-0.707,-0.707,0);
audioInfo[29] = new Array(3.1,2.5,3.4,"brick-bare","curtain-heavy","marble","glass-thin","grass","transparent",-0.707,-0.707,0);
audioInfo[30] = new Array(3.1,2.5,3.4,"brick-bare","curtain-heavy","marble","glass-thin","grass","transparent",-0.707,-0.707,0);
audioInfo[31] = new Array(3.1,2.5,3.4,"brick-bare","curtain-heavy","marble","glass-thin","grass","transparent",-0.707,-0.707,0);
audioInfo[32] = new Array(3.1,2.5,3.4,"brick-bare","curtain-heavy","marble","glass-thin","grass","transparent",-0.707,-0.707,0);
audioInfo[33] = new Array(3.1,2.5,3.4,"brick-bare","curtain-heavy","marble","glass-thin","grass","transparent",-0.707,-0.707,0);
audioInfo[34] = new Array(3.1,2.5,3.4,"brick-bare","curtain-heavy","marble","glass-thin","grass","transparent",-0.707,-0.707,0);
audioInfo[35] = new Array(3.1,2.5,3.4,"brick-bare","curtain-heavy","marble","glass-thin","grass","transparent",-0.707,-0.707,0);
audioInfo[36] = new Array(3.1,2.5,3.4,"brick-bare","curtain-heavy","marble","glass-thin","grass","transparent",-0.707,-0.707,0);
audioInfo[37] = new Array(3.1,2.5,3.4,"brick-bare","curtain-heavy","marble","glass-thin","grass","transparent",-0.707,-0.707,0);
audioInfo[38] = new Array(3.1,2.5,3.4,"brick-bare","curtain-heavy","marble","glass-thin","grass","transparent",-0.707,-0.707,0);
audioInfo[39] = new Array(3.1,2.5,3.4,"brick-bare","curtain-heavy","marble","glass-thin","grass","transparent",-0.707,-0.707,0);
audioInfo[40] = new Array(3.1,2.5,3.4,"brick-bare","curtain-heavy","marble","glass-thin","grass","transparent",-0.707,-0.707,0);