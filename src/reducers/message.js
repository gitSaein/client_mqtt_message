import { SEND_MESSAGE } from '../actions/actionType'

const initialState = {
    messageList:[]
}

export default function(state = initialState, action){
    switch (action.type) {
        case SEND_MESSAGE:{
            return {
            ...state, messageList: state.messageList
        };    
    }
        default:
            return state;
    }
}