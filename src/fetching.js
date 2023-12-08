import React, {useEffect,useState} from "react";

function DataFectchingComponent(){
    const[data,setData]=useState(null)

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await fetch("https://jsonplaceholder.typicode.com/users")
                const result=await response.json()
                
                setData(result)
            }
            catch(error){
                console.error("error in fetching data:",error)
            }
        }
        fetchData();
    },[])
    
    return (
        <>
        <div>
            {data ? 
            (data.map((item)=><p key={item.id}>{item.name}</p>)
            ) : (<p>Loading.........</p>
            )}
        </div>

        </>
    )
}
export default DataFectchingComponent;