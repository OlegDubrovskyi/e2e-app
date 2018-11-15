
const host = '0.0.0.0';   // default appium host
const port = 4723;          // default appium port

const waitforTimeout = 30 * 60000;
const commandTimeout = 30 * 60000;

exports.config = {
    debug: false,
    specs: [
        './features/*.feature',
    ],

    reporters: ['allure','spec'],
    reporterOptions: {
        allure: {
            outputDir: './allure-results/'
        }
    },

    host: host,
    port: port,

    maxInstances: 1,

    capabilities: [
        {
            appiumVersion: '1.9.1',
            platformName: 'Android',
            app: 'http://appium.github.io/appium/assets/selendroid-test-app-0.10.0.apk',
            //appPackage: 'com.android.calculator2',  // Package name of your app
            //appActivity: 'com.android.calculator2.Calculator', // App activity of the app// Android platform version of the device
            deviceName: '192.168.56.101:5555',
            waitforTimeout: waitforTimeout,
            commandTimeout: commandTimeout,
            newCommandTimeout: 30 * 60000,
        }
    ],

    services: ['appium'],
    appium: {
        waitStartTime: 6000,
        waitforTimeout: waitforTimeout,
        command: 'appium',
        logFileName: 'appium.log',
        args: {
            address: host,
            port: port,
            commandTimeout: commandTimeout,
            sessionOverride: true,
            debugLogSpacing: true
        }
    },

    logLevel: 'silent',
    coloredLogs: true,
    framework: 'cucumber',
    cucumberOpts: {
        compiler: ['ts:ts-node/register'],
        backtrace: true,
        failFast: false,
        timeout: 5 * 60 * 60000,
        require: ['./stepDefinitions/*.ts']
    },

    onPrepare: function () {
        console.log('<<< NATIVE APP TESTS STARTED >>>');
    },

    afterScenario: function (scenario) {
        browser.screenshot();
    },

    onComplete: function () {
        console.log('<<< TESTING FINISHED >>>');
    }

};
