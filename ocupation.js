class Ocupation {
    constructor(){
  
    }
  
    getState(){
      var ocupationRef  = database.ref('ocupation');
      ocupationRef.on("value",function(data){
         ocupation = data.val();
      })
  
    }
  
    update(ocupation){
      database.ref('/').update({
        ocupation: ocupation
      });
  }
  
  play(){
      oc.update(l2q10.value())
  
    }
  
  
  }
  