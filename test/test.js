'use strict';
require('should');
var format = require('../index');
var moment = require('moment');
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
var second = moment().format('ss');
var minute = moment().format('mm');
var hour = moment().format('HH');
var date = moment().format('DD') - 1;
var year = moment().format('YYYY') - 1;
var time1 = moment().set({'second': second - 1}).format("YYYY-MM-DD HH:mm:ss");
var time2 = moment().set({'minute': minute - 2}).format("YYYY-MM-DD HH:mm:ss");
var time3 = moment().set({'hour': hour - 2}).format("YYYY-MM-DD HH:mm:ss");
var time4 = moment().set({'date': date, 'minute': minute + 1}).format("YYYY-MM-DD HH:mm:ss");
var time5 = moment().set({'year': year}).format("YYYY-MM-DD HH:mm:ss");

describe("second test", function() {
  it("The result should match 秒之前", function() {
    format(time1, limitData, 'zh-cn').should.match(/秒之前/);
  });
});

describe("minute test", function() {
  it("The result should match 分钟之前", function() {
    format(time2, limitData, 'zh-cn').should.match(/分钟之前/);
  });
});

describe("hour test", function() {
  it("The result should match 今天", function() {
    format(time3, limitData, 'zh-cn').should.match(/今天/);
  });
});

describe("date test", function() {
  it("The result should match 昨天", function() {
    format(time4, limitData, 'zh-cn').should.match(/昨天/);
  });
});

describe("year test", function() {
  it("The result should match 月", function() {
    format(time5, limitData, 'zh-cn').should.match(/月/);
  });
});