# 📝 CLI To-Do App
 
A simple and lightweight **Command-Line To-Do List Application** built with **Node.js**. Manage your tasks directly from the terminal — no fancy UI needed!
 
---
 
## 🚀 Features
 
- ✅ Add tasks from the command line
- 📋 View all your saved tasks
- 💾 Tasks are persisted locally in a `tasks.json` file
- 🪶 Zero dependencies — uses only Node.js built-ins
 
---
 
## 🛠️ Requirements
 
- [Node.js](https://nodejs.org/) v14 or higher
 
Verify your installation:
```bash
node -v
npm -v
```
 
---
 
## 📁 Project Structure
 
```
Javascript-to-do-cli/
├── app.js        # Main application file
├── README.md     # Project overview and documentation
├── tasks.json    # Auto-generated file that stores your tasks
└── TOOLKIT_DOCUMENTATION.md 

```
 
---
 
## ⚙️ Setup & Installation
 
**1. Clone or download the project**
```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```
 
**2. No installation needed!** Just make sure Node.js is installed and you're good to go.
 
---
 
## 💻 Usage
 
### ➕ Add a Task
```bash
node app.js add "Your task here"
```
 
**Example:**
```bash
node app.js add "Buy groceries"
```
 
**Output:**
```
✅ Task added!
```
 
---
 
### 📌 View All Tasks
```bash
node app.js view
```
 
**Output:**
```
📌 Your Tasks:
1. Buy groceries
2. Finish the Node.js project
3. Call the dentist
```
 
---
 
### ❓ No Command / Wrong Command
```bash
node app.js
```
 
**Output:**
```
Usage:
node app.js add "Task name"
node app.js view
```
 
---
 
## 🗂️ How It Works
 
| Function | Description |
|---|---|
| `loadTasks()` | Reads tasks from `tasks.json`. Returns an empty array if the file doesn't exist. |
| `saveTasks()` | Writes the updated tasks array back to `tasks.json`. |
| `addTask()` | Appends a new task and saves it. |
| `viewTasks()` | Reads and displays all tasks in a numbered list. |
 
---
 
## 🐛 Common Issues & Fixes
 
### ❌ `node` is not recognized
**Fix:** Ensure Node.js is installed and added to your system PATH. Then restart your terminal.
 
### ❌ JSON Parsing Error
**Cause:** `tasks.json` may be corrupted or empty.  
**Fix:** Delete `tasks.json` and rerun the app — it will regenerate automatically.
 
### ❌ No tasks showing when running `view`
**Cause:** You haven't added any tasks yet!  
**Fix:** Add a task first:
```bash
node app.js add "Sample task"
```
 
---
 
## 🔮 Possible Future Improvements
 
- [ ] Delete a task by index
- [ ] Mark tasks as complete
- [ ] Add task priorities or due dates
- [ ] Colorful terminal output using `chalk`
- [ ] Search/filter tasks by keyword
 
---
 
## 📄 License
 
This project is open-source and free to use for learning purposes.
 
---
 
## 🙌 Acknowledgements
 
- [Node.js Documentation](https://nodejs.org/)
- [MDN JavaScript Docs](https://developer.mozilla.org/)
- [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/)
 
---
 
> Built with ❤️ and Node.js — one task at a time!
