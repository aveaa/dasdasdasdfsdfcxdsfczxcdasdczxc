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
    '‏حساب ثاني  | مطلبك الوحيد الحين ',
    '‏حساب الاول  | مطلبك الوحيد الحين ',
    '‏حساب تجريبي  | مطلبك الوحيد الحين ',

  ]
  
  client.on('message', message => {
  if (message.content.startsWith("%Test")) {
	   message.reply(`تم ارساله الرابط في الخاص`)
               if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(message.author.avatarURL) 
  .addField('TEST',
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.author.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
   }
  });



  
  
  
  
  
  
  
  
  
client.login(process.env.BOT_TOKEN);
