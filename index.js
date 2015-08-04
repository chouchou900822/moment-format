'use strict';
var moment = require('moment');
var _ = require('lodash');
/**
 *
 * @param time
 * @param form
 * @param language
 * @returns {string}
 */
function format(time, form, language) {
  var timeResult;
  if (language) {
    moment.locale(language);
  }
  var nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
  var now = moment(nowTime).unix();
  var timeUnix = moment(time).unix();
  var diff = now - timeUnix;
  var result = form.map(function (condition) {
    if(condition.limit && condition.above) {
      if (diff < condition.limit && diff > condition.above) {
        timeResult = formatTime(time, diff, condition.unit);
        if (condition.leftString && condition.rightString) {
          return condition.leftString + timeResult + condition.rightString;
        } else if (condition.leftString) {
          return condition.leftString + timeResult;
        } else if (condition.rightString) {
          return timeResult + condition.rightString;
        } else {
          return timeResult;
        }
      } else {
        return null;
      }
    } else {
      if (diff < condition.limit || diff > condition.above) {
        timeResult = formatTime(time, diff, condition.unit);
        if (condition.leftString && condition.rightString) {
          return condition.leftString + timeResult + condition.rightString;
        } else if (condition.leftString) {
          return condition.leftString + timeResult;
        } else if (condition.rightString) {
          return timeResult + condition.rightString;
        } else {
          return timeResult;
        }
      } else {
        return null;
      }
    }
  });
  return _.compact(result).join('');
}
/**
 *
 * @param time
 * @param diff
 * @param unit
 * @returns {*}
 */
var formatTime = function (time, diff, unit) {
  var result;
  switch (unit) {
    case 'second':
      result = diff;
      break;
    case 'minute':
      result = _.floor(diff / 60);
      break;
    case 'hour':
      result = _.floor(diff / (60 * 60));
      break;
    case 'day':
      result = _.floor(diff / (60 * 60 * 24));
      break;
    case 'week':
      result = _.floor(diff / (60 * 60 * 24 * 7));
      break;
    default:
      result = moment(time).format(unit);
  }
  return result;
};
module.exports = format;