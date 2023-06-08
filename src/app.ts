import { Client } from "discord.js";
import dotenv from "dotenv";
import { logError, logInfo } from "./utility/Logger";

const { DISCORD_TOKEN } = process.env;

const client = new Client({
    intents: ["Guilds", "GuildMessages", "DirectMessages", "GuildMembers", "GuildEmojisAndStickers"],
});

client.once("ready", () => {
    logInfo("Discord bot is ready! 🤖");
});

dotenv.config();

if (DISCORD_TOKEN) {
    client.login(DISCORD_TOKEN);
}
else {
    logError("Missing environment variables")
}
