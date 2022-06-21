class Childhood {
    constructor(){
  
    }
  
    getState(){
      var childhoodRef  = database.ref('childhood');
      childhoodRef.on("value",function(data){
         childhood = data.val();
      })
  
    }
  
    update(childhood){
      database.ref('/').update({
        childhood: childhood
      });
  }
  
  play(){
      chi.update(l2q6.value())
  
    }
  
  
  }
  