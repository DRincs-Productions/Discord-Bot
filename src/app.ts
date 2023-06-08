import { Client } from "discord.js";
import dotenv from "dotenv";
import { addGIFReactionOnNewsPost } from "./service/ReactionService";
import { logError, logInfo } from "./utility/Logger";

// env
dotenv.config();
const { DISCORD_BOT_TOKEN } = process.env;

const client = new Client({
    intents: ["Guilds", "GuildMessages", "DirectMessages", "GuildMembers", "GuildEmojisAndStickers"],
});

client.once("ready", () => {
    logInfo("Discord bot is ready! 🤖");
});

client.on('message', (msg: any) => {
    addGIFReactionOnNewsPost(msg)
});

try {
    if (DISCORD_BOT_TOKEN) {
        client.login(DISCORD_BOT_TOKEN);
    }
    else {
        logError("Missing environment variables")
    }
}
catch (e) {
    logError("Error into login")
}

// * for firebase Hosting (now not used)
// exports.app = firebase_functions.https.onRequest(client);