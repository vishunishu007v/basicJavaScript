// JavaScript Document


//function which prompts confirmation dialogue
/*function cnfrm(){
var x=return confirm("Are you sure you want to close this window");
if (x)
alert("Thank you.");
else
alert("Good choice.");
}
	*/
	
	
	
//function to calculate times of a number	
function times(){
var num=prompt("Enter a number for which u want its times","");
var i;
var num=parseInt(num);
for(i=1;i<=num;i++)
{
var num1=i*num;
document.write(num+"*"+i+"="+num1+"<br />");
}
}
	
	
// function to write times table	
/*function writeTimesTable(timesTable){
var counter;
var writeString;
for (counter = 1; counter < 12; counter++)
{
writeString = counter + " * " + timesTable + " = ";
writeString = writeString + (timesTable * counter);
writeString = writeString + "<br />";
document.write(writeString);
}
}
function writeTimesTable1(timesTable){
var timesTable;
for (timesTable = 1; timesTable <= 12; timesTable++)
{
document.write("<p>")
writeTimesTable(timesTable)
document.write("</p>")
}
}
 */




// check user input
function jrPrgmr(){
var userAge = prompt("Please enter your age");
/*if(userAge==true){*/
if (userAge < 18)
{
var age=alert("Sorry, But you r below age limit to go further...!");
if(age==true){jrPrgmr()}
else{jrPrgmr()}
}
else if ( userAge > 18 && userAge < 40)
{
alert("Thanks for visiting my page...!");
alert("Redirecting to the original page............");
newWindow('test.html','_self');
}
else
{
alert("Sorry you are overage to go through...!");
}
/*}
else if(userAge==false){alert("You must have to enter some number...!")}*/
}
 
// name concatenation
function fullName(){
var x;
var fname=prompt("Please enter your first name","");
var lname=prompt("Please enter your last name","");
if (fname!=null && lname!=null)
{
x=fname+" "+lname;
alert("Hi "+x+" ! How R U...???")
}
}



// random car display
function carRandom(){
var i;
var cars = new Array();
cars[0] = "TATA";
cars[1] = "Volvo";
cars[2] = "BMW";
cars[3] = "Saab";
cars[4] = "Renault";
i=Math.floor(cars.length*Math.random())
alert(cars[i]);
}




// choice of ice cream using switch
function iceCreamSwitch(){
var x;
var iceCream=prompt("Please tell me your favorite icecream flavour","")
switch(iceCream)
{
case "vanilla":
{
alert("So u love "+iceCream)
break;
}
case "chocolate":
			{
			alert("So u love "+iceCream)
			break;
			}
			case "strawberry":
			{
			alert("So u love "+iceCream)
			break;
			}
			default:
			{
			alert("So u don't love IceCream")
			break;
			}
    }
  
}



// choice of ice cream using if-else
function iceCreamIfElse(){
var x;
var iceCream=prompt("Please tell me your favorite icecream flavour","")
if (iceCream=="vanilla")
{
		alert("So u love "+iceCream)
	}
	else if(iceCream=="strawberry")
	{
		alert("So u love "+iceCream)
	}
	else if(iceCream=="fruitnut")
	{
		alert("So u love "+iceCream)
	}
	else if(iceCream=="chocolate")
	{
		alert("So u love "+iceCream)
	}
	else
	{
		alert("So u don't love IceCream..!!")
	}
}



// simple number prompt and calculation
function numberMath(){
var x;
var fnum=prompt("Please enter your first number","");
var lnum=prompt("Please enter your last number","");
if (fnum!=null && lnum!=null)
	{
		x=parseInt(fnum)+parseInt(lnum);
		alert(fnum+"+"+lnum+"="+x)
	}
}



// check email field validation
function emailchk(){
var x=document.login.email.value
if (x.indexOf("@")==-1)
	{
		document.bgColor='#ffff00';
		alert("It seems you entered an invalid email address.")
		document.login.email.focus();
			}
}



// blank field submission prohibition
function validateUname(){
if(document.login.userName.value=="")
	{
		document.bgColor='#ffff00';
		alert ("Username Field left BLANK..!")
		document.login.userName.focus();

	}
	
}

function validatePwd(){
if(document.login.password.value=="")
	{
		document.bgColor='#ffff00';
		alert ("Password Field left BLANK..!")

		document.login.password.value.focus();
	}
	
}


function thanks(){

alert("Thank you for visiting my JavaScript practice page...!");
window.close()
}



 function winClose(){
window.onbeforeunload = function () {
 return "Are you sure that you want to leave this page?";
 }
}




function newWindow(x,y){
var newWin=window.open(x,y);

}



function hideDiv() { 
if (document.getElementById) { // DOM3 = IE5, NS6 
document.getElementById('hideShow').style.display = 'none'; 
} 
else { 
if (document.layers) { // Netscape 4 
document.hideShow.display = 'none'; 
} 
else { // IE 4 
document.all.hideShow.style.display = 'none'; 
} 
} 
}

function showDiv() { 
if (document.getElementById) { // DOM3 = IE5, NS6 
document.getElementById('hideShow').style.display = 'inline'; 
} 
else { 
if (document.layers) { // Netscape 4 
document.hideShow.display = 'inline'; 
} 
else { // IE 4 
document.all.hideShow.style.display = 'inline'; 
} 
} 
} 


function finale()
{
var var1=confirm("Thanks for visiting my JavaScript Practice Page...!");
	if(var1==true)
	{	
		location.reload();
	}
}

function randomNum()
{
alert(Math.floor((Math.random()*200)+1));
}

function screenWidth(){
alert("Available Width: " + screen.availWidth);
}