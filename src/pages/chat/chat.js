import React, { useEffect, useReducer } from 'react';
import 'react-chat-elements/dist/main.css';
// MessageBox component
import { MessageList, ChatList } from 'react-chat-elements'

function Chat() {

    // const [state, dispatch] = useReducer(reducer, {
    //     data: null,
    //     error: null
    // })

    //render, rerender 후(화면이 다 그려진 후에 발생)
    useEffect(() => {
        // const subscription = props.source.subscribe();
        console.log("useEffect")
        // return () => {
        //     subscription.unsubscribe();
        // }
    },[]);

    
    return (

<ChatList
    className='chat-list'
    dataSource={[
        {
            avatar: 'https://facebook.github.io/react/img/logo.svg',
            alt: 'Reactjs',
            title: 'Facebook',
            subtitle: 'What are you doing?',
            date: new Date(),
            unread: 0,
        }
    ]} />
        
    )
}

// function mapStateToProps(state) {
//     return {}
// }

export default Chat;