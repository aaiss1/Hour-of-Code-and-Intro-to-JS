fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(255, 255, 255);
var answer = round(random(1, 5));

if (answer === 1) {
    fill(255, 0, 255);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    text("You will", 176, 200);
    text("eat a good meal", 153, 229); 
}

else if (answer === 2) {
    fill(108, 104, 240);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    text("You'll meet", 171, 200);
    text("a new person", 162, 229); 
}

else if (answer === 3) {
    fill(43, 196, 140);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    text("You'll find", 176, 200);
    text("true love", 176, 229); 
}

else if (answer === 4) {
    fill(224, 22, 62);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    text("You are", 179, 200);
    text("in danger", 173, 229); 
}

else {
    fill(230, 157, 0);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    text("Have a", 180, 200);
    text("good day!", 172, 229); 
}
