# find-min [![Build Status](https://api.travis-ci.com/smondal/find-min.svg?branch=master)](https://travis-ci.com/smondal/find-min) [![Coverage Status](https://coveralls.io/repos/github/smondal/find-min/badge.svg?branch=master)](https://coveralls.io/github/smondal/find-min?branch=master)


## Install

```
$ npm install find-min
```


## Usage

```js
const findMin = require('find-min');

var min = findMin(1, 2, 3, 4)  // 1

var min = findMin([1, 2, 3, 4]) //1

var min = findMin({1: 2, 2: 4, 4: 5})  //'1'
```


## Related

- [find-max](https://github.com/smondal/find-max) - Find maximum number
