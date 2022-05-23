import { useState } from "react";

export const useList = (arr:number[]) => {

const [list,setList]= useState<number[]>(arr);
  
const push = ():void=>{
    list.push(list[list.length-1]+1);
    setList([...list])
}

const pop = ():void=>{
    list.pop();
    setList([...list])
}

const clear = ():void=>{
    setList([])
}

const reset = ():void=>{
    setList([...arr])
}


 const map = (func:(el:any)=>number)=>{
   let ndata=list.map(func);
   setList(ndata)
 }


return {list,push, pop, clear, reset,map}


};
