import React from 'react'
import './Body.css'
import Header from './Header'
import SongRow from "./SongRow";
import { useSelector } from "react-redux";
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

function Body({spotify}) {
    const discoverWeekly = useSelector(state => state.discoverWeekly)
    console.log(discoverWeekly);
    return (
        <div className="body">
            <Header spotify={spotify}/>
            <div className="body-info">
               <img src={discoverWeekly?.images[0].url} alt=""></img>
               <div className="body-info-text">
                   <strong>PLAYLIST</strong>
                   <h2>Discover Weekly</h2>
                   <p>{discoverWeekly?.description}</p>
               </div>
            </div>

            <div className="body-songs">
               <div className="body-icons">
                    <PlayCircleFilledIcon className="body-shuffle"/>
                    <FavoriteIcon className="large"/>
                    <MoreHorizIcon/>
               </div>
               {
                   discoverWeekly?.tracks.items.map(item=>{
                      return <SongRow track={item.track}/>
                   })
               }

               
            </div>
        </div>
    )
}

export default Body
