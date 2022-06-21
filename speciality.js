class Speciality {
    constructor(){
  
    }
  
    getState(){
      var specialityRef  = database.ref('speciality');
      specialityRef.on("value",function(data){
         speciality = data.val();
      })
  
    }
  
    update(speciality){
      database.ref('/').update({
        speciality: speciality
      });
  }
  
  play(){
      sp.update(l2q8.value())
  
    }
  
  
  }
  