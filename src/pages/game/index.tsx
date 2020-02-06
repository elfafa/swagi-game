import * as React from 'react'
import { useState } from 'react'

import Grid from '@material-ui/core/Grid'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'

import Setup from 'containers/game/setup'

export interface GameProps {}

export const Game = (props: GameProps) => {
    return (
        <Setup/>
    )
}