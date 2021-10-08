const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('what will it do'),
    async execute(interaction) {
        await interaction.reply("😂😂");
    }
};