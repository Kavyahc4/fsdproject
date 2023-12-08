import React from "react";
import GreateGreateGrandChildComponent from "./GreateGreateGrandChildComponent";

const GreateGrandChildComponent=({data})=>{
    return (
        <>
        <p>{data}</p> 
        <GreateGreateGrandChildComponent data={data}/>
        </>
    )
}

export default GreateGrandChildComponent;