module.exports = {
  setupFiles: ['raf/polyfill', './etc/jest.setup.js', './etc/jest.globals.js'],
  setupTestFrameworkScriptFile: './etc/jest.setup-framework.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['dist', '.cache', 'entry'],
  coverageReporters: ['text'],
  collectCoverageFrom: ['src/**/*.js'],
  testMatch: ['<rootDir>/**/*.spec.js'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageThreshold: {
    // uncomment to force 100% coverage
    global: {
      // branches: 100,
      // functions: 100,
      // lines: 100,
      // statements: 100,
    },
  },
  testURL: 'http://localhost',
  testEnvironment: 'jest-environment-jsdom-global',
  moduleNameMapper: {
    '\\.(css|scss|less)$': '<rootDir>/etc/jest.style-mock.js',
    '\\.(png|jpg|gif|ttf|eot|svg)$': '<rootDir>/etc/jest.file-mock.js',
  },
};
