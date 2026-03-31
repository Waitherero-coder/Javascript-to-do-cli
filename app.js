// Simple CLI To-Do App

const fs = require('fs');

const file = 'tasks.json';

// Load tasks
function loadTasks() {
    if (!fs.existsSync(file)) return [];
    return JSON.parse(fs.readFileSync(file));
}

// Save tasks
function saveTasks(tasks) {
    fs.writeFileSync(file, JSON.stringify(tasks, null, 2));
}

// Add task
function addTask(task) {
    const tasks = loadTasks();
    tasks.push(task);
    saveTasks(tasks);
    console.log("✅ Task added!");
}

// View tasks
function viewTasks() {
    const tasks = loadTasks();
    console.log("\n📌 Your Tasks:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}

// CLI input
const command = process.argv[2];
const argument = process.argv.slice(3).join(" ");

if (command === "add") {
    addTask(argument);
} else if (command === "view") {
    viewTasks();
} else {
    console.log("Usage:");
    console.log("node app.js add \"Task name\"");
    console.log("node app.js view");
}