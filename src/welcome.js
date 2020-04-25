const {
    chalk,
    readlineSync,
    clear,
    log,
    tab
} = require("./util.js");
const leftgap = tab + tab + "\t";

const createCalcSymbols = function () {
    const symbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/', '*', '-', 'x^3', '.', '=', '+', 'x^2'];
    for (let index = 0; index < 10; index++) {
        symbols[index] = chalk.yellowBright(symbols[index]);
    }
    for (let index = 10; index < symbols.length; index++) {
        symbols[index] = chalk.cyanBright(symbols[index]);
    }
    return symbols;
}

const createCalcBoard = function (symbols) {
    const topBlockBorder = leftgap + "-".repeat(21) + "\n";
    const topBlockAnswer = leftgap + "|\t\t" + chalk.greenBright("0000") + "|\n";
    const calcBoardBorder = leftgap + "+---".repeat(5) + "+\n";
    const calcBoardLine1 = leftgap + `| ${symbols[07]} | ${symbols[08]} | ${symbols[09]} | ${symbols[10]} |   |\n`;
    const calcBoardLine2 = leftgap + `| ${symbols[04]} | ${symbols[05]} | ${symbols[06]} | ${symbols[11]} |   |\n`;
    const calcBoardLine3 = leftgap + `| ${symbols[01]} | ${symbols[02]} | ${symbols[03]} | ${symbols[12]} |${symbols[13]}|\n`;
    const calcBoardLine4 = leftgap + `| ${symbols[00]} | ${symbols[14]} | ${symbols[15]} | ${symbols[16]} |${symbols[17]}|\n`;
    let board = topBlockBorder + topBlockAnswer + topBlockBorder;
    board = board + calcBoardBorder + calcBoardLine1 + calcBoardBorder + calcBoardLine2;
    board = board + calcBoardBorder + calcBoardLine3 + calcBoardBorder + calcBoardLine4;
    board = board + calcBoardBorder;
    return board;
}

const welcomeScreen = function () {
    const symbols = createCalcSymbols();
    const calcBoard = createCalcBoard(symbols);
    clear();
    const message1 = tab + tab + "welcome to the most amazing calculator!\n";
    const message2 = leftgap + "   ~~~~~~~~~~~~~~~\n"
    const message3 = tab + tab + " hope your experience would be best:)"
    const welcomeMessage = chalk.hex('#D84B0C')((message1 + message2 + message3).toUpperCase());
    log(calcBoard);
    log(welcomeMessage);
}

module.exports = {
    chalk,
    readlineSync,
    clear,
    log,
    tab,
    welcomeScreen,
}