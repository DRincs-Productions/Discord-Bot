import { Express } from 'express';
import { logInfo, logTest } from '../utility/Logger';

export class ApiController {
    constructor(app: Express) {
        app.get("/api/", (req, res) => {
            logInfo("Api home")
            res.send("🤖 This is the drincs-discord-bot")
        })

        app.get("/api/awakens", (req, res) => {
            logInfo("Api awakens")
            res.send("🤖 This is a harsh awakening")
        })

        // test
        app.get("/api/test/logger", (req, res) => {
            res.send("🤖" + logTest())
        })
    }
}