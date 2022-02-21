window.onload = loadme;

var clk = 0;
var fixme = 0;
var dooropen = 0;
var loaded = 0;
var openowo = 0;
function noscroll(){
     if (fixme==1) {
          //window.scrollTo(0,0);
     }
     
}
window.addEventListener("scroll",noscroll);

function loadme(){
  var bod = document.getElementById("bod");
  var start = document.getElementById("start");
  var loading = document.getElementById("loading");
  loading.style.display = "block";
  bod.style.margin = "0";
  bod.style.height = "100%";
  bod.style.overflow = "hidden";
  document.getElementById("warning").style.display = "block";
  document.getElementById("image").style.display = "block";
  document.getElementById("placeholder").style.display = "block";
  document.getElementById("readpls").style.display = "block";
  document.getElementById("gotobed").style.display = "block";
  document.getElementById("gotobed2").style.display = "block";
  document.getElementById("gotopc").style.display = "block";
  document.getElementById("gotomain").style.display = "block";
  document.getElementById("gotomain2").style.display = "block";
  document.getElementById("gotomain3").style.display = "block";
  document.getElementById("gotodoor").style.display = "block";
  document.getElementById("gotodoor2").style.display = "block";
  document.getElementById("gotohallway").style.display = "block";
  document.getElementById("goto2door").style.display = "block";
  document.getElementById("gotoleft").style.display = "block";
  document.getElementById("gotoright").style.display = "block";
  document.getElementById("backpack").style.display = "block";
  document.getElementById("open").style.display = "block";
  document.getElementById("inventory").style.display = "block";
  document.getElementById("key").style.display = "block";
  document.getElementById("flashlight").style.display = "block";
  document.getElementById("book").style.display = "block";
  document.getElementById("keypad").style.display = "block";
  document.getElementById("keypad_0").style.display = "block";
  document.getElementById("keypad_1").style.display = "block";
  document.getElementById("keypad_2").style.display = "block";
  document.getElementById("keypad_3").style.display = "block";
  document.getElementById("keypad_4").style.display = "block";
  document.getElementById("keypad_5").style.display = "block";
  document.getElementById("keypad_6").style.display = "block";
  document.getElementById("keypad_7").style.display = "block";
  document.getElementById("keypad_8").style.display = "block";
  document.getElementById("keypad_9").style.display = "block";
  document.getElementById("keypad_10").style.display = "block";
  document.getElementById("keypad_11").style.display = "block";
  document.getElementById("door").style.display = "block";
  document.getElementById("door2").style.display = "block";
  document.getElementById("door3").style.display = "block";
  document.getElementById("block").style.display = "block";
  document.getElementById("block2").style.display = "block";
  document.getElementById("block3").style.display = "block";
  document.getElementById("textbox").style.display = "block";
  document.getElementById("page").style.display = "block";
  document.getElementById("Jumpscare").style.display = "block";
  document.getElementById("face").style.display = "block";
  document.getElementById("stars").style.display = "block";
  document.getElementById("text").style.display = "block";
  document.getElementById("text2").style.display = "block";
  document.getElementById("text3").style.display = "block";
  document.getElementById("text4").style.display = "block";
  document.getElementById("text5").style.display = "block";
  document.getElementById("text6").style.display = "block";
  document.getElementById("text7").style.display = "block";
  document.getElementById("text8").style.display = "block";
  document.getElementById("text9").style.display = "block";
  document.getElementById("text10").style.display = "block";
  document.getElementById("text11").style.display = "block";
  document.getElementById("text12").style.display = "block";
  document.getElementById("text13").style.display = "block";
  document.getElementById("text14").style.display = "block";
  document.getElementById("text15").style.display = "block";
  document.getElementById("text16").style.display = "block";
  document.getElementById("text17").style.display = "block";
  document.getElementById("text18").style.display = "block";
  document.getElementById("text19").style.display = "block";
  document.getElementById("text20").style.display = "block";
  document.getElementById("text21").style.display = "block";
  document.getElementById("text22").style.display = "block";
  document.getElementById("textDEMO").style.display = "block";
  document.getElementById("textDEMO2").style.display = "block";
  document.getElementById("textDEMO3").style.display = "block";
  document.getElementById("texthelp").style.display = "block";
  document.getElementById("texthelpyes").style.display = "block";
  document.getElementById("texthelpno").style.display = "block";
  document.getElementById("gotozoom").style.display = "block";
  document.getElementById("gotoroom3").style.display = "block";
  document.getElementById("keypad2").style.display = "block";
  document.getElementById("keypad2_q").style.display = "block";
  document.getElementById("keypad2_p").style.display = "block";
  document.getElementById("keypad2_g").style.display = "block";
  document.getElementById("keypad2_n").style.display = "block";
  document.getElementById("keypad2_o").style.display = "block";
  document.getElementById("keypad2_t").style.display = "block";
  document.getElementById("keypad2_r").style.display = "block";
  document.getElementById("keypad2_c").style.display = "block";
  document.getElementById("keypad2_u").style.display = "block";
  document.getElementById("keypad2_m").style.display = "block";
  document.getElementById("keypad2_10").style.display = "block";
  document.getElementById("keypad2_11").style.display = "block";
  document.getElementById("block4").style.display = "block";
  document.getElementById("gotoroom4").style.display = "block";
  document.getElementById("sun").style.display = "block";
  document.getElementById("mercury").style.display = "block";
  document.getElementById("venus").style.display = "block";
  document.getElementById("earth").style.display = "block";
  document.getElementById("mars").style.display = "block";
  document.getElementById("jupiter").style.display = "block";
  document.getElementById("saturn").style.display = "block";
  document.getElementById("uranus").style.display = "block";
  document.getElementById("neptune").style.display = "block";
  document.getElementById("scrollright").style.display = "block";
  document.getElementById("scrollleft").style.display = "block";
  document.getElementById("frame").style.display = "block";
  document.getElementById("letterg").style.display = "block";
  document.getElementById("lettero").style.display = "block";
  document.getElementById("letterp").style.display = "block";
  document.getElementById("letterq").style.display = "block";
  document.getElementById("lettern").style.display = "block";
  document.getElementById("lettert").style.display = "block";
  document.getElementById("letterc").style.display = "block";
  document.getElementById("letterp2").style.display = "block";
  document.getElementById("letteru").style.display = "block";
  document.getElementById("overlay").style.display = "block";
  document.getElementById("consolee").style.display = "block";
  document.getElementById("doorleft").style.display = "block";
  document.getElementById("console_big").style.display = "block";
  document.getElementById("buttonreact").style.display = "block";
  document.getElementById("switchoff").style.display = "block";
  document.getElementById("switchoff2").style.display = "block";
  document.getElementById("switchoff3").style.display = "block";
  document.getElementById("switchoff4").style.display = "block";
  document.getElementById("gotodie").style.display = "block";
  document.getElementById("gotovent").style.display = "block";
  document.getElementById("crowbar").style.display = "block";
  document.getElementById("gotoleft2").style.display = "block";
  document.getElementById("gotoright2").style.display = "block";
  document.getElementById("vent").style.display = "block";
  document.getElementById("door5").style.display = "block";
  document.getElementById("door6").style.display = "block";
  document.getElementById("gotoventing").style.display = "block";
  document.getElementById("block5").style.display = "block";
  document.getElementById("gotofurthervent").style.display = "block";
  document.getElementById("gotofriend").style.display = "block";
  document.getElementById("gotoflashbad").style.display = "block";
  document.getElementById("friend").style.display = "block";
  document.getElementById("textfriend").style.display = "block";
  document.getElementById("textfriend2").style.display = "block";
  document.getElementById("textfriend3").style.display = "block";
  document.getElementById("gotoeletrical").style.display = "block";
  document.getElementById("lever").style.display = "block";
  document.getElementById("block6").style.display = "block";
  document.getElementById("gotocock").style.display = "block";
  document.getElementById("door7").style.display = "block";
  document.getElementById("gobackreactor").style.display = "block";
  document.getElementById("keyhole").style.display = "block";
  document.getElementById("electricvent").style.display = "block";
  document.getElementById("gotoventdie").style.display = "block";
  document.getElementById("gotofurthervent2").style.display = "block";
  document.getElementById("gotojumpscare").style.display = "block";
  document.getElementById("face2").style.display = "block";
  document.getElementById("image").src="img/room1.png";

  setTimeout(function () {
  document.getElementById("placeholder").style.display = "none";
  document.getElementById("readpls").style.display = "none";
  document.getElementById("gotobed").style.display = "none";
  document.getElementById("gotobed2").style.display = "none";
  document.getElementById("gotopc").style.display = "none";
  document.getElementById("gotomain").style.display = "none";
  document.getElementById("gotomain2").style.display = "none";
  document.getElementById("gotomain3").style.display = "none";
  document.getElementById("gotodoor").style.display = "none";
  document.getElementById("gotodoor2").style.display = "none";
  document.getElementById("gotohallway").style.display = "none";
  document.getElementById("goto2door").style.display = "none";
  document.getElementById("gotoleft").style.display = "none";
  document.getElementById("gotoright").style.display = "none";
  document.getElementById("backpack").style.display = "none";
  document.getElementById("open").style.display = "none";
  document.getElementById("inventory").style.display = "none";
  document.getElementById("key").style.display = "none";
  document.getElementById("flashlight").style.display = "none";
  document.getElementById("book").style.display = "none";
  document.getElementById("keypad").style.display = "none";
  document.getElementById("keypad_0").style.display = "none";
  document.getElementById("keypad_1").style.display = "none";
  document.getElementById("keypad_2").style.display = "none";
  document.getElementById("keypad_3").style.display = "none";
  document.getElementById("keypad_4").style.display = "none";
  document.getElementById("keypad_5").style.display = "none";
  document.getElementById("keypad_6").style.display = "none";
  document.getElementById("keypad_7").style.display = "none";
  document.getElementById("keypad_8").style.display = "none";
  document.getElementById("keypad_9").style.display = "none";
  document.getElementById("keypad_10").style.display = "none";
  document.getElementById("keypad_11").style.display = "none";
  document.getElementById("door").style.display = "none";
  document.getElementById("door2").style.display = "none";
  document.getElementById("door3").style.display = "none";
  document.getElementById("block").style.display = "none";
  document.getElementById("block2").style.display = "none";
  document.getElementById("block3").style.display = "none";
  document.getElementById("textbox").style.display = "none";
  document.getElementById("page").style.display = "none";
  document.getElementById("Jumpscare").style.display = "none";
  document.getElementById("face").style.display = "none";
  document.getElementById("stars").style.display = "none";
  document.getElementById("text").style.display = "none";
  document.getElementById("text2").style.display = "none";
  document.getElementById("text3").style.display = "none";
  document.getElementById("text4").style.display = "none";
  document.getElementById("text5").style.display = "none";
  document.getElementById("text6").style.display = "none";
  document.getElementById("text7").style.display = "none";
  document.getElementById("text8").style.display = "none";
  document.getElementById("text9").style.display = "none";
  document.getElementById("text10").style.display = "none";
  document.getElementById("text11").style.display = "none";
  document.getElementById("text12").style.display = "none";
  document.getElementById("text13").style.display = "none";
  document.getElementById("text14").style.display = "none";
  document.getElementById("text15").style.display = "none";
  document.getElementById("text16").style.display = "none";
  document.getElementById("text17").style.display = "none";
  document.getElementById("text18").style.display = "none";
  document.getElementById("text19").style.display = "none";
  document.getElementById("text20").style.display = "none";
  document.getElementById("text21").style.display = "none";
  document.getElementById("text22").style.display = "none";
  document.getElementById("textDEMO").style.display = "none";
  document.getElementById("textDEMO2").style.display = "none";
  document.getElementById("textDEMO3").style.display = "none";
  document.getElementById("texthelp").style.display = "none";
  document.getElementById("texthelpyes").style.display = "none";
  document.getElementById("texthelpno").style.display = "none";
  document.getElementById("gotozoom").style.display = "none";
  document.getElementById("gotoroom3").style.display = "none";
  document.getElementById("keypad2").style.display = "none";
  document.getElementById("keypad2_q").style.display = "none";
  document.getElementById("keypad2_p").style.display = "none";
  document.getElementById("keypad2_g").style.display = "none";
  document.getElementById("keypad2_n").style.display = "none";
  document.getElementById("keypad2_o").style.display = "none";
  document.getElementById("keypad2_t").style.display = "none";
  document.getElementById("keypad2_r").style.display = "none";
  document.getElementById("keypad2_c").style.display = "none";
  document.getElementById("keypad2_u").style.display = "none";
  document.getElementById("keypad2_m").style.display = "none";
  document.getElementById("keypad2_10").style.display = "none";
  document.getElementById("keypad2_11").style.display = "none";
  document.getElementById("block4").style.display = "none";
  document.getElementById("gotoroom4").style.display = "none";
  document.getElementById("sun").style.display = "none";
  document.getElementById("mercury").style.display = "none";
  document.getElementById("venus").style.display = "none";
  document.getElementById("earth").style.display = "none";
  document.getElementById("mars").style.display = "none";
  document.getElementById("jupiter").style.display = "none";
  document.getElementById("saturn").style.display = "none";
  document.getElementById("uranus").style.display = "none";
  document.getElementById("neptune").style.display = "none";
  document.getElementById("scrollright").style.display = "none";
  document.getElementById("scrollleft").style.display = "none";
  document.getElementById("frame").style.display = "none";
  document.getElementById("letterg").style.display = "none";
  document.getElementById("lettero").style.display = "none";
  document.getElementById("letterp").style.display = "none";
  document.getElementById("letterq").style.display = "none";
  document.getElementById("lettern").style.display = "none";
  document.getElementById("lettert").style.display = "none";
  document.getElementById("letterc").style.display = "none";
  document.getElementById("letterp2").style.display = "none";
  document.getElementById("letteru").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  document.getElementById("consolee").style.display = "none";
  document.getElementById("doorleft").style.display = "none";
  document.getElementById("console_big").style.display = "none";
  document.getElementById("buttonreact").style.display = "none";
  document.getElementById("switchoff").style.display = "none";
  document.getElementById("switchoff2").style.display = "none";
  document.getElementById("switchoff3").style.display = "none";
  document.getElementById("switchoff4").style.display = "none";
  document.getElementById("gotodie").style.display = "none";
  document.getElementById("gotovent").style.display = "none";
  document.getElementById("crowbar").style.display = "none";
  document.getElementById("gotoleft2").style.display = "none";
  document.getElementById("gotoright2").style.display = "none";
  document.getElementById("vent").style.display = "none";
  document.getElementById("door5").style.display = "none";
  document.getElementById("door6").style.display = "none";
  document.getElementById("gotoventing").style.display = "none";
  document.getElementById("block5").style.display = "none";
  document.getElementById("gotofurthervent").style.display = "none";
  document.getElementById("gotofriend").style.display = "none";
  document.getElementById("gotoflashbad").style.display = "none";
  document.getElementById("friend").style.display = "none";
  document.getElementById("textfriend").style.display = "none";
  document.getElementById("textfriend2").style.display = "none";
  document.getElementById("textfriend3").style.display = "none";
  document.getElementById("gotoeletrical").style.display = "none";
  document.getElementById("lever").style.display = "none";
  document.getElementById("block6").style.display = "none";
  document.getElementById("gotocock").style.display = "none";
  document.getElementById("door7").style.display = "none";
  document.getElementById("gobackreactor").style.display = "none";
  document.getElementById("keyhole").style.display = "none";
  document.getElementById("electricvent").style.display = "none";
  document.getElementById("gotoventdie").style.display = "none";
  document.getElementById("gotofurthervent2").style.display = "none";
  document.getElementById("gotojumpscare").style.display = "none";
  document.getElementById("face2").style.display = "none";
  document.getElementById("image").src="img/room1_bed.png";
    }, 2990);
    setTimeout(function () {
      document.getElementById("image").src="img/room1_door.png";
    }, 3990);
    setTimeout(function () {
      document.getElementById("image").src="img/room1_pc.png";
    }, 4990);
    setTimeout(function () {
      document.getElementById("image").src="img/room1_pc_ai.png";
    }, 5990);
    setTimeout(function () {
      document.getElementById("image").src="img/room2.png";
    }, 6990);
    setTimeout(function () {
      document.getElementById("image").src="img/room2_hallway.png";
    }, 7990);
    setTimeout(function () {
      document.getElementById("image").src="img/room3.png";
    }, 8990);
    setTimeout(function () {
      document.getElementById("image").src="img/room3_zoom.png";
    }, 9990);
    setTimeout(function () {
      document.getElementById("image").src="img/room4.png";
    }, 10990);
    setTimeout(function () {
      document.getElementById("image").src="img/room5.png";
    }, 11990);
    setTimeout(function () {
      document.getElementById("image").src="img/vent_inside.png";
    }, 12990);
    setTimeout(function () {
      document.getElementById("image").src="img/vent_inside2.png";
    }, 13990);
    setTimeout(function () {
      document.getElementById("image").src="img/Electrical_Room.png";
    }, 14990);
    setTimeout(function () {
      document.getElementById("image").src="img/ding.png";
    }, 15990);
    setTimeout(function () {
      document.getElementById("image").src="img/spook_1.gif";
    }, 16990);
    setTimeout(function () {
      document.getElementById("image").src="img/spook_2.gif";
    }, 17990);
    setTimeout(function () {
      document.getElementById("image").src="img/room6.png";
    }, 18990);
    setTimeout(function () {
      document.getElementById("image").src="img/flashlightman2.gif";
    }, 19990);
    setTimeout(function () {
      document.getElementById("image").src="img/room1_book.png";
      document.getElementById("image").style.display = "none";
      loading.style.display = "none";
      bod.style.margin = "8px";
      loaded = 1;
    }, 20990);

}

