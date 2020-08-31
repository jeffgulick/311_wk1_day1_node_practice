let moment = require('moment'); // require
moment().format(); 

const today = () => {
  let currentDay = moment().format('dddd');  
  return currentDay;
}

const calendar = () => {
  let date = moment().format('MMM DD, YYYY');
  return date;
}

const currentTime = () => {
  let theTime = moment().format('hh:mm:ss A');
  return theTime;
}

module.exports = {
  today,
  calendar,
  currentTime
}