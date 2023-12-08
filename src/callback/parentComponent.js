import React, { useCallback, useState } from "react";


import Count from "./count";
import Button from "./button";
import Heading from "./heading";

function ParentComponent(){
    const [age,setAge] = useState(25)
    const [salary,setSalary] = useState(50000);

    const incrementAge=useCallback(()=>{
        setAge((prevCount)=>prevCount+1)
    },[age])
    const incrementSalary=useCallback(()=>{
        setSalary((prevCount)=>prevCount+1000)
    },[salary])
    return (
        <div>
            <Heading/>
            <Count text="age" count={age}/>
            <Button handleClick={incrementAge}>IncrementAge</Button>
            <Count text="salary" count={salary}/>
            <Button handleClick={incrementSalary}>incrementSalary</Button>
        </div>
    )
}
export default ParentComponent;