document.addEventListener("click", () => {
  if (loaded == 1) {
       document.documentElement.requestFullscreen().catch((e) => {
       
            console.log(e);
       
       })
       
  
       var backpack = document.getElementById("backpack");
       var warning = document.getElementById("warning");
       var image = document.getElementById("image");
       var placeholder = document.getElementById("placeholder");
       var img = document.getElementById("image");
       var gotobed = document.getElementById("gotobed");
       var gotobed2 = document.getElementById("gotobed2");
       var gotodoor = document.getElementById("gotodoor");
       var gotodoor2 = document.getElementById("gotodoor2");
       var gotopc = document.getElementById("gotopc");
       var gotomain = document.getElementById("gotomain");
       var gotomain2 = document.getElementById("gotomain2");
       var gotomain3 = document.getElementById("gotomain3");
       var book = document.getElementById("book");
       clk++;
       if (clk==2) {
            warning.className = "fade-out";
       setTimeout(function () {
           warning.style.display = "none";
           image.style.display = "block";
           placeholder.style.display = "block";
           image.className = "fade-in";
      }, 2990);
       setTimeout(function () {
            image.src="img/room1.png";
           gotobed.style.display = "block";
            gotobed2.style.display = "none";
            gotopc.style.display = "block";
            gotodoor.style.display = "block";
            gotodoor2.style.display = "none";
            gotomain.style.display = "none";
            gotomain2.style.display = "none";
            gotomain3.style.display = "none";
            backpack.style.display = "block";
            book.style.display = "block";
      }, 7990);
       }

   }
  })
  var xd = 0;
  var yd = 0;
  
  function update(e){
  
       if(window.innerHeight > window.innerWidth){
            
       }
  
       var x = e.clientX;
       var y = e.clientY;
      if (typeof x === "undefined") {
        x=xd;
      }
      if (typeof y === "undefined") {
        y=yd;
      }
  
         xd = x;
         yd = y;
  
       document.documentElement.style.setProperty('--cursorX', x + 'px')
       document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove', update)
document.addEventListener('touchmove', update)
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('music').play();
    document.removeEventListener('click', musicPlay);
}

