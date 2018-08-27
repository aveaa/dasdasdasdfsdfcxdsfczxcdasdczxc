const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {	
    if (message.author.bot) return;
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith(prefix + '%adminsbc')){
 if(!message.author.id === '292042690470739968') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.on('message', message => {
    var prefix = "%"
if (message.content.startsWith(prefix + "time")) {
   let uptime = client.uptime;

   let days = 0;
   let hours = 0;
   let minutes = 0;
   let seconds = 0;
   let notCompleted = true;

   while (notCompleted) {

       if (uptime >= 8.64e+7) {

           days++;
           uptime -= 8.64e+7;

       } else if (uptime >= 3.6e+6) {

           hours++;
           uptime -= 3.6e+6;

       } else if (uptime >= 60000) {

           minutes++;
           uptime -= 60000;

       } else if (uptime >= 1000) {
           seconds++;
           uptime -= 1000;

       }

       if (uptime < 1000)  notCompleted = false;

   }

   message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});

 const devs = ['292042690470739968' , '310129588397277185' , '' , ''];
const adminprefix = "%";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
  });





   const cuttweet = [
    'http://cutt.us/BbVSu',
    'http://cutt.us/b3WJ0',
    'http://cutt.us/08mFl',
    'http://cutt.us/815DN',
    'http://cutt.us/M2qnv',
    'http://cutt.us/2MFzK',
    'http://cutt.us/jLgy6',
    'http://cutt.us/xZ8W8',
    'http://cutt.us/8G7p7',
    'http://cutt.us/M8TRS',
    'http://cutt.us/eQF6C',
    'http://cutt.us/s2tFR',
    'http://cutt.us/HuRzb',
    'http://cutt.us/4YwoN',
    'http://cutt.us/7Wics',




  ]
  
  client.on('message', message => {
  if (message.content.startsWith("%gen")) {
	   message.reply(`تم ارساله الحساب في الخاص`)
               if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(message.author.avatarURL) 
    .addField('Spotify حساب',
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.author.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
   }
  });



  
  
  
  
  
  
  
  
  
client.login(process.env.BOT_TOKEN);
