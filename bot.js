const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

  client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('%adminsbc')){
if(!message.author.id === 'bot_owner_id') return;
message.channel.sendMessage('**جار ارسال الرسالة |✅**')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.on('message', msg => { 
  if (msg.content.startsWith(`%اقتراح`)) {
     let args = msg.content.split(" ").slice(1);
    if (!args[1]) return msg.reply(`يجب كتابه الاقتراح`) 
    if (msg.guild.channels.find('name', 'الاقتراحات')) {
      msg.guild.channels.find('name', 'الاقتراحات').send(`
    الاقتراح من : ${msg.member}
    الاقتراح : **${args.join(" ").split(msg.mentions.members.first()).slice(' ')}**
    `)
    }
  }
  })

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





 let cool = new Set();

  const cuttweet = [
 'http://cutt.us/BbVSu',



    
  ]
  
  client.on('message', message => {
  if (message.content.startsWith("%gen")) {
if(cool.has(message.author.id)) m.reply("الرجاء الانتظار 5 دقائق");
cool.add(message.author.id);
setTimeout(() => {
cool.delete(message.author.id);
}, 300000);
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


  
  
  
  
client.on('message', async message => {
  if(message.content.startsWith(prefix + "اقتراح")) {
  await  message.channel.send(`اكتب اقتراحك الان`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`تم حفظ اقتراحك الرجاء انتضار الرد من قبل الاداره`)
                client.channels.get("483927457834074113").send(`${message.author.username}'s sug => ${text}`)

              })
            }
          })
    




client.on('message', message => {
     if (message.author.bot) return;
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription(" تم أرسال الرابط برسالة خاصة ")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")

    .setDescription(" مدة الرابط : ساعه  عدد استخدامات الرابط : 100 ")
      message.author.sendEmbed(Embed11)
    }
});




  
  
  
  
client.login(process.env.BOT_TOKEN);
