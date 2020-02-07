import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { Round } from 'libraries'
import { RootState } from 'store'
import Card from 'components/game/card'

import { config } from '../../../config'

const mapStateToProps = (state: RootState, ownProps: any) => {
    let card: object
    let loading: boolean = true
    let winner: boolean = false
    if (state.game.rounds.length) {
        const currentRound: number = state.game.rounds.length-1
        const currentPlayer: string = `player${ownProps.player}`
        card = state.game.rounds[currentRound][currentPlayer].card
        loading = state.game.rounds[currentRound][currentPlayer].loading
        winner = state.game.rounds[currentRound][currentPlayer].winner
    }

    return {
        card: card,
        loading: loading,
        resource: state.game.setup.resource,
        icon: config.resources[state.game.setup.resource].icon,
        winner: winner,
    }
}

export default connect(
    mapStateToProps,
    null
)(Card)