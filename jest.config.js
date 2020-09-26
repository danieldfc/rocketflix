module.exports = {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov'],
  testEnvironment: 'node',
  projects: ['<rootDir>/packages/**/jest.config.js'],
  testMatch: ['*.spec.js'],
};
