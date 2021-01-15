var database, game, form, player, gameState = 0, playerCount;

function setup(){
    createCanvas(500,500);
    database = firebase.database(); 
   game=new Game();
   game.getState();
   game.start();
}

function draw(){
    background("white");
   
    drawSprites();
}
