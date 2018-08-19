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








  
  
  
  
  
  
  
  
  

  client.login(process.env.BOT_TOKEN);
