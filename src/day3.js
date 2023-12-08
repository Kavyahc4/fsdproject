import React from 'react';

//props
//example-1
// const ParentComponent=()=>{
//     const name="react"
//     return (
//         <>
//         <ChildComponent name={name}/>
        
//         </>
//     )
// }
// const ChildComponent=(props)=>{
//     return (
//         <>
//             <p>Hello i am {props.name}</p>
//         </>
//     )
// }
// export default ParentComponent;

// example-2
// const ParentComponent=()=>{
//     const name="react"
//     const handleClicKEvent=()=>{
//         console.log("button clicked in parent")
//     }
//     return(
//         <>
//         <ChildComponent name={name} eventClick={handleClicKEvent} />
//         </>
//     )
// }
// const ChildComponent=(props)=>{
//     return (
//         <>
//         <p>Hello i am a {props.name}</p>
//         <button onClick={props.eventClick}>Click me</button>
//         </>
//     )
// }

// export default ParentComponent;

//props are immutable
// const ParentComponent=()=>{
//         const name="react"
//         return (
//             <>
//             <ChildComponent name={name}/>
            
//             </>
//         )
//     }
//  const ChildComponent=(props)=>{
//         props.name+="updated"
//         return (
//             <>
//                 <p>Hello i am {props.name}</p>
//             </>
//         )
//     }
//  export default ParentComponent;
