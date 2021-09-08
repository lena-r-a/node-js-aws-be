
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
  try {
    

    const dmlResult = await client.query(
        `insert into products (title, description, price) values
        ('NCT Light Stick','NCT Official Light Stick', 0)`
    );
    console.log(dmlResult);

    if (!dmlResult) {
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
    }

    // const {rows} = await client.query(`select * FROM products INNER JOIN stocks ON products.id = stocks.product_id`)
    // console.log (rows);
    // return {
    //   statusCode: 200,
    //   body: JSON.stringify(rows),
    //   headers: {
    //       'Access-Control-Allow-Origin': '*',
    //       'Access-Control-Allow-Credentials': true,
    //     },
    // };
  }

  catch (err) {
    console.error('error during database request',err)
  }
finally {
  client.end();
}
  
};