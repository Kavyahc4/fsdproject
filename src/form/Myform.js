import React, { useState } from "react";

// const MyForm=()=>{
//     const [inputValue,setInputvalue]=useState("")

//     const handleInput=(event)=>{
//         event.preventDefault()
//         console.log("Form is submitted with value",inputValue)

//     };

//     const handleChange=(event)=>{
//         setInputvalue(event.target.value)
//     }

//     return (
//         <form onSubmit={handleInput}>
//             <label>
//                 <input type="text" value={inputValue} onChange={handleChange}/>
//                 <p>Input value : {inputValue}</p>
//                 <button type="submit">submit</button>
//             </label>
//         </form>
//     )
// }
// export default  MyForm;

//---------------------------------------------------------------------------------

const MyForm=()=>{
    const [isChecked,setIsChecked]=useState(false);
    const [selectedOption,setSelectedOption]=useState("")

    const handleChexboxChange=()=>{
        setIsChecked(!isChecked)

    }
    const handleSelectChange=(event)=>{
        setSelectedOption(event.target.value);

    }
    return(
        <form>
            <label>
                <input type="checkbox"
                checked={isChecked}
                onChange={handleChexboxChange}/>{""}CHECK ME
            </label>
            <br/>
            <label>
                select :
                <select value={selectedOption} onChange={handleSelectChange}>
                    <option value="">Select an option</option>
                    <option value="option1"> option 1</option>
                    <option value="option2">option 2</option>
                </select>
            </label>
        </form>
    )
}
export default MyForm;