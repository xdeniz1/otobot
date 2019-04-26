const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const renkler = require('./renkler.json');
require('./util/eventLoader')(client);

const size    = renkler.colors;
const rainbow = new Array(size);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

for (var i=0; i<size; i++) {
  var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
  var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg

  rainbow[i] = '#'+ red + green + blue;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;
const servers = renkler.servers;

function changeColor() {
  for (let index = 0; index < servers.length; ++index) {		
    client.guilds.get(servers[index]).roles.find('name', renkler.roleName).setColor(rainbow[place])
		.catch(console.error);
		
    if(renkler.logging){
      console.log(`[RenkDeğiştirici]  ${rainbow[place]} renk kodu ile  ${servers[index]} sunucudaki rolün rengini değiştirdi `);
    }
    if(place == (size - 1)){
      place = 0;
    }else{
      place++;
    }
  }
}

client.on('ready', () => {
  console.log(`Gkküşağı saldırısı başladı. ${client.user.username}!`);
  if(renkler.speed < 60000){console.log("Hızı sakın değiştirmeyin değiştirirseniz BOT'unuz ban yiyecektir. 1 Dakikada Rol Rengi Değişir"); process.exit(1);}
  setInterval(changeColor, renkler.speed);
});



client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content === 'Nasılsın') {
    msg.channel.send('İyiyim sen nasılsın ?');
    msg.react('😁')
  }
});

client.on('message', msg => {
  if (msg.content === 'https://discord.gg/') {
   msg.delete(30)
   msg.channel.send('Reklamı Sildim .O elini indir hareket yapma ! :right_facing_fist: :dash: :nauseated_face: ');
  }
});

// Saat Komutu //

client.on('message', async message => {
  if (message.content.toLowerCase() === prefix + 'saat') {
    message.channel.send(new Discord.RichEmbed().setDescription(`**:flag_tr: Saati:** ***${moment().format('HH:mm:ss')}***`).setColor('RANDOM').setTitle('Anlık Türkiye Saati'))    }
})


client.on('message', msg => {
  if (msg.content ===prefix + 'para') {
    msg.channel.send('Al O Parayı Dür Bük Ananın Amına Sok OÇ :money_mouth:  ahahahahaha');
  }

});

// Değişen Oyun //

client.on("ready", async message => {
  var Activity = [
      
      "» r!yardım + r!dc «",
      
      " » r!yardım + r!dc «",
      
      "Yapımcım » Meav «",

      " » r!yardım + r!dc «",
    
      " » Rejpo'ya emekleri için thx «",

      `  »${client.guilds.size} Sunucu İçin | Teşekürler.. «`,

  ];

  setInterval(function() {

      var random = Math.floor(Math.random()*(Activity.length-0+1)+0);

      client.user.setActivity(Activity[random], { type: 'LISTENING' });
      }, 6 * 3000);
})

client.on('message', msg => {
  if (msg.content === "sa") {
    msg.channel.send('**ALEYKÜM SELAM**');
  }
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);