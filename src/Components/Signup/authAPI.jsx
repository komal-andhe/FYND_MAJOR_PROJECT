import React from 'react';
import { api_url } from '../../config';
import { Navigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// const navigate =useNavigate();


// fetching registed user data
export function createUser(userData){
    return new Promise(async(resolve)=>{
        const response =await fetch(`${api_url}/auth/signup`,{
            method:'POST',
            body:JSON.stringify(userData),
            headers:{'content-type':'application/json'}
        });
        const data =await response.json();
        resolve({data});

        // token:

        if(data.authtoken){
            sessionStorage.setItem('auth-token',data.authtoken);
            sessionStorage.setItem('email',userData.email);
            // navigate('/');
            <Navigate to="/login" replace={true}></Navigate>
            window.location.reload();
        }

     }
    )}

    // fetching login dta 
    export function checkUser(loginInfo){
        return new Promise(async(resolve,reject)=>{
           
        try{
            const response =await fetch(`${api_url}/auth/login`,{  
            method:'POST',
            body:JSON.stringify(loginInfo),
            headers:{'content-type':'application/json'}
            });
            if(response.ok){
               const data =await response.json();
               resolve({data});
            }else{
                const error =await response.json();
                reject(error);
            }   
        }catch(error){
            reject(error);
        }

         });
        }


// signout user
export function signOut(userId){
    return new Promise(async(resolve)=>{
        // todo: on server remove use sessioninfo
        resolve({data: 'success'});

     }
    )}
        

   