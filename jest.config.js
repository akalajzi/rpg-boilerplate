module.exports = {
  setupFiles: ['raf/polyfill', './etc/jest.setup.js', './etc/jest.globals.js'],
  setupTestFrameworkScriptFile: './etc/jest.setup-framework.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['dist', '.cache'],
  coverageThreshold: {
    // Functions & branches have a problem with 'styled-components'
    global: {
      // branches: 100,
      // functions: 100,
      lines: 60,
      statements: 80,
    },
  },
  testURL: 'http://localhost',
  testEnvironment: 'jest-environment-jsdom-global',
};
