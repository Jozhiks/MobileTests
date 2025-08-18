export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    
    port: 4723,
  
    specs: [
        './tests/*.js'
    ],
 
    exclude: [

    ],

    maxInstances: 1,

    services: ['appium'],

    capabilities: [{
        platformName: "Android",
        "appium:deviceName": "emulator-5554", 
        "appium:platformVersion": "16.0",     
        "appium:automationName": "UiAutomator2",
        'appium:app': './TheApp.apk',
        "appium:newCommandTimeout": 300
    }],


    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    framework: 'mocha',
    

    reporters: [['allure', {outputDir: 'allure-results'}]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}