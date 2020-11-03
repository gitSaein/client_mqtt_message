import React, { useEffect } from 'react';
import {addResponseMessage, Widget} from 'react-chat-widget'

import 'react-chat-widget/lib/styles.css'

function Chat() {
    useEffect(() => {
        addResponseMessage("welcome to thiw awesome chat!")
        addResponseMessage("welcome to thiw awesome chat!")
        addResponseMessage("welcome to thiw awesome chat!")
    },[])
    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`)
        //addResponseMessage(response)
    }

    return (
        <div className="App">
            <Widget 
            title="title"
            subtitle="subtitle"
            handleNewUserMessage={handleNewUserMessage}
            />
        </div>
    )
}

export default Chat;