import React,{useState,useEffect} from 'react'
import './App.css';
import Login from "./Login";
import Player from './Player'
import {getTokenFromUrl} from './spotify'
import SpotifyWebApi from "spotify-web-api-js";

import {useSelector,useDispatch} from 'react-redux'
import { setUser,setToken } from "./Redux/actions";

const spotify = new SpotifyWebApi();

function App() {

  const {user,token} = useSelector(state => state)
  const dispatch = useDispatch()


  // const [token, settoken] = useState('')

  useEffect(()=>{    
      const hash = getTokenFromUrl();
      window.location.hash = ""    
      const _token = hash.access_token;
     if(_token){
console.log('_token',_token)
      spotify.setAccessToken(_token);
        dispatch(setToken(_token))
       

        spotify.getMe().then(user => {
          dispatch(setUser(user))
        })
     }
    
    
  },[])

  console.log('token',token);
  console.log('user',user);

 
  // spotify.getUserPlaylists().then(playlist =>{
  //   console.log(playlist);
  // })



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