var bop = 0;
var colect = 0;
var pootis = 0;
function changeImage(a)
{
var img = document.getElementById("image");
var gotobed = document.getElementById("gotobed");
var gotobed2 = document.getElementById("gotobed2");
var gotodoor = document.getElementById("gotodoor");
var gotodoor2 = document.getElementById("gotodoor2");
var gotopc = document.getElementById("gotopc");
var gotomain = document.getElementById("gotomain");
var gotomain2 = document.getElementById("gotomain2");
var gotomain3 = document.getElementById("gotomain3");
var backpack = document.getElementById("backpack");
var open = document.getElementById("open");
var inventory = document.getElementById("inventory");
var key = document.getElementById("key");
var flashlight = document.getElementById("flashlight");
var keypad = document.getElementById("keypad");
var keypad_0 = document.getElementById("keypad_0");
var keypad_1 = document.getElementById("keypad_1");
var keypad_2 = document.getElementById("keypad_2");
var keypad_3 = document.getElementById("keypad_3");
var keypad_4 = document.getElementById("keypad_4");
var keypad_5 = document.getElementById("keypad_5");
var keypad_6 = document.getElementById("keypad_6");
var keypad_7 = document.getElementById("keypad_7");
var keypad_8 = document.getElementById("keypad_8");
var keypad_9 = document.getElementById("keypad_9");
var keypad_10 = document.getElementById("keypad_10");
var keypad_11 = document.getElementById("keypad_11");
var readpls = document.getElementById("readpls");
var book = document.getElementById("book");
var textbox = document.getElementById("textbox");
var audio3 = new Audio('img/pc.mp3');
var text = document.getElementById("text");
var text2 = document.getElementById("text2");
var door = document.getElementById("door");
var block = document.getElementById("block");
var gotohallway = document.getElementById("gotohallway");
var texthelp = document.getElementById("texthelp");
var walk = new Audio('img/walk.mp3');
var audio9 = new Audio('img/Step.mp3');

audio3.pause();
audio3.currentTime = 0;

backpack.style.display = "block";
open.style.display = "none";
inventory.style.display = "none";
gotobed.style.display = "none";
gotobed2.style.display = "none";
gotopc.style.display = "none";
gotodoor.style.display = "none";
gotodoor2.style.display = "none";
gotomain.style.display = "none";
gotomain2.style.display = "none";
gotomain3.style.display = "none";
key.style.display = "none";
flashlight.style.display = "none";
keypad.style.display = "none";
keypad_0.style.display = "none";
keypad_1.style.display = "none";
keypad_2.style.display = "none";
keypad_3.style.display = "none";
keypad_4.style.display = "none";
keypad_5.style.display = "none";
keypad_6.style.display = "none";
keypad_7.style.display = "none";
keypad_8.style.display = "none";
keypad_9.style.display = "none";
keypad_10.style.display = "none";
keypad_11.style.display = "none";
book.style.display = "none";
textbox.style.display = "none";
text.style.display = "none";
text2.style.display = "none";
door.style.display = "none";
block.style.display = "none";
gotohallway.style.display = "none";
readpls.style.display = "none";

if ( a == 1) {
        if (dooropen ==1) {
        dooropen = 3;
      }
     audio9.play();
     img.src="img/room1_bed.png";
     gotomain.style.display = "block";
     gotodoor2.style.display = "block";
     if (colect == 0 || colect == 2) {
          key.style.display = "block";
     }
}
else{
     if(a == 2){
      if (bop != 24) {
        audio9.play();
      }
          if (bop==0) {
               img.className = "";
       img.src="img/room1_pc.png";
       audio3.play();
       setTimeout(function () {
          img.className = "fade-in";
         img.src="img/room1_pc_ai.png";
    }, 4990);
       setTimeout(function () {
         textbox.style.display = "block";
         text.style.display = "block";
    }, 7990);
       setTimeout(function () {
          if (bop==0) {
               text2.style.display = "block";
          }
    }, 12990);
        setTimeout(function () {
          if (bop==0) {
            bop=1;
            readpls.style.display = "block";
            }
          
}, 16990);
  }else{
    if (bop != 24) {
        audio9.play();
      }
     img.src="img/room1_pc_ai.png";
     gotomain2.style.display = "block";
     bop=25;
  }
     

     }
     else{
          if(a == 3){
            if (dooropen ==1) {
              dooropen = 3;
            }
          	if (wayyourdressed == 0) {
          		audio9.play();
          	}
           img.src="img/room1.png";
           gotobed.style.display = "block";
           gotopc.style.display = "block";
           gotodoor.style.display = "block";
           book.style.display = "block";
          }
          else{
               if (a == 4) {
               		audio9.play();
                   img.src="img/room1_door.png";
                    gotobed2.style.display = "block";
                    gotomain3.style.display = "block";
                    block.style.display = "block";
                    
                    if (dooropen == 0) {
                                   door.style.display = "block";
                              }else{
                                   gotohallway.style.display = "block";
                              }
                    keypad.style.zIndex = 98;
                    keypad.style.display = "block";
                    keypad.style.top = "51.5%";
                    keypad.style.left = "55.5%";
                    keypad.style.width = "2%"; 
                    if (colect == 0 || colect == 1) {
                         flashlight.style.display = "block";
                    }
               }
               else{
                    if (a == 5) {
                          var audio4 = new Audio('img/key_pickup.mp3');
                        audio4.play();
                         $("#key").prop("onclick", null).off("click");
                         key.style.top = "7%";
                         key.style.left = "82%";
                         key.style.width = "4%";
                         gotomain.style.display = "block";
                         gotodoor2.style.display = "block";
                         if (colect == 2) {
                                 colect = 3;  
                              }
                              else{
                                   colect = 1;
                              } 
                    }
                    else{
                         if (a == 6) {
                                var audio5 = new Audio('img/pickup_sound.mp3');
                              audio5.play();
                              $("#flashlight").prop("onclick", null).off("click");
                              flashlight.style.top = "7%";
                              flashlight.style.left = "76%";
                              flashlight.style.width = "4%";
                              gotobed2.style.display = "block";
                              gotomain3.style.display = "block";
                              if (dooropen == 1 || dooropen == 0) {
                                door.style.display = "block";
                              }else{
                                if (dooropen == 3) {
                                  gotohallway.style.display = "block";
                                }
                                door.style.display = "none";
                              }
                              block.style.display = "block";
                              keypad.style.zIndex = 98;
                              keypad.style.display = "block";
                              keypad.style.top = "51.5%";
                              keypad.style.left = "55.5%";
                              keypad.style.width = "2%"; 
                              if (colect == 1) {
                                 colect = 3;  
                              }
                              else{
                                   colect = 2;
                              }

                               setTimeout(function () {
                                
                                   walk.play();
                              }, 7990);

                              
                         }else{
                              if (a == 7) {
                                  if (colect == 3) {
                                  	audio9.play();
                                    dooropen = 2;
                                   img.src="img/room2_hallway.png";
                                   texthelp.style.display = "none";
                                   walk.pause();
                                    walk.currentTime = 0;
                                    $("#image").prop("onclick", null).off("click");
                                    document.getElementById('music').pause();
                                    document.getElementById('music').currentTime = 0;
                                   document.documentElement.style.setProperty('--rad', '5vmax');  
                                   document.getElementById('flashlight').setAttribute( "onClick", "flashon();changeroom(0);");
                                   setTimeout(function () {
                                   texthelp.innerHTML = "It's too dark, I need the flashlight..."
                                   texthelp.style.display = "block";
                                    texthelp.className = "texthelpanim";
                                    setTimeout(function () {
                                      texthelp.style.display = "none";
                                    }, 5990);
                                      
                                    }, 990);
                                  }else{
                                    
                                    gotobed2.style.display = "block";
                                    gotomain3.style.display = "block";
                                    block.style.display = "block";
                                    gotohallway.style.display = "block";
                                    keypad.style.zIndex = 98;
                                    keypad.style.display = "block";
                                    keypad.style.top = "51.5%";
                                    keypad.style.left = "55.5%";
                                    keypad.style.width = "2%"; 
                                    if (colect == 0 || colect == 1) {
                                         flashlight.style.display = "block";
                                    }
                                    if (pootis==0) {  
                                      pootis=1;
                                    texthelp.style.display = "block";
                                    texthelp.className = "texthelpanim";
                                    setTimeout(function () {
                                    if (dooropen != 2) {
                                        texthelp.style.display = "none";
                                        pootis=0;
                                      }
                                    }, 5990);
                                    }
                                    
                              }
                                  }
                         }
                    }
               }
               
          }
     }
     
}
return false;
}

