var ball;
var database;
var position,ballposition;

function setup(){

    database=firebase.database();

    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    ballposition=database.ref("ball/position");
    ballposition.on("value", readPosition,showError);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        WritePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        WritePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        WritePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        WritePosition(0,+1);
    }
    drawSprites();
}

function WritePosition(x,y){
    database.ref("ball/position").set({
        x:position.x+x,
        y:position.y+y
    })
}

function readPosition(data){
position= data.val()
ball.x=position.x
ball.y=position.y
}
function showError(){
console.log("OMG there is an Error... Please solve it");
    
}