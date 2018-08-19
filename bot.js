const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
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

client.on('message', message => {
  if (message.content === "%bo") {
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

        client.on('message', message => {
          var prefix = '%';
          if (message.content.startsWith(prefix + 'جديد')) {
      let embed = new Discord.RichEmbed()
      .addField('شي جديد' ,'الامر الجديد الي رح ينضاف لما تكتب الامر مع الاسم رح يطلعلك سكن الشخص في لعبه ماين كرافت')
      .setColor('RANDOM')
      .setTitle('**:envelope_with_arrow:هنا بكون موجود الاوامر الجديده الي انضافة في البوت:envelope_with_arrow:**')
      message.channel.send(embed)
      }
  });

        client.on('message', message => {
          var prefix = '%';
          if (message.content.startsWith(prefix + 'help')) {
      let embed = new Discord.RichEmbed()
      .addField('%العامه' ,'     :earth_americas:  للحصول على قائمة  العامة :earth_americas: ')
      .addField('%الاداره' ,'     :crown:   للحصول على قائمة  الاداره :crown:  ')
      .addField('%موسيقى' ,'     :musical_note:   للحصول على قائمة  الموسيقى :musical_note:  ')
      .addField('%العاب' ,'     :video_game: للحصول على قائمة الالعاب :video_game: ')
      .setColor('RANDOM')
      .setTitle('═════ஜ۩۞۩ஜ══════════ஜ۩۞۩ஜ═════')
      message.channel.send(embed)
      }
  });


        client.on('message', message => {
          var prefix = '%';
          if (message.content.startsWith(prefix + 'موسيقى')) {
      let embed = new Discord.RichEmbed()
      .addField('%play' ,'   :headphones:تشغيل الاغنيه باسم او برابط:headphones: ')
      .addField('%stop' ,'    :mute: ايقاف الاغنيه:mute:   ')
      .addField('%skip' ,'     :play_pause: تخطي الاغنيه :play_pause:  ')
      .addField('%pause' ,'    :clock1: ايقاف الاغنيه مؤقت:clock1:  ')
      .addField('%resume' ,'    :musical_note: تكملةالاغنيه:musical_note:  ')
      .addField('%queue' ,'    :pencil: اظهار قائمة التشغيل :pencil:   ')
      .addField('%np' ,'    :page_facing_up: اظهار الاغنية اللي انت مشغلها حاليا:page_facing_up:  ')
      .setColor('RANDOM')
      .setTitle('═════ஜ۩۞۩ஜ══════════ஜ۩۞۩ஜ═════')
      message.channel.send(embed)
      }
  });



        client.on('ready', function(){
          var ms = 10000 ;
          var setGame = ['%help','%دعوه','%help','%دعوه','%help'];
          var i = -1;
          var j = 0;
          setInterval(function (){
              if( i == -1 ){
                  j = 1;
              }
              if( i == (setGame.length)-1 ){
                  j = -1;
              }
              i = i+j;
              client.user.setGame(setGame[i],`https://www.twitch.tv/jokar_999`);
          }, ms);
      
      });


 

        client.on('message', message => {
          var prefix = '%';
          if (message.content.startsWith(prefix + 'الاداره')) {
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`لا يوجد لديك صلاحيه`)
      let embed = new Discord.RichEmbed()
      .addField('%ban' ,':hammer:طرد شخص من السيرفر مؤبد:hammer: ')
      .addField('%kick' ,':hammer_pick:اعطاء لشخص كيك:hammer_pick: ')
      .addField('%cv' ,':microphone:انشاء روم صوتي:microphone:')
      .addField('%ct' ,':page_facing_up:انشاء شات كتابي:page_facing_up:')
      .addField('%delet' ,':wastebasket:مسح الشات ومسح الروم الصوتي:wastebasket:')
      .addField('%mute' ,':zipper_mouth:لعمل ميوت لشخص يجيب عليك عمل رتبت Muted :zipper_mouth:')
      .addField('%unmute' ,':grinning:يتم فك الميوت عن الشخص يجيب عليك منشنته:grinning:')
      .addField('welcome' ,':wave:حتى البوت يرحب في الاشخاص يجيب عليك عمل شات باسمwelcome:wave:')
      .setColor('RANDOM')
      .setTitle('═════ஜ۩۞۩ஜ══════════ஜ۩۞۩ஜ═════')
      message.channel.send(embed)
      }
  });

        client.on('message', message => {
          var prefix = '%';
          if (message.content.startsWith(prefix + 'العامه')) {
      let embed = new Discord.RichEmbed()
      .addField('%دعوه' ,'يتم ارسال رساله لك في الخاص ويوجد بها رابط البوت')
      .addField('%server' ,'يعطيك معلومات السيرفر')
      .addField('%support' ,'رابط سيرفر الدعم الفني ')
      .addField('%ping' ,'يعطيك كم سرعة البنق')
      .addField('%جديد' ,'هذا الامر يعطيك الاشياء الجديد الي رح تنضاف الي البوت قبل ما تنضاف')
      .addField('%tg' ,'يترجم لك الى 40 لغه تريدها')
      .addField('%id' ,'يعطيك معلومات حسابك وقت عملك للحسب وقت دخولك للسيرفر وكم شخص جبت للسيرفر')
      .addField('%color' ,'هذا الامر يضفلك 138 لون')
      .addField('%صوره' ,'يعطيك صورت الشخص الي منشنتو')
      .addField('%report' ,'عمل ابلاغ على شخص ويجيب عمل شات في اسم{report}')
      .setColor('RANDOM')
      .setTitle('═════ஜ۩۞۩ஜ══════════ஜ۩۞۩ஜ═════')
      message.channel.send(embed)
      }
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

 client.on('message', message => {
  if(!message.channel.guild) return;
if (message.content.startsWith('%ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms 📶 ")
.addField('**WebSocket:**',api + " ms 📶 ")
message.channel.send({embed:embed});
}
});

        client.on('message', message => {
          var prefix = '%';
          if (message.content.startsWith(prefix + 'العاب')) {
      let embed = new Discord.RichEmbed()
      .addField('%عقاب' ,'لعبة العقاب')
      .addField('%حكم' ,'لعبة الحكم')
      .addField('%مريم' ,'لعبة مريم')
      .addField('%صراحه' ,'لعبة الصراحه')
      .addField('%خواطر' ,'لعبة خواطر')
      .addField('%اسئلني' ,'لعبه اسئلني يعطيك سؤال يجيب عليك الجواب عليه خلال دقيقه')
      .setColor('RANDOM')
      .setTitle('═════ஜ۩۞۩ஜ══════════ஜ۩۞۩ஜ═════')
      message.channel.send(embed)
      }
  });




  
  
  
  
  
  
  
  
  

  client.login(process.env.BOT_TOKEN);
