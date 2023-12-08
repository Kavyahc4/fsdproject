import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent=()=>{

    const dataToPass="Hello from parent"
    return (
        <>
         {/* <p>{data}</p>  */}
        <ChildComponent data={dataToPass}/>
        </>
    )
}

export default ParentComponent;