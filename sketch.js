var bg = "white"
// ಠ)๑☜۝▽꒪⊙ ͡°◔☞ ✧✧
var bg1,bg2,bg3,bg4,bg5,bg6
var gameState = "name"; // name
var nnaamm = "unlock"
var questionl1 = "disable";
var questionl2 = "disable";
var lik = "false"
var just = "ok"
var ns = "pata ni"
var f = "anable"
var l1q4option1 = 'null1';
var l1q4option2 = 'null2';
var l1q4option3 = 'null3';

var id,name;
var nat,nature;
var ch,character;
var tr,trust;
var re,relation
var cl,colour;
var ho,hobby;
var oc,ocupation
var chi,childhood;
var IN,INrelation;
var sp,speciality;
var we,weather;
var ca,cartoon;
var bi,birthday
var ph,phone
var st,study


var ga,game;


var cancel,conti;
var nam,done1
var start,next

var AB;

var l1q1,l1q2,l1q3,l1q4,l1q5;
var l2q1,l2q2,l2q3,l2q4,l2q5,l2q5,l2q6,l2q7,l2q8,l2q9,l2q10;

var question = "",qn = 1;

var other;
var score = 0
var heading = "black" , headingy = 40
var f1,f2,f3,f4,f5,f6,f7,f8,f9,f10;
var loadingx = -100;
var loading2x = -400

