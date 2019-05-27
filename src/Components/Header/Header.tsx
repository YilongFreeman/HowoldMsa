import { AppBar } from '@material-ui/core/';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import * as React from 'react'
import './Header.css'


export default function Header() {
    return (

        <div className="header">
        <AppBar position="sticky" color="default">

        <Toolbar variant="dense">
        <Link to="/Howold" className="headerText">
        <Tab label="How Old? " />
        </Link>
        <Link to="/Contact" className="headerText">
        <Tab label="Contact" />
        </Link>
        </Toolbar>
      
       </AppBar>
           
        </div>
    )
}