class Phone {
    constructor(){
  
    }
  
    getState(){
      var phoneRef  = database.ref('phone');
      phoneRef.on("value",function(data){
         phone = data.val();
      })
  
    }
  
    update(phone){
      database.ref('/').update({
        phone: phone
      });
  }
  
  play(){
      ph.update(l2q4.value())
  
    }
  
  
  }
  