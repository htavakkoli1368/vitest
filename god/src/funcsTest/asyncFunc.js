import  jwt from 'jsonwebtoken';



export function createjsonwebtoken(usermail,doneFn){  
   jwt.sign({email:usermail},"secret123",doneFn);
}

export function generateTokenPromise(usermail){
    const promise = new Promise((resolve,reject)=>{
      jwt.sign({email:usermail},"secret123",(error,token)=>{
        if(error){
            reject(error);
        }
        else{
            resolve(token);
        }
      });
    });
    return promise;
}