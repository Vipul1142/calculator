const {
    log,
    tab,
    chalk,
    clear,
    readlineSync,
    welcomeScreen
} = require("./welcome.js");

const askName = function () {
    const message = chalk.hex("#295BF9")("\nEnter your name here :- ");
    return readlineSync.question(message);
}

const showMenu = function () {
    const optionMessage = tab + tab + "\t  Pick a task to perform\n";
    const optionLine1 = chalk.cyanBright(tab + tab + "1. ADDITION (+)" + tab + "2. SUBTRACT (-)\n");
    const optionLine2 = chalk.cyanBright(tab + tab + "3. MULTIPLY (x)" + tab + "4. DIVIDE (/)\n");
    const optionLine3 = chalk.cyanBright(tab + tab + "5. SQUARE (x^2)" + tab + "6. CUBE (x^3)\n");
    const optionLine4 = chalk.cyanBright(tab + tab + "7. PERCENT (%)" + tab + "0. EXIT (0)\n");
    log(optionMessage);
    log(optionLine1 + optionLine2 + optionLine3 + optionLine4);
}

const getSelectedOption = function () {
    const questionMessage = chalk.hex("#2180F6")("Hit the numeric value as directed :- ");
    return readlineSync.questionInt(questionMessage);
}

const executeOperation = function (option) {
    switch (option) {
        case 1: add();
            break;
        case 2: subtract();
            break;
        case 3: multiply();
            break;
        case 4: divide();
            break;
        case 5: square();
            break;
        case 6: cube();
            break;
        case 7: percentage();
            break;
        case 0: exit();
            break;
        default: log(chalk.redBright("ERROR : Please enter valid choice"));
            break;
    }
}


const add = function () {
    log("You choosed to perform ADDITION");
    const number1 = readlineSync.questionInt(chalk.hex("#FFFF1E")("Enter first number : "));
    const number2 = readlineSync.questionInt(chalk.hex("#FFFF1E")("Enter second number : "));
    const sum = number1 + number2;
    log(`${number1} + ${number2} = ${chalk.hex("#2EC22E")(sum)}`);
}



const subtract = function () {
    log("You choosed to perform SUBTRACTION");
    const number1 = readlineSync.questionInt(chalk.hex("#FFFF1E")("Enter first number : "));
    const number2 = readlineSync.questionInt(chalk.hex("#FFFF1E")("Enter second number : "));
    const difference = number1 - number2;
    log(`${number1} - ${number2} = ${chalk.hex("#2EC22E")(difference)} `);
}


const multiply = function () {
    log("You choosed to perform MULTIPLICATION");
    const number1 = readlineSync.questionInt(chalk.hex("#FFFF1E")("enter first number : "));
    const number2 = readlineSync.questionInt(chalk.hex("#FFFF1E")("enter second number : "));
    const product = number1 * number2;
    log(`${number1} x ${number2} = ${chalk.hex("#2EC22E")(product)} `);
}


const divide = function () {
    log("You choosed to perform DIVISION");
    const number1 = readlineSync.questionInt(chalk.hex("#FFFF1E")("Enter first number: "));
    const number2 = readlineSync.questionInt(chalk.hex("#FFFF1E")("Enter second number: "));
    const dividedValue = number1 / number2;
    log(`${number1} / ${number2} = ${chalk.hex("#2EC22E")(dividedValue)}`);
}


const percentage = function () {
    log("You choosed to calculate PERCENTAGE");
    const number = readlineSync.questionInt(chalk.hex("#FFFF1E")("Enter total number : "));
    const howMuchPercent = readlineSync.questionInt(chalk.hex("#FFFF1E")("Enter percentage value : "));
    const percent = (number * howMuchPercent) / 100;
    log(`${howMuchPercent} % of ${number} = ${chalk.hex("#2EC22E")(percent)}`);
}

const square = function () {
    log("You choosed to calculate SQUARE");
    const number = readlineSync.questionInt(chalk.hex("#FFFF1E")("Enter Number : "));
    const square = number * number;
    log(`${number}^ 2 = ${chalk.hex("#2EC22E")(square)} `);
}

const cube = function () {
    log("You choosed to calculate CUBE");
    const number = readlineSync.questionInt(chalk.hex("#FFFF1E")("Enter the number: "));
    const cube = number * number * number;
    log(`${number}^ 3 = ${chalk.hex("#2EC22E")(cube)} `);
}

const exit = function () {
    const exitMessage = chalk.blueBright("Thank you for using this Calculator ~~~~~~~~~~~~ Hope your experience was best");
    log(exitMessage);
    readlineSync.keyIn("Press any character key o exit.");
    process.exit();
}

module.exports = {
    log,
    tab,
    chalk,
    clear,
    readlineSync,
    welcomeScreen,
    askName,
    getSelectedOption,
    percentage,
    executeOperation,
    showMenu
}