import { Config } from 'protractor';

export let config: Config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [ './tests/SearchSpec.js',
             './tests/HomePageSpec.js',
             './tests/PhotosSpec.js' ],
    // suites: {
    //     search: './tests/SearchSpec.js'
    // },
    jasmineNodeOpts: {
        showColors: true
    }
    // multiCapabilities: [{
    //     browserName: 'firefox'
    //   }, {
    //     browserName: 'chrome'
    //   }]
}