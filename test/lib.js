'use strict';

const { assert } = require('chai');
const getPackageVersion = require('get-pkg-version');
const utils = require('./utils');

suite('lib', () => {
    test('Should fail with correct error when uninstalled package name specified', done => {
        const expectedErrorMessage = utils.packageNotFoundErrorMessage;
        getPackageVersion(utils.notInstalledPackageName).catch(err => {
            assert.deepEqual(err, expectedErrorMessage);
            done();
        });
    });

    test('Should return correct version when valid package name specified', done => {
        getPackageVersion(utils.expectedInstalledPackageName).then(version => {
            assert.deepEqual(version, utils.expectedInstalledPackageVersion);
            done();
        });
    });
});
