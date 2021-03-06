import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'node-js-aws-be',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    stage: 'dev',
    region: 'eu-west-1',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { 
    getAllProducts:{
    handler: 'src/functions/getProductsList.getProductList',
    events:[
      {http:{
          path: 'products',
          method: 'get',
          cors: true,
      }
        }
      ]
    },
    getProductById:{
      handler: 'src/functions/getProductsById.getProductById',
      events:[
        {http:{
            path: 'products/{productId}',
            method: 'get',
            cors: true,
        }
          }
        ]
      }
   },
};

module.exports = serverlessConfiguration;
