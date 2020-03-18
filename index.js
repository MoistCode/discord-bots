const Discord = require('discord.js');
const bots = require('./bots/index');

// Initializes every single bot. They won't work unless you invite them.
for(let botName in bots) {
  console.log(`${botName} initializing...`);

  const client = new Discord.Client();

  // Runs every command that exported from that bot.
  for(let botCommand of Object.values(bots[botName])) {
    botCommand(client);
  }
}