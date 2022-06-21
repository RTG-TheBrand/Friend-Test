class Study {
    constructor(){
  
    }
  
    getState(){
      var studyRef  = database.ref('study');
      studyRef.on("value",function(data){
         study = data.val();
      })
  
    }
  
    update(study){
      database.ref('/').update({
        study: study
      });
  }
  
  play(){
      st.update(l1q5.value())
  
    }
  
  
  }
  