const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  function lol() {
    client.guilds.get('520891603771064321').roles.find("ron").setColor("RANDOM");
  };
  setInterval(lol, 1600);
}); 

 client.login(process.env.BOT_TOKEN); 
