const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

  client.on('message' , message => {

    if (message.content === "%رابط") {
	    message.reply(`تم ارساله الرابط في الخاص`)
        if(!message.channel.guild) return message.reply('**الآمر فقط في السيرفرات**');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)     
 .setDescription(" ***welcome To server support*** " + `
 **
رابط السيرفر | https://discord.gg/gcAb9AN
 **
`);
  message.author.sendEmbed(embed);
   }
});



   const cuttweet = [
    '‏http://cutt.us/BbVSu',
    '‏http://cutt.us/b3WJ0',
    '‏http://cutt.us/08mFl',
    '‏http://cutt.us/815DN',
    '‏http://cutt.us/M2qnv',
    '‏http://cutt.us/2MFzK',
    '‏http://cutt.us/jLgy6',
    '‏http://cutt.us/xZ8W8',
    '‏http://cutt.us/8G7p7',
    '‏http://cutt.us/M8TRS',
    '‏http://cutt.us/eQF6C',
    '‏http://cutt.us/s2tFR',
    '‏http://cutt.us/HuRzb',
    '‏http://cutt.us/4YwoN',
    '‏http://cutt.us/7Wics',




  ]
  
  client.on('message', message => {
  if (message.content.startsWith("%gen")) {
	   message.reply(`تم ارساله الحساب في الخاص`)
               if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(message.author.avatarURL) 
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.author.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
   }
  });



  
  
  
  
  
  
  
  
  
client.login(process.env.BOT_TOKEN);
