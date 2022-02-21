var leverpulled = 0;
var jakey = 0;
var onoff = 0;
var door2open = 0;
var correcto = 0;
var plan = 0;
var fail = 0;
var holdcrow = 0;
var leftdory= 0;
var audio17 = new Audio('img/Reactor_Noise.mp3');
function flashon() {
	if (onoff!=3) {
			onoff++;
		holdcrow = 0;
		if (onoff==1) {
			document.documentElement.style.setProperty('--rad', '20vmax');
			var audio = new Audio('img/Flashlight_On.mp3');
    	    audio.play();
		}else{
			if (onoff==2) {
				onoff=0;
				document.documentElement.style.setProperty('--rad', '5vmax');
				var audio = new Audio('img/Flashlight_Off.mp3');
    	    	audio.play();
		}
		
		var backpack = document.getElementById("backpack");
		var open = document.getElementById("open");
		var inventory = document.getElementById("inventory");
		var key = document.getElementById("key");
		var flashlight = document.getElementById("flashlight");
		var crowbar = document.getElementById("crowbar");
		backpack.style.display = "block";
		open.style.display = "none";
		inventory.style.display = "none";
		key.style.display = "none";
		flashlight.style.display = "none";
		crowbar.style.display = "none";
	}
	}
}

var audio10 = new Audio('img/scratching.mp3');
	audio10.loop = true;

