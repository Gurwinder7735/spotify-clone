import {SET_USER,SET_TOKEN,SET_PLAYLISTS,SET_DISCOVER_WEEKLY} from '../Redux/actionType'

const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    discoverWeekly: null
    // token: 'BQCyhCVtYoPb7bzBu4pvuFAU2OrIqAV7C6C4IZVF-Pgy47uXCZouNMRSNOD-DsI-CCIPRVAK83T8AioCel9kb5TkerpJwUbNHwyVfA6l4VDIyBXVvLZJZ2im8_D4pKtfI3XohNXFi6tkPdssX5NZboeWbl3eZWVC2JTPxARLZldc23cN'
}

const reducer = (state=initialState,action)=>{
   
    switch (action.type) {
           case SET_USER:
              return {
                ...state,
                user: action.payload
            };        
    
            case SET_TOKEN:
                console.log(action.paylod);
                return {
                    ...state,
                    token: action.payload
            };      
            
            case SET_PLAYLISTS:
                return {
                    ...state,
                    playlists: action.payload
                }

            case SET_DISCOVER_WEEKLY:
                return{
                    ...state,
                     discoverWeekly: action.payload
                }
        
        default:
            return state;
           
    }
}

export default reducer