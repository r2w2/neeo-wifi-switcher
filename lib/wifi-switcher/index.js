'use strict';

const neeoapi = require('neeo-sdk');
const controller = require('./controller');

console.log('Wifi Switcher for NEEO');
console.log('------------------------------------------');

const wifiSwitcher = neeoapi.buildDevice('Wifi Switcher')
  .setManufacturer('wrt')
  .setType('LIGHT')
  .addButtonGroup('On/Off')
  .addButton({ name: 'button-on', label: 'Wifi On' })
  .addButton({ name: 'button-off', label: 'Wifi Of' })
  .addButtonHander(controller.onButtonPressed)
  .addSwitch(
    { name: 'wifiSwitch', label: 'my switch' },
    { setter: controller.wifiSwitchSet, getter: controller.wifiSwitchGet }
   );

function startSdkExample(brain) {
  console.log('- Start server');
  neeoapi.startServer({
    brain,
    port: 6336,
    name: 'wifi-switcher',
    devices: [wifiSwitcher]
  })
  .then(() => {
    console.log('# READY! use the NEEO app to search for "NEEO Accessory".');
  })
  .catch((error) => {
    //if there was any error, print message out to console
    console.error('ERROR!', error.message);
    process.exit(1);
  });
}

const brainIp = process.env.BRAINIP;
if (brainIp) {
  console.log('- use NEEO Brain IP from env variable', brainIp);
  startSdkExample(brainIp);
} else {
  console.log('- discover one NEEO Brain...');
  neeoapi.discoverOneBrain()
    .then((brain) => {
      console.log('- Brain discovered:', brain.name);
      startSdkExample(brain);
    });
}



