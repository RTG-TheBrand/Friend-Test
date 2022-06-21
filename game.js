class Game {
    constructor(){
  
    }
  
    getState(){
      var gameRef  = database.ref('game');
      gameRef.on("value",function(data){
         game = data.val();
      })
  
    }
  
    update(game){
      database.ref('/').update({
        game: game
      });
  }
  
  play(){
      ga.update(AB.value())
  
    }
  
  
  }
  