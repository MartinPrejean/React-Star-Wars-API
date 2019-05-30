import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const Footer = () =>
{
    return(
        <div>
            <AppBar position="static" color="primary" className="Footer">
                <Toolbar>
                    No more results
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Footer
