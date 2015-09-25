"use strict";

var moment = require('moment');
var midNight = moment().startOf('day').unix();
var midYear = moment().startOf('year').unix();

var template = {
  weibo: [
    {
      limit: '10',
      rightString: '10秒前'
    },
    {
      above: '10',
      limit: '60',
      unit: 'second',
      rightString: '秒前'
    },
    {
      above: '60',
      limit: '3600',
      unit: 'minute',
      rightString: '分钟前'
    },
    {
      above: '3600',
      limit: moment().unix() - midNight,
      unit: 'HH:mm',
      leftString: '今天'
    },
    {
      limit: moment().unix() - midYear,
      above: moment().unix() - midNight,
      unit: 'MMM Do HH:mm'
    },
    {
      above: moment().unix() - midYear,
      unit: 'YYYY-MM-DD HH:mm'
    }
  ],
  weiboMobile: [
    {
      limit: '10',
      rightString: '10秒前'
    },
    {
      above: '10',
      limit: '60',
      unit: 'second',
      rightString: '秒前'
    },
    {
      above: '60',
      limit: '3600',
      unit: 'minute',
      rightString: '分钟前'
    },
    {
      above: '3600',
      limit: moment().unix() - midNight,
      unit: 'HH:mm',
      leftString: '今天'
    },
    {
      above: moment().unix() - midNight,
      limit: moment().unix() - midNight + 86400,
      unit: 'HH:mm',
      leftString: '昨天'
    },
    {
      limit: moment().unix() - midYear,
      above: moment().unix() - midNight + 86400,
      unit: 'M-D'
    },
    {
      above: moment().unix() - midYear,
      unit: 'YY-MM-DD'
    }
  ],
  wechat: [{
    limit: '60',
    rightString: '1分钟前'
    },
    {
      above: '60',
      limit: '3600',
      unit: 'minute',
      rightString: '分钟前'
    },
    {
      above: '3600',
      limit: moment().unix() - midNight,
      unit: 'hour',
      rightString: '小时前'
    },
    {
      above: moment().unix() - midNight,
      unit: 'date',
      rightString: '天前'
    }
  ]
};
module.exports = template;