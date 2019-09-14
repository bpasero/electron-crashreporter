const { crashReporter } = require('electron');
const constants = require('./constants');
const child_process = require('child_process');
const path = require('path');

crashReporter.start(crashReporter.start(constants.settings.crashReporterOptions););

if (constants.settings.crashRenderer) {
    setTimeout(function () {
        console.log("Crashing renderer process");

        process.crash();
    }, 2000);
}

if (constants.settings.crashChildProcess) {
    child_process.fork(path.join(__dirname, 'child.js'));
}

