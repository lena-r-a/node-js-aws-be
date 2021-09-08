
const {Client} = require('pg');
const {PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD} = process.env;
const dbOptions = {
  host: PG_HOST,
  port: PG_PORT,
  database: PG_DATABASE,
  user: PG_USERNAME,
  password: PG_PASSWORD,
  ssl: {
    rejectUnauthorized: false
  },
  connectionTimeoutMillis: 5000
}
export const postProducts = async (event) => {
    // console.log('Lambda invocation with event: ', event);
  // Some logic ...
  // Don't forget about logging and testing
  
  const client = new Client(dbOptions);
  await client.connect();
  const product = [,'Official Light Stick', 8];
  
  try {
    if (!product[0]) {
      return {
          statusCode: 400,
          headers: {
              'Content-Type': 'application/json', 
              'Access-Control-Allow-Origin': '*'
          },
          body: {
              message: 'Product data is invalid'
          }
      }
  };
    const dmlResult = await client.query(`insert into products(title, description, price) values ('${product[0]}','${product[1]}','${product[2]}')`);
    console.log(dmlResult);
    
  }

  catch (err) {
    console.error('error during database request',err)
  }
finally {
  client.end();
}
  
};