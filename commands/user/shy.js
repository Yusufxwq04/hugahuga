const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `utan`,
        aliases: [`shy`, `kızar`],
    },
    run: async (bot, message, args) => {


        let Görseller = [
            "https://i.pinimg.com/originals/5a/61/e2/5a61e24310182aa78ca30254508a286a.gif",
            "https://i.pinimg.com/originals/56/e3/7c/56e37cfef40f403e6ac5bf0f283207e6.gif",
            "https://i.pinimg.com/originals/cd/ea/61/cdea614ad72172715a78258bb0dedc63.gif",
            "https://i.pinimg.com/originals/b9/55/c2/b955c2a667b16f857aae3785939a1f89.gif",
            "https://i.pinimg.com/originals/07/6e/aa/076eaaa7493fa239c306be36df58ad5b.gif",
            "https://i.pinimg.com/originals/7b/6e/22/7b6e2264e1e041f706d264a7f41c694f.gif",
            "https://i.pinimg.com/originals/d7/c3/0e/d7c30e46a937aaade4d7bc20eb09339b.gif",
            "https://i.pinimg.com/originals/1a/45/a1/1a45a1a56f2de59a23b889fc8b9908e5.gif",
            "https://i.pinimg.com/originals/e4/34/03/e43403ef146f9451013bb7662cd7e229.gif",
            "https://i.pinimg.com/originals/c6/a8/4b/c6a84b02a78d84e9d0f0cc43ee6b6811.gif",
            
         
            ]
            
            let Görsel = Görseller[Math.floor(Math.random() * Görseller.length)]

        let embed = new MessageEmbed()
            .setColor(`RED`)
            .setDescription(`Utandın! 🍚`)
            .setTimestamp()
            .setImage(Görsel)
            .setFooter(`Hadi ama utanılacak birşey yok!`, bot.user.displayAvatarURL())

        message.channel.send(embed);
    }
}