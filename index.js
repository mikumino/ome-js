// Require the necessary discord.js classes
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');
const fs = require('fs');
// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Make an array and fill it with the events
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    // For events called only once
    // Takes an event name, optional arguments that fill the
    // args array, and executes the event with passed args
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    }
    // Same as above but can be triggered multiple times
    else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

// Makes a Collection of commands, like a Map but better
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}



client.login(token);