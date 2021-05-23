import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState("")
  const handleSubmit =  async (e) => {
    e.preventDefault();
    const authObject = {
      "Project-ID": "26ecd057-b932-48fd-acd3-11589b7edab0",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats",{headers:authObject})
      localStorage.setItem('username',username)
      localStorage.setItem('password',password)
      window.location.reload()
    } catch (error) {
      setError('Sorry! Incorrect credentials!!!!')
    }
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <input
            type="password"
            className="input"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <span className="error">{Error}</span>
        </form>
      </div>
    </div>
  );
}

export default Login;
