const tokens = require('../config.json');

exports.loonBotOnReady = (client) => client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

exports.loonBotOnMsg = (client) => client.on('message', msg => {
  if (msg.content === 'sexy') {
    msg.reply('Time!');
  }
});

exports.loonBotLogin = (client) => client.login(tokens.sexytimebot);