import { useState } from "react";


export const useCounter = (init:number) => {
  const [value,setValue]= useState<number>(init)

  
  const inc= (val?:number)=>{
      if(val!=undefined){
      setValue(value+val);
      }else{
          setValue(value+1)
      }
  }
  

  const dec= (val?:number)=>{
   if(val!=undefined){
    setValue(value-val);
   }else{
       setValue(value-1)
   }
      
  }

  const set = (val:number)=>{
      setValue(val);
  }

  return{
      value,inc,dec,set
  }
};
