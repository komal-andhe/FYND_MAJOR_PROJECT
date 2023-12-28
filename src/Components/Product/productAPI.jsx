import { api_url } from "../../config";


// fetching data by id
    export function fetchProductById(id){
        return new Promise(async(resolve)=>{
    // todo:will not hard-code server url here
            const response =await fetch(`${api_url}/products/`+id);
            const data =await response.json();
            resolve({data});
    
         }
        )}    


// api : create product
export function createProduct(product){
    return new Promise(async(resolve)=>{
        const response =await fetch(`${api_url}/products/`,{
            method:'POST',
            body:JSON.stringify(product),
            headers:{'content-type':'application/json'}
        });
        const data =await response.json();
        resolve({data});

     }
    )}  



// getting products by filters
export function fetchProductsByFilters({filter,pagination}){
    //  todo: on server will support multi values
    // filter ={"category":["clothes","laptops"]}
    // pagination={_page:1, _limit=10};
    let queryString ='';
    for(let key in filter){
        const categoryValues= filter[key];
        if(categoryValues.length){
          const lastCategoryValue= categoryValues[categoryValues.length-1]
          queryString+= `${key}=${lastCategoryValue}&`
        }   
    }
    
    console.log(pagination);
    for (let key in pagination) {
        queryString += `${key}=${pagination[key]}&`;
      }

    return new Promise(async(resolve)=>{

        const response =await fetch(`${api_url}/products?`+queryString);
        const data =await response.json();
        const totalItems=await response.headers.get('X-Total-Count')
        resolve({data:{products:data, totalItems:+totalItems}});

    });
}

// fetching categories data
export function fetchCategories(){
    return new Promise(async(resolve)=>{
        const response =await fetch(`${api_url}/categories`);
        const data =await response.json();
        resolve({data});

     }
    )}