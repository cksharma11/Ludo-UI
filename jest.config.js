module.exports = {
  setupFiles: ['<rootDir>/devUtils/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  collectCoverage: true,
  coverageReporters: ['html', 'text'],
  verbose: true,
  timers: 'fake',
  collectCoverageFrom: [
    'components/**/*.js',
    'pages/**/*.js',
    '!**/*.style.js',
    '!pages/*.js',
    '!components/WaitingArea/*.js'
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  }
};
