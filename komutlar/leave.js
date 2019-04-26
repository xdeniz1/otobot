exports.run = async (client, message) => {
    if (!message.member.voiceChannel) { return message.channel.send("Herhangi bir sesli odada değilsin. Gel bunu yüzüme söyle."); }
  
    message.member.voiceChannel.leave();
    return message.channel.send(`Ben bu odadan gidiyorum. ${message.member.voiceChannel} odadan ayrıldım.`);
  };
  
  exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: ["odadancik","odadanayril","odadansiktirgit"],
    permLevel: 0,
    botPerms: [],
    requiredFuncs: [],
  };
  
  exports.help = {
    name: "odadanayrıl",
    description: "Bulunduğu odadan gider.",
    usage: "",
    usageDelim: "",
  };