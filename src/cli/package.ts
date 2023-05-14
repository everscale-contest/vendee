const PACKAGE_JSON_PATH: string = '../../package.json'

// Read package.json to get parameters
export const packageJson: { name: string, version: string } = require(PACKAGE_JSON_PATH) // eslint-disable-line