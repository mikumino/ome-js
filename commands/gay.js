const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gaytest')
        .setDescription("Find out if you're gay!"),
    async execute(interaction) {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId("yes")
                    .setLabel("Yes!")
                    .setStyle('SUCCESS'),
                new MessageButton()
                    .setCustomId("no")
                    .setLabel("No!!!")
                    .setStyle('DANGER'),
            );
        await interaction.reply({content: "Are you sure you want to know?", components: [row]});

        const filter = i => {
            return interaction.user.id === i.user.id;
        }
        const collector = interaction.channel.createMessageComponentCollector({filter, max:1,});
        collector.on("end", async i => {
            const choice = i.first().customId;
            if (choice === "yes") {
                await interaction.followUp("yeah");
            }
            else if (choice === "no") {
                await interaction.followUp("bitch");
            }
            row.components[0].setDisabled(true);
            row.components[1].setDisabled(true);
            await i.first().update({content: "Are you sure you want to know?", components: [row]});
        });
    }
};