import React from "react";
import ChildComponent from "./child";

const ParentComponent=()=>{
        
        
        const data={
            message:"hello i am react",
            count:42,
        }
        
        return(
            <>
            <ChildComponent data={data}/>
            </>
        )
}
export default ParentComponent;


