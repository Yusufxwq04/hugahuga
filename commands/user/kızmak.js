const { MessageEmbed } = require('discord.js');
module.exports = {
    config: {
        name: "kız",
        aliases: ["angry", "kızmak", "kızdır"],
    },
    run: async (bot, message, args) => {

        const user = message.mentions.members.first()
        if(!user) return message.reply(`:x: | ${message.member} kızacağın kişiyi etiketlemedin!`)

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`${user}, ${message.member} sana kızdı, kaç bence!`)
            .setImage("https://i.pinimg.com/originals/d2/7c/7d/d27c7d3ce2a5524d1d9b2683369a32f8.gif")

        return message.channel.send(embed);

    }
}
