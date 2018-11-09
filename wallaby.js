module.exports = function (wallaby) {
  return {
    files: [
      'test/Unit/bootstrap.test.ts',
      'src/events.ts',
      'src/dictionary.ts',
      'src/enums.ts',
      'src/shape.ts',
      'src/hexagon.ts',
      'src/square.ts',
      'src/tile.ts',
      'src/grid.ts',
    ],
    tests: [
      'test/Unit/events.test.ts',
      'test/Unit/dictionary.test.ts',
      'test/Unit/square.test.ts',
      'test/Unit/hexagon.test.ts',
      'test/Unit/tile.test.ts',
      'test/Unit/grid.test.ts',
      'test/Unit/shape.test.ts',
    ],
    testFramework: 'mocha',
    env: {
        type: 'node'
    },
    debug: true
  };
};