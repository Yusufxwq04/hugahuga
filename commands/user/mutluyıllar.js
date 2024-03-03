const { MessageEmbed } = require('discord.js');
module.exports = {
    config: {
        name: "mutluyıllar",
        aliases: ["christmas", "muah"],
    },
    run: async (bot, message, args) => {

        const user = message.mentions.members.first()
        if(!user) return message.reply(`:x: | ${message.member} yeni yılını kutlayacağın kişiyi etiketlemedin!`)

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`${user}, ${message.member} senin yeni yılını kutladı!`)
            .setImage("https://i.pinimg.com/564x/49/0f/15/490f15fd2503279f06a9c0b322187089.jpg")

        return message.channel.send(embed);

    }
}