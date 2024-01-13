# Nexplore Todo UI

## Description
Nexplore Todo UI is a front-end repository for the Nexplore Todo application. This project is built using React and styled with Styled Components. It utilizes Ant Design for UI components, Axios for HTTP requests, and React Toastify for user notifications.

![screen-shot](https://i.imgur.com/25S4WJu.png)

## Installation and Setup
Clone the repository:
```shell
$ git clone git@github.com:muffybonbon/nexplore-todo-ui.git
```

Navigate to the project directory:
```shell
$ cd nexplore-todo-ui
```

Install dependencies:
```shell
$ npm install
```

Create .env file in root level:
```shell
$ touch .env
```

Place the environment variables in the the `.env` file:
```
API_URL='http://localhost:8080'
```

## Running the Application
Start the development server:
```shell
$ npm start
```

This command starts the webpack development server at `localhost:4000`.

Build the application for production:
```shell
$ npm run build
```

Lint the project:
```shell
$ npm run lint
```

## Features

- React 18 for building user interfaces
- Ant Design for ready-to-use React components
- Styled Components for component-level styling
- Axios for promise-based HTTP requests
- React Toastify for adding toast notifications
- Webpack for bundling and development server
