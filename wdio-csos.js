exports.config = {

    specs: [
        'csosTest.js'
    ],

    capabilities: [{
        browserName: 'phantomjs'
    }],
    //
    // ===================
    // Test Configurations
    // ===================

    logLevel: 'silent',

    coloredLogs: true,

    waitforTimeout: 1000,

    framework: 'mocha',

    reporter: 'spec',
    //

    onPrepare: function() {

    },

    before: function() {

    },

    after: function(failures, pid) {
        console.log('finish up the tests');
    },



    onComplete: function() {
        console.log('that\'s it');
    }
};