//switch case//
//Coaching  class 10 schedule:
import inquirer from "inquirer";
import chalk from "chalk";
let weekschedule = "";
console.log("\t======================================================================");
console.log(chalk.magenta.bold("\t<<<<<<<<<<<<<<<<<< welcome to Humaiza's Coaching  >>>>>>>>>>>>>"));
console.log("\t======================================================================");
const Answer = await inquirer.prompt([
    {
        type: "list",
        name: "weekschedule",
        message: "Which day class you want to Know?",
        choices: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ],
    },
]);
console.log(chalk.bgCyan.bold(`[Dear, Student]`));
switch (Answer.weekschedule) {
    case "Monday":
        console.log(chalk.bold.bgRedBright(`Today is your "Biology" class`));
        console.log(chalk.bold.bgBlue(`This class conduct by Miss Iqra`));
        break;
    case "Tuesday":
        console.log(chalk.bold.bgRedBright(`Today is your "Math" class`));
        console.log(chalk.bold.bgBlue(`This class conduct by Miss Humaiza `));
        break;
    case "Wednesday":
        console.log(chalk.bold.bgRedBright(`Today is your "Computer" class`));
        console.log(chalk.bold.bgBlue(`This class conduct by Sir Ashfaq`));
        break;
    case "Thursday":
        console.log(chalk.bold.bgRedBright(`Today is your "Sindhi" class`));
        console.log(chalk.bold.bgBlue(`This class conduct by Miss Hafsa`));
        break;
    case "Friday":
        console.log(chalk.bold.bgRedBright(`Today is your "Chemistry" class`));
        console.log(chalk.bold.bgBlue(`This class conduct by Sir Mohib`));
        break;
    case "Saturday":
        console.log(chalk.bold.bgRedBright(`Today you have two classes "Physics" & "PakStudies" class`));
        console.log(chalk.bold.bgBlue(`This class conduct by Miss Humaiza `));
        break;
    case "Sunday":
        console.log(chalk.bold.bgRedBright(`Today is Sunday,your day off,but i have a class of IT at the Governor's house `));
        console.log(chalk.bold.bgBlue(`Today my class will be conducted by Miss Hina Naseer`));
        break;
    default:
        console.log(`This coaching classes schedule is only for class X(10)`);
}
