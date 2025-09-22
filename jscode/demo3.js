function demoOne(){
var lk = Math.floor(Math.random() * 100);
console.log(lk);
if(lk==7){
  alert("GOLD GOLD GOLD");
}else{
  alert("Phai chiu thoi");
}
}
 var flag = false;
 var fanbox=null;
function demoTwo(skibidi){
    if(flag==false){
var fan = document.getElementById("fan");
var dg = 0;
fanbox = setInterval(function() {
            fan.style.transform = "rotate(" + dg + "deg)";
            fan.style.transition = "all 0.1s linear";
            dg +=110;
        }, 10);
 skibidi.innerText = "ありがとうございますヴぁ";
       flag=true;
}else{
    clearInterval(fanbox);
    skibidi.innerText = "Xoay";
    flag=false;
}
}   