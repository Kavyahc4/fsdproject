import React, { useEffect, useState } from "react";

//useEffect
//effect without cleanup
//effect with cleanup

const Counter=()=>{
    const[count,setCount]=useState(0)

    useEffect(()=>{
        console.log("component rendered")
    },[])

    const handleClick=()=>{
        setCount(count+1)
    }
 return(
        <div>
            <p>count:{count}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
export default Counter;





