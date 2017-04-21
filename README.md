# Lambda Node Boilerplate
A barebones reference implementation and starting point for Lambda projects deployed via the Serverless CLI, and running on Node.js with Webpack, Closure Compiler, Standard JS, and Mocha/Chai/Sinon. It implements a Lambda service via an API Gateway endpoint, and for the sake of demonstration, accepts one querystring parameter named `myParam`.

## Install
```
# install dependencies
npm run setup
```
## Configure
You'll need AWS credentials created in IAM, with CloudFormation privileges. See https://serverless.com/framework/docs/providers/aws/guide/credentials/.
```
serverless config credentials --provider aws --key YOUR_AWS_API_KEY --secret YOUR_AWS_API_SECRET
```

## Setup
Change the first line in `serverless.yml` to indicate the name of your new Lambda service (this is an arbitrary name of your choosing, and will appear in the AWS management console for Lambda).

## Unit Test
```
npm test
```

## Build
Build your deployables to the `/dist` directory:
```
npm run build
```

## Deploy
Deploy to Lambda (from the `/dist` directory).
```
# deploy to dev
npm run deploy:dev

# deploy to qa
npm run deploy:qa

# deploy to prod
npm run deploy:prod
```

## Endpoint
When deploying, the Serverless CLI will output your endpoint. Example:
https://h4wu9wgyqj.execute-api.us-east-1.amazonaws.com/dev/query?myParam=Hello%2C%20World

## End-to-end Test
From the Lambda function in the AWS console, click the _Actions_ button dropdown, and then select _Configure test event_. In the field, enter a JSON object whose _"myParam"_ property is set to some string.

**Example**
```javascript
{
  "myParam": "Hello, world!"
}
```
