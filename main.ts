#!/usr/bin/env node

import inquirer from  "inquirer"
let myBalance = 10000; // doller
let myPin = 780;
let PinAnswer = await inquirer.prompt([

    {
        name : "pin",
        message :"Enter Pin",
        type  : "number",
    },
]) ;
 if(PinAnswer.pin == myPin)
 {
    console.log("correct pin,login succesfully");
    // console.log("current account balance is :" +myBalance);

    let operationsAns= await inquirer.prompt([
 {
    name : "operations",
    message : "Please select option",
    type : "list",
    choices : ["withdraw" ,"Fast Cash" ,"chkbalance"],
 },

 
]);
  console.log(operationsAns);
 
 if (operationsAns.operations == "withdraw")
{
let amountAns = await inquirer.prompt([
    {
        name : "amount",
        type : "number",
        message : "Enter your amount to withdraw",
   
    }
]);

if (amountAns.amount > myBalance) {
    console.log("Insufficient Balance");
} 
else 
// console.log(amountAns.amount);
// = , -= , +=
{
myBalance -= amountAns.amount;
console.log(`withdraw succesfully:  ${amountAns.amount}`) ;
 console.log(`your remainning balance :${myBalance}`);
} 
 } else if (operationsAns.operations === "chkBalance")
 {
    console.log(`your balance is ${myBalance}`);

} else if(operationsAns.operations === "Fast Cash") {
    let Fast = await inquirer.prompt([
      {  name :"fastcash",
        message:"select the amount which you withdraw",
        type :"list",
        choices :[1000,2000,5000,10000]
    }
    ]);
    if (Fast.fastcash > myBalance){
        console.log(`Insufficient funds. your current balance is ${myBalance}`);
    } else {
    myBalance -=Fast.fastcash;
    console.log(`you have sucessfully withdraw ${Fast.fastcash} \n your remaining balace is ${myBalance}`)
}


}
 
 else {
     console.log("pin in incorect, login again");
 }
}