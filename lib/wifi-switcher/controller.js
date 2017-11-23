'use strict';

const WiFiSwitcher = require('./wiFiswitcher');

let wifiOn = false;

module.exports.wifiSwitchSet = function turnOn(deviceid, value) {
  console.log(`[CONTROLLER] ${deviceid} device turned on ${value}`);
  wifiOn = value;
  if (wifiOn) {
    WiFiSwitcher.turnOFF();
  } else  {
    WiFiSwitcher.turnON();
  }
};

module.exports.wifiSwitchGet = function wifiState() {
  console.log(`[CONTROLLER] true`);
  return wifiOn;
};

module.exports.onButtonPressed = function onButtonPressed(deviceid, value) {
  console.log(`[CONTROLLER] ${deviceid} device turned on ${value}`);
  if (wifiOn) {
    WiFiSwitcher.turnOFF(function(response) {
      console.log(response);
    });
  } else  {
    WiFiSwitcher.turnON(function(response) {
      console.log(response);
    });
  }
}
