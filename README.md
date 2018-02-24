[![Build Status](https://travis-ci.org/julienpetit/jwt-auth-example-react-redux-client.svg?branch=master)](https://travis-ci.org/julienpetit/jwt-auth-example-react-redux-client)
[![dependencies Status](https://david-dm.org/julienpetit/jwt-auth-example-react-redux-client/status.svg)](https://david-dm.org/julienpetit/jwt-auth-example-react-redux-client)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/6e31b5f1016f414c84e4c6c3db50decd)](https://www.codacy.com/app/julienpetit/jwt-auth-example-react-redux-client?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=julienpetit/jwt-auth-example-react-redux-client&amp;utm_campaign=Badge_Grade)
# JWT auth client using react, redux and redux-sagas

## prerequisite
You must have setup the stellarvore-server

Copy the file .env.dist file as .env.local for development and add the server host onto it.

## Commands

```
npm install
```
This command will install all project dependencies.

```
npm start
```
This command will start the web server.

```
npm test
```
This command will start the tests.

## Deploy

```
npm run build
cd build
surge
```
