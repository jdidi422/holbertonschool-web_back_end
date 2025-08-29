# ES6 Promises

## Description
This project introduces the concept of **Promises in JavaScript (ES6)** and how they are used to handle asynchronous operations.  
It covers how to create promises, handle their resolution and rejection, and use helper methods like `then`, `catch`, `finally`, and `Promise.allSettled`.

---

## Learning Objectives
At the end of this project, you should be able to explain, without the help of Google:

- What Promises are, why they exist, and how they work.
- How to use `then`, `catch`, and `resolve`.
- How to use every method of the `Promise` object.
- How to use `async` / `await`.
- How to use `try` / `catch` with async functions.
- Error handling with promises.
- How to run multiple promises in parallel and handle their results.

---

## Requirements
- All files will be interpreted on **Ubuntu 20.04 LTS** using **Node.js 20.x.x** and **npm 9.x.x**.  
- Allowed editors: `vi`, `vim`, `emacs`, **VS Code**.  
- All files must end with a new line.  
- All code will be tested using **Jest**.  
- Code must pass **ESLint** checks.  
- All functions must be exported.  

---

## Setup Instructions

### Install Node.js
```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
node -v
npm -v
Install Dependencies
npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli
npm install --save-dev eslint
Run tests:
npm run test
