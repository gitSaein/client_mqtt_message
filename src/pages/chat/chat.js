import React, { useEffect, useReducer } from 'react';
import {addResponseMessage, Widget} from 'react-chat-widget';
import { connect } from 'react-redux';
import axios from 'axios';

import 'react-chat-widget/lib/styles.css'

function Chat() {

    const [] = useReducer(reducer, {
        data: null,
        error: null
    })

    useEffect(() => {
        addResponseMessage("welcome to thiw awesome chat!")
    },[])

    const handleNewUserMessage = async (newMessage) => {
        console.log(`New message incoming! ${newMessage}`)
        try {
            
        } catch (error) {
            
        }
    }

    const {} = state

    if (error) return <div>에러가 발생했습니다 {error}</div>;
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

export default connect(Chat);