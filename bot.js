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
    message.reply(`يجب عليك الانتظار 5 دقايق حتى تحصل على حساب اخر`) 
if(cool.has(message.author.id)) return;
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


  


client.on('message', message => {   
    if (message.author.boss) return;
    var prefix = "%";
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);
    if (command == "mute") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    let muteRole = message.guild.roles.find("name", "Muted");
    if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
    let reason = message.content.split(" ").slice(2).join(" ");
    message.guild.member(user).addRole(muteRole);
    const muteembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`ميوت`, user.displayAvatarURL)
    .setThumbnail(user.displayAvatarURL)
    .addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
    .addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
    .addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
    .addField("User", user, true)  
    message.channel.send({embed : muteembed});
    var muteembeddm = new Discord.RichEmbed()
    .setAuthor(`Muted!`, user.displayAvatarURL)
    .setDescription(`
    ${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين 
    
     ${message.author.tag} تمت معاقبتك بواسطة
    
    [ ${reason} ] : السبب
    
    اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين 
    `)
    .setFooter(`في سيرفر : ${message.guild.name}`)
    .setColor("RANDOM")
     user.send( muteembeddm);
    }
    if (command == "unmute") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انتا لا تملك صلاحيات").then(msg => msg.delete(5000));
    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    let muteRole = message.guild.roles.find("name", "Muted");
    if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
    let reason = message.content.split(" ").slice(2).join(" ");
    message.guild.member(user).removeRole(muteRole);
    const unmuteembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`فك ميوت`, user.displayAvatarURL)
    .setThumbnail(user.displayAvatarURL)
    .addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
    .addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
    .addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
    .addField("User", user, true)  
    message.channel.send({embed : unmuteembed}).then(msg => msg.delete(5000));
    var unmuteembeddm = new Discord.RichEmbed()
    .setDescription(`تم فك الميوت عنك ${user}`)
    .setAuthor(`UnMute!`, user.displayAvatarURL)
    .setColor("RANDOM")
      user.send( unmuteembeddm);
    }
    });



client.on('message', message => {
    if (message.content.startsWith("%bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
  .catch(console.error);
}
});


client.on('message', message => {
  if (message.content === "$bo") {
         if(!message.channel.guild) return message.reply('** This command only for servers **');
  let embed = new Discord.RichEmbed()
.setColor('RANDOM')
.addField("**اسم السيرفر**", message.guild.name)
.addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
.addField("**المستخدمين:**", client.users.size)
.addField("**قنوات:**", client.channels.size)
message.channel.sendEmbed(embed);
 }
});














var prefix = "%ban"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});
























client.on('message', msg => {
    if(msg.author.bot) return;
    
    if(msg.content === '%sb') {
      client.guilds.forEach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(i => msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id} 
        Owner ID : ${g.owner.id}
        **
        `))
  
  
      })
    }
    
});






  

client.on('message' , async (message) => {
  var prefix = "%";
 if (message.content.startsWith(prefix + 'prm')) {
 const os = require('os');
    const arch = os.arch()
    const used = process.memoryUsage().heapUsed / 1024 / 1024;

    let totalSeconds = process.uptime();
    let realTotalSecs = Math.floor(totalSeconds % 60);
    let days = Math.floor((totalSeconds % 31536000) / 86400);
    let hours = Math.floor((totalSeconds / 3600) % 24);
    let mins = Math.floor((totalSeconds / 60) % 60);

    var ping = client.ping
    message.channel.send(`\n= Memory usage: ${Math.round(used * 100) / 100}MB\n= Ping: ${ping}\n= Uptime: Days: ${days} | Hours: ${hours} | Minutes: ${mins} | Seconds: ${realTotalSecs}\n= Node: ${process.version}\n= Library: discord.js\n= ARCH: ${arch}\n= Plataform: ${os.platform}\n= Servers: ${client.guilds.size}\n= Users: ${client.users.size}`, {
        code: 'AsciiDoc'
    })

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




  


//نسخة جاكيو المطورة حقوق كودز فقط
 client.on('message', message => { //jackeo جاكيو
    if (message.content.startsWith("تهكير")) {
  if(!message.channel.guild) return message.reply(' ');//jackeo جاكيو
      if (message.author.bot) return//jackeo جاكيو
           message.delete();//jackeo جاكيو
             let args = message.content.split(' ').slice(1);//jackeo جاكيو
                   let virusname = args.join(' ');//jackeo جاكيو
                 if (virusname < 1) {//jackeo جاكيو//jackeo جاكيو
                     return message.channel.send("** رجائاََ منشن من تريد تهكيرة ** ");//jackeo جاكيو
                                     }//jackeo جاكيو
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading  [▓] 1%**`).setColor(0xFF0000)})
             }, 5500)//jackeo جاكيو
             setTimeout(function() {
                m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [▓▓▓▓] 25%**`).setColor(0xFF0000)})
              }, 10500)//jackeo جاكيو
              setTimeout(function() {
                 m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [▓▓▓▓▓▓▓▓] 50%**`).setColor(0xFF0000)})
               }, 15500)//jackeo جاكيو
               setTimeout(function() {
                  m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 75%**`).setColor(0xFF0000)})
                }, 25500)//jackeo جاكيو
           setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** Hacking Done [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%**`).setColor(0xFF0000)})
             }, 30500)//jackeo جاكيو
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** ..يتم الدخول للحساب** `).setColor(0xFF0000)})
             }, 40500)//jackeo جاكيو
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** ..يتم حفض بينات الحساب** `).setColor(0xFF0000)})
             }, 45500)//jackeo جاكيو
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** ..يتم رفع البينات** `).setColor(0xFF0000)})
             }, 50500)//jackeo جاكيو
              setTimeout(function() {
               m.delete()//jackeo جاكيو
           }, 55000)//jackeo جاكيو
             setTimeout(function() {
               message.channel.send('** تم الاختراق  __Done Hacking__ **').then(msg => msg.delete(25000));
           }, 60500)//jackeo جاكيو
           });//jackeo جاكيو
         }//jackeo جاكيو
 });//jackeo جاكيو







 

 
  
  
client.login(process.env.BOT_TOKEN);
