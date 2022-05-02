let turn="X";
let gameover=false;
let scoreX=0;
let scoreO=0;
const change=()=>{
    return turn ==='X'?'0':'X'
}
function check(){
  let result=document.getElementsByClassName("result");
  let z=document.getElementById("z");
  let o=document.getElementById("o");
  let box=document.getElementsByClassName("boxes");
  if(z.innerText==o.innerText && o.innerText==t.innerText && z.innerText !=""){
    let res=document.getElementsByClassName("res");
     document.getElementById("final").innerHTML="The winner is"+z.innerText;  
     if(z.innerText=="X"){
       scoreX+=1;
       document.getElementById("scorex").innerText="Score for X :"+scoreX;
     }else if(z.innerText=="0"){
       scoreO+=1;
       document.getElementById("scorey").innerText="Score for O:"+scoreO;
     }
    
  }
  if(h.innerText==f.innerText && h.innerText==i.innerText && h.innerText !=""){
    let res=document.getElementsByClassName("res");
     document.getElementById("final").innerHTML="The winner is"+h.innerText;
     if(h.innerText=="X"){
      scoreX+=1;
      document.getElementById("scorex").innerText="Score for X :"+scoreX;
    }else if(h.innerText=="0"){
      scoreO+=1;
      document.getElementById("scorey").innerText="Score for O:"+scoreO;
    }
   
    }
    if(s.innerText==e.innerText && s.innerText==g.innerText && s.innerText !=""){
      let res=document.getElementsByClassName("res");
       document.getElementById("final").innerHTML="The winner is"+s.innerText;
       if(s.innerText=="X"){
        scoreX+=1;
        document.getElementById("scorex").innerText="Score for X :"+scoreX;
      }else if(s.innerText=="0"){
        scoreO+=1;
        document.getElementById("scorey").innerText="Score for O:"+scoreO;
      }
     
    }
    if(z.innerText==h.innerText && h.innerText==s.innerText && z.innerText !=""){
      let res=document.getElementsByClassName("res");
       document.getElementById("final").innerHTML="The winner is"+z.innerText;
       if(z.innerText=="X"){
        scoreX+=1;
        document.getElementById("scorex").innerText="Score for X :"+scoreX;
      }else if(z.innerText=="0"){
        scoreO+=1;
        document.getElementById("scorey").innerText="Score for O:"+scoreO;
      }
     
    }
    if(o.innerText==f.innerText && o.innerText==e.innerText && o.innerText !=""){
      let res=document.getElementsByClassName("res");
       document.getElementById("final").innerHTML="The winner is"+o.innerText;
       if(o.innerText=="X"){
        scoreX+=1;
        document.getElementById("scorex").innerText="Score for X :"+scoreX;
      }else if(o.innerText=="0"){
        scoreO+=1;
        document.getElementById("scorey").innerText="Score for O:"+scoreO;
      }
     
    }
    if(t.innerText==i.innerText && t.innerText==i.innerText && t.innerText !=""){
      let res=document.getElementsByClassName("res");
       document.getElementById("final").innerHTML="The winner is"+t.innerText;
       if(t.innerText=="X"){
        scoreX+=1;
        document.getElementById("scorex").innerText="Score for X :"+scoreX;
      }else if(t.innerText=="0"){
        scoreO+=1;
        document.getElementById("scorey").innerText="Score for O:"+scoreO;
      }
     
    }
    if(t.innerText==f.innerText && t.innerText==s.innerText && t.innerText !=""){
      let res=document.getElementsByClassName("res");
       document.getElementById("final").innerHTML="The winner is"+t.innerText;
       if(t.innerText=="X"){
        scoreX+=1;
        document.getElementById("scorex").innerText="Score for X :"+scoreX;
      }else if(t.innerText=="0"){
        scoreO+=1;
        document.getElementById("scorey").innerText="Score for O:"+scoreO;
      }
     
    }
    if(z.innerText==f.innerText && z.innerText==g.innerText && z.innerText !=""){
      let res=document.getElementsByClassName("res");
       document.getElementById("final").innerHTML="The winner is"+z.innerText;
       if(z.innerText=="X"){
        scoreX+=1;
        document.getElementById("scorex").innerText="Score for X :"+scoreX;
      }else if(z.innerText=="0"){
        scoreO+=1;
        document.getElementById("scorey").innerText="Score for O:"+scoreO;
      }
     
    }
  }
  

