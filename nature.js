class Nature {
    constructor(){
  
    }
  
    getState(){
      var natureRef  = database.ref('nature');
      natureRef.on("value",function(data){
         nature = data.val();
      })
  
    }
  
    update(nature){
      database.ref('/').update({
        nature: nature
      });
  }
  
  play(){
      nat.update(l1q1.value())
  
    }
  
  
  }
  