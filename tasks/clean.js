#! /usr/bin/env node
let del = require('node-delete');
del(['./src/*.js', './src/*.map', './src/*.d.ts'], () => true);
del('./test/Unit/*.js', () => true);