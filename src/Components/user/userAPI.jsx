import { api_url } from "../../config";


// fetch logged in user order
export function fetchLoggedInUserOrders(userId) {
    return new Promise(async (resolve) =>{
      const response = await fetch(`${api_url}/orders/user/`+userId) 
      const data = await response.json()
      resolve({data})
    }
    );
  }

// fetch logged in user
  export function fetchLoggedInUser(userId) {
    return new Promise(async (resolve) =>{
      const response = await fetch(`${api_url}/users/`+userId) 
      const data = await response.json()
      resolve({data})
    }
    );
  }


  export function updateUser(update){
    return new Promise(async(resolve)=>{
        const response =await fetch(`${api_url}/users/`+update.id,{
            method:'PATCH',
            body:JSON.stringify(update),
            headers:{'content-type':'application/json'}
        });
        const data =await response.json();
        resolve({data});

     }
    )}     

  
