var nickName = prompt("Please enter your nickname:");
var height = prompt("Please enter your height in inches:");
var weight = prompt("Please enter your weight in kilograms:");

var hFoot = height / 12;
var hFoot2 = Math.trunc(hFoot);
var hInch = height % 12;
var pound = weight * 2.2;

alert("Name: " + nickName + "\nHeight: " + hFoot2 + "'" + hInch + "''\nWeight: " + pound + " lbs");

document.getElementById("fname").innerHTML = prompt("Please enter your first name:");
document.getElementById("lname").innerHTML = prompt("Please enter your last name:");
var bYear = prompt("Please enter your birth year:");
var age = 2023 - bYear;
document.getElementById("age").innerHTML = age;

if(confirm("Do you agree to share your personal information with this site?")==1){
	document.write("Name: " + nickName);
	document.write("\n");
	document.write("Height: " + hFoot2 + "'" + hInch + "''");
	document.write("\n");
	document.write("Weight: " + pound + " lbs");
} else{
	document.write("User does not wish to share his/her information.");
}