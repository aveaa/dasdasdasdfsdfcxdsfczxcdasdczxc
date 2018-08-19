const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
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






  
  
  
  
  
  
  
  
  

  client.login(process.env.BOT_TOKEN);
