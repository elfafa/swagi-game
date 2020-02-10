import * as React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

const styles = {
    // will be aligned to the left side
    homeButton: {
        width: '45px',
    },
    // will be aligned in the center
    title: {
        width: '100%',
        textAlign: 'center',
    },
    // will be aligned to the right side
    historyButton: {
        width: '45px',
        marginLeft: 'auto',
    },
}

export default () => (
    <AppBar position="static">
        <Toolbar variant="dense">
            <div style={styles.homeButton as React.CSSProperties}>
                <Tooltip title="Home">
                    <IconButton edge="start" color="inherit" aria-label="menu" href="/">
                        <Icon>home</Icon>
                    </IconButton>
                </Tooltip>
            </div>
            <div style={styles.title as React.CSSProperties}>
                <Typography variant="h6" color="inherit">
                    SWAPI Game
                </Typography>
            </div>
            <div style={styles.historyButton as React.CSSProperties}>
                <Tooltip title="History">
                    <IconButton edge="end" color="inherit" aria-label="menu" href="/history">
                        <Icon>history</Icon>
                    </IconButton>
                </Tooltip>
            </div>
        </Toolbar>
    </AppBar>
)
