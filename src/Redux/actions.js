import {SET_USER,SET_TOKEN,SET_PLAYLISTS,SET_DISCOVER_WEEKLY} from '../Redux/actionType'

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

export const setPlaylists = (data)=>{
    return{
        type: SET_PLAYLISTS,
        payload: data
    }
}

export const setDiscoverWeekly = (data)=>{
    return{
        type: SET_DISCOVER_WEEKLY,
        payload: data
    }
}