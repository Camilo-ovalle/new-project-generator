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
                    fs.mkdirSync(folderName + '/styles', {recursive: true})
                    fs.writeFileSync(folderName + '/styles/main.css', '*{background-color: aqua}')
                    fs.mkdirSync(folderName + '/companents', {recursive: true})
                    fs.mkdirSync(folderName + '/assets', {recursive: true})
                    fs.mkdirSync(folderName + '/pages', {recursive: true})
                    fs.mkdirSync(folderName + '/utils', {recursive: true})
                    fs.mkdirSync(folderName + '/hooks', {recursive: true})
                    

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

                    fs.writeFileSync(folderName + '/package.json', JSON.stringify({
                        "name": folderName,
                        "version": "1.0.0",
                        "description": "",
                        "main": "index.js",
                        "scripts": {
                            "serve": "vue-cli-service serve",
                            "build": "vue-cli-service build",
                            "lint": "vue-cli-service lint"
                        },
                        "keywords": [],
                        "author": "",
                        "license": "ISC",
                        "devDependencies": {
                            "@vue/cli-plugin-babel": "~4.5.0",
                            "@vue/cli-plugin-eslint": "~4.5.0",
                            "@vue/cli-service": "~4.5.0",
                            "babel-eslint": "^10.1.0",
                            "eslint": "^6.7.2",
                            "eslint-plugin-prettier": "^3.1.4",
                            "eslint-plugin-vue": "^6.2.2",
                            "prettier": "^2.1.2",
                            "vue-template-compiler": "^2.6.11"
                        },
                        "dependencies": {
                            "vue": "^2.6.11"
                        }
                    }, null, 2))
                }
                
                if (techElective === 'Angular 🔶') {

                    fs.writeFileSync(folderName + '/src/index.js', 'console.log("Hello Angular")')

                    fs.writeFileSync(folderName + '/package.json', JSON.stringify({

                        "name": folderName,
                        "version": "1.0.0",
                        "description": "",
                        "main": "index.js",
                        "scripts": {
                            "ng": "ng",
                            "start": "ng serve",
                            "build": "ng build",
                            "test": "ng test",
                            "lint": "ng lint",
                            "e2e": "ng e2e"
                        },
                        "keywords": [],
                        "author": "",
                        "license": "ISC",
                        "devDependencies": {
                            "@angular-devkit/build-angular": "~0.1100.2",
                            "@angular/cli": "~11.0.2",
                            "@angular/compiler-cli": "~11.0.1",
                            "@types/jasmine": "~3.6.0",
                            "@types/node": "^12.11.1",
                            "codelyzer": "^6.0.0",
                            "jasmine-core": "~3.6.0",
                            "jasmine-spec-reporter": "~5.0.0",
                            "karma": "~5.1.0",
                            "karma-chrome-launcher": "~3.1.0",
                            "karma-coverage-istanbul-reporter": "~3.0.2",
                            "karma-jasmine": "~4.0.0",
                            "karma-jasmine-html-reporter": "^1.5.0",
                            "protractor": "~7.0.0",
                            "ts-node": "~8.3.0",
                            "tslint": "~6.1.0",
                            "typescript": "~4.0.2"
                        },
                        "dependencies": {
                            "@angular/animations": "~11.0.1",
                            "@angular/common": "~11.0.1",
                            "@angular/compiler": "~11.0.1",
                            "@angular/core": "~11.0.1",
                            "@angular/forms": "~11.0.1",
                            "@angular/platform-browser": "~11.0.1",
                            "@angular/platform-browser-dynamic": "~11.0.1",
                            "@angular/router": "~11.0.1",
                            "rxjs": "~6.6.0",
                            "tslib": "^2.0.0",
                            "zone.js": "~0.10.2"
                        }
                    }, null, 2))
                    
                }
                console.log("\nThe project has been created successfully! 🤩 \n")
                console.log("Now you can go to the folder of your project and run 'npm install' and 'npm start' to start your project 🚀")
            }
            
        )
    })