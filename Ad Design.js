//Purposely putting less detail into these projects as they come, since they are just review and most of this language is very similar to others, like C++, and I understand these concepts easily.

draw = function() {
    background(255, 255, 255);
    
    fill(255, 150, 0);

    textSize(50);
    text("PIZZA PETS!", 50, 53);

    fill(31, 204, 0);

    textSize(20);
    text("Real life animals that are made of pizza!", 18, 92);
    
    fill(240, 17, 17);
    ellipse(mouseX, mouseY + 55, 83, 103);
    ellipse(mouseX, mouseY, 55, 51);
    
    fill(255, 149, 0);
    ellipse(mouseX - 8, mouseY - 10, 10, 10);
    ellipse(mouseX + 9, mouseY - 10, 10, 10);
    
    arc(mouseX + 1,mouseY+3,31,34,0,180);
    

};
