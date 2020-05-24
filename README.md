# GoCloudApp

GoCloud Cpech App React.js + Node.js + DynamoDB

## Project structure

We have 2 packages inside the project:

- **client:** ReactJS Client application.
- **server:** NodeJS Server API application.

Each of the packages have their own `package.json` file and they define their own dependencies.

```
|- package.json => root workspace
|--- packages
|------ client
|-------- package.json  => ReactJS App
|------ server
|-------- package.json => NodeJS APP
```

## How to install and run the project.

1. Clone this repository locally `$ git clone git@github.com:devcarlos/GoCloudApp.git`

2. Install the dependencies. Inside the root `$ npm i`

3. Install DynamoDB (locally) [Following Instructions]()

4. Start both applications. `$ npm start`

5. HTTP Access endpoints:
  - Client from http://localhost:3000
  - Server from http://localhost:9000
