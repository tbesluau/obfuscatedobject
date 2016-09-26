var assert = require('assert');
var obfuscatedobject = require('./index.js');

describe('Import', function() {
    it('should be an object', function() {
      assert.equal(typeof(obfuscatedobject), 'object');
    });
});
