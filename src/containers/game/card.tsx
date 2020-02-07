import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { RootState } from 'store'
import Card from 'components/game/card'

const mapStateToProps = (state: RootState, ownProps: any) => {
    const currentRound = state.game.rounds.length-1
    let card
    let loading = true
    if (-1 < currentRound) {
        card = state.game.rounds[currentRound]['player_'+ownProps.player].card
        loading = state.game.rounds[currentRound]['player_'+ownProps.player].loading
    }

    return {
        card: card,
        loading: loading,
        resource: state.game.setup.resource
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card)