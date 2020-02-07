import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { Round } from 'libraries/types'
import { RootState } from 'store'
import Card from 'components/game/card'

import { config } from '../../../config'

const mapStateToProps = (state: RootState, ownProps: any) => {
    let card: object
    let loading: boolean = true
    if (state.game.rounds.length) {
        const currentRound: number = state.game.rounds.length-1
        const currentPlayer: string = `player_${ownProps.player}`
        card = state.game.rounds[currentRound][currentPlayer].card
        loading = state.game.rounds[currentRound][currentPlayer].loading
    }

    return {
        card: card,
        loading: loading,
        resource: state.game.setup.resource,
        icon: config.resources[state.game.setup.resource].icon
    }
}

export default connect(
    mapStateToProps,
    null
)(Card)