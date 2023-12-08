import React, { useMemo, useState } from "react";

const Counter=()=>{

    const [counterOne,setcounterOne]=useState(0)
    const [counterTwo,setcounterTwo]=useState(0)


    const incrementOne=()=>{
        setcounterOne(counterOne+1)
    }
    const incrementTwo=()=>{
        setcounterTwo(counterTwo+1)
    }

    const isEven=useMemo(()=>{
        let i=0;
        while(i<=2000000000) i++;
        return counterOne % 2=== 0;
    },[counterOne])
    return (
        <>
            <div>
                <button onClick={incrementOne}>count one :{counterOne}</button>
                <span>{isEven ? "Even" : "odd"}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>count two :{counterTwo}</button>
            </div>
        
        </>


    )
}
export default Counter;