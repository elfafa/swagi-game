import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { startGame } from 'store/game/actions'
import { GameState } from 'store/game/types'
import Setup from 'components/game/Setup'

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onStartClick: (resource: string, players: number) => dispatch(startGame(resource, players))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Setup)