const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `yardım`,
        aliases: [`help`, `scarakoş`],
    },
    run: async (bot, message, args) => {

    
        

        let Görseller = [
        "https://i.pinimg.com/564x/be/d0/ba/bed0ba36ef572fe44e749ba3a943da46.jpg",
        "https://i.pinimg.com/564x/9a/55/b3/9a55b3068c2c534de8d90e91e359c349.jpg",
        "https://i.pinimg.com/564x/c4/2f/72/c42f72df56e0ed2076aa74646e00f469.jpg",
        "...",
        ]
        
        let Görsel = Görseller[Math.floor(Math.random() * Görseller.length)];
        
        
           

        let embed = new MessageEmbed()
            .setColor(`RANDOM`)
            .setImage(Görsel)
            .setTitle('Yae Miko Yardıma geldi!')
            .setDescription(` # <:cny_bf:1165440891100606556> Hakkımda
> Ben *taha* tarafından geliştirilen **scarameow**! Sanırım anlamadığın bir şeyler var.
            
            # <:Xiao_Indifferent:1165553525036679200> Komutlarımı öğren!
> **!komutlar** yazarak komutlarımı öğrenebilirsin!
            
            # <:_blink:1165454832648327299> Destek Sunucumuza Gel
> **https://discord.gg/UarWSY7tVx** URL'li sunucumuza gelerek bizden destek alabilirsin...`)
            .setTimestamp()
         
            .setFooter(`Umarım sorunun çözülür...`, bot.user.displayAvatarURL())

            

            
            

 message.channel.send(embed).then(m => (m.delete({timeout: 15000})));


    }
}