module.exports = {
  setupFilesAfterEnv: [
    '@testing-library/jest-dom',
    '@testing-library/react/cleanup-after-each'
  ],
  testPathIgnorePatterns: ['node_modules', 'cypress']
};
