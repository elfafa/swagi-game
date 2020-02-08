import * as React from 'react'
import { useEffect  } from 'react'

import Button from '@material-ui/core/Button'
import Grid, { GridSize } from '@material-ui/core/Grid'

import { Stats } from 'libraries'
import Card from 'containers/game/card'

export interface RoundProps {
    players: number,
    stats: Stats,
    onNewRound: () => void,
    onEndGame: () => void
}

export default (props: RoundProps) => {
    const { players, stats, onNewRound, onEndGame } = props

    useEffect(() => { onNewRound() }, [])
    useEffect(() => () => { onEndGame() }, [])

    let cardBlocks = []
    for (let player = 1; player <= players; player++) {
        cardBlocks.push(
            <Grid
                key={`player${player}`}
                item
                xs={12}
                sm={6}
                md={(12 / players) as GridSize}
            >
                <Card player={player} stats={stats[`player${player}`]}/>
            </Grid>
        )
    }

    return (
        <>
            <Grid
                key="button"
                container
                justify="center"
            >
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={onNewRound}
                >
                    Play a new round
                </Button>
            </Grid>,
            <Grid
                key="cards"
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
            >
                {cardBlocks}
            </Grid>
        </>
    )
}