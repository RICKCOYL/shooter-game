module.exports = {
    setupFilesAfterEnv: ['jest-canvas-mock', 'jest-expect-subclass'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>/src/components/tests/mocks/styleMock.js',
        '\\.(gif|ttf|eot|svg|png|mp3|ogg|wav)$': '<rootDir>/src/components/tests/mocks/fileMock.js',
    },
};