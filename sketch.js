var hr, mn, sc;
var hrAngle, mnAngle, scAngle,bg; 

function setup(){
    createCanvas(700,600); 
    //To use angle in Degrees
    angleMode(DEGREES);   
    bg = loadImage("bg.jpg");
}

function draw(){
    background(bg);
        
//to show th x and the y positions
text(mouseX+ "," +mouseY,mouseX,mouseY);

    //Calculating time using predefined func from p5.js
        hr = hour();
        mn = minute();
        sc = second();

  
    
    
    
    textFont("arial");
    textSize(25);

    // representing 12 no. on top
    fill("white");
    text("12", 345,120);

    //representing 3 no. on middle right corner
    fill("white");
    text("3", 480,255);

    //representing 9 no. on middle left corner
    fill("white");
    text("9", 190,255);

    //representing 6 no. on bottom
    fill("white");
    text("6", 350,400);

    //Translation and rotation 
    translate(350,250)
    rotate(-90)



    //To create ab iterative rotation
    strokeWeight(8);
    stroke(255, 150, 235);
    noFill();
    scAngle = map(sc, 0, 60, 0, 360);
    strokeWeight(8);
    stroke(154, 234, 101);
    mnAngle = map(mn,0,60,0,360);
    strokeWeight(8);
    stroke(137, 96, 253);
    hrAngle = map(hr % 12,0,12,0,360);

    //Creating Seconds Hand
    push();
    rotate(scAngle); 
    stroke(255,0,0);
    strokeWeight(5);
    line(0,0,150,0);
    pop()

    //Creating  Minutes Hand
    push();
    rotate(mnAngle);
    stroke(0,255,0);
    strokeWeight(7.5);
    line(0,0,115,0);
    pop()

    //Creating Hour Hand
    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(10);
    line(0,0,75,0);
    pop()

   

    
    //Seconds
    stroke(255,0,0);
    arc(0,0,400,400,0,scAngle);

    //Minutes
    stroke(0,255,0);
    arc(0,0,370,370,0,mnAngle);

    //Hour
    stroke(0,0,255);
    arc(0,0,340,340,0,hrAngle);

    
    drawSprites();

  
}
