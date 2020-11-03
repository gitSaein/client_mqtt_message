import { SEND_MESSAGE } from './actionType'

export const send_message = data => ({
    
    type: SEND_MESSAGE,
    payload: {
        message
    }
    
});