const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `kahkaha`,
        aliases: [`anır`],
    },
    run: async (bot, message, args) => {

        let embed = new MessageEmbed()
            .setColor(`RANDOM`)
            .setDescription(`**Gülüyorsun**! 💕💕`)
            .setTimestamp()
            .setImage('https://i.pinimg.com/originals/95/73/bc/9573bc84713c2c66174e0cbcf64d6ea0.gif')
            .setFooter(`Çok iyi gülüyorsun!`, bot.user.displayAvatarURL())

        message.channel.send(embed);
    }
}