var hx = document.getElementById("demo");
var hx1=document.getElementById("demo1");
hx.innerText = "Hello JavaScript!";
hx1.innerHTML = "<i>Hello my user!</i>";
hx.style.color = "cyan";
hx.style.marginBottom = "50px"; 
hx1.style.color = "blue";
hx.classList.remove("xyz");
hx.classList.add("abc");
hx.classList.add("xyz");
hx1.style.fontSize = "50px";
var f=14;
// var d=setInterval(function(){
//   hx1.style.fontSize=f+"px";
//   f+=0.1;
// // },1);
var fan = document.getElementById("fan");
var dg=0;
var fanbox;
document.getElementById("Xoay").onclick = function() {
    if (!fanbox) {
        fanbox = setInterval(function() {
            fan.style.transform = "rotate(" + dg + "deg)";
            fan.style.transition = "all 0.1s linear";
            dg += 10;
        }, 0.1);
    }
};
document.getElementById("StopSpin").onclick = function() {
    clearInterval(fanbox);
    fanbox = null;
};