function preload(){
  bg1 = loadImage("1.jpg") // input
  bg2 = loadImage("th (6).jfif"); // meassage
  bg3 = loadImage("bg1.jpg"); // level
  bg4 = loadImage("bg.jpg"); // questions
  
  board = loadImage("board.png");
  
  f1 = loadFont("Eastwood.ttf")
  f2 = loadFont("Eastwood Italic.ttf")
  f3 = loadFont("BANDITO_PERSONAL_USE.ttf")
  
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  
  AB = createInput("ON");
  AB.position(-1000,100);
  
  if(just === "ok"){
    
    ga = new Game();
    ga.getState();
  
  id = new Name();
  id.getState();
  
  nat = new Nature();
  nat.getState();
  
  ch = new Character();
  ch.getState();
  
  tr = new Trust();
  tr.getState();
  
  re = new Relation();
  re.getState();
  
  cl = new Colour();
  cl.getState();
  
  IN = new INRelation();
  IN.getState();
  
  bi = new Birthday();
  bi.getState();
  
  ca = new Cartoon();
  ca.getState();
  
  chi = new Childhood();
  chi.getState();
  
  ho = new Hobby();
  ho.getState();
  
  ph = new Phone();
  ph.getState();
  
  oc = new Ocupation();
  oc.getState();
  
  sp = new Speciality();
  sp.getState();
  
  st = new Study();
  st.getState();
  
  we = new Weather();
  we.getState();
  
}
  
  nam = createInput().attribute("placeholder", "Name");
  nam.size(200,30)
  nam.position(-400,400);
  
  done1 =createButton("Done");
  done1.size(70,40)
  done1.position(-400,400);
  
  cancel = createButton("cancel");
  cancel.size(50,30);
  cancel.position(-400,400);
  conti = createButton("continue");
  conti.size(80,30);
  conti.position(-400,400);
  
  start = createButton("Start");
  start.position(-400,400);
  start.size(120,80);
  
  next = createButton("Next");
  next.position(-300,300);
  next.size(100,60);
  
  l1q1 = createSelect();
  l1q1.option('None');
  l1q1.option('very Nice');
  l1q1.option('very Bad');
  l1q1.option('Obstinate');
  l1q1.size(90,25);
  l1q1.option('Good');
  //l1q1.size(100,40);
  l1q1.position(-200,200)
  
  l1q2 = createSelect();
  l1q2.option('None');
  l1q2.option('Static');
  l1q2.option('Flat');
  l1q2.option('Dynamic');
  l1q2.option('Round');
  l1q2.size(90,25);
 // l1q2.style('width', '100px');
  l1q2.position(-400,200)
  
  l1q3 = createSelect();
  l1q3.option('None');
  l1q3.option('Yes');
  l1q3.size(90,25);
  l1q3.option('No');
  l1q3.position(-400,400);
  
  l1q4 = createSelect();
  l1q4.option('None');
  l1q4.option('Strangers');
  l1q4.option('Friends');
  l1q4.option('Known person');
  l1q4.option('Other');
  l1q4.size(90,25);
  //l1q4.style('width','90px')
  l1q4.position(-400,400);
  
  other = createInput().attribute("placeholder", "Other");
  other.position(-400,50);
  other.size(150,30)
  
  l1q5 = createSelect();
  l1q5.option('None');
  l1q5.option('Intelligent');
  l1q5.option('Good');
  l1q5.option('Bad');
  l1q5.option('Stable');
  l1q5.size(90,25);
  l1q5.position(-200,200);
  //l1q5.style('width','90px')
  // _/
 l2q1= createSelect();
  l2q1.option('None');
  l2q1.option('red');
  l2q1.option('yellow');
  l2q1.option('pink');
  l2q1.option('black');
  l2q1.size(90,25);
  l2q1.position(-200,400);
  //l2q1.style('width','70px')
  
  l2q2 = createSelect();
  l2q2.option('None');
  l2q2.option('Chota Bheem');
  l2q2.option('Motu Patlu');
  l2q2.option('Shinchan');
  l2q2.option('Doraemon');
  l2q2.size(90,25);
  //l2q2.style('width','110px')
  l2q2.position(-200,200);
  
  l2q3 = createSelect();
  l2q3.option('None');
  l2q3.option('Playing');
  l2q3.option('Coding');
  l2q3.option('Use phone');
  l2q3.option('Listen songs');
  l2q3.size(90,25);
  l2q3.position(-150,200);
  //l2q3.style('width','90px')
  
  l2q4 = createSelect();
  l2q4.option('None');
  l2q4.option('Android');
  l2q4.option('I Phone');
  l2q4.size(90,25);
  l2q4.position(-200,200);
  //l2q4.style('width','80px')
  
  l2q5 = createSelect();
  l2q5.option('None');
  l2q5.option('Yes');
  l2q5.option('No');
  l2q5.size(90,25);
  l2q5.position(-200,200);
  //l2q5.style('width','50px')
  
  l2q6 = createSelect();
  l2q6.option('None');
  l2q6.option('Cotton candy')
  l2q6.option('Laser light')
  l2q6.option('Mango juice')
  l2q6.option('Remote controle car')
  l2q6.size(90,25);
  l2q6.position(-200,200);
  //l2q6.style('width','110px')
  
  l2q7 = createSelect();
  l2q7.option('None');
  l2q7.option('5/May/2006');
  l2q7.option('9/May/2007');
  l2q7.option('7/May/2007');
  l2q7.option('12/May/2006');
  l2q7.size(90,25);
  l2q7.position(-200,200);
  //l2q7.style('width','110px')
  
  l2q8 = createSelect();
  l2q8.option('None');
  l2q8.option('Identity');
  l2q8.option('Attitude');
  l2q8.option('Personality');
  l2q8.option('Nature');
  l2q8.size(90,25);
  l2q8.position(-200,200);
  //l2q8.style('width','93px')
  
  l2q9 = createSelect();
  l2q9.option('None');
  l2q9.option('Summer');
  l2q9.option('Monsoon');
  l2q9.option('Winter')
  l2q9.option('Spring');
  l2q9.size(90,25);
  l2q9.position(-200,200);
  //l2q9.style('width','90px')
  
  l2q10 = createSelect();
  l2q10.option('None');
  l2q10.option('Doctor');
  l2q10.option('Engineer');
  l2q10.option('Scientist');
  l2q10.option('Farmer');
  l2q10.size(90,25);
  l2q10.position(-200,200);
  //l2q10.style('width','80px')
  
}

