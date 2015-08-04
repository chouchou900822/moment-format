# moment-format
[![Build Status](https://travis-ci.org/chouchou900822/moment-format.svg?branch=master)](https://travis-ci.org/chouchou900822/moment-format)

[![NPM](https://nodei.co/npm/moment-format.png?mini=true)](https://nodei.co/npm/moment-format/)

Help you to format your time tree.

## Installation

```sh
$ npm install moment-format
```

## test

```sh
$ sudo npm install -g mocha
  && npm test
```


## API

```js
var format = require('moment-format');
var result = format(time, limitData, language);
```

## params

`time`:
The time you wanna format,it can be STRING or DATE.
  
`limitData`:
Your standard to format the time.
It shold be json data like:

```
  {
    above: STING,
    limit: STING,
    unit: STING,
    leftString: STING,
    rightString: STING
  }
```

`above`: above the time distance

`limit`: under the time distance

`unit`: time unit you want to get

`leftString`: combine the string with result from left

`rightString`: combine the string with result from right


`language`:
The time language you wanna get.

## Example

```js
var format = require('moment-format');
var limitData = [{
  limit: '60',
  unit: 'second',
  rightString: '秒之前'
  },
  {
    above: '60',
    limit: '3600',
    unit: 'minute',
    rightString: '分钟之前'
  },
  {
      above: '3600',
      limit: '36000',
      unit: 'hour',
      rightString: '小时之前'
  },
  {
    above: '36000',
    limit: '50000',
    unit: 'HH:mm',
    leftString: '今天'
  },
  {
    above: '50000',
    limit: '86400',
    unit: 'HH:mm',
    leftString: '昨天'
  },
  {
    above: '86400',
    unit: 'MMM Do'
  }
];
format(yourTime, limitData, 'zh-cn');
```
## TODO

Add weibo and wechat time tree template.

### [MIT Licensed](LICENSE)
