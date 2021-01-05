import React,{useState,useEffect} from 'react'
import './App.css';
import Login from "./Login";
import Player from './Player'
import {getTokenFromUrl} from './spotify'
import SpotifyWebApi from "spotify-web-api-js";

import {useSelector,useDispatch} from 'react-redux'
import { setUser,setToken,setPlaylists,setDiscoverWeekly } from "./Redux/actions";

const spotify = new SpotifyWebApi();

function App() {

  const {user,token,playlists} = useSelector(state => state)
  const dispatch = useDispatch()


  // const [token, settoken] = useState('')

  useEffect(()=>{    
      const hash = getTokenFromUrl();
      window.location.hash = ""    
      const _token = hash.access_token;
     if(_token){
      spotify.setAccessToken(_token);
        dispatch(setToken(_token))
       

        spotify.getMe().then(user => {
          dispatch(setUser(user))
        })

        spotify.getUserPlaylists().then(playlist =>{
          dispatch(setPlaylists(playlist))
        })  

        // 37i9dQZEVXcGFTFK64psRl
       spotify.getPlaylist('37i9dQZEVXcGFTFK64psRl').then(playlist=>{
         dispatch(setDiscoverWeekly(playlist))
       })
        
     }

    
    
    
  },[])


 
 


  return (
    <div className="App">
      {
        token ?(
          <Player spotify={spotify}/>
        ): (
          <Login/>
        )
      }
     {/* <Login/> */}
    </div>
  );
}

export default App;
