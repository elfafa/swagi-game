import * as React from 'react'
import { useState } from 'react'

import Grid from '@material-ui/core/Grid'

export interface CardProps {}

export const Card = (props: CardProps) => {
    const [resource, setResource] = useState('person')
    const [players, setPlayers] = useState(2)

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid
                item
            >
            </Grid>
        </Grid>
    )
}