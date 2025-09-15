var x;
x=10;
console.log(x);
x= "xin chao";
console.log(x);
X=true;
console.log(X);
var n=20;
var s= "hello";
var k= n+s;
var m=s+n;
var t=n+n;
console.log(k);
console.log(m);
console.log(t);
if(n>10){
}else{
}
var xyz = t>30 ? "A" : "B";
console.log(xyz);
for(var i=0;i<5;i++){
    var ab="i= ";
    var bc=ab+i;
    console.log(bc);
  console.log("i= "+i);
}
var arr=[10,20,30,"hello",true];
var abc={1:2,"xin chao":3};
arr[0]=10;
arr[1] = 15;
arr.push(18);
arr.push(69);
console.log(arr);
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}     
function tinhtong(a,b){
    return (a+b);
}
var kq=tinhtong(10,20);
console.log(kq);
var check= confirm("Nghe bai gi oi doi oi chua");
if(check==true){
  alert("Moi vao");
}else{
  alert("Chua du trinh");
}
var age =prompt("Nhap age di ban oi");
// alert("Ten ban la: "+age);
age=parseInt(age);
alert("Age cua ban la: "+age);
var lk=Math.random();
lk=lk*10;
lk=parseInt(lk);
console.log(lk);
var num=prompt("Chon case so bao nhieu")
num=parseInt(num);
if(num==lk){
  alert("GOLD GOLD GOLD");
}else{
  alert("Phai chiu thoi");
}
console.log(lk);