function inv(b){
     var backpack = document.getElementById("backpack");
     var open = document.getElementById("open");
     var inventory = document.getElementById("inventory");
     var key = document.getElementById("key");
     var flashlight = document.getElementById("flashlight");
     var crowbar = document.getElementById("crowbar");
     holdcrow = 0;
     if (b==4) {
      var audio3 = new Audio('img/crowbar_pickup.mp3');
          audio3.play();
       crowbar.style.display = "none";
       crowbar.style.top = "7%";
      crowbar.style.left = "87.7%";
      crowbar.style.width = "4%";
       colect = 4;
       backpack.style.display = "block";
          open.style.display = "none";
          inventory.style.display = "none";
          key.style.display = "none";
          flashlight.style.display = "none";
          $("#crowbar").prop("onclick", null).off("click");
          crowbar.setAttribute( "onClick", "hold();");
     }

     if(b==1){
          var audio = new Audio('img/Backpack_open.mp3');
          audio.play();
          openowo = 1;
          backpack.style.display = "none";
          open.style.display = "block";
          inventory.style.display = "block";
          if (colect == 1 || colect == 3 || colect == 4) {
               //alert(colect);
               key.style.zIndex = 101;
               key.style.display = "block";
          }
          if (colect == 2 || colect == 3 || colect == 4) {
               //alert(colect);
               flashlight.style.zIndex = 101;
               flashlight.style.display = "block";
          }

          if (colect==4) {
            crowbar.style.zIndex = 101;
            crowbar.style.display = "block";
          }
          
          
     }
     else{
        if (b==2) {
          var audio2 = new Audio('img/Backpack_close.mp3');
          audio2.play();
          openowo = 0;
          backpack.style.display = "block";
          open.style.display = "none";
          inventory.style.display = "none";
          if (colect == 1 || colect == 3 || colect == 4) {
               //alert(colect);
            key.style.display = "none";   
          }
          if (colect == 2 || colect == 3 || colect == 4) {
               //alert(colect);
               flashlight.style.display = "none";
          }

          if (colect==4) {
            crowbar.style.display = "none";
          }
        }
          
          
     }
}

