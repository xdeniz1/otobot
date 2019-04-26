const Discord = require("discord.js")
exports.run = (bot, message) => {
  const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`**${guild.name}** - ÜYE SAYISI : **${guild.memberCount}**`, guild.id);
      embed.setColor('#D97634')
      embed.setTitle('Royce  |♥ Ailemiz ✿ ')
      embed.setDescription(`Büyük bir ailedeyiz !. Ailemde **${bot.guilds.size}** kadar sunucu var ! (Royce BOT)`)
      message.delete();
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['aile', 'ailemiz', 'family'],
  permLevel: 4,
  kategori: 'kullanıcı'
};

exports.help = {
  name: "sunuculiste",
  aciklama: "Sunucunun Tüm Üyelerini ve Sunucularını Gösterir.",
  kullanim: "ailemiz"
};