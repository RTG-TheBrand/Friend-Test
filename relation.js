class Relation {
    constructor(){
  
    }
  
    getState(){
      var relationRef  = database.ref('relation');
      relationRef.on("value",function(data){
         relation = data.val();
      })
  
    }
  
    update(relation){
      database.ref('/').update({
        relation: relation
      });
  }
  
  play(){
      re.update(l1q4.value())
  
    }
  pause(){
    re.update(other.value())
  }
  
  
  }
  