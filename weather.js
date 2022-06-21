class Weather {
    constructor(){
  
    }
  
    getState(){
      var weatherRef  = database.ref('weather');
      weatherRef.on("value",function(data){
         weather = data.val();
      })
  
    }
  
    update(weather){
      database.ref('/').update({
        weather: weather
      });
  }
  
  play(){
      we.update(l2q9.value())
  
    }
  
  
  }
  