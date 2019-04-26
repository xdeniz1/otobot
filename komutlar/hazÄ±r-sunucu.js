const Discord = require('discord.js');


exports.run = (client, message, args) => {
     if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Komut giriişi').setDescription('Gerekli Dosaylar Kurulsunmu?.').setFooter('Bu eylemi onaylıyorsan "evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
          message.guild.createChannel(`ÖNEMLİ KANALLAR`, 'category');
          message.guild.createChannel(`➡kurallar`);
        message.guild.createChannel(`➡duyuru`);
            message.guild.createChannel(`Sohbet Kanalları`, 'category');
        message.guild.createChannel(`➡Sohbet`);
          message.guild.createChannel(`➡bot-komut`);
              message.guild.createChannel(`mod-log`);
          message.guild.createChannel(`Ses Kanalları`, 'category')
        message.guild.createChannel(`➡ѕoнвeт 1`, 'voice');
          message.guild.createChannel(`➡ѕoнвeт 2`, 'voice');
        message.guild.createChannel(`➡ѕoнвeт 3`, 'voice');
        message.guild.createChannel(`➡ѕoнвeт 4`, 'voice');
        message.guild.createChannel(`➡ѕoнвeт 5`, 'voice');
        message.guild.createChannel(`  ♫ Müzik Odası`, 'voice');


  



        message.channel.send(`Gerekli Kanalları Oluşturdum.`);
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'hazır-sunucu',
  description: 'Bot İçin gerekli kanlları kurar.',
  usage: '*hazır-sunucu'
};