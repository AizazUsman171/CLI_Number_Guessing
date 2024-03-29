#! usr/bin/env node
import inquirer from "inquirer";


let flag = true;
do{
 const randomNumber = Math.floor(Math.random()*10);   //generate values between 0 to 1, so we have multiplied to 10 now range is 0 to 10
const answer = await inquirer.prompt([{message:"Guess the number!", type: "number", name: "Number"}]);
// console.log(answer);
if (answer.Number ===randomNumber){
    console.log("You Guessed the correct Number");
}
else{
    console.log("Your Guessed is Incorrect");
}

const answer1 = await inquirer.prompt([{message: "Do you wan to play again 1 for YES 0 for NO", type : "number",name: "flag1"}]);
if(answer1.flag1==0){
    flag=false;
}
else{
    flag=true;
}
}while(flag ==true);









