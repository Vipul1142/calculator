const {
    log,
    chalk,
    askName,
    getSelectedOption,
    welcomeScreen,
    executeOperation,
    showMenu
} = require("./src/methods.js");

const start = function () {
    welcomeScreen();
    const name = chalk.green(askName());
    log(`Hi ${name} ,\n`)
    showMenu();
    let option = getSelectedOption();
    while (1) {
        executeOperation(option);
        option = getSelectedOption();
        welcomeScreen();
        log(`Hi ${name} ,\n`)
        showMenu();
    }
}
start();