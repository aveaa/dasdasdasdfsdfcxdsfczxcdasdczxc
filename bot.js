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


  ﻿client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
    return channel.send(`منور السيرفر يا بعد قلبي ${member} `) 
  }).catch(console.error)
  })




client.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find("name","welcome");
      if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let norelden = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:norelden});          
               
 
      }
      });















    client.on('guildMemberAdd', member => {
      var embed = new Discord.RichEmbed()
      .setAuthor(member.user.username, member.user.avatarURL)
      .setThumbnail(member.user.avatarURL)
      .setTitle(`عضو جديد`)
      .setDescription(`اهلا بك في السيرفر`)
      .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
      .setColor('GREEN')
  
  var channel =member.guild.channels.find('name', 'welcome')
  if (!channel) return;
  channel.send({embed : embed});
  });








  client.on('message', msg => {
    var prefix = "%"
  if(msg.content.startsWith (prefix  + 'server')) {
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(msg.guild.iconURL)
  .setTitle(`Showing Details Of  **${msg.guild.name}**`)
  .addField(':globe_with_meridians: نوع السيرفر', `[** ${msg.guild.region}**]`,true)
  .addField(':medal: الرتب',`[** __${msg.guild.roles.size}__ **]`,true)
  .addField(':red_circle: عدد الاعضاء',`[** __${msg.guild.memberCount}__ **]`,true)
  .addField(':large_blue_circle: عدد الاعضاء الاونلاين',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
  .addField(':pencil: الرومات الكتابية',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
  .addField(':microphone: رومات الصوت',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
  .addField(':crown: الأونـر',`**${msg.guild.owner}**`,true)
  .addField(':id: ايدي السيرفر',`**${msg.guild.id}**`,true)
  .addField(':date: تم عمل السيرفر في',msg.guild.createdAt.toLocaleString())
  msg.channel.send(embed);
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


client.on('message', message => {
                    var prefix = "%";

           if (message.content.startsWith(prefix + "id")) {
                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
    .setAuthor(message.author.username, message.author.avatarURL) 
.addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
.addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField(': عدد الدعوات', inviteCount,false)
.setFooter("-")  
    message.channel.sendEmbed(id);
})
}
    

         
     });




client.on('message', message => {
  if (message.content.startsWith("%صوره")) {
      var mentionned = message.mentions.users.first();
  var Nizx;
    if(mentionned){
        var Nizx = mentionned;
    } else {
        var Nizx = message.author;
        
    }
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setImage(`${Nizx.avatarURL}`)
    message.channel.sendEmbed(embed);
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


  
client.on("message", (message) => {
if (message.content.startsWith("%ch")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(" `MANAGE_CHANNELS` لا يوجد لديك صلاحية ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

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




client.on("message", message => {
    var prefix = "%"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "min") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
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




















client.on('message' , async (message) => {
	var prefix = "%";
       if(message.content.startsWith(prefix + "clear")) {
           let args = message.content.split(" ").slice(1);
		   if(!message.member.hasPermission('MANAGE_MESSAGES')) return    message.channel.send('**لا يوجد لديك صلاحية لمسح الشات**');
 if (isNaN(args[0])) return message.channel.send('**Please supply a valid amount of messages to purge**');
  if (args[0] > 100) return message.channel.send('**Please supply a number less than 100**');
  message.channel.bulkDelete,message.channel.bulkDelete,message.channel.bulkDelete(args[0])
    .then(messages => message.channel.send(`**Successfully deleted \`${messages.size}/${args[0]}\` messages**`).then(message => message.delete({
      timeout: 10000
    }))) 
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




client.on("message", (message) => {
if (message.content.startsWith("%rv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});



  
  

    

client.on("message", (message) => {
    if (message.content.startsWith('%del')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("`MANAGE_CHANNELS` لا يوجد لديك صلاحية ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**لا توجد غرفة مثل هذا الاسم **').catch(console.error);
        channel.delete()
    }
});


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

client.on('message' , async (message) => {
       if(message.content.startsWith(`<@${client.user.id}>`)) {
              message.channel.startTyping()
 let responses = [
        'كيف يمكن اساعدك',
		
        'طول الله في عمري CJ معك الملك',
	   'تفضل ماذا تريد',
	   'كيفك',
	   'يقولك الشاعر الملك يبقى ملك',
	   
	   
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
   message.reply(fetched)
   message.channel.stopTyping()
       }
  
});


client.on('message',message =>{
    var prefix = "%";
    if(message.content.startsWith(prefix + 'topinv')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://www.egys7.com/wp-content/uploads/2015/10/natural-mirror-71967.jpg")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });

        client.on('message', message => {
          var prefix = '%';
          if (message.content.startsWith(prefix + 'help')) {
      let embed = new Discord.RichEmbed()
      .addField('%العامه' ,'     :earth_americas:  للحصول على قائمة  العامة :earth_americas: ')
      .addField('%الاداره' ,'     :crown:   للحصول على قائمة  الاداره :crown:  ')
      .setColor('RANDOM')
      .setTitle('═════ஜ۩۞۩ஜ══════════ஜ۩۞۩ஜ═════')
      message.channel.send(embed)
      }
  });


        client.on('message', message => {
          var prefix = '%';
          if (message.content.startsWith(prefix + 'الاداره')) {
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`لا يوجد لديك صلاحيه`)
      let embed = new Discord.RichEmbed()
      .addField('%ch' ,':microphone:انشاء روم صوتي:microphone:')
      .addField('%rv' ,':page_facing_up:انشاء شات كتابي:page_facing_up:')
      .addField('%del' ,':wastebasket:مسح الشات ومسح الروم الصوتي:wastebasket:')
      .addField('%mute' ,':zipper_mouth:لعمل ميوت لشخص يجيب عليك عمل رتبت Muted :zipper_mouth:')
      .addField('%unmute' ,':grinning:يتم فك الميوت عن الشخص يجيب عليك منشنته:grinning:')
      .addField('welcome' ,':wave:حتى البوت يرحب في الاشخاص يجيب عليك عمل شات باسمwelcome:wave:')
      .setColor('RANDOM')
      .setTitle('═════ஜ۩۞۩ஜ══════════ஜ۩۞۩ஜ═════')
      message.channel.send(embed)
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






client.on('message', message=>{
    if(message.content ===  prefix + 'leave') {
        if (message.author.id !== "310129588397277185") return message.reply(' هذا الأمر قفط لصاحب البوت و شكراًً ')
    message.guild.leave();
            }
});


 

 
  
  
client.login(process.env.BOT_TOKEN);
