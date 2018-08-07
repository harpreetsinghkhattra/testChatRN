/**
 * Lifekey App
 * @copyright 2016 Global Consent Ltd
 * Civvals, 50 Seymour Street, London, England, W1H 7JG
 * @author Werner Roets <werner@io.co.za>
 */

import Routes from './Routes'
import Palette from './Palette'
const NPM_PACKAGE = require('../package.json')
const BUILD_CONFIG = require('../config/dev.json')
const APP_NAME = 'Lifekey'

/**
 * The configuration file for the App
 */
export default {

  // The full name of the application
  APP_NAME: APP_NAME,

  // First scene to show
  initialRouteFromConfig: false, // Must be true to use route below
  initialRoute: Routes.main,

  // Debug
  DEBUG: BUILD_CONFIG.DEBUG,

  debugNetwork: true,
  debugReact: false,
  debugNavigator: false,
  debugFirebase: true,
  debugAsyncStorage: false,
  debugAutoLogin: false,
  debugAutoLoginPassword: '99999',

  version: NPM_PACKAGE.version, // App version

  // React Native version
  rnVersion: NPM_PACKAGE.dependencies['react-native'].substring(1),

  // Modal settings
  progressBarColor: Palette.consentBlue,

  // HTTP settings
  http: {
    server: BUILD_CONFIG.SERVER,
    baseUrl: 'http://' + BUILD_CONFIG.SERVER,
  },

  keystore: {
    name: APP_NAME.toLowerCase(),
    pemCertificatePath: 'rsa-example.pem',
    keyName: APP_NAME.toLowerCase(),
    publicKeyAlgorithm: 'rsa'
  },

  keyboardTypes: {
    default: "default",
    number_pad: "number-pad",
    decimal_pad: "decimal-pad",
    numeric: "numeric",
    email_address: "email-address",
    phone_pad: "phone-pad"
  },
  keyboardReturnTypes: {
    done: "done",
    go: "go",
    next: "next",
    search: "search",
    send: "send"
  }
}
