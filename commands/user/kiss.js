
const { MessageEmbed } = require('discord.js');
module.exports = {
    config: {
        name: "öp",
        aliases: ["kiss", "öpücük", "muah"],
    },
    run: async (bot, message, args) => {

        const user = message.mentions.members.first()
        if(!user) return message.reply(`:x: | ${message.member} öpeceğin kişiyi etiketlemedin!`)

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`${user}, ${message.member} seni öptü!`)
            .setImage("https://i.pinimg.com/originals/32/d4/f0/32d4f0642ebb373e3eb072b2b91e6064.gif")
           
        return message.channel.send(embed);

    }
}
