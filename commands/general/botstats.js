const moment = require('moment');
require('moment-duration-format');
const Discord = require('discord.js');

exports.run = async (client, message, args, guildConf) => {

    var duration = moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]');

    const embed = new Discord.MessageEmbed()
        .setColor(client.config.embed.color)
        .setTitle('Bot Stats')
        .addField(`Memory Usage`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
        .addField(`Uptime`, duration)
        .addField(`Users`, client.usersSize().toLocaleString())
        .addField(`Servers`, client.guildsSize().toLocaleString())
        .addField(`Channels`, client.channelsSize().toLocaleString())
        .addField(`Discord.js`, `v${Discord.version}`)
        .addField(`Node`, process.version)
        .setFooter(client.config.embed.footer);
    embed.setTimestamp();

    await message.channel.send(embed);
    return;

}

module.exports.help = {
    name: "botstats",
    description: "Checkout the stats regarding the bot",
    dm: true,
    aliases: []
}