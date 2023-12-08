import React from "react";
import GreateGrandChildComponent from "./GreateGrandChildcomponent";

const GrandChildComponent=({data})=>{
    return (
        <>
         {/* <p>{data}</p>  */}
        <GreateGrandChildComponent data={data}/>
        </>
    )
}

export default GrandChildComponent;