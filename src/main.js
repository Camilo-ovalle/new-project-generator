import inquirer from "inquirer";
import fs from 'fs';

console.log("Welcome to the project generator 🚀 \n");

inquirer
    .prompt(
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project 🐉?',
            default: 'New project'
        })
    .then(answer => {
        const folderName = answer.projectName

        fs.mkdirSync(folderName + '/src', {recursive: true})

        inquirer.prompt({
            type: 'list',
            name: 'projectType',
            message: 'What type of project do you want to create?',
            choices: ['React 🤑', 'Vue 😏', 'Angular 🔶']
        })
            
            .then(answer => {

                const techElective = answer.projectType
                const comandos = []

                if (techElective === 'React 🤑') {
                    fs.writeFileSync(folderName + '/src/index.js', 'console.log("Hello React")')
                    //Instalar React
                    comandos.push('npm install react react-dom')
                    //Instalar Babel
                    comandos.push('npm install -D @babel/core @babel/preset-env @babel/preset-react babel-loader')
                    //Instalar Webpack
                    comandos.push('npm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin')
                    //Instalar ESLint
                    comandos.push('npm install -D eslint eslint-loader babel-eslint eslint-plugin-react')
                    //Instalar Prettier
                    comandos.push('npm install -D prettier eslint-config-prettier eslint-plugin-prettier')

                    fs.writeFileSync(folderName + '/package.json', JSON.stringify({
                        "name": folderName,
                        "version": "1.0.0",
                        "description": "",
                        "main": "index.js",
                        "scripts": {
                            "start": "webpack-dev-server --mode development --open",
                            "build": "webpack --mode production"
                        },
                        "keywords": [],
                        "author": "",
                        "license": "ISC",
                        "devDependencies": {
                            "@babel/core": "^7.12.3",
                            "@babel/preset-env": "^7.12.1",
                            "@babel/preset-react": "^7.12.5",
                            "babel-eslint": "^10.1.0",
                            "babel-loader": "^8.1.0",
                            "eslint": "^7.12.1",
                            "eslint-config-prettier": "^6.15.0",
                            "eslint-loader": "^4.0.2",
                            "eslint-plugin-prettier": "^3.1.4",
                            "eslint-plugin-react": "^7.21.5",
                            "html-webpack-plugin": "^4.5.0",
                            "prettier": "^2.1.2",
                            "webpack": "^5.3.2",
                            "webpack-cli": "^4.1.0",
                            "webpack-dev-server": "^3.11.0"
                        },
                        "dependencies": {
                            "react": "^17.0.1",
                            "react-dom": "^17.0.1"
                }
                    }, null, 2))
                }
                if (techElective === 'Vue 😏') {
                    fs.writeFileSync(folderName + '/src/index.js', 'console.log("Hello Vue")')
                }
                if (techElective === 'Angular 🔶') {
                    fs.writeFileSync(folderName + '/src/index.js', 'console.log("Hello Angular")')
                }
            }
        )
})