var correct = 0;

function keypad(c){
    if (dooropen == 0) {
     var keypad = document.getElementById("keypad");
     var keypad_0 = document.getElementById("keypad_0");
     var keypad_1 = document.getElementById("keypad_1");
     var keypad_2 = document.getElementById("keypad_2");
     var keypad_3 = document.getElementById("keypad_3");
     var keypad_4 = document.getElementById("keypad_4");
     var keypad_5 = document.getElementById("keypad_5");
     var keypad_6 = document.getElementById("keypad_6");
     var keypad_7 = document.getElementById("keypad_7");
     var keypad_8 = document.getElementById("keypad_8");
     var keypad_9 = document.getElementById("keypad_9");
     var keypad_10 = document.getElementById("keypad_10");
     var keypad_11 = document.getElementById("keypad_11");
     var door = document.getElementById("door");
     var gotohallway = document.getElementById("gotohallway");
     $("#keypad").prop("onclick", null).off("click");
     keypad.style.zIndex = 101;
     keypad.style.top = "50%";
     keypad.style.left = "50%";
     keypad.style.width = "25%";
     keypad_0.style.display = "block";
     keypad_1.style.display = "block";
     keypad_2.style.display = "block";
     keypad_3.style.display = "block";
     keypad_4.style.display = "block";
     keypad_5.style.display = "block";
     keypad_6.style.display = "block";
     keypad_7.style.display = "block";
     keypad_8.style.display = "block";
     keypad_9.style.display = "block";
     keypad_10.style.display = "block";
     keypad_11.style.display = "block";
     if (c != 13) {
          var audio = new Audio('img/keypad_press.mp3');
          audio.play();
     }
     
     if(c==0){
          document.getElementById("keypad_0").src = "img/keypad_dark/keypad_0.png";
     setTimeout(function () {
         document.getElementById("keypad_0").src = "img/keypad/keypad_0.png";
    }, 200);   
     }else{
          if (c==1) {
               document.getElementById("keypad_1").src = "img/keypad_dark/keypad_1.png";
      setTimeout(function () {
          document.getElementById("keypad_1").src = "img/keypad/keypad_1.png";
     }, 200);  
          } else{
               if(c==2){
                    document.getElementById("keypad_2").src = "img/keypad_dark/keypad_2.png";
     setTimeout(function () {
         document.getElementById("keypad_2").src = "img/keypad/keypad_2.png";
     }, 200);  
               }else{
                    if (c==3) {
                       document.getElementById("keypad_3").src = "img/keypad_dark/keypad_3.png";
     setTimeout(function () {
         document.getElementById("keypad_3").src = "img/keypad/keypad_3.png";
    }, 200);    
}else{
     if (c==4) {
          document.getElementById("keypad_4").src = "img/keypad_dark/keypad_4.png";
     setTimeout(function () {
         document.getElementById("keypad_4").src = "img/keypad/keypad_4.png";
    }, 200);  
     }else{
          if (c==5) {
               document.getElementById("keypad_5").src = "img/keypad_dark/keypad_5.png";
     setTimeout(function () {
         document.getElementById("keypad_5").src = "img/keypad/keypad_5.png";
    }, 200);  
          }else{
               if (c==6) {
                    document.getElementById("keypad_6").src = "img/keypad_dark/keypad_6.png";
     setTimeout(function () {
         document.getElementById("keypad_6").src = "img/keypad/keypad_6.png";
    }, 200);  
               }else{
                    if (c==7) {
                         document.getElementById("keypad_7").src = "img/keypad_dark/keypad_7.png";
     setTimeout(function () {
         document.getElementById("keypad_7").src = "img/keypad/keypad_7.png";
    }, 200);  
                    }else{
                         if (c==8) {
                              document.getElementById("keypad_8").src = "img/keypad_dark/keypad_8.png";
     setTimeout(function () {
         document.getElementById("keypad_8").src = "img/keypad/keypad_8.png";
    }, 200);  
                         }if (c==9) {
                              document.getElementById("keypad_9").src = "img/keypad_dark/keypad_9.png";
     setTimeout(function () {
         document.getElementById("keypad_9").src = "img/keypad/keypad_9.png";
    }, 200);  
                         }
                    }
               }
          }
     }
}
                    
               }
          }
     }
     if (correct==0) {
          if (c==4) {
               correct = 1;
              
          }else{
               correct=0;
          }
     }else{
          if(correct==1){
               if (c==2) {
                    correct=2;
                    
               }else{
                    correct=0;
               }
          }else{
               if (correct==2) {
                    if (c==3) {
                         correct=3;
                        
                    }
                    else{
                         correct=0;
                    }
               }else{
                    if (correct==3) {
                         if (c==6) {
                              $("#keypad").prop("onclick", null).off("click");
                              var audio2 = new Audio('img/keypad_correct.mp3');
                              audio2.play();
                              c=11;
                              setTimeout(function () {
                                      var audio3 = new Audio('img/door.mp3');
                                   audio3.play();  
                                   door.className = "opendoor";
                                   dooropen = 1;
                              }, 990);
                              
                              setTimeout(function () {
                                        door.style.display = "none";
                                        if (dooropen == 1) {
                                          gotohallway.style.display = "block";
                                          dooropen=3;
                                        }
                                        
                              }, 6990);
                         }
                         else{
                              correct=0;
                         }
                    }
               }
          }
     }
     
     if (c == 10 || c == 11 || c == 13){
          keypad.style.zIndex = 98;
          keypad.style.top = "51.5%";
          keypad.style.left = "55.5%";
          keypad.style.width = "2%";
          keypad.setAttribute( "onClick", "keypad(12);");
          keypad_0.style.display = "none";
          keypad_1.style.display = "none";
          keypad_2.style.display = "none";
          keypad_3.style.display = "none";
          keypad_4.style.display = "none";
          keypad_5.style.display = "none";
          keypad_6.style.display = "none";
          keypad_7.style.display = "none";
          keypad_8.style.display = "none";
          keypad_9.style.display = "none";
          keypad_10.style.display = "none";
          keypad_11.style.display = "none"; 
     }
    }

}

