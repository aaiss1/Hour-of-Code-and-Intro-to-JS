//NOTE: I understand the idea of making variables relative to each other. By making one variable a "master variable", and making the rest relative to it, I'm abl to scale my entire image/animation up and down. Because I have so many shapes, I've decided to leave some of the hard numbers in th shapes commands there, because there is still a lot of work to be done and this is only a review, which I already understand thoroughly.

var bodyX = 200;
var bodyY = 220;
var bodyW = 137;
var bodyH = bodyW/2;
var bheight = 106;
var fheight = 47/106 * bheight;
var eyeSize = 7;

draw = function() {
    background(207, 254, 255);
    
    stroke(0, 0, 0);
    strokeWeight(1);
    
    //body and face
    
    fill(255, 0, 221);
    ellipse(bodyX, bodyY, bodyW, bheight);
    ellipse(bodyX, bodyY-70, bodyH, fheight);
    line(159, 109, 176, 135);
    line(238, 109, 222, 135);
    
    //antennas
    
    fill(60, 255, 0);
    ellipse(157, 107, 12, 12);
    ellipse(239, 107, 12, 12);
    ellipse(200, 219, 78, 70);
    
    //eyes, nose, and mouth
    
    stroke(60, 255, 0);
    strokeWeight(eyeSize);
    
    point(189, 139);
    point(211, 139);
    
    stroke(0, 0, 0);
    point(200, 151);
    
    fill(255, 255, 255);
    arc(200, 161, 13, 14, 1, 180);
    
    //animation attack
    
    bodyW += 2;
    fheight--;
    
};
