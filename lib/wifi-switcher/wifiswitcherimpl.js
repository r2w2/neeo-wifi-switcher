const config = {
    host: 'yourhost',
    username: 'username',
    password: 'yourpassword'
};

const commandsConfig = {
    command: 'ifconfig',
    interface: 'ath0',
    on: 'up',
    off: 'down'
};

module.exports.config = config;
module.exports.commandsConfig = commandsConfig;