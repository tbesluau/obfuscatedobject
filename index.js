Object.prototype._getObfuscatedKey = function () {
	var result = '';
	while (!result || this.result !== undefined) {
		result = Math.random().toString(36).substr(2, 12);
	}
	return result;
};

Object.prototype.oGet = function (key) {
	if (typeof(key) !== 'string') {
		if (typeof(key) === 'object' && key.key) {
			key = key.key;
		} else {
			return;
		}
	}
	var value = this[key];
	var newKey = _getObfuscatedKey();
	this[newKey] = value;
	delete this[key];
	return {key: newKey, value: value};
};

Object.prototype.oSet = function (key, value) {
	if (typeof(key) !== 'string') {
		if (typeof(key) === 'object' && key.key) {
			value = key.value;
			key = key.key;
		} else {
			return;
		}
	}
	var newKey = _getObfuscatedKey();
	this[newKey] = value;
	delete this[key];
	return {key: newKey, value: value};
};
