import { api_url } from "../../config";

// fetching order data 
export function createOrder(order) {
    return new Promise(async (resolve) => {
      const response = await fetch(`${api_url}/orders`, {
        method: 'POST',
        body: JSON.stringify(order),
        headers: { 'content-type': 'application/json' },
      });
      const data = await response.json();
      resolve({ data });
    });
  }


//  order pendind /delivered update
export function updateOrder(order) {
    return new Promise(async (resolve) => {
      const response = await fetch(`${api_url}/orders/`+order.id, {
        method: 'PATCH',
        body: JSON.stringify(order),
        headers: { 'content-type': 'application/json' },
      });
      const data = await response.json();
      resolve({ data });
    });
  }



// fetching all orders data 
export function fetchAllOrders(sort, pagination) {
    let queryString ='';

    for (let key in sort) {
        queryString += `${key}=${sort[key]}&`;
      }

    for (let key in pagination) {
        queryString += `${key}=${pagination[key]}&`;
      }

    return new Promise(async(resolve)=>{

        const response =await fetch(`${api_url}/orders?`+queryString);
        const data =await response.json();
        const totalOrders = await response.headers.get('X-Total-Count');
        resolve({data:{orders:data, totalOrders:  +totalOrders}});

    });
  }
