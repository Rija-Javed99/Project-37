var canvas, backgroundImage;

//create given variables
var database;



function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
//declare new quiz to start game
  
  
  
}


function draw(){
  background("pink");
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
