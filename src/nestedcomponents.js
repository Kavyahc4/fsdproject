import React from "react";

const ParentComponent=()=>{
    const dataToPass="Hello from the parent"

    return (
        <>
            <ChildComponent data={dataToPass} />
        </>
    )
}
const ChildComponent=({data})=>{
    return(
        <>
            <GrandChildComponent data={data}/>
        </>
    )
}
const GrandChildComponent=({data})=>{
    return (
        <>
            <p>GrandChildComponent : {data}</p>
        </>
    )
}
export default ParentComponent;