
const { MessageEmbed } = require('discord.js');
module.exports = {
    config: {
        name: "slap",
        aliases: ["şaplak", "pat", "tokat"],

    
    },

        

    run: async (bot, message, args) => {

     



        const user = message.mentions.members.first()
        if(!user) return message.reply(`:x: | ${message.member} tokat atacağın kişiyi etiketlemedin!`)

        let Görseller = [
            "https://i.pinimg.com/originals/ba/e4/6f/bae46fdd0fca38a4f9e02ecc4480b62f.gif",
            "https://media.tenor.com/Sv8LQZAoQmgAAAAM/chainsaw-man-csm.gif",
            "https://media.tenor.com/yJmrNruFNtEAAAAM/slap.gif",
            "https://media.tenor.com/E3OW-MYYum0AAAAM/no-angry.gif",
            "https://media.tenor.com/Ws6Dm1ZW_vMAAAAM/girl-slap.gif",
            "https://media.tenor.com/HTHoXnBc400AAAAM/in-your-face-slap.gif",
            "https://media.tenor.com/MXZGFeabIIwAAAAM/taiga-toradora.gif",
            "https://media.tenor.com/zdHAYZowRSMAAAAM/chiyuki-fujito-slap.gif",
            "https://media.tenor.com/Up9LqtY-AuIAAAAM/anime-chika-fujiwara.gif",
            "https://media.tenor.com/uJAu8XAVg5kAAAAM/anime-slap.gif",
            
         
            ]
            
            let Görsel = Görseller[Math.floor(Math.random() * Görseller.length)]

        const embed = new MessageEmbed()

       

            .setImage(Görsel)
            .setColor("RANDOM")
            .setDescription(`${user}, ${message.member} seni şaplakladı!`)
            

        return message.channel.send(embed);

    }
}



