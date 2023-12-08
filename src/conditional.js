import React,{useEffect,useState} from "react";

// function ConditionalRendering(){
//     const [isVisible,setIsVisible]=useState(false);

//     useEffect(()=>{
//         console.log("component is",isVisible ? "visible" : "hidden")
//     },[isVisible])

//     return (
//         <div>
//             <button onClick={()=> setIsVisible(!isVisible)}>Toggle visibility</button>
//             {isVisible && <p>This content is Conditionally Rendered</p>}
//         </div>
//     );

// }
// export default ConditionalRendering;

//----------------ex:unmount,update & mounting phase
// function MyComponent(){
//     const[count,setCount]=useState(0)
//     useEffect(()=>{
//         const intervalid=setInterval(()=>{
//             setCount((preCount)=>preCount+1)
//         },1000)
//         return ()=>{
//             clearInterval(intervalid)
//         }
//     })
//     return <div>{count} second elapsed</div>
// }
// export default MyComponent;



