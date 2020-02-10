import * as React from 'react'

import Button from '@material-ui/core/Button'
import Grid, { GridSize } from '@material-ui/core/Grid'

import Card from 'containers/game/Card'
import { Stats } from 'libraries'

export interface Props {
    players: number,
    stats: Stats,
    onNewRound: () => void,
    onEndGame: () => void
}

export default (props: Props) => {
    const { players, stats, onNewRound, onEndGame } = props

    React.useEffect(() => { onNewRound() }, []) // start new round when mount
    React.useEffect(() => () => { onEndGame() }, []) // end the game when unmount

    let cardBlocks = []
    for (let player = 1; player <= players; player++) {
        cardBlocks.push(
            <Grid
                data-testid="card" 
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
                    data-testid="play-btn"
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