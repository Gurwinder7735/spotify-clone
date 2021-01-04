import {SET_USER,SET_TOKEN} from '../Redux/actionType'

const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null
}

const reducer = (state=initialState,action)=>{
   
    switch (action.type) {
           case SET_USER:
              return {
                ...state,
                user: action.payload
            };        
    
            case SET_TOKEN:
                return {
                    ...state,
                    token: action.payload
                };         
        
        default:
            return state;
           
    }
}

export default reducer