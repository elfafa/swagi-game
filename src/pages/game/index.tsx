import * as React from 'react'
import { connect } from 'react-redux'

import Round from 'containers/game/Round'
import Setup from 'containers/game/Setup'
import { RootState } from 'store'

interface GameProps {
    ready: boolean;
}

const Game = (props: GameProps) => (props.ready ? <Round key="round" /> : <Setup key="setup" />)

const mapStateToProps = (state: RootState) => ({
    ready: !!(state.game.setup.resource && state.game.setup.players),
})

export default connect(
    mapStateToProps,
    null,
)(Game)
