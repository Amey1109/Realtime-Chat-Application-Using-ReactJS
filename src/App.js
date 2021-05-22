import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import './App.css'
import ChatFeed from "./components/ChatFeed"
function App() {
    return (
        <div>
            <ChatEngine
            height = "100vh"
            projectID= "26ecd057-b932-48fd-acd3-11589b7edab0"
            userName = "admin"
            userSecret = "admin"
            renderChatFeed = {(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
            />
        </div>
    )
}

export default App
