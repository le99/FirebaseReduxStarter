# FirebaseReduxStarter

A simple starter app inspired by Stephen Grider's [ReduxSimpleStarter](https://github.com/StephenGrider/ReduxSimpleStarter)

### What does it contain?

React, Redux, firebase.initializeApp (using Firebase Hosting)
Tests: Mocha, and Enzyme

### Getting Started

```
git clone https://github.com/le99/FirebaseReduxSimpleStarter.git
cd FirebaseReduxSimpleStarter
npm install
npm run build
```

Connect to firebase project
```
firebase use --add
firebase use
firebase deploy
```

### Development

This app uses webpack-dev-server and proxies some http requests to firebase server specially paths from: /__

To deploy locally

Run in one command line:
```
firebase serve
```

Run in a second command line
```
npm run start:dev
```

Open a browser at http://localhost:8080/

### Tests

They run in node using JSDOM
To run once
```
npm run test
```
To run every time tests change
```
npm run test:watch
```

### Other pages that might be of use:

* [Firebase Hosting](https://firebase.google.com/docs/hosting/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Redux-thunk](https://github.com/gaearon/redux-thunk)

Tests
* [Mocha](https://mochajs.org/)
* [Chai.js](http://chaijs.com/)
* [Enzyme](http://airbnb.io/enzyme/docs/api/)

### Note for firebase
According to the [Firebase docs](https://firebase.google.com/docs/cli/) you might consider adding .firebaserc to your source control.

### License
MIT