function draw(){
  background(bg)
  
  if(frameCount >= 2000 && gameState === "name"){
    loadingx = -400;
    headingy = -400
  } else if(frameCount <= 2000){
    loadingx = windowWidth/2
  }
  
    push();
    fill("black");
    textFont(f1)
    textSize(25);
    textAlign(CENTER);
    text("loading.....",loadingx,250);
    pop();
  
  push()
  fill(heading);
  textSize(20)
  stroke(10);
  textAlign(CENTER)
  textStyle(BOLDITALIC);
  text(" ✧☞ ਗੁਰਮਨ ਸੰਘੇੜਾ 's Dare ☜✧",windowWidth/2,headingy);
  pop();
  
  if(nnaamm === "lock"){
    nam.position(-400,400);
    done1.position(-400,400);
  }
  
  if(game === "on"){
  
  if(gameState === "name"){
    frameCount = 2000
    nam.position(windowWidth/2-100,windowHeight/2-130);
    done1.position(windowWidth/2+30,windowHeight/2-30);
    bg = bg1
  }
    
  }
  
  if(nam.value() === ""){
    done1.mousePressed(()=>{ 
  gameState = "name";
      //console.log("please enter something")
  })
  } else {
    done1.mousePressed(()=>{ 
      headingy = 40
  gameState = "message";
      id.play();
      
  })
  }
  
  if(gameState === "message"){
    nnaamm = "lock"
    bg = bg2
    push();
    textFont(f2)
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    textSize(14)
    
    text(" You have to choose from the given options \n and the result will be given to you on the behalf \n of the questions of level 1st",windowWidth/2-5,130);
    
    text(" You have to choose from the given options but \n there will be no contribution of the questions \n of level 2nd in your result",windowWidth/2,260);
    pop();
    push();
    textFont(f2)
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    textSize(14)
    fill("yellow")
    text(" If you choose any option in the upcoming questions \n nobody can see your chosen options",windowWidth/2,470);
    pop();
    
    push();
    textFont(f2)
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    textSize(14)
    fill("cyan")
    text(" To choose option , You have to click on none there \n : Result will be given to you at the END of dare ",windowWidth/2-10,350);
    pop();
    
    push();
    textSize(20);
    textFont(f2)
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    fill("white");
    text(" In level 1st",windowWidth/2,90);
    
    text(" In level 2nd",windowWidth/2,220); 
    
    text(" Don't worry",windowWidth/2,430);
    pop();
    
    cancel.position(windowWidth/3-60,510);
    conti.position(windowWidth/2+60,510);
    
  }
  
  cancel.mousePressed(()=>{ 
  if(game === "on"){
    gameState = "name";
      cancel.position(-400,400);
    conti.position(-400,400);
    nam.value("");
  }
  })
  
  conti.mousePressed(()=>{ 
  gameState = "l2";
      cancel.position(-400,400);
    conti.position(-400,400);
  })
  
  
  if(gameState === "l2"){
    bg = bg3
    heading = "white"
    push();
    fill("white")
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    textSize(15);
    text(" Result will be given on the behalf \n of the upcoming questions \n \n It is the main DARE",windowWidth/2,windowHeight/2-70);
    pop();
    push();
    fill("white")
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    textSize(25);
    text("level 1st",windowWidth/2,windowHeight/2-150);
    start.position(windowWidth/2-50,windowHeight/2+70)
    start.mousePressed(()=>{
      gameState = "lq1";
      start.position(-400,400);
      heading = "black"
      bg = bg4
    })
  }
  
  
  if(questionl1 === "enable"){
    textSize(20)
    fill("white")
    text(qn+question,windowWidth/2,windowHeight/2-140)
  }
  
  if(gameState === 'lq1'){
    questionl1 = "enable";
    qn = "Q-1: "
    question = " Which is ਗੁਰਮਨ ਸੰਘੇੜਾ 's \n favourite colour ⭕"
    l2q1.position(140,250);
    next.position(windowWidth/2-40,windowHeight/2+80)
  }
  
  if(l2q1.value() === 'red' || l2q1.value() === 'yellow' || l2q1.value() === 'pink' || l2q1.value() === 'black'){
    next.mousePressed(()=>{
      gameState = "l2q2";
      cl.play();
    })
}
  
  if(gameState === "l2q2"){
    qn = "Q-2: "
    question = " Which is ਗੁਰਮਨ ਸੰਘੇੜਾ 's \n favourite cartoon 📺"
    l2q1.position(-400,200);
    l2q2.position(140,250);
  }
  
  if(l2q2.value() === 'Chota Bheem' || l2q2.value() === 'Motu Patlu' || l2q2.value() === 'Shinchan' || l2q2.value() === 'Doraemon'){
    next.mousePressed(()=>{
      gameState = "l2q3";
      ca.play();
    })
  }
  
  if(gameState === "l2q3"){
    qn = "Q-3: "
    question = " What is ਗੁਰਮਨ ਸੰਘੇੜਾ 's \n hobby"
    l2q2.position(-200,200);
    l2q3.position(140,250);
  }
  
  if(l2q3.value() === "Playing" || l2q3.value() === "Coding" || l2q3.value() === "Use phone" || l2q3.value() === "Listen songs"){
    next.mousePressed(()=>{
      gameState = "l2q4";
      ho.play();
    })
  }
  
  if(gameState === "l2q4"){
    qn = "Q-4"
    question = " Which is ਗੁਰਮਨ ਸੰਘੇੜਾ 's \n favourite phone 📱"
    l2q3.position(-400,400);
    l2q4.position(140,250);
  }
  
  if(l2q4.value() === 'Android' || l2q4.value() === 'I Phone'){
    next.mousePressed(()=>{
      gameState = "l2q5";
      ph.play();
    })
  }
  
  if(gameState === "l2q5"){
    qn = "Q-5"
    question = " Is ਗੁਰਮਨ ਸੰਘੇੜਾ in relation 💞"
    l2q4.position(-200,200);
    l2q5.position(140,250);
  }
  
  if(l2q5.value() == 'Yes' || l2q5.value() == 'No'){
    next.mousePressed(()=>{
      gameState = "l2q6";
      IN.play();
    })
  }
  
  if(gameState === "l2q6"){
    bg = bg4
    qn = "Q-6"
    question = " Which is ਗੁਰਮਨ ਸੰਘੇੜਾ 's favourite \n thing in childhood 🍼"
    l2q5.position(-200,200);
    l2q6.position(140,250);
  }
  
  if(l2q6.value() ==='Cotton candy' || l2q6.value() ==='Laser light' || l2q6.value() ==='Mango juice' || l2q6.value() ==='Remote controle car'){
    next.mousePressed(()=>{
      gameState = "l2q7";
      chi.play();
    })
}
  
  if(gameState === "l2q7"){
    qn = "Q-7"
    question = " What is ਗੁਰਮਨ ਸੰਘੇੜਾ 's \n birth date 🎂"
    l2q6.position(-200,200);
    l2q7.position(140,250);
  
  }
  
  if(l2q7.value() === '5/May/2006' || l2q7.value() === '9/May/2007' || l2q7.value() === '7/May/2007' || l2q7.value() === '12/May/2006'){
next.mousePressed(()=>{
  gameState = "l2q8";
  bi.play();
})
  }
  
  if(gameState === "l2q8"){
    qn = "Q-8";
    question = " What make ਗੁਰਮਨ ਸੰਘੇੜਾ \n special 🎀"
    l2q7.position(-200,200);
    l2q8.position(140,250);
  }
  
  if(l2q8.value() === 'Attitude' || l2q8.value() === 'Personality' || l2q8.value() === 'Nature' || l2q8.value() === 'Identity'){
    next.mousePressed(()=>{
      gameState = "l2q9";
      sp.play();
    })
  }
  
  if(gameState === "l2q9"){
   qn ="Q-9";
    question = "Which is ਗੁਰਮਨ ਸੰਘੇੜਾ 's \n favourite weather 🌧️"
    l2q8.position(-200,202);
    l2q9.position(140,250);
    
  }
  
  if(l2q9.value() === 'Summer' || l2q9.value() === 'Monsoon' || l2q9.value() === 'Winter' || l2q9.value() === 'Spring'){
    next.mousePressed(()=>{
      gameState = "l2q10";
      we.play();
    })
  }
  
  if(gameState === "l2q10"){
    qn = "Q-10";
    question = " What ਗੁਰਮਨ ਸੰਘੇੜਾ \n want to become 👨‍⚕️"
    l2q9.position(-200,200);
    l2q10.position(140,250);
  }
  
  if(l2q10.value() === 'Doctor' || l2q10.value() === 'Engineer' || l2q10.value() === 'Farmer' || l2q10.value() === 'Scientist'){
    next.mousePressed(()=>{
      gameState = "l1";
      oc.play();
    })
  }
  
  if(gameState === "l1"){
    bg = bg3
    heading = "white"
    push();
    fill("white")
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    textSize(15);
    text(" There is NO contribution of \n the upcoming questions in your Result \n \n It is only for  identification",windowWidth/2,windowHeight/2-70);
    pop();
    push();
    fill("white")
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    textSize(25);
    text("level 2nd",windowWidth/2,windowHeight/2-150);
    start.position(windowWidth/2-50,windowHeight/2+70)
    l2q10.position(-200,200);
    next.position(-200,200);
    questionl1 = "disable"
    
     start.mousePressed(()=>{
    gameState = "q1";
    start.position(-400,400);
    bg = bg3
       heading = "black"
    questionl1 = "enable";
  })
    
  }
  
  if(questionl1 === "enable"){
    fill("white")
    text(qn+question,windowWidth/2,windowHeight/2-140)
  }
  
  if(gameState === "q1"){
    questionl1 = "enable";
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    textSize(20);
    bg = bg4
    qn = "Q-1: "
    question = " what type of nature \n ਗੁਰਮਨ ਸੰਘੇੜਾ has 🤝"
    l1q1.position(140,250);
    next.position(windowWidth/2-40,windowHeight/2+80)
  }
  
  if(l1q1.value() === 'very Nice' || l1q1.value() === 'very Bad' || l1q1.value() === 'Obstinate' || l1q1.value() === 'Good'){
    next.mousePressed(()=>{
      gameState = "q2"
      nat.play();
    })
  }
  
  if(gameState === "q2"){
    questionl1 = "enable";
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    textSize(20);
    qn = "Q-2: "
    question = " what type of character \n ਗੁਰਮਨ ਸੰਘੇੜਾ has 👌"
    l1q1.position(-200,200);
    l1q2.position(140,250);
  }
  
  if(l1q2.value() === 'Flat' || l1q2.value() === 'Round' || l1q2.value() === 'Static' || l1q2.value() === 'Dynamic'){
    next.mousePressed(()=>{
      gameState = "q3";
      ch.play();
    })
  }
  
  if(gameState == "q3"){
    questionl1 = "enable";
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    textSize(20);
    qn = "Q-3: "
    question = " Do you trust on ਗੁਰਮਨ ਸੰਘੇੜਾ 😇"
    l1q2.position(-200,200);
    l1q3.position(140,250);
  }
  
  if(l1q3.value() === 'Yes' || l1q3.value() === 'No'){
    next.mousePressed(()=>{
      gameState = "q4";
      tr.play();
    })
  }
  
  if(gameState === "q4"){
    questionl1 = "enable";
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    textSize(20);
    qn = "Q-4: "
    question = " What is your relation with \n ਗੁਰਮਨ ਸੰਘੇੜਾ 🧑🏻‍🤝‍🧑🏻"
    l1q3.position(-200,200);
    l1q4.position(140,250);
    //other.position(140,230);
  }
  
   if(l1q4.value() === 'Strangers' || l1q4.value() === 'Known person' || l1q4.value() === 'Friends'){
     other.position(-400,400);
    next.mousePressed(()=>{
      gameState = "q5";
      re.play();
    })
  }
  
  if(l1q4.value() === 'Other'){
    other.position(140,290);
  }
  
  
  if(other.value() != "" && gameState === "q4"){
    next.mousePressed(()=>{
      gameState = "q5";
      re.pause();
    })
  }
  
  if(gameState === "q5"){
    qn = "Q-5";
    question = " How is ਗੁਰਮਨ ਸੰਘੇੜਾ in study 📖";
    l1q4.position(-300,300);
    other.position(-400,200);
    l1q5.position(140,250);
  }
  
  if(l1q5.value() === 'Intelligent' || l1q5.value() === 'Good' || l1q5.value() === 'Bad' || l1q5.value() === 'Stable'){
    
    next.mousePressed(()=>{
      st.play();
      questionl1 = "disable";
      next.position(-200,200);
      l1q5.position(-200,200)
      frameCount = 200;
    })
  }
  
  if(frameCount <= 280 && gameState === "q5"){
    gameState = "loading";
  } else if(frameCount >= 280 && gameState === "loading"){
    gameState = "resultboard";
  }
  
  if(gameState === "loading"){
    l1q5.position(-400,400);
    loading2x = windowWidth/2
    other.position(-400,400);
    push();
    fill("black");
    textFont(f1)
    textSize(25);
    textAlign(CENTER);
    text("loading.....",loading2x,250);
    pop();
  }
  
  if(gameState === "resultboard"){
    bg = bg4
    other.position(-400,40);
    push();
    imageMode(CENTER);
    image(board,windowWidth/2,windowHeight/2,320,450);
    fill("black");
    textSize(15)
    textAlign(CENTER);
    text(" Your Score: 9",170,260);
    text(" You know about ਗੁਰਮਨ ਸੰਘੇੜ : 90%",185,300);
    text(" Your stamp : Marvelous",170,340);
    text(" You can be the Best Friend of \n ਗੁਰਮਨ ਸੰਘੇੜ",180,380)
    pop();
    push();
    textSize(20);
    fill("white");
    textAlign(CENTER);
    textFont(f3)
    text("RESULT",windowWidth/2,220)
    pop();
    
   AB.value("off");
    ga.play();
    
  }
  
  if(game === "off"){
    if(gameState === "name"){
    bg = bg2
      push()
  fill(heading);
  textSize(20)
  stroke(10);
  textAlign(CENTER)
  textStyle(BOLDITALIC);
  text(" ✧☞ ਗੁਰਮਨ ਸੰਘੇੜਾ 's Dare ☜✧",windowWidth/2,40);
      pop();
    frameCount = 2000;
    push();
    fill("black");
    textSize(20);
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    text(" You can attempt this questions \n only ONCE \n\n\n\n You attempted it ONCE allready",windowWidth/2,windowHeight/2-100);
    }
  }
  
}

function mousePressed() {
  console.log("gameState: " + gameState);
  console.log("width: " + windowWidth);
  console.log("height: "+windowHeight);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
