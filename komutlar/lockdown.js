const ms = require('ms');

exports.run = (client, message, args, tools) => {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Üzgünüm , Kanalı kilitleme ve kilidi açma yetkiniz yok')
        .then(msg => msg.delete({
            timeout: 10000
        }));
    if (!client.lockit) client.lockit = [];
    let time = args.join(' ');
    let validUnlocks = ['release', 'unlock'];
    if (!time) return message.channel.send('Kilitleme süresini bir saat, dakika veya saniye olarak ayarlamanız gerekir. Fonksiyonlar : second min hour');

    if (validUnlocks.includes(time)) {
        message.channel.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: null
            })
            .then(() => {
                message.channel.send('Kilit kaldırıldı. Mesaja açık !');
                clearTimeout(client.lockit[message.channel.id]);
                delete client.lockit[message.channel.id];
            })
            .catch(error => {
                console.log(error);
            });
    } else {
        message.channel.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: false
            })
            .then(() => {
                message.channel.send(`Bu kanal kilitlenmiştir. Süre: ${ms(ms(time), { long:true })}`)
                    .then(() => {

                        client.lockit[message.channel.id] = setTimeout(() => {
                            message.channel.overwritePermissions(message.guild.id, {
                                    SEND_MESSAGES: null
                                })
                                .then(message.channel.send('Kilit kaldırıldı. Mesaja açık !'))
                                .catch(console.error);
                            delete client.lockit[message.channel.id];
                        }, ms(time));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            });
    }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['l'],
  permLevel: 4
};

exports.help = {
  name: 'kanalıkilitle',
  description: 'Kanalı kilitler',
  usage: 'load <komut adı>'
};
