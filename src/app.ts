import { Client } from "discord.js";
import dotenv from "dotenv";

const { DISCORD_TOKEN } = process.env;

const client = new Client({
    intents: ["Guilds", "GuildMessages", "DirectMessages", "GuildMembers", "GuildEmojisAndStickers"],
});

client.once("ready", () => {
    console.log("Discord bot is ready! 🤖");
});

dotenv.config();


if (DISCORD_TOKEN) {
    client.login(DISCORD_TOKEN);
}
else {
    console.log("Missing environment variables")
}
