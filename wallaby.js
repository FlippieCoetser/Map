module.exports = function (wallaby) {
  return {
    files: [
      'src/events.ts',
      'src/dictionary.ts'
    ],
    tests: [
      'test/Unit/bootstrap.test.ts',
      'test/Unit/events.test.ts',
      'test/Unit/dictionary.test.ts'
    ],
    testFramework: 'mocha',
    env: {
        type: 'node'
    },
    debug: true
  };
};