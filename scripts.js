'use strict'
const fs = require('fs');
const text = fs.readFileSync('scripts.js', 'utf8');
console.log(text);