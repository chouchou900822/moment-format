# moment-format
[![Build Status](https://travis-ci.org/chouchou900822/moment-format.svg?branch=master)](https://travis-ci.org/chouchou900822/moment-format)

[![NPM](https://nodei.co/npm/moment-format.png?mini=true)](https://nodei.co/npm/moment-format/)

帮助你方便的构建你的时间轴

## 安装

```sh
$ npm install moment-format
```

## 测试

```sh
$ sudo npm install -g mocha
  && npm test
```


## 使用

```js
var format = require('moment-format');
var result = format(time, limitData, language);
```

## 参数

`time`:
你将要处理的时间，类型可以是DATE和STRING.
  
`limitData`:
自己设定的处理时间的规则.
标准是一个JSON数据:

```
  {
    above: STING,
    limit: STING,
    unit: STING,
    leftString: STING,
    rightString: STING
  }
```

`above`: 大于这个秒数

`limit`: 小于这个秒数

`unit`: 单位

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
<td>如果为空，将只会显示你的左右字符串</td>
</tr>
<tr>
<td><code>second</code></td>
<td><code>1...</code></td>
<td>距离现在的秒数</td>
</tr>
<tr>
<td><code>minute</code></td>
<td><code>1...</code></td>
<td>距离现在的分钟数</td>
</tr>
<tr>
<td><code>hour</code></td>
<td><code>1...</code></td>
<td>距离现在的小时数</td>
</tr>
<tr>
<td><code>date</code></td>
<td><code>1...</code></td>
<td>距离现在的天数</td>
</tr>
<tr>
<td><code>week</code></td>
<td><code>1...</code></td>
<td>距离现在的周数</td>
</tr>
<tr>
<td><code>YYYY</code></td>
<td><code>2014</code></td>
<td>4位数年份</td>
</tr>
<tr>
<td><code>YY</code></td>
<td><code>14</code></td>
<td>后两位数年份</td>
</tr>
<tr>
<td><code>Q</code></td>
<td><code>1..4</code></td>
<td>年的四分之一中的月份</td>
</tr>
<tr>
<td><code>M MM</code></td>
<td><code>1..12</code></td>
<td>月份</td>
</tr>
<tr>
<td><code>MMM MMMM</code></td>
<td><code>Jan..December</code></td>
<td>不同语言的月by <code>moment.locale()</code></td>
</tr>
<tr>
<td><code>D DD</code></td>
<td><code>1..31</code></td>
<td>日</td>
</tr>
<tr>
<td><code>Do</code></td>
<td><code>1st..31st</code></td>
<td>每月第几天</td>
</tr>
<tr>
<td><code>DDD DDDD</code></td>
<td><code>1..365</code></td>
<td>每年第几天r</td>
</tr>
<tr>
<td><code>X</code></td>
<td><code>1410715640.579</code></td>
<td>Unix时间戳</td>
</tr>
<tr>
<td><code>x</code></td>
<td><code>1410715640579</code></td>
<td>Unix毫秒时间戳</td>
</tr>
</tbody>
</table>

`leftString`: 合并在结果时间左边的字符串

`rightString`: 合并在结果时间右边的字符串

`language`:设定你的时间语言.`'zh-cn'`是中文

## 模版

如果想使用微博或者微信的时间轴模版，可以看下面的例子

微博：

```js
var format = require('moment-format');
var yourResult  = format(yourTime, 'weibo');
```

微博移动端：

```js
var format = require('moment-format');
var yourResult  = format(yourTime, 'weiboMobile');
```

微信：

```js
var yourResult  = format(yourTime, 'wechat');
```

## 例子

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
