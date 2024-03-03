const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `komutlar`,
        aliases: [`komut`, `komuts`],
    },
    run: async (bot, message, args) => {

        let embed = new MessageEmbed()
            .setColor(`RANDOM`)
            .setImage('https://i.pinimg.com/564x/07/97/2a/07972af618e3ea08864f7ebaa17056b1.jpg')
            .setTitle('Selam! işte komutlarım:')
            .setDescription(`** 
        !shy,
        !slap, !yardım,
        !kiss,  !slap,
        !bite, !shy,
        !ban,  !clear, 
        !kick,  !unban
!mutluyıllar   !smile,
    !kahkaha,  
                **`)
            .setTimestamp()
            .setThumbnail('https://i.pinimg.com/originals/38/5f/7f/385f7f2c34aa8b0c4766e316bd131c8a.gif')
            
            .setFooter(`Haydi komutlarımı kullan! Meow~...`)

        message.channel.send(embed);
    }
}