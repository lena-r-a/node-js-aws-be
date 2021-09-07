import productList from './productList.json';

export const getProductById = async (event) => {
//   console.log('Lambda invocation with event: ', event);
  const {productId} = event.pathParameters;
  // Some logic ...
  // Don't forget about logging and testing
  const API_responses = {
    _200: (body)=>{
        return {
            statusCode: 200,
            body: JSON.stringify(body, null, 2)
          };
  },
  _400: (body)=>{
    return {
        statusCode: 400,
        body: JSON.stringify(body, null, 2)
      };
},}
if (!productList.find(d=>d.productId==productId))
{return API_responses._400({message:"Product not found"})}
  return API_responses._200(productList.find(d=>d.productId==productId));
  
 
};

