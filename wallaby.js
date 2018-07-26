module.exports = function (wallaby) {
  return {
    files: [
      'src/events.ts',
      'src/dictionary.ts',
      'src/shape.ts',
      'src/hexagon.ts'
    ],
    tests: [
      'test/Unit/bootstrap.test.ts',
      'test/Unit/events.test.ts',
      'test/Unit/dictionary.test.ts',
      'test/Unit/hexagon.test.ts',
    ],
    testFramework: 'mocha',
    env: {
        type: 'node'
    },
    debug: true
  };
};