function changeroom(a){
	var img = document.getElementById("image");
	var backpack = document.getElementById("backpack");
	var open = document.getElementById("open");
	var inventory = document.getElementById("inventory");
	var goto2door=document.getElementById("goto2door");
	var gotoleft=document.getElementById("gotoleft");
	var gotoright=document.getElementById("gotoright");
	var key = document.getElementById("key");
	var flashlight = document.getElementById("flashlight");
	var jumpscare = document.getElementById("Jumpscare");
	var face = document.getElementById("face");
	var stars = document.getElementById("stars");
	var textDEMO = document.getElementById("textDEMO");
	var textDEMO2 = document.getElementById("textDEMO2");
	var textDEMO3 = document.getElementById("textDEMO3");
	var door2 = document.getElementById("door2");
	var door3 = document.getElementById("door3");
	var bod = document.getElementById("bod");
	var block2 = document.getElementById("block2");
	var block3 = document.getElementById("block3");
	var gotozoom = document.getElementById("gotozoom");
	var gotoroom3 = document.getElementById("gotoroom3");
	var door4 = document.getElementById("door4");
	var keypad2 = document.getElementById("keypad2");
    var keypad2_q = document.getElementById("keypad2_q");
    var keypad2_p = document.getElementById("keypad2_p");
    var keypad2_g = document.getElementById("keypad2_g");
    var keypad2_n = document.getElementById("keypad2_n");
    var keypad2_o = document.getElementById("keypad2_o");
    var keypad2_t = document.getElementById("keypad2_t");
    var keypad2_r = document.getElementById("keypad2_r");
    var keypad2_c = document.getElementById("keypad2_c");
    var keypad2_u = document.getElementById("keypad2_u");
    var keypad2_m = document.getElementById("keypad2_m");
    var keypad2_10 = document.getElementById("keypad2_10");
    var keypad2_11 = document.getElementById("keypad2_11");
    var block4 = document.getElementById("block4");
    var keypad = document.getElementById("keypad");
    var gotoroom4 = document.getElementById("gotoroom4");
    var sun = document.getElementById("sun");
    var mercury = document.getElementById("mercury");
    var venus = document.getElementById("venus");
    var earth = document.getElementById("earth");
    var mars = document.getElementById("mars");
    var jupiter = document.getElementById("jupiter");
    var saturn = document.getElementById("saturn");
    var uranus = document.getElementById("uranus");
    var neptune = document.getElementById("neptune");
    var scrollright = document.getElementById("scrollright");
    var scrollleft = document.getElementById("scrollleft");
    var frame = document.getElementById("frame");
    var letterg = document.getElementById("letterg");
    var lettero = document.getElementById("lettero");
    var letterp = document.getElementById("letterp");
    var letterq = document.getElementById("letterq");
    var lettern = document.getElementById("lettern");
    var lettert = document.getElementById("lettert");
    var letterc = document.getElementById("letterc");
    var letterp2 = document.getElementById("letterp2");
    var letteru = document.getElementById("letteru");
    var consolee = document.getElementById("consolee");
    var doorleft = document.getElementById("doorleft");
    var console_big = document.getElementById("console_big");
    var buttonreact = document.getElementById("buttonreact");
    var switchoff = document.getElementById("switchoff");
    var gotodie = document.getElementById("gotodie");
    var gotovent = document.getElementById("gotovent");
    var crowbar = document.getElementById("crowbar");
    var gotoleft2 = document.getElementById("gotoleft2");
    var gotoright2 = document.getElementById("gotoright2");
    var vent = document.getElementById("vent");
	var audio9 = new Audio('img/Step.mp3');
	var audiovent = new Audio('img/vent.mp3');
	var texthelp = document.getElementById("texthelp");
	var gotoventing = document.getElementById("gotoventing");
	var block5 = document.getElementById("block5");
	var gotofurthervent = document.getElementById("gotofurthervent");
	var gotofriend = document.getElementById("gotofriend");
	var gotoflashbad = document.getElementById("gotoflashbad");
	var friend = document.getElementById("friend");
	var textbox = document.getElementById("textbox");
	var textfriend = document.getElementById("textfriend");
	var textfriend2 = document.getElementById("textfriend2");
	var textfriend3 = document.getElementById("textfriend3");
	var gotoeletrical = document.getElementById("gotoeletrical");
	var lever = document.getElementById("lever");
	var block5 = document.getElementById("block5");
	var gotocock = document.getElementById("gotocock");
	var door7 = document.getElementById("door7");
	var gobackreactor = document.getElementById("gobackreactor");
	var keyhole = document.getElementById("keyhole");
	var electricvent = document.getElementById("electricvent");
	var gotoventdie = document.getElementById("gotoventdie");
	var gotofurthervent2 = document.getElementById("gotofurthervent2");
	var gotojumpscare = document.getElementById("gotojumpscare");
	var face2 = document.getElementById("face2");

	backpack.style.display = "block";
	open.style.display = "none";
	inventory.style.display = "none";
	key.style.display = "none";
	flashlight.style.display = "none";
	goto2door.style.display = "none";
	gotoleft.style.display = "none";
	gotoright.style.display = "none";
	jumpscare.style.display = "none";
	face.style.display = "none";
	door2.style.display = "none";
	door3.style.display = "none";
	block2.style.display = "none";
	block3.style.display = "none";
	gotozoom.style.display = "none";
	gotoroom3.style.display = "none";
	door4.style.display = "none";
	keypad2.style.display = "none";
    keypad2_q.style.display = "none";
    keypad2_p.style.display = "none";
    keypad2_g.style.display = "none";
    keypad2_n.style.display = "none";
    keypad2_o.style.display = "none";
    keypad2_t.style.display = "none";
    keypad2_r.style.display = "none";
    keypad2_c.style.display = "none";
    keypad2_u.style.display = "none";
    keypad2_m.style.display = "none";
    keypad2_10.style.display = "none";
    keypad2_11.style.display = "none";
    block4.style.display = "none";
    keypad.style.display = "none";
    gotoroom4.style.display = "none";
    sun.style.display = "none";
	mercury.style.display = "none";
	venus.style.display = "none";
	earth.style.display = "none";
	mars.style.display = "none";
	jupiter.style.display = "none";
	saturn.style.display = "none"; 
	uranus.style.display = "none";
	neptune.style.display = "none";
	scrollright.style.display = "none";
	scrollleft.style.display = "none";
	frame.style.display = "none";
	letterg.style.display = "none";
	lettero.style.display = "none";
	letterp.style.display = "none";
	letterq.style.display = "none";
	lettern.style.display = "none";
	lettert.style.display = "none";
	letterc.style.display = "none";
	letterp2.style.display = "none";
	letteru.style.display = "none";
	doorleft.style.display = "none";
	consolee.style.display = "none";
	gotodie.style.display = "none";
	gotovent.style.display = "none";
	crowbar.style.display = "none";
	gotoleft2.style.display = "none";
	gotoright2.style.display = "none";
	gotoventing.style.display = "none";
	vent.style.display = "none";
	door5.style.display = "none";
	door6.style.display = "none";
	block5.style.display = "none";
	gotofurthervent.style.display = "none";
	gotofriend.style.display = "none";
	gotoflashbad.style.display = "none";
	friend.style.display = "none";
	textbox.style.display = "none";
	textfriend.style.display = "none";
	textfriend2.style.display = "none";
	textfriend3.style.display = "none";
	gotoeletrical.style.display = "none";
	lever.style.display = "none";
	block6.style.display = "none";
	gotocock.style.display = "none";
	door7.style.display = "none";
	gobackreactor.style.display = "none";
	keyhole.style.display = "none";
	electricvent.style.display = "none";
	gotoventdie.style.display = "none";
	gotofurthervent2.style.display = "none";
	gotojumpscare.style.display = "none";
	face2.style.display = "none";

	if (a==0) {
		goto2door.style.display = "block";
		flashlight.setAttribute( "onClick", "flashon();");

	}else{
			if (a==1) {
				audio9.play();
				$("#keypad").prop("onclick", null).off("click");
    			audio10.play();
				img.src="img/room2.png";
				door2.style.display = "block";
				door3.style.display = "block";
				gotoleft.style.display = "block";
				gotoright.style.display = "block";
				block2.style.display = "block";
	            block3.style.display = "block";
			}else{
				if (a==2) {
		var audio3 = new Audio('img/door.mp3');
                                   audio3.play();  
                                   door2.className = "opendoor2";
                                   door2.style.display = "block";
				door3.style.display = "block";
				block2.style.display = "block";
	            block3.style.display = "block";
	            setTimeout(function () {
	            			audiooo();
                           door2.style.display = "none";
							door3.style.display = "none";
							block2.style.display = "none";
							block3.style.display = "none";
                           audio9.play();
                           img.src="img/room3.png";
                           image.setAttribute( "onClick", "keypad2(13);");
                           gotozoom.style.display = "block";
                           door4.style.display = "block";
                           keypad2.style.display = "block";
                           block4.style.display = "block";
                 }, 5990);
				}else{
					if (a==3) {
						var audio3 = new Audio('img/door.mp3');
                                   audio3.play();  
                                   door3.className = "opendoor3";
                                   door2.style.display = "block";
				door3.style.display = "block";
				block2.style.display = "block";
	            block3.style.display = "block";

	            audio9.play();
	            setTimeout(function () {
	            		audiooo();
                           door3.style.display = "none";
                          door2.style.display = "none";
				block2.style.display = "none";
	            block3.style.display = "none";
						backpack.style.display = "none";
						img.src="img/placeholder.png";
						var audio = new Audio('img/Chase.mp3');
    		            audio.play();
    		            setTimeout(function () {
                              face.style.display = "block";  
                        }, 1990);
                        setTimeout(function () {

    		            	audio.pause();
                             audio.currentTime = 0;

                              face.style.display = "none"; 
                              jumpscare.style.display = "block";
                              var audio2 = new Audio('img/Jumpscare.mp3');
    		            		audio2.play();

                        }, 10990);
                        setTimeout(function () {
                        	jumpscare.style.display = "none";
    		            	location.reload();
                        }, 13590);
                       
    		            document.documentElement.style.setProperty('--rad', '100vmax');
    		            
                           
                 }, 5990);
						
					}else{
						if (a==4) {
							audio9.play();
                           img.src="img/room3_zoom.png";
                           gotoroom3.style.display = "block";
                           keypad2.style.zIndex = 98;
          					keypad2.style.top = "56%";
          					keypad2.style.left = "30%";
          					keypad2.style.width = "2%";
          					if (door2open!=1) {
          						keypad2.setAttribute( "onClick", "keypad2(12);");
          					}          					sun.style.display = "block";
							venus.style.display = "block";
							earth.style.display = "block";
							saturn.style.display = "block"; 
							uranus.style.display = "block";
							scrollright.style.display = "block";
							frame.style.display = "block";
							if (plan>=2) {
								mercury.style.display = "block";
								letterg.style.display = "block";
							}
							if (plan>=5) {
								mars.style.display = "block";
								lettero.style.display = "block";
							}
							if (plan>=6) {
								jupiter.style.display = "block";
								letterp2.style.display = "block";
							}
							if (plan>=9) {
								neptune.style.display = "block";
								lettern.style.display = "block";
							}
							if (plan>=1) {
								letteru.style.display = "block";
							}
							if (plan>=3) {
								letterp.style.display = "block";
							}
							if (plan>=4) {
								letterq.style.display = "block";
							}
							if (plan>=7) {
								letterc.style.display = "block";
							}
							if (plan>=8) {
								lettert.style.display = "block";
							}
						
						}else{
							if (a==5) {
								audio9.play();
                           img.src="img/room3.png";
                           gotozoom.style.display = "block";
                           if(door2open==1){
                           	gotoroom4.style.display = "block";
                           }else{
                           	door4.style.display = "block";
                           }
                           keypad2.style.display = "block";
                           block4.style.display = "block";
							}else{
								if(a==6){
									door2open=2;
									audio9.play();
									$("#image").prop("onclick", null).off("click");
									image.setAttribute( "onClick", "reactor(7);");
									img.src="img/room4.png";
									document.getElementById('music').play();
									consolee.style.display = "block";
									doorleft.style.display = "block";
									gotodie.style.display = "block";
									gotovent.style.display = "block";
									crowbar.style.display = "block";
									block5.style.display = "block";
								}else{
									if (a==7) {
										holdcrow = 0;
										backpack.style.display = "none";
										if (colect != 4) {
											crowbar.style.display = "block";
											$("#crowbar").prop("onclick", null).off("click");
										}
										doorleft.style.display = "block";
										consolee.style.display = "block";
										block5.style.display = "block";
										$("#consolee").prop("onclick", null).off("click");
										setTimeout(function () {
                                                var audio3 = new Audio('img/door.mp3');
                                             audio3.play();  
                                             doorleft.className = "opendoor";
                                        }, 990);
                                        setTimeout(function () {
                                        		var audion = new Audio('img/Flashlight_On.mp3');
                                        		var audioff = new Audio('img/Flashlight_Off.mp3');
                                        		var audiocreep = new Audio('img/creepy_ENT.mp3');
                                        		var audiodoor = new Audio('img/door_ENT.mp3');
                                        		var audioviolin = new Audio('img/violinmagic_ENT.mp3');
                                        		var audioclose = new Audio('img/itgetscloser_ENT.mp3');
                                        		var audiostep = new Audio('img/step_ENT.mp3');
                                        		var audioscare = new Audio('img/scream.mp3');
                                                img.src="img/ding.png";
												crowbar.style.display = "none";
												doorleft.style.display = "none";
												consolee.style.display = "none";
												block5.style.display = "none";
												audio9.play();
												audio17.pause();
												audio17.currentTime = 0;
												document.documentElement.style.setProperty('--rad', '9vmax');
												setTimeout(function () {
													document.documentElement.style.setProperty('--rad', '4vmax');
												}, 200);
												setTimeout(function () {
													document.documentElement.style.setProperty('--rad', '2vmax');
												}, 500);
												setTimeout(function () {
													document.documentElement.style.setProperty('--rad', '8vmax');
												}, 700);
												setTimeout(function () {
													document.documentElement.style.setProperty('--rad', '4vmax');
												}, 750);
												setTimeout(function () {
													document.documentElement.style.setProperty('--rad', '10vmax');
												}, 800);
												setTimeout(function () {
													document.documentElement.style.setProperty('--rad', '0vmax');
												}, 900);
												setTimeout(function () {
													document.documentElement.style.setProperty('--rad', '4vmax');
												}, 1100);
												setTimeout(function () {
													document.documentElement.style.setProperty('--rad', '2vmax');
												}, 1200);
												setTimeout(function () {
													document.documentElement.style.setProperty('--rad', '8vmax');
												}, 1400);
												setTimeout(function () {
													document.documentElement.style.setProperty('--rad', '4vmax');
												}, 1450);
												setTimeout(function () {
													document.documentElement.style.setProperty('--rad', '10vmax');
												}, 1500);
												setTimeout(function () {
													document.documentElement.style.setProperty('--rad', '0vmax');
												}, 1600);
												setTimeout(function () {
													document.documentElement.style.setProperty('--rad', '4vmax');
												}, 1800);
												setTimeout(function () {
													document.documentElement.style.setProperty('--rad', '2vmax');
												}, 1900);
												setTimeout(function () {
													document.documentElement.style.setProperty('--rad', '8vmax');
												}, 2100);
												setTimeout(function () {
													document.documentElement.style.setProperty('--rad', '4vmax');
												}, 2150);
												setTimeout(function () {
													document.documentElement.style.setProperty('--rad', '10vmax');
												}, 2200);
												setTimeout(function () {
													document.documentElement.style.setProperty('--rad', '0vmax');
												}, 2300);
												setTimeout(function () {
													document.documentElement.style.setProperty('--rad', '4vmax');
												}, 2500);
												setTimeout(function () {
													document.documentElement.style.setProperty('--rad', '2vmax');
												}, 2600);
												setTimeout(function () {
													document.documentElement.style.setProperty('--rad', '8vmax');
												}, 2700);
												setTimeout(function () {
													document.documentElement.style.setProperty('--rad', '4vmax');
												}, 2750);
												setTimeout(function () {
													document.documentElement.style.setProperty('--rad', '10vmax');
												}, 2800);
												setTimeout(function () {
													document.documentElement.style.setProperty('--rad', '1vmax');
												}, 2900);
												setTimeout(function () {
													texthelp.style.display = "none";
													texthelp.innerHTML = "Uh the flashlight stopped working..."
                                  					texthelp.style.display = "block";
                                  					texthelp.className = "texthelpanim";
												}, 4500);
												setTimeout(function () {
													audion.play();
												}, 5500);
												setTimeout(function () {
													audioff.play();
												}, 7500);
												setTimeout(function () {
													audion.play();
												}, 7990);
												setTimeout(function () {
													audioff.play();
												}, 8990);
												setTimeout(function () {
													audion.play();
												}, 9390);
												setTimeout(function () {
													audioff.play();
												}, 9990);
												setTimeout(function () {
													texthelp.style.display = "none";
													texthelp.innerHTML = "I wonder if the battery ran out.."
                                  					texthelp.style.display = "block";
												}, 10500);
												setTimeout(function () {
													texthelp.style.display = "none";
													texthelp.innerHTML = "Where was the exit again?"
                                  					texthelp.style.display = "block";
												}, 16500);
												setTimeout(function () {
													audiocreep.play();
													texthelp.style.display = "none";
													texthelp.innerHTML = "That way I thin- what was that?"
                                  					texthelp.style.display = "block";
												}, 22500);
												setTimeout(function () {
													audion.play();
												}, 23500);
												setTimeout(function () {
													audioff.play();
												}, 24600);
												setTimeout(function () {
													audion.play();
												}, 25800);
												setTimeout(function () {
													audioff.play();
												}, 26090);
												setTimeout(function () {
													audion.play();
												}, 27200);
												setTimeout(function () {
													audioff.play();
												}, 27350);
												setTimeout(function () {
													audion.play();
												}, 27500);
												setTimeout(function () {
													audioff.play();
												}, 27620);
												setTimeout(function () {
													audion.play();
												}, 27800);
												setTimeout(function () {
													audioff.play();
												}, 27900);
												setTimeout(function () {
													audion.play();
												}, 28150);
												setTimeout(function () {
													audioff.play();
												}, 28200);
												setTimeout(function () {
													audion.play();
												}, 28350);
												setTimeout(function () {
													audioff.play();
												}, 28480);
												setTimeout(function () {
													audiocreep.play();
													texthelp.style.display = "none";
													texthelp.innerHTML = "Turn on damn it"
                                  					texthelp.style.display = "block";
												}, 28500);
												setTimeout(function () {
													audiodoor.play();
													audioviolin.play();
													texthelp.style.display = "none";
													texthelp.innerHTML = "oh shi-"
                                  					texthelp.style.display = "block";
												}, 34500);
												setTimeout(function () {
													audioclose.play();
													texthelp.style.display = "none";
													texthelp.style.left = "25%";
													texthelp.innerHTML = "My body is trembling with fear, I can't move, I can't speak,<br>I can feel something getting closer"
                                  					texthelp.style.display = "block";
												}, 40500);
												setTimeout(function () {
													audiostep.play();
													audiooo();
													texthelp.style.display = "none";
												}, 46500);
												setTimeout(function () {
													img.src="img/flashlightman2.gif";
													audioscare.play();
													document.documentElement.style.setProperty('--rad', '100vmax');
												}, 66500);
												setTimeout(function () {
													location.reload();
												}, 70500);
												

												

                                                  
                                        }, 6990);
    		            				
									}else{
										if (a==8) {
											holdcrow = 0;
											img.src="img/room2.png";
											$("#image").prop("onclick", null).off("click");
											audio9.play();
											if (leftdory==0) {
												gotoleft2.style.display = "block";
											}
											gotoright2.style.display = "block";
											vent.style.display = "block";
											door5.style.display = "block";
											door6.style.display = "block";
											block3.style.display = "block";
											gobackreactor.style.display = "block";
										}else{
											if (a==9) {
												leftdory=1;
												holdcrow = 0;
												gotoright2.style.display = "block";
												vent.style.display = "block";
												door5.style.display = "block";
												door6.style.display = "block";
												block3.style.display = "block";
												gobackreactor.style.display = "block";
												texthelp.style.display = "none";
												texthelp.innerHTML = "It doesn't open."
                                  				texthelp.style.display = "block";
                                  				texthelp.className = "texthelpanim";
                                  				var audio13 = new Audio('img/wrong_planet.mp3');
                                  				audio13.play();
                                  				setTimeout(function () {
                                    			  texthelp.style.display = "none";
                                    			}, 5990);
											}if (a==10) {
												holdcrow = 0;
												vent.style.display = "block";
												door5.style.display = "block";
												door6.style.display = "block";
												block3.style.display = "block";
												$("#vent").prop("onclick", null).off("click");
												setTimeout(function () {
                                                var audio3 = new Audio('img/door.mp3');
                                        			     audio3.play();  
                                        			     door6.className = "opendoor";
                                        			     
                                        			}, 990);
                                        			setTimeout(function () {
                                        						audio17.pause();
                												audio17.currentTime = 0;
                                        			          door6.style.display = "none";  
                                        			          vent.style.display = "none";
																door5.style.display = "none";
																block3.style.display = "none"; 
                                        			          img.src="img/room5.png";
                                        			          gotoflashbad.style.display = "block";
                                        			          face2.style.display = "block";
                                        			          document.documentElement.style.setProperty('--rad', '10vmax');  
                                        			}, 6990);

											}else{
												if (a==11) {
													if (leftdory==0) {
															gotoleft2.style.display = "block";
														}
														gotoright2.style.display = "block";
														vent.style.display = "block";
														door5.style.display = "block";
														door6.style.display = "block";
														block3.style.display = "block";
														gobackreactor.style.display = "block";
													if (holdcrow==0) {
														texthelp.style.display = "none";
														texthelp.innerHTML = "Maybe I can pry this open?"
                                  						texthelp.style.display = "block";
                                  						texthelp.className = "texthelpanim";
                                  						setTimeout(function () {
                                    					  texthelp.style.display = "none";
                                    					}, 5990);
													}else{
														holdcrow = 0;
														var audioventopen = new Audio('img/vent_open.mp3');
                                  						audioventopen.play();
                                  						vent.src="img/open_vent.png";
														gotoventing.style.display = "block";
														$("#vent").prop("onclick", null).off("click");
													}
												}else{
													if (a==12) {
														audio17.pause();
                										audio17.currentTime = 0;
														holdcrow = 0;
														img.src="img/vent_inside.png";
														gotofurthervent.style.display = "block";
														audiovent.play();
													}else{
														if (a==13) {
															img.src="img/vent_inside2.png";
															holdcrow = 0;
															gotofriend.style.display = "block";
															audiovent.play();
														}else{
															if (a==14) {
																audio9.play();
																document.documentElement.style.setProperty('--rad', '20vmax');
																holdcrow = 0;
																img.src="img/room5.png";
																friend.style.display = "block";
																$("#textbox").prop("onclick", null).off("click");
																textbox.setAttribute( "onClick", "friendtext();");
																setTimeout(function () {
   																     textbox.style.display = "block";
   																     friendtext();
   																}, 3990);
															}else{
																if (a==15) {
																	audio9.play();
																	holdcrow = 0;
																	img.src="img/Electrical_Room.png";
																	lever.style.display = "block";
																	block6.style.display = "block";
																	door7.style.display = "block";
																	electricvent.style.display = "block";
																}else{
																	if (a==16) {
																		audio9.play();
																		document.documentElement.style.setProperty('--rad', '80vmax');
																		holdcrow = 0;
																		onoff=3;
																		img.src="img/room6.png";
																		//keyhole.style.display = "block";
																		textDEMO.style.display = "block";
																		setTimeout(function () {
											    		            		textDEMO2.style.display = "block";
											    		            	}, 5990);
											    		            	setTimeout(function () {
											    		            		textDEMO3.style.display = "block";
											    		            	}, 10990);
																	}else{
																		if (a==17) {
																			if (holdcrow==0) {
																				texthelp.style.display = "none";
																				texthelp.innerHTML = "Maybe I can pry this open?"
                                  												texthelp.style.display = "block";
                                  												texthelp.className = "texthelpanim";
                                  												lever.style.display = "block";
                                  												if (leverpulled==0) {
                                  													door7.style.display = "block";
                                  												}else{
                                  													gotocock.style.display = "block";
                                  												}
																				
																				block6.style.display = "block";
																				electricvent.style.display = "block";
                                  												setTimeout(function () {
                                    											  texthelp.style.display = "none";
                                    											}, 5990);
																			}else{
																				holdcrow = 0;
																				var audioventopen = new Audio('img/vent_open.mp3');
                                  												audioventopen.play();
                                  												electricvent.src="img/open_vent.png";
                                  												lever.style.display = "block";
                                  												if (leverpulled==0) {
                                  													door7.style.display = "block";
                                  												}else{
                                  													gotocock.style.display = "block";
                                  												}
																				
																				block6.style.display = "block";
																				electricvent.style.display = "block";
																				gotoventdie.style.display = "block";
																				$("#electricvent").prop("onclick", null).off("click");
																			}
																		}else{
																			if (a==18) {
																				audio17.pause();
                																audio17.currentTime = 0;
																				holdcrow = 0;
																				leverpulled=2;
																				img.src="img/vent_inside.png";
																				gotofurthervent2.style.display = "block";
																				audiovent.play();
																			}else{
																				if (a==19) {
																					img.src="img/vent_inside2.png";
																					holdcrow = 0;
																					gotojumpscare.style.display = "block";
																					audiovent.play();
																				}else{
																					if (a==20) {
																						img.src="img/placeholder.png";
																						bod.style.margin = "0";
															                        	bod.style.height = "100%";
															                        	bod.style.overflow = "hidden";
																						stars.style.display = "block";
																						textDEMO.style.display = "block";
																						setTimeout(function () {
															    		            		textDEMO2.style.display = "block";
															    		           
															    		            	}, 5990);
															    		            	setTimeout(function () {
															    		            		textDEMO3.style.display = "block";
															    		            	}, 10990);
															    		            	document.documentElement.style.setProperty('--rad', '100vmax');
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

function keypad2(c){

     var keypad2 = document.getElementById("keypad2");
    var keypad2_q = document.getElementById("keypad2_q");
    var keypad2_p = document.getElementById("keypad2_p");
    var keypad2_g = document.getElementById("keypad2_g");
    var keypad2_n = document.getElementById("keypad2_n");
    var keypad2_o = document.getElementById("keypad2_o");
    var keypad2_t = document.getElementById("keypad2_t");
    var keypad2_r = document.getElementById("keypad2_r");
    var keypad2_c = document.getElementById("keypad2_c");
    var keypad2_u = document.getElementById("keypad2_u");
    var keypad2_m = document.getElementById("keypad2_m");
    var keypad2_10 = document.getElementById("keypad2_10");
    var keypad2_11 = document.getElementById("keypad2_11");
    var keypad = document.getElementById("keypad");
     var door4 = document.getElementById("door4");
     var gotoroom4 = document.getElementById("gotoroom4");
     $("#keypad2").prop("onclick", null).off("click");
     $("#keypad").prop("onclick", null).off("click");
     keypad2.style.zIndex = 101;
     keypad.style.display = "block";
     keypad.style.top = "56%";
     keypad.style.left = "30%";
     keypad.style.width = "2%";
     keypad2.style.top = "50%";
     keypad2.style.left = "50%";
     keypad2.style.width = "25%";
     keypad2_q.style.display = "block";
     keypad2_p.style.display = "block";
     keypad2_g.style.display = "block";
     keypad2_n.style.display = "block";
     keypad2_o.style.display = "block";
     keypad2_t.style.display = "block";
     keypad2_r.style.display = "block";
     keypad2_c.style.display = "block";
     keypad2_u.style.display = "block";
     keypad2_m.style.display = "block";
     keypad2_10.style.display = "block";
     keypad2_11.style.display = "block";
     if (c != 13) {
          var audio = new Audio('img/keypad_press.mp3');
          audio.play();
     }
     
     if(c==0){
          document.getElementById("keypad2_q").src = "img/keypad2_dark/keypad2_q.png";
     setTimeout(function () {
         document.getElementById("keypad2_q").src = "img/keypad2/keypad2_q.png";
    }, 200);   
     }else{
          if (c==1) {
               document.getElementById("keypad2_p").src = "img/keypad2_dark/keypad2_p.png";
      setTimeout(function () {
          document.getElementById("keypad2_p").src = "img/keypad2/keypad2_p.png";
     }, 200);  
          } else{
               if(c==2){
                    document.getElementById("keypad2_g").src = "img/keypad2_dark/keypad2_g.png";
     setTimeout(function () {
         document.getElementById("keypad2_g").src = "img/keypad2/keypad2_g.png";
     }, 200);  
               }else{
                    if (c==3) {
                       document.getElementById("keypad2_n").src = "img/keypad2_dark/keypad2_n.png";
     setTimeout(function () {
         document.getElementById("keypad2_n").src = "img/keypad2/keypad2_n.png";
    }, 200);    
}else{
     if (c==4) {
          document.getElementById("keypad2_o").src = "img/keypad2_dark/keypad2_o.png";
     setTimeout(function () {
         document.getElementById("keypad2_o").src = "img/keypad2/keypad2_o.png";
    }, 200);  
     }else{
          if (c==5) {
               document.getElementById("keypad2_t").src = "img/keypad2_dark/keypad2_t.png";
     setTimeout(function () {
         document.getElementById("keypad2_t").src = "img/keypad2/keypad2_t.png";
    }, 200);  
          }else{
               if (c==6) {
                    document.getElementById("keypad2_r").src = "img/keypad2_dark/keypad2_r.png";
     setTimeout(function () {
         document.getElementById("keypad2_r").src = "img/keypad2/keypad2_r.png";
    }, 200);  
               }else{
                    if (c==7) {
                         document.getElementById("keypad2_c").src = "img/keypad2_dark/keypad2_c.png";
     setTimeout(function () {
         document.getElementById("keypad2_c").src = "img/keypad2/keypad2_c.png";
    }, 200);  
                    }else{
                         if (c==8) {
                              document.getElementById("keypad2_u").src = "img/keypad2_dark/keypad2_u.png";
     setTimeout(function () {
         document.getElementById("keypad2_u").src = "img/keypad2/keypad2_u.png";
    }, 200);  
                         }if (c==9) {
                              document.getElementById("keypad2_m").src = "img/keypad2_dark/keypad2_m.png";
     setTimeout(function () {
         document.getElementById("keypad2_m").src = "img/keypad2/keypad2_m.png";
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
     if (correcto==0) {
          if (c==2) {
               correcto = 1;
              
          }else{
               correcto=0;
          }
     }else{
          if(correcto==1){
               if (c==4) {
                    correcto=2;
                    
               }else{
                    correcto=0;
               }
          }else{
               if (correcto==2) {
                    if (c==1) {
                         correcto=3;
                        
                    }
                    else{
                         correcto=0;
                    }
               }else{
                    if (correcto==3) {
                         if (c==0) {
                             correcto=4;
                         
                    }else{
                              correcto=0;
                         }
               }else{
               	if(correcto==4){
               		if(c==3){
               			correcto=5;
               		}else{
               			correcto=0;
               		}
               	}else{
               		if(correcto==5){
                      if(c==5){
                      	correcto=6;
                      }else{
                      	correcto=0;
                      }
               		}else{
               			if(correcto==6){
               				if(c==7){
               					correcto=7;
               				}else{
               					correcto=0;
               				}
               			}else{
               				if(correcto==7){
               					if(c==1){
               						correcto=8;
               					}else{
               						correcto=0;
               					}
               				}else{
               					if(correcto==8){
               						if(c==8){
               							$("#keypad2").prop("onclick", null).off("click");
               							$("#keypad").prop("onclick", null).off("click");
                                        var audio2 = new Audio('img/keypad_correct.mp3');
                                        audio2.play();
                                        c=11;
                                        setTimeout(function () {
                                                var audio3 = new Audio('img/door.mp3');
                                             audio3.play();  
                                             door4.className = "opendoor";
                                             door2open = 1;
                                        }, 990);
                                        setTimeout(function () {
                                                  door4.style.display = "none";   
                                                  if (door2open==1) {
                                                  	gotoroom4.style.display = "block";
                                                  }
                                                  
                                        }, 6990);
               						}else{
               							correcto=0;
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
     if (c == 10 || c == 11 || c == 13){
          keypad2.style.zIndex = 98;
          keypad2.style.top = "56%";
          keypad2.style.left = "30%";
          keypad2.style.width = "2%";
          if (door2open!=1) {
          	keypad2.setAttribute( "onClick", "keypad2(12);");
          }
          keypad2_q.style.display = "none";
          keypad2_p.style.display = "none";
          keypad2_g.style.display = "none";
          keypad2_n.style.display = "none";
          keypad2_o.style.display = "none";
          keypad2_t.style.display = "none";
          keypad2_r.style.display = "none";
          keypad2_c.style.display = "none";
          keypad2_u.style.display = "none";
          keypad2_m.style.display = "none";
          keypad2_10.style.display = "none";
          keypad2_11.style.display = "none"; 
          keypad.style.display = "none";
          if (door2open==1) {
     		$("#keypad2").prop("onclick", null).off("click");
     		$("#keypad").prop("onclick", null).off("click");
     		}
     }
    

}

function scroller(q){
	var sun = document.getElementById("sun");
    var mercury = document.getElementById("mercury");
    var venus = document.getElementById("venus");
    var earth = document.getElementById("earth");
    var mars = document.getElementById("mars");
    var jupiter = document.getElementById("jupiter");
    var saturn = document.getElementById("saturn");
    var uranus = document.getElementById("uranus");
    var neptune = document.getElementById("neptune");
    var scrollright = document.getElementById("scrollright");
    var scrollleft = document.getElementById("scrollleft");
    var audio11 = new Audio('img/console_button.mp3');
    audio11.play();
	if (q==1) {
		scrollright.style.display = "none";
		scrollleft.style.display = "block";
		mercury.style.display = "block";
		mars.style.display = "block";
		if (plan<8) {
			uranus.style.display = "none";
		}
		neptune.style.display = "block";
		if (plan<1) {
			sun.style.display = "none";
		}
		if (plan<3) {
			venus.style.display = "none";
		}
		if (plan<4) {
			earth.style.display = "none";
		}
		jupiter.style.display = "block";
		if (plan<7) {
			saturn.style.display = "none";
		}
	}else{
		scrollright.style.display = "block";
		scrollleft.style.display = "none";
		sun.style.display = "block";
		venus.style.display = "block";
		earth.style.display = "block";
		if (plan<6) {
			jupiter.style.display = "none";
		}
		saturn.style.display = "block";
		if (plan<2) {
			mercury.style.display = "none";
		}
		if (plan<5) {
			mars.style.display = "none";
		}
		uranus.style.display = "block";
		if (plan<9) {
			neptune.style.display = "none";
		}
	}
}

function planet(p){
	var sun = document.getElementById("sun");
    var mercury = document.getElementById("mercury");
    var venus = document.getElementById("venus");
    var earth = document.getElementById("earth");
    var mars = document.getElementById("mars");
    var jupiter = document.getElementById("jupiter");
    var saturn = document.getElementById("saturn");
    var uranus = document.getElementById("uranus");
    var neptune = document.getElementById("neptune");
    var letterg = document.getElementById("letterg");
    var lettero = document.getElementById("lettero");
    var letterp = document.getElementById("letterp");
    var letterq = document.getElementById("letterq");
    var lettern = document.getElementById("lettern");
    var lettert = document.getElementById("lettert");
    var letterc = document.getElementById("letterc");
    var letterp2 = document.getElementById("letterp2");
    var letteru = document.getElementById("letteru");
    var overlay = document.getElementById("overlay");
    var img = document.getElementById("image");
    var backpack = document.getElementById("backpack");
    var audio11 = new Audio('img/beep_Planets.mp3');
    audio11.play();
    var audio12 = new Audio('img/alarm.mp3');
	audio12.loop = true;
	var audio13 = new Audio('img/wrong_planet.mp3');

	if (fail<3) {
		if (p==1) {
	sun.src = "img/planet_dark/sun.png";
 setTimeout(function () {
 	if (plan == 0) {
			plan = 1;
			sun.style.top = "32%";
      		sun.style.left = "26%";
      		sun.style.cursor = "none";
      		$("#sun").prop("onclick", null).off("click");
      		letteru.style.display = "block";
		}else{
			fail++;
			audio13.play();
		}
     sun.src = "img/planet/sun.png";
}, 200);  
}else{
	if (p==2) {
	mercury.src = "img/planet_dark/mercury.png";
 setTimeout(function () {
 	if (plan == 1) {
			plan = 2;
			mercury.style.top = "32%";
      		mercury.style.left = "32%";
      		mercury.style.cursor = "none";
      		$("#mercury").prop("onclick", null).off("click");
      		letterg.style.display = "block";
		}else{
			fail++;
			audio13.play();
		}
     mercury.src = "img/planet/mercury.png";
}, 200);  
}else{
	if (p==3) {
	venus.src = "img/planet_dark/venus.png";
 setTimeout(function () {
 	if (plan == 2) {
			plan = 3;
			venus.style.top = "32%";
      		venus.style.left = "35%";
      		venus.style.cursor = "none";
      		$("#venus").prop("onclick", null).off("click");
      		letterp.style.display = "block";
		}else{
			fail++;
			audio13.play();
		}
     venus.src = "img/planet/venus.png";
}, 200);  
}else{
	if (p==4) {
	earth.src = "img/planet_dark/earth.png";
 setTimeout(function () {
 	if (plan == 3) {
			plan = 4;
			earth.style.top = "32%";
      		earth.style.left = "39%";
      		earth.style.cursor = "none";
      		$("#earth").prop("onclick", null).off("click");
      		letterq.style.display = "block";
		}else{
			fail++;
			audio13.play();
		}
     earth.src = "img/planet/earth.png";
}, 200);  
}else{
	if (p==5) {
	mars.src = "img/planet_dark/mars.png";
 setTimeout(function () {
 	if (plan == 4) {
			plan = 5;
			mars.style.top = "32%";
      		mars.style.left = "43%";
      		mars.style.cursor = "none";
      		$("#mars").prop("onclick", null).off("click");
      		lettero.style.display = "block";
		}else{
			fail++;
			audio13.play();
		}
     mars.src = "img/planet/mars.png";
}, 200);  
}else{
	if (p==6) {
	jupiter.src = "img/planet_dark/jupiter.png";
 setTimeout(function () {
 	if (plan == 5) {
			plan = 6;
			jupiter.style.top = "32%";
      		jupiter.style.left = "49%";
      		jupiter.style.cursor = "none";
      		$("#jupiter").prop("onclick", null).off("click");
      		letterp2.style.display = "block";
		}else{
			fail++;
			audio13.play();
		}
     jupiter.src = "img/planet/jupiter.png";
}, 200);  
}else{
	if (p==7) {
	saturn.src = "img/planet_dark/saturn.png";
 setTimeout(function () {
 	if (plan == 6) {
			plan = 7;
			saturn.style.top = "32%";
      		saturn.style.left = "56%";
      		saturn.style.cursor = "none";
      		$("#saturn").prop("onclick", null).off("click");
      		letterc.style.display = "block";
		}else{
			fail++;
			audio13.play();
		}
     saturn.src = "img/planet/saturn.png";
}, 200);  
}else{
	if (p==8) {
	uranus.src = "img/planet_dark/uranus.png";
 setTimeout(function () {
 	if (plan == 7) {
			plan = 8;
			uranus.style.top = "32%";
      		uranus.style.left = "62%";
      		uranus.style.cursor = "none";
      		$("#uranus").prop("onclick", null).off("click");
      		lettert.style.display = "block";
		}else{
			fail++;
			audio13.play();
		}
     uranus.src = "img/planet/uranus.png";
}, 200);  
}else{
	if (p==9) {
	neptune.src = "img/planet_dark/neptune.png";
 setTimeout(function () {
 	if (plan == 8) {
			plan = 9;
			neptune.style.top = "32%";
      		neptune.style.left = "68%";
      		neptune.style.cursor = "none";
      		$("#neptune").prop("onclick", null).off("click");
      		lettern.style.display = "block";
		}else{
			fail++;
			audio13.play();
		}
     neptune.src = "img/planet/neptune.png";
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
	}

	if (fail>=3) {
		audio12.play();
		overlay.style.display = "block";
		setTimeout(function () {
			overlay.style.display = "none";
			changeroom(99);
			document.documentElement.style.setProperty('--rad', '100vmax');
			backpack.style.display = "none";
			img.src="img/spook_2.gif";
		}, 4990);
		setTimeout(function () {
			audio12.pause();
            audio12.currentTime = 0;
			var audiojumpy = new Audio('img/jumpy.mp3');
			audiojumpy.play();
		}, 7490);
		setTimeout(function () {
			img.src="img/placeholder.png";
			location.reload();
		}, 7890);
		
	}

}

function audiooo(){
	audio10.pause();
                audio10.currentTime = 0;
}
var bog = 0;
function reactor(x){
	var console_big = document.getElementById("console_big");
	var buttonreact = document.getElementById("buttonreact");
	var switchoff = document.getElementById("switchoff");
	var switchoff2 = document.getElementById("switchoff2");
	var switchoff3 = document.getElementById("switchoff3");
	var switchoff4 = document.getElementById("switchoff4");
	var gotodie = document.getElementById("gotodie");
    var gotovent = document.getElementById("gotovent");
	var audio15 = new Audio('img/switch_flick.mp3');
	var audio16 = new Audio('img/reactor_button.mp3');
	var audio9 = new Audio('img/Step.mp3');
	holdcrow = 0;
	console_big.style.display = "block";
	buttonreact.style.display = "block";
	switchoff.style.display = "block";
	switchoff2.style.display = "block";
	switchoff3.style.display = "block";
	switchoff4.style.display = "block";
	gotodie.style.display = "none";
	gotovent.style.display = "none";
	holdcrow = 0;
	if (x==1) {
		audio9.play();
	}
	if (x==2) {
		buttonreact.src = "img/Reactor/button_pressed.png";
		audio16.play();
		setTimeout(function () {
         buttonreact.src = "img/Reactor/button.png";
         if (bog==4) {
         	audio17.play();
         	$("#consolee").prop("onclick", null).off("click");
         }
    }, 200);   
	}else{
		if (x==3) {
			switchoff.src = "img/Reactor/on.png";
			$("#switchoff").prop("onclick", null).off("click");
			audio15.play();
			bog++;
		}else{
			if (x==4) {
				switchoff2.src = "img/Reactor/on.png";
				$("#switchoff2").prop("onclick", null).off("click");
				audio15.play();
				bog++;
			}else{
				if (x==5) {
					switchoff3.src = "img/Reactor/on.png";
					$("#switchoff3").prop("onclick", null).off("click");
					audio15.play();
					bog++;
				}else{
					if (x==6) {
						switchoff4.src = "img/Reactor/on.png";
						$("#switchoff4").prop("onclick", null).off("click");
						audio15.play();
						bog++;
					}else{
						if (x==7) {
							console_big.style.display = "none";
							buttonreact.style.display = "none";
							switchoff.style.display = "none";
							switchoff2.style.display = "none";
							switchoff3.style.display = "none";
							switchoff4.style.display = "none";
							gotodie.style.display = "block";
							gotovent.style.display = "block";
						}
					}
				}
			}
		}
	}
}

function hold(){
	var crowbar = document.getElementById("crowbar");
	$("#crowbar").prop("onclick", null).off("click");
	inv(2);
	crowbar.style.display = "block";
	holdcrow = 1;
	$(document).mousemove(function(e){
		if (holdcrow==1) {
    $("#crowbar").css({left:e.pageX, top:e.pageY});
    crowbar.style.pointerEvents = "none";
		}else{
			if (openowo == 0) {
				crowbar.style.display = "none";
			}else{
				crowbar.style.display = "block";
			}
			crowbar.style.pointerEvents = "none";
			crowbar.style.top = "7%";
			crowbar.style.left = "87.7%"
			crowbar.style.width = "4%";
			crowbar.style.pointerEvents = "auto";
			crowbar.setAttribute( "onClick", "hold();");
		}
	});
}

function lever(){
	var lever = document.getElementById("lever");
	var gotocock = document.getElementById("gotocock");
	var door7 = document.getElementById("door7");
	$("#lever").prop("onclick", null).off("click");
	lever.src="img/lever_down.png";
	lever.style.top = "50%";
	lever.style.left = "78%"
	var audiolever = new Audio('img/lever.mp3');
	audiolever.play(); 
	setTimeout(function () {
	var audio3 = new Audio('img/door.mp3');
                                  audio3.play();  
                                  door7.className = "opendoor";
                                  
                             }, 990);
                                        			setTimeout(function () {
                                        				door7.style.display = "none";  
                                        				if (leverpulled==0) {
                                        			      leverpulled=1;
                                        			       gotocock.style.display = "block";
                                        				}
                                        			       
                                        			         
                                        			}, 6990);
}

function friendtext(){
	jakey++;
	var textfriend = document.getElementById("textfriend");
    var textfriend2 = document.getElementById("textfriend2");
    var textfriend3 = document.getElementById("textfriend3");
    var textbox = document.getElementById("textbox");
    var readpls = document.getElementById("readpls");
    var gotoeletrical = document.getElementById("gotoeletrical");
    var friend = document.getElementById("friend");
    textbox.style.display = "block";
    readpls.style.display = "none";
    if (jakey==1) {
    	textfriend.style.display = "block";
    	setTimeout(function () {
        if (jakey==1) {
          readpls.style.display = "block";
          jakey=2;
        }
		}, 990);
    }else{
    	if (jakey==2) {
    		textfriend.className = "noanime2";
    		readpls.style.display = "block";
    	}else{
    		if (jakey==3) {
    			textfriend.style.display = "none";
    			textfriend2.style.display = "block";
    			setTimeout(function () {
        		if (jakey==3) {
        		  readpls.style.display = "block";
        		  jakey=4;
        		}
				}, 2990);
    		}else{
    			if(jakey==4){
    				textfriend2.className = "noanime2";
    				readpls.style.display = "block";
    			}else{
    				if (jakey==5) {
    					textfriend2.style.display = "none";
    					textfriend3.style.display = "block";
						setTimeout(function () {
						if (jakey==5) {
						  readpls.style.display = "block";
						  jakey=6;
						}
						}, 1990);
    				}else{
    					if (jakey==6) {
    						textfriend3.className = "noanime2";
    						readpls.style.display = "block";
    					}else{
    						textbox.style.display = "none";
    						readpls.style.display = "none";
    						textfriend3.className = "none";
    						friend.className = "friendanim";
    						setTimeout(function () {
    							friend.style.display = "none";
    							gotoeletrical.style.display = "block";
							}, 2990);
    					}
    				}
    			}
    		}
    	}
    }
}

function spok(){
	var img = document.getElementById("image");
	var audioscare = new Audio('img/scream.mp3');
	img.src="img/spook_1.gif";
	document.documentElement.style.setProperty('--rad', '100vmax');
	changeroom(99);
	setTimeout(function () {
    	audioscare.play();
	}, 1990);
	setTimeout(function () {
    	location.reload();
	}, 3590);
}