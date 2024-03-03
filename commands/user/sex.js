const { MessageEmbed } = require('discord.js');
module.exports = {
    config: {
        name: "sex",
        aliases: ["şaplak", "pat", "tokat"],

    
    },

        

    run: async (bot, message, args) => {

     



        const user = message.mentions.members.first()
        if(!user) return message.reply(`:x: | ${message.member} tokat atacağın kişiyi etiketlemedin!`)

        let Görseller = [
            "https://c.tenor.com/ot4JRyp3UrUAAAAd/tenor.gif",
            
            ]
            
            let Görsel = Görseller[Math.floor(Math.random() * Görseller.length)]

        const embed = new MessageEmbed()

       

            .setImage(Görsel)
            .setColor("RANDOM")
            .setDescription(`${user}, ${message.member} seninle sex yapmak istiyor!!`)
            

        return message.channel.send(embed);

    }
}
