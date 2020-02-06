import * as React from 'react'
import { useState } from 'react'

import Grid from '@material-ui/core/Grid'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'

import { PrimaryButton, BackButton, Title  } from 'components/elements'
import { upper  } from 'libraries'

import { config } from '../../../config'

interface SetupProps {
    onStartClick: (arg0: string, arg1: number) => void
}

export default (props: SetupProps) => {
    const {onStartClick} = props
    const [resource, setResource] = useState(Object.keys(config.resources)[0])
    const [players, setPlayers] = useState(config.minPlayers)

    // dynamically construct the resource choices
    const resourcesDom: Array<any> = []
    Object.keys(config.resources).forEach((key: string) => (
        resourcesDom.push(<ToggleButton key={"resource-"+key} value={key} aria-label={"resource "+key}>{upper(key)}</ToggleButton>)
    ))

    // dynamically construct the players choices
    const playersDom: Array<any> = []
    for(let key = config.minPlayers; key <= config.maxPlayers; key++){
        playersDom.push(<ToggleButton key={"players-"+key} value={key} aria-label={"players "+key}>{key}</ToggleButton>)
    }

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
                <Title>Select the game to play</Title>
                <Title>Play with</Title>
                <Grid
                    container
                    justify="center"
                >
                    <ToggleButtonGroup
                        value={resource}
                        exclusive
                        onChange={(event, value) => setResource(value)}
                        aria-label="resource choice"
                    >
                        {resourcesDom}
                    </ToggleButtonGroup>
                </Grid>
                <Title>How many players</Title>
                <Grid
                    container
                    justify="center"
                >
                    <ToggleButtonGroup
                        value={players}
                        exclusive
                        onChange={(event, value) => setPlayers(value)}
                        aria-label="players choice"
                    >
                        {playersDom}
                    </ToggleButtonGroup>
                </Grid>
                <Grid
                    container
                    justify="center"
                >
                    <PrimaryButton onClick={() => onStartClick(resource, players)}>Play a new game</PrimaryButton>
                </Grid>
            </Grid>
        </Grid>
    )
}