import inquirer from "inquirer";
let myBalance = 10000; // doller
let myPin = 780;
let PinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Pin",
        type: "number",
    },
]);
if (PinAnswer.pin == myPin) {
    console.log("correct pin,login succesfully");
    // console.log("current account balance is :" +myBalance);
    let operationsAns = await inquirer.prompt([
        {
            name: "operations",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "chkbalance"],
        },
    ]);
    console.log(operationsAns);
    if (operationsAns.operations == "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount to withdraw",
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
            console.log("withdraw succesfully", +amountAns.amount);
            console.log("your remainning balance :" + myBalance);
        }
    }
    else if (operationsAns.operations === "chkBalance") {
        console.log("your balance is :" + myBalance);
    }
}
else {
    console.log("pin in incorect, login again");
}
