const { name } = require('./package.json');

module.exports = {
  displayName: name,
  name,
  coverageDirectory: '__tests__/coverage',
  collectCoverageFrom: ['<rootDir>/src/app/**/*.js'],
  coverageReporters: ['text-summary', 'lcov'],
  testMatch: ['<rootDir>/**/__tests__/**/*.spec.js'],
  transform: {
    '.(js|jsx|ts|tsx)': '@sucrase/jest-plugin',
  },
};
