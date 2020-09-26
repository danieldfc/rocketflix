const { name } = require('./package.json');

module.exports = {
  displayName: name,
  name,
  coverageDirectory: '__tests__/coverage',
  collectCoverageFrom: ['<rootDir>/src/modules/**/services/*.ts'],
  testMatch: ['**/__tests__/**/*.test.js'],
  transform: {
    '.(js|jsx|ts|tsx)': '@sucrase/jest-plugin',
  },
};
