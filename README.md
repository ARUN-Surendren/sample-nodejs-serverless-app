# Sample Nodejs Serverless Application
This is a sample nodejs serverless application code

## Installation

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install foobar.

#### For Development and localhost testing
```bash
npm install
```

#### For AWS deployments
```bash
npm install --production 
```

## Usage

To run the serverless application in localhost:
```bash
npm start
```

To change the port number, change the numbers in [serverless.yml](https://github.com/ARUN-Surendren/sample-nodejs-serverless-app/blob/master/serverless.yml).
````
custom:
  serverless-offline:
    httpPort: 3000
    lambdaPort: 3200
````

To run the test script
```bash
npm test
```
