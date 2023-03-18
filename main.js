x = 0;
y = 0;
w=0;
h=0;
s="";
a="";
n="";
r=false;
var ar = window.webkitSpeechRecognition;
var rc = new ar();

function preload(){a=loadImage("apple.png");}
function start(){
  document.getElementById("status").innerHTML = "System is listening please speak";  
  rc.start();
} 
 
rc.onresult = function(event){
  console.log(event); 
  content = event.results[0][0].transcript;
  n=Number(content);
  if(Number.isInteger(n)){
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    r=true;
  }else{
    document.getElementById("status").innerHTML="No number recognized";
  }
}

function setup() {
  w=window.innerWidth;
  h=window.innerHeight-150;
  c=createCanvas(w,h);
  c.position(0,150);
}

function draw() {
  if(r)
  {
    document.getElementById("status").innerHTML = n + " Apples drawn";
    r=false;
    while(n>0){
      x=Math.floor(Math.random*w);
      y=Math.floor(Math.random*h);
      image(a,x,y,50,50);
      n--;
    }
    s=n+"Apples drawn";
    speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance;

    synth.speak(utterThis);

    s = "";
}
