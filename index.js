// index.js

// process.argv captures whatever you type in the terminal.
const args = process.argv.slice(2);
const command = args[0];
const taskArgument = args[1];

// 1. Check if the user didn't provide a command
if (!command) {
    console.log("Welcome to Task Tracker CLI!");
    console.log("Usage: node index.js [add|list|update|delete]");
    process.exit(0);
}

// 2. Route the commands to the correct logic block
switch (command) {
    case 'add':
        console.log(`Adding task: "${taskArgument}"...`);
        // Next step: Read/write to JSON file
        break;

    case 'list':
        console.log("Listing all tasks...");
        break;

    default:
        console.log(`Unknown command: "${command}"`);
}