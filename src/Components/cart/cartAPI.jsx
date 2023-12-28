
import { api_url } from "../../config";

// fetching cart details
export function addToCart(item) {
    return new Promise(async (resolve) => {
      const response = await fetch(`${api_url}/cart`, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: { 'content-type': 'application/json' },
      });
      const data = await response.json();
      resolve({ data });
    });
  }


//   fetching items by userid
  export function fetchItemsByUserId(userId) {
    return new Promise(async (resolve) => {
      const response = await fetch(`${api_url}/cart?user=`+userId)
      const data = await response.json();
      resolve({data});
    });
  } 

// update items in cart
export function updateCart(update) {
    return new Promise(async (resolve) => {
      const response = await fetch(`${api_url}/cart/`+update.id, {
        method: 'PATCH',
        body: JSON.stringify(update),
        headers: { 'content-type': 'application/json' },
      });
      const data = await response.json();
      resolve({ data });
    });
  }  


//   Deleting items from carts
export function deleteItemFromCart(itemId) {
    return new Promise(async (resolve) => {
      const response = await fetch(`${api_url}/cart/`+itemId, {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' },
      });
      const data = await response.json();
      resolve({ data:{id:itemId} });
    });
  } 



//   reset cart action
export function resetCart(userId) {
    // get all items of user's cart - and then delete each
    return new Promise(async (resolve) => {
      const response = await fetchItemsByUserId(userId);
      const items = response.data;
      for (let item of items) {
        await deleteItemFromCart(item.id);
      }
      resolve({ status: 'success' });
    });
  }
