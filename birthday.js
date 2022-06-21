class Birthday {
    constructor(){
  
    }
  
    getState(){
      var birthdayRef  = database.ref('birthday');
      birthdayRef.on("value",function(data){
         birthday = data.val();
      })
  
    }
  
    update(birthday){
      database.ref('/').update({
        birthday: birthday
      });
  }
  
  play(){
      bi.update(l2q7.value())
  
    }
  
  
  }
  