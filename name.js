class Name {
    constructor(){
  
    }
  
    getState(){
      var nameRef  = database.ref('name');
      nameRef.on("value",function(data){
         name = data.val();
      })
  
    }
  
    update(name){
      database.ref('/').update({
        name: name
      });
  }
  
  play(){
      id.update(nam.value())
  
    }
  
  
  }
  