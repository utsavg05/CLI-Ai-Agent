#!/usr/bin/env node

import dotenv from "dotenv";
import chalk from "chalk";
import figlet from "figlet";
import { Command } from "commander";
import { login } from "./commands/auth/login.js";

dotenv.config();

async function main() {
    // display banner
    console.log(
        chalk.cyan(
            figlet.textSync("Neo CLI", {
                font: "Standard",
                horizontalLayout: "default"
            })
        )
    )

    console.log(chalk.red("A cli based AI tool \n"));

    const program = new Command("neo");

    program.version("0.0.1")
        .description("A cli based AI agent")
        .addCommand(login)

    program.action(() => {
        program.help();
    })

    program.parse();
}

main().catch((error) => {
    console.error(chalk.red("Error running Neo CLI: "), error);
    process.exit(1);
});