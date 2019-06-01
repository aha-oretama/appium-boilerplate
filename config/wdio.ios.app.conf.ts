import { config as sharedConfig } from './wdio.shared.conf';
import { join } from 'path';
import * as WebdriverIO from '@wdio/sync';

// ============
// Specs
// ============
const config: WebdriverIO.Config = { ...sharedConfig };
config.specs = [
    './tests/specs/**/app*.spec.js',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        deviceName: 'iPhone X',
        platformName: 'iOS',
        platformVersion: '12.2',
        orientation: 'PORTRAIT',
        maxInstances: 1,
        // The path to the app
        app: join(process.cwd(), './apps/iOS-Simulator-NativeDemoApp-0.2.1.app.zip'),
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        noReset: true,
        newCommandTimeout: 240,
        // calendarFormat: 'gregorian',
        // bundleId: '',
        // udid: '',
        // launchTimeout: 20000,
        // locationServicesEnabled: false,
        // locationServicesAuthorized: false,
        // autoAcceptAlerts: false,
        // autoDismissAlerts: false,
        // nativeInstrumentsLib: false,
        // nativeWebTap: false,
        // safariInitialUrl: 'https://www.github.com',
        // safariAllowPopups: false,
        // safariIgnoreFraudWarning: false,
        // safariOpenLinksInBackground: false,
        // keepKeyChains: false,
        // localizableStringsDir: 'en.lproj',
        // processArguments: '{}',
        // interKeyDelay: 100,
        // showIOSLog: false,
        // sendKeyStrategy: 'oneByOne',
        // screenshotWaitTimeout: 10,
        // waitForAppScript: 'true;',
        // webviewConnectRetries: 8,
        // appName: 'UICatalog',
        // customSSLCert: '',
        // webkitResponseTimeout: 5000,
        // remoteDebugProxy: '12000',
        // enableAsyncExecuteFromHttps: false,
        // skipLogCapture: false,
        // webkitDebugProxyPort: 27753
    },
];

exports.config = config;
