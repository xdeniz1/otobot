const Discord = module.require("discord.js");
const client = new Discord.Client();
const randomnum = require("unique-random");
const rand = randomnum(1, 6);
module.exports.run = async (bot, message, args) => {


    await message.channel.send(":game_die: Zar atılıyor... :game_die: ")
        .then(message => message.edit(`:game_die:Zar Sonucu :game_die:  **${rand()}**`));

    }

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['zar', 'dice'],
 permLevel: 0
      };
    

exports.help = {
    name: "zar",
    description: "Zar atmanızı sağlar ve 1den 6ya kadar rastgele bir sonuç alırsınız",
    usage: "zar"
    };
            