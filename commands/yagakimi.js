const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const booru = require('booru');

module.exports = {
    data : new SlashCommandBuilder()
        .setName('yagakimi')
        .setDescription('Sends a random Nakatani-sensei Bloom into You illustration.'),

    async execute(interaction) {
        booru.search('safebooru', ['yagate_kimi_ni_naru', 'nakatani_nio'], {limit: 1, random: true})
            .then(posts => {
                for (let post of posts) {
                    const embed = new MessageEmbed()
                        .setTitle('A random Bloom into You image:')
                        .addFields(
                            { name: 'Post link:', value: post.postView }
                        )
                        .setImage(post.fileUrl);
                    interaction.reply({embeds: [embed]});
                }
            })
    },
};