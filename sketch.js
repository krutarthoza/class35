var database;
var gameState = 0;
var playerCount;
var form,player,game;
var allPlayers;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game=new Game();
  game.getState()
  game.start();

}

function draw(){
  if(playerCount===4){
    game.update(1)
  }else{
    clear()
    game.play()
  }

}

