import { Client } from "discord.js";
import dotenv from "dotenv";
import { addGIFReactionOnNewsPost } from "./service/ReactionService";
import { logError, logInfo } from "./utility/Logger";

let firebase_functions = require("firebase-functions");

// env
dotenv.config();
const { DISCORD_TOKEN } = process.env;

const client = new Client({
    intents: ["Guilds", "GuildMessages", "DirectMessages", "GuildMembers", "GuildEmojisAndStickers"],
});

client.once("ready", () => {
    logInfo("Discord bot is ready! 🤖");
});

client.on('message', (msg: any) => {
    addGIFReactionOnNewsPost(msg)
});

if (DISCORD_TOKEN) {
    client.login(DISCORD_TOKEN);
}
else {
    logError("Missing environment variables")
}

// * for firebase Hosting (now not used)
exports.app = firebase_functions.https.onRequest(client);