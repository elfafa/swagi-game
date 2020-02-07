import * as React from 'react'
import { useEffect  } from 'react'

import Grid, { GridSize } from '@material-ui/core/Grid'

import { Stats } from 'libraries/types'
import Card from 'containers/game/card'

export interface RoundProps {
    players: number,
    stats: Stats,
    onNewRound: () => void
}

export default (props: RoundProps) => {
    const { players, stats, onNewRound } = props

    useEffect(() => { onNewRound() }, [])

    let cardBlocks = []
    for (let player = 1; player <= players; player++) {
        cardBlocks.push(
            <Grid
                key={`player-${player}`}
                item
                xs={12}
                sm={6}
                md={(12 / players) as GridSize}
            >
                <Card player={player} stats={stats[`player-${player}`]}/>
            </Grid>
        )
    }

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="stretch"
            spacing={2}
        >
            {cardBlocks}
        </Grid>
    )
}