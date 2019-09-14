const constants = require('./constants');
const path = require('path');

if (constants.settings.enableCrashReporter) {
    process.crashReporter.start({
        ...constants.settings.crashReporterOptions,
        crashesDirectory: path.join(constants.settings.tmpDir, 'childprocesscrashes')
    });
}

if (constants.settings.crashChildProcess) {
    setTimeout(function () {
        console.log("Crashing child process");

        process.crash();
    }, 2000);
}