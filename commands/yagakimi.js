const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fs = require ('fs');
const readline = require('readline');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('yagakimi')
        .setDescription('Sends a random Bloom Into You photo.'),
    async execute(interaction) {
        const array = fs.readFileSync('./commands/images/yagakimi/links.yagakimi').toString().split('\n');
        let img = array[Math.floor(Math.random()*array.length)];
        const embed = new MessageEmbed()
            .setTitle('A Bloom Into You photo for you:')
            .setImage(img);
        
        await interaction.reply({embeds: [embed]});
    },
};