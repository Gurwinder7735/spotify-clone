import {SET_USER,SET_TOKEN} from '../Redux/actionType'

export const setUser = (data)=>{
    return{
        type: SET_USER,
        payload: data
    }
}

export const setToken = (data)=>{
    return{
        type: SET_TOKEN,
        payload: data
    }
}