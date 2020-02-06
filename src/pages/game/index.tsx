import * as React from 'react'
import { connect } from 'react-redux'

import Round from 'containers/game/round'
import Setup from 'containers/game/setup'
import { RootState } from 'store'

interface GameProps {
    ready: boolean
}

const Game = (props: GameProps) => {
    return props.ready ? <Round/> : <Setup/>
}

const mapStateToProps = (state: RootState) => ({
    ready: !!(state.game.setup.resource && state.game.setup.players)
})

export default connect(
    mapStateToProps,
    null
)(Game)