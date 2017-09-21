var xPositions;
var yPositions;

for (var j=0;j<200;j++)
{
    xPositions[j] = random(10, 390);
    yPositions[j] = random(10, 390);
}

draw = function() {
    background(204, 247, 255);

    for (var i = 0; i < 200; i++) 
    {
        noStroke();
        
        fill(random(1,255), random(1,255), random(1,255));
        ellipse(xPositions[i], yPositions[i], 7, 13);
        
        //yPositions[i]+=5;
        
        /*if (yPositions[i]>400)
        {
            yPositions[i] = 0;
        }*/
        
    }

//xPositions.push(mouseX);
  
};