let box=document.getElementsByClassName("boxes");
Array.from(box).forEach(element=>{
    let sm=element.querySelector(".sm");
    element.addEventListener("click",()=>{
      if(sm.innerText===''){
          sm.innerText=turn;
          turn=change();
          document.getElementsByClassName("tun")[0].innerText="Turn for" +turn;
          check();
    }  
       }
   )
 })
// var btn=documnet.getElementsById("btn");
// btn.addEventListener("click",function(){
//     //sm.innerText="none";
//     alert("clicked");
// })
function res(){
   let box=document.getElementsByClassName("boxes");
    Array.from(box).forEach(element=>{
    let sm=element.querySelector(".sm");
          sm.innerText='';
          turn="X";
          document.getElementsByClassName("tun")[0].innerText="Turn for" +turn;
          let res=document.getElementsByClassName("res");
     document.getElementById("final").innerHTML="";
          //alert("good");

 })
}
 function mess(){
      alert("reset sucess");
}
function zero(){
  let z=document.getElementById("z");
  let box=document.getElementsByClassName("boxes");
    //Array.from(box).forEach(element=>{
    let sm=document.getElementsByClassName("sm");
     sm.innerText=z.innerText; 
}
function one(){
  let o=document.getElementById("o");
  let box=document.getElementsByClassName("boxes");
    //Array.from(box).forEach(element=>{
    let sm=document.getElementsByClassName("sm");
     sm.innerText=o.innerText;
}
function two(){
  let t=document.getElementById("t");
  let box=document.getElementsByClassName("boxes");
    //Array.from(box).forEach(element=>{
    let sm=document.getElementsByClassName("sm");
     sm.innerText=t.innerText;   
}
function three(){
  let h=document.getElementById("h");
  let box=document.getElementsByClassName("boxes");
    //Array.from(box).forEach(element=>{
    let sm=document.getElementsByClassName("sm");
     sm.innerText=h.innerText;   
}
function four(){
  let f=document.getElementById("f");
  let box=document.getElementsByClassName("boxes");
    //Array.from(box).forEach(element=>{
    let sm=document.getElementsByClassName("sm");
     sm.innerText=f.innerText;   
}
function five(){
  let i=document.getElementById("i");
  let box=document.getElementsByClassName("boxes");
    //Array.from(box).forEach(element=>{
    let sm=document.getElementsByClassName("sm");
     sm.innerText=i.innerText;   
}
function six(){
  let s=document.getElementById("s");
  let box=document.getElementsByClassName("boxes");
    //Array.from(box).forEach(element=>{
    let sm=document.getElementsByClassName("sm");
     sm.innerText=s.innerText;   
}
function seven(){
  let e=document.getElementById("e");
  let box=document.getElementsByClassName("boxes");
    //Array.from(box).forEach(element=>{
    let sm=document.getElementsByClassName("sm");
     sm.innerText=e.innerText;   
}
function eight(){
  let g=document.getElementById("g");
  let box=document.getElementsByClassName("boxes");
    //Array.from(box).forEach(element=>{
    let sm=document.getElementsByClassName("sm");
     sm.innerText=g.innerText;   
}

function rese(){
  let box=document.getElementsByClassName("boxes");
   Array.from(box).forEach(element=>{
   let sm=element.querySelector(".sm");
         sm.innerText='';
         turn="X";
         document.getElementsByClassName("tun")[0].innerText="Turn for" +turn;
         let res=document.getElementsByClassName("res");
         document.getElementById("final").innerHTML="";
         //alert("good");
         scoreO=0;
         scoreX=0;
         document.getElementById("scorey").innerText="Score for O:"+scoreO;
         document.getElementById("scorex").innerText="Score for X:"+scoreX;


})
}