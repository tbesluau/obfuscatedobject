var assert = require('assert');
require('./index.js');

describe('Import', function() {
    it('prototype should be overridden', function() {
		assert.equal(typeof({}.oGet), 'function');
		assert.equal(typeof({}.oSet), 'function');
    });
});

describe('Get Key', function() {
    it('method exists and returns 12 char keys', function() {
		assert.equal(typeof({}._getObfuscatedKey), 'function');
		assert.equal({}._getObfuscatedKey().length, 12);
    });
});

describe('Set', function() {
    it('setter actually puts it there', function() {
		var obj = {};
		var key = obj.oSet('', 123).key;
		assert.equal(obj[key], 123);
    });
	it('setter updates properly', function() {
		var obj = {};
		var key = obj.oSet('', 123).key;
		assert.equal(obj[key], 123);
		var newKey = obj.oSet(key, 321).key;
		assert.equal(obj[newKey], 321);
		assert.equal(obj[key], undefined);
    });
});

describe('Get', function() {
    it('getter retrieves properly', function() {
		var obj = {};
		var key = obj.oSet('', 123).key;
		assert.equal(obj.oGet(key).value, 123);
    });
	it('getter retrieves properly twice', function() {
		var obj = {};
		var key = obj.oSet('', 123).key;
		var oobj = obj.oGet(key);
		assert.equal(oobj.value, 123);
		var newKey = obj.oSet(oobj.key, 321).key;
		assert.equal(obj[newKey], 321);
		assert.equal(obj[key], undefined);
    });
	it('empty key returns undefined', function() {
		var obj = {};
		var key = obj.oSet('', 123).key;
		assert.equal(obj.oGet('foo').value, undefined);
    });
});

describe('Hybrid', function() {
    it('setter updates properly', function() {
		var obj = {
			foo: 'bar'
		};
		var key = obj.oSet('foo', 123).key;
		assert.equal(obj.oGet(key).value, 123);
		assert.equal(obj.foo, undefined);
    });
	it('getter retrieves and obfuscates', function() {
		var obj = {
			foo: 'bar'
		};
		var oobj = obj.oGet('foo');
		assert.equal(oobj.value, 'bar');
		assert.equal(obj.foo, undefined);
    });
});
