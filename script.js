// function myFunction()
// {
//     alert("Hello World!");
// }
// function sayHello(name,age){
//     document.write(name+" <h1>is</h1>"+age +" <h1>years old</h1>");
// }
// function add(a,b)
// {
//     console.log(a+b);
//     document.write(a+b);

// }
// add(10,20);
// var res=mul(12,30);
// function mul(x,y)
// {
//     return x*y;
// }
// document.write(res);
// const square=function(number){
//     return number*number;
// };
// const x=square(4);
// console.log(x);
// function myFunction(g1,g2)
// {
//     return g1/g2;
// }
// const value=myFunction(8,2);
// console.log(value);
// function add(a,b)
// {
//     console.log(a+b);
//     document.write(a+b);

// }
// add(10,20);
// var add2=(a,b)=>{
//     console.log(a+b);
// };
// add2(102,20);
// //arrow function
// var add3=(a,b)=>{
//     console.log(a+b);
// };
// add3(30,20);
// var a=100;
// var b=13;
// var c=10;
// var linebreak='<br>';
// document.write("a+b-c=");
// result=a+b-c;
// document.write(result);
// document.write(linebreak);
// document.write("a/b=");
// result=a/b;
// document.write(result);
// document.write(linebreak);
// function myFunction()
// {
//     var x=5+5;
//     var y ="5"+5;
//     var z="Hello"+5;
//     var demoP=document.getElementById("demo");
//     demoP.innerHTML=x+"<br>"+y+"<br>"+z;
// }
// x=10,y=3;
// if(x==10 && y>1)
// {

// }
// else if(x==6 || y==5)
// {

// }
// if (!(x==y))
// {
//     document.write("Hello World!");
// }
// var myCollection=[1,"meera mam",true,{name:"sanjeev",age:30},function(name){ console.log(name)},"abhishek","bachhan","Amitabh"];
// console.log(myCollection);
// function information(firstName,lastname,language)
// {
//     if(arguments.length==3)
//     {
//         console.log(firstName);
//         console.log(lastname);
//         console.log(language);
//     }
// }
// information();
// information('Jitendra','abi','vivek');
// function sayHello()
// {
//     alert("Hello World");
// }
// function over(){
//     document.getElementById("mytext").style.color="#000";
// }
// function mout()
// {
//     document.getElementById("mytext").style.color="magenta";
// }
// var retVal=confirm("Do you want to continue?");
// if(retVal==true)
// {
//     alert("User wants to continue!");
// }
// else{
//     alert("User Does Not wnt to continue!");
// }
// var retVal1=prompt("Enter your name:","your name here");
// var retVal2=prompt("Enter your class:","your classhere");
// var retVal3=prompt("Enter your rollno:","your rollno. here");

// alert("You have entered:"+retVal1);
// alert("Your class:"+retVal2);
// alert("Your rollno:"+retVal3);
// var name=prompt("Enter your name",);  
// var question="What is 10+10";
// var answer=20;
// var correct="<img src="
// function Redirect(){
// window.location="https://www.youtube.com";
// }
// document.write("You will be redirected to main page in 10 sec.");
// setTimeout('Redirect()',10000);
// function validateForm()
// {
//     var x=document.forms["myForm"]["fname"].value;
//     if(x==null || x=="")
//     {
//         alert("First name mustr be filled out");
//         return false;
//     }
// }
// function validateForm()
// {
//     var y=document.form["myForm"]["call"].value;
//     if(y.length!=10)
//     {
//         alert("Enter 10 digit mobile number");
//         return false;
//     }
//     if(y.match(/^[0-9]{10}$/))
//     {
//         alert("Only digits,please");
//         return false;
//     }
// }
// function validateForm()
// {
//     var x=document.forms["myForm"]["email"].value;
//     var atpos=
// }
// const d=new Date("2015-03-25");
// document.write(d+"<br>");
// const d1=new Date("2015-03");
// document.write(d1+"<br>");
// const d2=new Date("03/25/2015");
// document.write(d2);
// let msec=Date.parse("March 21,2012");
// // document.write(msec);
// const d4=new DataTransfer("2021-03-25");
// document.write(d4.getFullYear());
// d4.getMonth();
// console.log(d4);
// let month=months(d4.getMonth());
// const months=["January","February",]
// const d=new Date("2021-03-25");
// console.log(d.getDay());
console.log(Math.sign(-45));
console.log(Math.min(0,150,30,20,-8,-200));
console.log(Math.max(0,150,30,20,-8,-200));
console.log(Math.floor(Math.random()*101)+1);
function getRndInteger(min,max)
{
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(getRndInteger(5,7));
Number("3.14");
Number(Math.PI);
Number("John");
String(123);