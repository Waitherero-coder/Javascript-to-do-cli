# 📃 TOOLKIT DOCUMENT
## Getting Started with JavaScript (Node.js) – A Practical Beginner Guide Using AI
 
---
 
## 1. Title & Objective
 
### Technology Chosen
JavaScript (Node.js)
 
### Why I Chose It
JavaScript is one of the most widely used programming languages, especially in web development. I chose Node.js because it allows JavaScript to run outside the browser, making it useful for building backend applications and scripts.
 
### Project Goal
To learn the basics of Node.js using AI assistance and build a simple **Command-Line To-Do List Application** that allows users to:
 
- Add tasks
- View tasks
 
---
 
## 2. Quick Summary of the Technology
 
- **JavaScript** is a high-level programming language used for building interactive web applications.
- **Node.js** is a runtime environment that allows JavaScript to run on the server side.
 
### Where It Is Used
- Web development (frontend & backend)
- APIs and backend services
- Automation scripts
 
### Real-World Example
Platforms like **Netflix** and **PayPal** use Node.js for backend services.
 
---
 
## 3. System Requirements
 
| Requirement   | Details                        |
|---------------|--------------------------------|
| OS            | Windows / Linux / Mac          |
| Node.js       | v14 or higher                  |
| Code Editor   | VS Code (recommended)          |
| Terminal      | Terminal / Command Prompt      |
 
---
 
## 4. Installation & Setup Instructions
 
