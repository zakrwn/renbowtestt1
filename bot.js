const Discord = require('discord.js');
const client = new Discord.Client();


client.on("message", message => {
   var prefix = ".";
            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {//حقوق دايموند كودز
 m.send(`${argresult}\n `);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


 client.login(process.env.BOT_TOKEN); 