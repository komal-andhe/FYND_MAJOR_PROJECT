import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { fetchProductsByFilters,fetchCategories, fetchProductById, createProduct } from "./productApi"; 


const initialState={
    products:[],
    categories:[],
    status:'idle',
    totalItems:0,
    selectedProduct: null
};


//   fetching data by id
export const fetchAllProductByIdAsync = createAsyncThunk(
    'product/fetchProductById',
    async (id) => {
      const response = await fetchProductById(id);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );
 
//  action for filtrs
export const fetchProductsByFiltersAsync = createAsyncThunk(
    'product/fetchProductsByFilters',
    async (filter,pagination) => {
      const response = await fetchProductsByFilters(filter,pagination);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  ); 

//   action for categories
  export const fetchCategoriesAsync = createAsyncThunk(
    'product/fetchCategories',
    async() => {
      const response = await fetchCategories();
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );


//   create product thunk
export const createProductAsync = createAsyncThunk(
    'product/create',
    async(product) => {
      const response = await createProduct(product);
      return response.data;
    }
  );


 export const productSlice =createSlice({
    name:'product',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
    },
    extraReducers:(builder)=>{
        builder       
        .addCase(fetchProductsByFiltersAsync.pending, (state)=>{
            state.status='loading';
        })
        .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action)=>{
         state.status='idle';
         state.products=action.payload.products;
         state.totalItems=action.payload.totalItems;
        })

        .addCase(fetchCategoriesAsync.pending, (state)=>{
            state.status='loading';
        })
        .addCase(fetchCategoriesAsync.fulfilled, (state, action)=>{
         state.status='idle';
         state.categories=action.payload;
        })

        .addCase(fetchAllProductByIdAsync.pending, (state)=>{
            state.status='loading';
        })
        .addCase(fetchAllProductByIdAsync.fulfilled, (state, action)=>{
         state.status='idle';
         state.selectedProduct=action.payload;
        })

        .addCase(createProductAsync.pending, (state)=>{
            state.status='loading';
        })
        .addCase(createProductAsync.fulfilled, (state, action)=>{
         state.status='idle';
         state.products.push(action.payload);
        })


    },
 });

 
 export const {increment}= productSlice.actions;
 export const selectAllProducts =(state)=>state.product.products;
 export const selectCategories =(state)=>state.product.categories;
 export const selectProductById =(state)=>state.product.selectedProduct;
 export const selectTotalItems=(state)=>state.product.totalItems;
 export default productSlice.reducer;
