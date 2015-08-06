"use strict";

var moment = require('moment');
var midNight = moment().set({'hour': 0, 'minute': 0, 'second': 0}).format("YYYY-MM-DD HH:mm:ss");
var midYear = moment().set({'month': 0, 'date': 0, 'hour': 0, 'minute': 0, 'second': 0}).format("YYYY-MM-DD HH:mm:ss");

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
      limit: moment().unix() - moment(midNight).unix(),
      unit: 'HH:mm',
      leftString: '今天'
    },
    {
      limit: moment().unix() - moment(midYear).unix(),
      above: moment().unix() - moment(midNight).unix(),
      unit: 'MMM Do HH:mm'
    },
    {
      above: moment().unix() - moment(midYear).unix(),
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
      limit: moment().unix() - moment(midNight).unix(),
      unit: 'HH:mm',
      leftString: '今天'
    },
    {
      above: moment().unix() - moment(midNight).unix(),
      limit: moment().unix() - moment(midNight).unix() + 86400,
      unit: 'HH:mm',
      leftString: '昨天'
    },
    {
      limit: moment().unix() - moment(midYear).unix(),
      above: moment().unix() - moment(midNight).unix() + 86400,
      unit: 'M-D'
    },
    {
      above: moment().unix() - moment(midYear).unix(),
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
      limit: moment().unix() - moment(midNight).unix(),
      unit: 'hour',
      leftString: '小时前'
    },
    {
      above: moment().unix() - moment(midNight).unix(),
      unit: 'date',
      leftString: '天前'
    }
  ]
};

module.exports = template;