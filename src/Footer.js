import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { SkipNext } from '@material-ui/icons';
import {Grid, Slider} from "@material-ui/core"
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer() {
    return (
        <div className="footer">
           <div className="footer-left">
               <img src="https://yt3.ggpht.com/yti/ANoDKi4epfmEGiQzGg7WtHEdRe3YZvlL9p78Db5eJA=s88-c-k-c0x00ffffff-no-rj-mo" alt="" className="footer-albumlogo"></img>
               <div className="footer-songinfo">
                  <h4>Desire</h4>
                  <p>Prabh Gill</p>
               </div>
           </div>
           <div className="footer-center">
               <ShuffleIcon className="footer-green"/>
               <SkipPreviousIcon className="footer-icon"/>
               <PlayCircleOutlineIcon fontSize="large" className="footer-icon"/>
               <SkipNext className="footer-icon"/>
               <RepeatIcon className="footer-green"/>
           </div>
           <div className="footer-right">
               <Grid container spacing={2}>
                  <Grid item>
                     <PlaylistPlayIcon/>
                  </Grid>
                  <Grid item>
                     <VolumeDownIcon/>
                  </Grid>
                  <Grid item xs>
                     <Slider/>
                  </Grid>
               </Grid>
           </div>
        </div>
    )
}

export default Footer
