

class WiFiSwitcher {
    constructor(config, commandsConfig) {
        this.wifiState = "";
        this.exec = require('node-ssh-exec');
        this.onCommand = `${commandsConfig.command} ${commandsConfig.interface} ${commandsConfig.on}`;
        this.offCommand = `${commandsConfig.command} ${commandsConfig.interface} ${commandsConfig.off}`;
    }

    turnON(callback) {
        console.log("[WIFI_SWITCHER] turning wifi on....");
        this.exec(config, this.onCommand, function (error, response) {
            if(error) {
                throw error;
            }
            console.log("[WIFI_SWITCHER] wifi turned on.");
            callback(response);
        });
    }

    turnOFF(callback) {
        console.log("[WIFI_SWITCHER] turning wifi off....");
        this.exec(config, this.offCommand, function (error, response) {
            if(error) {
                throw error;
            }
            console.log(response);
            callback(response);
        });
    }

    isWifiEnabled() {
        
    }
};
module.exports = WiFiSwitcher;