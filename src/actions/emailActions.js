import {ADD_EMAIL,GET_INBOX_EMAIL, GET_DELETED_EMAIL, GET_SPAM_EMAIL, DELETE_EMAIL, SPAM_EMAIL} from './types.js';


export const addEmail = (email) => dispatch =>{
    dispatch({type:ADD_EMAIL,email:email})
}

export const getEmails = () => dispatch =>{
    return dispatch({type:GET_INBOX_EMAIL})
}

export const getSpamEmails = (email) => dispatch =>{
    return dispatch({type:GET_SPAM_EMAIL})
}

export const getDeletedEmails = (email) => dispatch =>{
    return dispatch({type:GET_DELETED_EMAIL})
}

export const deleteEmail = (email) => dispatch =>{
    return dispatch({type:DELETE_EMAIL,email:email})
}

export const spamEmail = (email) => dispatch =>{
    return dispatch({type:SPAM_EMAIL,email:email})
}