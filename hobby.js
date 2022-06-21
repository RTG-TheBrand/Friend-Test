class Hobby {
    constructor(){
  
    }
  
    getState(){
      var hobbyRef  = database.ref('hobby');
      hobbyRef.on("value",function(data){
         hobby = data.val();
      })
  
    }
  
    update(hobby){
      database.ref('/').update({
        hobby: hobby
      });
  }
  
  play(){
      ho.update(l2q3.value())
  
    }
  
  
  }
  