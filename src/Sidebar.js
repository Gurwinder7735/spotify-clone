import React from 'react'
import './Sidebar.css'
import Sidebaroption from './Sidebaroption'
import HomeIcon from '@material-ui/icons/Home';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {useSelector} from 'react-redux'

function Sidebar() {

    const playlists = useSelector(state => state.playlists)
    // console.log(playlists);
    return (
        <div className="sidebar">
            <img
            className="logo"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"></img>
            <Sidebaroption title="Home" Icon={HomeIcon}/>
            <Sidebaroption title="Search" Icon={SearchIcon}/>
            <Sidebaroption title="Your Library" Icon={LibraryMusicIcon}/>
            <br/>
            <strong className="sidebar-title">PLAYLISTS</strong>
            <hr></hr>
            
            {
                    playlists.items?.map(playlist => {
                    return <Sidebaroption title={playlist.name}/>              

                    
                })
            }
        </div>
    )
}

export default Sidebar
