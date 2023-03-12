const c = require('discord.js');
const { keep_alive } = require("./keep_alive");
const { Client, Intents,MessageEmbed } = require('discord.js');
const client = new Client({ intents: 7753});

client.on("ready", () => {
  console.log(`✅ | Logged as ${client.user.tag}`);
})
client.on('guildMemberUpdate', async (oldMember, newMember) => {
    let idchannel = "1046507339450155039"// أيدي الروم
    let boostColor = '#00fffb';// هنا اختار لون الامبد
    if (!oldMember.premiumSince && newMember.premiumSince) {
        let embed = new MessageEmbed()
        .setColor(boostColor)
        .setDescription(`${newMember.user.tag} لديك مميزات خاصة. بعد دعمك اللسيرفر ببوست. شكرا لك 💖 `)
        .setImage(`https://images-ext-1.discordapp.net/external/fZGVIIB0RH1LxPacA8OfFHc_8YpMV5Y9uVdH5Jem1es/https/probot.media/kYBKdSyYQi.gif`);//هنا تقدر تغير الرسالة
        return  client.channels.cache.get(idchannel).send(embed)
    }
    if (oldMember.premiumSince && newMember.premiumSince) {
        let embed = new MessageEmbed()
        .setColor(boostColor)
        .setDescription(`${newMember.user.tag} لديك مميزات خاصة. بعد دعمك اللسيرفر ببوست. شكرا لك على البوست الثاني💖`)
          .setImage(`https://images-ext-1.discordapp.net/external/fZGVIIB0RH1LxPacA8OfFHc_8YpMV5Y9uVdH5Jem1es/https/probot.media/kYBKdSyYQi.gif`);//هنا تقدر تغير الرسالة
        return client.channels.cache.get(idchannel).send(embed)
    }
});
client.login(process.env.token)
