import React from "react";
import GrandChildComponent from "./GreateGrandChildcomponent";

const ChildComponent=({data})=>{
    return (
        <>
        {/* <p>{data}</p>  */}
        <GrandChildComponent data={data}/>
        </>
    )
}

export default ChildComponent;