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
        deviceName: 'Pixel_8.1',
        platformName: 'Android',
        platformVersion: '8.1',
        orientation: 'PORTRAIT',
        maxInstances: 1,
        app: join(process.cwd(), './apps/Android-NativeDemoApp-0.2.1.apk'),
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        noReset: true,
        newCommandTimeout: 240,
    },
];

export { config };
