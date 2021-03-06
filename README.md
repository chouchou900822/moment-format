# moment-format
[![Build Status](https://travis-ci.org/chouchou900822/moment-format.svg?branch=master)](https://travis-ci.org/chouchou900822/moment-format)

[![NPM](https://nodei.co/npm/moment-format.png?mini=true)](https://nodei.co/npm/moment-format/)

Help you to format your time tree.[中文说明](cn.md)

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

<table>
<thead>
<tr>
<th>Input</th>
<th>Example</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>null</code></td>
<td><code>null</code></td>
<td>When it is null, the result will just be your leftString and rightString</td>
</tr>
<tr>
<td><code>second</code></td>
<td><code>1...</code></td>
<td>seconds from now</td>
</tr>
<tr>
<td><code>minute</code></td>
<td><code>1...</code></td>
<td>minutes from now</td>
</tr>
<tr>
<td><code>hour</code></td>
<td><code>1...</code></td>
<td>hours from now</td>
</tr>
<tr>
<td><code>date</code></td>
<td><code>1...</code></td>
<td>dates from now</td>
</tr>
<tr>
<td><code>week</code></td>
<td><code>1...</code></td>
<td>weeks from now</td>
</tr>
<tr>
<td><code>YYYY</code></td>
<td><code>2014</code></td>
<td>4 or 2 digit year</td>
</tr>
<tr>
<td><code>YY</code></td>
<td><code>14</code></td>
<td>2 digit year</td>
</tr>
<tr>
<td><code>Q</code></td>
<td><code>1..4</code></td>
<td>Quarter of year. Sets month to first month in quarter.</td>
</tr>
<tr>
<td><code>M MM</code></td>
<td><code>1..12</code></td>
<td>Month number</td>
</tr>
<tr>
<td><code>MMM MMMM</code></td>
<td><code>Jan..December</code></td>
<td>Month name in locale set by <code>moment.locale()</code></td>
</tr>
<tr>
<td><code>D DD</code></td>
<td><code>1..31</code></td>
<td>Day of month</td>
</tr>
<tr>
<td><code>Do</code></td>
<td><code>1st..31st</code></td>
<td>Day of month with ordinal</td>
</tr>
<tr>
<td><code>DDD DDDD</code></td>
<td><code>1..365</code></td>
<td>Day of year</td>
</tr>
<tr>
<td><code>X</code></td>
<td><code>1410715640.579</code></td>
<td>Unix timestamp</td>
</tr>
<tr>
<td><code>x</code></td>
<td><code>1410715640579</code></td>
<td>Unix ms timestamp</td>
</tr>
</tbody>
</table>

`leftString`: combine the string with result from left

`rightString`: combine the string with result from right


`language`:
The time language you wanna get.

## Template

If you wanna to use template of `'weibo'` or `'wechat'`, you can see below.

```js
var format = require('moment-format');
var yourResult  = format(yourTime, 'weibo');
```
or

```js
var yourResult  = format(yourTime, 'weiboMobile');
```

or

```js
var yourResult  = format(yourTime, 'wechat');
```

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

...

### [MIT Licensed](LICENSE)
