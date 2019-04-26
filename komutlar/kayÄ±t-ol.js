const Discord = require('discord.js');  

exports.run = function(client, message, args) {         
  
  var isim = args.slice(0).join(' ');
  
  if(!isim) return message.channel.send(':x: | İsminizi Girmelisiniz')
  
  if (message.channel.id !== '490618903693754370') return;   
      
  var kayıtkanal = client.channels.get('490618903693754370')
  
  var alrol = message.guild.roles.get('490618903693754370');   
      
  var silrol = message.guild.roles.get('490618903693754370');   
      
  message.member.removeRole(silrol);   
      
  message.member.addRole(alrol);   
      
  message.delete()   
      
  message.channel.send(':busts_in_silhouette: | Kayıt Oldunuz').then(msg => msg.delete(100));                                                         
  
  kayıtkanal.send(`${message.author.tag} adlı kullanıcı kayıt oldu!\n  İsim: ${isim}`)
  
  message.member.setNickname('ROYCE | ' + isim)
} 

exports.conf = {   
  enabled: true,   
  guildOnly: false,   
  aliases: ['kaydol2'],   
  permLevel: 0 
};  

exports.help = {   
  name: 'kayıtol-----------pasif',   
  description: 'sdas.',   
  usage: 'kayıt-ol' 
};