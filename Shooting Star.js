//first star

var xPos = 402;
var yPos = 300;
var xPos2 = 369;
var yPos2 = 271;
var xPos3 = 363;
var yPos3 = 277;

var x1Pos = 362;
var y1Pos = 270;

//second star

var xPos4 = 397;
var yPos4 = 177;
var xPos5 = 320;
var yPos5 = 211;
var xPos6 = 326;
var yPos6 = 222;

var x2Pos = 318;
var y2Pos = 219;

draw = function() {
    background(29, 40, 115);
    
    //first star
    
    fill(255, 242, 0);
    triangle(xPos, yPos, xPos2, yPos2, xPos3, yPos3);
    
    fill(255, 255, 255);
    ellipse(x1Pos, y1Pos, 12, 12);
    
    stroke(255, 247, 0);
    strokeWeight(2);
    line(xPos, yPos, 437, 320);
    
    //second star
    
    fill(255, 242, 0);
    triangle(xPos4, yPos4, xPos5, yPos5, xPos6, yPos6);
    
    fill(255, 255, 255);
    ellipse(x2Pos, y2Pos, 12, 12);
    
    stroke(255, 247, 0);
    strokeWeight(2);
    line(xPos4, yPos4, 754, 30);

    strokeWeight(1);
    xPos--;
    yPos--;
    xPos2--; 
    yPos2--;
    xPos3--;
    yPos3--;
    
    x1Pos--;
    y1Pos--;
    
    
    xPos4--;
    yPos4++;
    xPos5--; 
    yPos5++;
    xPos6--;
    yPos6++;
    
    x2Pos--;
    y2Pos++;
    
    //buildings
    fill(222, 203, 129);
    rect(1,335,152,120);
    
    fill(214, 114, 55);
    rect(154,301,152,120);
    
    fill(247, 170, 170);
    rect(306,363,152,120);
    
    fill(0, 0, 0);
    rect(11,347,28,34);
    rect(60,347,28,34);
    rect(110,347,28,34);
    rect(167,326,28,34);
    rect(217,326,28,34);
    rect(267,326,28,34);
    rect(340,371,28,34);
    
    fill(200, 229, 240);
    rect(15,351,20,26);
    rect(64,351,20,26);
    rect(114,351,20,26);
    rect(171,330,20,26);
    rect(221,330,20,26);
    rect(271,330,20,26);
    rect(344,375,20,26);
    
    //stars
    
    fill(255, 234, 8);
    ellipse(75, 290, 7, 7);
    ellipse(35, 234, 7, 7);
    ellipse(95, 161, 7, 7);
    ellipse(139, 111, 7, 7);
    ellipse(27, 49, 7, 7);
    ellipse(204, 252, 7, 7);
    ellipse(346, 323, 7, 7);
    ellipse(157, 189, 7, 7);
    ellipse(279, 30, 7, 7);
    ellipse(352, 92, 7, 7);
    ellipse(308, 162, 7, 7);
    ellipse(275, 223, 7, 7);
};



