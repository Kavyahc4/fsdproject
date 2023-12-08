import React, { useState } from "react";

//Hooks
//useState---ex : simple counter application

const Counter=()=>{
    const [count,setCount]=useState(0);

    const decrementhandler=()=>{
        setCount(count-1);
    }
    const incrementhandler=()=>{
        setCount(count+1);
        // setCount((preCount)=>preCount+1)
        // setCount((preCount)=>preCount+1)

    }
    return(
        <div>
            <button onClick={decrementhandler}>-</button>
            <p>{count}</p>
            <button onClick={incrementhandler}>+</button>
        </div>
    )
}
export default Counter;