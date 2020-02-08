import * as React from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import { Title } from 'components/elements'

export default () => (
    <Grid item>
        <Grid 
            container
            justify="center"
            direction="column"
            alignItems="center"
        >
            <Title>Welcome to a fun SWAPI Game!</Title>
            <Box m={2}>
                <Button variant="contained" color="primary" size="large" href="/game">Play a new game</Button>
            </Box>
        </Grid>
    </Grid>
)