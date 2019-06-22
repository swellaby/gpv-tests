'use strict';

const { assert } = require('chai');
const utils = require('./utils');

suite('cli', () => {
    const errorReturnCode = 1;
    const successReturnCode = 0;

    test('Should display correct error when no package name specified', done => {
        const expectedErrorMessage = 'Usage: get-pkg-version <package-name>';
        utils.runGetPkgVersionCliWithCallback('', true, (returnCode, stdout, _stderr) => {
            assert.deepEqual(returnCode, errorReturnCode);
            assert.isTrue(stdout.includes(expectedErrorMessage));
            done();
        });
    });

    test('Should display correct error when uninstalled package name specified', done => {
        const expectedErrorMessage = utils.packageNotFoundErrorMessage;
        utils.runGetPkgVersionCliWithCallback(utils.notInstalledPackageName, true, (returnCode, _stdout, stderr) => {
            assert.deepEqual(returnCode, errorReturnCode);
            assert.isTrue(stderr.includes(expectedErrorMessage));
            done();
        });
    });

    test('Should return correct version when valid package name specified', done => {
        utils.runGetPkgVersionCliWithCallback(utils.expectedInstalledPackageName, true, (returnCode, stdout, _stderr) => {
            assert.deepEqual(returnCode, successReturnCode);
            assert.isTrue(stdout.includes(utils.expectedInstalledPackageVersion));
            done();
        });
    });
});
