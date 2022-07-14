const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    "^pages(.*)$": "<rootDir>/components/pages/$1",
    "^context(.*)$": "<rootDir>/context/$1",
    "^hooks(.*)$": "<rootDir>/hooks/$1",
    "^resources(.*)$": "<rootDir>/resources/$1",
    "^components(.*)$": "<rootDir>/components/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  verbose: true,
};

module.exports = createJestConfig(customJestConfig);
