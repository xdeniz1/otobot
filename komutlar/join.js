exports.run = async (client, message) => {
  const voiceChannel = message.member.voiceChannel;
  if (!message.member.voiceChannel) { return message.channel.send("Öncelikle bir sesli odaya giriş yapman gerekiyor."); }

  const permissions = message.member.voiceChannel.permissionsFor(message.guild.me);
  if (permissions.has("CONNECT") === false) { return message.channel.send("Odaya bağlanmak için yeterli iznim yok."); }
  if (permissions.has("SPEAK") === false) { return message.channel.send("Odaya girip susturuyorsun! Çok vicdansızsın."); }

  message.member.voiceChannel.join();
  return message.channel.send(`Söylediğin **${message.member.voiceChannel}** isimli odaya geliyorum.`);
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["seriközgetir"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "odayagir",
  description: "Bot bulunduğunuz odaya girer.",
  usage: "",
  usageDelim: "",
};