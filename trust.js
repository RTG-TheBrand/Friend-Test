class Trust {
    constructor(){
  
    }
  
    getState(){
      var trustRef  = database.ref('trust');
      trustRef.on("value",function(data){
         trust = data.val();
      })
  
    }
  
    update(trust){
      database.ref('/').update({
        trust: trust
      });
  }
  
  play(){
      tr.update(l1q3.value())
  
    }
  
  
  }
  