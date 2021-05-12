module.exports = {
    //  This will collect coverage information from the all the file under src that has .ts extension
    //  excluding the src/types and exclude coverage from node_modules and dist folder
    collectCoverageFrom: [
        '<rootDir>/day-5/**/*.ts',
        '!<rootDir>/src/**/index.ts',
        '!<rootDir>/src/**/*.types.ts',
        '!<rootDir>/src/**/*.integration.ts',
        '!<rootDir>/src/**/test-utils/**',
        '!<rootDir>/src/**/mocks/**',
        '!<rootDir>/src/types/**',
        '!<rootDir>/src/prom.integration.test.ts',
        '!**/node_modules/**',
        '!<rootDir>/dist/**'
    ],

    // dumps all the information within ./coverage folder
    coverageDirectory: '<rootDir>/coverage',

    // coverageReporter of type "text" is used to see a coverage summary in the console output.
    // json options creates the coverage directory if it is not present and
    // dump the report in form of json object for each test file i.e coverage/coverage-final.json
    // lcov creates the coverage/lcov-report folder and dump data in html
    // follow the link for valid coverageReporters https://github.com/istanbuljs/istanbuljs/tree/master/packages/istanbul-reports/lib

    coverageReporters: ['text', 'json', 'lcov'],

    coverageThreshold: {
        global: {
            branches: 90,
            functions: 95,
            lines: 95,
            statements: 95
        }
    },

    // Allows for a label to be printed alongside a test while it is running
    displayName: 'zode',

    // A set of global variables that need to be available in all test environments.
    // below tsConfig is set for 'ts-jest' library, I hope
    globals: {
        'ts-jest': {
            tsConfig: {
                noUnusedParameters: false,
                noUnusedLocals: false,
                incremental: true
            }
        }
    },

    // An array of file extensions your modules use. If you require modules without specifying a
    // file extension, these are the extensions Jest will look for, in left-to-right order.
    moduleFileExtensions: ['ts', 'js', 'json'],

    // Automatically reset mock state before every test.
    resetMocks: true,

    // By default, each test file gets its own independent module registry. Enabling resetModules
    // goes a step further and resets the module registry before running each individual test.
    resetModules: true,

    // mentioned file corresponding to setupFilesAfterEnv starts executing immediately after the test
    // framework has been installed in the environment.
    setupFilesAfterEnv: ['./jest.setup.js'],

    // it will set node like environment for testing purpose ans overrides the default environment
    testEnvironment: 'node',

    // test match says test file must contain .test.ts extension, add if you want some other extension.
    testMatch: ['<rootDir>/src/**/*.test.ts'],

    // override the default timeout value i.e 5000, if test is failing because of timeout
    // this value could be increased, if testTimeout is the only reason for timeout
    testTimeout: 10000,

    //
    transform: {
        '.*.tsx?$': 'ts-jest'
    },

    // enables the test description to be printed just after the test suite, if there are multiple
    // test suite
    verbose: true,
    testPathIgnorePatterns: [
        '/node_modules/',
        '<rootDir>/src/prom.integration.test.ts'
    ]
}