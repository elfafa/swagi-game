import * as React from 'react'
import { useEffect  } from 'react'

import Grid from '@material-ui/core/Grid'

import Card from 'containers/game/card'

export interface RoundProps {
    players: number,
    onNewRound: () => void
}

export default (props: RoundProps) => {
    const { players, onNewRound } = props

    useEffect(() => { onNewRound() }, [])

    let cardBlocks = []
    for (let player = 1; player <= players; player++) {
        cardBlocks.push(
            <Grid
                key={'player-'+player}
                item
                xs={12}
                sm={'auto'}
            >
                <Card player={player}/>
            </Grid>
        )
    }

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            {cardBlocks}
        </Grid>
    )
}