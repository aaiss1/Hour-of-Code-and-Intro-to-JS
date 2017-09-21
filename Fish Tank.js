background(86, 115, 232);

var centerX;
var centerY;
var bodyLength;
var bodyHeight;
var bodyColor;

var drawFish = function(centerX, centerY, bodyLength, bodyHeight) {
    
    var bodyColor = color(centerX, centerY, random(1, 255));
    
    noStroke();
    fill(bodyColor);
    
    // body
    
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    
    // tail
    
    var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
         
    // eye
    
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
    
};
draw = function() {
    fill( random(0, 255),  random(0, 255), random(0, 255));
    textSize(random(3, 33));
     text("FISH PARTY", 139, 54);
        drawFish(mouseX, mouseY, random(25, 100), random(25, 100));
     
    drawFish(200, 200, random(25, 100), random(25, 100));
    drawFish(83, 346, random(25, 100), random(25, 100));
    drawFish(74, 40, random(25, 100), random(25, 100));
    drawFish(325, 40, random(25, 100), random(25, 100));
    drawFish(325, 329, random(25, 100), random(25, 100));
};
