/*  program that accept two integers and display the larger. */

var num1, num2;
num1 = window.prompt("Input the First integer");
num2 = window.prompt("Input the Second integer");

if(parseInt(num1) > parseInt(num2))
  {
  console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }
else
  if(parseInt(num2) > parseInt(num1))
  {
  console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }
else
  {
   console.log("The values "+ num1+ " and "+num2+ " are equal.");
  }
