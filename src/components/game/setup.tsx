import * as React from 'react'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'

import { Title  } from 'components/elements'
import { upper  } from 'libraries'

import { config } from '../../../config'

export interface Props {
    onStartClick: (resource: string, player: number) => void
}

export default (props: Props) => {
    const {onStartClick} = props
    const [resource, setResource] = React.useState(Object.keys(config.resources)[0])
    const [players, setPlayers] = React.useState(config.minPlayers)

    // dynamically construct the resource choices
    const resourcesDom: Array<any> = []
    Object.keys(config.resources).forEach((key: string) => (
        resourcesDom.push(<ToggleButton key={`resource-${key}`} value={key} aria-label={`resource-${key}`}>{upper(key)}</ToggleButton>)
    ))

    // dynamically construct the players choices
    const playersDom: Array<any> = []
    for(let key = config.minPlayers; key <= config.maxPlayers; key++){
        playersDom.push(<ToggleButton key={`players-${key}`} value={key} aria-label={`players-${key}`}>{key}</ToggleButton>)
    }

    return (
        <Grid item>
            <Title>Select your resource</Title>
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
            <Title>And how many players to play</Title>
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
            <Title>Then</Title>
            <Grid
                container
                justify="center"
            >
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => onStartClick(resource, players)}
                >
                    Play!
                </Button>
            </Grid>
        </Grid>
    )
}