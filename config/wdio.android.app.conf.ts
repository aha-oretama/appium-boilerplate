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
        automationName: 'UiAutomator2',
        platformName: 'Android',
        platformVersion: '8.1',
        deviceName: 'Pixel_8.1',
        app: join(process.cwd(), './apps/Android-NativeDemoApp-0.2.1.apk'),
        newCommandTimeout: 240,
        orientation: 'PORTRAIT',
        // language: 'ja',
        // locale: 'jp',
        // udid: 'SCV7N18721006361',
        // autoWebview: false,
        noReset: true,
        // fullReset: false,
        // eventTimings: false,
        // enablePerformanceLogging: false,
        // printPageSourceOnFindFailure: false,
        maxInstances: 1,
        // appActivity: 'MainActivity',
        // appPackage: 'com.wdiodemoapp',
        // appWaitActivity: 'SplashActivity',
        // appWaitPackage: 'MainActivity'
        // appWaitDuration: 20000,
        // deviceReadyTimeout: 5,
        // allowTestPackages: false,
        // androidCoverage: '',
        // androidCoverageEndIntent: '',
        // androidDeviceReadyTimeout: 30,
        // androidInstallTimeout: 90000,
        // androidInstallPath: '/data/local/tmp',
        // adbPort: 5037,
        // systemPort: 8200,
        // remoteAdbHost: '127.0.0.1',
        // androidDeviceSocket: 'chrome_devtools_remote',
        // avd: 'Pixel_2_API_22',
        // avdLaunchTimeout: 60000,
        // avdReadyTimeout: 120000,
        // avdArgs: '-netfast'
        // useKeystore: false,
        // keystorePath: '~/.android/debug.keystore',
        // keystorePassword: 'foo',
        // keyAlias: 'androiddebugkey',
        // keyPassword: 'foo',
        // chromedriverExecutable: '/abs/path/to/webdriver',
        // chromedriverArgs: ['--disable-gpu', '--disable-web-security'],
        // chromedriverExecutableDir: '/abs/path/to/chromedriver/directory',
        // chromedriverChromeMappingFile: '/abs/path/to/mapping.json',
        // chromedriverUseSystemExecutable: false,
        // autoWebviewTimeout: 2000,
        // chromedriverPort: 8000,
        // chromedriverPorts: [8000, [9000, 9005]],
        // intentAction: 'android.intent.action.MAIN',
        // intentCategory: 'android.intent.category.LAUNCHER',
        // intentFlags: '0x10200000',
        // optionalIntentArguments: '',
        // dontStopAppOnReset: false,
        // unicodeKeyboard: false,
        // resetKeyboard: false,
        // noSign: false,
        // ignoreUnimportantViews: false,
        // disableAndroidWatchers: false,
        // recreateChromeDriverSessions: false,
        // nativeWebScreenshot: false,
        // androidScreenshotPath: '/data/local/tmp',
        // autoGrantPermissions: false,
        // networkSpeed: 'full',
        // gpsEnabled: false,
        // isHeadless: false,
        // adbExecTimeout: 20000,
        // localeScript: 'Latn',
        // skipDeviceInitialization: false,
        // chromedriverDisableBuildCheck: false,
        // skipUnlock: false,
        // unlockType: 'pin',
        // unlockKey: '1111',
        // autoLaunch: true,
        // skipLogcatCapture: false,
        // uninstallOtherPackages: 'io.appium.example1',
        // disableWindowAnimation: false,
        // otherApps: '/path/to/app-a.apk',
        // uiautomator2ServerLaunchTimeout: 20000,
        // uiautomator2ServerInstallTimeout: 20000,
        // skipServerInstallation: false,
        // espressoServerLaunchTimeout: 30000,

        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
    },
];

export { config };
