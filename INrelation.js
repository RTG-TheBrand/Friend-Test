class INRelation {
    constructor(){
  
    }
  
    getState(){
      var INrelationRef  = database.ref('INrelation');
      INrelationRef.on("value",function(data){
         INrelation = data.val();
      })
  
    }
  
    update(INrelation){
      database.ref('/').update({
        INrelation: INrelation
      });
  }
  
  play(){
      IN.update(l2q5.value())
  
    }
  
  
  }
  