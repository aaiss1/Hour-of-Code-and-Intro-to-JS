background(186, 145, 20); // wooden table
ellipse(200, 200, 350, 350); // plate
ellipse(200, 200, 300, 300); 

//steak
strokeWeight(3);

fill(153, 49, 14);
bezier(66, 172, 147, 128, 180, -32, 130, 293);

//steak bone

fill(247, 220, 151);
ellipse(114,198,43,35);

//egg
strokeWeight(2);

fill(255, 255, 255);
ellipse(220,109,92,78);

fill(249, 255, 69);
ellipse(220,109,63,49);

//green beans
strokeWeight(3);

fill(2, 130, 21);
arc(188,321,83,33,1,176);
arc(224,291,81,33,-35,146);

//spaghetti

noFill();
beginShape();
curveVertex(191,  293);
curveVertex(281,  260);
curveVertex(253,  162);
curveVertex(324,  202);
curveVertex(288, 288);
curveVertex(170, 315);
endShape();
noFill();

beginShape();
curveVertex(804,  246);
curveVertex(206,  267);
curveVertex(317,  164);
curveVertex(200,  201);
curveVertex(296, 263);
curveVertex(111, 616);
endShape();

noFill();
beginShape();
curveVertex(778,  293);
curveVertex(255,  260);
curveVertex(186,  162);
curveVertex(224,  202);
curveVertex(283, 288);
curveVertex(-139, 315);
endShape();

noFill();
beginShape();
curveVertex(-125,  293);
curveVertex(200,  260);
curveVertex(218,  162);
curveVertex(295,  202);
curveVertex(159, 288);
curveVertex(447, 315);
endShape();

//meatballs

fill(161, 70, 37);
ellipse(263,186,30,30);
ellipse(226,219,30,30);
ellipse(263,249,30,30);

//fork
strokeWeight(4);
line(315, 387, 180, 387);
line(310, 3025, 319, 372);
line(337, 387, 180, 387);
line(319, 371, 337, 371);
line(337, 398, 320, 398);
