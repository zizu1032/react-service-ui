## Introduction

As IT Unit in CIMMYT front-end, we develop under modular pattern. We separate bussiness rules and view, in two concerns, the data layer and the view layer, for the firts one we use redux ducks and with the other one we use atomic design.

## Setup

Make sure you have the following tools:

* Windows or Linux computer.
* Visual Studio Code, Sublime, Atom, VIM, or something similar.
* Web navigator, Chrome or FireFox its ok, 
* Nodejs 
* Git & Gitflow 

> You will need Node.js installed to your computer. We won't get into too much detail about Node.js as it's out of the scope of this documentation. Also you won't need to actually use Node.js, it's only required for the development purposes.

## Installation

To install you need run the command in the project directory.
### `npm install`

Then run
### `npm start`

Runs the app in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br>
The page will reload if you make edits.<br>

### `npm test`
Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>

Your app is ready to be deployed!

### `npm run serve`
Runs the app in the child mode after you build your proyect.<br>

**Note: you need add a port in `package.json` under scripts **<br>

```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "serve": "react-scripts serve 3001",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

## Project Structure

![Project Structure](./src/assets/img/structure.png "Project Structure")

1. build: Builded app folder for production usage.
2. coverage: Test directory configuration.
3. public: Includes assets, static files that will not be processed by webpack.
4. src: Main folder 
5. assets: Core application styles, themes and images
6. components: Atomic design structure
7. pages: Bussines logic and implementation for components
8. helpers: Commonly used functions such as constants and components without views
9. mock: Define the services to simulate with Axios mock adapter
10. redux: Store for state in application
11. utils: Internal project configuration such as dockerfile
12. index.js and App.js: Starter point 
13. singleSpa.js: Child configuration 
14. .env: Environment configuration
15. .gitignore: Files to ignore by git 
16. .jsconfig.json: Base URL 
17. junit.xml: Test file report 

## Design components

### Google's Material Design
All libraries and custom made components are following Google's Material Design Specications.
### Material-UI
Material-UI is a react ui library that implement Google's Material Design specication

## Configuration
For the configuration options checkout Material UI's theme conguration options.
[ Material UI's theme conguration options](https://material-ui.com/customization/theming/)

Theme congurations are located at src/assets/styles/themesConfig.js 
```
{
    "palette": {
        "common": {
            "black": "rgba(0, 0, 0, 1)",
            "white": "#fff"
        },
        "background": {
            "paper": "rgba(255, 255, 255, 1)",
            "default": "rgba(255, 255, 255, 1)"
        },
        "primary": {
            "light": "rgba(119, 188, 31, 1)",
            "main": "rgba(76, 175, 80, 1)",
            "dark": "rgba(67, 139, 0, 1)",
            "contrastText": "#fff"
        },
        "secondary": {
            "light": "rgba(129, 131, 135, 1)",
            "main": "rgba(85, 86, 90, 1)",
            "dark": "rgba(44, 45, 49, 1)",
            "contrastText": "rgba(255, 255, 255, 1)"
        },
        "error": {
            "light": "rgba(255, 89, 89, 1)",
            "main": "rgba(192, 13, 30, 1)",
            "dark": "rgba(106, 17, 16, 1)",
            "contrastText": "#fff"
        },
        "text": {
            "primary": "rgba(0, 0, 0, 0.87)",
            "secondary": "rgba(0, 0, 0, 0.54)",
            "disabled": "rgba(0, 0, 0, 0.38)",
            "hint": "rgba(0, 0, 0, 0.38)"
        }
    }
}
```

### Pattern 

In a domain-style structure, content is organized by domain, or "area" of the application it's responsible for. In this case we refer that area by page. 

To create a new page just need create a new folder with capital case name under /src/pages file structure. 

src/
    pages/  
          SingIn/

How to create a Component

Components are categorized by levels, there are three: atoms, molecules and organism.

src/
    components/
         atoms/
         molecules/
         organisms/

To create a bussines logic we use redux as store with ducks patter

src/
    redux/
         modules/

State and bussines logic goes here! (even request services)



