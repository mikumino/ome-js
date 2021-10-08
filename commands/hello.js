const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('i say hello'),
    async execute(interaction) {
        await interaction.reply("Hello!");
    }
};