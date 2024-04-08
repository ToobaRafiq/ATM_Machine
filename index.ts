import inquirer from "inquirer";
import chalk from "chalk";

//Initialize user balance and pin code
let myBalance = 5000;
let myPin =1234;

//Print welcome massage
console.log(chalk.blue("\n \tWelcome to tooba rafiq - ATM Machine\n"));

let pinAnswer = await inquirer.prompt([
    {
       name :"pin",
       type : "number",
       message :chalk.green("Enter your pin:")
    }
])
if (pinAnswer.pin === myPin){
    console.log(chalk.yellow("\nPin is Correct , Login Successfully!\n"));
   // console.log(`Current Amount Balance is ${myBalance}`)

let opreationAns = await inquirer.prompt([
    {
       name: "opreation",
       type: "list",
       massage: "Select an opreation",
       choices: ["withDraw Amount" ,"Check Balance"]
    }
    ])

   if(opreationAns.opreation === "withDraw Amount"){
    let withDrawAns = await inquirer.prompt([
        {
           name:"withdrawMethod",
           type:"list",
           message:"Select the withDrwal method:",
           choices:["fast Cash","Enter Amount"]
        }
    ])
    if(withDrawAns.withdrawMethod === "fast Cash"){
        let fastcashAns = await inquirer.prompt([
            {
                name:"fastCash",
                type:"list",
                message:"Select Amount:",
                choices:[500, 2000, 4000, 5000, 8000, 10000]
            }
        ])
        if(fastcashAns.fastCash > myBalance){
            console.log(chalk.red("Insufficient Balance"));
        }
        else{
            myBalance -= fastcashAns.fastCash
            console.log(chalk.green(`${fastcashAns.fastCash} withDraw successfully!`));
            console.log(chalk.blueBright(`Your Remaning Balance is: ${myBalance}`));
        }
    }
    else if(withDrawAns.withdrawMethod === "Enter Amount"){ 
        let amountAns = await inquirer.prompt([
        {
            name:"amount",
            type:"number",
            message:"Enter your withDraw:"
        }
    ])
    if(amountAns.amount > myBalance){
        console.log(chalk.red("Insufficient Balance"));
    }
    else{
         myBalance -= amountAns.amount;
         console.log(chalk.green(`${amountAns.amount} WithDraw Successfuly`));
         console.log(chalk.blueBright(`Your Remaning Balance is: ${myBalance}`));
    }
}
   }
    else if(opreationAns.opreation === "Check Balance"){
         console.log(chalk.blue(`Your Account Balance is:${myBalance}`));
    }
}
else {
    console.log(chalk.red("Pin is Incorrect ,Try Again!"));
}