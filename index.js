const { Client, Collection } = require('discord.js');

const client = new Client();
const { token } = require(`./botconfig.json`);
const { prefix } = require(`./config.json`);
[`aliases`, `commands`].forEach(x => client[x] = new Collection());
["command", "events"].forEach(x => require(`./handlers/${x}`)(client));
client.login(token)




client.on('ready', () => {

    // Oynuyor Kısmı
    
        var actvs = [
          `${prefix}yardım ${client.guilds.cache.size} sunucuyu`,
          `${prefix}yardım ${client.users.cache.size} Kullanıcıyı`, 
          ` Vay canına! Neyin hoşuma gittiğini gerçekten iyi biliyorsun.`, 
      ];
      
      client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'LISTENING' });
      setInterval(() => {
          client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'LISTENING'});
      }, 15000);
      
    
        console.log ('_________________________________________');
        console.log (`Kullanıcı İsmi     : ${client.user.username}`);
        console.log (`Sunucular          : ${client.guilds.cache.size}`);
        console.log (`Kullanıcılar       : ${client.users.cache.size}`);
        
        console.log (`Durum              : Bot Çevrimiçi!`);
        console.log (`Parsher Youtube    : Gelişmiş bot alt yapı!`);
        console.log ('_________________________________________');
      
      });
  