import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core'
import {useSelector} from 'react-redux'

function Header() {
    const user = useSelector(state => state.user)
    console.log(user);
    return (
        <div className="header">
            <div className="header-left">
                <SearchIcon/>
                <input placeholder="Search for Artists,Songs,Albums"></input>
            </div>
            <div className="header-right">
               <Avatar src={user?.images[0]} alt={user?.display_name}/>
               <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
