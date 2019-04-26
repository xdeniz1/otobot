const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`ROYCE BOT`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(`ROYCE BOT - Yardım`, `\n:white_small_square: | **!!!yetkili** : Sunucuyu Yönetmek için Kullanılan Komutlar !\n\:white_small_square: | **!!!eğlence**: Kullanıcılar için eğlence komutları.\n:white_small_square: | **!!!müzik**: Müzik Komutları BAKIMDA ..\n:white_small_square: | **!!!minecraft**: Minecraft oyunu ile ilgili komutlar.\n:white_small_square: | **!!!botkomutları**: Bot komutlarını gösterir \n:white_small_square: | **!!!nsfw**:+18 Fotoğraf/GIF komutlarını listeler.\n:white_small_square: | **!!!sunucukomutları**: Sunucu ile alakalı komutları sıralar.`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yardım22', 'komutlar','help'],
    permLevel: 0,
      kategori:"KODLAMA ASAMASINDA"

  };
  
  exports.help = {
      name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };