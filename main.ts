#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let mybalance = 8000;
let mypin = 16723;

console.log(chalk.blue("\n \t welcome to faria usman - ATM machine \n"));
let pinanswer = await inquirer.prompt([
    {
        name : "pin",
        type : "number",
        message :chalk.yellow ("enter your pin code:"),
    }
])
if(pinanswer.pin === mypin){
    console.log("\n pin is correct, login successfully! \n")
    // console.log(`current Account balance is ${mybalance}`)

    let operationAns = await inquirer.prompt([
        {
            name : "operation",
            type : "list",
            message : "select an operation:",
            choices : ["withdraw Amount", "check balance"] 
        }
    ])
    if(operationAns.operation === "withdraw Amount"){
        let withdrawAns = await inquirer.prompt([
            {
                name : "withdrawmethod",
                type : "list",
                message : "select a withdrawl method",
                choices : ["fast cash", "enter amount"]
            }
        ])
        if (withdrawAns.withdrawmethod === "fast cash"){
            let fastcashAns = await inquirer.prompt([
                {
                    name : "fastcash",
                    type : "list",
                    message : "select amount:",
                    choices : [1000 , 2000 , 4000 , 6000 , 7000 , 8000],
                }
            ])
            if(fastcashAns.fastcash > mybalance){
                console.log("insufficient balance");
            }
            else{
                mybalance -= fastcashAns.fastcash
                console.log(`${fastcashAns.fastcash} withdraw successfully`)
                console.log(`your remaining balance is ${mybalance}`);
            }
        }

        else if(withdrawAns.withdrawmethod === "enter amount"){
            let amountAns = await inquirer.prompt([
                {
                    name : "amount",
                    tyoe : "number",
                    message : "Enter the amount to withdraw:"
                }
            ])
            if(amountAns.amount > mybalance){
                console.log("insufficient Balance");
            }
            else{
                mybalance -= amountAns.amount;
                console.log(`${amountAns.amount} withdraw successfully!`);
                console.log(`your remaining blance is: ${mybalance}`);
            }

        }
        
    }
    else if (operationAns.operation === "check balance"){
        console.log(`your account balance is: ${mybalance}`);
    }
}
else{
    console.log(chalk.red("pin is incorrect, try again"));
}