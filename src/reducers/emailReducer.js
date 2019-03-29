import {GET_INBOX_EMAIL, GET_DELETED_EMAIL, GET_SPAM_EMAIL, DELETE_EMAIL, SPAM_EMAIL} from '../actions/types.js';
import inboxEmails from '../utils/inbox.json';
import defSpamEmails from '../utils/spam.json';


const initialState = {
    deletedEmails:[],
    emails:inboxEmails,
    spamEmails: defSpamEmails
}

export default function(state=initialState, action) {
    switch(action.type){
        case GET_INBOX_EMAIL :
        return {
            ...state,
        };
        case GET_SPAM_EMAIL :
        return {
            ...state
        };
        case GET_DELETED_EMAIL :
        return {
            ...state
        };
        case DELETE_EMAIL:
        const newEmails = state.emails.filter(email => email.mId !== action.email.mId);
        const removedEmails = [action.email, state.deletedEmails]
        return{...state,emails:newEmails, deletedEmails:removedEmails}

        case SPAM_EMAIL:
        const updatedEmails = state.emails.filter(email => email.mId !== action.email.mId);
        const spam = [action.email, state.spamEmails]
        return{...state,emails:updatedEmails, spamEmails:spam};

        default:
          return state;
    }
}