import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import './App.css'
import ChatFeed from "./components/ChatFeed"
import Login from './components/Login'
function App() {
    if (!localStorage.getItem('username')) return <Login/>
    return (
        
            <ChatEngine
            height = "100vh"
            projectID= "26ecd057-b932-48fd-acd3-11589b7edab0"
            userName = {localStorage.username}
            userSecret = {localStorage.password}
            renderChatFeed = {(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
            />
        
    )
}

export default App
