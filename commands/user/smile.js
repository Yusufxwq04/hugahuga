const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `gül`,
        aliases: [`smile`, `gülümse`],
    },




      
    run: async (bot, message, args) => {

        let Görseller = [
            "https://media1.tenor.com/m/TMCkgse3myIAAAAd/akebi-chan-komichi.gif",
            "https://media1.tenor.com/m/X4tchZoJLIsAAAAC/anime-smile-hanako.gif",
            "https://media1.tenor.com/m/KASKTaO4YvsAAAAC/my-dress-up-darling-anime-smile.gif",
            "https://media1.tenor.com/m/TMCkgse3myIAAAAd/akebi-chan-komichi.gif",
            "https://media.tenor.com/_cO0DJlVTe4AAAAM/smile-cute.gif",
            "https://media1.tenor.com/m/h-nK-5aA7YYAAAAC/happy-anime.gif",
            "https://media1.tenor.com/m/mTbqykLo0_oAAAAd/kawai-smile.gif",
            "https://media.tenor.com/IjkTXhdSVsQAAAAM/anime-hibike-euphonium.gif",
            "https://media.tenor.com/aLPboFIM8K0AAAAM/smile-wave.gif",
            "https://media.tenor.com/hQ8qWKnum8YAAAAM/anime-trinity-seven.gif",
            "...",
            ]
            
            let Görsel = Görseller[Math.floor(Math.random() * Görseller.length)];

            
        let embed = new MessageEmbed()
            .setColor(`RANDOM`)
            .setDescription(`**Gülüyorsun**! 💕💕`)
            .setTimestamp()
            .setImage(Görsel)
            .setFooter(`Çok iyi gülüyorsun!`, bot.user.displayAvatarURL())

           
    

        message.channel.send(embed);
    }
}