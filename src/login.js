import React from "react";
import "./login.css"

const App=()=>{
    const handleLogin= ()=>{
        console.log("logging in .........................")
    }
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <label htmlFor="username">username</label>
                    <input type="text" id="username" placeholder="enter your username" ></input>
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" placeholder="enter your password"></input>
                    <button type="button" onClick={handleLogin}>Login</button>
                </form>
                
            </div>
        </div>

    )
}

export default App;