module.exports = {
    preset: 'ts-jest',
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: '.',
    testMatch: ['**/__tests__/**/*.test.ts', '**/?(*.)+(e2e-spec|spec|test).ts'],
    transform: {
      '^.+\\.(t|j)s$': 'ts-jest',
    },
    collectCoverage: true,
    // collectCoverageFrom: ['src/**/*.(service|use-case).ts'],
    coverageDirectory: './coverage',
    testEnvironment: 'node',
};