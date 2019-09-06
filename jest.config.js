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
    '!components/Game/GameHook.js'
  ],
  coverageThreshold: {
    global: {
      statements: 95,
      branches: 95,
      functions: 95,
      lines: 95
    }
  }
};
