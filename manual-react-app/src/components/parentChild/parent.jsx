import React, {useState} from "react";
import Child from './child';
export default function Parent(props){
   const[counter,setCounter]=useState(0);
   return(
    <Child counter = {counter} onIncrement={()=>setCounter(counter+1)}
     onDecrement={()=>setCounter(counter-1)}
    />
   );
};