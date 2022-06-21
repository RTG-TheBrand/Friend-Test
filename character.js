class Character {
    constructor(){
  
    }
  
    getState(){
      var characterRef  = database.ref('character');
      characterRef.on("value",function(data){
         character = data.val();
      })
  
    }
  
    update(character){
      database.ref('/').update({
        character: character
      });
  }
  
  play(){
      ch.update(l1q2.value())
  
    }
  
  
  }
  