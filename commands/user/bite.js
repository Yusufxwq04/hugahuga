
const { MessageEmbed } = require('discord.js');
module.exports = {
    config: {
        name: "bite",
        aliases: ["ısırık", "ısır", "ham"],
    },
    run: async (bot, message, args) => {

        const user = message.mentions.members.first()
        if(!user) return message.reply(`:x: | ${message.member} ısıracağın kişiyi etiketlemedin!`)

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`${user}, ${message.member} seni ısırdı!`)
            .setImage("https://i.pinimg.com/originals/06/f8/86/06f88667b86a701b1613bbf5fb9205e9.gif")

        return message.channel.send(embed);

    }
}
