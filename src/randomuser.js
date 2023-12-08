import React ,{useEffect , useState} from "react";

const RandomUserApp=()=>{
    const [users,setUsers]=useState([])

    useEffect(()=>{

    const fetchRandomUsers=async ()=>{
        try{
            const response=await fetch("https://randomuser.me/api/?results=5")
            const data=await response.json()

            setUsers(data.results)
        }
        catch(error){
            console.error("Error in fecthing data",error)
            setUsers([])
        }
    }
    fetchRandomUsers();

    return ()=> {
        setUsers([])
    }
},[])

    return (
    <div>
        <h2>Random users Application</h2>
        {users.length > 0 ?(
               <ul>
                    {users.map((user,index)=>(
                        <li key={index}>
                            <img src={user.picture.thumbnail} alt="user" />
                            <p>name:{user.name.first}</p>
                            <p>email:{user.email}</p>
                        </li>
                    ))

                    }
               </ul>
            ) : (
                <p>Loading.................</p>
            )
        }



    </div>
    )
}

export default RandomUserApp;