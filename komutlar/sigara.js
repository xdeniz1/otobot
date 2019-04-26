exports.run = async (client, message, level) => {
    message.channel.send('**Sağ elini sağ ön cebine sokar ve "PARLAMENT" markalı sigarasını çıkarıp zipposu ile yakar.**').then(async msg => {
    setTimeout(() => {
      msg.edit('🚬');
    }, 1000);
    setTimeout(() => {
      msg.edit('🚬 ☁ ');
    }, 1500);
    setTimeout(() => {
      msg.edit('🚬 ☁☁ ');
    }, 2000);
    setTimeout(() => {
      msg.edit('🚬 ☁☁☁ ');
    }, 2500);
    setTimeout(() => {
      msg.edit('🚬 ☁☁');
    }, 3000);
    setTimeout(() => {
      msg.edit('🚬 ☁');
    }, 3500);
    setTimeout(() => {
      msg.edit('🚬 ');
    }, 4000);
    setTimeout(() => {
      msg.edit(`Sigaran bitti.`);
    }, 4500);
  });
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: "sigara",
    description: "Hergün vuruyom guru guru guvara! :dab:",
    usage: "sigara"
  };