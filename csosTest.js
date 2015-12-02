var webdriverio = require('webdriverio'),
    chai = require('chai');
expect=chai.expect;


var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('test.json', 'utf8'));

describe('Test for CSOS UI', function() {
    // set timeout to 10 seconds
    this.timeout(10000);
    var driver = {};
    var popup;
    var main;

    before( function (done) {
        driver = webdriverio.remote({ desiredCapabilities: {
            browserName: 'phantomjs'
            //          chromeOptions: {
            //               "args": [
            //                  '--load-extension='+'C:/Users/anarwal/AppData/Local/Google/Chrome/User Data/Default/Extensions/nlfbmbojpeacfghkpbjhddihlkkiljbi/1.0.3_0']}

        } });
        driver.init(done);
    });


    it('should load correct Login page and title', function () {
        return driver
            .windowHandleMaximize()
            .url('https://google.com')
            .getTitle().then( function (title) {
                expect(title).to.be.equal(obj.title);
            })
            .saveScreenshot('./screenshots/shot1.png')
            .end();
    });


    after(function(done) {
        if(typeof browser === "undefined") {
            driver.end(done);
        } else {
            done();
        }
    });
});