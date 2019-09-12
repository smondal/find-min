# find-min
[![Build status][travis-image]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Downloads][downloads-image]][downloads-url]

[coverage-image]: https://coveralls.io/repos/github/smondal/find-min/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/smondal/find-min?branch=master
[travis-image]: https://api.travis-ci.com/smondal/find-min.svg?branch=master
[travis-url]: https://travis-ci.com/smondal/find-min
[downloads-image]: https://img.shields.io/npm/dm/find-min.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/find-min



## Install

```
$ npm install find-min
```


## Usage

```js
const findMin = require('find-min');

var min = findMin(1, 2, 3, 4)  // 1

var min = findMin([1, 2, 3, 4]) //1

//Handle array of array
var min = findMin([2, 1, 3, 4, [6, 12], [9, 10], [2], 8]) // 1

var min = findMin({1: 2, 2: 4, 4: 5})  //'1'

var min = findMin({a: 2, b: 4, c: 5}) //'a'
```

## API

### findMin(arguments)

Arguments would be comma separated value. If you not pass any argument it will return you `undefined`

### findMin(Array)
Type: `Array`

You can pass single array or array or array. If you pass array of array it will first apply `flatten` method to produce single array. Then return the minimum value from array.

If you pass empty array it will return `undefined`.

#### findMin(Object)

Type: `Object`

Compare the value of each key and return the minimum value from Object.



## Related

- [find-max](https://github.com/smondal/find-max) - Find maximum number
