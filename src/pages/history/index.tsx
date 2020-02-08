import * as React from 'react'

import Grid from '@material-ui/core/Grid'

import { Title } from 'components/elements'
import List from 'components/history/List'

export default () => (
    <Grid item>
        <Grid 
            container
            justify="center"
            direction="column"
            alignItems="center"
        >
            <Title>History of games</Title>
            <List/>
        </Grid>
    </Grid>
)