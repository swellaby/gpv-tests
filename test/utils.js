'use strict';

const shell = require('shelljs');

const buildCliCommand = (args) => {
    let command = 'npm run exec:cli';
    return `${command} -- ${args}`;
};

const runGetPkgVersionCli = (args, isSilent = true) => {
    const command = buildCliCommand(args);
    return shell.exec(command, { silent: isSilent });
};

const runGetPkgVersionCliWithCallback = (args, isSilent = true, callback) => {
    const command = buildCliCommand(args);
    return shell.exec(command, { silent: isSilent }, callback);
};

const expectedInstalledPackageName = process.env.GPV_INSTALLED_PACKAGE_NAME;
const expectedInstalledPackageVersion = process.env.GPV_INSTALLED_PACKAGE_VERSION;
const notInstalledPackageName = process.env.UNINSTALLED_PACKAGE_NAME || 'a761c7aSdf6123';

module.exports = {
    runGetPkgVersionCli,
    runGetPkgVersionCliWithCallback,
    expectedInstalledPackageName,
    expectedInstalledPackageVersion,
    notInstalledPackageName,
    packageNotFoundErrorMessage: 'Failed to find package, are you sure it is installed globally?'
};
