module.exports = {
    // the root to source code
    roots: [
        "<rootDir>/src"
    ],
    // add support to TypeScript
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    // run special logics
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect"
    ],
    // test files will be:
    // - in directories '__tests__'
    // - named 'xxx.test|spec.tsx'
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    // module file extensions for import
    moduleFileExtensions: [
        "ts", 
        "tsx", 
        "js", 
        "jsx", 
        "json", 
        "node"
    ],
    modulePaths: [
        "<rootDir>/node_modules/", 
        "<rootDir>/src/"
    ],
    globals: {
        'ts-jest': {
            diagnostics: {
                pathRegex: /\.(spec|test)\.ts$/
            }
        }
    }
}