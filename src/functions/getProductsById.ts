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

export const getProductById = async (event) => {
  const productId = event.pathParameters?.productId;
  const client = new Client(dbOptions);
  await client.connect();
  try {
    const  product  = await client.query('select * from products where id = $1', [productId])
    console.log ("event",product.rows[0]);
    return {
      statusCode: 200,
      body:JSON.stringify(product.rows[0]),
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
    };
  }

  catch (err) {
    return {
      statusCode: 500,
      headers: {
          'Content-Type': 'application/json', 
          'Access-Control-Allow-Origin': '*'
      },
      body: {
          message: 'Bad request'
      }
     }
  }
finally {
  client.end();
}


//   console.log('Lambda invocation with event: ', event);
//   const {productId} = event.pathParameters;
//   // Some logic ...
//   // Don't forget about logging and testing
//   const API_responses = {
//     _200: (body)=>{
//         return {
//             statusCode: 200,
//             body: JSON.stringify(body, null, 2)
//           };
//   },
//   _400: (body)=>{
//     return {
//         statusCode: 400,
//         body: JSON.stringify(body, null, 2)
//       };
// },}
// if (!productList.find(d=>d.productId==productId))
// {return API_responses._400({message:"Product not found"})}
//   return API_responses._200(productList.find(d=>d.productId==productId));
  
 
};

