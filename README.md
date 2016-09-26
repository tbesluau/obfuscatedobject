# Obfuscated Object

Adds a getter and setter to the object prototype that obfuscates object keys.

## Install

In your package.json:
```json
    {
      "dependencies": {
        "obfuscatedobject": <appropriate git url here>
      } 
    }
```

Then run npm install

## Usage

```javascript
    require('obfuscatedobject');
    var foo = {};
    var key = foo.oSet('notImportant', 123);
    var obj = foo.oGet(key);
    console.log(obj.value); // 123
    key = foo.oSet(obj.key, 321);
    obj = foo.oGet(key);
    console.log(obj.value); // 321
```
