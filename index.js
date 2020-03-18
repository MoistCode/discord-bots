const Discord = require('discord.js');
const bots = require('./bots/index');

const client = new Discord.Client();

for(let botName in bots) {
  for(let botCommand of Object.values(bots[botName])) {
    botCommand(client);
  }
}
