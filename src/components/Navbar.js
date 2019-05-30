import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom'

const NavBar = () =>
{
    return(
        <div>
            <AppBar className="Nav" position="static">
                <Toolbar>
                    <Typography variant="h5" color="inherit">
                        <Link className="NavHome" to={`/`} >Star Wars Persons API</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar

