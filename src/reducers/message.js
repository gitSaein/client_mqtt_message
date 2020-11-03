import { SEND_MESSAGE } from '../actions/actionType'

const initialState = {
    message:[]
}

export default function(state = initialState, action){
    switch (action.type) {
        case SEND_MESSAGE:{
            return {
            ...state
        };    
    }
        default:
            return state;
    }
}