### Step 1: Install Node.js
Download and install Node.js from the [official website](https://nodejs.org/).
 
Verify installation:
```bash
node -v
npm -v
```
 
### Step 2: Create Project Folder
```bash
mkdir todo-app
cd todo-app
```
 
### Step 3: Create JavaScript File
```bash
touch app.js
```
 
### Step 4: Add Code
Paste the provided JavaScript code into `app.js`.
 
---
 
## 5. Minimal Working Example
 
### Description
This project is a minimal CLI application that prints a greeting message.
 
### Code Example
```javascript
// Minimal Hello World CLI App in Node.js
console.log("👋 Hello, Node.js World!");
```
 
### Expected Output
```
👋 Hello, Node.js World!
```
 
---
 
## 6. AI Prompt Journal

## Getting Started with JavaScript (Node.js) – CLI To-Do App
 
> A log of AI prompts used throughout the development of this project, from setup to completion.
 
---
 
## 📌 Prompt 1 — Understanding the Technology
 
**🧠 Goal:** Get a beginner-friendly overview of Node.js before writing any code.
 
**💬 Prompt Used:**
> I am a beginner programmer and I want to learn Node.js. Can you give me a simple, beginner-friendly explanation of what Node.js is, how it differs from regular JavaScript in the browser, and where it is commonly used in the real world? Please keep it short and easy to understand.
 
**✅ What I Got From It:**
- A clear explanation of what Node.js is and how it runs JavaScript outside the browser
- Real-world examples like Netflix and PayPal using Node.js
- A simple breakdown of use cases: web backends, APIs, and automation scripts
 
---
 
## 📌 Prompt 2 — Setting Up the Project Environment
 
**🧠 Goal:** Get step-by-step instructions for setting up Node.js and my project folder from scratch.
 
**💬 Prompt Used:**
> I want to set up a Node.js project on my computer for the first time. Can you walk me through:
> 1. How to install Node.js
> 2. How to verify it was installed correctly
> 3. How to create a project folder and a starting JavaScript file using the terminal
>
> Please write the exact terminal commands I need to run and explain what each one does.
 
**✅ What I Got From It:**
- Step-by-step installation guide for Node.js
- Terminal commands for verifying installation (`node -v`, `npm -v`)
- Commands for creating the project folder (`mkdir`, `cd`, `touch`) with clear explanations
 
---
 
## 📌 Prompt 3 — Planning the Application Logic
 
**🧠 Goal:** Plan out the structure and logic of the To-Do app before writing any code.
 
**💬 Prompt Used:**
> I want to build a simple Command-Line To-Do List app using Node.js. The app should allow users to:
> - Add a task by typing it in the terminal
> - View all saved tasks in the terminal
> - Save tasks to a local JSON file so they are not lost when the program closes
>
> Can you help me plan the structure of this app? What functions will I need, what built-in Node.js modules should I use, and how should the data be stored? Please explain before writing any code.
 
**✅ What I Got From It:**
- A clear plan for the app's structure broken into four functions: `loadTasks()`, `saveTasks()`, `addTask()`, and `viewTasks()`
- Introduction to the `fs` (File System) module for reading and writing files
- Decision to use a `tasks.json` file as local storage for task persistence
 
---
 
## 📌 Prompt 4 — Writing the Core Code
 
**🧠 Goal:** Generate the actual working code for the CLI To-Do app based on the plan.
 
**💬 Prompt Used:**
> Based on this plan, can you now write the full Node.js code for my CLI To-Do app in a single file called app.js? The app should:
> - Use the built-in `fs` module (no external libraries)
> - Have a `loadTasks()` function that reads from `tasks.json`
> - Have a `saveTasks()` function that writes to `tasks.json`
> - Have an `addTask()` function that adds a task and saves it
> - Have a `viewTasks()` function that displays all tasks in a numbered list
> - Accept commands from the terminal using `process.argv`
> - Support two commands: `add "task name"` and `view`
>
> Please add comments to the code explaining each section.
 
**✅ What I Got From It:**
- Complete, working `app.js` code with all four functions implemented
- Proper use of `process.argv` to read terminal commands and arguments
- Comments throughout the code for easy understanding
- A clean usage message for when an invalid command is entered
 
---
 
## 📌 Prompt 5 — Testing & Understanding the Output
 
**🧠 Goal:** Understand how to run and test the app, and what the expected outputs look like.
 
**💬 Prompt Used:**
> My Node.js CLI To-Do app is ready. Can you show me:
> 1. The exact terminal commands I should run to test the `add` and `view` features
> 2. What the expected output should look like for each command
> 3. What the `tasks.json` file should look like after adding a few tasks
>
> Please use realistic example tasks so I can follow along easily.
 
**✅ What I Got From It:**
- Test commands with realistic task names like `"Buy groceries"` and `"Finish Node.js project"`
- Clear expected terminal output for both `add` and `view` commands
- A sample `tasks.json` showing how data is structured and stored:
```json
[
  "Buy groceries",
  "Finish Node.js project",
  "Call the dentist"
]
```
 
---
 
## 📌 Prompt 6 — Debugging Common Errors
 
**🧠 Goal:** Understand and fix errors I encountered while running the app.
 
**💬 Prompt Used:**
> While running my Node.js To-Do app, I ran into a few errors. Can you help me understand what causes each one and how to fix it?
>
> Error 1: `'node' is not recognized as an internal or external command`
> Error 2: A JSON parsing error when trying to load tasks
> Error 3: No output appearing when I run the `view` command
>
> For each error, please explain the cause in simple terms and give me a clear fix.
 
**✅ What I Got From It:**
- Fix for the `node not recognized` error: verifying installation and adding Node to system PATH
- Fix for the JSON error: deleting the corrupted `tasks.json` and letting the app regenerate it
- Fix for the empty view output: understanding that tasks must be added before they can be viewed
 
---
 
## 📌 Prompt 7 — Writing the README
 
**🧠 Goal:** Generate a professional README file for the project.
 
**💬 Prompt Used:**
> I have completed my Node.js CLI To-Do app. Can you write a professional README.md file for it in Markdown format? Please include:
> 1. A project title and short description
> 2. A features section
> 3. System requirements and setup instructions
> 4. Usage examples with terminal commands and expected output
> 5. A table explaining how each function in the code works
> 6. Common issues and fixes
> 7. A list of possible future improvements
> 8. References and acknowledgements
>
> Make it clean, well-structured, and beginner-friendly.
 
**✅ What I Got From It:**
- A fully structured, professional `README.md` file with all sections included
- Usage examples with realistic inputs and outputs
- A clean function breakdown table
- A future improvements checklist for expanding the project later
 
---
 
> 💡 **Reflection:** Using AI throughout this project helped me move faster, understand concepts more clearly, and debug errors without getting stuck. Each prompt was specific and goal-driven, which led to more useful and accurate responses.
 
---
 
## 7. Common Issues & Fixes
 
### Issue 1: Node Not Recognized
**Error:**
```
'node' is not recognized as an internal command
```
 
**Fix:**
- Ensure Node.js is installed correctly
- Restart terminal
- Add Node to system PATH
 
---
 
### Issue 2: JSON Parsing Error
**Cause:** Corrupted or empty `tasks.json`
 
**Fix:**
- Delete the file and rerun the program
- Ensure valid JSON format
 
---
 
### Issue 3: No Output When Viewing Tasks
**Cause:** No tasks added yet
 
**Fix:** Run:
```bash
node app.js add "Sample task"
```
 
---
 
## 8. References
 
- 📘 [Node.js Official Documentation](https://nodejs.org/)
- 📗 [MDN JavaScript Docs](https://developer.mozilla.org/)
- 📙 [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/)