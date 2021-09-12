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
   console.log('Lambda invocation with event: ', event.body);
  
  const {title, description, price, count} = event.body;
  const client = new Client(dbOptions);
  await client.connect();



  try {
    if (!title) {
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
    const dmlResult = await client.query(`
    WITH ins AS (
      INSERT INTO products (title, description, price)
      VALUES ('${title}','${description}','${price}')
      RETURNING id)
      INSERT INTO stocks (product_id, count)
      SELECT id, '${count}' FROM ins
      RETURNING product_id
      `);
    console.log(dmlResult);
    
  }

  catch (err) {
    return {
      statusCode: 500,
      headers: {
          'Content-Type': 'application/json', 
          'Access-Control-Allow-Origin': '*'
      },
      body: {
          message: err.message,
      }
     }
  }
finally {
  client.end();
}
  
};