import React, { useState } from "react";

const Login = () => {
  const[userName,setUserName] = useState();
  const [password,setPassword] = useState();
  const [message,setmessage] = useState();
    // console.log(userName)
    // let message = null
  const handleForm = (e) =>{
    e.preventDefault()
    if(userName === "user" && password === "password"){
        setmessage("Welcome, user!")
    }
    else{
        setmessage("Invalid username or password")
    }
  }
  return (
    <div>
      <h2>Login Page</h2>
      <h5>{message}</h5>
      
      <form onSubmit={handleForm}>
        <div>
          <label>Username:</label>
          <input type="text"  onChange={(e)=>setUserName(e.target.value)} required/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)} required/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
