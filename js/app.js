var canvas = document.getElementById("animated_canvas");
var context = canvas.getContext("2d");
var middleCirclePos = canvas.height/2;
var circleX = 20;
var velocity = 1;
var acceleration = 0.7;
var canvasInterval = requestAnimationFrame(canvasAnimation);

//RANDOM NUMBERS THAT LL BE USED FOR VELOCITY,POSITION ON X AXIS AND Y AXIS
function makeRandom(n) {
    return Math.floor(Math.random() * Math.floor(n));
}

//CREATE CIRCLE
function createCircle() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "green";
    context.beginPath();
    context.arc(circleX,middleCirclePos, 25, 0, 2 * Math.PI);
    context.fill();
    velocity += acceleration;
    circleX += velocity;

    //IF CIRCLE REACH THE END OF CANVAS TO START AGAIN FROM RANDOM HEIGHT,POSITION
    if (circleX >= canvas.width) {

       circleX = makeRandom(canvas.width);
       velocity = makeRandom(3);
       middleCirclePos = makeRandom(canvas.height);
    }
  //IF CIRCLE REACH THE END OF CANVAS TO START AGAIN FROM RANDOM HEIGHT,POSITION

}//function createCircle() 
//CREATE CIRCLE

//CANVAS ANIMATION
function canvasAnimation() {
    circleX++;
    createCircle(circleX,middleCirclePos,25);
    canvasInterval = requestAnimationFrame(canvasAnimation);
   
}// canvasAnimation()
//CANVAS ANIMATION


createCircle();

















