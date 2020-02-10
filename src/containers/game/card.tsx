import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'store'
import Card from 'components/game/Card'

import { config } from '../../../config'

const mapStateToProps = (state: RootState, ownProps: any) => {
    let card: object
    let loading = true
    let winner = false
    if (state.game.rounds.length) {
        const currentRound: number = state.game.rounds.length - 1
        const currentPlayer = `player${ownProps.player}`
        card = state.game.rounds[currentRound][currentPlayer].card
        loading = state.game.rounds[currentRound][currentPlayer].loading
        winner = state.game.rounds[currentRound][currentPlayer].winner
    }

    return {
        card,
        loading,
        resource: state.game.setup.resource,
        icon: config.resources[state.game.setup.resource].icon,
        winner,
    }
}

export default connect(
    mapStateToProps,
    null,
)(Card)
