import * as React from 'react'
import { useState } from 'react'

import Grid from '@material-ui/core/Grid'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'

import { PrimaryButton, BackButton, Title  } from 'components/elements'

export interface GameProps {}

export const Game = (props: GameProps) => {
    const [resource, setResource] = useState('person')
    const [players, setPlayers] = useState(2)

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Title>Select the game to play</Title>
            <br/>
            <Title>Play with</Title>
            <ToggleButtonGroup
                value={resource}
                exclusive
                onChange={(event, value) => setResource(value)}
                aria-label="resource choice"
            >
                <ToggleButton value="person" aria-label="resource person">Person</ToggleButton>
                <ToggleButton value="starship" aria-label="resource starship">Starship</ToggleButton>
            </ToggleButtonGroup>
            <Title>How many players</Title>
            <ToggleButtonGroup
                value={players}
                exclusive
                onChange={(event, value) => setPlayers(value)}
                aria-label="players choice"
            >
                <ToggleButton value="2" aria-label="two players">2</ToggleButton>
                <ToggleButton value="3" aria-label="three players">3</ToggleButton>
                <ToggleButton value="4" aria-label="four players">4</ToggleButton>
            </ToggleButtonGroup>
        </Grid>
    )
}