function nexttext(f){
     bop++;
     //alert(bop);
     var text = document.getElementById("text");
     var text2 = document.getElementById("text2");
     var text3 = document.getElementById("text3");
     var text4 = document.getElementById("text4");
     var text5 = document.getElementById("text5");
     var text6 = document.getElementById("text6");
     var text7 = document.getElementById("text7");
     var text8 = document.getElementById("text8");
     var text9 = document.getElementById("text9");
     var text10 = document.getElementById("text10");
     var text11 = document.getElementById("text11");
     var text12 = document.getElementById("text12");
     var text13 = document.getElementById("text13");
     var text14 = document.getElementById("text14");
     var text15 = document.getElementById("text15");
     var text16 = document.getElementById("text16");
     var text17 = document.getElementById("text17");
     var text18 = document.getElementById("text18");
     var text19 = document.getElementById("text19");
     var text20 = document.getElementById("text20");
     var text21 = document.getElementById("text21");
     var text22 = document.getElementById("text22");
     var textbox = document.getElementById("textbox");
     var texthelpyes = document.getElementById("texthelpyes");
     var texthelpno = document.getElementById("texthelpno");
     var readpls = document.getElementById("readpls");

     if(bop==1){
          text.className = "noanime";
          text2.className ="noanime";
          text.style.display = "block";
   text2.style.display = "block";
   readpls.style.display = "block";
     }else{
       if(bop==2){
      text.style.display = "none";
   text2.style.display = "none";
   readpls.style.display = "none";
   text3.style.display = "block";
   readpls.style.display = "none";
   setTimeout(function () {
        if (bop==2) {
          text4.style.display = "block";
        }
          
}, 4990);
   setTimeout(function () {
      if (bop==2) {
         bop=3;
         readpls.style.display = "block";
       }
}, 8990);
}else{
     if (bop==3) {
       text3.className = "noanime";
          text3.style.display = "block";
          text4.className = "noanime";
          text4.style.display = "block";
          readpls.style.display = "block";
     }else{
      if (bop==4) {
        readpls.style.display = "none";
        text3.style.display = "none";
        text4.style.display = "none";
        text5.style.display = "block";
        readpls.style.display = "none";
        setTimeout(function () {
          if (bop==4) {
            texthelpyes.style.display = "block";
          }
        
        }, 1990);
        setTimeout(function () {
          if (bop==4) {
            texthelpno.style.display = "block";
          }
        
        }, 2990);
        $("#textbox").prop("onclick", null).off("click");
      }else{
        if (bop==5) {
          text5.style.display = "none";
          if (f==2) {
            $("#texthelpyes").prop("onclick", null).off("click");
            $("#texthelpno").prop("onclick", null).off("click");
            texthelpyes.className = "texthelpanim";
            texthelpno.style.display = "none";
            setTimeout(function () {
                texthelpyes.style.display = "none";
                bop=22;
                text6.style.display = "block";
                textbox.setAttribute( "onClick", "nexttext(1);");
             }, 5990);
            setTimeout(function () {
                        if (bop==22) {
                           bop=23;
                           readpls.style.display = "block";
                         }
                  }, 9990);
          }else{
            $("#texthelpno").prop("onclick", null).off("click");
            $("#texthelpyes").prop("onclick", null).off("click");
            texthelpno.className = "texthelpanim";
            texthelpyes.style.display = "none";
            setTimeout(function () {
                bop=6;
                texthelpno.style.display = "none";
                text7.style.display = "block";
                textbox.setAttribute( "onClick", "nexttext(1);");
                readpls.style.display = "none";
             }, 5990);
            setTimeout(function () {
                      if (bop==6) {
                        text8.style.display = "block";
                      }
                        
              }, 9990);
                 setTimeout(function () {
                    if (bop==6) {
                       bop=7;
                       readpls.style.display = "block";
                     }
              }, 14990);
                        }
          
        }else{
            if (bop==7) {
              text7.className = "noanime";
              text7.style.display = "block";
              text8.className = "noanime";
              text8.style.display = "block";
              readpls.style.display = "block";
            }else{
              if (bop==8) {
                readpls.style.display = "none";
                text7.style.display = "none";
   text8.style.display = "none";
   text9.style.display = "block";
   setTimeout(function () {
        if (bop==8) {
          text10.style.display = "block";
        }
          
}, 4990);
   setTimeout(function () {
      if (bop==8) {
         bop=9;
         readpls.style.display = "block";
       }
}, 9990);
              }else{
                if (bop==9) {
                  text9.className = "noanime";
                  text9.style.display = "block";
                  text10.className = "noanime";
                  text10.style.display = "block";
                  readpls.style.display = "block";
                }else{
                  if (bop==10) {
                    readpls.style.display = "none";
                    text9.style.display = "none";
                     text10.style.display = "none";
                     text11.style.display = "block";
                     setTimeout(function () {
                          if (bop==10) {
                            text12.style.display = "block";
                          }
                            
                  }, 4990);
                     setTimeout(function () {
                        if (bop==10) {
                           bop=11;
                           readpls.style.display = "block";
                         }
                  }, 9990);
                  }else{
                    if (bop==11) {
                       text11.className = "noanime";
                      text11.style.display = "block";
                      text12.className = "noanime";
                      text12.style.display = "block";
                      readpls.style.display = "block";
                    }else{
                      if (bop==12) {
                        readpls.style.display = "none";
                    text11.style.display = "none";
                     text12.style.display = "none";
                     text13.style.display = "block";
                     setTimeout(function () {
                          if (bop==12) {
                            text14.style.display = "block";
                          }
                            
                  }, 4990);
                     setTimeout(function () {
                        if (bop==12) {
                           bop=13;
                           readpls.style.display = "block";
                         }
                  }, 9990);
                  }else{
                    if (bop==13) {
                       text13.className = "noanime";
                      text13.style.display = "block";
                      text14.className = "noanime";
                      text14.style.display = "block";
                      readpls.style.display = "block";
                    }else{
                      if (bop==14) {
                        readpls.style.display = "none";
                    text13.style.display = "none";
                     text14.style.display = "none";
                     text15.style.display = "block";
                     setTimeout(function () {
                          if (bop==14) {
                            text16.style.display = "block";
                          }
                            
                  }, 4990);
                     setTimeout(function () {
                        if (bop==14) {
                           bop=15;
                           readpls.style.display = "block";
                         }
                  }, 9990);
                  }else{
                    if (bop==15) {
                       text15.className = "noanime";
                      text15.style.display = "block";
                      text16.className = "noanime";
                      text16.style.display = "block";
                      readpls.style.display = "block";
                    }else{
                      if (bop==16) {
                        readpls.style.display = "none";
                    text15.style.display = "none";
                     text16.style.display = "none";
                     text17.style.display = "block";
                     setTimeout(function () {
                          if (bop==16) {
                            text18.style.display = "block";
                          }
                            
                  }, 4990);
                     setTimeout(function () {
                        if (bop==16) {
                           bop=17;
                           readpls.style.display = "block";
                         }
                  }, 9990);
                  }else{
                    if (bop==17) {
                       text17.className = "noanime";
                      text17.style.display = "block";
                      text18.className = "noanime";
                      text18.style.display = "block";
                      readpls.style.display = "block";
                    }else{
                      if (bop==18) {
                        readpls.style.display = "none";
                    text17.style.display = "none";
                     text18.style.display = "none";
                     text19.style.display = "block";
                     setTimeout(function () {
                          if (bop==18) {
                            text20.style.display = "block";
                          }
                            
                  }, 4990);
                     setTimeout(function () {
                        if (bop==18) {
                           bop=19;
                           readpls.style.display = "block";
                         }
                  }, 9990);
                  }else{
                    if (bop==19) {
                       text19.className = "noanime";
                      text19.style.display = "block";
                      text20.className = "noanime";
                      text20.style.display = "block";
                      readpls.style.display = "block";
                    }else{
                      if (bop==20) {
                        readpls.style.display = "none";
                    text19.style.display = "none";
                     text20.style.display = "none";
                     text21.style.display = "block";
                     setTimeout(function () {
                          if (bop==20) {
                            text22.style.display = "block";
                          }
                            
                  }, 4990);
                     setTimeout(function () {
                        if (bop==20) {
                           bop=21;
                           readpls.style.display = "block";
                         }
                  }, 9990);
                  }else{
                    if (bop==21) {
                       text21.className = "noanime";
                      text21.style.display = "block";
                      text22.className = "noanime";
                      text22.style.display = "block";
                      readpls.style.display = "block";
                    }else{
                      if (bop==22) {
                        readpls.style.display = "none";
                    text21.style.display = "none";
                     text22.style.display = "none";
                     text6.style.display = "block";
                     setTimeout(function () {
                        if (bop==22) {
                           bop=23;
                           readpls.style.display = "block";
                         }
                  }, 4990);
                  }else{
                    if (bop==23) {
                       text6.className = "noanime";
                      text6.style.display = "block";
                      readpls.style.display = "block";
                    }else{
                      readpls.style.display = "none";
                      text6.style.display = "none";
                      textbox.style.display = "none";
                      changeImage(2); 
                    }
                    }
                    }
                    }
                    }
                    }
                  }
                  
                }
              }
               
            }

            
          }
          
        }
        
      }
   
     }
   }
 }
}
}
}
}
     }
     
}   
     }
   
  


var wayyourdressed = 0;
function openbook(z){
  var page = document.getElementById("page");

  if (z==1) {
    var audio = new Audio('img/paperflip.mp3');
    audio.play();
    page.style.display = "block";
    changeImage();
    wayyourdressed = 1;
  }else{
    if (z==2 && wayyourdressed==1) {
      var audio2 = new Audio('img/paperclickaway.mp3');
    audio2.play();
      page.style.display = "none";
      changeImage(3);
      wayyourdressed = 0;
    }
  }
}