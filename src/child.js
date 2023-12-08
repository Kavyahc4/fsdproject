import React from "react";

const ChildComponent=(props)=>{
    return (
        <>
        
         <p>{props.data.message}</p> 
        <p>count:{props.data.count}</p>
        </>
    )
    }

export default ChildComponent;