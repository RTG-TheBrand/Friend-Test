class Cartoon {
    constructor(){
  
    }
  
    getState(){
      var cartoonRef  = database.ref('cartoon');
      cartoonRef.on("value",function(data){
         cartoon = data.val();
      })
  
    }
  
    update(cartoon){
      database.ref('/').update({
        cartoon: cartoon
      });
  }
  
  play(){
      ca.update(l2q2.value())
  
    }
  
  
  }
  