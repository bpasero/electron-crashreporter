const { crashReporter } = require('electron');
const constants = require('./constants');

crashReporter.start(crashReporter.start(constants.settings.crashReporterOptions););

if (constants.settings.crashRenderer) {
    setTimeout(function () {
        console.log("Crashing renderer process");

        process.crash();
    }, 2000);
}

