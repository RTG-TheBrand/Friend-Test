class Colour {
    constructor(){
  
    }
  
    getState(){
      var colourRef  = database.ref('colour');
      colourRef.on("value",function(data){
         colour = data.val();
      })
  
    }
  
    update(colour){
      database.ref('/').update({
        colour: colour
      });
  }
  
  play(){
      cl.update(l2q1.value())
  
    }
  
  
  }
  