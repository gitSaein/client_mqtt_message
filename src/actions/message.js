import { SEND_MESSAGE } from './actionType'

export const send_message = data => {
    return{
        type: SEND_MESSAGE,
        payload: {
            message : data
        }
    }

};